-- ==============================================================================
-- 자명스쿨 관리자센터: 무료특강 신청자 및 관리자 기능 마이그레이션
-- ==============================================================================

-- 1. 무료특강 신청자 관리 테이블 (free_class_applications)
CREATE TABLE IF NOT EXISTS public.free_class_applications (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,                                       -- 신청자 이름
    phone TEXT,                                               -- 연락처
    email TEXT NOT NULL,                                      -- 이메일
    interest_course TEXT,                                     -- 관심 과정 (예: AI브랜딩, 감성출판 등)
    class_id UUID,                                            -- 연계 특강 ID (선택)
    class_title TEXT NOT NULL DEFAULT '무료 입문 특강',        -- 신청한 특강명
    status TEXT NOT NULL DEFAULT 'applied'                    -- 상태
        CHECK (status IN ('applied', 'notified', 'expected', 'attended', 'absent', 'converted', 'cancelled')),
    memo TEXT,                                                -- 관리자 메모
    source TEXT DEFAULT 'direct',                             -- 유입 경로 (youtube, instagram, direct 등)
    utm_source TEXT,                                          -- UTM Source
    utm_campaign TEXT,                                        -- UTM Campaign
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- 인덱스 생성
CREATE INDEX IF NOT EXISTS idx_free_class_status ON public.free_class_applications(status);
CREATE INDEX IF NOT EXISTS idx_free_class_email ON public.free_class_applications(email);
CREATE INDEX IF NOT EXISTS idx_free_class_created_at ON public.free_class_applications(created_at);

-- 2. RLS (Row Level Security) 설정
ALTER TABLE public.free_class_applications ENABLE ROW LEVEL SECURITY;

-- 2.1 누구나 무료특강 신청(INSERT) 가능
DROP POLICY IF EXISTS "Anyone can apply for free class" ON public.free_class_applications;
CREATE POLICY "Anyone can apply for free class"
    ON public.free_class_applications
    FOR INSERT
    WITH CHECK (true);

-- 2.2 관리자만 신청자 목록 조회, 수정, 삭제 가능
DROP POLICY IF EXISTS "Admins have full access to free class applications" ON public.free_class_applications;
CREATE POLICY "Admins have full access to free class applications"
    ON public.free_class_applications
    FOR ALL
    USING (
        auth.role() = 'service_role' 
        OR auth.jwt() ->> 'email' IN ('buzasun@naver.com') 
        OR (auth.jwt() -> 'app_metadata' ->> 'role') = 'admin'
    );
