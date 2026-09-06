import { User, SupabaseClient } from '@supabase/supabase-js';
import { createClient as createSupabaseClient } from '@supabase/supabase-js';
import { createClient } from '@/utils/supabase/server';

/**
 * 서버 환경에서 현재 로그인한 사용자의 role이 'admin'인지 DB(profiles 테이블)에서 검사합니다.
 * - 관리자 계정을 별도로 하드코딩하지 않습니다.
 * - 코드나 환경변수에 평문 비밀번호를 저장하지 않습니다.
 * - profiles.role === 'admin' 또는 app_metadata.role === 'admin'인 사용자만 관리자 권한을 부여합니다.
 */
export async function isAdminUser(
  user: User | null | undefined,
  client?: SupabaseClient
): Promise<boolean> {
  if (!user || !user.id) return false;

  // 1. Supabase Auth app_metadata에 role이 'admin'인 경우
  if (user.app_metadata?.role === 'admin') {
    return true;
  }

  // 2. profiles 테이블의 role 컬럼이 'admin'인지 확인
  try {
    let supabase = client;
    if (!supabase) {
      if (process.env.SUPABASE_SERVICE_ROLE_KEY) {
        supabase = createAdminSupabaseClient();
      } else {
        supabase = await createClient();
      }
    }

    const { data: profile, error } = await supabase
      .from('profiles')
      .select('role')
      .eq('id', user.id)
      .maybeSingle();

    if (!error && profile?.role === 'admin') {
      return true;
    }
  } catch (err) {
    console.error('isAdminUser check error:', err);
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
