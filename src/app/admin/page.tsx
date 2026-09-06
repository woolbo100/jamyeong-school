import React from 'react';
import type { Metadata } from 'next';
import { createClient } from '@/utils/supabase/server';
import { createAdminSupabaseClient } from '@/lib/auth/admin';
import AdminDashboardClient, {
  DashboardStats,
  RecentMember,
  RecentDownload,
  RecentApplicant,
} from './AdminDashboardClient';

export const metadata: Metadata = {
  title: '관리자 대시보드 | 자명스쿨 어드민',
};

export default async function AdminDashboardPage() {
  const supabase = await createClient();
  const adminSupabase = createAdminSupabaseClient();

  // 한국 시간(Asia/Seoul) 기준 이번 달 1일 00:00:00
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();
  const firstDayOfMonth = new Date(year, month, 1).toISOString();

  // 최근 7일 전 시간
  const sevenDaysAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString();

  let totalMembers = 0;
  let newMembersThisMonth = 0;
  let recentMembers: RecentMember[] = [];

  // 1. 회원 정보 조회 (service_role client 시도)
  try {
    const { data: userData, error: userError } = await adminSupabase.auth.admin.listUsers({
      page: 1,
      perPage: 50,
    });

    if (!userError && userData?.users) {
      totalMembers = userData.users.length;
      newMembersThisMonth = userData.users.filter(
        (u) => new Date(u.created_at) >= new Date(firstDayOfMonth)
      ).length;

      recentMembers = userData.users.slice(0, 5).map((u) => ({
        id: u.id,
        name: (u.user_metadata?.full_name || u.user_metadata?.name || u.email?.split('@')[0]) as string,
        email: u.email || '',
        created_at: u.created_at,
      }));
    }
  } catch (err) {
    console.error('List users error:', err);
  }

  // 2. 이번 달 자료 다운로드 수 및 최근 다운로드
  let downloadsThisMonth = 0;
  let recentDownloads: RecentDownload[] = [];

  try {
    const { count: dlCount } = await supabase
      .from('jamyung_resource_downloads')
      .select('*', { count: 'exact', head: true })
      .gte('downloaded_at', firstDayOfMonth);

    downloadsThisMonth = dlCount || 0;

    const { data: dlList } = await supabase
      .from('jamyung_resource_downloads')
      .select(`
        id,
        downloaded_at,
        jamyung_resources (
          resource_code,
          title
        )
      `)
      .order('downloaded_at', { ascending: false })
      .limit(5);

    if (dlList) {
      recentDownloads = dlList.map((item: any) => ({
        id: item.id,
        userName: '회원',
        resourceCode: item.jamyung_resources?.resource_code || 'YT',
        resourceTitle: item.jamyung_resources?.title || '자명 교육자료',
        downloaded_at: item.downloaded_at,
      }));
    }
  } catch (err) {
    console.error('Download stats query error:', err);
  }

  // 3. 무료특강 신청자 수 및 최근 7일 신규 신청
  let totalFreeClassApplicants = 0;
  let newApplicantsLast7Days = 0;
  let recentApplicants: RecentApplicant[] = [];

  try {
    const { count: totalAppCount } = await supabase
      .from('free_class_applications')
      .select('*', { count: 'exact', head: true });

    totalFreeClassApplicants = totalAppCount || 0;

    const { count: recentAppCount } = await supabase
      .from('free_class_applications')
      .select('*', { count: 'exact', head: true })
      .gte('created_at', sevenDaysAgo);

    newApplicantsLast7Days = recentAppCount || 0;

    const { data: appList } = await supabase
      .from('free_class_applications')
      .select('id, name, class_title, status, created_at')
      .order('created_at', { ascending: false })
      .limit(5);

    if (appList) {
      recentApplicants = appList.map((a) => ({
        id: a.id,
        name: a.name,
        classTitle: a.class_title,
        status: a.status,
        created_at: a.created_at,
      }));
    }
  } catch (err) {
    console.error('Free class query error:', err);
  }

  const stats: DashboardStats = {
    totalMembers,
    newMembersThisMonth,
    downloadsThisMonth,
    totalFreeClassApplicants,
    newApplicantsLast7Days,
  };

  return (
    <AdminDashboardClient
      stats={stats}
      recentMembers={recentMembers}
      recentDownloads={recentDownloads}
      recentApplicants={recentApplicants}
    />
  );
}
