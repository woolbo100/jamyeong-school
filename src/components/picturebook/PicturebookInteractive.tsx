"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import type { FaqItem, PicturebookImageSlot } from "@/data/picturebookClassData";

// ─────────────────────────────────────────────────────────────
// 1. 교체형 이미지 슬롯 컴포넌트 (확대 보기 모달 지원)
// - 실제 이미지(src)가 있으면 비율과 contain/cover 설정에 맞춰 렌더링
// - 실제 이미지가 아직 없으면 가짜 제목/저자명이나 내부 작업 메모 노출 없이
//   주제에 맞는 깔끔한 그래픽 일러스트형 목업 카드로 표현
// ─────────────────────────────────────────────────────────────
interface ReplaceableImageFrameProps {
  slot: PicturebookImageSlot;
  fallbackVariant?:
    | "cover-spread"
    | "spread-detail"
    | "character-sequence"
    | "coloring-lineart"
    | "canva-editor"
    | "class-kit"
    | "publishing-platform";
  className?: string;
}

export function ReplaceableImageFrame({
  slot,
  fallbackVariant = "cover-spread",
  className = "",
}: ReplaceableImageFrameProps) {
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
            /* 실제 이미지 교체 전 그래픽 목업 프레임 (내부 작업 메모 및 가상 도서명 배제) */
            <div className="w-full h-full p-4 flex flex-col items-center justify-between text-center select-none bg-gradient-to-b from-[#17120E] to-[#0E0B09]">
              <div className="w-full flex items-center justify-between text-[10px] text-[#A8988B]">
                <span className="px-2 py-0.5 rounded bg-[#241B16] border border-[#3A2D23] text-[#C6A66B] font-semibold">
                  {slot.categoryLabel || "실습 화면 구성"}
                </span>
                {slot.statusBadge && (
                  <span className="text-[#8F7D6E]">{slot.statusBadge}</span>
                )}
              </div>

              {/* 변형별 시각 다이어그램 표현 */}
              {fallbackVariant === "cover-spread" && (
                <div className="my-auto py-2 flex items-center justify-center gap-2.5 w-full">
                  {/* 표지 모형 */}
                  <div className="w-20 h-26 rounded-lg bg-gradient-to-br from-[#2B2119] to-[#1B140F] border border-[#C6A66B]/40 p-2 flex flex-col justify-between shadow-md">
                    <div className="w-full h-12 rounded bg-[#C6A66B]/15 border border-[#C6A66B]/25 flex items-center justify-center text-base">
                      📖
                    </div>
                    <div className="space-y-1 text-left">
                      <div className="h-1.5 w-12 rounded bg-[#D6C6A8]/60" />
                      <div className="h-1 w-8 rounded bg-[#8F7D6E]/50" />
                    </div>
                  </div>
                  {/* 펼침면 모형 */}
                  <div className="w-28 h-24 rounded-lg bg-[#1E1713] border border-[#3E3024] p-1.5 grid grid-cols-2 gap-1 shadow-md relative">
                    <div className="rounded bg-[#2A201A] flex items-center justify-center text-xs">
                      🎨
                    </div>
                    <div className="rounded bg-[#241B16] p-1.5 flex flex-col justify-center gap-1">
                      <div className="h-1 w-full rounded bg-[#D6C6A8]/50" />
                      <div className="h-1 w-4/5 rounded bg-[#D6C6A8]/40" />
                      <div className="h-1 w-3/5 rounded bg-[#8F7D6E]/40" />
                    </div>
                  </div>
                </div>
              )}

              {fallbackVariant === "spread-detail" && (
                <div className="my-auto py-2 w-full max-w-[240px]">
                  <div className="grid grid-cols-2 rounded-lg bg-[#1E1713] border border-[#4A392B] overflow-hidden shadow-inner">
                    <div className="p-3 border-r border-[#33271E] bg-gradient-to-br from-[#2A2019] to-[#1A1410] flex flex-col items-center justify-center gap-1.5">
                      <span className="text-lg">🌅</span>
                      <span className="text-[10px] text-[#D6C6A8] font-medium">
                        좌측 장면 연결
                      </span>
                    </div>
                    <div className="p-3 bg-gradient-to-bl from-[#2A2019] to-[#1A1410] flex flex-col items-center justify-center gap-1.5">
                      <span className="text-lg">📝</span>
                      <span className="text-[10px] text-[#D6C6A8] font-medium">
                        우측 이야기 배치
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {fallbackVariant === "character-sequence" && (
                <div className="my-auto py-2 grid grid-cols-3 gap-1.5 w-full max-w-[230px]">
                  {["장면 01", "장면 02", "장면 03"].map((scene, idx) => (
                    <div
                      key={idx}
                      className="p-2 rounded-lg bg-[#1E1713] border border-[#3E3024] flex flex-col items-center gap-1"
                    >
                      <div className="w-8 h-8 rounded-full bg-[#C6A66B]/15 border border-[#C6A66B]/30 flex items-center justify-center text-xs text-[#D6C6A8]">
                        ✦
                      </div>
                      <span className="text-[9px] text-[#D6C6A8] font-semibold">
                        {scene}
                      </span>
                      <span className="text-[8px] text-[#8F7D6E]">동일 캐릭터</span>
                    </div>
                  ))}
                </div>
              )}

              {fallbackVariant === "coloring-lineart" && (
                <div className="my-auto py-2 flex items-center justify-center gap-3 w-full max-w-[240px]">
                  <div className="flex-1 p-2.5 rounded-lg bg-[#241B16] border border-[#3E3024] text-center">
                    <span className="text-base block mb-1">🎨</span>
                    <span className="text-[10px] text-[#D6C6A8] font-semibold block">
                      컬러 장면
                    </span>
                    <span className="text-[9px] text-[#8F7D6E]">기본 채색 화풍</span>
                  </div>
                  <span className="text-[#C6A66B] font-bold text-xs">→</span>
                  <div className="flex-1 p-2.5 rounded-lg bg-[#FAF7F2] border border-[#D6C6A8] text-center">
                    <span className="text-base block mb-1">✏️</span>
                    <span className="text-[10px] text-[#2E2723] font-bold block">
                      선화 변환
                    </span>
                    <span className="text-[9px] text-[#6E5A4D]">컬러링북 도안</span>
                  </div>
                </div>
              )}

              {fallbackVariant === "canva-editor" && (
                <div className="my-auto py-2 w-full max-w-[230px] rounded-lg bg-[#1A1411] border border-[#3E3024] p-2.5 space-y-2">
                  <div className="flex items-center justify-between border-b border-[#2C221B] pb-1.5">
                    <span className="text-[9px] text-[#C6A66B] font-bold">
                      Canva 순서 템플릿
                    </span>
                    <span className="text-[9px] text-[#8F7D6E]">표지 · 내지</span>
                  </div>
                  <div className="grid grid-cols-3 gap-1.5">
                    <div className="h-10 rounded bg-[#261D17] border border-[#3E3024] flex items-center justify-center text-[9px] text-[#A8988B]">
                      앞표지
                    </div>
                    <div className="h-10 rounded bg-[#261D17] border border-[#C6A66B]/40 flex items-center justify-center text-[9px] text-[#D6C6A8] font-bold">
                      펼친 내지
                    </div>
                    <div className="h-10 rounded bg-[#261D17] border border-[#3E3024] flex items-center justify-center text-[9px] text-[#A8988B]">
                      뒤표지
                    </div>
                  </div>
                </div>
              )}

              {fallbackVariant === "class-kit" && (
                <div className="my-auto py-3 grid grid-cols-2 sm:grid-cols-3 gap-2 w-full max-w-lg">
                  {[
                    "01. 그림책 기획 스킬",
                    "02. 그림책 순서 템플릿",
                    "03. 클릭형 자동 생성 도구",
                    "04. 1인 출판사 등록 전자책",
                    "05. 출판 등록 전 1:1 컨설팅",
                    "06. 부크크 등록 실전 노하우",
                  ].map((label, idx) => (
                    <div
                      key={idx}
                      className="px-2.5 py-2 rounded-lg bg-[#1E1713] border border-[#362920] text-[10px] sm:text-[11px] text-[#D6C6A8] font-medium text-left flex items-center gap-1.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C6A66B] shrink-0" />
                      <span className="truncate">{label}</span>
                    </div>
                  ))}
                </div>
              )}

              {fallbackVariant === "publishing-platform" && (
                <div className="my-auto py-2 w-full max-w-[230px] space-y-1.5">
                  <div className="p-2 rounded-lg bg-[#1E1713] border border-[#3E3024] flex items-center justify-between text-[10px]">
                    <span className="text-[#FAF7F2] font-semibold">유페이퍼 전자책</span>
                    <span className="text-[#C6A66B]">EPUB · PDF 등록 흐름</span>
                  </div>
                  <div className="p-2 rounded-lg bg-[#1E1713] border border-[#3E3024] flex items-center justify-between text-[10px]">
                    <span className="text-[#FAF7F2] font-semibold">부크크 POD 종이책</span>
                    <span className="text-[#D6C6A8]">표지·본문 규격 점검</span>
                  </div>
                </div>
              )}

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
// 2. 접근성을 준수하는 FAQ 아코디언 컴포넌트 (8. 모바일·접근성 설정)
// - 키보드 조작 (Enter/Space/Tab) 및 aria-expanded, aria-controls 적용
// ─────────────────────────────────────────────────────────────
interface PicturebookFaqAccordionProps {
  items: FaqItem[];
  termsUrl: string;
}

export function PicturebookFaqAccordion({
  items,
  termsUrl,
}: PicturebookFaqAccordionProps) {
  // 처음 방문 시 주요 질문(Q1, Q2)을 열어두어 가독성을 높이고 클릭으로 여닫을 수 있게 구현
  const [openIds, setOpenIds] = useState<string[]>(["faq-1", "faq-2"]);

  const toggleItem = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="space-y-3.5">
      {items.map((item, idx) => {
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
                  <span className="text-[#8E6D38] shrink-0">
                    Q{idx + 1}.
                  </span>
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
                <p>
                  {item.answer}
                  {item.hasTermsLink && (
                    <>
                      {" "}
                      <Link
                        href={termsUrl}
                        className="text-[#8E6D38] font-bold underline underline-offset-4 hover:text-[#5C4C40] transition-colors"
                      >
                        취소·환불 규정 확인하기 →
                      </Link>
                    </>
                  )}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// 3. 신청 / 개강 알림 연결 모달 & CTA 버튼 컴포넌트 (7. 신청·결제·알림 연결)
// - 상단·하단·모바일 고정 버튼이 모두 동일한 상태와 강의 식별자(AI 그림책 출판 원데이)를 참조
// - 일정 준비 중일 때는 신청 확인 안내창을 통해 강의명이 명확히 식별된 상태로
//   카카오 채널 알림/문의로 연결하여, 버튼만 헛돌거나 다른 강의와 혼동되지 않게 구현
// ─────────────────────────────────────────────────────────────
interface PicturebookCtaButtonProps {
  courseId: string;
  courseTitle: string;
  status: "open" | "scheduled" | "closed";
  applicationUrl: string | null;
  notificationUrl: string;
  ctaOpenText: string;
  ctaScheduledText: string;
  variant?: "nav" | "hero" | "final" | "mobile-bar";
}

export function PicturebookCtaButton({
  courseId,
  courseTitle,
  status,
  applicationUrl,
  notificationUrl,
  ctaOpenText,
  ctaScheduledText,
  variant = "hero",
}: PicturebookCtaButtonProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [copiedCourseName, setCopiedCourseName] = useState(false);

  const isOpen = status === "open" && Boolean(applicationUrl);
  const buttonLabel = isOpen ? ctaOpenText : ctaScheduledText;

  const handleCopyAndNotify = async () => {
    const messageText = `[${courseTitle}] 개강 알림 및 일정 안내를 신청합니다.`;
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

  // 스타일 분기
  let buttonClassName = "";
  if (variant === "nav") {
    buttonClassName =
      "px-3.5 sm:px-4 py-1.5 rounded-full bg-[#C6A66B] hover:bg-[#D6C6A8] text-[#1A1410] text-xs font-bold transition-colors whitespace-nowrap";
  } else if (variant === "hero") {
    buttonClassName =
      "w-full sm:w-auto min-h-[48px] px-8 rounded-xl bg-[#2E2723] hover:bg-[#1F1916] text-[#FFFBD1] text-base font-bold inline-flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all group";
  } else if (variant === "final") {
    buttonClassName =
      "w-full min-h-[54px] py-4 px-6 rounded-2xl bg-[#C6A66B] hover:bg-[#D6C6A8] text-[#1A1410] font-extrabold text-base md:text-lg flex items-center justify-center gap-2 shadow-lg transition-all group";
  } else {
    // mobile-bar
    buttonClassName =
      "px-5 min-h-[44px] rounded-xl bg-[#C6A66B] hover:bg-[#D6C6A8] text-[#1A1410] text-xs sm:text-sm font-extrabold flex items-center justify-center gap-1.5 shrink-0 shadow-md transition-colors";
  }

  // 모집 중이고 실제 신청 URL이 등록된 경우
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
        {variant !== "nav" && (
          <span className="group-hover:translate-x-1 transition-transform">
            →
          </span>
        )}
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
        {variant !== "nav" && (
          <span className="group-hover:translate-x-1 transition-transform">
            →
          </span>
        )}
      </button>

      {/* 개강 알림 신청 확인 모달 */}
      {isModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="picturebook-notify-title"
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
                  CLASS NOTIFICATION
                </span>
                <h3
                  id="picturebook-notify-title"
                  className="text-lg font-extrabold text-[#FAF7F2] break-keep"
                >
                  {courseTitle} 개강 알림 안내
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
                  <span className="text-[#9E8B7C]">강의 식별코드</span>
                  <span className="text-[#C6A66B] font-mono">{courseId}</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#9E8B7C]">현재 상태</span>
                  <span className="text-[#D6C6A8] font-semibold">
                    개강 일정 준비 중
                  </span>
                </div>
              </div>

              <p className="text-[#A8988B]">
                아래 버튼을 누르면 <strong className="text-[#FAF7F2]">‘[{courseTitle}] 개강 알림 신청’</strong> 문구가 자동 복사되며 자명스쿨 공식 카카오톡 채널로 연결됩니다.
              </p>
              <p className="text-[11px] text-[#8F7D6E]">
                채팅창에 복사된 강의명을 남겨주시면 운영자가 <strong className="text-[#D6C6A8]">{courseTitle}</strong> 대기 명단으로 확인하여 일정 확정 시 가장 먼저 안내해 드립니다.
              </p>

              {copiedCourseName && (
                <p className="text-xs text-emerald-400 font-semibold">
                  ✓ 강의 신청 문구가 클립보드에 복사되었습니다.
                </p>
              )}
            </div>

            <div className="flex flex-col sm:flex-row gap-2.5 pt-2">
              <button
                type="button"
                onClick={handleCopyAndNotify}
                className="flex-1 min-h-[46px] px-4 rounded-xl bg-[#C6A66B] hover:bg-[#D6C6A8] text-[#1A1410] text-xs sm:text-sm font-extrabold flex items-center justify-center gap-1.5 shadow-md transition-colors"
              >
                <span>카카오 채널에서 개강 알림 신청하기 →</span>
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

