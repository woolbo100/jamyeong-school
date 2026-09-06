import { User } from '@supabase/supabase-js';
import { createClient as createSupabaseClient } from '@supabase/supabase-js';

// 관리자 이메일 목록 (환경변수 ADMIN_EMAILS가 있으면 콤마로 분리, 없으면 기본 관리자 이메일 포함)
const DEFAULT_ADMIN_EMAILS = ['buzasun@naver.com'];

export function getAdminEmails(): string[] {
  const envEmails = process.env.ADMIN_EMAILS;
  if (!envEmails) return DEFAULT_ADMIN_EMAILS;
  return envEmails
    .split(',')
    .map((email) => email.trim().toLowerCase())
    .filter(Boolean);
}

/**
 * 주어진 Supabase User 객체가 관리자 권한을 가졌는지 검사합니다.
 * 1. user.app_metadata.role === 'admin'
 * 2. user.email이 관리자 이메일 목록에 포함되어 있는지
 */
export function isAdminUser(user: User | null | undefined): boolean {
  if (!user) return false;

  // 1. role 기반 체크
  if (user.app_metadata?.role === 'admin') {
    return true;
  }

  // 2. email 기반 체크
  const userEmail = user.email?.toLowerCase();
  if (userEmail) {
    const adminEmails = getAdminEmails();
    if (adminEmails.includes(userEmail)) {
      return true;
    }
  }

  return false;
}

/**
 * 서버 전용: Supabase Service Role 클라이언트를 생성합니다. (auth.admin API 및 RLS 바이패스 필요시 사용)
 * 키가 없으면 anon client를 fallback으로 반환합니다.
 */
export function createAdminSupabaseClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
  
  return createSupabaseClient(url, serviceKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });
}
