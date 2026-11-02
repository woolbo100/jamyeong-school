"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import type { TarotFaqItem, TarotImageSlot } from "@/data/tarotClassData";

// ─────────────────────────────────────────────────────────────
// 1. 교체형 이미지 슬롯 컴포넌트 (확대 보기 모달 지원)
// 실제 이미지가 등록되기 전에는 '수업 결과물 예시' / '디자인 콘셉트 예시' / '강사 제작 자료' 등
// 목적에 맞는 시각적 카드 다이어그램으로 표현하며, 승인·성과 배지는 일절 사용하지 않습니다.
// ─────────────────────────────────────────────────────────────
interface TarotReplaceableImageProps {
  slot: TarotImageSlot;
  fallbackType?:
    | "concept-korean"
    | "concept-romance"
    | "concept-fantasy"
    | "concept-oracle"
    | "consistency-before"
    | "consistency-after"
    | "case-card-gen"
    | "case-frame"
    | "case-website"
    | "case-mobile-result";
  className?: string;
}

export function TarotReplaceableImage({
  slot,
  fallbackType = "concept-korean",
  className = "",
}: TarotReplaceableImageProps) {
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

              {/* 콘셉트 4종 시각 프리뷰 */}
              {fallbackType === "concept-korean" && (
                <div className="my-auto py-2 flex items-center justify-center gap-2.5">
                  <div className="w-16 h-24 rounded-lg bg-gradient-to-b from-[#2C221A] to-[#1A130E] border border-[#C6A66B]/45 p-1.5 flex flex-col justify-between shadow-md">
                    <span className="text-[8px] text-[#D6C6A8] tracking-widest">
                      MOONLIGHT
                    </span>
                    <div className="my-auto text-lg">🌕🌸</div>
                    <span className="text-[8px] text-[#C6A66B] font-semibold border-t border-[#3E3024] pt-0.5">
                      한지·달빛
                    </span>
                  </div>
                  <div className="text-left space-y-1 max-w-[130px]">
                    <span className="text-[10px] font-bold text-[#FAF7F2] block">
                      한국적 감성 덱
                    </span>
                    <p className="text-[9px] text-[#9E8B7C] leading-snug">
                      한복·꽃·달빛·한지 질감의 차분한 색감과 프레임
                    </p>
                  </div>
                </div>
              )}

              {fallbackType === "concept-romance" && (
                <div className="my-auto py-2 flex items-center justify-center gap-2.5">
                  <div className="w-16 h-24 rounded-lg bg-gradient-to-b from-[#331F24] to-[#1C1215] border border-[#D6A8B8]/40 p-1.5 flex flex-col justify-between shadow-md">
                    <span className="text-[8px] text-[#E8C5D0] tracking-widest">
                      ROMANCE
                    </span>
                    <div className="my-auto text-lg">💌✨</div>
                    <span className="text-[8px] text-[#E8C5D0] font-semibold border-t border-[#422830] pt-0.5">
                      사랑·설렘
                    </span>
                  </div>
                  <div className="text-left space-y-1 max-w-[130px]">
                    <span className="text-[10px] font-bold text-[#FAF7F2] block">
                      로맨스 감성 덱
                    </span>
                    <p className="text-[9px] text-[#9E8B7C] leading-snug">
                      따뜻한 파스텔·골드 포인트와 관계 메시지 구성
                    </p>
                  </div>
                </div>
              )}

              {fallbackType === "concept-fantasy" && (
                <div className="my-auto py-2 flex items-center justify-center gap-2.5">
                  <div className="w-16 h-24 rounded-lg bg-gradient-to-b from-[#1D1B2E] to-[#11101B] border border-[#C6A66B]/45 p-1.5 flex flex-col justify-between shadow-md">
                    <span className="text-[8px] text-[#D6C6A8] tracking-widest">
                      STARLIGHT
                    </span>
                    <div className="my-auto text-lg">🌙🌲</div>
                    <span className="text-[8px] text-[#C6A66B] font-semibold border-t border-[#2E2A44] pt-0.5">
                      별·달·숲
                    </span>
                  </div>
                  <div className="text-left space-y-1 max-w-[130px]">
                    <span className="text-[10px] font-bold text-[#FAF7F2] block">
                      신비 판타지 덱
                    </span>
                    <p className="text-[9px] text-[#9E8B7C] leading-snug">
                      별자리·숲·상징 오브제를 활용한 몽환적 무드
                    </p>
                  </div>
                </div>
              )}

              {fallbackType === "concept-oracle" && (
                <div className="my-auto py-2 flex items-center justify-center gap-2.5">
                  <div className="w-16 h-24 rounded-lg bg-gradient-to-b from-[#232920] to-[#141812] border border-[#B8C6A8]/40 p-1.5 flex flex-col justify-between shadow-md">
                    <span className="text-[8px] text-[#D2DEC5] tracking-widest">
                      MINDFUL
                    </span>
                    <div className="my-auto text-lg">🌿🕯️</div>
                    <span className="text-[8px] text-[#D2DEC5] font-semibold border-t border-[#2F382B] pt-0.5">
                      위로·질문
                    </span>
                  </div>
                  <div className="text-left space-y-1 max-w-[130px]">
                    <span className="text-[10px] font-bold text-[#FAF7F2] block">
                      마음돌봄 오라클
                    </span>
                    <p className="text-[9px] text-[#9E8B7C] leading-snug">
                      오늘의 질문과 다정한 위로 문장을 전하는 카드
                    </p>
                  </div>
                </div>
              )}

              {/* 일관성 비교: 왼쪽 (스타일과 프레임이 서로 다른 카드) */}
              {fallbackType === "consistency-before" && (
                <div className="my-auto py-2 flex items-center justify-center gap-2.5 w-full">
                  <div className="w-16 h-24 rounded-none bg-[#231C18] border-2 border-dashed border-red-400/40 p-1.5 flex flex-col justify-between">
                    <span className="text-[8px] text-red-300">수채화풍</span>
                    <span className="text-sm">🎨</span>
                    <span className="text-[7px] text-[#8F7D6E]">여백 없음</span>
                  </div>
                  <div className="w-14 h-20 rounded-2xl bg-[#1A2026] border border-zinc-600 p-1.5 flex flex-col justify-between">
                    <span className="text-[8px] text-zinc-300">3D 입체풍</span>
                    <span className="text-sm">🔮</span>
                    <span className="text-[7px] text-zinc-400">비율 다름</span>
                  </div>
                  <div className="w-16 h-26 rounded-md bg-[#2A1E17] border-4 border-double border-amber-700/50 p-1.5 flex flex-col justify-between">
                    <span className="text-[8px] text-amber-300">유화풍</span>
                    <span className="text-sm">🖼️</span>
                    <span className="text-[7px] text-[#8F7D6E]">테두리 제각각</span>
                  </div>
                </div>
              )}

              {/* 일관성 비교: 오른쪽 (공통 기준을 적용한 카드들) */}
              {fallbackType === "consistency-after" && (
                <div className="my-auto py-2 flex items-center justify-center gap-2.5 w-full">
                  {[
                    { num: "01", name: "THE MOON", icon: "🌙" },
                    { num: "02", name: "THE STAR", icon: "✨" },
                    { num: "03", name: "THE SUN", icon: "☀️" },
                  ].map((card) => (
                    <div
                      key={card.num}
                      className="w-16 h-24 rounded-lg bg-[#221A14] border-2 border-[#C6A66B]/70 p-1.5 flex flex-col justify-between shadow-md"
                    >
                      <span className="text-[7px] text-[#C6A66B] font-bold tracking-wider">
                        {card.num}
                      </span>
                      <div className="w-full h-11 rounded bg-[#16110D] border border-[#3E3024] flex items-center justify-center text-sm">
                        {card.icon}
                      </div>
                      <span className="text-[7px] text-[#FAF7F2] font-bold tracking-tight border-t border-[#3E3024] pt-0.5">
                        {card.name}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {/* 실제 사례 01: 카드 이미지 제작 화면 */}
              {fallbackType === "case-card-gen" && (
                <div className="my-auto py-2 w-full max-w-[190px] space-y-2">
                  <div className="p-2 rounded-lg bg-[#1E1713] border border-[#3E3024] text-left space-y-1">
                    <span className="text-[8px] text-[#C6A66B] font-bold block">
                      STYLE PROMPT
                    </span>
                    <div className="h-1.5 w-full rounded bg-[#D6C6A8]/40" />
                    <div className="h-1.5 w-4/5 rounded bg-[#8F7D6E]/40" />
                  </div>
                  <div className="grid grid-cols-2 gap-1.5">
                    <div className="aspect-[3/4] rounded-lg bg-[#241B15] border border-[#C6A66B]/40 flex flex-col items-center justify-center p-1">
                      <span className="text-base">🃏</span>
                      <span className="text-[8px] text-[#D6C6A8] mt-1">
                        기준 카드
                      </span>
                    </div>
                    <div className="aspect-[3/4] rounded-lg bg-[#241B15] border border-[#C6A66B]/40 flex flex-col items-center justify-center p-1">
                      <span className="text-base">✨</span>
                      <span className="text-[8px] text-[#D6C6A8] mt-1">
                        연속 생성
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* 실제 사례 02: 공통 스타일과 프레임 적용 화면 */}
              {fallbackType === "case-frame" && (
                <div className="my-auto py-2 w-full max-w-[190px] flex flex-col items-center gap-2">
                  <div className="w-24 h-32 rounded-xl bg-[#221A14] border-2 border-[#C6A66B] p-2 flex flex-col justify-between shadow-lg">
                    <div className="text-[8px] text-[#C6A66B] font-bold border-b border-[#3E3024] pb-0.5">
                      공통 상단 여백 · 번호
                    </div>
                    <div className="my-auto py-2 rounded bg-[#16110D] border border-[#3E3024] text-center">
                      <span className="text-base block">🌙</span>
                      <span className="text-[8px] text-[#A8988B]">
                        그림 영역 분리
                      </span>
                    </div>
                    <div className="text-[8px] text-[#FAF7F2] font-bold border-t border-[#3E3024] pt-0.5">
                      고정 카드명 위치
                    </div>
                  </div>
                </div>
              )}

              {/* 실제 사례 03: 직접 만든 카드가 적용된 사이트 */}
              {fallbackType === "case-website" && (
                <div className="my-auto py-2 w-full max-w-[200px] rounded-xl bg-[#1A1410] border border-[#3E3024] p-2.5 space-y-2">
                  <div className="flex items-center justify-between border-b border-[#2C221B] pb-1">
                    <span className="text-[8px] text-[#C6A66B] font-bold">
                      MY TAROT SITE
                    </span>
                    <span className="text-[8px] text-[#8F7D6E]">PC · WEB</span>
                  </div>
                  <p className="text-[9px] text-[#FAF7F2] font-bold">
                    오늘의 타로 리딩 카드 뽑기
                  </p>
                  <div className="grid grid-cols-3 gap-1">
                    {[1, 2, 3].map((n) => (
                      <div
                        key={n}
                        className="aspect-[2/3] rounded bg-[#261D16] border border-[#C6A66B]/50 flex items-center justify-center text-xs text-[#D6C6A8]"
                      >
                        ✦
                      </div>
                    ))}
                  </div>
                  <div className="py-1 rounded bg-[#C6A66B]/20 text-[8px] text-[#D6C6A8] font-bold">
                    카드를 선택해 메시지를 확인하세요
                  </div>
                </div>
              )}

              {/* 실제 사례 04: 카드 선택 후 해석이 표시되는 모바일 화면 */}
              {fallbackType === "case-mobile-result" && (
                <div className="my-auto py-2 w-full max-w-[180px] rounded-2xl bg-[#1A1410] border-2 border-[#3E3024] p-2.5 space-y-1.5">
                  <span className="text-[8px] text-[#C6A66B] font-bold block">
                    선택한 카드 해석 결과
                  </span>
                  <div className="py-2 rounded-lg bg-[#120E0B] border border-[#3E3024] text-center">
                    <span className="text-sm block">🃏 ✨</span>
                    <strong className="text-[9px] text-[#FAF7F2] block mt-0.5">
                      THE STAR · 희망의 별
                    </strong>
                  </div>
                  <p className="text-[8px] text-[#A8988B] leading-snug text-left px-1">
                    “마음속에 품어온 바람이 차분히 길을 찾는 시기입니다.”
                  </p>
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
interface TarotFaqAccordionProps {
  items: TarotFaqItem[];
}

export function TarotFaqAccordion({ items }: TarotFaqAccordionProps) {
  const [openIds, setOpenIds] = useState<string[]>([
    "tarot-faq-1",
    "tarot-faq-4",
    "tarot-faq-5",
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
// 신청 데이터에 해당 타로 클래스(AI 타로서비스·타로카드 제작, id: ai-tarot-card-design)가
// 명확히 구분되어 전달되도록 구성합니다.
// ─────────────────────────────────────────────────────────────
interface TarotCtaButtonProps {
  courseId: string;
  courseTitle: string;
  status: "open" | "scheduled" | "closed";
  applicationUrl: string | null;
  notificationUrl: string;
  ctaOpenText: string;
  ctaScheduledText: string;
  variant?: "hero" | "final" | "mobile-bar";
}

export function TarotCtaButton({
  courseId,
  courseTitle,
  status,
  applicationUrl,
  notificationUrl,
  ctaOpenText,
  ctaScheduledText,
  variant = "hero",
}: TarotCtaButtonProps) {
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
      // 클립보드 권한이 없어도 카카오 채널 이동은 정상 동작
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
          aria-labelledby="tarot-notify-title"
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
                  TAROT CLASS NOTIFICATION
                </span>
                <h3
                  id="tarot-notify-title"
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
                  ✓ 타로 클래스 신청 문구가 복사되었습니다.
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

