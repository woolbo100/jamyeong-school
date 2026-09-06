import React from 'react';
import type { Metadata } from 'next';
import { createClient } from '@/utils/supabase/server';
import ResourcesClient, { ResourceItem } from './ResourcesClient';

export const metadata: Metadata = {
  title: '자명자료실 | 자명스쿨',
  description: 'AI, 브랜딩, 캔바, 출판, 마인드 등 자명스쿨의 실전 무료 교육자료를 한곳에서 확인하세요.',
};

// DB 연결 전 또는 데이터가 없을 때 표시될 고품격 기본 샘플 자료 (Fallback)
const SAMPLE_RESOURCES: ResourceItem[] = [
  {
    id: 'sample-01',
    resource_code: 'YT-001',
    title: '전자책 기획 & 목차 완성 실전 체크리스트',
    slug: 'ebook-checklist',
    description: '나만의 경험과 통찰을 한 권의 전자책으로 만들기 위한 핵심 기획 프레임워크와 목차 설계 체크리스트입니다.',
    category: '출판',
    tags: ['전자책', '감성출판', '기획', 'AI'],
    file_path: 'samples/ebook-checklist.pdf',
    file_name: '전자책_기획_체크리스트_자명스쿨.pdf',
    file_type: 'PDF',
    file_size: 1024 * 1024 * 2,
    thumbnail_path: null,
    status: 'published',
    visibility: 'member',
    youtube_url: 'https://youtube.com',
    related_course_url: '/courses/earth',
    related_course_title: '감성출판지도사 과정',
    download_count: 142,
    is_featured: true,
    published_at: '2026-09-01T00:00:00Z',
    created_at: '2026-09-01T00:00:00Z',
  },
  {
    id: 'sample-02',
    resource_code: 'YT-002',
    title: '미드저니 & AI 감성 아트 프롬프트 치트키 50선',
    slug: 'ai-art-prompts',
    description: '초보자도 감각적인 동화 일러스트와 감성 아트를 바로 뽑아낼 수 있는 검증된 프롬프트 모음집입니다.',
    category: 'AI아트',
    tags: ['AI아트', '미드저니', '프롬프트', '그림책'],
    file_path: 'samples/ai-art-prompts.pdf',
    file_name: 'AI_감성아트_프롬프트_치트키_50선.pdf',
    file_type: 'PDF',
    file_size: 1024 * 1024 * 5,
    thumbnail_path: null,
    status: 'published',
    visibility: 'member',
    youtube_url: 'https://youtube.com',
    related_course_url: '/courses/fire',
    related_course_title: 'AI감성아트지도사 과정',
    download_count: 289,
    is_featured: true,
    published_at: '2026-09-02T00:00:00Z',
    created_at: '2026-09-02T00:00:00Z',
  },
  {
    id: 'sample-03',
    resource_code: 'YT-003',
    title: '캔바 1인 지식창업 강의자료 템플릿 & 디자인 가이드',
    slug: 'canva-lecture-template',
    description: '클릭 몇 번으로 완성하는 고품격 강의 교안 슬라이드와 카드뉴스 제작을 위한 캔바 템플릿 세트입니다.',
    category: '캔바',
    tags: ['캔바', '강의자료', '템플릿', '지식창업'],
    file_path: 'samples/canva-template.pdf',
    file_name: '캔바_강의자료_템플릿_가이드.pdf',
    file_type: 'PDF',
    file_size: 1024 * 1024 * 3,
    thumbnail_path: null,
    status: 'published',
    visibility: 'member',
    youtube_url: 'https://youtube.com',
    related_course_url: '/courses/air',
    related_course_title: '캔바콘텐츠마스터강사 과정',
    download_count: 175,
    is_featured: true,
    published_at: '2026-09-03T00:00:00Z',
    created_at: '2026-09-03T00:00:00Z',
  },
  {
    id: 'sample-04',
    resource_code: 'YT-004',
    title: '마음 정렬과 삶의 좌표 설계를 위한 무의식 코칭 워크북',
    slug: 'mind-coaching-workbook',
    description: '나의 강점과 기질, 무의식의 패턴을 점검하고 삶과 일의 방향성을 찾는 자명스쿨의 핵심 코칭 워크시트입니다.',
    category: '마인드',
    tags: ['마인드', '자기이해', '무의식코칭', '방향성'],
    file_path: 'samples/mind-workbook.pdf',
    file_name: '무의식_마인드코칭_워크북.pdf',
    file_type: 'PDF',
    file_size: 1024 * 1024 * 2,
    thumbnail_path: null,
    status: 'published',
    visibility: 'member',
    youtube_url: 'https://youtube.com',
    related_course_url: '/courses/abundance',
    related_course_title: '디지털마인드코칭전문가 과정',
    download_count: 310,
    is_featured: false,
    published_at: '2026-09-04T00:00:00Z',
    created_at: '2026-09-04T00:00:00Z',
  },
  {
    id: 'sample-05',
    resource_code: 'YT-005',
    title: '1인 지식비즈니스 AI 자동화 퍼널 설계도',
    slug: 'business-automation-funnel',
    description: '콘텐츠 제작부터 리드 수집, 자동화된 판매 흐름까지 1인 창업가를 위한 자동화 수익 파이프라인 설계도입니다.',
    category: '브랜딩',
    tags: ['수익화', '자동화', '1인창업', 'AI브랜딩'],
    file_path: 'samples/automation-funnel.pdf',
    file_name: '1인비즈니스_AI자동화_설계도.pdf',
    file_type: 'PDF',
    file_size: 1024 * 1024 * 4,
    thumbnail_path: null,
    status: 'published',
    visibility: 'member',
    youtube_url: 'https://youtube.com',
    related_course_url: '/courses/water',
    related_course_title: 'AI브랜딩마스터강사 과정',
    download_count: 204,
    is_featured: false,
    published_at: '2026-09-05T00:00:00Z',
    created_at: '2026-09-05T00:00:00Z',
  },
];

export default async function ResourcesPage() {
  const supabase = await createClient();

  // 사용자 로그인 상태 확인
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Supabase에서 published 자료 조회
  let resources: ResourceItem[] = [];
  try {
    const { data, error } = await supabase
      .from('jamyung_resources')
      .select('*')
      .eq('status', 'published')
      .order('sort_order', { ascending: true })
      .order('created_at', { ascending: false });

    if (!error && data && data.length > 0) {
      resources = data as ResourceItem[];
    } else {
      // 테이블이 아직 비어있거나 생성 전인 경우 초기 샘플 데이터 노출
      resources = SAMPLE_RESOURCES;
    }
  } catch {
    resources = SAMPLE_RESOURCES;
  }

  return (
    <ResourcesClient
      initialResources={resources}
      isLoggedIn={Boolean(user)}
    />
  );
}
