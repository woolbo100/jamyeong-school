import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { createClient } from '@/utils/supabase/server';
import ResourceDetailClient from './ResourceDetailClient';
import type { ResourceItem } from '../ResourcesClient';

type Props = {
  params: Promise<{ slug: string }>;
};

// 메타데이터 생성
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const supabase = await createClient();

  const { data: resource } = await supabase
    .from('jamyung_resources')
    .select('title, description')
    .eq('slug', slug)
    .eq('status', 'published')
    .single();

  if (resource) {
    return {
      title: `${resource.title} | 자명자료실`,
      description: resource.description || '자명스쿨의 실전 교육자료',
    };
  }

  return {
    title: '자명자료실 | 자명스쿨',
  };
}

export default async function ResourceDetailPage({ params }: Props) {
  const { slug } = await params;
  const supabase = await createClient();

  // 사용자 세션 확인
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // 1. 해당 자료 조회
  const { data: resource, error } = await supabase
    .from('jamyung_resources')
    .select('*')
    .eq('slug', slug)
    .eq('status', 'published')
    .single();

  let currentResource: ResourceItem | null = resource as ResourceItem | null;

  // DB에 없을 경우 샘플 데이터에서 조회 (데모 호환)
  if (error || !currentResource) {
    // 샘플 데이터 목록
    const sample = SAMPLE_RESOURCES_DETAIL.find((r) => r.slug === slug);
    if (sample) {
      currentResource = sample;
    } else {
      notFound();
    }
  }

  // 2. 관련 추천 자료 조회 (동일 카테고리 또는 최신 자료)
  let relatedResources: ResourceItem[] = [];
  const { data: related } = await supabase
    .from('jamyung_resources')
    .select('*')
    .eq('status', 'published')
    .neq('slug', slug)
    .limit(3);

  if (related && related.length > 0) {
    relatedResources = related as ResourceItem[];
  } else {
    relatedResources = SAMPLE_RESOURCES_DETAIL.filter((r) => r.slug !== slug).slice(0, 3);
  }

  return (
    <ResourceDetailClient
      resource={currentResource}
      relatedResources={relatedResources}
      isLoggedIn={Boolean(user)}
    />
  );
}

// Fallback 샘플 데이터
const SAMPLE_RESOURCES_DETAIL: ResourceItem[] = [
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
];
