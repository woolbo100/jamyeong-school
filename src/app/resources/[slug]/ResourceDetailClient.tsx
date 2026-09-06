'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Download, Lock, CheckCircle, ArrowLeft, ExternalLink, FileText, Calendar, Eye, Share2 } from 'lucide-react';
import type { ResourceItem } from '../ResourcesClient';

interface Props {
  resource: ResourceItem;
  relatedResources: ResourceItem[];
  isLoggedIn: boolean;
}

export default function ResourceDetailClient({
  resource,
  relatedResources,
  isLoggedIn,
}: Props) {
  const router = useRouter();
  const [isDownloading, setIsDownloading] = useState(false);
  const [copied, setCopied] = useState(false);

  const isMemberOnly = resource.visibility === 'member';

  const handleDownload = async () => {
    if (isMemberOnly && !isLoggedIn) {
      const returnUrl = `/resources/${resource.slug}`;
      router.push(`/login?redirect=${encodeURIComponent(returnUrl)}`);
      return;
    }

    try {
      setIsDownloading(true);
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
        alert(data.error || '다운로드에 실패했습니다.');
        return;
      }

      const link = document.createElement('a');
      link.href = data.downloadUrl;
      link.download = data.fileName || `${resource.resource_code}_${resource.title}`;
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (err) {
      console.error(err);
      alert('다운로드 처리 중 오류가 발생했습니다.');
    } finally {
      setIsDownloading(false);
    }
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <main className="relative min-h-screen bg-[#F9F6F0] text-[#2E2723] selection:bg-[#C6A66B]/20">
      {/* ────────────────────────
          1. TOP NAVIGATION / BREADCRUMB
         ──────────────────────── */}
      <div className="border-b border-[#E8DFD3] bg-[#FAF7F2] py-4 px-6">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Link
            href="/resources"
            className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold text-[#6E5A4D] hover:text-[#2E2723] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>자명자료실 목록으로 돌아가기</span>
          </Link>

          <button
            onClick={handleShare}
            className="text-xs px-3 py-1.5 rounded-lg border border-[#D6C6A8] bg-white text-[#6E5A4D] hover:text-[#2E2723] flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>{copied ? '링크 복사됨!' : '공유하기'}</span>
          </button>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* ────────────────────────
              MAIN CONTENT (LEFT 2 COLUMNS)
             ──────────────────────── */}
          <div className="lg:col-span-2 space-y-8">
            {/* Header info */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-mono font-bold text-[#8E6D38] px-3 py-1 rounded-lg bg-[#C6A66B]/15 border border-[#C6A66B]/30">
                  {resource.resource_code}
                </span>
                <span className="text-xs font-bold text-[#8C7B6E] uppercase px-2 py-1">
                  {resource.category}
                </span>
                <span
                  className={`text-xs px-2.5 py-0.5 rounded-full font-semibold border ${
                    isMemberOnly
                      ? 'bg-[#FAF2E6] text-[#8A6A3F] border-[#E8DFD3]'
                      : 'bg-[#EBF7EE] text-[#2E7D32] border-[#C8E6C9]'
                  }`}
                >
                  {isMemberOnly ? '회원전용' : '전체공개'}
                </span>
              </div>

              <h1 className="text-2xl md:text-4xl font-bold text-[#2E2723] leading-tight mb-4 break-keep">
                {resource.title}
              </h1>

              <p className="text-base text-[#5C4C40] leading-relaxed break-keep">
                {resource.description}
              </p>
            </div>

            {/* 태그 */}
            {resource.tags && resource.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-2 pb-4 border-b border-[#E8DFD3]">
                {resource.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-3 py-1 rounded-lg bg-white border border-[#E8DFD3] text-[#7C6656]"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}

            {/* 썸네일 / 미리보기 영역 */}
            {resource.thumbnail_path && (
              <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-[#F7F2EB] border border-[#E8DFD3] shadow-sm">
                <Image
                  src={resource.thumbnail_path}
                  alt={resource.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            )}

            {/* 자료 활용 안내 / 포함 내용 */}
            <div className="p-7 rounded-2xl bg-white border border-[#E8DFD3] shadow-sm space-y-4">
              <h2 className="text-lg font-bold text-[#2E2723] flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-[#8E6D38]" />
                <span>이 자료에 포함된 내용</span>
              </h2>
              <ul className="space-y-2.5 text-sm text-[#5C4C40] leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-[#C6A66B] font-bold">•</span>
                  <span>유튜브 및 실전 강의에서 입증된 핵심 실행 템플릿/워크시트</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C6A66B] font-bold">•</span>
                  <span>단순 이론을 넘어 바로 복사해 활용할 수 있는 실전 가이드라인</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C6A66B] font-bold">•</span>
                  <span>개인 학습 및 1인 창업 프로젝트에 자유롭게 적용 가능</span>
                </li>
              </ul>
            </div>

            {/* 유튜브 영상 연계 (있을 경우) */}
            {resource.youtube_url && (
              <div className="p-7 rounded-2xl bg-[#FAF7F2] border border-[#D6C6A8] space-y-4">
                <span className="text-xs font-bold text-[#8E6D38] uppercase tracking-wider">
                  YOUTUBE LECTURE
                </span>
                <h3 className="text-lg font-bold text-[#2E2723]">
                  이 자료의 활용법이 담긴 유튜브 영상
                </h3>
                <p className="text-sm text-[#6E5A4D]">
                  영상을 함께 시청하시면 자료의 효과를 200% 극대화할 수 있습니다.
                </p>
                <a
                  href={resource.youtube_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#CC0000] text-white text-xs font-bold shadow hover:bg-[#b30000] transition-colors"
                >
                  <span>유튜브에서 해설 영상 보기</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            )}
          </div>

          {/* ────────────────────────
              SIDEBAR (RIGHT 1 COLUMN)
             ──────────────────────── */}
          <div className="space-y-6">
            {/* 다운로드 카드 */}
            <div className="p-7 rounded-3xl bg-white border-2 border-[#C6A66B]/60 shadow-[0_10px_35px_rgba(198,166,107,0.12)] space-y-6 sticky top-24">
              <div>
                <span className="text-xs text-[#8C7B6E] font-medium block mb-1">DOWNLOAD</span>
                <h3 className="text-xl font-bold text-[#2E2723]">자료 다운로드</h3>
              </div>

              <div className="space-y-3 py-3 border-y border-[#F2EAE0] text-xs text-[#6E5A4D]">
                <div className="flex justify-between items-center">
                  <span className="flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5 text-[#8E6D38]" /> 파일 형식
                  </span>
                  <span className="font-semibold text-[#2E2723]">{resource.file_type || 'PDF'}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="flex items-center gap-1.5">
                    <Eye className="w-3.5 h-3.5 text-[#8E6D38]" /> 이용 대상
                  </span>
                  <span className="font-semibold text-[#2E2723]">
                    {isMemberOnly ? '자명스쿨 회원 전용 (무료)' : '누구나 다운로드 가능'}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="flex items-center gap-1.5">
                    <Download className="w-3.5 h-3.5 text-[#8E6D38]" /> 누적 다운로드
                  </span>
                  <span className="font-semibold text-[#2E2723]">{resource.download_count}회</span>
                </div>
              </div>

              {/* 다운로드 CTA 버튼 */}
              <button
                onClick={handleDownload}
                disabled={isDownloading}
                className="w-full min-h-[50px] px-6 rounded-xl bg-[#2E2723] hover:bg-[#1E1815] text-[#FFFBD1] text-sm font-bold flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer disabled:opacity-50"
              >
                {isDownloading ? (
                  <span>다운로드 준비 중...</span>
                ) : isMemberOnly && !isLoggedIn ? (
                  <>
                    <Lock className="w-4 h-4" />
                    <span>무료 회원가입 후 자료 받기</span>
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4" />
                    <span>지금 자료 다운로드</span>
                  </>
                )}
              </button>

              <p className="text-[11px] text-center text-[#8C7B6E] leading-relaxed break-keep">
                {isMemberOnly && !isLoggedIn
                  ? '자명스쿨 무료 회원가입 후 즉시 다운로드하실 수 있습니다.'
                  : '다운로드 버튼 클릭 시 파일이 즉시 저장됩니다.'}
              </p>

              {/* 관련 강의 연계 CTA */}
              <div className="pt-4 border-t border-[#F2EAE0]">
                <span className="text-[11px] font-bold text-[#8E6D38] uppercase block mb-1.5">
                  RECOMMENDED COURSE
                </span>
                <p className="text-xs text-[#5C4C40] mb-3 leading-snug break-keep">
                  이 자료를 더 깊이 배우고 온전한 지식 자산으로 만들고 싶다면?
                </p>
                <Link
                  href={resource.related_course_url || '/apply'}
                  className="w-full min-h-[42px] px-4 rounded-xl bg-[#F7F2EB] hover:bg-[#EFE7DC] text-[#2E2723] text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
                >
                  <span>{resource.related_course_title || '자명스쿨 강의과정 보기'}</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* ────────────────────────
            RECOMMENDED RESOURCES SECTION
           ──────────────────────── */}
        {relatedResources.length > 0 && (
          <div className="mt-20 pt-12 border-t border-[#E8DFD3]">
            <h2 className="text-xl md:text-2xl font-bold text-[#2E2723] mb-6">
              함께 보면 좋은 다른 자료
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedResources.map((item) => (
                <Link
                  key={item.id}
                  href={`/resources/${item.slug}`}
                  className="p-6 rounded-2xl bg-white border border-[#E8DFD3] hover:border-[#C6A66B] hover:-translate-y-1 transition-all shadow-sm flex flex-col justify-between group"
                >
                  <div>
                    <span className="text-[11px] font-mono font-bold text-[#8E6D38] px-2 py-0.5 rounded bg-[#F7F2EB] mb-2 inline-block">
                      {item.resource_code}
                    </span>
                    <h4 className="text-base font-bold text-[#2E2723] group-hover:text-[#8E6D38] transition-colors mb-2 line-clamp-1">
                      {item.title}
                    </h4>
                    <p className="text-xs text-[#6E5A4D] line-clamp-2 mb-4">
                      {item.description}
                    </p>
                  </div>
                  <span className="text-xs font-semibold text-[#8E6D38] flex items-center gap-1">
                    자세히 보기 →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
