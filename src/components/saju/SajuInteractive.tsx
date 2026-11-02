"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import type { SajuFaqItem, SajuImageSlot } from "@/data/sajuClassData";

// ─────────────────────────────────────────────────────────────
// 1. 교체형 이미지 슬롯 컴포넌트 (확대 보기 모달 지원)
// 실제 이미지가 등록되기 전에는 '수업 결과물 예시' / '디자인 콘셉트 예시' 등
// 목적에 맞는 시각적 다이어그램으로 표현하며, 승인·성과 배지는 일절 사용하지 않습니다.
// ─────────────────────────────────────────────────────────────
interface SajuReplaceableImageProps {
  slot: SajuImageSlot;
  fallbackType?:
    | "concept-traditional"
    | "concept-mindful"
    | "concept-modern"
    | "concept-fantasy"
    | "diff-step-input"
    | "diff-step-calc"
    | "diff-step-result"
    | "case-input"
    | "case-compare"
    | "case-result"
    | "case-mobile";
  className?: string;
}

export function SajuReplaceableImage({
  slot,
  fallbackType = "concept-traditional",
  className = "",
}: SajuReplaceableImageProps) {
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
                  {slot.badgeText || "디자인 콘셉트 예시"}
                </span>
                {slot.subLabel && (
                  <span className="text-[#8F7D6E] truncate">{slot.subLabel}</span>
                )}
              </div>

              {/* 콘셉트 4종 프리뷰 */}
              {fallbackType === "concept-traditional" && (
                <div className="my-auto py-2 flex items-center justify-center gap-2.5">
                  <div className="w-18 h-24 rounded-lg bg-gradient-to-b from-[#251E19] to-[#14100D] border border-[#C6A66B]/50 p-2 flex flex-col justify-between shadow-md">
                    <span className="text-[8px] text-[#D6C6A8] tracking-widest">
                      TRADITIONAL
                    </span>
                    <div className="my-auto text-lg">📜 🏯</div>
                    <span className="text-[8px] text-[#C6A66B] font-semibold border-t border-[#3E3024] pt-0.5">
                      한지·먹색
                    </span>
                  </div>
                  <div className="text-left space-y-1 max-w-[130px]">
                    <span className="text-[10px] font-bold text-[#FAF7F2] block">
                      한국적 감성 템플릿
                    </span>
                    <p className="text-[9px] text-[#9E8B7C] leading-snug">
                      한지 질감과 먹색, 절제된 전통 문양의 차분한 사주 화면
                    </p>
                  </div>
                </div>
              )}

              {fallbackType === "concept-mindful" && (
                <div className="my-auto py-2 flex items-center justify-center gap-2.5">
                  <div className="w-18 h-24 rounded-lg bg-gradient-to-b from-[#2A231B] to-[#191410] border border-[#E0D5C1]/40 p-2 flex flex-col justify-between shadow-md">
                    <span className="text-[8px] text-[#E0D5C1] tracking-widest">
                      MINDFUL
                    </span>
                    <div className="my-auto text-lg">🌿 🍵</div>
                    <span className="text-[8px] text-[#E0D5C1] font-semibold border-t border-[#3E342A] pt-0.5">
                      크림·마음돌봄
                    </span>
                  </div>
                  <div className="text-left space-y-1 max-w-[130px]">
                    <span className="text-[10px] font-bold text-[#FAF7F2] block">
                      따뜻한 마음돌봄
                    </span>
                    <p className="text-[9px] text-[#9E8B7C] leading-snug">
                      부드러운 크림톤과 다정한 문장, 차분한 결과 카드 구성
                    </p>
                  </div>
                </div>
              )}

              {fallbackType === "concept-modern" && (
                <div className="my-auto py-2 flex items-center justify-center gap-2.5">
                  <div className="w-18 h-24 rounded-lg bg-gradient-to-b from-[#1C1F26] to-[#0F1116] border border-[#7A8B9E]/40 p-2 flex flex-col justify-between shadow-md">
                    <span className="text-[8px] text-[#C5D1DE] tracking-widest">
                      PREMIUM
                    </span>
                    <div className="my-auto text-lg">✨ 🖋️</div>
                    <span className="text-[8px] text-[#C5D1DE] font-semibold border-t border-[#29303B] pt-0.5">
                      모던·타이포
                    </span>
                  </div>
                  <div className="text-left space-y-1 max-w-[130px]">
                    <span className="text-[10px] font-bold text-[#FAF7F2] block">
                      모던 프리미엄
                    </span>
                    <p className="text-[9px] text-[#9E8B7C] leading-snug">
                      정돈된 폰트와 깊이 있는 색감, 깔끔한 카드 여백 레이아웃
                    </p>
                  </div>
                </div>
              )}

              {fallbackType === "concept-fantasy" && (
                <div className="my-auto py-2 flex items-center justify-center gap-2.5">
                  <div className="w-18 h-24 rounded-lg bg-gradient-to-b from-[#1D1829] to-[#100C19] border border-[#C6A66B]/50 p-2 flex flex-col justify-between shadow-md">
                    <span className="text-[8px] text-[#D6C6A8] tracking-widest">
                      FANTASY
                    </span>
                    <div className="my-auto text-lg">🌕 🌌</div>
                    <span className="text-[8px] text-[#C6A66B] font-semibold border-t border-[#2D243F] pt-0.5">
                      밤하늘·달빛
                    </span>
                  </div>
                  <div className="text-left space-y-1 max-w-[130px]">
                    <span className="text-[10px] font-bold text-[#FAF7F2] block">
                      동양 판타지
                    </span>
                    <p className="text-[9px] text-[#9E8B7C] leading-snug">
                      밤하늘과 달빛, 은은한 금빛 포인트를 더한 신비로운 분위기
                    </p>
                  </div>
                </div>
              )}

              {/* 핵심 차별점 3단계 프리뷰 */}
              {fallbackType === "diff-step-input" && (
                <div className="my-auto py-2 w-full max-w-[200px] rounded-xl bg-[#181310] border border-[#3E3024] p-2.5 space-y-1.5 text-left">
                  <span className="text-[9px] font-bold text-[#C6A66B] block">
                    생년월일·시간 입력
                  </span>
                  <div className="space-y-1">
                    <div className="px-2 py-1 rounded bg-[#241B16] border border-[#3A2D23] text-[8px] text-[#FAF7F2] flex justify-between">
                      <span className="text-[#8F7D6E]">생년월일</span>
                      <span>1995. 08. 15 (양력)</span>
                    </div>
                    <div className="px-2 py-1 rounded bg-[#241B16] border border-[#3A2D23] text-[8px] text-[#FAF7F2] flex justify-between">
                      <span className="text-[#8F7D6E]">출생시간</span>
                      <span>오전 07:30 (진시)</span>
                    </div>
                  </div>
                  <div className="py-1 rounded bg-[#C6A66B]/25 text-[8px] text-[#D6C6A8] text-center font-bold">
                    사주 명식 확인하기 →
                  </div>
                </div>
              )}

              {fallbackType === "diff-step-calc" && (
                <div className="my-auto py-2 w-full max-w-[200px] rounded-xl bg-[#181310] border border-[#C6A66B]/50 p-2.5 space-y-1.5 text-center">
                  <span className="text-[9px] font-bold text-[#C6A66B] block">
                    만세력 오픈소스 계산 결과
                  </span>
                  <div className="grid grid-cols-4 gap-1 text-[8px]">
                    {[
                      { col: "시주", gan: "丙", ji: "辰" },
                      { col: "일주", gan: "甲", ji: "子" },
                      { col: "월주", gan: "甲", ji: "申" },
                      { col: "년주", gan: "乙", ji: "亥" },
                    ].map((item) => (
                      <div
                        key={item.col}
                        className="p-1 rounded bg-[#221A15] border border-[#3A2D23] flex flex-col"
                      >
                        <span className="text-[7px] text-[#8F7D6E]">
                          {item.col}
                        </span>
                        <strong className="text-[#FAF7F2] font-bold">
                          {item.gan}
                        </strong>
                        <span className="text-[#C6A66B]">{item.ji}</span>
                      </div>
                    ))}
                  </div>
                  <span className="text-[8px] text-[#8F7D6E] block">
                    오행 비율 및 일간(甲木) 분석 완료
                  </span>
                </div>
              )}

              {fallbackType === "diff-step-result" && (
                <div className="my-auto py-2 w-full max-w-[200px] rounded-xl bg-[#201813] border border-[#C6A66B] p-2.5 space-y-1.5 text-left">
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] font-bold text-[#C6A66B]">
                      연결된 풀이 결과
                    </span>
                    <span className="text-[7px] px-1.5 py-0.5 rounded bg-[#C6A66B]/20 text-[#D6C6A8]">
                      API 요금 0원
                    </span>
                  </div>
                  <p className="text-[9px] font-bold text-[#FAF7F2]">
                    “푸른 숲처럼 스스로 길을 여는 갑목(甲木)의 기운”
                  </p>
                  <p className="text-[8px] text-[#A8988B] leading-snug">
                    계산된 사주 항목과 준비된 해석 데이터가 즉시 연결되어 표시됩니다.
                  </p>
                </div>
              )}

              {/* 실제 사례 4종 프리뷰 */}
              {fallbackType === "case-input" && (
                <div className="my-auto py-2 w-full max-w-[190px] rounded-xl bg-[#1A1410] border border-[#3E3024] p-2.5 space-y-1.5 text-left">
                  <span className="text-[8px] text-[#C6A66B] font-bold block">
                    INPUT VIEW
                  </span>
                  <div className="space-y-1">
                    <div className="h-5 rounded bg-[#251D17] border border-[#382C22] px-2 flex items-center text-[8px] text-[#A8988B]">
                      생년월일 입력
                    </div>
                    <div className="h-5 rounded bg-[#251D17] border border-[#382C22] px-2 flex items-center text-[8px] text-[#A8988B]">
                      출생시간 선택
                    </div>
                  </div>
                  <div className="py-1 rounded bg-[#C6A66B]/20 text-[8px] text-[#D6C6A8] text-center font-bold">
                    결과 확인 버튼
                  </div>
                </div>
              )}

              {fallbackType === "case-compare" && (
                <div className="my-auto py-2 w-full max-w-[190px] rounded-xl bg-[#1A1410] border border-[#3E3024] p-2 space-y-1.5 text-center">
                  <span className="text-[8px] text-[#C6A66B] font-bold block">
                    계산 결과 검증
                  </span>
                  <div className="grid grid-cols-2 gap-1 text-[8px]">
                    <div className="p-1 rounded bg-[#221A15] border border-[#362A20]">
                      <span className="text-[#8F7D6E] block text-[7px]">
                        오픈소스 계산
                      </span>
                      <strong className="text-[#FAF7F2]">甲子 일주</strong>
                    </div>
                    <div className="p-1 rounded bg-[#221A15] border border-[#362A20]">
                      <span className="text-[#8F7D6E] block text-[7px]">
                        기준 참고 비교
                      </span>
                      <strong className="text-emerald-400">일치 확인 ✓</strong>
                    </div>
                  </div>
                </div>
              )}

              {fallbackType === "case-result" && (
                <div className="my-auto py-2 w-full max-w-[190px] rounded-xl bg-[#1F1712] border border-[#3E3024] p-2 space-y-1 text-left">
                  <span className="text-[8px] text-[#C6A66B] font-bold block">
                    사주 분석 결과 카드
                  </span>
                  <p className="text-[9px] font-bold text-[#FAF7F2]">
                    나를 나타내는 일간: 甲木
                  </p>
                  <p className="text-[8px] text-[#9E8B7C] leading-snug">
                    사주 계산값과 매칭된 성향 및 운세 해설이 자동으로 노출됩니다.
                  </p>
                </div>
              )}

              {fallbackType === "case-mobile" && (
                <div className="my-auto py-2 w-full max-w-[180px] rounded-2xl bg-[#181310] border-2 border-[#3E3024] p-2 space-y-1.5 text-center">
                  <span className="text-[8px] text-[#C6A66B] font-bold block">
                    모바일 반응형 완성
                  </span>
                  <div className="py-2 rounded-lg bg-[#120E0B] border border-[#362920]">
                    <span className="text-sm">📱 📜</span>
                    <strong className="text-[8px] text-[#FAF7F2] block mt-0.5">
                      내 손안의 사주 서비스
                    </strong>
                  </div>
                  <span className="text-[7px] text-[#8F7D6E] block">
                    모바일 최적화 웹 브라우저 실행
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
interface SajuFaqAccordionProps {
  items: SajuFaqItem[];
}

export function SajuFaqAccordion({ items }: SajuFaqAccordionProps) {
  const [openIds, setOpenIds] = useState<string[]>([
    "saju-faq-1",
    "saju-faq-3",
    "saju-faq-4",
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
// 신청 데이터에 해당 사주 클래스(AI 사주 서비스 제작, id: ai-saju-tarot-service)가
// 명확히 구분되어 전달되도록 구성합니다.
// ─────────────────────────────────────────────────────────────
interface SajuCtaButtonProps {
  courseId: string;
  courseTitle: string;
  status: "open" | "scheduled" | "closed";
  applicationUrl: string | null;
  notificationUrl: string;
  ctaOpenText: string;
  ctaScheduledText: string;
  variant?: "hero" | "final" | "mobile-bar";
}

export function SajuCtaButton({
  courseId,
  courseTitle,
  status,
  applicationUrl,
  notificationUrl,
  ctaOpenText,
  ctaScheduledText,
  variant = "hero",
}: SajuCtaButtonProps) {
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
          aria-labelledby="saju-notify-title"
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
                  SAJU SERVICE NOTIFICATION
                </span>
                <h3
                  id="saju-notify-title"
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
                  ✓ 사주 클래스 신청 문구가 복사되었습니다.
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

