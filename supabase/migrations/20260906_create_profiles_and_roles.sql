-- ==========================================================
-- 자명스쿨 profiles 테이블 및 관리자(role) 권한 관리 시스템
-- ==========================================================

-- 1. profiles 테이블 생성
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT,
  name TEXT,
  avatar_url TEXT,
  role TEXT NOT NULL DEFAULT 'user' CHECK (role IN ('user', 'admin')),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 2. 인덱스 생성 (조회 성능 최적화)
CREATE INDEX IF NOT EXISTS idx_profiles_role ON public.profiles(role);
CREATE INDEX IF NOT EXISTS idx_profiles_email ON public.profiles(email);

-- 3. RLS (Row Level Security) 활성화
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- 4. 관리자 판별 헬퍼 함수 (RLS 재귀 방지용 SECURITY DEFINER 함수)
CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS BOOLEAN AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1 FROM public.profiles
    WHERE id = auth.uid() AND role = 'admin'
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER STABLE;

-- 5. RLS 정책 설정
-- 조회: 본인 프로필 조회 가능 또는 관리자는 전체 회원 프로필 조회 가능
DROP POLICY IF EXISTS "Users can read own profile or admin reads all" ON public.profiles;
CREATE POLICY "Users can read own profile or admin reads all"
  ON public.profiles FOR SELECT
  TO authenticated
  USING (auth.uid() = id OR public.is_admin());

-- 수정: 일반 회원은 본인의 name/avatar_url 수정 가능
DROP POLICY IF EXISTS "Users can update own info" ON public.profiles;
CREATE POLICY "Users can update own info"
  ON public.profiles FOR UPDATE
  TO authenticated
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);

-- 관리자는 모든 회원 프로필 수정(권한 변경 등) 가능
DROP POLICY IF EXISTS "Admins can update all profiles" ON public.profiles;
CREATE POLICY "Admins can update all profiles"
  ON public.profiles FOR UPDATE
  TO authenticated
  USING (public.is_admin())
  WITH CHECK (public.is_admin());

-- 6. 신규 회원가입 시 profiles 자동 생성 트리거
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, email, name, role)
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(
      NEW.raw_user_meta_data->>'full_name',
      NEW.raw_user_meta_data->>'name',
      split_part(NEW.email, '@', 1)
    ),
    'user'
  )
  ON CONFLICT (id) DO UPDATE
  SET email = EXCLUDED.email,
      updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- 7. 기존 auth.users 회원들을 profiles 테이블로 일괄 동기화 (기본 role: 'user')
INSERT INTO public.profiles (id, email, name, role)
SELECT
  id,
  email,
  COALESCE(
    raw_user_meta_data->>'full_name',
    raw_user_meta_data->>'name',
    split_part(email, '@', 1)
  ),
  'user'
FROM auth.users
ON CONFLICT (id) DO NOTHING;

-- ==========================================================
-- 💡 특정 사용자에게 관리자 권한을 부여하는 방법:
-- 아래 쿼리에서 '관리자이메일@example.com' 부분을 관리자로 지정할 회원의 이메일로 변경 후 실행하세요.
--
-- UPDATE public.profiles
-- SET role = 'admin'
-- WHERE email = 'buzasun@naver.com';
-- ==========================================================
