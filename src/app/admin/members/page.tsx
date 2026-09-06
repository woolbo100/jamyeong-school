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
    // 1. 회원 목록 조회
    const { data: userData, error: userError } = await adminSupabase.auth.admin.listUsers({
      page: 1,
      perPage: 100,
    });

    // 2. 다운로드 로그에서 유저별 다운로드 수 집계
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

    // 3. 무료특강 신청자 이메일 목록
    const { data: applicants } = await supabase
      .from('free_class_applications')
      .select('email');

    const applicantEmails = new Set((applicants || []).map((a) => a.email?.toLowerCase()));

    if (!userError && userData?.users) {
      members = userData.users.map((u) => {
        const email = u.email || '';
        const name = (u.user_metadata?.full_name || u.user_metadata?.name || email.split('@')[0]) as string;
        const source = (u.user_metadata?.signup_source || u.app_metadata?.provider || 'direct') as string;

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
        };
      });
    }
  } catch (err) {
    console.error('Admin members query error:', err);
  }

  return <MembersClient initialMembers={members} />;
}
