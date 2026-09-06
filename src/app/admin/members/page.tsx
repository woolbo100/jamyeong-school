import React from 'react';
import type { Metadata } from 'next';
import { createClient } from '@/utils/supabase/server';
import { createAdminSupabaseClient } from '@/lib/auth/admin';
import MembersClient, { MemberItem } from './MembersClient';

export const metadata: Metadata = {
  title: '회원관리 | 자명스쿨 어드민',
};

export default async function AdminMembersPage() {
  const supabase = await createClient();
  const adminSupabase = createAdminSupabaseClient();

  let members: MemberItem[] = [];

  try {
    // 1. profiles 테이블에서 회원 및 role 정보 조회
    const { data: profileList } = await supabase
      .from('profiles')
      .select('*')
      .order('created_at', { ascending: false });

    // 2. auth.admin에서 사용자 목록 조회 시도 (service_role 있을 때)
    let authUsers: any[] = [];
    try {
      const { data: userData } = await adminSupabase.auth.admin.listUsers({
        page: 1,
        perPage: 100,
      });
      if (userData?.users) {
        authUsers = userData.users;
      }
    } catch {
      // service role 없으면 조용히 패스
    }

    // 3. 다운로드 로그에서 유저별 다운로드 수 집계
    const { data: downloadLogs } = await supabase
      .from('jamyung_resource_downloads')
      .select('user_id');

    const downloadMap = new Map<string, number>();
    if (downloadLogs) {
      downloadLogs.forEach((dl) => {
        if (dl.user_id) {
          downloadMap.set(dl.user_id, (downloadMap.get(dl.user_id) || 0) + 1);
        }
      });
    }

    // 4. 무료특강 신청자 이메일 목록
    const { data: applicants } = await supabase
      .from('free_class_applications')
      .select('email');

    const applicantEmails = new Set((applicants || []).map((a) => a.email?.toLowerCase()));

    // profiles 기반 맵 구성
    const profileMap = new Map<string, any>();
    if (profileList) {
      profileList.forEach((p) => {
        profileMap.set(p.id, p);
      });
    }

    if (authUsers.length > 0) {
      members = authUsers.map((u) => {
        const email = u.email || '';
        const profile = profileMap.get(u.id);
        const name = (profile?.name || u.user_metadata?.full_name || u.user_metadata?.name || email.split('@')[0]) as string;
        const source = (u.user_metadata?.signup_source || u.app_metadata?.provider || 'direct') as string;
        const role = profile?.role || (u.app_metadata?.role as string) || 'user';

        return {
          id: u.id,
          name,
          email,
          created_at: u.created_at,
          last_sign_in_at: u.last_sign_in_at || null,
          signup_source: source,
          download_count: downloadMap.get(u.id) || 0,
          has_applied_free_class: applicantEmails.has(email.toLowerCase()),
          status: 'active',
          role,
        };
      });
    } else if (profileList && profileList.length > 0) {
      // auth.users 조회가 안 되더라도 profiles 테이블에 데이터가 있으면 표시
      members = profileList.map((p) => ({
        id: p.id,
        name: p.name || p.email?.split('@')[0] || '회원',
        email: p.email || '',
        created_at: p.created_at,
        last_sign_in_at: null,
        signup_source: 'direct',
        download_count: downloadMap.get(p.id) || 0,
        has_applied_free_class: applicantEmails.has((p.email || '').toLowerCase()),
        status: 'active',
        role: p.role || 'user',
      }));
    }
  } catch (err) {
    console.error('Admin members query error:', err);
  }

  return <MembersClient initialMembers={members} />;
}
