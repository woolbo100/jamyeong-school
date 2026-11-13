import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import CourseRefundPolicySection from "@/components/CourseRefundPolicySection";
import {
  PICTUREBOOK_CLASS_CONFIG,
  PICTUREBOOK_IMAGES,
  BARRIER_CARDS,
  BEFORE_AFTER_ITEMS,
  ONE_DAY_RESULTS,
  PACKAGE_SUMMARY_CARDS,
  BOOK_EXAMPLES,
  CURRICULUM_STEPS,
  CLASS_KITS,
  REAL_EXPERIENCE_CASES,
  RECOMMENDED_FOR_LIST,
  AUTHOR_BRANDING_CARDS,
  PREPARATION_ITEMS,
  PRE_CLASS_NOTICES,
  PICTUREBOOK_FAQS,
  FINAL_CTA_RESULTS,
} from "@/data/picturebookClassData";
import {
  ReplaceableImageFrame,
  PicturebookFaqAccordion,
  PicturebookCtaButton,
} from "@/components/picturebook/PicturebookInteractive";

export const metadata: Metadata = {
  title: "AI 그림책 출판 원데이 | 작가 브랜딩의 첫걸음 · 자명스쿨",
  description:
    "3~4시간 AI 그림책 제작 실습. 기획 스킬, 캐릭터 일관성 이미지 생성, Canva 편집, 유페이퍼·부크크 출판 등록 안내와 등록 전 1:1 컨설팅까지.",
  alternates: {
    canonical: "https://www.jmschool.kr/picturebook",
  },
  openGraph: {
    title: "AI 그림책 출판 원데이 | 작가 브랜딩의 첫걸음 · 자명스쿨",
    description:
      "3~4시간 AI 그림책 제작 실습. 기획 스킬, 캐릭터 일관성 이미지 생성, Canva 편집, 유페이퍼·부크크 출판 등록 안내와 등록 전 1:1 컨설팅까지.",
    url: "https://www.jmschool.kr/picturebook",
    siteName: "자명스쿨",
    locale: "ko_KR",
    type: "website",
    images: [
      {
        url: "https://www.jmschool.kr/images/courses/earth/seeds-book.png",
        width: 1200,
        height: 630,
        alt: "AI 그림책 출판 원데이 | 작가 브랜딩의 첫걸음 · 자명스쿨",
      },
    ],
  },
};

export default function PicturebookPage() {
  const heroMockupSlot = PICTUREBOOK_IMAGES.heroBookMockup;
  const spreadPagesSlot = PICTUREBOOK_IMAGES.spreadPages;

  return (
    <main className="min-h-screen bg-[#0D0B0A] text-[#EDE6DC] selection:bg-[#C6A66B]/30 selection:text-white font-sans overflow-x-hidden pb-24 md:pb-0">
      {/* ───────────────────────────────────────────────
          공통 서브 헤더 네비게이션 (/miniapp 기준 디자인 재사용)
         ─────────────────────────────────────────────── */}
      <nav className="sticky top-0 z-40 backdrop-blur-md bg-[#0D0B0A]/90 border-b border-[#2E2723] py-3.5 transition-all">
        <div className="site-container flex items-center justify-between gap-2">
          <Link
            href={PICTUREBOOK_CLASS_CONFIG.onedayListUrl}
            className="inline-flex items-center gap-1.5 sm:gap-2 text-xs md:text-sm text-[#A8988B] hover:text-[#C6A66B] transition-colors group"
          >
            <span className="group-hover:-translate-x-1 transition-transform">
              ←
            </span>
            <span>원데이 클래스 목록</span>
          </Link>
          <div className="text-[11px] md:text-xs tracking-wider text-[#C6A66B] font-medium hidden sm:block">
            작은 배움, 하나의 완성.
          </div>
          <a
            href="#apply"
            className="px-3.5 sm:px-4 py-1.5 rounded-full bg-[#C6A66B] hover:bg-[#D6C6A8] text-[#1A1410] text-xs font-bold transition-colors whitespace-nowrap"
          >
            {PICTUREBOOK_CLASS_CONFIG.status === "open"
              ? PICTUREBOOK_CLASS_CONFIG.ctaOpenText
              : PICTUREBOOK_CLASS_CONFIG.ctaScheduledText}
          </a>
        </div>
      </nav>

      {/* ═══════════════════════════════════════════════
          [01. 메인 히어로]
         ═══════════════════════════════════════════════ */}
      <section className="w-full bg-[#F9F6F0] text-[#2E2723] border-b border-[#E8DFD3] pt-8 pb-12 md:py-16">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* 좌측: 라벨, 메인 제목(H1), 강조 문구, 설명, 후킹 문장, 배지, 강의 정보, CTA, 태그 */}
            <div className="lg:col-span-7 space-y-5 sm:space-y-6">
              {/* 상단 영문 라벨 & 보조 라벨 */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs md:text-sm font-bold tracking-wider text-[#8E6D38] uppercase">
                  {PICTUREBOOK_CLASS_CONFIG.categoryLabel}
                </span>
                <span className="text-[#C6A66B]">·</span>
                <span className="text-xs text-[#7C6656] font-medium">
                  {PICTUREBOOK_CLASS_CONFIG.subBadge}
                </span>
              </div>

              {/* 강의명 & 부제 식별 배지 */}
              <div className="inline-flex flex-wrap items-center gap-2 px-3 py-1 rounded-lg bg-[#FAF2E6] border border-[#E8DFD3] text-xs text-[#6E5A4D]">
                <strong className="font-bold text-[#2E2723]">
                  {PICTUREBOOK_CLASS_CONFIG.courseTitle}
                </strong>
                <span className="text-[#C6A66B]">|</span>
                <span>{PICTUREBOOK_CLASS_CONFIG.courseSubtitle}</span>
              </div>

              {/* 메인 제목 (페이지 유일 H1) */}
              <h1 className="text-2xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight text-[#2E2723] leading-tight break-keep">
                {PICTUREBOOK_CLASS_CONFIG.heroMainTitleLine1} <br />
                <span className="text-[#8E6D38]">
                  {PICTUREBOOK_CLASS_CONFIG.heroMainTitleLine2}
                </span>
              </h1>

              {/* 강조 문구 */}
              <p className="text-base sm:text-lg font-bold text-[#2E2723] leading-snug break-keep">
                단 하루 3~4시간, <br className="sm:hidden" />
                나의 스토리가 담긴 첫 그림책 만들기
              </p>

              {/* 설명 */}
              <p className="text-sm sm:text-base text-[#4A3F35] leading-relaxed break-keep">
                제목과 줄거리 기획부터 캐릭터 설정, AI 이미지 생성,{" "}
                <br className="hidden sm:inline" />
                Canva 편집, 전자책·POD 종이책 출판 등록 방법까지.{" "}
                <br className="hidden sm:inline" />
                전용 스킬과 제작 도구로 첫 그림책의 시작을 함께합니다.
              </p>

              {/* 후킹 문장 배너 */}
              <div className="p-4 rounded-xl bg-[#FAF2E6] border border-[#E8DFD3] text-sm font-semibold text-[#8E6D38] leading-relaxed break-keep">
                ✨ 그림책 한 권으로 시작하는, 작가 브랜딩의 첫걸음.
              </div>

              {/* 핵심 배지 4개 */}
              <div className="flex flex-wrap items-center gap-2 pt-0.5">
                {PICTUREBOOK_CLASS_CONFIG.heroBadges.map((badge, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#FAF2E6] text-[#7C6656] text-xs font-semibold border border-[#E8DFD3] shadow-2xs"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8E6D38]" />
                    {badge}
                  </span>
                ))}
              </div>

              {/* 강의 정보 카드 4칸 (상단·중간·하단 동일 데이터 참조) */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1">
                <div className="p-3 rounded-xl bg-white border border-[#E8DFD3] text-center shadow-xs">
                  <span className="block text-[11px] text-[#7C6656] mb-0.5">
                    진행 방식
                  </span>
                  <strong className="text-xs sm:text-sm text-[#2E2723] font-bold break-keep">
                    {PICTUREBOOK_CLASS_CONFIG.format}
                  </strong>
                </div>
                <div className="p-3 rounded-xl bg-white border border-[#E8DFD3] text-center shadow-xs">
                  <span className="block text-[11px] text-[#7C6656] mb-0.5">
                    수업 시간
                  </span>
                  <strong className="text-xs sm:text-sm text-[#2E2723] font-bold break-keep">
                    {PICTUREBOOK_CLASS_CONFIG.duration}
                  </strong>
                </div>
                <div className="p-3 rounded-xl bg-white border border-[#E8DFD3] text-center shadow-xs">
                  <span className="block text-[11px] text-[#7C6656] mb-0.5">
                    수강료
                  </span>
                  <strong className="text-xs sm:text-sm text-[#8E6D38] font-bold break-keep">
                    {PICTUREBOOK_CLASS_CONFIG.price}
                  </strong>
                </div>
                <div className="p-3 rounded-xl bg-white border border-[#E8DFD3] text-center shadow-xs">
                  <span className="block text-[11px] text-[#7C6656] mb-0.5">
                    개강 일정
                  </span>
                  <strong className="text-xs sm:text-sm text-[#C6A66B] font-bold break-keep">
                    {PICTUREBOOK_CLASS_CONFIG.schedule}
                  </strong>
                </div>
              </div>

              {/* 상단 CTA 버튼 */}
              <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-3">
                <PicturebookCtaButton
                  courseId={PICTUREBOOK_CLASS_CONFIG.id}
                  courseTitle={PICTUREBOOK_CLASS_CONFIG.courseTitle}
                  status={PICTUREBOOK_CLASS_CONFIG.status}
                  applicationUrl={PICTUREBOOK_CLASS_CONFIG.applicationUrl}
                  notificationUrl={PICTUREBOOK_CLASS_CONFIG.notificationUrl}
                  ctaOpenText={PICTUREBOOK_CLASS_CONFIG.ctaOpenText}
                  ctaScheduledText={PICTUREBOOK_CLASS_CONFIG.ctaScheduledText}
                  variant="hero"
                />
                <a
                  href="#class-info"
                  className="min-h-[48px] px-5 rounded-xl bg-white hover:bg-[#FAF2E6] text-[#4A3F35] border border-[#D6C6A8] text-xs sm:text-sm font-semibold inline-flex items-center justify-center transition-colors"
                >
                  클래스 안내 먼저 보기 ↓
                </a>
              </div>

              {/* 태그 */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {PICTUREBOOK_CLASS_CONFIG.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-2.5 py-1 rounded-lg bg-[#FAF2E6] text-[#7C6656] font-medium border border-[#E8DFD3]"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* 우측: 메인 비주얼 — 그림책 표지와 펼친 내지를 보여주는 북 목업 영역 */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-[340px] sm:max-w-[380px] rounded-[32px] overflow-hidden border-[6px] border-[#2A231F] bg-[#110E0C] shadow-2xl p-4 sm:p-5 space-y-4">
                {/* 상단 작은 배지 */}
                <div className="flex items-center justify-between px-3 py-1.5 rounded-xl bg-[#221A15] border border-[#3E3127] text-xs">
                  <span className="font-bold text-[#D6C6A8] flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#C6A66B]" />
                    {heroMockupSlot.statusBadge}
                  </span>
                  <span className="text-[10px] text-[#9E8B7C]">
                    BOOK MOCKUP
                  </span>
                </div>

                {/* 실제 heroBookMockup 이미지가 등록되면 이미지 표시, 미등록 시 표지+펼친 내지 북 목업 프레임 표시 */}
                {heroMockupSlot.src ? (
                  <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-[#181310] border border-[#3E3127]">
                    <Image
                      src={heroMockupSlot.src}
                      alt={heroMockupSlot.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 400px"
                      className={
                        heroMockupSlot.objectFit === "contain"
                          ? "object-contain p-2"
                          : "object-cover"
                      }
                    />
                  </div>
                ) : (
                  <div className="space-y-3">
                    {/* 중심: 그림책 표지 목업 */}
                    <div className="p-4 rounded-2xl bg-gradient-to-br from-[#241B15] via-[#1C1510] to-[#140F0C] border border-[#4A3B2F] shadow-lg">
                      <div className="flex items-center justify-between mb-2.5">
                        <span className="text-[10px] px-2 py-0.5 rounded bg-[#C6A66B]/20 text-[#D6C6A8] font-bold">
                          중심 · 그림책 표지 구성
                        </span>
                        <span className="text-[10px] text-[#A8988B]">
                          앞표지 · 책등 · 뒤표지
                        </span>
                      </div>

                      <div className="aspect-[4/3] rounded-xl bg-[#16110E] border border-[#3E3024] p-4 flex flex-col items-center justify-between text-center relative overflow-hidden">
                        <div className="w-full flex items-center justify-between text-[10px] text-[#8F7D6E]">
                          <span>STORYBOOK COVER</span>
                          <span>AI ILLUSTRATION</span>
                        </div>
                        <div className="my-auto space-y-2">
                          <div className="w-14 h-14 mx-auto rounded-2xl bg-[#C6A66B]/15 border border-[#C6A66B]/35 flex items-center justify-center text-2xl shadow-inner">
                            📕
                          </div>
                          <p className="text-xs sm:text-sm font-bold text-[#FAF7F2]">
                            나의 이야기가 담긴 그림책 표지
                          </p>
                          <p className="text-[11px] text-[#9E8B7C]">
                            기준 캐릭터와 화풍을 반영한 대표 표지 디자인
                          </p>
                        </div>
                        <div className="w-full pt-2 border-t border-[#281F19] flex items-center justify-between text-[10px] text-[#C6A66B]">
                          <span>전자책 표지 (EPUB/PDF)</span>
                          <span>POD 종이책 날개·표지</span>
                        </div>
                      </div>
                    </div>

                    {/* 보조: 양쪽으로 이어지는 펼친 내지 목업 */}
                    <div className="p-3.5 rounded-2xl bg-[#1B1511] border border-[#382C23]">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-bold text-[#C6A66B]">
                          보조 · 양쪽으로 이어지는 펼친 내지
                        </span>
                        <span className="text-[10px] text-[#8F7D6E]">
                          Canva 순서 템플릿 편집
                        </span>
                      </div>
                      <div className="grid grid-cols-2 rounded-xl bg-[#120E0B] border border-[#33271E] overflow-hidden">
                        {/* 왼쪽 페이지 */}
                        <div className="p-3 border-r border-[#2B2119] flex flex-col justify-between min-h-[92px]">
                          <span className="text-[9px] text-[#8F7D6E]">
                            LEFT PAGE
                          </span>
                          <div className="my-1.5 flex items-center gap-2">
                            <span className="text-base">🎨</span>
                            <span className="text-[10px] text-[#D6C6A8] font-medium leading-tight">
                              일관된 캐릭터 장면 이미지
                            </span>
                          </div>
                          <div className="h-1 w-full rounded bg-[#2B2119]" />
                        </div>
                        {/* 오른쪽 페이지 */}
                        <div className="p-3 flex flex-col justify-between min-h-[92px]">
                          <span className="text-[9px] text-[#8F7D6E]">
                            RIGHT PAGE
                          </span>
                          <div className="my-1.5 space-y-1">
                            <p className="text-[10px] text-[#FAF7F2] font-semibold">
                              내 시선이 담긴 문장 배치
                            </p>
                            <div className="h-1 w-5/6 rounded bg-[#C6A66B]/40" />
                            <div className="h-1 w-2/3 rounded bg-[#8F7D6E]/40" />
                          </div>
                          <span className="text-[9px] text-[#C6A66B] text-right">
                            제본부 여백 안전 배치
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* 목업 하단 요약 바 */}
                <div className="p-3 rounded-xl bg-[#181310] border border-[#2B211A] text-[11px] text-[#A8988B] flex items-center justify-between">
                  <span>기획 ➔ 이미지 ➔ Canva 편집 ➔ 출판 등록 안내</span>
                  <span className="text-[#C6A66B] font-bold">1:1 점검</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          본문 상세 영역 (Dark & Deep Brown Theme)
         ═══════════════════════════════════════════════ */}
      <div className="w-full bg-[#0D0B0A]">
        {/* ───────────────────────────────────────────
            [02. AI 그림책 출판 소개]
           ─────────────────────────────────────────── */}
        <section className="w-full pt-14 pb-16 md:py-20 border-b border-[#26201B]">
          <div className="site-container">
            <div className="p-6 sm:p-8 md:p-10 rounded-3xl bg-[#15110E] border border-[#2E241D] shadow-lg space-y-6">
              <div className="space-y-3">
                <span className="text-xs md:text-sm font-semibold tracking-[0.2em] text-[#C6A66B] uppercase block">
                  ABOUT AI PICTURE BOOK
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#FAF7F2] leading-tight break-keep">
                  그림을 잘 그리지 못해도, <br />
                  내 이야기를 그림책으로 표현할 수 있습니다.
                </h2>
              </div>

              <div className="space-y-3 text-sm sm:text-base text-[#C8BCB0] leading-relaxed break-keep">
                <p>
                  내가 전하고 싶은 메시지를 이야기로 정리하고, <br className="hidden sm:inline" />
                  AI로 장면을 시각화한 뒤 Canva에서 책으로 편집합니다.
                </p>
                <p>
                  이 수업에서는 그림책 파일을 만드는 데서 한 걸음 더 나아가, <br className="hidden sm:inline" />
                  유페이퍼 전자책과 부크크 POD 종이책 등록으로 이어지는 <br className="hidden sm:inline" />
                  출판 과정을 함께 살펴봅니다.
                </p>
              </div>

              {/* 펼친 내지 교체형 슬롯 미리보기 */}
              <div className="pt-2">
                <ReplaceableImageFrame
                  slot={spreadPagesSlot}
                  fallbackVariant="spread-detail"
                />
              </div>

              {/* 작은 설명: POD 안내 */}
              <div className="p-4 rounded-2xl bg-[#1C1612] border border-[#362A20] flex items-start gap-3">
                <span className="px-2 py-0.5 rounded bg-[#C6A66B]/20 text-[#D6C6A8] text-[11px] font-bold shrink-0 mt-0.5">
                  POD란?
                </span>
                <p className="text-xs sm:text-sm text-[#A8988B] leading-relaxed break-keep">
                  POD는 주문에 따라 책을 인쇄하는 방식으로, 처음부터 많은 수량을 제작하지 않고 종이책 출판을 시작하는 방법입니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ───────────────────────────────────────────
            [03. 공감과 시작의 장벽]
           ─────────────────────────────────────────── */}
        <section className="w-full py-20 md:py-28 border-b border-[#26201B]">
          <div className="site-container">
            <div className="text-center mb-14">
              <span className="text-xs md:text-sm font-semibold tracking-[0.2em] text-[#C6A66B] uppercase mb-3 block">
                WHY YOUR FIRST BOOK?
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold text-[#FAF7F2] mb-5 leading-tight break-keep">
                책을 내고 싶다는 생각, <br />
                아직 마음속에만 담아두셨나요?
              </h2>
              <div className="space-y-3 text-sm sm:text-base text-[#9E8B7C] max-w-2xl mx-auto leading-relaxed break-keep">
                <p>
                  이야기는 있지만 어떻게 시작할지 모르겠고, <br />
                  그림을 직접 그리기는 어렵고, <br />
                  출판은 전문가만 할 수 있는 일처럼 느껴졌다면.
                </p>
                <p className="pt-2 text-[#D6C6A8] font-medium">
                  이제 첫 책을 만드는 과정을 <br />
                  하나씩 따라갈 수 있는 순서로 만나보세요.
                </p>
              </div>
            </div>

            {/* 장벽 카드 3개 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {BARRIER_CARDS.map((card) => (
                <div
                  key={card.number}
                  className="p-6 md:p-7 rounded-2xl bg-[#14100E] border border-[#2A211B] flex flex-col justify-between"
                >
                  <div>
                    <span className="text-xs font-bold text-[#C6A66B] mb-2 block">
                      {card.number}. {card.title}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-[#FAF7F2] mb-3 leading-snug break-keep">
                      {card.quote}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#9E8B7C] leading-relaxed break-keep">
                      {card.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* 마무리 강조 */}
            <div className="p-7 md:p-9 rounded-2xl bg-gradient-to-b from-[#1C1510] to-[#120E0C] border border-[#3E3024] text-center shadow-lg">
              <p className="text-base sm:text-xl font-bold text-[#D6C6A8] leading-relaxed break-keep">
                “첫 책에 필요한 것은 완벽한 그림 실력보다, <br className="hidden sm:inline" />
                내 이야기를 끝까지 책으로 만드는 경험입니다.”
              </p>
            </div>
          </div>
        </section>

        {/* ───────────────────────────────────────────
            [04. Before / After]
           ─────────────────────────────────────────── */}
        <section className="w-full py-20 md:py-28 bg-[#120E0C] border-b border-[#26201B]">
          <div className="site-container">
            <div className="text-center mb-14">
              <span className="text-xs md:text-sm font-semibold tracking-[0.2em] text-[#C6A66B] uppercase mb-3 block">
                TRANSFORMATION
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold text-[#FAF7F2] mb-4 break-keep">
                마음속 이야기에서 <br />
                내 이름이 담긴 첫 책으로
              </h2>
            </div>

            {/* 4개의 비교 항목 (모바일에서는 항목별 카드로 자연스럽게 전환) */}
            <div className="space-y-4">
              {BEFORE_AFTER_ITEMS.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl bg-[#17120F] border border-[#2B221B] p-5 sm:p-6"
                >
                  <div className="mb-3">
                    <span className="inline-block px-2.5 py-0.5 rounded-md bg-[#C6A66B]/15 text-[#D6C6A8] text-xs font-bold">
                      {item.step}
                    </span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-3.5 rounded-xl bg-[#120E0C] border border-[#261E18] space-y-1">
                      <span className="text-xs text-red-400 font-bold block">
                        ✕ BEFORE
                      </span>
                      <p className="text-sm sm:text-base font-medium text-[#A8988B] break-keep">
                        {item.before}
                      </p>
                    </div>
                    <div className="p-3.5 rounded-xl bg-[#1E1712] border border-[#3E3024] space-y-1">
                      <span className="text-xs text-[#C6A66B] font-bold block">
                        ✓ AFTER
                      </span>
                      <p className="text-sm sm:text-base font-bold text-[#FAF7F2] break-keep">
                        {item.after}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ───────────────────────────────────────────
            [05. 하루 수업의 4가지 결과]
           ─────────────────────────────────────────── */}
        <section className="w-full py-20 md:py-28 border-b border-[#26201B]">
          <div className="site-container">
            <div className="text-center mb-14">
              <span className="text-xs md:text-sm font-semibold tracking-[0.2em] text-[#C6A66B] uppercase mb-3 block">
                ONE DAY RESULT
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold text-[#FAF7F2] mb-4 break-keep">
                하루의 배움이 <br />
                첫 그림책의 시작이 됩니다.
              </h2>
              <p className="text-sm sm:text-base text-[#9E8B7C] max-w-xl mx-auto break-keep">
                기획부터 이미지, 편집, 출판 준비까지. <br />
                책 한 권을 만드는 전체 흐름을 직접 경험합니다.
              </p>
            </div>

            {/* 결과 카드 4개 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {ONE_DAY_RESULTS.map((card) => (
                <div
                  key={card.number}
                  className="p-6 rounded-2xl bg-[#14100E] border border-[#2A211B] hover:border-[#C6A66B]/50 transition-colors flex flex-col justify-between"
                >
                  <div>
                    <span className="text-xs font-bold text-[#C6A66B] uppercase tracking-wider block mb-2">
                      {card.number}. {card.code}
                    </span>
                    <h3 className="text-base font-bold text-[#FAF7F2] mb-3 break-keep">
                      {card.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#9E8B7C] leading-relaxed break-keep">
                      {card.description}
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-[#221B16] text-[11px] text-[#C6A66B] font-medium">
                    {card.tag}
                  </div>
                </div>
              ))}
            </div>

            {/* 하단 안내 */}
            <div className="mt-8 p-4 sm:p-5 rounded-2xl bg-[#17120F] border border-[#2E241D] text-center space-y-1">
              <p className="text-xs sm:text-sm text-[#D6C6A8] leading-relaxed break-keep">
                실습 속도와 작품 분량에 따라 수업 후 추가 편집이 필요할 수 있습니다.
              </p>
              <p className="text-xs sm:text-sm text-[#A8988B] leading-relaxed break-keep">
                출판 등록 전에는 제공되는 1:1 컨설팅으로 준비 상태를 점검합니다.
              </p>
            </div>
          </div>
        </section>

        {/* ───────────────────────────────────────────
            [06. 수업 구성 요약]
           ─────────────────────────────────────────── */}
        <section className="w-full py-16 md:py-24 bg-[#120E0C] border-b border-[#26201B]">
          <div className="site-container">
            <div className="p-6 sm:p-8 md:p-10 rounded-3xl bg-[#16120F] border border-[#2E241D] shadow-lg">
              <div className="text-center mb-8">
                <span className="text-xs font-bold text-[#C6A66B] tracking-[0.2em] uppercase block mb-2">
                  PACKAGE INCLUDED
                </span>
                <h2 className="text-xl sm:text-3xl font-bold text-[#FAF7F2] leading-snug break-keep">
                  혼자 시작할 때 막히는 구간을, <br />
                  하나의 흐름으로 연결했습니다.
                </h2>
              </div>

              {/* 요약 카드 4개 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {PACKAGE_SUMMARY_CARDS.map((item) => (
                  <div
                    key={item.number}
                    className="p-4 sm:p-5 rounded-2xl bg-[#1D1713] border border-[#362920] flex items-start gap-3.5"
                  >
                    <span className="w-8 h-8 rounded-lg bg-[#C6A66B]/20 text-[#D6C6A8] flex items-center justify-center text-sm font-bold shrink-0 mt-0.5">
                      {item.number}
                    </span>
                    <div>
                      <h3 className="text-sm sm:text-base font-bold text-[#FAF7F2] mb-1">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#9E8B7C] leading-relaxed break-keep">
                        {item.summary}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ───────────────────────────────────────────
            [07. 제작 가능한 그림책 예시]
           ─────────────────────────────────────────── */}
        <section className="w-full py-20 md:py-28 border-b border-[#26201B]">
          <div className="site-container">
            <div className="text-center mb-14">
              <span className="text-xs md:text-sm font-semibold tracking-[0.2em] text-[#C6A66B] uppercase mb-3 block">
                YOUR STORY, YOUR BOOK
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold text-[#FAF7F2] mb-4 leading-tight break-keep">
                특별한 이야기가 아니라, <br />
                나만의 시선이 담긴 이야기면 좋습니다.
              </h2>
            </div>

            {/* 예시 카드 4개 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
              {BOOK_EXAMPLES.map((example) => (
                <div
                  key={example.number}
                  className="p-6 md:p-7 rounded-2xl bg-[#17120F] border border-[#2B221B] hover:border-[#C6A66B]/40 transition-colors"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-[#C6A66B]">
                      {example.number}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-[#C6A66B]/15 text-[#D6C6A8] flex items-center justify-center text-base">
                      {example.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-[#FAF7F2] mb-2 break-keep">
                    {example.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#9E8B7C] leading-relaxed break-keep">
                    {example.description}
                  </p>
                </div>
              ))}
            </div>

            {/* 보조 영역: 한 가지 이야기에서 컬러링북까지 + 컬러링북 교체형 이미지 슬롯 */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#15110E] border border-[#362920] grid grid-cols-1 md:grid-cols-12 gap-6 items-center mb-6">
              <div className="md:col-span-7 space-y-2.5">
                <span className="text-xs font-bold text-[#C6A66B] uppercase tracking-wider block">
                  COLORING BOOK EXPANSION
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-[#FAF7F2] break-keep">
                  한 가지 이야기에서 컬러링북까지
                </h3>
                <p className="text-xs sm:text-sm text-[#C8BCB0] leading-relaxed break-keep">
                  완성한 장면을 바탕으로 컬러링북에 적합한 선화 이미지를 만드는 방법도 배웁니다.
                </p>
              </div>
              <div className="md:col-span-5">
                <ReplaceableImageFrame
                  slot={PICTUREBOOK_IMAGES.coloringBookSample}
                  fallbackVariant="coloring-lineart"
                />
              </div>
            </div>

            {/* 실습 범위 안내 */}
            <div className="p-5 sm:p-6 rounded-2xl bg-[#16120F] border border-[#2E241D] text-center space-y-1">
              <span className="text-[11px] font-bold text-[#C6A66B] uppercase tracking-wider block mb-1">
                SCOPE OF PRACTICE
              </span>
              <p className="text-xs sm:text-sm text-[#D6C6A8] font-medium leading-relaxed break-keep">
                첫 수업에서는 짧은 이야기와 부담 없는 장면 수로 시작합니다.
              </p>
              <p className="text-xs text-[#9E8B7C] leading-relaxed break-keep">
                긴 장편이나 복잡한 다중 캐릭터 구성은 첫 작품 이후 확장합니다.
              </p>
            </div>
          </div>
        </section>

        {/* ───────────────────────────────────────────
            [08. 8단계 제작·출판 과정]
           ─────────────────────────────────────────── */}
        <section className="w-full py-20 md:py-28 bg-[#120E0C] border-b border-[#26201B]">
          <div className="site-container">
            <div className="text-center mb-16">
              <span className="text-xs md:text-sm font-semibold tracking-[0.2em] text-[#C6A66B] uppercase mb-3 block">
                HOW IT WORKS
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold text-[#FAF7F2] mb-4 leading-tight break-keep">
                이야기 한 줄에서 출판 준비까지, <br />
                순서가 있으면 시작이 쉬워집니다.
              </h2>
            </div>

            {/* 기준 페이지(/miniapp)의 8단계 컴포넌트 구조 재사용 */}
            <div className="space-y-4">
              {CURRICULUM_STEPS.map((item) => (
                <div
                  key={item.step}
                  className="p-5 md:p-6 rounded-2xl bg-[#15110E] border border-[#2A211B] flex flex-col md:flex-row md:items-center justify-between gap-4"
                >
                  <div className="space-y-1.5">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded bg-[#C6A66B]/20 text-[#D6C6A8] text-xs font-bold">
                        {item.step}
                      </span>
                      <h3 className="text-base md:text-lg font-bold text-[#FAF7F2] break-keep">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-[#9E8B7C] leading-relaxed break-keep pl-0.5">
                      {item.description}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 self-start md:self-center shrink-0">
                    <span className="text-[11px] text-[#8F7D6E] font-medium">
                      남는 결과물
                    </span>
                    <span className="px-3 py-1 rounded-lg bg-[#241B15] border border-[#3E2E22] text-xs font-bold text-[#D6C6A8]">
                      {item.output}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* 하단 안내 */}
            <div className="mt-8 p-5 rounded-2xl bg-[#191411] border border-[#2E241D] text-center space-y-1.5">
              <p className="text-xs sm:text-sm text-[#D6C6A8] font-medium leading-relaxed break-keep">
                1:1 컨설팅은 수업 이후 출판 등록 전에 진행하는 지원입니다. 예약·진행 방식은 수강 안내를 통해 공지합니다.
              </p>
              <p className="text-xs text-[#9E8B7C] leading-relaxed break-keep">
                최종 출간 및 인물정보 등록 여부는 각 서비스의 기준과 검토에 따릅니다.
              </p>
            </div>
          </div>
        </section>

        {/* ───────────────────────────────────────────
            [09. 강의 핵심 철학]
           ─────────────────────────────────────────── */}
        <section className="w-full py-14 md:py-20 border-b border-[#26201B]">
          <div className="site-container">
            <div className="max-w-3xl mx-auto">
              <div className="p-7 md:p-10 rounded-3xl bg-gradient-to-b from-[#1C1510] to-[#140F0D] border border-[#3E3024] text-center shadow-lg space-y-4">
                <span className="text-xs font-bold text-[#C6A66B] uppercase tracking-[0.2em] block">
                  NOT JUST A BOOK
                </span>
                <blockquote className="text-lg sm:text-2xl font-bold text-[#FAF7F2] leading-snug break-keep">
                  “첫 그림책은 작품 한 권이면서, <br />
                  나를 설명하는 새로운 이력이 됩니다.”
                </blockquote>
                <div className="space-y-2 text-xs sm:text-sm text-[#A8988B] leading-relaxed break-keep max-w-xl mx-auto pt-1">
                  <p>
                    내가 살아온 이야기, 전하고 싶은 메시지, <br className="hidden sm:inline" />
                    앞으로 펼치고 싶은 활동을 한 권의 책으로 표현합니다.
                  </p>
                  <p className="text-[#D6C6A8] font-medium">
                    AI는 제작을 돕고, 책에 담길 시선과 이야기는 나에게서 시작됩니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ───────────────────────────────────────────
            [10. 수강생 혜택 6종]
           ─────────────────────────────────────────── */}
        <section className="w-full py-20 md:py-28 border-b border-[#26201B]">
          <div className="site-container">
            <div className="text-center mb-16">
              <span className="text-xs md:text-sm font-semibold tracking-[0.2em] text-[#C6A66B] uppercase mb-3 block">
                CLASS KIT
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold text-[#FAF7F2] mb-4 leading-tight break-keep">
                첫 책 이후에도 다시 활용할 수 있는 <br />
                제작 자료와 출판 지원을 드립니다.
              </h2>
            </div>

            {/* 혜택 6종 그리드 (모바일 1열, 태블릿 2열, 데스크톱 3열) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-10">
              {CLASS_KITS.map((kit) => (
                <div
                  key={kit.code}
                  className="p-5 sm:p-6 rounded-2xl bg-[#15110E] border border-[#2E241D] flex flex-col justify-between hover:border-[#C6A66B]/40 transition-colors"
                >
                  <div>
                    <span className="text-xs text-[#C6A66B] font-bold block mb-1.5">
                      {kit.code}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-[#FAF7F2] mb-2.5 break-keep">
                      {kit.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#9E8B7C] leading-relaxed break-keep">
                      {kit.description}
                    </p>
                  </div>
                  {kit.note && (
                    <p className="mt-4 pt-3 border-t border-[#241B15] text-[11px] text-[#8F7D6E] leading-relaxed break-keep">
                      * {kit.note}
                    </p>
                  )}
                </div>
              ))}
            </div>

            {/* 제공 자료 이미지 교체 슬롯 (스킬 화면, 템플릿 일부, 도구 화면, 안내서 표지) */}
            <div className="mb-8">
              <ReplaceableImageFrame
                slot={PICTUREBOOK_IMAGES.classKitPreview}
                fallbackVariant="class-kit"
              />
            </div>

            {/* 하단 활용 흐름 */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#17120F] border border-[#3A2D23] text-center">
              <span className="text-[11px] font-bold text-[#C6A66B] uppercase tracking-wider block mb-3">
                HOW TO USE CLASS KIT
              </span>
              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm font-bold text-[#FAF7F2]">
                <span className="px-3 py-1.5 rounded-lg bg-[#241B16] border border-[#3E2F25]">
                  기획 스킬 실행
                </span>
                <span className="text-[#C6A66B]">→</span>
                <span className="px-3 py-1.5 rounded-lg bg-[#241B16] border border-[#3E2F25]">
                  이미지 제작
                </span>
                <span className="text-[#C6A66B]">→</span>
                <span className="px-3 py-1.5 rounded-lg bg-[#241B16] border border-[#3E2F25]">
                  템플릿 편집
                </span>
                <span className="text-[#C6A66B]">→</span>
                <span className="px-3 py-1.5 rounded-lg bg-[#241B16] border border-[#3E2F25]">
                  출판 전 점검
                </span>
                <span className="text-[#C6A66B]">→</span>
                <span className="px-3 py-1.5 rounded-lg bg-[#2E2218] border border-[#C6A66B]/40 text-[#D6C6A8]">
                  등록 준비
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ───────────────────────────────────────────
            [11. 실제 그림책·출판 사례]
           ─────────────────────────────────────────── */}
        <section className="w-full py-20 md:py-28 bg-[#120E0C] border-b border-[#26201B]">
          <div className="site-container">
            <div className="text-center mb-14">
              <span className="text-xs md:text-sm font-semibold tracking-[0.2em] text-[#C6A66B] uppercase mb-3 block">
                REAL EXPERIENCE
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold text-[#FAF7F2] mb-5 leading-tight break-keep">
                만드는 방법부터 등록 준비까지, <br />
                실제 사례로 배웁니다.
              </h2>
              <p className="text-sm sm:text-base text-[#9E8B7C] max-w-2xl mx-auto leading-relaxed break-keep">
                기획한 이야기가 이미지가 되고, <br className="hidden sm:inline" />
                편집 파일이 책의 형태를 갖추는 과정을 <br className="hidden sm:inline" />
                실제 제작 자료와 화면으로 살펴봅니다.
              </p>
            </div>

            {/* 사례 카드 4개 (독립 교체형 이미지 슬롯 연결) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
              {REAL_EXPERIENCE_CASES.map((item) => {
                const slot = PICTUREBOOK_IMAGES[item.imageSlotKey];
                const fallbackMap: Record<
                  typeof item.imageSlotKey,
                  | "cover-spread"
                  | "character-sequence"
                  | "canva-editor"
                  | "publishing-platform"
                > = {
                  bookCover: "cover-spread",
                  consistentCharacterScenes: "character-sequence",
                  canvaEditingScreen: "canva-editor",
                  publishingRegistrationCase: "publishing-platform",
                };

                return (
                  <div
                    key={item.number}
                    className="p-5 sm:p-6 rounded-2xl bg-[#17120F] border border-[#2B221B] flex flex-col justify-between space-y-4"
                  >
                    <ReplaceableImageFrame
                      slot={slot}
                      fallbackVariant={fallbackMap[item.imageSlotKey]}
                    />
                    <div className="space-y-2">
                      <div className="flex flex-wrap items-center justify-between gap-2 text-[11px]">
                        <span className="px-2.5 py-0.5 rounded bg-[#C6A66B]/15 text-[#D6C6A8] font-bold">
                          {item.sourceType}
                        </span>
                        <span className="text-[#9E8B7C] font-medium">
                          {item.statusType}
                        </span>
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-[#FAF7F2] break-keep">
                        {item.number}. {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#9E8B7C] leading-relaxed break-keep">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* 반려 방지 노하우 안내 박스 */}
            <div className="p-5 md:p-6 rounded-2xl bg-[#17120F] border border-[#3E3024] text-center">
              <p className="text-xs sm:text-sm text-[#D6C6A8] leading-relaxed break-keep font-medium">
                자주 발생하는 반려 사유를 미리 점검하고, 등록 과정의 시행착오를 줄이는 실전 노하우를 함께 다룹니다.
              </p>
            </div>
          </div>
        </section>

        {/* ───────────────────────────────────────────
            [12. 첫 책 이후의 성장]
           ─────────────────────────────────────────── */}
        <section className="w-full py-20 md:py-28 border-b border-[#26201B]">
          <div className="site-container">
            <div className="text-center mb-12">
              <span className="text-xs md:text-sm font-semibold tracking-[0.2em] text-[#C6A66B] uppercase mb-3 block">
                YOUR FIRST BOOK
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold text-[#FAF7F2] mb-5 leading-tight break-keep">
                첫 책 한 권이, <br />
                다음 이야기를 만드는 힘이 됩니다.
              </h2>
              <div className="space-y-3 text-sm sm:text-base text-[#9E8B7C] max-w-xl mx-auto leading-relaxed break-keep">
                <p>처음부터 모든 것이 완벽할 필요는 없습니다.</p>
                <p>
                  한 권을 만들어보면 <br />
                  내가 어떤 이야기를 잘하는지, <br />
                  어떤 그림과 편집이 어울리는지, <br />
                  다음 책은 어떻게 만들면 좋을지 보이기 시작합니다.
                </p>
              </div>
            </div>

            {/* 성장 흐름 배너 */}
            <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-r from-[#181310] via-[#241B16] to-[#181310] border border-[#443325] text-center mb-8 shadow-xl">
              <span className="text-xs text-[#C6A66B] font-bold tracking-widest block mb-2.5 uppercase">
                GROWTH FLOW
              </span>
              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-sm sm:text-xl font-extrabold text-[#FAF7F2]">
                <span>첫 그림책 제작</span>
                <span className="text-[#C6A66B]">→</span>
                <span>출판 도전</span>
                <span className="text-[#C6A66B]">→</span>
                <span>독자와 만남</span>
                <span className="text-[#C6A66B]">→</span>
                <span className="text-[#D6C6A8]">다음 작품 기획</span>
              </div>
            </div>

            <p className="text-center text-sm md:text-base text-[#C8BCB0] font-semibold break-keep">
              제공된 스킬과 템플릿을 다시 활용하며, 나만의 시리즈와 활동으로 이어가세요.
            </p>
          </div>
        </section>

        {/* ───────────────────────────────────────────
            [13. 추천 대상]
           ─────────────────────────────────────────── */}
        <section className="w-full py-20 md:py-28 bg-[#120E0C] border-b border-[#26201B]">
          <div className="site-container">
            <div className="text-center mb-14">
              <span className="text-xs md:text-sm font-semibold tracking-[0.2em] text-[#C6A66B] uppercase mb-3 block">
                RECOMMENDED FOR
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold text-[#FAF7F2] mb-4 break-keep">
                이런 분이라면 함께하세요.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {RECOMMENDED_FOR_LIST.map((text, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-[#17120F] border border-[#2B221B] flex items-start gap-3"
                >
                  <span className="text-[#C6A66B] font-bold text-lg leading-none mt-0.5">
                    ✔
                  </span>
                  <p className="text-sm text-[#E5D7C5] leading-relaxed break-keep">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ───────────────────────────────────────────
            [14. 작가 브랜딩·커리어 확장]
           ─────────────────────────────────────────── */}
        <section className="w-full py-20 md:py-28 border-b border-[#26201B]">
          <div className="site-container">
            <div className="text-center mb-14">
              <span className="text-xs md:text-sm font-semibold tracking-[0.2em] text-[#C6A66B] uppercase mb-3 block">
                AUTHOR BRANDING
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold text-[#FAF7F2] mb-4 leading-tight break-keep">
                그림책 한 권에서, <br />
                나를 소개하는 새로운 커리어로
              </h2>
              <p className="text-sm sm:text-base text-[#9E8B7C] max-w-xl mx-auto leading-relaxed break-keep">
                책은 나의 경험과 철학을 보여주는 콘텐츠입니다. <br />
                첫 출판을 계기로 작가 소개를 정리하고, <br className="hidden sm:inline" />
                기존 활동과 연결할 수 있는 방향을 찾아봅니다.
              </p>
            </div>

            {/* 확장 흐름 다이어그램 */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#181310] border border-[#2E241E] mb-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-center">
                <div className="p-3.5 rounded-xl bg-[#231A15] border border-[#3E2F25] w-full md:w-auto flex-1">
                  <span className="text-[11px] text-[#A8988B] block mb-0.5">
                    STEP 01
                  </span>
                  <strong className="text-xs sm:text-sm text-[#FAF7F2]">
                    나의 이야기
                  </strong>
                </div>
                <span className="text-[#C6A66B] font-bold text-base rotate-90 md:rotate-0">
                  →
                </span>
                <div className="p-3.5 rounded-xl bg-[#231A15] border border-[#C6A66B]/40 w-full md:w-auto flex-1">
                  <span className="text-[11px] text-[#C6A66B] block mb-0.5">
                    STEP 02
                  </span>
                  <strong className="text-xs sm:text-sm text-[#D6C6A8]">
                    첫 그림책
                  </strong>
                </div>
                <span className="text-[#C6A66B] font-bold text-base rotate-90 md:rotate-0">
                  →
                </span>
                <div className="p-3.5 rounded-xl bg-[#231A15] border border-[#3E2F25] w-full md:w-auto flex-1">
                  <span className="text-[11px] text-[#A8988B] block mb-0.5">
                    STEP 03
                  </span>
                  <strong className="text-xs sm:text-sm text-[#FAF7F2]">
                    출판 이력
                  </strong>
                </div>
                <span className="text-[#C6A66B] font-bold text-base rotate-90 md:rotate-0">
                  →
                </span>
                <div className="p-3.5 rounded-xl bg-[#231A15] border border-[#3E2F25] w-full md:w-auto flex-1">
                  <span className="text-[11px] text-[#A8988B] block mb-0.5">
                    STEP 04
                  </span>
                  <strong className="text-xs sm:text-sm text-[#FAF7F2]">
                    작가 프로필
                  </strong>
                </div>
                <span className="text-[#C6A66B] font-bold text-base rotate-90 md:rotate-0">
                  →
                </span>
                <div className="p-3.5 rounded-xl bg-[#231A15] border border-[#3E2F25] w-full md:w-auto flex-1">
                  <span className="text-[11px] text-[#8E6D38] block mb-0.5">
                    STEP 05
                  </span>
                  <strong className="text-xs sm:text-sm text-[#FAF7F2]">
                    브랜드·콘텐츠·활동 확장
                  </strong>
                </div>
              </div>
            </div>

            {/* 확장 카드 3개 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
              {AUTHOR_BRANDING_CARDS.map((card) => (
                <div
                  key={card.number}
                  className="p-6 rounded-2xl bg-[#15110E] border border-[#2C221B]"
                >
                  <span className="text-xs font-bold text-[#C6A66B] block mb-2">
                    {card.number}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-[#FAF7F2] mb-2 break-keep">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#9E8B7C] leading-relaxed break-keep">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>

            {/* 하단 안내 (네이버 인물정보 기준 준수) */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#16120F] border border-[#2E241D] text-center space-y-1">
              <p className="text-xs sm:text-sm text-[#D6C6A8] font-medium break-keep">
                출판 이력을 바탕으로, 작가 프로필과 네이버 인물정보 등록 준비까지 함께 살펴봅니다.
              </p>
              <p className="text-xs text-[#8F7D6E] leading-relaxed break-keep">
                ※ 네이버 인물정보는 신청 시점의 등록 기준과 제출 자료에 따라 검토됩니다. 출판만으로 등록이 자동 보장되지는 않습니다.
              </p>
            </div>
          </div>
        </section>

        {/* ───────────────────────────────────────────
            [15. 클래스 안내와 사전 준비]
           ─────────────────────────────────────────── */}
        <section
          id="class-info"
          className="w-full py-20 md:py-28 bg-[#120E0C] border-b border-[#26201B]"
        >
          <div className="site-container">
            <div className="text-center mb-12">
              <span className="text-xs md:text-sm font-semibold tracking-[0.2em] text-[#C6A66B] uppercase mb-2.5 block">
                CLASS INFO
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#FAF7F2] mb-3 break-keep">
                클래스 안내 &amp; 사전 준비
              </h2>
            </div>

            <div className="rounded-3xl bg-[#16120F] border border-[#2C221B] p-6 md:p-8 space-y-6">
              {/* 강의명 */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 pb-6 border-b border-[#241B15]">
                <div className="text-xs text-[#8F7D6E]">강의명</div>
                <div className="sm:col-span-2 text-sm sm:text-base font-bold text-[#FAF7F2]">
                  {PICTUREBOOK_CLASS_CONFIG.courseTitle}
                </div>
              </div>

              {/* 부제 */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 pb-6 border-b border-[#241B15]">
                <div className="text-xs text-[#8F7D6E]">부제</div>
                <div className="sm:col-span-2 text-sm sm:text-base font-medium text-[#D6C6A8]">
                  {PICTUREBOOK_CLASS_CONFIG.courseSubtitle}
                </div>
              </div>

              {/* 수업 시간 */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 pb-6 border-b border-[#241B15]">
                <div className="text-xs text-[#8F7D6E]">수업 시간</div>
                <div className="sm:col-span-2 space-y-1.5">
                  <div className="text-sm sm:text-base font-bold text-[#FAF7F2]">
                    {PICTUREBOOK_CLASS_CONFIG.duration}
                  </div>
                  <p className="text-xs text-[#9E8B7C] leading-relaxed break-keep">
                    수업에서는 첫 그림책 제작과 출판 등록 준비를 진행합니다. 최종 편집 상태와 개인별 실습 속도에 따라 추가 작업이 필요할 수 있으며, 출간 및 판매 개시 시점은 각 플랫폼의 검토 절차에 따라 달라집니다.
                  </p>
                </div>
              </div>

              {/* 진행 방식 */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 pb-6 border-b border-[#241B15]">
                <div className="text-xs text-[#8F7D6E]">진행 방식</div>
                <div className="sm:col-span-2 text-sm sm:text-base font-semibold text-[#FAF7F2]">
                  {PICTUREBOOK_CLASS_CONFIG.format}
                </div>
              </div>

              {/* 개강 일정 */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 pb-6 border-b border-[#241B15]">
                <div className="text-xs text-[#8F7D6E]">개강 일정</div>
                <div className="sm:col-span-2 text-sm sm:text-base font-bold text-[#C6A66B]">
                  {PICTUREBOOK_CLASS_CONFIG.schedule}
                </div>
              </div>

              {/* 수강료 */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 pb-6 border-b border-[#241B15]">
                <div className="text-xs text-[#8F7D6E]">수강료</div>
                <div className="sm:col-span-2 text-sm sm:text-base font-bold text-[#D6C6A8]">
                  {PICTUREBOOK_CLASS_CONFIG.price}
                </div>
              </div>

              {/* 수강 난이도 */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 pb-6 border-b border-[#241B15]">
                <div className="text-xs text-[#8F7D6E]">수강 난이도</div>
                <div className="sm:col-span-2 text-sm sm:text-base font-semibold text-[#FAF7F2] break-keep">
                  {PICTUREBOOK_CLASS_CONFIG.difficulty}
                </div>
              </div>

              {/* 준비물 */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 pb-6 border-b border-[#241B15]">
                <div className="text-xs text-[#8F7D6E]">준비물</div>
                <div className="sm:col-span-2">
                  <ul className="space-y-1.5 text-xs sm:text-sm text-[#D6C6A8]">
                    {PREPARATION_ITEMS.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#C6A66B]">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* 사전 안내 */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 pb-6 border-b border-[#241B15]">
                <div className="text-xs text-[#8F7D6E]">사전 안내</div>
                <div className="sm:col-span-2">
                  <ul className="space-y-1.5 text-xs sm:text-sm text-[#A8988B] leading-relaxed break-keep">
                    {PRE_CLASS_NOTICES.map((notice, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#8E6D38]">•</span>
                        <span>{notice}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* 출판 전 지원 */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 pb-6 border-b border-[#241B15]">
                <div className="text-xs text-[#8F7D6E]">출판 전 지원</div>
                <div className="sm:col-span-2 space-y-1">
                  <strong className="text-sm sm:text-base font-bold text-[#C6A66B] block">
                    {PICTUREBOOK_CLASS_CONFIG.prePublishSupport}
                  </strong>
                  <p className="text-xs text-[#9E8B7C] leading-relaxed break-keep">
                    완성한 책을 등록하기 전 파일과 등록 준비 상태를 점검합니다. 세부 예약·진행 방식은 수강 안내를 통해 공지합니다.
                  </p>
                </div>
              </div>

              {/* 다시보기·일반 질문 지원 (확정 정책이 있을 때만 표시, 임의 정책 미적용) */}
              {PICTUREBOOK_CLASS_CONFIG.replayAndQuestionPolicy && (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 pb-6 border-b border-[#241B15]">
                  <div className="text-xs text-[#8F7D6E]">
                    다시보기·질문 지원
                  </div>
                  <div className="sm:col-span-2 text-xs sm:text-sm text-[#A8988B] leading-relaxed break-keep">
                    {PICTUREBOOK_CLASS_CONFIG.replayAndQuestionPolicy}
                  </div>
                </div>
              )}

              {/* 취소·환불 */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4">
                <div className="text-xs text-[#8F7D6E]">취소·환불</div>
                <div className="sm:col-span-2 text-xs sm:text-sm text-[#A8988B] leading-relaxed break-keep">
                  자명스쿨 공통 서비스 이용약관의 취소·환불 규정에 따릅니다.{" "}
                  <Link
                    href={PICTUREBOOK_CLASS_CONFIG.termsUrl}
                    className="text-[#C6A66B] underline underline-offset-4 hover:text-[#FAF7F2] font-semibold transition-colors"
                  >
                    취소·환불 규정 확인하기 →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ───────────────────────────────────────────
            [16. FAQ] - 자명스쿨 시그니처 웜베이지 배경 + 키보드 접근성 아코디언
           ─────────────────────────────────────────── */}
        <section className="w-full bg-[#F9F6F0] text-[#2E2723] py-20 md:py-28 border-b border-[#E8DFD3]">
          <div className="site-container">
            <div className="text-center mb-14">
              <span className="text-xs md:text-sm font-bold tracking-[0.2em] text-[#8E6D38] uppercase mb-3 block">
                FREQUENTLY ASKED QUESTIONS
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#2E2723] mb-4 break-keep">
                자주 묻는 질문
              </h2>
              <p className="text-sm sm:text-base text-[#6E5A4D] max-w-xl mx-auto break-keep">
                수강 전 가장 많이 궁금해하시는 질문과 답변을 정리했습니다.
              </p>
            </div>

            <PicturebookFaqAccordion
              items={PICTUREBOOK_FAQS}
              termsUrl={PICTUREBOOK_CLASS_CONFIG.termsUrl}
            />
          </div>
        </section>

        {/* ───────────────────────────────────────────
            [17. 최종 신청 영역 (#apply)]
           ─────────────────────────────────────────── */}
        <section
          id="apply"
          className="w-full py-20 md:py-28 bg-gradient-to-b from-[#14100E] to-[#0A0807] relative overflow-hidden"
        >
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none opacity-15 blur-[140px]"
            style={{
              background:
                "radial-gradient(circle, rgba(198,166,107,0.5) 0%, transparent 70%)",
            }}
          />

          <div className="site-container relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-xs md:text-sm font-semibold tracking-[0.25em] text-[#C6A66B] uppercase mb-4 block">
                FROM YOUR STORY TO YOUR BOOK
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-[#FAF7F2] mb-6 leading-tight break-keep">
                언젠가 쓰고 싶었던 이야기, <br />
                이번에는 책으로 시작해보세요.
              </h2>

              {/* 본문 설명 카드 */}
              <div className="my-8 p-6 md:p-8 rounded-2xl bg-[#1C1510] border border-[#4A3728] max-w-2xl mx-auto text-center space-y-3 shadow-lg">
                <p className="text-base sm:text-lg text-[#F5EFE6] font-bold leading-relaxed break-keep">
                  머릿속에만 있던 이야기를 꺼내고, <br />
                  AI로 장면을 만들고, <br />
                  Canva로 한 권의 책을 완성해가는 시간.
                </p>
                <p className="text-sm sm:text-base text-[#D6C6A8] leading-relaxed break-keep font-medium">
                  첫 그림책은 나의 이야기를 세상에 소개하는 첫걸음이 됩니다.
                </p>
              </div>

              {/* 최종 신청 요약 카드 */}
              <div className="p-6 sm:p-8 md:p-10 rounded-3xl bg-[#181310] border border-[#3E3127] shadow-2xl max-w-xl mx-auto mb-6 text-left">
                <div className="text-center mb-6 pb-6 border-b border-[#2B221B]">
                  <span className="text-[11px] font-bold text-[#C6A66B] uppercase tracking-widest block mb-1">
                    {PICTUREBOOK_CLASS_CONFIG.courseTitle}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-[#FAF7F2] break-keep">
                    수업을 통해 준비하는 4가지 결과물
                  </h3>
                </div>

                {/* 결과물 요약 4종 */}
                <div className="space-y-3 mb-6">
                  {FINAL_CTA_RESULTS.map((res, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 p-3 rounded-xl bg-[#221A15] border border-[#33261C]"
                    >
                      <span className="w-6 h-6 rounded-md bg-[#C6A66B]/20 text-[#D6C6A8] flex items-center justify-center text-xs font-bold shrink-0">
                        ✓
                      </span>
                      <span className="text-xs sm:text-sm font-semibold text-[#FAF7F2] break-keep">
                        {res}
                      </span>
                    </div>
                  ))}
                </div>

                {/* 혜택 강조 */}
                <div className="p-4 rounded-2xl bg-[#140F0C] border border-[#2E231B] mb-6">
                  <span className="text-[11px] font-bold text-[#C6A66B] block mb-1.5">
                    포함 혜택 6종
                  </span>
                  <p className="text-xs sm:text-sm text-[#D6C6A8] leading-relaxed break-keep font-medium">
                    기획 스킬 · 순서 템플릿 · 자동 생성 도구 <br />
                    1인 출판사 등록 전자책 · 출판 등록 전 1:1 컨설팅 <br />
                    부크크 등록 실전 노하우 정리집
                  </p>
                </div>

                {/* 강의 정보 (상단 정보와 동일한 데이터 참조) */}
                <div className="space-y-3 mb-8 pt-4 border-t border-[#2B221B]">
                  <div className="flex items-center justify-between text-xs sm:text-sm gap-2">
                    <span className="text-[#8F7D6E]">수업 시간</span>
                    <span className="text-[#FAF7F2] font-semibold text-right">
                      {PICTUREBOOK_CLASS_CONFIG.duration}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-xs sm:text-sm gap-2">
                    <span className="text-[#8F7D6E]">수강료</span>
                    <span className="text-[#D6C6A8] font-bold text-right">
                      {PICTUREBOOK_CLASS_CONFIG.price}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-xs sm:text-sm gap-2">
                    <span className="text-[#8F7D6E]">개강 일정</span>
                    <span className="text-[#C6A66B] font-bold text-right">
                      {PICTUREBOOK_CLASS_CONFIG.schedule}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-xs sm:text-sm gap-2">
                    <span className="text-[#8F7D6E]">출판 전 지원</span>
                    <span className="text-[#FAF7F2] font-medium text-right">
                      {PICTUREBOOK_CLASS_CONFIG.prePublishSupport}
                    </span>
                  </div>
                </div>

                {/* CTA 버튼 */}
                <PicturebookCtaButton
                  courseId={PICTUREBOOK_CLASS_CONFIG.id}
                  courseTitle={PICTUREBOOK_CLASS_CONFIG.courseTitle}
                  status={PICTUREBOOK_CLASS_CONFIG.status}
                  applicationUrl={PICTUREBOOK_CLASS_CONFIG.applicationUrl}
                  notificationUrl={PICTUREBOOK_CLASS_CONFIG.notificationUrl}
                  ctaOpenText={PICTUREBOOK_CLASS_CONFIG.ctaOpenText}
                  ctaScheduledText={PICTUREBOOK_CLASS_CONFIG.ctaScheduledText}
                  variant="final"
                />

                {/* 보조 링크 2종 */}
                <div className="mt-5 pt-4 border-t border-[#2B221B]/80 flex flex-wrap items-center justify-center gap-4 text-xs">
                  <Link
                    href={PICTUREBOOK_CLASS_CONFIG.termsUrl}
                    className="text-[#A8988B] hover:text-[#C6A66B] underline underline-offset-4 transition-colors"
                  >
                    취소·환불 규정 확인하기
                  </Link>
                  <span className="text-[#3E3127]">|</span>
                  <Link
                    href={PICTUREBOOK_CLASS_CONFIG.onedayListUrl}
                    className="text-[#A8988B] hover:text-[#C6A66B] underline underline-offset-4 transition-colors"
                  >
                    다른 원데이 클래스 둘러보기
                  </Link>
                </div>
              </div>

              {/* 마지막 문구 */}
              <div className="py-6 text-center">
                <p className="text-base sm:text-lg font-bold text-[#D6C6A8] break-keep">
                  작은 배움, 하나의 완성. <br />
                  <span className="text-[#FAF7F2]">
                    이번에는 당신의 이야기가 책이 됩니다.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 수강 취소 및 환불 안내 공통 섹션 */}
        <CourseRefundPolicySection />
      </div>

      {/* ───────────────────────────────────────────────
          모바일 하단 고정 신청 바 (상단·하단과 동일한 상태 참조, 본문/푸터 가림 방지 여백 확보)
         ─────────────────────────────────────────────── */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#14100E]/95 backdrop-blur-md border-t border-[#3E3127] px-4 py-3 shadow-[0_-8px_24px_rgba(0,0,0,0.6)]">
        <div className="max-w-lg mx-auto flex items-center justify-between gap-3">
          <div className="min-w-0">
            <p className="text-xs font-bold text-[#FAF7F2] truncate">
              {PICTUREBOOK_CLASS_CONFIG.courseTitle}
            </p>
            <p className="text-[11px] text-[#C6A66B] truncate">
              {PICTUREBOOK_CLASS_CONFIG.schedule} · {PICTUREBOOK_CLASS_CONFIG.price}
            </p>
          </div>
          <PicturebookCtaButton
            courseId={PICTUREBOOK_CLASS_CONFIG.id}
            courseTitle={PICTUREBOOK_CLASS_CONFIG.courseTitle}
            status={PICTUREBOOK_CLASS_CONFIG.status}
            applicationUrl={PICTUREBOOK_CLASS_CONFIG.applicationUrl}
            notificationUrl={PICTUREBOOK_CLASS_CONFIG.notificationUrl}
            ctaOpenText={PICTUREBOOK_CLASS_CONFIG.ctaOpenText}
            ctaScheduledText={PICTUREBOOK_CLASS_CONFIG.ctaScheduledText}
            variant="mobile-bar"
          />
        </div>
      </div>
    </main>
  );
}

