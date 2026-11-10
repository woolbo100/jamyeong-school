"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import type { FaqItem } from "@/data/paperbookClassData";

// ─────────────────────────────────────────────────────────────
// 1. 접근성을 준수하는 FAQ 아코디언 컴포넌트
// - 키보드 조작 (Enter/Space/Tab) 및 aria-expanded, aria-controls 지원
// ─────────────────────────────────────────────────────────────
interface PaperbookFaqAccordionProps {
  items: FaqItem[];
  termsUrl: string;
}

export function PaperbookFaqAccordion({
  items,
  termsUrl,
}: PaperbookFaqAccordionProps) {
  // 처음 방문 시 주요 질문(Q1, Q2)을 열어두어 가독성 제공
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
// 2. 신청 / 개강 알림 연결 모달 & CTA 버튼 컴포넌트
// ─────────────────────────────────────────────────────────────
interface PaperbookCtaButtonProps {
  courseId: string;
  courseTitle: string;
  status: "open" | "scheduled" | "closed";
  applicationUrl: string | null;
  notificationUrl: string;
  ctaOpenText: string;
  ctaScheduledText: string;
  variant?: "nav" | "hero" | "final" | "mobile-bar";
}

export function PaperbookCtaButton({
  courseId,
  courseTitle,
  status,
  applicationUrl,
  notificationUrl,
  ctaOpenText,
  ctaScheduledText,
  variant = "hero",
}: PaperbookCtaButtonProps) {
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
      // 클립보드 미지원 환경 폴백
    }
    window.open(notificationUrl, "_blank", "noopener,noreferrer");
  };

  // 스타일 분기
  let buttonClassName = "";
  if (variant === "nav") {
    buttonClassName =
      "px-3.5 sm:px-4 py-1.5 rounded-full bg-[#C6A66B] hover:bg-[#D6C6A8] text-[#1A1410] text-xs font-bold transition-colors whitespace-nowrap shadow-sm";
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

  // 모집 중이고 실제 신청 URL이 등록된 경우 바로 링크 이동
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
        onClick={() => setIsModalOpen(true)}
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
      </button>

      {/* 개강 알림 모달 */}
      {isModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="paperbook-modal-title"
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="w-full max-w-md rounded-3xl bg-[#1A1411] border border-[#4A3B2F] p-6 sm:p-7 shadow-2xl space-y-5 text-left relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-[#2E241E]">
              <span className="text-xs font-bold text-[#C6A66B] flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#C6A66B]" />
                개강 알림 신청
              </span>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="w-8 h-8 rounded-full bg-[#241B16] text-[#D6C6A8] hover:text-white flex items-center justify-center text-xs font-bold transition-colors"
                aria-label="닫기"
              >
                ✕
              </button>
            </div>

            <div className="space-y-2">
              <h3
                id="paperbook-modal-title"
                className="text-lg sm:text-xl font-bold text-[#FAF7F2] break-keep"
              >
                {courseTitle} <br />
                다음 클래스 개강 알림 받기
              </h3>
              <p className="text-xs sm:text-sm text-[#A8988B] leading-relaxed break-keep">
                현재 다음 기수 일정을 조율 중입니다. 카카오 채널을 통해 개강 일정과 얼리버드 혜택을 가장 먼저 받아보실 수 있습니다.
              </p>
            </div>

            <div className="p-3.5 rounded-2xl bg-[#231A15] border border-[#3E2F25] space-y-1.5 text-xs">
              <div className="flex items-center justify-between text-[#8F7D6E]">
                <span>신청 과정</span>
                <span className="text-[#D6C6A8] font-semibold">{courseTitle}</span>
              </div>
              <div className="flex items-center justify-between text-[#8F7D6E]">
                <span>진행 형태</span>
                <span className="text-[#D6C6A8]">Zoom 실시간 3~4시간 실습</span>
              </div>
              <div className="flex items-center justify-between text-[#8F7D6E]">
                <span>알림 채널</span>
                <span className="text-[#C6A66B] font-bold">자명스쿨 공식 카카오 채널</span>
              </div>
            </div>

            <div className="space-y-2.5 pt-1">
              <button
                type="button"
                onClick={handleCopyAndNotify}
                className="w-full py-3.5 px-5 rounded-xl bg-[#FEE500] hover:bg-[#FADA0A] text-[#191919] font-bold text-sm flex items-center justify-center gap-2 shadow-md transition-all"
              >
                <span>💬 카카오톡으로 개강 알림 받기</span>
                <span>→</span>
              </button>
              {copiedCourseName && (
                <p className="text-[11px] text-[#C6A66B] text-center">
                  ✓ 과정명이 클립보드에 복사되었습니다. 카카오톡에 바로 붙여넣어 문의하실 수 있습니다.
                </p>
              )}
              <p className="text-[11px] text-[#8F7D6E] text-center">
                문의 사항이나 사전 희망 요일도 카카오톡으로 편하게 남겨주세요.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// ─────────────────────────────────────────────────────────────
// 3. 모바일 하단 플로팅 바 (Hero 영역 스크롤 이후 편의 제공)
// ─────────────────────────────────────────────────────────────
interface PaperbookFloatingBarProps {
  courseId: string;
  courseTitle: string;
  status: "open" | "scheduled" | "closed";
  applicationUrl: string | null;
  notificationUrl: string;
  ctaOpenText: string;
  ctaScheduledText: string;
}

export function PaperbookFloatingBar({
  courseId,
  courseTitle,
  status,
  applicationUrl,
  notificationUrl,
  ctaOpenText,
  ctaScheduledText,
}: PaperbookFloatingBarProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // 300px 이상 스크롤되면 모바일 바 표시
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <aside
      aria-label="빠른 신청 고정 메뉴"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#161210]/95 backdrop-blur-md border-t border-[#3E3024] p-3 shadow-2xl transition-all duration-300"
    >
      <div className="max-w-md mx-auto flex items-center justify-between gap-3">
        <div className="flex-1 min-w-0">
          <p className="text-[10px] text-[#C6A66B] font-bold truncate">
            {courseTitle}
          </p>
          <p className="text-xs font-bold text-[#FAF7F2] truncate">
            단 하루 만에 완성하는 내 첫 종이책
          </p>
        </div>

        <PaperbookCtaButton
          courseId={courseId}
          courseTitle={courseTitle}
          status={status}
          applicationUrl={applicationUrl}
          notificationUrl={notificationUrl}
          ctaOpenText={ctaOpenText}
          ctaScheduledText={ctaScheduledText}
          variant="mobile-bar"
        />
      </div>
    </aside>
  );
}

// ─────────────────────────────────────────────────────────────
// 4. Hero 우측 감성 종이책 그래픽 목업
// ─────────────────────────────────────────────────────────────
export function PaperbookHeroVisual() {
  return (
    <div className="w-full max-w-[340px] sm:max-w-[400px] rounded-[32px] overflow-hidden border-[6px] border-[#2A231F] bg-[#110E0C] shadow-2xl p-4 sm:p-5 space-y-4 select-none">
      {/* 상단 작은 배지 */}
      <div className="flex items-center justify-between px-3 py-1.5 rounded-xl bg-[#221A15] border border-[#3E3127] text-xs">
        <span className="font-bold text-[#D6C6A8] flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-[#C6A66B]" />
          실제 종이책 출판 규격
        </span>
        <span className="text-[10px] text-[#C6A66B] font-semibold tracking-wider">
          POD SPEC MOCKUP
        </span>
      </div>

      {/* 중심: 종이책 표지 전개도 (앞표지 + 책등 + 뒤표지) */}
      <div className="p-4 rounded-2xl bg-gradient-to-br from-[#241B15] via-[#1C1510] to-[#140F0C] border border-[#4A3B2F] shadow-lg">
        <div className="flex items-center justify-between mb-2.5">
          <span className="text-[10px] px-2 py-0.5 rounded bg-[#C6A66B]/20 text-[#D6C6A8] font-bold">
            일체형 표지 전개도 실습
          </span>
          <span className="text-[10px] text-[#A8988B]">
            앞표지 · 책등(두께) · 뒤표지
          </span>
        </div>

        {/* 표지 3단 전개도 그래픽 */}
        <div className="aspect-[16/10] rounded-xl bg-[#18130F] border border-[#3E3024] p-3 flex flex-col justify-between relative overflow-hidden">
          {/* 상단 눈금 가이드 */}
          <div className="flex items-center justify-between text-[9px] text-[#8F7D6E] pb-1 border-b border-[#2B2119]">
            <span>← 뒤표지 (148mm)</span>
            <span className="text-[#C6A66B] font-bold">책등 (Spine)</span>
            <span>앞표지 (148mm) →</span>
          </div>

          {/* 중앙 3단 분할 뷰 */}
          <div className="grid grid-cols-12 gap-1 my-auto h-24 items-stretch">
            {/* 뒤표지 (5칸) */}
            <div className="col-span-5 rounded-lg bg-[#221A14] border border-dashed border-[#443528] p-2 flex flex-col justify-between text-left">
              <span className="text-[8px] text-[#8F7D6E]">뒤표지 카피</span>
              <div className="space-y-1">
                <div className="h-1 w-full rounded bg-[#D6C6A8]/30" />
                <div className="h-1 w-3/4 rounded bg-[#D6C6A8]/20" />
              </div>
              <div className="flex items-center justify-between text-[7px] text-[#8F7D6E] pt-1 border-t border-[#2A2119]">
                <span>ISBN 바코드</span>
                <span>정가 표시</span>
              </div>
            </div>

            {/* 책등 스파인 (2칸) */}
            <div className="col-span-2 rounded bg-gradient-to-r from-[#2A2018] via-[#35281E] to-[#2A2018] border border-[#C6A66B]/40 flex flex-col items-center justify-center p-1 shadow-sm">
              <span className="text-[7px] text-[#C6A66B] font-bold [writing-mode:vertical-rl] tracking-widest">
                내 첫 종이책
              </span>
            </div>

            {/* 앞표지 (5칸) */}
            <div className="col-span-5 rounded-lg bg-gradient-to-br from-[#2D2119] to-[#1E1712] border border-[#C6A66B]/50 p-2 flex flex-col justify-between text-center relative overflow-hidden shadow-inner">
              <span className="text-[8px] text-[#C6A66B] font-bold">
                AI 감성 에세이
              </span>
              <div className="my-auto py-1">
                <span className="text-base block mb-0.5">📖</span>
                <p className="text-[9px] font-bold text-[#FAF7F2] truncate">
                  나의 첫 이야기
                </p>
                <p className="text-[7px] text-[#9E8B7C]">지은이 | 내 이름</p>
              </div>
              <span className="text-[7px] text-[#8E6D38]">자명스쿨 출판</span>
            </div>
          </div>

          {/* 하단 재단 안전선 안내 */}
          <div className="flex items-center justify-between text-[8px] text-[#8F7D6E] pt-1 border-t border-[#2B2119]">
            <span className="text-[#C6A66B]">재단선 (3mm 블리드)</span>
            <span>Canva 규격 맞춤 내보내기</span>
          </div>
        </div>
      </div>

      {/* 보조: 펼친 내지 (좌우 양면 페이지) */}
      <div className="p-3.5 rounded-2xl bg-[#1B1511] border border-[#382C23]">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[10px] font-bold text-[#C6A66B]">
            보조 · 판형 맞춤 펼친 내지
          </span>
          <span className="text-[10px] text-[#8F7D6E]">
            A5 표준 판형 (148×210)
          </span>
        </div>

        <div className="grid grid-cols-2 gap-2 p-2 rounded-xl bg-[#140F0C] border border-[#2B2119]">
          {/* 좌측 페이지: 감성 문장/시 */}
          <div className="p-2.5 rounded-lg bg-[#1F1813] border border-[#382B21] text-left space-y-1.5 flex flex-col justify-between min-h-[70px]">
            <div className="space-y-1">
              <span className="text-[8px] text-[#C6A66B] font-bold block">
                01. 첫 문장
              </span>
              <div className="h-1 w-full rounded bg-[#D6C6A8]/40" />
              <div className="h-1 w-4/5 rounded bg-[#D6C6A8]/30" />
              <div className="h-1 w-3/5 rounded bg-[#8F7D6E]/30" />
            </div>
            <span className="text-[7px] text-[#6E5A4D] self-center">12</span>
          </div>

          {/* 우측 페이지: 질문 / 필사 / 여백 기록 */}
          <div className="p-2.5 rounded-lg bg-[#1F1813] border border-[#382B21] text-left space-y-1.5 flex flex-col justify-between min-h-[70px]">
            <div className="space-y-1">
              <span className="text-[8px] text-[#8E6D38] font-bold block">
                나만의 생각 기록
              </span>
              <div className="h-1 w-full rounded border-b border-dashed border-[#5C483A]" />
              <div className="h-1 w-full rounded border-b border-dashed border-[#5C483A]" />
              <div className="h-1 w-3/4 rounded border-b border-dashed border-[#5C483A]" />
            </div>
            <span className="text-[7px] text-[#6E5A4D] self-center">13</span>
          </div>
        </div>
      </div>

      {/* 하단 요약 태그 */}
      <div className="flex items-center justify-between px-3 py-2 rounded-xl bg-[#17120F] border border-[#2C221B] text-[10px]">
        <span className="text-[#A8988B]">재고 부담 없는 인쇄 방식</span>
        <span className="text-[#D6C6A8] font-bold">1권부터 주문 제작 POD</span>
      </div>
    </div>
  );
}

