import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import {
  BLOG_WEBSITE_CLASS_CONFIG,
  BLOG_WEBSITE_IMAGES,
  BLOG_PROBLEM_CARDS,
  BLOG_BEFORE_AFTER,
  BLOG_ONE_DAY_RESULTS,
  BLOG_PACKAGE_SUMMARY,
  BLOG_CONCEPT_EXAMPLES,
  BLOG_DIFFERENTIATOR_POINTS,
  BLOG_CURRICULUM_STEPS,
  BLOG_TIME_SCHEDULE,
  BLOG_CLASS_KITS,
  BLOG_REAL_CASES,
  BLOG_RECOMMENDED_FOR,
  BLOG_EXPANSION_STEPS,
  BLOG_FAQS,
  BLOG_FINAL_COMPLETION_ITEMS,
} from "@/data/blogWebsiteClassData";
import {
  BlogWebsiteReplaceableImage,
  BlogWebsiteFaqAccordion,
  BlogWebsiteCtaButton,
} from "@/components/blog-website/BlogWebsiteInteractive";

export const metadata: Metadata = {
  title: "나만의 블로그 홈페이지 제작 원데이 | 네이버 블로그 PC 메인 꾸미기 · 자명스쿨",
  description:
    "내 비즈니스의 첫인상. 하루 3~4시간 만에 전문성 있는 메인 이미지와 소개·상품·문의 연결 배너, 투명 위젯까지 직접 완성하는 실전 블로그 홈페이지 제작 클래스입니다.",
  alternates: {
    canonical: "https://www.jmschool.kr/blog-website",
  },
  openGraph: {
    title: "나만의 블로그 홈페이지 제작 원데이 | 네이버 블로그 PC 메인 꾸미기 · 자명스쿨",
    description:
      "전문성이 돋보이는 메인 이미지와 소개·상품·수업·문의로 이어지는 배너. 내 비즈니스에 어울리는 온라인 공간을 직접 꾸며보세요.",
    url: "https://www.jmschool.kr/blog-website",
    siteName: "자명스쿨",
    locale: "ko_KR",
    type: "website",
  },
};

export default function BlogWebsiteClassPage() {
  const heroMockupSlot = BLOG_WEBSITE_IMAGES.heroPcMockup;

  const conceptFallbackMap = {
    conceptInstructor: "concept-instructor",
    conceptConsulting: "concept-consulting",
    conceptWorkshop: "concept-workshop",
    conceptSoloService: "concept-solo-service",
  } as const;

  const realCaseFallbackMap = {
    realCaseOverview: "case-overview",
    realCaseBanners: "case-banners",
    realCaseNavigation: "case-navigation",
    realCaseEditing: "case-editing",
  } as const;

  return (
    <main className="min-h-screen bg-[#0D0B0A] text-[#EDE6DC] selection:bg-[#C6A66B]/30 selection:text-white font-sans overflow-x-hidden pb-24 md:pb-0">
      {/* ───────────────────────────────────────────────
          공통 상단 서브 내비게이션 (/miniapp 기준 디자인 체계 유지)
         ─────────────────────────────────────────────── */}
      <nav className="sticky top-0 z-40 backdrop-blur-md bg-[#0D0B0A]/90 border-b border-[#2E2723] px-4 sm:px-6 py-3.5 transition-all">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-2">
          <Link
            href={BLOG_WEBSITE_CLASS_CONFIG.onedayListUrl}
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
            {BLOG_WEBSITE_CLASS_CONFIG.status === "open"
              ? BLOG_WEBSITE_CLASS_CONFIG.ctaOpenText
              : BLOG_WEBSITE_CLASS_CONFIG.ctaScheduledText}
          </a>
        </div>
      </nav>

      {/* ═══════════════════════════════════════════════
          [2. 상단 히어로]
         ═══════════════════════════════════════════════ */}
      <section className="w-full bg-[#F9F6F0] text-[#2E2723] border-b border-[#E8DFD3] pt-8 pb-12 md:py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* 좌측: 상단 영문, 메인 제목(H1), 서브 제목, 본문, 강조 문구, 핵심 배지, 수업 정보, 신청 버튼 */}
            <div className="lg:col-span-7 space-y-5 sm:space-y-6">
              {/* 상단 영문 라벨 */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs md:text-sm font-bold tracking-wider text-[#8E6D38] uppercase">
                  {BLOG_WEBSITE_CLASS_CONFIG.categoryLabel}
                </span>
                <span className="text-[#C6A66B]">·</span>
                <span className="text-xs text-[#7C6656] font-medium">
                  {BLOG_WEBSITE_CLASS_CONFIG.subBadge}
                </span>
              </div>

              {/* 강의명 & 부제 식별 배지 */}
              <div className="inline-flex flex-wrap items-center gap-2 px-3 py-1 rounded-lg bg-[#FAF2E6] border border-[#E8DFD3] text-xs text-[#6E5A4D]">
                <strong className="font-bold text-[#2E2723]">
                  {BLOG_WEBSITE_CLASS_CONFIG.courseTitle}
                </strong>
                <span className="text-[#C6A66B]">|</span>
                <span>{BLOG_WEBSITE_CLASS_CONFIG.courseSubtitle}</span>
              </div>

              {/* 메인 제목 (H1) & 서브 제목 */}
              <div className="space-y-2">
                <h1 className="text-2xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight text-[#2E2723] leading-tight break-keep">
                  {BLOG_WEBSITE_CLASS_CONFIG.heroTitleLine1} <br />
                  <span className="text-[#8E6D38]">
                    {BLOG_WEBSITE_CLASS_CONFIG.heroTitleLine2}
                  </span>
                </h1>
                <p className="text-base sm:text-lg font-bold text-[#6E5A4D] break-keep">
                  {BLOG_WEBSITE_CLASS_CONFIG.heroSubTitle}
                </p>
              </div>

              {/* 설명 본문 */}
              <p className="text-sm sm:text-base text-[#4A3F35] leading-relaxed break-keep">
                전문성이 돋보이는 메인 이미지와{" "}
                <br className="hidden sm:inline" />
                소개·상품·수업·문의로 이어지는 배너.{" "}
                <br className="hidden sm:inline" />
                제공되는 디자인 템플릿과 AI를 활용해{" "}
                <br className="hidden sm:inline" />
                내 브랜드에 어울리는 블로그 홈페이지를 직접 만듭니다.
              </p>

              {/* 강조 문구 */}
              <div className="p-4 rounded-xl bg-[#FAF2E6] border border-[#E8DFD3] text-sm font-semibold text-[#8E6D38] leading-relaxed break-keep">
                ✨ {BLOG_WEBSITE_CLASS_CONFIG.heroHighlight}
              </div>

              {/* 핵심 배지 4개 */}
              <div className="flex flex-wrap items-center gap-2 pt-0.5">
                {BLOG_WEBSITE_CLASS_CONFIG.heroBadges.map((badge, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#FAF2E6] text-[#7C6656] text-xs font-semibold border border-[#E8DFD3] shadow-2xs"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8E6D38]" />
                    {badge}
                  </span>
                ))}
              </div>

              {/* 수업 정보 4칸 */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1">
                <div className="p-3 rounded-xl bg-white border border-[#E8DFD3] text-center shadow-xs">
                  <span className="block text-[11px] text-[#7C6656] mb-0.5">
                    진행 방식
                  </span>
                  <strong className="text-xs sm:text-sm text-[#2E2723] font-bold break-keep">
                    {BLOG_WEBSITE_CLASS_CONFIG.format}
                  </strong>
                </div>
                <div className="p-3 rounded-xl bg-white border border-[#E8DFD3] text-center shadow-xs">
                  <span className="block text-[11px] text-[#7C6656] mb-0.5">
                    수업 시간
                  </span>
                  <strong className="text-xs sm:text-sm text-[#2E2723] font-bold break-keep">
                    {BLOG_WEBSITE_CLASS_CONFIG.duration}
                  </strong>
                </div>
                <div className="p-3 rounded-xl bg-white border border-[#E8DFD3] text-center shadow-xs">
                  <span className="block text-[11px] text-[#7C6656] mb-0.5">
                    개강 일정
                  </span>
                  <strong className="text-xs sm:text-sm text-[#C6A66B] font-bold break-keep">
                    {BLOG_WEBSITE_CLASS_CONFIG.schedule}
                  </strong>
                </div>
                <div className="p-3 rounded-xl bg-white border border-[#E8DFD3] text-center shadow-xs">
                  <span className="block text-[11px] text-[#7C6656] mb-0.5">
                    수강료
                  </span>
                  <strong className="text-xs sm:text-sm text-[#8E6D38] font-bold break-keep">
                    {BLOG_WEBSITE_CLASS_CONFIG.price}
                  </strong>
                </div>
              </div>

              {/* 신청 버튼 */}
              <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-3">
                <BlogWebsiteCtaButton
                  courseId={BLOG_WEBSITE_CLASS_CONFIG.id}
                  courseTitle={BLOG_WEBSITE_CLASS_CONFIG.courseTitle}
                  status={BLOG_WEBSITE_CLASS_CONFIG.status}
                  applicationUrl={BLOG_WEBSITE_CLASS_CONFIG.applicationUrl}
                  notificationUrl={BLOG_WEBSITE_CLASS_CONFIG.notificationUrl}
                  ctaOpenText={BLOG_WEBSITE_CLASS_CONFIG.ctaOpenText}
                  ctaScheduledText={BLOG_WEBSITE_CLASS_CONFIG.ctaScheduledText}
                  variant="hero"
                />
                <span className="text-xs text-[#7C6656] break-keep">
                  * 현재 초안 단계로 개강 일정 확정 시 가장 먼저 안내해 드립니다.
                </span>
              </div>

              {/* 해시태그 */}
              <div className="flex flex-wrap items-center gap-2 pt-1 border-t border-[#E8DFD3]">
                {BLOG_WEBSITE_CLASS_CONFIG.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-[#8E6D38] font-medium"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* 우측: PC 브라우저 / 노트북 목업 (메인 이미지 + 배너 + 통일감 있는 카테고리 구성) */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative w-full max-w-[480px] mx-auto">
                <div className="rounded-[1.75rem] bg-[#1E1815] p-3 sm:p-4 shadow-2xl border-4 border-[#3E322C]">
                  {/* 브라우저 탑 바 */}
                  <div className="flex items-center justify-between px-3 py-1.5 text-[10px] text-[#A8988B] border-b border-[#2C231D] mb-3">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                      <span className="ml-2 font-mono text-[9px] text-[#A8988B] hidden sm:inline">
                        NAVER BLOG PC HOMEPAGE
                      </span>
                    </div>
                    <span className="px-2 py-0.5 rounded-full bg-[#C6A66B]/20 text-[#C6A66B] border border-[#C6A66B]/40 font-bold text-[9px]">
                      {heroMockupSlot.badgeText || "수업 결과물 예시"}
                    </span>
                  </div>

                  {/* 노트북/브라우저 내부 뷰 */}
                  {heroMockupSlot.src ? (
                    <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden bg-[#0E0B09]">
                      <Image
                        src={heroMockupSlot.src}
                        alt={heroMockupSlot.alt}
                        fill
                        sizes="480px"
                        className="object-contain"
                      />
                    </div>
                  ) : (
                    <div className="rounded-xl bg-gradient-to-b from-[#181310] via-[#120E0B] to-[#0D0A08] p-3.5 sm:p-4 text-[#FAF7F2] border border-[#2E241D] space-y-3">
                      {/* 메인 이미지 영역 (브랜드명과 소개 문구) */}
                      <div className="p-3.5 sm:p-4 rounded-xl bg-gradient-to-r from-[#2B2018] via-[#241B14] to-[#1C1510] border border-[#C6A66B]/60 flex items-center justify-between gap-3 shadow-md">
                        <div className="space-y-1">
                          <span className="px-2 py-0.5 rounded bg-[#C6A66B]/20 text-[#C6A66B] text-[8px] font-extrabold tracking-wider uppercase inline-block">
                            MY BRAND SLOGAN
                          </span>
                          <h3 className="text-xs sm:text-sm font-extrabold text-[#FAF7F2] leading-tight">
                            내 전문성을 한눈에 보여주는 메인 비주얼
                          </h3>
                          <p className="text-[9px] sm:text-[10px] text-[#A8988B] leading-snug">
                            누구인지, 어떤 가치를 전하는지 첫 화면에서 명확하게 전달
                          </p>
                        </div>
                        <div className="w-12 h-12 rounded-xl bg-[#1B140F] border border-[#C6A66B]/40 flex items-center justify-center text-2xl shrink-0">
                          🌟
                        </div>
                      </div>

                      {/* 배너 4종 그리드 (소개·서비스·후기·문의) */}
                      <div className="space-y-1">
                        <div className="flex items-center justify-between text-[9px] text-[#A8988B] px-1">
                          <span>연결 배너 & 투명 위젯 좌표 영역</span>
                          <span className="text-[#C6A66B] font-semibold">
                            원클릭 바로가기
                          </span>
                        </div>
                        <div className="grid grid-cols-4 gap-1.5 text-center">
                          {[
                            { name: "브랜드 소개", sub: "전문가 프로필", icon: "👤" },
                            { name: "서비스/상품", sub: "프로그램 안내", icon: "📦" },
                            { name: "수강생 후기", sub: "생생한 스토리", icon: "💬" },
                            { name: "신청/문의", sub: "1:1 빠른 상담", icon: "✉️" },
                          ].map((item, idx) => (
                            <div
                              key={idx}
                              className="p-2 rounded-lg bg-[#221A14] border border-[#3E3024] flex flex-col items-center justify-between gap-1 shadow-sm"
                            >
                              <span className="text-sm">{item.icon}</span>
                              <strong className="text-[9px] text-[#FAF7F2] font-bold block truncate w-full">
                                {item.name}
                              </strong>
                              <span className="text-[7px] text-[#8F7D6E] block truncate w-full">
                                {item.sub}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* 블로그 포스팅 미리보기 영역 */}
                      <div className="p-2 rounded-lg bg-[#140F0C] border border-[#261E18] flex items-center justify-between text-[8px] text-[#8F7D6E]">
                        <span>최신 콘텐츠 포스팅 피드</span>
                        <span className="text-[#C6A66B]">
                          정돈된 폰트·컬러 톤 통일
                        </span>
                      </div>
                    </div>
                  )}
                </div>

                {/* 하단 캡션 */}
                <p className="mt-3 text-center text-xs text-[#6E5A4D] font-medium">
                  ▲ 수업 결과물 예시 (네이버 블로그 PC 홈페이지형 메인 이미지 + 연결 배너)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          [3. 수업 소개 — 기존 ‘앱인토스란?’ 영역 대응]
         ═══════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 px-4 sm:px-6 border-b border-[#221C18] bg-[#120E0C]">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span className="inline-block px-3.5 py-1 rounded-full bg-[#1F1915] border border-[#362B24] text-[#C6A66B] text-xs font-bold tracking-wider uppercase">
            ABOUT BLOG WEBSITE
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#FAF7F2] leading-tight break-keep">
            익숙한 블로그를 <br />
            <span className="text-[#D6C6A8]">
              내 브랜드를 소개하는 홈페이지처럼
            </span>
          </h2>
          <div className="max-w-2xl mx-auto space-y-4 text-sm sm:text-base text-[#B8A89A] leading-relaxed break-keep">
            <p>
              블로그에 들어왔을 때 누구인지, 어떤 서비스를 제공하는지, 어디로 문의하면 되는지 한눈에 알 수 있도록 메인 화면을 구성합니다.
            </p>
            <p className="text-[#FAF7F2] font-semibold">
              브랜드 분위기를 담은 이미지와 연결 배너를 활용해 방문자가 필요한 정보를 쉽게 찾도록 만듭니다.
            </p>
          </div>

          <div className="pt-4 max-w-2xl mx-auto">
            <div className="p-5 sm:p-6 rounded-2xl bg-[#181310] border border-[#322720] text-center space-y-2">
              <span className="text-xs font-bold text-[#C6A66B] uppercase tracking-wider block">
                MAIN FOCUS
              </span>
              <p className="text-sm sm:text-base font-extrabold text-[#FAF7F2] break-keep">
                메인 이미지 제작 → 연결 배너 구성 → 투명 위젯 적용 → 직접 수정 가능한 원본 관리
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          [4. 고민 공감 — WHY BLOG WEBSITE?]
         ═══════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 px-4 sm:px-6 border-b border-[#221C18]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 space-y-3">
            <span className="text-xs font-bold tracking-widest text-[#C6A66B] uppercase block">
              WHY BLOG WEBSITE?
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#FAF7F2] leading-tight break-keep">
              좋은 콘텐츠를 쌓고 있는데, <br />
              <span className="text-[#D6C6A8]">
                내 전문성도 잘 전달되고 있나요?
              </span>
            </h2>
            <p className="text-sm sm:text-base text-[#A8988B] max-w-2xl mx-auto pt-2 leading-relaxed break-keep">
              글은 꾸준히 쓰고 있지만 메인 화면은 여전히 밋밋하고, 서비스 소개와 문의 방법은 여러 글 사이에 흩어져 있습니다. 예쁘게 꾸미고 싶어도 이미지 크기와 배너 연결, 위젯 설정이 막막하게 느껴집니다.
            </p>
          </div>

          {/* 3개 고민 카드 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {BLOG_PROBLEM_CARDS.map((card, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#161210] border border-[#2B221D] flex flex-col justify-between space-y-4"
              >
                <div className="space-y-2.5">
                  <span className="inline-block text-xs font-bold text-[#C6A66B] px-2.5 py-1 rounded-md bg-[#221B16] border border-[#362B23]">
                    {card.number}
                  </span>
                  <h3 className="text-lg font-extrabold text-[#FAF7F2] break-keep">
                    {card.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#A8988B] leading-relaxed break-keep">
                  {card.description}
                </p>
              </div>
            ))}
          </div>

          {/* 마무리 문장 */}
          <div className="mt-10 p-6 sm:p-7 rounded-2xl bg-gradient-to-r from-[#1D1612] via-[#241B16] to-[#1D1612] border border-[#3E3024] text-center space-y-1.5">
            <p className="text-sm sm:text-base text-[#D6C6A8] font-medium break-keep">
              외주 제작에 맡기지 않고,
            </p>
            <p className="text-base sm:text-lg font-extrabold text-[#FAF7F2] break-keep">
              내 비즈니스를 가장 잘 아는 내가, 필요한 순간 직접 바꿀 수 있도록 배웁니다.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          [5. 수강 전후 변화 — TRANSFORMATION]
         ═══════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 px-4 sm:px-6 border-b border-[#221C18] bg-[#120E0C]">
        <div className="max-w-5xl mx-auto space-y-10">
          <div className="text-center space-y-3">
            <span className="text-xs font-bold tracking-widest text-[#C6A66B] uppercase block">
              TRANSFORMATION
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#FAF7F2] leading-tight break-keep">
              글을 모아두던 블로그에서 <br />
              <span className="text-[#D6C6A8]">
                내 비즈니스를 소개하는 공간으로
              </span>
            </h2>
          </div>

          {/* 전후 이미지 비교 (같은 가상 브랜드의 전/후 비교, 매출/조회수 수치 배제) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-2xl bg-[#14100E] border border-[#2E241E] space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-zinc-400">
                  수강 전 · 기본 블로그
                </span>
                <span className="px-2.5 py-0.5 rounded bg-zinc-800 text-zinc-300 text-[11px] font-semibold">
                  밋밋한 메인
                </span>
              </div>
              <h3 className="text-sm font-extrabold text-[#EDE6DC]">
                브랜드 특징과 서비스가 보이지 않는 화면
              </h3>
              <BlogWebsiteReplaceableImage
                slot={BLOG_WEBSITE_IMAGES.beforeAfterBefore}
                fallbackType="before-after-before"
              />
            </div>

            <div className="p-5 rounded-2xl bg-[#1B1510] border border-[#C6A66B]/60 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#C6A66B]">
                  수강 후 · 블로그 홈페이지
                </span>
                <span className="px-2.5 py-0.5 rounded bg-[#C6A66B] text-[#1A1410] text-[11px] font-extrabold">
                  비즈니스 공간 완성
                </span>
              </div>
              <h3 className="text-sm font-extrabold text-[#FAF7F2]">
                전문성 있는 메인 이미지와 연결 배너 적용
              </h3>
              <BlogWebsiteReplaceableImage
                slot={BLOG_WEBSITE_IMAGES.beforeAfterAfter}
                fallbackType="before-after-after"
              />
            </div>
          </div>

          {/* 5개 Before/After 리스트 */}
          <div className="space-y-3 pt-2">
            {BLOG_BEFORE_AFTER.map((item, idx) => (
              <div
                key={idx}
                className="grid grid-cols-1 md:grid-cols-11 gap-3 md:gap-4 items-center p-4 sm:p-5 rounded-2xl bg-[#17120F] border border-[#2B221D]"
              >
                <div className="md:col-span-5 flex items-center gap-3 p-3.5 rounded-xl bg-[#120E0C] border border-[#251E19]">
                  <span className="px-2 py-0.5 rounded bg-zinc-800 text-zinc-400 text-[10px] font-bold uppercase shrink-0">
                    BEFORE
                  </span>
                  <span className="text-xs sm:text-sm text-[#A8988B] break-keep">
                    {item.before}
                  </span>
                </div>

                <div className="md:col-span-1 flex items-center justify-center text-[#C6A66B] font-bold text-sm">
                  <span className="hidden md:inline">→</span>
                  <span className="md:hidden">↓</span>
                </div>

                <div className="md:col-span-5 flex items-center gap-3 p-3.5 rounded-xl bg-[#211A14] border border-[#C6A66B]/40">
                  <span className="px-2 py-0.5 rounded bg-[#C6A66B] text-[#1A1410] text-[10px] font-extrabold uppercase shrink-0">
                    AFTER
                  </span>
                  <strong className="text-xs sm:text-sm text-[#FAF7F2] font-bold break-keep">
                    {item.after}
                  </strong>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          [6. 하루 완성 결과물 — ONE DAY RESULT]
         ═══════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 px-4 sm:px-6 border-b border-[#221C18]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 space-y-3">
            <span className="text-xs font-bold tracking-widest text-[#C6A66B] uppercase block">
              ONE DAY RESULT
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#FAF7F2] leading-tight break-keep">
              하루 3~4시간, <br />
              <span className="text-[#D6C6A8]">
                내 브랜드를 담은 블로그 메인을 완성합니다
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {BLOG_ONE_DAY_RESULTS.map((card, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#161210] border border-[#2E241E] hover:border-[#C6A66B]/45 transition-colors flex flex-col justify-between space-y-4"
              >
                <div className="space-y-2.5">
                  <span className="text-[11px] font-bold tracking-wider text-[#C6A66B] uppercase block">
                    {card.step}
                  </span>
                  <h3 className="text-lg sm:text-xl font-extrabold text-[#FAF7F2] break-keep">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#A8988B] leading-relaxed break-keep">
                    {card.description}
                  </p>
                </div>
                <div className="pt-3 border-t border-[#241C17]">
                  <span className="text-xs text-[#D6C6A8] font-medium">
                    {card.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 sm:p-5 rounded-xl bg-[#17120F] border border-[#2E241D] text-center">
            <p className="text-xs sm:text-sm text-[#C4B5A6] leading-relaxed break-keep">
              ※ 템플릿을 활용해 핵심 메인 구성과 주요 링크 연결을 완성합니다.{" "}
              <br className="hidden sm:inline" />
              개인별 준비 상태에 따라 세부 디자인은 수업 후 이어서 다듬을 수 있습니다.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          [7. 수업 구성 요약 — PACKAGE INCLUDED]
         ═══════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 px-4 sm:px-6 border-b border-[#221C18] bg-[#120E0C]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 space-y-3">
            <span className="text-xs font-bold tracking-widest text-[#C6A66B] uppercase block">
              PACKAGE INCLUDED
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#FAF7F2] leading-tight break-keep">
              디자인부터 적용까지, <br />
              <span className="text-[#D6C6A8]">
                필요한 과정을 한 번에 배웁니다
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {BLOG_PACKAGE_SUMMARY.map((item) => (
              <div
                key={item.number}
                className="p-5 sm:p-6 rounded-2xl bg-[#181310] border border-[#2F251E] space-y-2.5"
              >
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-[#C6A66B]/15 border border-[#C6A66B]/40 text-[#C6A66B] text-xs font-extrabold">
                  {item.number}
                </span>
                <h3 className="text-base sm:text-lg font-extrabold text-[#FAF7F2] break-keep">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#A8988B] leading-relaxed break-keep">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          [8. 제작 예시 — 기존 APP EXAMPLES 영역 대응]
         ═══════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 px-4 sm:px-6 border-b border-[#221C18]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 space-y-3">
            <span className="text-xs font-bold tracking-widest text-[#C6A66B] uppercase block">
              BUSINESS DESIGN EXAMPLES
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#FAF7F2] leading-tight break-keep">
              같은 블로그도 <br />
              <span className="text-[#D6C6A8]">
                비즈니스에 따라 다른 얼굴이 됩니다
              </span>
            </h2>
            <p className="text-xs sm:text-sm text-[#A8988B] break-keep">
              제공되는 템플릿에 내 사진과 문구, 브랜드 색상을 적용해 나에게 어울리는 블로그로 바꿔봅니다. (디자인 콘셉트 예시)
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {BLOG_CONCEPT_EXAMPLES.map((concept) => {
              const slot = BLOG_WEBSITE_IMAGES[concept.imageSlotKey];
              const fallbackType = conceptFallbackMap[concept.imageSlotKey];
              return (
                <div
                  key={concept.id}
                  className="p-5 sm:p-6 rounded-2xl bg-[#161210] border border-[#2E241E] flex flex-col justify-between space-y-4"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-lg">{concept.icon}</span>
                        <h3 className="text-lg font-extrabold text-[#FAF7F2] break-keep">
                          {concept.title}
                        </h3>
                      </div>
                      <p className="text-xs sm:text-sm text-[#A8988B] break-keep">
                        메뉴 구성: {concept.menuExample}
                      </p>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-[#221A14] border border-[#3A2D23] text-[10px] font-bold text-[#C6A66B] shrink-0">
                      디자인 콘셉트 예시
                    </span>
                  </div>

                  <BlogWebsiteReplaceableImage
                    slot={slot}
                    fallbackType={fallbackType}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          [9. 핵심 차별점 — 내 비즈니스의 온라인 인테리어]
         ═══════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 px-4 sm:px-6 border-b border-[#221C18] bg-[#14100D]">
        <div className="max-w-5xl mx-auto">
          <div className="p-6 sm:p-10 rounded-3xl bg-gradient-to-b from-[#1E1713] to-[#15100D] border-2 border-[#C6A66B]/45 shadow-2xl space-y-8">
            <div className="text-center space-y-3">
              <span className="inline-block px-3.5 py-1 rounded-full bg-[#C6A66B]/15 border border-[#C6A66B]/40 text-[#C6A66B] text-xs font-bold tracking-wider uppercase">
                CORE VALUE · ONLINE INTERIOR
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#FAF7F2] leading-tight break-keep">
                블로그는 1인 비즈니스의 <br />
                <span className="text-[#D6C6A8]">온라인 인테리어입니다</span>
              </h2>
              <p className="text-sm sm:text-base text-[#B8A89A] max-w-2xl mx-auto leading-relaxed break-keep">
                매장의 간판과 인테리어가 첫인상을 만들듯, 블로그의 메인 화면도 내 브랜드의 분위기를 전합니다. 어떤 사진을 쓰고, 어떤 문장을 먼저 보여주고, 어떤 메뉴로 안내하는지에 따라 방문자가 나를 이해하는 방식이 달라집니다.
              </p>
            </div>

            {/* 5개 강조 항목 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
              {BLOG_DIFFERENTIATOR_POINTS.map((pt) => (
                <div
                  key={pt.number}
                  className="p-4 rounded-xl bg-[#14100D] border border-[#342820] flex flex-col justify-between gap-2"
                >
                  <span className="text-[11px] font-extrabold text-[#C6A66B]">
                    POINT {pt.number}
                  </span>
                  <div className="space-y-1">
                    <h4 className="text-xs sm:text-sm font-bold text-[#FAF7F2] leading-snug break-keep">
                      {pt.title}
                    </h4>
                    <p className="text-[11px] text-[#9E8B7C] leading-snug break-keep">
                      {pt.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* 강조 문구 배너 */}
            <div className="p-5 rounded-2xl bg-[#1C1510] border border-[#C6A66B]/50 text-center">
              <p className="text-base sm:text-lg font-extrabold text-[#FAF7F2] break-keep">
                ✨ 보기 좋은 디자인에, 내 비즈니스를 이해하기 쉬운 구성을 더합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          [10. 커리큘럼 — 기본 버전·심화 버전]
         ═══════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 px-4 sm:px-6 border-b border-[#221C18]">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-3">
            <span className="text-xs font-bold tracking-widest text-[#C6A66B] uppercase block">
              CURRICULUM · BASIC & ADVANCED
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#FAF7F2] leading-tight break-keep">
              기본부터 심화까지, <br />
              <span className="text-[#D6C6A8]">
                직접 만들고 바꾸는 방법을 배웁니다
              </span>
            </h2>
          </div>

          {/* 기본 버전 vs 심화 버전 구분 섹션 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* BASIC · 기본 버전 */}
            <div className="p-6 rounded-3xl bg-[#15110E] border-2 border-[#362A20] space-y-4">
              <div className="border-b border-[#2B221A] pb-3">
                <span className="px-2.5 py-0.5 rounded bg-[#C6A66B]/20 text-[#C6A66B] text-[10px] font-extrabold uppercase">
                  TRACK 01
                </span>
                <h3 className="text-lg font-extrabold text-[#FAF7F2] mt-1">
                  BASIC · 기본 버전
                </h3>
                <p className="text-xs text-[#9E8B7C]">
                  템플릿으로 첫 블로그 홈페이지 완성하기
                </p>
              </div>

              <div className="space-y-3">
                {BLOG_CURRICULUM_STEPS.filter((s) => s.track === "BASIC").map(
                  (item) => (
                    <div
                      key={item.step}
                      className="p-3.5 rounded-xl bg-[#1C1612] border border-[#2B2119] flex items-center justify-between gap-3"
                    >
                      <div className="space-y-0.5">
                        <span className="text-[10px] font-bold text-[#C6A66B]">
                          {item.step}
                        </span>
                        <h4 className="text-xs sm:text-sm font-bold text-[#FAF7F2] break-keep">
                          {item.title}
                        </h4>
                      </div>
                      <span className="text-[11px] text-[#D6C6A8] font-semibold text-right shrink-0">
                        {item.output}
                      </span>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* ADVANCED · 심화 버전 */}
            <div className="p-6 rounded-3xl bg-[#1B1510] border-2 border-[#C6A66B]/60 space-y-4 shadow-xl">
              <div className="border-b border-[#362920] pb-3">
                <span className="px-2.5 py-0.5 rounded bg-[#C6A66B] text-[#1A1410] text-[10px] font-extrabold uppercase">
                  TRACK 02
                </span>
                <h3 className="text-lg font-extrabold text-[#FAF7F2] mt-1">
                  ADVANCED · 심화 버전
                </h3>
                <p className="text-xs text-[#D6C6A8]">
                  내 비즈니스에 맞게 디자인과 연결 구조 다듬기
                </p>
              </div>

              <div className="space-y-3">
                {BLOG_CURRICULUM_STEPS.filter((s) => s.track === "ADVANCED").map(
                  (item) => (
                    <div
                      key={item.step}
                      className="p-3.5 rounded-xl bg-[#231A14] border border-[#3E3024] flex items-center justify-between gap-3"
                    >
                      <div className="space-y-0.5">
                        <span className="text-[10px] font-bold text-[#C6A66B]">
                          {item.step}
                        </span>
                        <h4 className="text-xs sm:text-sm font-bold text-[#FAF7F2] break-keep">
                          {item.title}
                        </h4>
                      </div>
                      <span className="text-[11px] text-[#FAF7F2] font-semibold text-right shrink-0">
                        {item.output}
                      </span>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>

          <div className="p-4 sm:p-5 rounded-xl bg-[#17120F] border border-[#2E241D] text-center">
            <p className="text-xs sm:text-sm text-[#C4B5A6] leading-relaxed break-keep">
              ※ 기본 단계에서 핵심 구성을 완성한 뒤, 심화 단계에서 디자인과 연결을 다듬습니다.{" "}
              <br className="hidden sm:inline" />
              처음 참여하는 분도 단계별로 따라올 수 있도록 친절하게 진행합니다.
            </p>
          </div>

          {/* 시간 구성안 (총 4시간 기준) */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#15110E] border border-[#2E241E] space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#261E18] pb-4">
              <div>
                <span className="text-xs font-bold text-[#C6A66B] uppercase tracking-wider block">
                  TIME SCHEDULE
                </span>
                <h3 className="text-lg sm:text-xl font-extrabold text-[#FAF7F2]">
                  운영용 시간 구성안 (총 4시간)
                </h3>
              </div>
              <span className="text-xs text-[#A8988B]">
                총 240분 (기본 템플릿 + 심화 위젯 실습)
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-[#2B221C] text-xs text-[#9E8B7C]">
                    <th className="py-3 px-4 font-bold">구간</th>
                    <th className="py-3 px-4 font-bold text-right">시간</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#221A15] text-xs sm:text-sm">
                  {BLOG_TIME_SCHEDULE.map((row, idx) => (
                    <tr
                      key={idx}
                      className="hover:bg-[#1B1511] transition-colors"
                    >
                      <td className="py-3.5 px-4 font-semibold text-[#FAF7F2]">
                        {row.phase}
                      </td>
                      <td className="py-3.5 px-4 text-right font-bold text-[#C6A66B]">
                        {row.duration}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-xs text-[#9E8B7C] pt-1 break-keep">
              * 3시간 수업에서는 기본 템플릿과 핵심 배너 완성에 집중하고, 심화 변형 예시는 시연과 복습 자료로 보완합니다.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          [11. 핵심 철학 — 기존 NOT JUST CODING 영역 대응]
         ═══════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 px-4 sm:px-6 border-b border-[#221C18] bg-[#120E0C]">
        <div className="max-w-4xl mx-auto">
          <div className="p-6 sm:p-10 rounded-3xl bg-[#181310] border border-[#382C23] space-y-6 text-center">
            <span className="inline-block px-3.5 py-1 rounded-full bg-[#241B15] border border-[#3E3024] text-[#C6A66B] text-xs font-bold tracking-wider uppercase">
              NOT JUST ONE-TIME DESIGN
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#FAF7F2] leading-tight break-keep">
              내 브랜드의 변화에 맞춰 <br />
              <span className="text-[#D6C6A8]">
                직접 바꿀 수 있는 힘을 기릅니다
              </span>
            </h2>
            <div className="max-w-2xl mx-auto space-y-4 text-sm sm:text-base text-[#B8A89A] leading-relaxed break-keep">
              <p>
                새로운 수업을 열 때, 서비스를 추가할 때, 소개 문구와 대표 사진을 바꾸고 싶을 때. 매번 제작을 맡기지 않아도 내가 필요한 부분을 직접 수정할 수 있도록 배웁니다.
              </p>
              <p className="text-[#FAF7F2] font-semibold">
                디자인 경험이 없어도 템플릿을 출발점으로 삼아 내 브랜드에 어울리는 화면을 만들어봅니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          [12. 혜택 자료 — CLASS KIT]
         ═══════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 px-4 sm:px-6 border-b border-[#221C18]">
        <div className="max-w-5xl mx-auto space-y-10">
          <div className="text-center space-y-3">
            <span className="text-xs font-bold tracking-widest text-[#C6A66B] uppercase block">
              CLASS KIT
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#FAF7F2] leading-tight break-keep">
              빠르게 만들고, 계속 활용하도록 <br />
              <span className="text-[#D6C6A8]">
                실전 제작 자료를 함께 드립니다
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {BLOG_CLASS_KITS.map((kit) => (
              <div
                key={kit.code}
                className="p-6 rounded-2xl bg-[#161210] border border-[#2F251E] space-y-2.5"
              >
                <span className="inline-block px-2.5 py-0.5 rounded bg-[#C6A66B]/15 border border-[#C6A66B]/40 text-xs font-extrabold text-[#C6A66B]">
                  {kit.code}
                </span>
                <h3 className="text-lg font-extrabold text-[#FAF7F2] break-keep">
                  {kit.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#A8988B] leading-relaxed break-keep">
                  {kit.description}
                </p>
              </div>
            ))}
          </div>

          <div className="p-5 sm:p-6 rounded-2xl bg-[#181310] border border-[#342921] text-center space-y-2">
            <span className="text-xs font-bold text-[#C6A66B] uppercase tracking-wider block">
              HOW TO USE CLASS KIT
            </span>
            <p className="text-xs sm:text-sm md:text-base font-bold text-[#FAF7F2] break-keep">
              템플릿 선택 → 사진·문구·색상 수정 → 블로그 적용 → 위젯·링크 점검
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          [13. 실제 제작 사례 — REAL EXPERIENCE]
         ═══════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 px-4 sm:px-6 border-b border-[#221C18] bg-[#120E0C]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 space-y-3">
            <span className="text-xs font-bold tracking-widest text-[#C6A66B] uppercase block">
              REAL EXPERIENCE
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#FAF7F2] leading-tight break-keep">
              메인 이미지와 배너가 연결되면 <br />
              <span className="text-[#D6C6A8]">
                블로그의 첫인상이 달라집니다
              </span>
            </h2>
            <p className="text-xs sm:text-sm text-[#A8988B] break-keep">
              실제 강사 제작 사례를 기준으로 완성될 화면 디테일을 미리 확인해보세요.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {BLOG_REAL_CASES.map((item) => {
              const slot = BLOG_WEBSITE_IMAGES[item.imageSlotKey];
              const fallbackType = realCaseFallbackMap[item.imageSlotKey];
              return (
                <div
                  key={item.number}
                  className="p-5 rounded-2xl bg-[#161210] border border-[#2E241E] flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-1.5">
                    <span className="text-xs font-extrabold text-[#C6A66B]">
                      CASE {item.number}
                    </span>
                    <h3 className="text-base font-extrabold text-[#FAF7F2] break-keep">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#A8988B] leading-relaxed break-keep">
                      {item.description}
                    </p>
                  </div>

                  <BlogWebsiteReplaceableImage
                    slot={slot}
                    fallbackType={fallbackType}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          [14. 후속 활용 — FIRST RELEASE]
         ═══════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 px-4 sm:px-6 border-b border-[#221C18]">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span className="inline-block px-3.5 py-1 rounded-full bg-[#1F1915] border border-[#362B24] text-[#C6A66B] text-xs font-bold tracking-wider uppercase">
            GROWING DIGITAL SPACE
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#FAF7F2] leading-tight break-keep">
            한 번 만들고 끝나는 디자인이 아니라, <br />
            <span className="text-[#D6C6A8]">
              내 비즈니스와 함께 바뀌는 공간
            </span>
          </h2>
          <p className="text-sm sm:text-base text-[#B8A89A] max-w-2xl mx-auto leading-relaxed break-keep">
            새로운 상품이 생기면 배너를 바꾸고, 강의가 열리면 신청 링크를 연결하고, 브랜드 방향이 달라지면 문구와 이미지를 수정합니다. 수업에서 만든 원본을 활용해 필요한 순간 직접 업데이트해보세요.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          [15. 추천 대상 — RECOMMENDED FOR]
         ═══════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 px-4 sm:px-6 border-b border-[#221C18] bg-[#120E0C]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 space-y-3">
            <span className="text-xs font-bold tracking-widest text-[#C6A66B] uppercase block">
              RECOMMENDED FOR
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#FAF7F2] leading-tight break-keep">
              이런 분이라면 함께하세요
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {BLOG_RECOMMENDED_FOR.map((text, idx) => (
              <div
                key={idx}
                className="p-4 sm:p-5 rounded-2xl bg-[#17120F] border border-[#2D231C] flex items-start gap-3"
              >
                <span className="w-6 h-6 rounded-full bg-[#C6A66B]/20 border border-[#C6A66B]/50 text-[#C6A66B] flex items-center justify-center text-xs font-extrabold shrink-0 mt-0.5">
                  ✓
                </span>
                <span className="text-xs sm:text-sm text-[#FAF7F2] font-semibold leading-relaxed break-keep">
                  {text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          [16. 비즈니스 활용 — BUSINESS EXPANSION]
         ═══════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 px-4 sm:px-6 border-b border-[#221C18]">
        <div className="max-w-4xl mx-auto space-y-10">
          <div className="text-center space-y-3">
            <span className="text-xs font-bold tracking-widest text-[#C6A66B] uppercase block">
              VISITOR JOURNEY & EXPANSION
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#FAF7F2] leading-tight break-keep">
              내 전문성이 보이고, <br />
              <span className="text-[#D6C6A8]">
                필요한 정보로 자연스럽게 이어지도록
              </span>
            </h2>
          </div>

          {/* 방문자 질문 vs 블로그 안내 표 */}
          <div className="rounded-2xl bg-[#161210] border border-[#2E241E] overflow-hidden">
            <div className="grid grid-cols-1 divide-y divide-[#261E18]">
              {BLOG_EXPANSION_STEPS.map((row) => (
                <div
                  key={row.step}
                  className="p-5 sm:p-6 grid grid-cols-1 md:grid-cols-12 gap-3 items-center hover:bg-[#1C1612] transition-colors"
                >
                  <div className="md:col-span-5 space-y-1">
                    <span className="text-[10px] font-bold text-[#C6A66B] tracking-wider uppercase block">
                      STEP {row.step} · 방문자의 질문
                    </span>
                    <strong className="text-sm sm:text-base font-bold text-[#FAF7F2] break-keep block">
                      {row.question}
                    </strong>
                  </div>
                  <div className="md:col-span-7 space-y-1 md:border-l md:border-[#2C221B] md:pl-6">
                    <span className="text-[10px] font-bold text-[#D6C6A8] tracking-wider uppercase block">
                      블로그에서 안내할 내용
                    </span>
                    <h4 className="text-xs sm:text-sm font-extrabold text-[#C6A66B] break-keep">
                      {row.answer}
                    </h4>
                    <p className="text-xs text-[#A8988B] leading-snug break-keep">
                      {row.guide}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <p className="text-center text-xs sm:text-sm text-[#A8988B]">
            내 비즈니스를 알리는 콘텐츠가 소개와 문의로 이어질 수 있도록 연결합니다.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          [17. 클래스 안내 — CLASS INFO]
         ═══════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 px-4 sm:px-6 border-b border-[#221C18] bg-[#120E0C]">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-3">
            <span className="text-xs font-bold tracking-widest text-[#C6A66B] uppercase block">
              CLASS INFO
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#FAF7F2] leading-tight break-keep">
              수강 안내
            </h2>
          </div>

          <div className="rounded-2xl bg-[#161210] border border-[#2F251E] overflow-hidden">
            <dl className="divide-y divide-[#251D17] text-xs sm:text-sm">
              <div className="grid grid-cols-1 sm:grid-cols-4 p-4 sm:p-5 gap-1 sm:gap-4">
                <dt className="font-bold text-[#C6A66B]">강의명</dt>
                <dd className="sm:col-span-3 font-bold text-[#FAF7F2]">
                  {BLOG_WEBSITE_CLASS_CONFIG.courseTitle}
                </dd>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-4 p-4 sm:p-5 gap-1 sm:gap-4">
                <dt className="font-bold text-[#C6A66B]">부제</dt>
                <dd className="sm:col-span-3 text-[#EDE6DC]">
                  {BLOG_WEBSITE_CLASS_CONFIG.courseSubtitle}
                </dd>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-4 p-4 sm:p-5 gap-1 sm:gap-4">
                <dt className="font-bold text-[#C6A66B]">진행 방식</dt>
                <dd className="sm:col-span-3 text-[#EDE6DC]">
                  {BLOG_WEBSITE_CLASS_CONFIG.format}
                </dd>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-4 p-4 sm:p-5 gap-1 sm:gap-4">
                <dt className="font-bold text-[#C6A66B]">시간</dt>
                <dd className="sm:col-span-3 text-[#EDE6DC]">
                  {BLOG_WEBSITE_CLASS_CONFIG.duration}
                </dd>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-4 p-4 sm:p-5 gap-1 sm:gap-4">
                <dt className="font-bold text-[#C6A66B]">구성</dt>
                <dd className="sm:col-span-3 text-[#EDE6DC]">
                  {BLOG_WEBSITE_CLASS_CONFIG.curriculumStructure}
                </dd>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-4 p-4 sm:p-5 gap-1 sm:gap-4">
                <dt className="font-bold text-[#C6A66B]">일정</dt>
                <dd className="sm:col-span-3 font-semibold text-[#D6C6A8]">
                  {BLOG_WEBSITE_CLASS_CONFIG.schedule}
                </dd>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-4 p-4 sm:p-5 gap-1 sm:gap-4">
                <dt className="font-bold text-[#C6A66B]">난이도</dt>
                <dd className="sm:col-span-3 text-[#EDE6DC]">
                  {BLOG_WEBSITE_CLASS_CONFIG.difficulty}
                </dd>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-4 p-4 sm:p-5 gap-1 sm:gap-4">
                <dt className="font-bold text-[#C6A66B]">실습 대상</dt>
                <dd className="sm:col-span-3 font-semibold text-[#C6A66B]">
                  {BLOG_WEBSITE_CLASS_CONFIG.practiceTarget}
                </dd>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-4 p-4 sm:p-5 gap-1 sm:gap-4">
                <dt className="font-bold text-[#C6A66B]">결과물</dt>
                <dd className="sm:col-span-3 text-[#EDE6DC]">
                  {BLOG_WEBSITE_CLASS_CONFIG.goalSummary}
                </dd>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-4 p-4 sm:p-5 gap-1 sm:gap-4">
                <dt className="font-bold text-[#C6A66B]">제공 자료</dt>
                <dd className="sm:col-span-3 text-[#EDE6DC]">
                  {BLOG_WEBSITE_CLASS_CONFIG.materialsSummary}
                </dd>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-4 p-4 sm:p-5 gap-1 sm:gap-4">
                <dt className="font-bold text-[#C6A66B]">준비물</dt>
                <dd className="sm:col-span-3 text-[#EDE6DC]">
                  {BLOG_WEBSITE_CLASS_CONFIG.preparationSummary}
                </dd>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-4 p-4 sm:p-5 gap-1 sm:gap-4">
                <dt className="font-bold text-[#C6A66B]">사전 준비 문구</dt>
                <dd className="sm:col-span-3 text-[#A8988B] leading-relaxed break-keep">
                  {BLOG_WEBSITE_CLASS_CONFIG.preClassNotice}
                </dd>
              </div>
              {BLOG_WEBSITE_CLASS_CONFIG.replayPolicy && (
                <div className="grid grid-cols-1 sm:grid-cols-4 p-4 sm:p-5 gap-1 sm:gap-4">
                  <dt className="font-bold text-[#C6A66B]">다시보기</dt>
                  <dd className="sm:col-span-3 text-[#EDE6DC]">
                    {BLOG_WEBSITE_CLASS_CONFIG.replayPolicy}
                  </dd>
                </div>
              )}
              {BLOG_WEBSITE_CLASS_CONFIG.questionSupportPolicy && (
                <div className="grid grid-cols-1 sm:grid-cols-4 p-4 sm:p-5 gap-1 sm:gap-4">
                  <dt className="font-bold text-[#C6A66B]">질문 지원</dt>
                  <dd className="sm:col-span-3 text-[#EDE6DC]">
                    {BLOG_WEBSITE_CLASS_CONFIG.questionSupportPolicy}
                  </dd>
                </div>
              )}
              <div className="grid grid-cols-1 sm:grid-cols-4 p-4 sm:p-5 gap-1 sm:gap-4">
                <dt className="font-bold text-[#C6A66B]">환불 기준</dt>
                <dd className="sm:col-span-3 text-[#A8988B]">
                  자명스쿨{" "}
                  <Link
                    href={BLOG_WEBSITE_CLASS_CONFIG.termsUrl}
                    className="text-[#D6C6A8] underline underline-offset-4 hover:text-[#C6A66B]"
                  >
                    공통 취소·환불 규정
                  </Link>{" "}
                  적용
                </dd>
              </div>
            </dl>
          </div>

          {/* 수강 후 안내: 자명스쿨 커뮤니티 초대 */}
          <div className="p-6 rounded-2xl bg-gradient-to-r from-[#1C1612] via-[#231B15] to-[#1C1612] border border-[#3E3024] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-xs font-extrabold text-[#C6A66B] block">
                수강 후 안내 · 자명스쿨 커뮤니티 초대
              </span>
              <p className="text-xs sm:text-sm text-[#FAF7F2] leading-relaxed break-keep">
                {BLOG_WEBSITE_CLASS_CONFIG.communityInviteText}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          [18. 자주 묻는 질문 — FAQ 8문항]
         ═══════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 px-4 sm:px-6 bg-[#F9F6F0] text-[#2E2723] border-b border-[#E8DFD3]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 space-y-3">
            <span className="text-xs font-bold tracking-widest text-[#8E6D38] uppercase block">
              FAQ
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#2E2723] leading-tight break-keep">
              자주 묻는 질문
            </h2>
          </div>

          <BlogWebsiteFaqAccordion items={BLOG_FAQS} />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          [19. 마지막 신청 영역]
         ═══════════════════════════════════════════════ */}
      <section
        id="apply"
        className="py-20 md:py-28 px-4 sm:px-6 bg-gradient-to-b from-[#120E0C] to-[#0D0B0A]"
      >
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="space-y-3">
            <span className="text-xs font-bold tracking-widest text-[#C6A66B] uppercase block">
              YOUR BLOG, YOUR BRAND
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#FAF7F2] leading-tight break-keep">
              내 비즈니스에 어울리는 블로그, <br />
              <span className="text-[#D6C6A8]">
                이제 직접 만들어보세요.
              </span>
            </h2>
            <p className="text-sm sm:text-base text-[#A8988B] leading-relaxed break-keep max-w-xl mx-auto">
              전문성이 보이는 메인 이미지, 필요한 정보로 이어지는 배너, 내 브랜드의 분위기를 담은 디자인. 하루 3~4시간, 방문자에게 보여주고 싶은 나만의 공간을 완성합니다.
            </p>
          </div>

          {/* 수업을 마치면 남는 4가지 */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#17120F] border border-[#352A21] text-left space-y-5">
            <span className="text-xs font-extrabold text-[#C6A66B] block">
              수업을 마치면 남는 4가지
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {BLOG_FINAL_COMPLETION_ITEMS.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-[#120E0C] border border-[#2B221C] flex items-center gap-2.5"
                >
                  <span className="w-5 h-5 rounded-full bg-[#C6A66B]/20 text-[#C6A66B] flex items-center justify-center text-xs font-extrabold shrink-0">
                    ✓
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-[#FAF7F2] break-keep">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <BlogWebsiteCtaButton
                courseId={BLOG_WEBSITE_CLASS_CONFIG.id}
                courseTitle={BLOG_WEBSITE_CLASS_CONFIG.courseTitle}
                status={BLOG_WEBSITE_CLASS_CONFIG.status}
                applicationUrl={BLOG_WEBSITE_CLASS_CONFIG.applicationUrl}
                notificationUrl={BLOG_WEBSITE_CLASS_CONFIG.notificationUrl}
                ctaOpenText={BLOG_WEBSITE_CLASS_CONFIG.ctaOpenText}
                ctaScheduledText={BLOG_WEBSITE_CLASS_CONFIG.ctaScheduledText}
                variant="final"
              />
            </div>
          </div>

          {/* 마무리 문구 */}
          <div className="space-y-1 pt-2">
            <p className="text-sm sm:text-base font-bold text-[#C6A66B]">
              작은 배움, 하나의 완성.
            </p>
            <p className="text-xs sm:text-sm text-[#A8988B]">
              이번에는 당신의 블로그가 브랜드의 얼굴이 됩니다.
            </p>
          </div>
        </div>
      </section>

      {/* 모바일 하단 고정 신청 바 */}
      <div className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-[#14100D]/95 backdrop-blur-md border-t border-[#322720] px-4 py-3 flex items-center justify-between gap-3">
        <div className="min-w-0">
          <span className="text-[10px] text-[#C6A66B] font-bold block truncate">
            {BLOG_WEBSITE_CLASS_CONFIG.schedule}
          </span>
          <strong className="text-xs text-[#FAF7F2] font-extrabold block truncate">
            {BLOG_WEBSITE_CLASS_CONFIG.courseTitle}
          </strong>
        </div>
        <BlogWebsiteCtaButton
          courseId={BLOG_WEBSITE_CLASS_CONFIG.id}
          courseTitle={BLOG_WEBSITE_CLASS_CONFIG.courseTitle}
          status={BLOG_WEBSITE_CLASS_CONFIG.status}
          applicationUrl={BLOG_WEBSITE_CLASS_CONFIG.applicationUrl}
          notificationUrl={BLOG_WEBSITE_CLASS_CONFIG.notificationUrl}
          ctaOpenText={BLOG_WEBSITE_CLASS_CONFIG.ctaOpenText}
          ctaScheduledText={BLOG_WEBSITE_CLASS_CONFIG.ctaScheduledText}
          variant="mobile-bar"
        />
      </div>
    </main>
  );
}

