"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import type {
  BlogFaqItem,
  BlogWebsiteImageSlot,
} from "@/data/blogWebsiteClassData";

// ─────────────────────────────────────────────────────────────
// 1. 교체형 이미지 슬롯 컴포넌트 (PC 브라우저/노트북 목업 지원)
// ─────────────────────────────────────────────────────────────
interface BlogWebsiteReplaceableImageProps {
  slot: BlogWebsiteImageSlot;
  fallbackType?:
    | "hero-pc"
    | "before-after-before"
    | "before-after-after"
    | "concept-instructor"
    | "concept-consulting"
    | "concept-workshop"
    | "concept-solo-service"
    | "case-overview"
    | "case-banners"
    | "case-navigation"
    | "case-editing";
  className?: string;
}

export function BlogWebsiteReplaceableImage({
  slot,
  fallbackType = "hero-pc",
  className = "",
}: BlogWebsiteReplaceableImageProps) {
  const [isZoomOpen, setIsZoomOpen] = useState(false);

  useEffect(() => {
    if (!isZoomOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsZoomOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isZoomOpen]);

  const objectFitClass =
    slot.objectFit === "contain" ? "object-contain" : "object-cover";

  return (
    <>
      <figure className={`group relative flex flex-col ${className}`}>
        <div
          className={`relative w-full ${slot.aspectRatio} rounded-xl bg-[#0D0A08] border border-[#3E3024] overflow-hidden flex items-center justify-center`}
        >
          {slot.src ? (
            <>
              <Image
                src={slot.src}
                alt={slot.alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className={`${objectFitClass} p-2 transition-transform duration-300 group-hover:scale-[1.02]`}
              />
              {slot.enableZoom && (
                <button
                  type="button"
                  onClick={() => setIsZoomOpen(true)}
                  aria-label={`${slot.alt} 크게 보기`}
                  className="absolute bottom-2.5 right-2.5 px-2.5 py-1 rounded-lg bg-[#1A1410]/90 hover:bg-[#2E241D] text-[#D6C6A8] border border-[#4A3B2F] text-[11px] font-medium transition-colors shadow-md"
                >
                  확대 보기 +
                </button>
              )}
            </>
          ) : (
            <div className="w-full h-full p-3 sm:p-4 flex flex-col items-center justify-between text-center select-none bg-gradient-to-b from-[#17120E] to-[#0E0B09]">
              {/* 상단 라벨 바 */}
              <div className="w-full flex items-center justify-between gap-2 text-[10px] text-[#A8988B]">
                <span className="px-2 py-0.5 rounded bg-[#241B16] border border-[#3A2D23] text-[#C6A66B] font-semibold">
                  {slot.badgeText || "수업 결과물 예시"}
                </span>
                {slot.subLabel && (
                  <span className="text-[#8F7D6E] truncate">{slot.subLabel}</span>
                )}
              </div>

              {/* PC 브라우저 목업 프리뷰 (상단 히어로용) */}
              {fallbackType === "hero-pc" && (
                <div className="my-auto py-1 w-full max-w-[420px] rounded-xl bg-[#16120F] border border-[#3E3024] p-3 shadow-lg text-left space-y-2">
                  {/* 브라우저 상단 윈도우 바 */}
                  <div className="flex items-center gap-1.5 pb-2 border-b border-[#292019]">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 rounded-full bg-red-500/80" />
                      <div className="w-2 h-2 rounded-full bg-amber-500/80" />
                      <div className="w-2 h-2 rounded-full bg-emerald-500/80" />
                    </div>
                    <div className="h-4 flex-1 mx-2 rounded bg-[#211A15] border border-[#382C22] px-2 flex items-center text-[8px] text-[#8F7D6E]">
                      blog.naver.com/my-brand
                    </div>
                  </div>

                  {/* 블로그 메인 비주얼 영역 */}
                  <div className="p-3 rounded-lg bg-gradient-to-r from-[#241B15] to-[#1C1510] border border-[#C6A66B]/50 flex items-center justify-between gap-3">
                    <div className="space-y-1">
                      <span className="text-[8px] tracking-widest text-[#C6A66B] font-extrabold uppercase">
                        PERSONAL BRANDING
                      </span>
                      <h4 className="text-[11px] sm:text-xs font-bold text-[#FAF7F2] leading-tight">
                        나를 표현하는 전문성 있는 첫인상
                      </h4>
                      <p className="text-[8px] text-[#A8988B]">
                        당신의 가치를 담은 블로그형 홈페이지
                      </p>
                    </div>
                    <div className="w-12 h-12 rounded-lg bg-[#2E231B] border border-[#C6A66B]/40 flex items-center justify-center text-xl shrink-0">
                      ✨
                    </div>
                  </div>

                  {/* 연결 배너 4종 그리드 */}
                  <div className="grid grid-cols-4 gap-1.5 text-center">
                    {[
                      { title: "브랜드 소개", icon: "👤" },
                      { title: "서비스 안내", icon: "📋" },
                      { title: "수강생 후기", icon: "⭐" },
                      { title: "1:1 문의하기", icon: "💬" },
                    ].map((b, i) => (
                      <div
                        key={i}
                        className="p-1.5 rounded-md bg-[#211914] border border-[#362A20] hover:border-[#C6A66B]/60 transition-colors flex flex-col items-center justify-center gap-0.5"
                      >
                        <span className="text-xs">{b.icon}</span>
                        <strong className="text-[8px] text-[#FAF7F2] font-semibold truncate block w-full">
                          {b.title}
                        </strong>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 전후 비교: 수강 전 */}
              {fallbackType === "before-after-before" && (
                <div className="my-auto py-2 w-full max-w-[320px] rounded-xl bg-[#14100E] border-2 border-dashed border-red-400/30 p-3 space-y-2 text-left">
                  <div className="flex items-center justify-between text-[9px] text-[#8F7D6E] pb-1 border-b border-[#251D17]">
                    <span>일반 기본 블로그</span>
                    <span className="text-red-400 font-semibold">
                      메인 비주얼 없음
                    </span>
                  </div>
                  <div className="h-10 rounded bg-[#1C1612] border border-[#2B2119] flex items-center px-3 text-[9px] text-[#6E5A4D]">
                    기본 텍스트 타이틀만 덩그러니 있는 상태
                  </div>
                  <div className="space-y-1">
                    <div className="h-4 w-3/4 rounded bg-[#1C1612]" />
                    <div className="h-4 w-1/2 rounded bg-[#1C1612]" />
                  </div>
                  <span className="text-[8px] text-zinc-500 block">
                    소개·상품·문의 정보가 여러 글 사이에 흩어짐
                  </span>
                </div>
              )}

              {/* 전후 비교: 수강 후 */}
              {fallbackType === "before-after-after" && (
                <div className="my-auto py-2 w-full max-w-[320px] rounded-xl bg-[#1C1510] border-2 border-[#C6A66B] p-3 space-y-2 text-left shadow-lg">
                  <div className="flex items-center justify-between text-[9px] text-[#C6A66B] pb-1 border-b border-[#362920]">
                    <span className="font-bold">홈페이지형 블로그 메인</span>
                    <span className="px-1.5 py-0.5 rounded bg-[#C6A66B] text-[#1A1410] font-extrabold text-[8px]">
                      완성
                    </span>
                  </div>
                  <div className="h-12 rounded bg-gradient-to-r from-[#291F18] to-[#1F1711] border border-[#C6A66B]/60 p-2 flex items-center justify-between">
                    <div>
                      <strong className="text-[9px] text-[#FAF7F2] block">
                        대표 브랜드 메인 비주얼
                      </strong>
                      <span className="text-[8px] text-[#A8988B]">
                        전문 분야와 핵심 가치 전달
                      </span>
                    </div>
                    <span className="text-base">💼</span>
                  </div>
                  <div className="grid grid-cols-4 gap-1 text-center text-[7px]">
                    <div className="p-1 rounded bg-[#251C16] border border-[#3E3024] text-[#FAF7F2]">
                      소개
                    </div>
                    <div className="p-1 rounded bg-[#251C16] border border-[#3E3024] text-[#FAF7F2]">
                      상품
                    </div>
                    <div className="p-1 rounded bg-[#251C16] border border-[#3E3024] text-[#FAF7F2]">
                      후기
                    </div>
                    <div className="p-1 rounded bg-[#C6A66B]/20 border border-[#C6A66B] text-[#D6C6A8] font-bold">
                      문의
                    </div>
                  </div>
                </div>
              )}

              {/* 비즈니스 유형별 4종 프리뷰 */}
              {fallbackType === "concept-instructor" && (
                <div className="my-auto py-2 w-full max-w-[280px] rounded-xl bg-[#181310] border border-[#3E3024] p-2.5 space-y-2 text-left">
                  <div className="flex items-center justify-between border-b border-[#2B2119] pb-1">
                    <span className="text-[9px] font-bold text-[#FAF7F2]">
                      🎓 강사·교육 브랜드
                    </span>
                    <span className="text-[8px] text-[#C6A66B]">교육 메인</span>
                  </div>
                  <div className="p-2 rounded bg-[#221A14] border border-[#382C22] text-[8px] space-y-0.5">
                    <p className="font-bold text-[#FAF7F2]">
                      “실무에서 바로 쓰는 실전 강의”
                    </p>
                    <span className="text-[#9E8B7C] block">
                      전문 강사 프로필 & 수강 로드맵
                    </span>
                  </div>
                  <div className="grid grid-cols-4 gap-1 text-center text-[7px] text-[#D6C6A8]">
                    <div className="p-1 rounded bg-[#1D1611] border border-[#362A20]">
                      강사 소개
                    </div>
                    <div className="p-1 rounded bg-[#1D1611] border border-[#362A20]">
                      강의 안내
                    </div>
                    <div className="p-1 rounded bg-[#1D1611] border border-[#362A20]">
                      수강 후기
                    </div>
                    <div className="p-1 rounded bg-[#C6A66B]/25 text-[#FAF7F2] font-bold">
                      클래스 신청
                    </div>
                  </div>
                </div>
              )}

              {fallbackType === "concept-consulting" && (
                <div className="my-auto py-2 w-full max-w-[280px] rounded-xl bg-[#181310] border border-[#3E3024] p-2.5 space-y-2 text-left">
                  <div className="flex items-center justify-between border-b border-[#2B2119] pb-1">
                    <span className="text-[9px] font-bold text-[#FAF7F2]">
                      🤝 상담·코칭 브랜드
                    </span>
                    <span className="text-[8px] text-[#C6A66B]">상담 메인</span>
                  </div>
                  <div className="p-2 rounded bg-[#221A14] border border-[#382C22] text-[8px] space-y-0.5">
                    <p className="font-bold text-[#FAF7F2]">
                      “마음을 잇는 1:1 라이프 코칭”
                    </p>
                    <span className="text-[#9E8B7C] block">
                      전문 코칭 철학 & 프로그램
                    </span>
                  </div>
                  <div className="grid grid-cols-4 gap-1 text-center text-[7px] text-[#D6C6A8]">
                    <div className="p-1 rounded bg-[#1D1611] border border-[#362A20]">
                      상담 소개
                    </div>
                    <div className="p-1 rounded bg-[#1D1611] border border-[#362A20]">
                      프로그램
                    </div>
                    <div className="p-1 rounded bg-[#1D1611] border border-[#362A20]">
                      이용 안내
                    </div>
                    <div className="p-1 rounded bg-[#C6A66B]/25 text-[#FAF7F2] font-bold">
                      1:1 문의
                    </div>
                  </div>
                </div>
              )}

              {fallbackType === "concept-workshop" && (
                <div className="my-auto py-2 w-full max-w-[280px] rounded-xl bg-[#181310] border border-[#3E3024] p-2.5 space-y-2 text-left">
                  <div className="flex items-center justify-between border-b border-[#2B2119] pb-1">
                    <span className="text-[9px] font-bold text-[#FAF7F2]">
                      🎨 공방·작가 브랜드
                    </span>
                    <span className="text-[8px] text-[#C6A66B]">공방 메인</span>
                  </div>
                  <div className="p-2 rounded bg-[#221A14] border border-[#382C22] text-[8px] space-y-0.5">
                    <p className="font-bold text-[#FAF7F2]">
                      “정성을 빚는 아틀리에 작업실”
                    </p>
                    <span className="text-[#9E8B7C] block">
                      수제 작품 이야기 & 클래스
                    </span>
                  </div>
                  <div className="grid grid-cols-4 gap-1 text-center text-[7px] text-[#D6C6A8]">
                    <div className="p-1 rounded bg-[#1D1611] border border-[#362A20]">
                      작품 소개
                    </div>
                    <div className="p-1 rounded bg-[#1D1611] border border-[#362A20]">
                      원데이 클래스
                    </div>
                    <div className="p-1 rounded bg-[#1D1611] border border-[#362A20]">
                      제작기
                    </div>
                    <div className="p-1 rounded bg-[#C6A66B]/25 text-[#FAF7F2] font-bold">
                      예약 안내
                    </div>
                  </div>
                </div>
              )}

              {fallbackType === "concept-solo-service" && (
                <div className="my-auto py-2 w-full max-w-[280px] rounded-xl bg-[#181310] border border-[#3E3024] p-2.5 space-y-2 text-left">
                  <div className="flex items-center justify-between border-b border-[#2B2119] pb-1">
                    <span className="text-[9px] font-bold text-[#FAF7F2]">
                      💼 1인 서비스 브랜드
                    </span>
                    <span className="text-[8px] text-[#C6A66B]">비즈니스 메인</span>
                  </div>
                  <div className="p-2 rounded bg-[#221A14] border border-[#382C22] text-[8px] space-y-0.5">
                    <p className="font-bold text-[#FAF7F2]">
                      “신뢰와 경험을 더하는 1인 비즈니스”
                    </p>
                    <span className="text-[#9E8B7C] block">
                      포트폴리오 & 맞춤형 솔루션
                    </span>
                  </div>
                  <div className="grid grid-cols-4 gap-1 text-center text-[7px] text-[#D6C6A8]">
                    <div className="p-1 rounded bg-[#1D1611] border border-[#362A20]">
                      서비스 소개
                    </div>
                    <div className="p-1 rounded bg-[#1D1611] border border-[#362A20]">
                      포트폴리오
                    </div>
                    <div className="p-1 rounded bg-[#1D1611] border border-[#362A20]">
                      고객 후기
                    </div>
                    <div className="p-1 rounded bg-[#C6A66B]/25 text-[#FAF7F2] font-bold">
                      상담 문의
                    </div>
                  </div>
                </div>
              )}

              {/* 실제 사례 4종 프리뷰 */}
              {fallbackType === "case-overview" && (
                <div className="my-auto py-2 w-full max-w-[280px] rounded-xl bg-[#181310] border border-[#3E3024] p-2.5 space-y-2 text-left">
                  <span className="text-[8px] text-[#C6A66B] font-bold block">
                    01. 전체 메인 레이아웃
                  </span>
                  <div className="h-10 rounded bg-[#221A14] border border-[#3A2D22] flex items-center justify-center text-xs text-[#FAF7F2]">
                    메인 타이틀 & 고화질 배경 비주얼
                  </div>
                  <div className="grid grid-cols-4 gap-1 text-[7px] text-center text-[#8F7D6E]">
                    <div className="p-1 rounded bg-[#1C1510]">배너 1</div>
                    <div className="p-1 rounded bg-[#1C1510]">배너 2</div>
                    <div className="p-1 rounded bg-[#1C1510]">배너 3</div>
                    <div className="p-1 rounded bg-[#1C1510]">배너 4</div>
                  </div>
                </div>
              )}

              {fallbackType === "case-banners" && (
                <div className="my-auto py-2 w-full max-w-[280px] rounded-xl bg-[#181310] border border-[#3E3024] p-2.5 space-y-1.5 text-left">
                  <span className="text-[8px] text-[#C6A66B] font-bold block">
                    02. 연결 배너 디테일 확대
                  </span>
                  <div className="grid grid-cols-2 gap-1.5">
                    <div className="p-2 rounded bg-[#221A14] border border-[#3A2D22] text-[8px] space-y-0.5">
                      <strong className="text-[#FAF7F2] block">서비스 배너</strong>
                      <span className="text-[#8F7D6E]">통일된 폰트·색상</span>
                    </div>
                    <div className="p-2 rounded bg-[#221A14] border border-[#3A2D22] text-[8px] space-y-0.5">
                      <strong className="text-[#FAF7F2] block">후기·문의 배너</strong>
                      <span className="text-[#8F7D6E]">클릭 영역 정렬</span>
                    </div>
                  </div>
                </div>
              )}

              {fallbackType === "case-navigation" && (
                <div className="my-auto py-2 w-full max-w-[280px] rounded-xl bg-[#181310] border border-[#3E3024] p-2.5 space-y-1.5 text-center">
                  <span className="text-[8px] text-[#C6A66B] font-bold block">
                    03. 배너 클릭 후 동선 이동
                  </span>
                  <div className="flex items-center justify-center gap-2 py-1 text-xs">
                    <span className="px-2 py-1 rounded bg-[#251C16] border border-[#3E3024] text-[8px] text-[#FAF7F2]">
                      배너 클릭
                    </span>
                    <span className="text-[#C6A66B]">→</span>
                    <span className="px-2 py-1 rounded bg-[#C6A66B]/20 border border-[#C6A66B] text-[8px] text-[#D6C6A8] font-bold">
                      소개·수업·문의 페이지 이동
                    </span>
                  </div>
                  <span className="text-[7px] text-[#8F7D6E] block">
                    투명 위젯 링크로 끊김 없는 고객 동선 완성
                  </span>
                </div>
              )}

              {fallbackType === "case-editing" && (
                <div className="my-auto py-2 w-full max-w-[280px] rounded-xl bg-[#181310] border border-[#3E3024] p-2.5 space-y-1.5 text-left">
                  <span className="text-[8px] text-[#C6A66B] font-bold block">
                    04. 템플릿 사진·문구 편집
                  </span>
                  <div className="p-2 rounded bg-[#241B15] border border-[#382C22] flex items-center justify-between text-[8px]">
                    <span className="text-[#D6C6A8]">
                      글자 클릭 후 브랜드명 교체
                    </span>
                    <span className="text-emerald-400 font-bold">수정 쉬움 ✓</span>
                  </div>
                  <span className="text-[7px] text-[#8F7D6E] block">
                    수업 종료 후에도 내 손으로 직접 문구와 이미지 업데이트
                  </span>
                </div>
              )}

              {/* 하단 캡션 */}
              <div className="w-full pt-1.5 border-t border-[#261E19] text-[10px] text-[#9E8B7C] truncate">
                {slot.caption}
              </div>
            </div>
          )}
        </div>
      </figure>

      {/* 확대 보기 모달 */}
      {isZoomOpen && slot.src && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={slot.alt}
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setIsZoomOpen(false)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#14100E] border border-[#3E3024] rounded-2xl p-4 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#2B221B]">
              <span className="text-xs sm:text-sm font-bold text-[#FAF7F2]">
                {slot.caption}
              </span>
              <button
                type="button"
                onClick={() => setIsZoomOpen(false)}
                className="px-3 py-1 rounded-lg bg-[#241B16] text-[#D6C6A8] text-xs font-bold hover:bg-[#33271E]"
              >
                닫기 ✕
              </button>
            </div>
            <div className="relative w-full aspect-[16/10] bg-[#0A0807] rounded-xl overflow-hidden">
              <Image
                src={slot.src}
                alt={slot.alt}
                fill
                sizes="100vw"
                className="object-contain p-2"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// ─────────────────────────────────────────────────────────────
// 2. 접근성을 준수하는 FAQ 아코디언 컴포넌트
// ─────────────────────────────────────────────────────────────
interface BlogWebsiteFaqAccordionProps {
  items: BlogFaqItem[];
}

export function BlogWebsiteFaqAccordion({
  items,
}: BlogWebsiteFaqAccordionProps) {
  const [openIds, setOpenIds] = useState<string[]>([
    "blog-faq-1",
    "blog-faq-3",
    "blog-faq-5",
  ]);

  const toggleItem = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="space-y-3.5">
      {items.map((item) => {
        const isOpen = openIds.includes(item.id);
        const panelId = `${item.id}-panel`;
        const buttonId = `${item.id}-button`;

        return (
          <div
            key={item.id}
            className="rounded-2xl bg-white border border-[#E8DFD3] shadow-xs overflow-hidden transition-colors"
          >
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggleItem(item.id)}
                className="w-full p-5 sm:p-6 text-left flex items-start justify-between gap-4 hover:bg-[#FAF7F2]/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8E6D38] transition-colors"
              >
                <span className="text-sm sm:text-base md:text-lg font-bold text-[#2E2723] flex items-start gap-2.5 break-keep">
                  <span className="text-[#8E6D38] shrink-0">Q.</span>
                  <span>{item.question}</span>
                </span>
                <span
                  aria-hidden="true"
                  className={`w-6 h-6 rounded-full bg-[#FAF2E6] border border-[#E8DFD3] text-[#8E6D38] flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 transition-transform duration-200 ${
                    isOpen ? "rotate-180 bg-[#8E6D38] text-white" : ""
                  }`}
                >
                  ▾
                </span>
              </button>
            </h3>

            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className={isOpen ? "px-5 sm:px-6 pb-5 sm:pb-6 pt-0" : "hidden"}
            >
              <div className="pl-6 sm:pl-7 pt-2 border-t border-[#F2EAE0] text-xs sm:text-sm text-[#5C4C40] leading-relaxed break-keep">
                <p>{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// 3. 신청 / 개강 알림 연결 CTA 버튼 컴포넌트
// ─────────────────────────────────────────────────────────────
interface BlogWebsiteCtaButtonProps {
  courseId: string;
  courseTitle: string;
  status: "open" | "scheduled" | "closed";
  applicationUrl: string | null;
  notificationUrl: string;
  ctaOpenText: string;
  ctaScheduledText: string;
  variant?: "hero" | "final" | "mobile-bar";
}

export function BlogWebsiteCtaButton({
  courseId,
  courseTitle,
  status,
  applicationUrl,
  notificationUrl,
  ctaOpenText,
  ctaScheduledText,
  variant = "hero",
}: BlogWebsiteCtaButtonProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [copiedCourseName, setCopiedCourseName] = useState(false);

  const isOpen = status === "open" && Boolean(applicationUrl);
  const buttonLabel = isOpen ? ctaOpenText : ctaScheduledText;

  const handleCopyAndNotify = async () => {
    const messageText = `[${courseTitle}] 개강 알림 신청합니다.`;
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(messageText);
        setCopiedCourseName(true);
      }
    } catch {
      // 클립보드 권한 실패 시에도 카카오 채널 이동 정상 수행
    }
    window.open(notificationUrl, "_blank", "noopener,noreferrer");
  };

  let buttonClassName = "";
  if (variant === "hero") {
    buttonClassName =
      "w-full sm:w-auto min-h-[48px] px-8 rounded-xl bg-[#2E2723] hover:bg-[#1F1916] text-[#FFFBD1] text-base font-bold inline-flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all group";
  } else if (variant === "final") {
    buttonClassName =
      "w-full min-h-[54px] py-4 px-6 rounded-2xl bg-[#C6A66B] hover:bg-[#D6C6A8] text-[#1A1410] font-extrabold text-base md:text-lg flex items-center justify-center gap-2 shadow-lg transition-all group";
  } else {
    buttonClassName =
      "px-5 min-h-[44px] rounded-xl bg-[#C6A66B] hover:bg-[#D6C6A8] text-[#1A1410] text-xs sm:text-sm font-extrabold flex items-center justify-center gap-1.5 shrink-0 shadow-md transition-colors";
  }

  if (isOpen && applicationUrl) {
    return (
      <a
        href={applicationUrl}
        target="_blank"
        rel="noopener noreferrer"
        data-course-id={courseId}
        data-course-title={courseTitle}
        className={buttonClassName}
      >
        <span>{buttonLabel}</span>
        <span className="group-hover:translate-x-1 transition-transform">
          →
        </span>
      </a>
    );
  }

  return (
    <>
      <button
        type="button"
        data-course-id={courseId}
        data-course-title={courseTitle}
        onClick={() => {
          setCopiedCourseName(false);
          setIsModalOpen(true);
        }}
        className={buttonClassName}
      >
        <span>{buttonLabel}</span>
        <span className="group-hover:translate-x-1 transition-transform">
          →
        </span>
      </button>

      {isModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="blog-notify-title"
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="w-full max-w-md rounded-3xl bg-[#181310] border border-[#3E3127] p-6 sm:p-7 text-left shadow-2xl space-y-5"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-3 border-b border-[#2B221B] pb-4">
              <div>
                <span className="text-[11px] font-bold text-[#C6A66B] uppercase tracking-wider block mb-1">
                  BLOG WEBSITE NOTIFICATION
                </span>
                <h3
                  id="blog-notify-title"
                  className="text-lg font-extrabold text-[#FAF7F2] break-keep"
                >
                  {courseTitle} 개강 알림 신청
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                aria-label="창 닫기"
                className="w-8 h-8 rounded-lg bg-[#241B16] text-[#A8988B] hover:text-white flex items-center justify-center text-xs font-bold"
              >
                ✕
              </button>
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-[#D6C6A8] leading-relaxed break-keep">
              <div className="p-3.5 rounded-xl bg-[#221A15] border border-[#362920] space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#9E8B7C]">신청 강의명</span>
                  <strong className="text-[#FAF7F2] font-bold">
                    {courseTitle}
                  </strong>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#9E8B7C]">클래스 구분 코드</span>
                  <span className="text-[#C6A66B] font-mono">{courseId}</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#9E8B7C]">현재 일정</span>
                  <span className="text-[#D6C6A8] font-semibold">
                    개강 일정 준비 중
                  </span>
                </div>
              </div>

              <p className="text-[#A8988B]">
                아래 버튼을 누르면 <strong className="text-[#FAF7F2]">‘[{courseTitle}] 개강 알림 신청합니다.’</strong> 문구가 자동 복사되며 자명스쿨 공식 채널로 이동합니다.
              </p>
              <p className="text-[11px] text-[#8F7D6E]">
                채팅창에 복사된 강의명을 전송해 주시면 다른 원데이 클래스와 구분하여 <strong className="text-[#D6C6A8]">{courseTitle}</strong> 개강 일정 확정 시 우선 안내해 드립니다.
              </p>

              {copiedCourseName && (
                <p className="text-xs text-emerald-400 font-semibold">
                  ✓ 블로그 클래스 신청 문구가 복사되었습니다.
                </p>
              )}
            </div>

            <div className="flex flex-col sm:flex-row gap-2.5 pt-2">
              <button
                type="button"
                onClick={handleCopyAndNotify}
                className="flex-1 min-h-[46px] px-4 rounded-xl bg-[#C6A66B] hover:bg-[#D6C6A8] text-[#1A1410] text-xs sm:text-sm font-extrabold flex items-center justify-center gap-1.5 shadow-md transition-colors"
              >
                <span>개강 알림 신청 메시지 보내기 →</span>
              </button>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="min-h-[46px] px-4 rounded-xl bg-[#241B16] hover:bg-[#2F241D] text-[#A8988B] text-xs sm:text-sm font-semibold transition-colors"
              >
                닫기
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

