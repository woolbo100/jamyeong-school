-- ==============================================================================
-- 자명스쿨 「자명자료실」 데이터베이스 및 스토리지 설정 마이그레이션
-- ==============================================================================

-- 1. 자명자료실 메인 테이블 (jamyung_resources)
CREATE TABLE IF NOT EXISTS public.jamyung_resources (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    resource_code TEXT UNIQUE NOT NULL,                       -- 예: YT-001
    title TEXT NOT NULL,                                      -- 자료 제목
    slug TEXT UNIQUE NOT NULL,                                -- URL slug (예: ebook-checklist)
    description TEXT,                                         -- 설명
    category TEXT NOT NULL DEFAULT '기타',                    -- AI, 브랜딩, 캔바, 출판, 마인드, AI아트, 강의자료, 기타
    tags TEXT[] DEFAULT '{}',                                 -- 태그 배열
    file_path TEXT NOT NULL,                                  -- Storage 내 파일 경로
    file_name TEXT,                                           -- 원본 파일명
    file_type TEXT,                                           -- MIME type 또는 확장자 (PDF 등)
    file_size BIGINT DEFAULT 0,                               -- 파일 바이트 크기
    thumbnail_path TEXT,                                      -- 썸네일 이미지 경로
    preview_images TEXT[] DEFAULT '{}',                       -- 미리보기 이미지 경로 배열
    status TEXT NOT NULL DEFAULT 'draft'                      -- draft, published, hidden, archived
        CHECK (status IN ('draft', 'published', 'hidden', 'archived')),
    visibility TEXT NOT NULL DEFAULT 'member'                 -- public, member, student, email
        CHECK (visibility IN ('public', 'member', 'student', 'email')),
    youtube_url TEXT,                                         -- 관련 유튜브 영상 URL
    related_course_url TEXT,                                  -- 관련 강의 URL
    related_course_title TEXT,                                -- 관련 강의명
    download_count INTEGER NOT NULL DEFAULT 0,                -- 누적 다운로드 수
    is_featured BOOLEAN NOT NULL DEFAULT false,               -- 추천 자료 여부
    sort_order INTEGER NOT NULL DEFAULT 0,                    -- 정렬 순서
    published_at TIMESTAMPTZ,                                 -- 공개 일시
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- 인덱스 생성 (조회 성능 최적화)
CREATE INDEX IF NOT EXISTS idx_jamyung_resources_status ON public.jamyung_resources(status);
CREATE INDEX IF NOT EXISTS idx_jamyung_resources_category ON public.jamyung_resources(category);
CREATE INDEX IF NOT EXISTS idx_jamyung_resources_code ON public.jamyung_resources(resource_code);
CREATE INDEX IF NOT EXISTS idx_jamyung_resources_slug ON public.jamyung_resources(slug);

-- 2. 자명자료실 다운로드 로그 테이블 (jamyung_resource_downloads)
CREATE TABLE IF NOT EXISTS public.jamyung_resource_downloads (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    resource_id UUID NOT NULL REFERENCES public.jamyung_resources(id) ON DELETE CASCADE,
    user_id UUID,                                             -- 회원 다운로드 시 auth.users id
    downloaded_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    source TEXT,                                              -- 유입 출처
    utm_source TEXT,                                          -- utm_source
    utm_campaign TEXT,                                        -- utm_campaign
    referrer TEXT                                             -- referrer
);

CREATE INDEX IF NOT EXISTS idx_resource_downloads_resource_id ON public.jamyung_resource_downloads(resource_id);
CREATE INDEX IF NOT EXISTS idx_resource_downloads_user_id ON public.jamyung_resource_downloads(user_id);

-- 3. RLS (Row Level Security) 설정
ALTER TABLE public.jamyung_resources ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.jamyung_resource_downloads ENABLE ROW LEVEL SECURITY;

-- 3.1 일반 사용자 (비회원/회원): published 상태인 자료만 조회 가능
DROP POLICY IF EXISTS "Public users can view published resources" ON public.jamyung_resources;
CREATE POLICY "Public users can view published resources"
    ON public.jamyung_resources
    FOR SELECT
    USING (status = 'published');

-- 3.2 관리자: 모든 자료 조회/추가/수정/삭제 가능 (service_role 또는 admin 권한)
DROP POLICY IF EXISTS "Admins have full access to resources" ON public.jamyung_resources;
CREATE POLICY "Admins have full access to resources"
    ON public.jamyung_resources
    FOR ALL
    USING (auth.role() = 'service_role' OR auth.jwt() ->> 'email' IN ('buzasun@naver.com') OR (auth.jwt() -> 'app_metadata' ->> 'role') = 'admin');

-- 3.3 다운로드 로그: 인증된 사용자 또는 익명 사용자가 INSERT 가능
DROP POLICY IF EXISTS "Anyone can insert download logs" ON public.jamyung_resource_downloads;
CREATE POLICY "Anyone can insert download logs"
    ON public.jamyung_resource_downloads
    FOR INSERT
    WITH CHECK (true);

-- 3.4 관리자: 다운로드 로그 조회 가능
DROP POLICY IF EXISTS "Admins can view download logs" ON public.jamyung_resource_downloads;
CREATE POLICY "Admins can view download logs"
    ON public.jamyung_resource_downloads
    FOR SELECT
    USING (auth.role() = 'service_role' OR auth.jwt() ->> 'email' IN ('buzasun@naver.com') OR (auth.jwt() -> 'app_metadata' ->> 'role') = 'admin');

-- 4. Storage 버킷 설정 (jamyung-resources)
INSERT INTO storage.buckets (id, name, public)
VALUES ('jamyung-resources', 'jamyung-resources', false)
ON CONFLICT (id) DO NOTHING;

-- 5. Storage RLS 정책
-- 5.1 관리자만 파일 업로드/수정/삭제 가능
DROP POLICY IF EXISTS "Admin upload resource files" ON storage.objects;
CREATE POLICY "Admin upload resource files"
    ON storage.objects
    FOR ALL
    TO authenticated
    USING (bucket_id = 'jamyung-resources' AND (auth.jwt() ->> 'email' IN ('buzasun@naver.com') OR (auth.jwt() -> 'app_metadata' ->> 'role') = 'admin'));
