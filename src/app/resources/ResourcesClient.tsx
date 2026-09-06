'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Search, Download, ExternalLink, Sparkles, FileText, CheckCircle2, Lock } from 'lucide-react';

export interface ResourceItem {
  id: string;
  resource_code: string;
  title: string;
  slug: string;
  description: string | null;
  category: string;
  tags: string[];
  file_path: string;
  file_name: string | null;
  file_type: string | null;
  file_size: number | null;
  thumbnail_path: string | null;
  status: string;
  visibility: string;
  youtube_url: string | null;
  related_course_url: string | null;
  related_course_title: string | null;
  download_count: number;
  is_featured: boolean;
  published_at: string | null;
  created_at: string;
}

const CATEGORIES = [
  '전체',
  'AI',
  '브랜딩',
  '캔바',
  '출판',
  '마인드',
  'AI아트',
  '강의자료',
  '기타',
];

interface Props {
  initialResources: ResourceItem[];
  isLoggedIn: boolean;
}

export default function ResourcesClient({ initialResources, isLoggedIn }: Props) {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('전체');
  const [downloadingId, setDownloadingId] = useState<string | null>(null);

  // 검색 및 카테고리 필터링
  const filteredResources = useMemo(() => {
    return initialResources.filter((item) => {
      const matchCategory =
        selectedCategory === '전체' || item.category === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchSearch =
        !q ||
        item.title.toLowerCase().includes(q) ||
        item.resource_code.toLowerCase().includes(q) ||
        (item.description && item.description.toLowerCase().includes(q)) ||
        item.tags.some((tag) => tag.toLowerCase().includes(q));

      return matchCategory && matchSearch;
    });
  }, [initialResources, selectedCategory, searchQuery]);

  // 추천 자료 (Featured)
  const featuredResources = useMemo(() => {
    return initialResources.filter((item) => item.is_featured).slice(0, 3);
  }, [initialResources]);

  // 다운로드 핸들러
  const handleDownload = async (resource: ResourceItem, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    // 회원 전용 자료이고 비회원인 경우 로그인 페이지로 이동
    if (resource.visibility === 'member' && !isLoggedIn) {
      const returnUrl = `/resources/${resource.slug}`;
      router.push(`/login?redirect=${encodeURIComponent(returnUrl)}`);
      return;
    }

    try {
      setDownloadingId(resource.id);
      const res = await fetch(`/api/resources/${resource.id}/download`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          returnUrl: `/resources/${resource.slug}`,
        }),
      });

      const data = await res.json();

      if (res.status === 401 && data.loginRequired) {
        router.push(data.redirectUrl);
        return;
      }

      if (!res.ok || !data.downloadUrl) {
        alert(data.error || '다운로드에 실패했습니다. 다시 시도해 주세요.');
        return;
      }

      // 새 창 또는 iframe으로 다운로드 시작
      const link = document.createElement('a');
      link.href = data.downloadUrl;
      link.download = data.fileName || `${resource.resource_code}_${resource.title}`;
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (err) {
      console.error(err);
      alert('다운로드 중 문제가 발생했습니다.');
    } finally {
      setDownloadingId(null);
    }
  };

  return (
    <div className="relative min-h-screen bg-[#F9F6F0] text-[#2E2723] selection:bg-[#C6A66B]/20 selection:text-[#2E2723]">
      {/* ────────────────────────
          1. HERO SECTION
         ──────────────────────── */}
      <section className="pt-16 pb-12 md:pt-20 md:pb-16 px-6 border-b border-[#E8DFD3]/80 bg-gradient-to-b from-[#FAF7F2] to-[#F5EFE6]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C6A66B]/10 border border-[#C6A66B]/25 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C6A66B]" />
            <span className="text-[11px] md:text-xs font-semibold tracking-[0.25em] text-[#8E6D38] uppercase">
              JAMYUNG RESOURCE LIBRARY
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-[#2E2723] mb-4 leading-tight">
            자명자료실
          </h1>

          <p className="text-base md:text-xl font-medium text-[#4A3F35] max-w-2xl mx-auto mb-3 leading-relaxed break-keep">
            배움이 실행으로 이어질 수 있도록 <br className="hidden sm:inline" />
            자명스쿨의 실전 자료를 제공합니다.
          </p>

          <p className="text-sm md:text-base text-[#7C6656] max-w-xl mx-auto mb-6 leading-relaxed break-keep">
            유튜브와 강의에서 소개한 워크시트, 체크리스트, 프롬프트, 템플릿을 한곳에서 확인하세요.
          </p>

          <div className="inline-flex items-center gap-2 text-xs text-[#8E6D38] bg-[#F4EDE2] px-4 py-2 rounded-full border border-[#E8DFD3]">
            <CheckCircle2 className="w-4 h-4 text-[#8E6D38]" />
            <span>자명스쿨 회원은 자료실의 무료 자료를 자유롭게 다운로드할 수 있습니다.</span>
          </div>

          {/* 검색창 (Search Bar) */}
          <div className="mt-8 max-w-xl mx-auto relative">
            <div className="relative flex items-center">
              <Search className="absolute left-4 w-5 h-5 text-[#8C7B6E]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="자료명이나 영상번호(예: YT-001, 전자책, 캔바)를 검색하세요"
                className="w-full pl-12 pr-10 py-3.5 rounded-2xl bg-white border border-[#D6C6A8] text-[#2E2723] placeholder-[#A8988B] focus:outline-none focus:ring-2 focus:ring-[#C6A66B] focus:border-transparent text-sm shadow-sm transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 text-xs text-[#8C7B6E] hover:text-[#2E2723]"
                >
                  ✕
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────────────
          2. CATEGORY PILL FILTER
         ──────────────────────── */}
      <section className="py-6 px-6 max-w-7xl mx-auto border-b border-[#E8DFD3]/60">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs md:text-sm font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-[#2E2723] text-[#FFFBD1] shadow-sm'
                    : 'bg-white text-[#6E5A4D] border border-[#E8DFD3] hover:border-[#C6A66B] hover:text-[#2E2723]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* ────────────────────────
            3. FEATURED RESOURCES
           ──────────────────────── */}
        {selectedCategory === '전체' && !searchQuery && featuredResources.length > 0 && (
          <div className="mb-16">
            <div className="flex items-center gap-2 mb-6">
              <Sparkles className="w-5 h-5 text-[#8E6D38]" />
              <h2 className="text-xl md:text-2xl font-bold text-[#2E2723]">이달의 추천 자료</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredResources.map((res) => (
                <div
                  key={res.id}
                  className="relative rounded-3xl p-6 bg-gradient-to-b from-[#FFFDF9] to-[#FBF7F0] border-2 border-[#C6A66B]/50 shadow-[0_8px_30px_rgba(198,166,107,0.12)] flex flex-col justify-between group hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="absolute top-4 right-4 px-2.5 py-0.5 rounded-full bg-[#C6A66B] text-white text-[10px] font-bold tracking-wider uppercase">
                    FEATURED
                  </div>

                  <div>
                    <span className="inline-block text-xs font-mono font-bold text-[#8E6D38] px-2.5 py-1 rounded-md bg-[#C6A66B]/10 mb-3">
                      {res.resource_code}
                    </span>
                    <Link href={`/resources/${res.slug}`}>
                      <h3 className="text-lg font-bold text-[#2E2723] group-hover:text-[#8E6D38] transition-colors mb-2 line-clamp-1">
                        {res.title}
                      </h3>
                    </Link>
                    <p className="text-xs text-[#6E5A4D] leading-relaxed mb-4 line-clamp-2">
                      {res.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#E8DFD3] flex items-center justify-between gap-3">
                    <span className="text-xs text-[#8C7B6E] flex items-center gap-1">
                      <FileText className="w-3.5 h-3.5" />
                      {res.file_type || 'PDF'}
                    </span>

                    <button
                      onClick={(e) => handleDownload(res, e)}
                      disabled={downloadingId === res.id}
                      className="px-4 py-2 rounded-xl bg-[#2E2723] hover:bg-[#1E1815] text-[#FFFBD1] text-xs font-bold flex items-center gap-1.5 transition-all shadow-sm cursor-pointer disabled:opacity-50"
                    >
                      {downloadingId === res.id ? (
                        <span>다운로드 중...</span>
                      ) : res.visibility === 'member' && !isLoggedIn ? (
                        <>
                          <Lock className="w-3.5 h-3.5" />
                          <span>로그인 후 받기</span>
                        </>
                      ) : (
                        <>
                          <Download className="w-3.5 h-3.5" />
                          <span>자료 받기</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ────────────────────────
            4. MAIN RESOURCE GRID
           ──────────────────────── */}
        <div className="flex items-center justify-between mb-8 pb-3 border-b border-[#E8DFD3]">
          <h2 className="text-lg md:text-xl font-bold text-[#2E2723]">
            전체 자료 <span className="text-[#8E6D38] font-normal text-sm">({filteredResources.length}개)</span>
          </h2>
          <span className="text-xs text-[#8C7B6E]">
            {searchQuery ? `"${searchQuery}" 검색 결과` : `${selectedCategory} 카테고리`}
          </span>
        </div>

        {filteredResources.length === 0 ? (
          <div className="py-24 text-center">
            <p className="text-base text-[#7C6656] mb-2">일치하는 자료를 찾을 수 없습니다.</p>
            <p className="text-xs text-[#A8988B]">다른 검색어나 카테고리를 선택해 보세요.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources.map((res) => {
              const isMemberOnly = res.visibility === 'member';

              return (
                <div
                  key={res.id}
                  className="rounded-[24px] bg-white border border-[#E8DFD3] p-6 shadow-[0_4px_20px_rgba(46,39,35,0.03)] hover:shadow-[0_12px_32px_rgba(46,39,35,0.08)] hover:border-[#D6C6A8] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* 상단 헤더: 자료코드 + 공개범위 배지 */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-mono font-bold text-[#8E6D38] px-2.5 py-1 rounded-lg bg-[#F7F2EB] border border-[#EBE3D7]">
                        {res.resource_code}
                      </span>
                      <span
                        className={`text-[11px] px-2.5 py-0.5 rounded-full font-semibold border ${
                          isMemberOnly
                            ? 'bg-[#FAF2E6] text-[#8A6A3F] border-[#E8DFD3]'
                            : 'bg-[#EBF7EE] text-[#2E7D32] border-[#C8E6C9]'
                        }`}
                      >
                        {isMemberOnly ? '회원전용' : '전체공개'}
                      </span>
                    </div>

                    {/* 썸네일 (옵션) */}
                    {res.thumbnail_path && (
                      <Link href={`/resources/${res.slug}`} className="block relative aspect-[16/9] w-full rounded-xl overflow-hidden mb-4 bg-[#F7F2EB]">
                        <Image
                          src={res.thumbnail_path}
                          alt={res.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </Link>
                    )}

                    {/* 카테고리 라벨 */}
                    <span className="text-[11px] font-bold tracking-wider text-[#8C7B6E] uppercase mb-1.5 block">
                      {res.category}
                    </span>

                    {/* 제목 */}
                    <Link href={`/resources/${res.slug}`}>
                      <h3 className="text-lg font-bold text-[#2E2723] group-hover:text-[#8E6D38] transition-colors mb-2 line-clamp-2 leading-snug">
                        {res.title}
                      </h3>
                    </Link>

                    {/* 설명 */}
                    <p className="text-xs text-[#6E5A4D] leading-relaxed mb-4 line-clamp-2">
                      {res.description || '상세페이지에서 자세한 자료 내용과 가이드를 확인하실 수 있습니다.'}
                    </p>

                    {/* 태그 목록 */}
                    {res.tags && res.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {res.tags.slice(0, 3).map((tag, idx) => (
                          <span
                            key={idx}
                            className="text-[10px] px-2 py-0.5 rounded-md bg-[#F7F2EB] text-[#7C6656]"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* 하단 버튼 및 정보 영역 */}
                  <div className="pt-4 border-t border-[#F2EAE0] flex flex-col gap-2.5">
                    <div className="flex items-center justify-between text-[11px] text-[#8C7B6E]">
                      <span>형식: {res.file_type || 'PDF'}</span>
                      <span>다운로드 {res.download_count}회</span>
                    </div>

                    <div className="flex gap-2">
                      {/* 상세페이지 보기 버튼 */}
                      <Link
                        href={`/resources/${res.slug}`}
                        className="flex-1 min-h-[42px] px-3 rounded-xl bg-[#F7F2EB] hover:bg-[#EFE7DC] text-[#4A3F35] text-xs font-semibold flex items-center justify-center transition-colors"
                      >
                        상세보기
                      </Link>

                      {/* 다운로드 버튼 */}
                      <button
                        onClick={(e) => handleDownload(res, e)}
                        disabled={downloadingId === res.id}
                        className="flex-1 min-h-[42px] px-3 rounded-xl bg-[#2E2723] hover:bg-[#1E1815] text-[#FFFBD1] text-xs font-semibold flex items-center justify-center gap-1.5 transition-all shadow-sm cursor-pointer disabled:opacity-50"
                      >
                        {downloadingId === res.id ? (
                          <span>처리 중...</span>
                        ) : isMemberOnly && !isLoggedIn ? (
                          <>
                            <Lock className="w-3.5 h-3.5" />
                            <span>로그인 후 받기</span>
                          </>
                        ) : (
                          <>
                            <Download className="w-3.5 h-3.5" />
                            <span>다운로드</span>
                          </>
                        )}
                      </button>
                    </div>

                    {/* YouTube 링크 (있는 경우) */}
                    {res.youtube_url && (
                      <a
                        href={res.youtube_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[11px] text-[#C6A66B] hover:text-[#8E6D38] flex items-center justify-center gap-1 py-1"
                      >
                        <span>관련 유튜브 해설 영상 보기</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* ────────────────────────
          5. BOTTOM GUIDE BANNER
         ──────────────────────── */}
      <section className="py-16 px-6 border-t border-[#E8DFD3] bg-white text-center">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-xl md:text-2xl font-bold text-[#2E2723] mb-3">
            실전 자료를 넘어, 온전한 나만의 강의와 브랜드를 만들고 싶다면?
          </h3>
          <p className="text-sm text-[#6E5A4D] mb-6 leading-relaxed break-keep">
            자명스쿨의 5원소 전문 자격과정을 통해 체계적인 교육과 실무 코칭을 경험해 보세요.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/courses"
              className="px-6 py-3 rounded-full bg-[#F7F2EB] hover:bg-[#EFE7DC] text-[#2E2723] text-sm font-bold transition-all"
            >
              자명스쿨 강의소개 보기
            </Link>
            <Link
              href="/apply"
              className="px-6 py-3 rounded-full bg-[#2E2723] hover:bg-[#1E1815] text-[#FFFBD1] text-sm font-bold shadow-sm transition-all"
            >
              모집 중인 강의 신청하기 →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
