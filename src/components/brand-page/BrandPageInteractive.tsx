"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import type {
  BrandPageFaqItem,
  BrandPageImageSlot,
} from "@/data/brandPageClassData";

// ─────────────────────────────────────────────────────────────
// 1. 교체형 이미지 슬롯 컴포넌트 (확대 보기 모달 지원)
// 실제 이미지가 등록되기 전에는 '수업 결과물 예시' / '디자인 예시' 등
// 목적에 맞는 시각적 다이어그램으로 표현합니다.
// ─────────────────────────────────────────────────────────────
interface BrandPageReplaceableImageProps {
  slot: BrandPageImageSlot;
  fallbackType?:
    | "concept-warm-coach"
    | "concept-creator"
    | "concept-modern-brand"
    | "concept-mindful"
    | "diff-step-structure"
    | "diff-step-vibe"
    | "diff-step-custom"
    | "case-hero"
    | "case-about"
    | "case-career"
    | "case-service"
    | "case-mobile";
  className?: string;
}

export function BrandPageReplaceableImage({
  slot,
  fallbackType = "concept-warm-coach",
  className = "",
}: BrandPageReplaceableImageProps) {
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
            <div className="w-full h-full p-3.5 sm:p-4 flex flex-col items-center justify-between text-center select-none bg-gradient-to-b from-[#17120E] to-[#0E0B09]">
              {/* 상단 라벨 바 */}
              <div className="w-full flex items-center justify-between gap-2 text-[10px] text-[#A8988B]">
                <span className="px-2 py-0.5 rounded bg-[#241B16] border border-[#3A2D23] text-[#C6A66B] font-semibold">
                  {slot.badgeText || "디자인 예시"}
                </span>
                {slot.subLabel && (
                  <span className="text-[#8F7D6E] truncate">{slot.subLabel}</span>
                )}
              </div>

              {/* ① 따뜻한 강사·코치 (WARM COACH) */}
              {fallbackType === "concept-warm-coach" && (
                <div className="my-auto py-2 flex items-center justify-center gap-2.5">
                  <div className="w-20 h-24 rounded-lg bg-gradient-to-b from-[#33251B] to-[#1E1610] border border-[#D6C6A8]/50 p-2 flex flex-col justify-between shadow-md">
                    <span className="text-[8px] text-[#EADBCE] tracking-wider font-semibold">
                      WARM COACH
                    </span>
                    <div className="my-auto text-lg">☕ 🎙️</div>
                    <span className="text-[7px] text-[#C6A66B] font-semibold border-t border-[#463628] pt-0.5">
                      크림·베이지
                    </span>
                  </div>
                  <div className="text-left space-y-1 max-w-[130px]">
                    <span className="text-[10px] font-bold text-[#FAF7F2] block">
                      따뜻한 강사·코치
                    </span>
                    <p className="text-[9px] text-[#9E8B7C] leading-snug">
                      따뜻한 사진과 부드러운 타이포, 강의·코칭에 맞춘 신뢰감
                    </p>
                  </div>
                </div>
              )}

              {/* ② 작가·크리에이터 (CREATOR) */}
              {fallbackType === "concept-creator" && (
                <div className="my-auto py-2 flex items-center justify-center gap-2.5">
                  <div className="w-20 h-24 rounded-lg bg-gradient-to-b from-[#242426] to-[#131314] border border-[#A1A1AA]/50 p-2 flex flex-col justify-between shadow-md">
                    <span className="text-[8px] text-[#F4F4F5] tracking-wider font-semibold">
                      CREATOR
                    </span>
                    <div className="my-auto text-lg">🖋️ 📚</div>
                    <span className="text-[7px] text-[#D4D4D8] font-semibold border-t border-[#3F3F46] pt-0.5">
                      오프화이트·블랙
                    </span>
                  </div>
                  <div className="text-left space-y-1 max-w-[130px]">
                    <span className="text-[10px] font-bold text-[#FAF7F2] block">
                      작가·크리에이터
                    </span>
                    <p className="text-[9px] text-[#9E8B7C] leading-snug">
                      책, 작품, 포트폴리오를 중심으로 보여주는 감각적인 배치
                    </p>
                  </div>
                </div>
              )}

              {/* ③ 모던 1인브랜드 (MODERN BRAND) */}
              {fallbackType === "concept-modern-brand" && (
                <div className="my-auto py-2 flex items-center justify-center gap-2.5">
                  <div className="w-20 h-24 rounded-lg bg-gradient-to-b from-[#1C1F26] to-[#0E1015] border border-[#C6A66B]/50 p-2 flex flex-col justify-between shadow-md">
                    <span className="text-[8px] text-[#D6C6A8] tracking-wider font-semibold">
                      MODERN
                    </span>
                    <div className="my-auto text-lg">💼 🏛️</div>
                    <span className="text-[7px] text-[#C6A66B] font-semibold border-t border-[#2D3342] pt-0.5">
                      화이트·골드
                    </span>
                  </div>
                  <div className="text-left space-y-1 max-w-[130px]">
                    <span className="text-[10px] font-bold text-[#FAF7F2] block">
                      모던 1인브랜드
                    </span>
                    <p className="text-[9px] text-[#9E8B7C] leading-snug">
                      정돈된 폰트와 넉넉한 여백으로 전문성을 강조한 레이아웃
                    </p>
                  </div>
                </div>
              )}

              {/* ④ 감성 상담·힐링 브랜드 (MINDFUL) */}
              {fallbackType === "concept-mindful" && (
                <div className="my-auto py-2 flex items-center justify-center gap-2.5">
                  <div className="w-20 h-24 rounded-lg bg-gradient-to-b from-[#212B25] to-[#121A15] border border-[#94A3B8]/50 p-2 flex flex-col justify-between shadow-md">
                    <span className="text-[8px] text-[#CBD5E1] tracking-wider font-semibold">
                      MINDFUL
                    </span>
                    <div className="my-auto text-lg">🌿 🍵</div>
                    <span className="text-[7px] text-[#86EFAC] font-semibold border-t border-[#2E3C34] pt-0.5">
                      크림·세이지
                    </span>
                  </div>
                  <div className="text-left space-y-1 max-w-[130px]">
                    <span className="text-[10px] font-bold text-[#FAF7F2] block">
                      감성 상담·힐링
                    </span>
                    <p className="text-[9px] text-[#9E8B7C] leading-snug">
                      상담, 명상, 심리 콘텐츠에 어울리는 편안하고 내추럴한 톤
                    </p>
                  </div>
                </div>
              )}

              {/* 핵심 차별점 기둥 1: 브랜드 구조부터 정리 */}
              {fallbackType === "diff-step-structure" && (
                <div className="my-auto py-2 w-full max-w-[200px] rounded-xl bg-[#181310] border border-[#3E3024] p-2.5 space-y-1.5 text-left">
                  <span className="text-[9px] font-bold text-[#C6A66B] block">
                    브랜드 구조 워크시트
                  </span>
                  <div className="space-y-1 text-[8px]">
                    <div className="px-2 py-1 rounded bg-[#241B16] border border-[#3A2D23] text-[#FAF7F2] flex justify-between">
                      <span className="text-[#8F7D6E]">한줄 소개</span>
                      <span className="truncate">AI 콘텐츠 디렉터</span>
                    </div>
                    <div className="px-2 py-1 rounded bg-[#241B16] border border-[#3A2D23] text-[#FAF7F2] flex justify-between">
                      <span className="text-[#8F7D6E]">핵심 서비스</span>
                      <span className="truncate">강의 · 워크숍 · 자문</span>
                    </div>
                    <div className="px-2 py-1 rounded bg-[#241B16] border border-[#3A2D23] text-[#FAF7F2] flex justify-between">
                      <span className="text-[#8F7D6E]">연결 링크</span>
                      <span className="truncate">블로그 · SNS · 문의</span>
                    </div>
                  </div>
                  <div className="py-1 rounded bg-[#C6A66B]/25 text-[8px] text-[#D6C6A8] text-center font-bold">
                    구조 정리 완료 → AI 전달
                  </div>
                </div>
              )}

              {/* 핵심 차별점 기둥 2: 제작은 AI와 대화하며 */}
              {fallbackType === "diff-step-vibe" && (
                <div className="my-auto py-2 w-full max-w-[200px] rounded-xl bg-[#181310] border border-[#C6A66B]/50 p-2.5 space-y-1.5 text-left">
                  <span className="text-[9px] font-bold text-[#C6A66B] block">
                    AI 바이브코딩 프롬프트
                  </span>
                  <div className="p-1.5 rounded bg-[#221A15] border border-[#3A2D23] text-[8px] text-[#FAF7F2] space-y-0.5">
                    <span className="text-[#C6A66B] font-bold block">요청:</span>
                    <p className="text-[#A8988B] leading-tight">
                      “Hero에 한줄 소개 문구를 넣고, 버튼은 상담 문의 링크로 연결해줘.”
                    </p>
                  </div>
                  <div className="px-2 py-1 rounded bg-emerald-950/40 border border-emerald-500/30 text-[8px] text-emerald-300 text-center font-bold">
                    실시간 반영 완료 ✓ (코드 자동 생성)
                  </div>
                </div>
              )}

              {/* 핵심 차별점 기둥 3: 이후에도 직접 고칠 수 있게 */}
              {fallbackType === "diff-step-custom" && (
                <div className="my-auto py-2 w-full max-w-[200px] rounded-xl bg-[#201813] border border-[#C6A66B] p-2.5 space-y-1.5 text-left">
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] font-bold text-[#C6A66B]">
                      직접 수정 & 확장
                    </span>
                    <span className="text-[7px] px-1.5 py-0.5 rounded bg-[#C6A66B]/20 text-[#D6C6A8]">
                      외주 0원
                    </span>
                  </div>
                  <p className="text-[9px] font-bold text-[#FAF7F2]">
                    “새로운 강의가 열리면 직접 카드 추가”
                  </p>
                  <p className="text-[8px] text-[#A8988B] leading-snug">
                    사진 교체, 문구 수정, 링크 추가를 내가 원하는 시간에 스스로 수정합니다.
                  </p>
                </div>
              )}

              {/* 실제 사례 프리뷰: CASE 01 Hero */}
              {fallbackType === "case-hero" && (
                <div className="my-auto py-2 w-full max-w-[190px] rounded-xl bg-[#1A1410] border border-[#3E3024] p-2.5 space-y-1.5 text-left">
                  <span className="text-[8px] text-[#C6A66B] font-bold block">
                    HERO SCREEN
                  </span>
                  <div className="space-y-1">
                    <div className="h-5 rounded bg-[#251D17] border border-[#382C22] px-2 flex items-center text-[8px] text-[#FAF7F2] font-semibold truncate">
                      김자명 · AI 크리에이터
                    </div>
                    <div className="h-5 rounded bg-[#251D17] border border-[#382C22] px-2 flex items-center text-[7px] text-[#A8988B] truncate">
                      “AI와 콘텐츠로 나만의 일을 만드는 사람”
                    </div>
                  </div>
                  <div className="py-1 rounded bg-[#C6A66B]/20 text-[8px] text-[#D6C6A8] text-center font-bold">
                    프로필 소개 & 문의 버튼
                  </div>
                </div>
              )}

              {/* 실제 사례 프리뷰: CASE 02 About */}
              {fallbackType === "case-about" && (
                <div className="my-auto py-2 w-full max-w-[190px] rounded-xl bg-[#1A1410] border border-[#3E3024] p-2 space-y-1.5 text-left">
                  <span className="text-[8px] text-[#C6A66B] font-bold block">
                    ABOUT & STORY
                  </span>
                  <div className="p-1.5 rounded bg-[#221A15] border border-[#362A20] space-y-1 text-[8px]">
                    <span className="text-[#FAF7F2] font-bold block">
                      Who I Am
                    </span>
                    <p className="text-[#A8988B] text-[7px] leading-tight">
                      10년간의 브랜딩 경험과 AI 도구를 결합해 1인 창업가의 자립을 돕습니다.
                    </p>
                  </div>
                </div>
              )}

              {/* 실제 사례 프리뷰: CASE 03 Career */}
              {fallbackType === "case-career" && (
                <div className="my-auto py-2 w-full max-w-[190px] rounded-xl bg-[#1F1712] border border-[#3E3024] p-2 space-y-1 text-left">
                  <span className="text-[8px] text-[#C6A66B] font-bold block">
                    CAREER & PORTFOLIO
                  </span>
                  <div className="grid grid-cols-2 gap-1 text-[7px] text-center">
                    <div className="p-1 rounded bg-[#261E18] border border-[#3C2E23]">
                      <span className="text-[#C6A66B] block font-bold">강의/출판</span>
                      <span className="text-[#FAF7F2]">누적 50회+</span>
                    </div>
                    <div className="p-1 rounded bg-[#261E18] border border-[#3C2E23]">
                      <span className="text-[#C6A66B] block font-bold">프로젝트</span>
                      <span className="text-[#FAF7F2]">12건 완료</span>
                    </div>
                  </div>
                </div>
              )}

              {/* 실제 사례 프리뷰: CASE 04 Service */}
              {fallbackType === "case-service" && (
                <div className="my-auto py-2 w-full max-w-[190px] rounded-xl bg-[#1F1712] border border-[#3E3024] p-2 space-y-1 text-left">
                  <span className="text-[8px] text-[#C6A66B] font-bold block">
                    SERVICE & CONTACT
                  </span>
                  <div className="space-y-1 text-[7px]">
                    <div className="p-1 rounded bg-[#261E18] border border-[#3C2E23] flex justify-between">
                      <span className="text-[#FAF7F2]">1:1 맞춤 컨설팅</span>
                      <span className="text-[#C6A66B] font-bold">신청 →</span>
                    </div>
                    <div className="p-1 rounded bg-[#261E18] border border-[#3C2E23] flex justify-between">
                      <span className="text-[#FAF7F2]">기업 출강 & 워크숍</span>
                      <span className="text-[#C6A66B] font-bold">문의 →</span>
                    </div>
                  </div>
                </div>
              )}

              {/* 실제 사례 프리뷰: CASE 05 Mobile */}
              {fallbackType === "case-mobile" && (
                <div className="my-auto py-2 w-full max-w-[180px] rounded-2xl bg-[#181310] border-2 border-[#3E3024] p-2 space-y-1.5 text-center">
                  <span className="text-[8px] text-[#C6A66B] font-bold block">
                    모바일 반응형 완성
                  </span>
                  <div className="py-2 rounded-lg bg-[#120E0B] border border-[#362920]">
                    <span className="text-sm">📱 🔗</span>
                    <strong className="text-[8px] text-[#FAF7F2] block mt-0.5">
                      내 손안의 브랜드 프로필
                    </strong>
                  </div>
                  <span className="text-[7px] text-[#8F7D6E] block">
                    스마트폰 브라우저 최적화
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
interface BrandPageFaqAccordionProps {
  items: BrandPageFaqItem[];
}

export function BrandPageFaqAccordion({ items }: BrandPageFaqAccordionProps) {
  const [openIds, setOpenIds] = useState<string[]>([
    "brand-faq-1",
    "brand-faq-2",
    "brand-faq-3",
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
interface BrandPageCtaButtonProps {
  courseId: string;
  courseTitle: string;
  status: "open" | "scheduled" | "closed";
  applicationUrl: string | null;
  notificationUrl: string;
  ctaOpenText: string;
  ctaScheduledText: string;
  variant?: "hero" | "final" | "mobile-bar";
}

export function BrandPageCtaButton({
  courseId,
  courseTitle,
  status,
  applicationUrl,
  notificationUrl,
  ctaOpenText,
  ctaScheduledText,
  variant = "hero",
}: BrandPageCtaButtonProps) {
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
      // 클립보드 권한이 없어도 채널 이동은 정상 진행
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
          aria-labelledby="brand-notify-title"
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
                  BRAND PAGE NOTIFICATION
                </span>
                <h3
                  id="brand-notify-title"
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
                아래 버튼을 누르면 <strong className="text-[#FAF7F2]">‘[{courseTitle}] 개강 알림 신청합니다.’</strong> 문구가 자동 복사되며 자명스쿨 공식 카카오 채널로 이동합니다.
              </p>
              <p className="text-[11px] text-[#8F7D6E]">
                채팅창에 복사된 강의명을 전송해 주시면 다른 원데이 클래스와 구분하여 <strong className="text-[#D6C6A8]">{courseTitle}</strong> 개강 일정 확정 시 우선 안내해 드립니다.
              </p>

              {copiedCourseName && (
                <p className="text-xs text-emerald-400 font-semibold">
                  ✓ 문구가 클립보드에 복사되었습니다! 채널 채팅창에 붙여넣어 주세요.
                </p>
              )}
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <button
                type="button"
                onClick={handleCopyAndNotify}
                className="w-full py-3.5 px-4 rounded-xl bg-[#C6A66B] hover:bg-[#D6C6A8] text-[#1A1410] font-bold text-sm flex items-center justify-center gap-2 shadow-md transition-colors"
              >
                <span>문구 복사하고 카카오 채널로 이동</span>
                <span>→</span>
              </button>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="w-full py-2.5 text-center text-xs text-[#8F7D6E] hover:text-[#D6C6A8]"
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

