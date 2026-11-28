import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import CourseRefundPolicySection from "@/components/CourseRefundPolicySection";

export const metadata: Metadata = {
  title: "AI 감성아트·디지털 전시회 제작 | 마음을 예술로 표현하는 원데이 클래스 · 자명스쿨",
  description:
    "나의 감정과 내면의 이야기를 AI 감성아트로 표현하고 작품 시리즈, 작가노트, 온라인 디지털 전시관을 제작하는 자명스쿨 감성 창작 원데이 클래스입니다.",
  keywords: [
    "AI 감성아트",
    "디지털 전시회",
    "AI 그림",
    "온라인 갤러리",
    "감정 표현",
    "감성 창작",
    "자명스쿨",
    "AI 원데이 클래스",
  ],
  alternates: {
    canonical: "https://www.jmschool.kr/digital-art-exhibition",
  },
  openGraph: {
    title: "AI 감성아트·디지털 전시회 제작 | 자명스쿨 원데이 클래스",
    description:
      "내면의 풍경을 예술로, 나만의 세계를 하나의 전시회로. 감성아트 기획부터 AI 이미지 제작, 작품 시리즈 구성, 작가노트 작성, 온라인 디지털 전시관 제작까지 배웁니다.",
    url: "https://www.jmschool.kr/digital-art-exhibition",
    siteName: "자명스쿨",
    locale: "ko_KR",
    type: "website",
  },
};

// ─────────────────────────────────────────────────────────────
// [클래스 기본 설정 데이터]
// ─────────────────────────────────────────────────────────────
const CLASS_CONFIG = {
  category: "AI DIGITAL ART EXHIBITION · ONE DAY CLASS",
  badge: "자명스쿨 감성 창작 원데이",
  titleMain: "AI 감성아트·",
  titleSub: "디지털 전시회",
  subtitle: "내면의 풍경을 예술로, 나만의 세계를 하나의 전시회로",
  coreCopy: "“내 안에 머물던 감정이 하나의 작품이 되고, 나의 이야기가 하나의 전시회가 됩니다.”",
  description:
    "말로는 다 표현하기 어려웠던 감정, 오래 기억하고 싶은 순간, 마음속에 그려왔던 나만의 세계. AI를 활용하여 자신의 감정과 생각을 예술작품으로 표현하고, 작품에 담긴 의미와 이야기를 하나의 전시로 완성해 보세요. 감성아트 기획부터 AI 이미지 제작, 작품 시리즈 구성, 작가노트 작성, 온라인 디지털 전시관 제작까지 경험하는 실전 창작 클래스입니다.",
  meta: {
    format: "온라인 실습 원데이",
    duration: "세부 시간 추후 확정",
    schedule: "준비 중",
    price: "미정",
    prerequisite: "입문 가능 (미술 경험 무관)",
  },
  tags: ["AI감성아트", "디지털전시", "감정표현", "창작전시", "온라인갤러리"],
  ctaText: "개강 알림 신청",
};

export default function DigitalArtExhibitionPage() {
  return (
    <main className="min-h-screen bg-[#0D0B0A] text-[#EDE6DC] selection:bg-[#C6A66B]/30 selection:text-white font-sans overflow-x-hidden pb-24 md:pb-0">
      {/* ───────────────────────────────────────────────
          공통 상단 서브 내비게이션
         ─────────────────────────────────────────────── */}
      <nav className="sticky top-0 z-40 backdrop-blur-md bg-[#0D0B0A]/90 border-b border-[#2E2723] py-3.5 transition-all">
        <div className="site-container flex items-center justify-between gap-2">
          <Link
            href="/oneday"
            className="inline-flex items-center gap-1.5 sm:gap-2 text-xs md:text-sm text-[#A8988B] hover:text-[#C6A66B] transition-colors group"
          >
            <span className="group-hover:-translate-x-1 transition-transform">←</span>
            <span>원데이 클래스 목록</span>
          </Link>
          <div className="text-[11px] md:text-xs tracking-wider text-[#C6A66B] font-medium hidden sm:block">
            작은 배움, 하나의 완성.
          </div>
          <a
            href="#apply"
            className="px-3.5 sm:px-4 py-1.5 rounded-full bg-[#C6A66B] hover:bg-[#D6C6A8] text-[#1A1410] text-xs font-bold transition-colors whitespace-nowrap"
          >
            {CLASS_CONFIG.ctaText}
          </a>
        </div>
      </nav>

      {/* ═══════════════════════════════════════════════
          SECTION 01. HERO (상단 소개 · 디지털 아트 비주얼)
         ═══════════════════════════════════════════════ */}
      <section className="w-full bg-[#F9F6F0] text-[#2E2723] border-b border-[#E8DFD3] pt-8 pb-12 md:py-16">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* 좌측 정보 영역 */}
            <div className="lg:col-span-7 space-y-6">
              {/* 카테고리 뱃지 */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs md:text-sm font-bold tracking-wider text-[#8E6D38] uppercase">
                  {CLASS_CONFIG.category}
                </span>
                <span className="text-[#C6A66B]">·</span>
                <span className="text-xs text-[#7C6656] font-medium">
                  {CLASS_CONFIG.badge}
                </span>
              </div>

              {/* 메인 타이틀 & 부제 */}
              <div>
                <p className="text-xs sm:text-sm font-bold text-[#8E6D38] mb-1.5 tracking-tight">
                  # {CLASS_CONFIG.subtitle}
                </p>
                <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold tracking-tight text-[#2E2723] leading-tight break-keep">
                  {CLASS_CONFIG.titleMain} <br className="hidden sm:inline" />
                  <span className="text-[#8E6D38]">{CLASS_CONFIG.titleSub}</span>
                </h1>
              </div>

              {/* 핵심 감성 카피 */}
              <blockquote className="border-l-4 border-[#C6A66B] pl-4 py-1 italic font-serif text-base sm:text-lg text-[#5C4D43] bg-[#EFE9DF]/50 rounded-r-lg">
                {CLASS_CONFIG.coreCopy}
              </blockquote>

              {/* 상세 소개 본문 */}
              <p className="text-[#5C4D43] leading-relaxed text-sm sm:text-base break-keep">
                {CLASS_CONFIG.description}
              </p>

              {/* 6대 핵심 하이라이트 뱃지 리스트 */}
              <div className="pt-2">
                <p className="text-xs font-bold uppercase tracking-wider text-[#8E6D38] mb-3">
                  KEY HIGHLIGHTS
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-[#4A3E37]">
                  {[
                    "감정과 내면의 이야기를 예술로 표현",
                    "나만의 작품 콘셉트 및 세계관 기획",
                    "AI 감성아트 구조화 프롬프트 활용",
                    "일관된 스타일의 작품 시리즈 제작",
                    "작품 제목 및 작가노트 작성",
                    "나만의 온라인 디지털 전시관 구성",
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 bg-[#EFE9DF] px-3 py-2 rounded-lg border border-[#E2D8CA]">
                      <span className="text-[#8E6D38] font-bold">✓</span>
                      <span className="font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 메타 카드 (형태 / 시간 / 일정 / 대상) */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2">
                <div className="bg-[#EFE9DF] p-3 rounded-xl border border-[#E2D8CA] text-center">
                  <span className="block text-[11px] text-[#8C7A6B]">수업 형태</span>
                  <span className="text-xs sm:text-sm font-bold text-[#2E2723] mt-0.5 block">
                    {CLASS_CONFIG.meta.format}
                  </span>
                </div>
                <div className="bg-[#EFE9DF] p-3 rounded-xl border border-[#E2D8CA] text-center">
                  <span className="block text-[11px] text-[#8C7A6B]">소요 시간</span>
                  <span className="text-xs sm:text-sm font-bold text-[#2E2723] mt-0.5 block">
                    {CLASS_CONFIG.meta.duration}
                  </span>
                </div>
                <div className="bg-[#EFE9DF] p-3 rounded-xl border border-[#E2D8CA] text-center">
                  <span className="block text-[11px] text-[#8C7A6B]">개강 일정</span>
                  <span className="text-xs sm:text-sm font-bold text-[#8E6D38] mt-0.5 block">
                    {CLASS_CONFIG.meta.schedule}
                  </span>
                </div>
                <div className="bg-[#EFE9DF] p-3 rounded-xl border border-[#E2D8CA] text-center">
                  <span className="block text-[11px] text-[#8C7A6B]">참여 대상</span>
                  <span className="text-xs sm:text-sm font-bold text-[#2E2723] mt-0.5 block">
                    {CLASS_CONFIG.meta.prerequisite}
                  </span>
                </div>
              </div>

              {/* 메인 신청 CTA 버튼 */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a
                  href="#apply"
                  className="px-6 py-3.5 rounded-xl bg-[#8E6D38] hover:bg-[#72572D] text-white text-center font-bold text-sm sm:text-base shadow-sm transition-all flex items-center justify-center gap-2 group"
                >
                  <span>{CLASS_CONFIG.ctaText}</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
                <span className="text-xs text-[#8C7A6B] text-center sm:text-left">
                  일정 확정 시 가장 먼저 알림 문자를 발송해 드립니다.
                </span>
              </div>
            </div>

            {/* 우측 대표 이미지 슬롯 (16:9 디지털 아트 전시관 슬롯) */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-[460px] bg-[#14100E] border-2 border-[#8E6D38]/30 rounded-2xl p-4 shadow-2xl text-left">
                {/* 상단 갤러리 헤더 바 */}
                <div className="flex items-center justify-between pb-3 border-b border-[#2A211B] text-xs text-[#A8988B]">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#C6A66B]"></span>
                    <span className="font-mono text-[11px] text-[#E0A96D]">DIGITAL GALLERY EXHIBITION</span>
                  </div>
                  <span className="text-[10px] bg-[#2A211B] text-[#EDE6DC] px-2 py-0.5 rounded">16:9 VIRTUAL HALL</span>
                </div>

                {/* 16:9 전시관 프리뷰 슬롯 (고요한 창조 콘셉트) */}
                <div className="relative w-full aspect-video mt-3 rounded-xl overflow-hidden bg-gradient-to-br from-[#1C1512] via-[#2A1F1A] to-[#120E0C] border border-[#3A2D25] flex flex-col items-center justify-center text-center p-6 group">
                  <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#C6A66B_1px,transparent_1px)] [background-size:16px_16px]"></div>

                  {/* 미술관 액자 프레임 시각화 */}
                  <div className="relative z-10 w-28 h-16 rounded border-2 border-[#C6A66B]/50 bg-white/5 flex items-center justify-center mb-3 shadow-[0_0_20px_rgba(198,166,107,0.2)]">
                    <span className="text-xl">🖼️</span>
                  </div>

                  <p className="relative z-10 text-xs font-semibold text-[#EDE6DC] mb-1">
                    빛과 내면의 조화 · 나의 첫 번째 온라인 갤러리
                  </p>
                  <p className="relative z-10 text-[11px] text-[#A8988B]">
                    Quiet Creation · Emotional Art Exhibition
                  </p>

                  <div className="mt-3 px-3 py-1 rounded-full bg-[#0D0B0A]/80 border border-[#C6A66B]/40 text-[10px] text-[#C6A66B]">
                    ✦ 추후 실제 전시관 메인 이미지 슬롯
                  </div>
                </div>

                {/* 하단 큐레이션 정보 */}
                <div className="mt-4 pt-3 border-t border-[#2A211B] flex items-center justify-between text-[11px] text-[#A8988B]">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#8E6D38]/30 flex items-center justify-center text-[#C6A66B] font-serif">✦</span>
                    <span className="text-[#EDE6DC] font-medium">자명스쿨 디지털 아트 랩</span>
                  </div>
                  <span className="text-[10px] text-[#7C6656]">작가노트 & 전시 기획</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 02. RESULT PREVIEW (완성 결과물 예시 3종)
         ═══════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 border-b border-[#2A211B] bg-[#0D0B0A]">
        <div className="site-container">
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <span className="text-xs font-bold tracking-widest text-[#C6A66B] uppercase">
              RESULT PREVIEW
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#EDE6DC] mt-2 mb-4 break-keep">
              내 마음에서 시작된 이야기가 하나의 전시회가 됩니다.
            </h2>
            <p className="text-sm md:text-base text-[#A8988B] break-keep">
              AI로 만든 작품들을 하나의 주제와 이야기로 연결하여 자신만의 감성이 담긴 디지털 전시회를 완성합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* 01. 내면의 풍경 */}
            <div className="bg-[#14100E] border border-[#2A211B] rounded-2xl overflow-hidden hover:border-[#C6A66B]/50 transition-all flex flex-col">
              {/* 16:9 미리보기 영역 (추후 실제 작품 이미지 교체 슬롯) */}
              <div className="relative w-full aspect-video bg-gradient-to-tr from-[#241A14] via-[#38261A] to-[#1C1410] border-b border-[#2A211B] flex flex-col items-center justify-center p-4 text-center">
                <span className="text-3xl mb-2">🌿</span>
                <span className="text-xs font-bold text-[#E0A96D] tracking-wider">01. INNER LANDSCAPE</span>
                <span className="text-[11px] text-[#A8988B] mt-1">빛과 자연의 상징으로 그리는 마음</span>
                <div className="mt-3 text-[10px] bg-[#0D0B0A]/80 text-[#C6A66B] px-2.5 py-0.5 rounded-full border border-[#C6A66B]/30">
                  [ 16:9 감성아트 결과물 슬롯 ]
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-[#EDE6DC] mb-2">
                    01. 내면의 풍경
                  </h3>
                  <p className="text-xs sm:text-sm text-[#A8988B] leading-relaxed break-keep">
                    말로 표현하기 어려웠던 감정과 마음의 움직임을 색채, 빛, 자연, 상징으로 표현하는 감성아트 작품입니다.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#2A211B] flex flex-wrap gap-1.5 text-[11px] text-[#C6A66B]">
                  <span>#감정표현</span>
                  <span>#내면탐색</span>
                  <span>#감성아트</span>
                </div>
              </div>
            </div>

            {/* 02. 나만의 작품 세계 */}
            <div className="bg-[#14100E] border border-[#2A211B] rounded-2xl overflow-hidden hover:border-[#C6A66B]/50 transition-all flex flex-col">
              {/* 16:9 미리보기 영역 */}
              <div className="relative w-full aspect-video bg-gradient-to-tr from-[#1E1929] via-[#2A213D] to-[#120F1C] border-b border-[#2A211B] flex flex-col items-center justify-center p-4 text-center">
                <span className="text-3xl mb-2">🎨</span>
                <span className="text-xs font-bold text-[#BFA4E6] tracking-wider">02. MY ART WORLD</span>
                <span className="text-[11px] text-[#A8988B] mt-1">일관된 스타일과 서사의 시리즈</span>
                <div className="mt-3 text-[10px] bg-[#0D0B0A]/80 text-[#BFA4E6] px-2.5 py-0.5 rounded-full border border-[#BFA4E6]/30">
                  [ 16:9 시리즈 컬렉션 슬롯 ]
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-[#EDE6DC] mb-2">
                    02. 나만의 작품 세계
                  </h3>
                  <p className="text-xs sm:text-sm text-[#A8988B] leading-relaxed break-keep">
                    하나의 주제와 스타일을 중심으로 여러 작품을 연결하고 자신만의 예술적 세계관을 구성합니다.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#2A211B] flex flex-wrap gap-1.5 text-[11px] text-[#C6A66B]">
                  <span>#작품시리즈</span>
                  <span>#예술적세계관</span>
                  <span>#AI아트</span>
                </div>
              </div>
            </div>

            {/* 03. 나의 첫 디지털 전시회 */}
            <div className="bg-[#14100E] border border-[#2A211B] rounded-2xl overflow-hidden hover:border-[#C6A66B]/50 transition-all flex flex-col">
              {/* 16:9 미리보기 영역 */}
              <div className="relative w-full aspect-video bg-gradient-to-tr from-[#16211C] via-[#20332B] to-[#0E1713] border-b border-[#2A211B] flex flex-col items-center justify-center p-4 text-center">
                <span className="text-3xl mb-2">🏛️</span>
                <span className="text-xs font-bold text-[#89C7A4] tracking-wider">03. MY FIRST EXHIBITION</span>
                <span className="text-[11px] text-[#A8988B] mt-1">작품과 작가노트가 있는 온라인 갤러리</span>
                <div className="mt-3 text-[10px] bg-[#0D0B0A]/80 text-[#89C7A4] px-2.5 py-0.5 rounded-full border border-[#89C7A4]/30">
                  [ 16:9 온라인 전시관 슬롯 ]
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-[#EDE6DC] mb-2">
                    03. 나의 첫 디지털 전시회
                  </h3>
                  <p className="text-xs sm:text-sm text-[#A8988B] leading-relaxed break-keep">
                    직접 제작한 작품과 작가노트를 하나의 공간에 배치하고 다른 사람과 공유할 수 있는 온라인 전시관으로 완성합니다.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#2A211B] flex flex-wrap gap-1.5 text-[11px] text-[#C6A66B]">
                  <span>#디지털전시</span>
                  <span>#온라인갤러리</span>
                  <span>#포트폴리오</span>
                </div>
              </div>
            </div>
          </div>

          <p className="text-center text-xs text-[#7C6656] mt-8">
            ※ 결과물 이미지는 교육 결과물의 제작 예시이며 실제 수강생 작품으로 오인되지 않도록 표시합니다.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 03. WHY EMOTIONAL ART (왜 감성아트인가)
         ═══════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 border-b border-[#2A211B] bg-[#120E0C]">
        <div className="site-container">
          <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16 space-y-4">
            <span className="text-xs font-bold tracking-widest text-[#C6A66B] uppercase">
              WHY EMOTIONAL ART
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#EDE6DC] break-keep">
              마음속에 있는 이야기를 어떻게 표현해야 할지 고민하셨나요?
            </h2>
            <div className="space-y-2 text-sm sm:text-base text-[#A8988B] font-light leading-relaxed break-keep pt-2">
              <p>
                우리는 살아가면서 수많은 감정과 경험을 마주하지만, 그 모든 것을 언어로 표현하기는 어렵습니다.
              </p>
              <p>
                예술은 말로 설명하기 어려운 내면의 세계를 색채와 이미지, 상징을 통해 표현할 수 있는 하나의 방법입니다.
              </p>
              <p className="text-white/90">
                이제 그림을 전문적으로 배우지 않았더라도 AI를 활용하여 자신만의 감성과 이야기를 작품으로 표현할 수 있습니다.
              </p>
              <p className="text-[#C6A66B] font-medium pt-1">
                중요한 것은 그림을 얼마나 잘 그리느냐가 아니라, 그 작품에 어떤 마음과 이야기를 담느냐입니다.
              </p>
            </div>
          </div>

          {/* 공감 카드 5개 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              "나의 감정과 생각을 작품으로 표현하고 싶다.",
              "그림을 배우지 않아 창작이 어렵게 느껴진다.",
              "AI 이미지를 만들지만 나만의 스타일이 없다.",
              "만들어 놓은 작품을 어떻게 활용해야 할지 모르겠다.",
              "나만의 작품 세계와 전시회를 만들어보고 싶다.",
            ].map((text, idx) => (
              <div
                key={idx}
                className="bg-[#181310] border border-[#2E221B] p-5 rounded-2xl flex flex-col justify-between hover:border-[#C6A66B]/40 transition-colors"
              >
                <span className="text-xs font-bold text-[#C6A66B] font-mono mb-3">
                  0{idx + 1}
                </span>
                <p className="text-sm font-medium text-[#EDE6DC] break-keep leading-snug">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 04. MY ART WORLD (작품 세계관 기획)
         ═══════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 border-b border-[#2A211B] bg-[#0D0B0A]">
        <div className="site-container">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold tracking-widest text-[#C6A66B] uppercase">
              MY ART WORLD
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#EDE6DC] mt-2 mb-4 break-keep">
              좋은 작품은 기술이 아니라 자신만의 이야기에서 시작됩니다.
            </h2>
            <p className="text-sm md:text-base text-[#A8988B] break-keep">
              이미지를 생성하기 전에 내가 무엇을 표현하고 싶은지, 어떤 이야기를 세상과 나누고 싶은지 탐색합니다.
            </p>
          </div>

          {/* 작품 세계관 기획 5대 질문 */}
          <div className="mb-14">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#C6A66B] mb-6 text-center">
              작품 세계관 기획 5대 질문
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {[
                {
                  q: "Q1. 지금 내 마음에 가장 많이 머무는 감정은 무엇인가?",
                  desc: "기쁨, 그리움, 위로, 고요, 희망 등 내면의 감정 발견",
                },
                {
                  q: "Q2. 나는 어떤 이야기를 작품으로 표현하고 싶은가?",
                  desc: "나의 경험, 삶의 변화, 기억, 꿈, 가치관 탐색",
                },
                {
                  q: "Q3. 내 마음을 상징하는 이미지는 무엇인가?",
                  desc: "꽃, 자연, 빛, 공간, 인물 등 상징적 소재 선정",
                },
                {
                  q: "Q4. 나만의 작품 분위기와 스타일은 무엇인가?",
                  desc: "색채, 질감, 화풍, 조명, 화면 구성 등 시각적 방향 설정",
                },
                {
                  q: "Q5. 나의 작품을 통해 어떤 메시지를 전하고 싶은가?",
                  desc: "위로, 자기수용, 새로운 시작, 성장 등 작품의 의미 정립",
                },
              ].map((item, idx) => (
                <div key={idx} className="bg-[#14100E] border border-[#2A211B] p-5 rounded-2xl flex flex-col justify-between">
                  <h4 className="text-xs sm:text-sm font-bold text-[#E0A96D] mb-3 break-keep leading-snug">
                    {item.q}
                  </h4>
                  <p className="text-xs text-[#A8988B] leading-relaxed break-keep">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 작품 콘셉트 예시 3종 */}
          <div className="w-full">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#C6A66B] mb-6 text-center">
              작품 콘셉트 예시 3종
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  concept: "CONCEPT 01",
                  title: "마음의 계절",
                  desc: "내면의 감정과 변화의 순간들을 계절과 자연의 이미지로 표현하는 작품 시리즈",
                },
                {
                  concept: "CONCEPT 02",
                  title: "나를 사랑하는 시간",
                  desc: "자기수용과 자존감, 자신에게 건네는 따뜻한 메시지를 담은 감성아트 시리즈",
                },
                {
                  concept: "CONCEPT 03",
                  title: "내 안에 피어나는 세계",
                  desc: "꿈과 가능성, 새로운 시작과 성장을 상징적인 이미지로 표현하는 작품 시리즈",
                },
              ].map((item, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-[#181310] border border-[#2E221B] text-center">
                  <span className="text-[11px] font-bold text-[#8E6D38] uppercase tracking-wider block mb-1">
                    {item.concept}
                  </span>
                  <h4 className="text-lg font-bold text-[#EDE6DC] mb-3">{item.title}</h4>
                  <p className="text-xs sm:text-sm text-[#A8988B] leading-relaxed break-keep">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 p-5 rounded-2xl border border-[#C6A66B]/30 bg-[#C6A66B]/5 text-center">
              <p className="text-sm sm:text-base font-serif italic text-[#E0A96D]">
                “AI는 이미지를 만들어 주지만, 그 이미지에 어떤 마음을 담을지는 내가 결정합니다.”
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 05. THREE ART STYLES (세 가지 예술적 접근)
         ═══════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 border-b border-[#2A211B] bg-[#120E0C]">
        <div className="site-container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold tracking-widest text-[#C6A66B] uppercase">
              THREE ART STYLES
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#EDE6DC] mt-2 mb-4 break-keep">
              나만의 감성을 표현하는 세 가지 예술적 접근
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* TYPE 01 */}
            <div className="bg-[#181310] border border-[#2E221B] rounded-2xl p-6 flex flex-col justify-between">
              <div>
                {/* 스타일 이미지 슬롯 */}
                <div className="aspect-video w-full rounded-xl bg-gradient-to-tr from-[#241A14] to-[#120E0C] border border-[#3A2D25] flex flex-col items-center justify-center p-3 text-center mb-5">
                  <span className="text-2xl mb-1">✨</span>
                  <span className="text-[10px] text-[#C6A66B]">[ TYPE 01 감정표현 아트 슬롯 ]</span>
                </div>
                <span className="text-xs font-bold text-[#8E6D38] uppercase tracking-wider block mb-1">
                  TYPE 01
                </span>
                <h3 className="text-lg font-bold text-[#EDE6DC] mb-4">감정 표현 아트</h3>
                <ul className="space-y-2 text-xs sm:text-sm text-[#A8988B]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#C6A66B]">▪</span>
                    <span>감정에 어울리는 색채와 형태 선택</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#C6A66B]">▪</span>
                    <span>추상적 이미지와 감정의 연결</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#C6A66B]">▪</span>
                    <span>빛과 질감을 활용한 내면 표현</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#C6A66B]">▪</span>
                    <span>개인의 감정 이야기를 작품으로 구성</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* TYPE 02 */}
            <div className="bg-[#181310] border border-[#2E221B] rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <div className="aspect-video w-full rounded-xl bg-gradient-to-tr from-[#1E1929] to-[#120F1C] border border-[#3A2D25] flex flex-col items-center justify-center p-3 text-center mb-5">
                  <span className="text-2xl mb-1">📖</span>
                  <span className="text-[10px] text-[#BFA4E6]">[ TYPE 02 상징스토리 아트 슬롯 ]</span>
                </div>
                <span className="text-xs font-bold text-[#8E6D38] uppercase tracking-wider block mb-1">
                  TYPE 02
                </span>
                <h3 className="text-lg font-bold text-[#EDE6DC] mb-4">상징적 스토리 아트</h3>
                <ul className="space-y-2 text-xs sm:text-sm text-[#A8988B]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#C6A66B]">▪</span>
                    <span>꽃, 자연, 사물 등 상징적 소재 활용</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#C6A66B]">▪</span>
                    <span>경험과 기억을 이미지로 재해석</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#C6A66B]">▪</span>
                    <span>서사가 담긴 감성 일러스트 제작</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#C6A66B]">▪</span>
                    <span>작품에 의미와 메시지 부여</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* TYPE 03 */}
            <div className="bg-[#181310] border border-[#2E221B] rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <div className="aspect-video w-full rounded-xl bg-gradient-to-tr from-[#16211C] to-[#0E1713] border border-[#3A2D25] flex flex-col items-center justify-center p-3 text-center mb-5">
                  <span className="text-2xl mb-1">🏛️</span>
                  <span className="text-[10px] text-[#89C7A4]">[ TYPE 03 감성 파인아트 슬롯 ]</span>
                </div>
                <span className="text-xs font-bold text-[#8E6D38] uppercase tracking-wider block mb-1">
                  TYPE 03
                </span>
                <h3 className="text-lg font-bold text-[#EDE6DC] mb-4">감성 파인아트</h3>
                <ul className="space-y-2 text-xs sm:text-sm text-[#A8988B]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#C6A66B]">▪</span>
                    <span>자신만의 예술적 스타일 탐색</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#C6A66B]">▪</span>
                    <span>회화, 수채화, 콜라주, 초현실적 표현</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#C6A66B]">▪</span>
                    <span>작품의 색채와 구도 설계</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#C6A66B]">▪</span>
                    <span>일관된 콘셉트의 작품 컬렉션 제작</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 06. BEFORE & AFTER
         ═══════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 border-b border-[#2A211B] bg-[#0D0B0A]">
        <div className="site-container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold tracking-widest text-[#C6A66B] uppercase">
              TRANSFORMATION
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#EDE6DC] mt-2 mb-4 break-keep">
              AI 이미지를 만드는 사람에서, <br className="hidden sm:inline" />
              자신만의 작품 세계를 창조하는 사람으로
            </h2>
          </div>

          <div className="w-full overflow-hidden rounded-2xl border border-[#2E221B] bg-[#14100E] shadow-xl">
            <div className="grid grid-cols-2 bg-[#1C1512] border-b border-[#2E221B] p-4 text-center text-xs font-bold uppercase tracking-wider">
              <span className="text-[#8C7A6B]">BEFORE</span>
              <span className="text-[#C6A66B]">AFTER</span>
            </div>
            <div className="divide-y divide-[#2E221B]">
              {[
                {
                  before: "AI로 예쁜 이미지를 만드는 데 그친다.",
                  after: "감정과 메시지가 담긴 작품을 기획한다.",
                },
                {
                  before: "작품마다 스타일과 분위기가 다르다.",
                  after: "일관된 콘셉트의 작품 시리즈를 제작한다.",
                },
                {
                  before: "작품에 어떤 이야기를 담아야 할지 모르겠다.",
                  after: "작품 제목과 작가노트로 나만의 이야기를 표현한다.",
                },
                {
                  before: "만든 이미지를 저장하는 것으로 끝난다.",
                  after: "디지털 전시관과 포트폴리오로 연결한다.",
                },
                {
                  before: "다른 사람의 작품을 감상하기만 한다.",
                  after: "나만의 작품 세계를 세상과 공유한다.",
                },
              ].map((row, idx) => (
                <div key={idx} className="grid grid-cols-2 p-4 sm:p-5 text-xs sm:text-sm items-center">
                  <div className="text-[#8C7A6B] pr-3 break-keep flex items-center gap-2">
                    <span className="text-[#7C6656] text-xs">✕</span>
                    <span>{row.before}</span>
                  </div>
                  <div className="text-[#EDE6DC] font-medium pl-3 border-l border-[#2E221B] break-keep flex items-center gap-2">
                    <span className="text-[#C6A66B] text-xs font-bold">✓</span>
                    <span>{row.after}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 07. CREATE YOUR OWN ART (창작 핵심 기술)
         ═══════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 border-b border-[#2A211B] bg-[#120E0C]">
        <div className="site-container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold tracking-widest text-[#C6A66B] uppercase">
              CREATIVE METHOD
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#EDE6DC] mt-2 mb-4 break-keep">
              내면의 감정을 하나의 예술작품으로 표현합니다.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { num: "01", title: "AI 이미지 생성 도구 기본 활용" },
              { num: "02", title: "감정과 작품 메시지 설정" },
              { num: "03", title: "예술적 스타일 및 화풍 탐색" },
              { num: "04", title: "색채·구도·빛·질감 설계" },
              { num: "05", title: "상징적 오브제와 감성 요소 활용" },
              { num: "06", title: "이미지 생성 및 결과물 수정" },
              { num: "07", title: "작품 시리즈의 스타일 일관성 유지" },
              { num: "08", title: "작품 이미지 고해상도 저장 및 활용" },
            ].map((step, idx) => (
              <div
                key={idx}
                className="bg-[#181310] border border-[#2E221B] p-5 rounded-2xl flex items-start gap-3.5 hover:border-[#C6A66B]/40 transition-colors"
              >
                <span className="text-xs font-bold text-[#8E6D38] font-mono shrink-0 mt-0.5">
                  {step.num}
                </span>
                <p className="text-sm font-semibold text-[#EDE6DC] break-keep">
                  {step.title}
                </p>
              </div>
            ))}
          </div>

          <p className="text-center text-xs text-[#7C6656] mt-8">
            * 실제 사용 도구는 수업 준비 과정에서 확정하여 안내합니다.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 08. AI EMOTIONAL ART PROMPT SKILL
         ═══════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 border-b border-[#2A211B] bg-[#0D0B0A]">
        <div className="site-container">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold tracking-widest text-[#C6A66B] uppercase">
              STRUCTURED PROMPT SKILL
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#EDE6DC] mt-2 mb-4 break-keep">
              마음속의 막연한 감정을 구체적인 작품으로 표현할 수 있도록
            </h2>
            <p className="text-sm md:text-base text-[#A8988B] break-keep">
              자명스쿨에서 제공할 예정인 감성아트 구조화 프롬프트 스킬을 활용하여 간단한 감정과 아이디어를 예술적인 이미지 제작 프롬프트로 발전시킵니다.
            </p>
          </div>

          <div className="w-full space-y-6">
            {/* STEP 01 */}
            <div className="p-6 rounded-2xl bg-[#14100E] border border-[#2A211B]">
              <span className="text-xs font-bold text-[#8E6D38] uppercase tracking-wider block mb-2">
                STEP 01. 나의 감정 또는 이야기 입력
              </span>
              <div className="p-4 rounded-xl bg-[#1C1512] border border-[#2E221B] text-sm text-[#E0A96D] italic font-serif">
                “오랜 방황 끝에 나 자신을 다시 발견하는 순간을 표현하고 싶어요.”
              </div>
            </div>

            {/* STEP 02 */}
            <div className="p-6 rounded-2xl bg-[#14100E] border border-[#2A211B]">
              <span className="text-xs font-bold text-[#8E6D38] uppercase tracking-wider block mb-4">
                STEP 02. 감성아트 프롬프트 스킬의 구조화
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs sm:text-sm">
                {[
                  "작품의 핵심 주제",
                  "감정과 전달 메시지",
                  "상징적 소재",
                  "예술적 화풍",
                  "색채 팔레트",
                  "화면 구도",
                  "빛과 분위기",
                  "소재 및 질감",
                  "작품의 일관성을 위한 스타일 기준",
                ].map((item, idx) => (
                  <div key={idx} className="bg-[#1C1512] p-3 rounded-lg border border-[#2E221B] text-[#EDE6DC]">
                    <span className="text-[#C6A66B] mr-2">✦</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* STEP 03 */}
            <div className="p-6 rounded-2xl bg-[#181310] border border-[#C6A66B]/30 text-center">
              <span className="text-xs font-bold text-[#C6A66B] uppercase tracking-wider block mb-2">
                STEP 03. RESULT
              </span>
              <h4 className="text-base sm:text-lg font-bold text-[#EDE6DC] mb-2">
                AI 이미지 생성 도구에 활용할 수 있는 구조화된 작품 제작 프롬프트 완성
              </h4>
              <p className="text-xs text-[#A8988B]">
                복잡한 기술 용어 없이도 일관되고 깊이 있는 예술적 화풍을 도출합니다.
              </p>
            </div>

            <div className="text-center pt-2">
              <p className="text-sm sm:text-base font-serif italic text-[#C6A66B]">
                “마음속의 감정을 나만의 예술적 언어로 바꾸는 방법을 배웁니다.”
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 09. ART COLLECTION (작품 컬렉션)
         ═══════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 border-b border-[#2A211B] bg-[#120E0C]">
        <div className="site-container">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold tracking-widest text-[#C6A66B] uppercase">
              ART COLLECTION
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#EDE6DC] mt-2 mb-4 break-keep">
              한 장의 이미지에서, 하나의 작품 세계로
            </h2>
            <p className="text-sm md:text-base text-[#A8988B] break-keep">
              단순히 개별 이미지를 제작하는 것이 아니라 하나의 주제와 이야기로 연결된 작품 컬렉션을 기획합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* 좌측: 기획 가이드 7개 */}
            <div className="lg:col-span-6 space-y-2.5">
              {[
                "작품 시리즈의 중심 주제 선정",
                "작품별 감정과 메시지 구성",
                "컬러 및 스타일의 일관성 유지",
                "작품 간 이야기의 흐름 설계",
                "작품 제목과 캡션 작성",
                "시리즈 대표 이미지 선정",
                "컬렉션 최종 검수",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-[#181310] border border-[#2E221B]">
                  <span className="w-6 h-6 rounded-full bg-[#8E6D38]/20 text-[#C6A66B] text-xs font-bold flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  <span className="text-xs sm:text-sm text-[#EDE6DC] font-medium">{item}</span>
                </div>
              ))}
            </div>

            {/* 우측: 4개 작품 시리즈 연결 프리뷰 슬롯 */}
            <div className="lg:col-span-6">
              <div className="p-4 rounded-2xl bg-[#14100E] border-2 border-[#8E6D38]/30 shadow-2xl">
                <div className="text-xs text-[#A8988B] mb-3 flex items-center justify-between pb-2 border-b border-[#2A211B]">
                  <span className="font-bold text-[#E0A96D]">4-PIECE SERIES PREVIEW</span>
                  <span className="text-[10px]">시리즈 연결 슬롯</span>
                </div>
                <div className="grid grid-cols-2 gap-3 aspect-square">
                  {[
                    { label: "01. 각성 (Awakening)" },
                    { label: "02. 탐색 (Search)" },
                    { label: "03. 발견 (Discovery)" },
                    { label: "04. 안식 (Peace)" },
                  ].map((art, idx) => (
                    <div key={idx} className="rounded-xl bg-[#1F1814] border border-[#3A2D25] p-3 flex flex-col items-center justify-center text-center relative overflow-hidden group">
                      <span className="text-2xl mb-1">🖼️</span>
                      <span className="text-[11px] font-bold text-[#EDE6DC] mb-1">{art.label}</span>
                      <span className="text-[9px] text-[#A8988B]">[시리즈 작품 슬롯]</span>
                    </div>
                  ))}
                </div>
                <p className="text-[11px] text-center text-[#7C6656] mt-3">
                  ✦ 통일된 스타일과 서사로 완성되는 나만의 아트 컬렉션
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 10. DIGITAL EXHIBITION (디지털 전시관)
         ═══════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 border-b border-[#2A211B] bg-[#0D0B0A]">
        <div className="site-container">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold tracking-widest text-[#C6A66B] uppercase">
              DIGITAL EXHIBITION
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#EDE6DC] mt-2 mb-4 break-keep">
              나의 작품을 위한 첫 번째 디지털 전시관을 만듭니다.
            </h2>
            <p className="text-sm md:text-base text-[#A8988B] break-keep">
              직접 만든 작품에 이야기를 담고 하나의 전시 공간으로 구성하는 방법을 배웁니다.
            </p>
          </div>

          <div className="w-full space-y-8">
            {/* 16:9 디지털 전시관 결과물 프리뷰 슬롯 */}
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-[#1E1815] via-[#2A1F1A] to-[#120E0C] border-2 border-[#8E6D38]/40 shadow-2xl flex flex-col items-center justify-center p-6 text-center">
              <span className="text-4xl mb-2">🏛️</span>
              <h3 className="text-lg sm:text-xl font-bold text-[#EDE6DC] mb-1">
                VIRTUAL ONLINE GALLERY
              </h3>
              <p className="text-xs sm:text-sm text-[#A8988B] max-w-md">
                관람객이 온라인에서 작품을 둘러보고 작가노트를 감상할 수 있는 감성 전시 공간
              </p>
              <div className="mt-4 px-3.5 py-1 rounded-full bg-[#0D0B0A]/80 border border-[#C6A66B]/40 text-[11px] text-[#C6A66B]">
                ✦ 16:9 디지털 전시관 결과물 프리뷰 슬롯
              </div>
            </div>

            {/* 실습 내용 7개 */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#C6A66B] mb-4 text-center sm:text-left">
                실습 내용 7가지
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-2.5">
                {[
                  "01. 전시회의 주제와 제목 기획",
                  "02. 전시 공간 디자인 콘셉트",
                  "03. 작품 선정 및 순서 구성",
                  "04. 작품 제목과 설명문 작성",
                  "05. 나만의 작가노트 작성",
                  "06. 온라인 디지털 갤러리 제작",
                  "07. 전시관 공유 및 공개 방법",
                ].map((item, idx) => (
                  <div key={idx} className="bg-[#14100E] border border-[#2A211B] p-3 rounded-xl text-center">
                    <span className="text-xs text-[#EDE6DC] font-medium block leading-snug">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* 실습 가이드 안내 */}
            <div className="p-6 rounded-2xl bg-[#181310] border border-[#2E221B] text-center sm:text-left text-xs sm:text-sm text-[#A8988B] leading-relaxed break-keep space-y-2">
              <p className="font-semibold text-[#EDE6DC]">💡 실습 가이드</p>
              <p>
                원데이 수업에서는 핵심 제작 과정을 경험하고, 소규모 작품 시리즈를 중심으로 디지털 전시관 초안을 완성하는 것을 목표로 합니다.
              </p>
              <p>
                이후 자신의 작품을 추가하여 전시회를 지속적으로 확장할 수 있도록 안내합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 11. ART TO VALUE (가치 확장)
         ═══════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 border-b border-[#2A211B] bg-[#120E0C]">
        <div className="site-container">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold tracking-widest text-[#C6A66B] uppercase">
              ART TO VALUE
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#EDE6DC] mt-2 mb-4 break-keep">
              나의 작품 세계를 더 넓은 가치로 확장합니다.
            </h2>
            <p className="text-sm md:text-base text-[#A8988B] break-keep">
              감성아트는 개인적인 자기표현에서 시작하여 다양한 창작 활동으로 이어질 수 있습니다.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "개인 감성아트 포트폴리오", desc: "나만의 예술적 아이덴티티를 보여주는 포트폴리오 구축" },
              { title: "SNS 감성 콘텐츠 및 작품 소개", desc: "인스타그램, 블로그 등 소셜 미디어 작품 연재와 팬덤 형성" },
              { title: "온라인 개인 전시회", desc: "언제 어디서나 누구나 관람할 수 있는 상설 웹 갤러리 운영" },
              { title: "디지털 배경화면과 엽서", desc: "스마트폰, PC 배경화면 및 감성 인쇄 엽서 제작 활용" },
              { title: "감성 그림책 및 아트북", desc: "작품과 글을 엮어 독립출판 그림책과 포토에세이로 확장" },
              { title: "퍼스널 브랜드와 창작 상품", desc: "나만의 고유한 아트워크를 담은 굿즈와 지식 콘텐츠화" },
            ].map((card, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-[#181310] border border-[#2E221B] flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold text-[#C6A66B] font-mono block mb-2">
                    0{idx + 1}
                  </span>
                  <h3 className="text-base font-bold text-[#EDE6DC] mb-2">{card.title}</h3>
                  <p className="text-xs sm:text-sm text-[#A8988B] leading-relaxed break-keep">
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto mt-10 text-center space-y-2">
            <p className="text-sm sm:text-base font-medium text-[#C6A66B]">
              자신을 표현하는 창작의 즐거움부터 새로운 가치의 발견까지, 자신만의 방향으로 작품 세계를 확장할 수 있습니다.
            </p>
            <p className="text-[11px] text-[#7C6656]">
              ※ 상품 제작과 판매는 생성 도구의 이용약관, 상업적 활용 조건 및 관련 권리를 확인한 후 진행해야 합니다.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 12. CURRICULUM (상세 커리큘럼 6단계)
         ═══════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 border-b border-[#2A211B] bg-[#0D0B0A]">
        <div className="site-container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold tracking-widest text-[#C6A66B] uppercase">
              CURRICULUM
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#EDE6DC] mt-2 mb-4 break-keep">
              마음의 이야기에서 작품 제작, 디지털 전시회까지
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                part: "PART 01",
                title: "내면 탐색과 작품 콘셉트 기획",
                desc: "감정 키워드 선정 · 나의 이야기 탐색 · 작품 세계관과 표현 주제 설정",
              },
              {
                part: "PART 02",
                title: "AI 감성아트 제작 실습",
                desc: "이미지 생성 도구 활용 · 감성 프롬프트 설계 · 화풍과 상징적 이미지 제작",
              },
              {
                part: "PART 03",
                title: "작품 시리즈 및 컬렉션 구성",
                desc: "일관된 스타일 설정 · 작품별 메시지 구성 · 시리즈 이미지 제작",
              },
              {
                part: "PART 04",
                title: "작품 제목 및 작가노트 작성",
                desc: "작품의 의미 정리 · 작품별 제목과 설명문 작성 · 나만의 작가노트 완성",
              },
              {
                part: "PART 05",
                title: "온라인 디지털 전시관 제작",
                desc: "전시 콘셉트 설정 · 작품 배치 · 온라인 갤러리 구성 및 공유 방법",
              },
              {
                part: "PART 06",
                title: "작품 활용 및 가치 확장",
                desc: "포트폴리오 구성 · SNS 작품 소개 · 감성 콘텐츠와 창작 상품으로의 확장",
              },
            ].map((c, idx) => (
              <div
                key={idx}
                className="bg-[#14100E] border border-[#2A211B] p-6 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-[#C6A66B]/40 transition-colors"
              >
                <div className="space-y-1">
                  <span className="text-xs font-bold text-[#8E6D38] uppercase tracking-wider block">
                    {c.part}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-[#EDE6DC]">{c.title}</h3>
                  <p className="text-xs sm:text-sm text-[#A8988B]">{c.desc}</p>
                </div>
                <div className="text-xs px-3 py-1.5 rounded-lg bg-[#1C1512] border border-[#2E221B] text-[#C6A66B] self-start sm:self-center shrink-0">
                  실습 중심
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 13. CLASS KIT & BENEFITS (제공 예정 자료)
         ═══════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 border-b border-[#2A211B] bg-[#120E0C]">
        <div className="site-container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold tracking-widest text-[#C6A66B] uppercase">
              CLASS KIT & BENEFITS
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#EDE6DC] mt-2 mb-4 break-keep">
              수업 이후에도 나만의 작품 세계를 이어갈 수 있도록
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { num: "01", title: "AI 감성아트 구조화 프롬프트 스킬" },
              { num: "02", title: "감정 탐색 및 작품 콘셉트 기획 워크시트" },
              { num: "03", title: "예술적 화풍과 감성 표현 프롬프트 예제집" },
              { num: "04", title: "작품 시리즈 기획 템플릿" },
              { num: "05", title: "작품 제목 및 작가노트 작성 템플릿" },
              { num: "06", title: "디지털 전시관 제작 가이드" },
            ].map((b, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-[#181310] border border-[#2E221B] flex items-start gap-3.5">
                <span className="w-8 h-8 rounded-xl bg-[#8E6D38]/20 text-[#C6A66B] text-xs font-bold flex items-center justify-center shrink-0">
                  {b.num}
                </span>
                <div>
                  <span className="text-[10px] text-[#8E6D38] font-bold block mb-0.5">제공 예정 자료</span>
                  <h4 className="text-sm font-bold text-[#EDE6DC]">{b.title}</h4>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-xs text-[#7C6656] mt-8">
            * 각 자료는 '제공 예정 자료'이며 실제 제공 범위와 형식은 개강 전 확정합니다.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 14. ONE DAY DELIVERABLES (결과물 5가지)
         ═══════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 border-b border-[#2A211B] bg-[#0D0B0A]">
        <div className="site-container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold tracking-widest text-[#C6A66B] uppercase">
              DELIVERABLES
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#EDE6DC] mt-2 mb-4 break-keep">
              단 하루, 내 마음을 하나의 작품 세계로 표현하는 경험
            </h2>
            <p className="text-sm text-[#A8988B]">
              수업에서 완성을 목표로 하는 결과물 5가지
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
            {[
              "01. 나만의 감성아트 콘셉트 기획안",
              "02. AI 감성아트 작품 시리즈",
              "03. 작품별 제목과 설명문",
              "04. 나만의 작가노트",
              "05. 온라인 디지털 전시관 초안",
            ].map((item, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-[#14100E] border border-[#2A211B] text-center flex flex-col justify-center">
                <span className="text-xs font-bold text-[#C6A66B] block mb-1">GOAL 0{idx + 1}</span>
                <p className="text-xs sm:text-sm font-semibold text-[#EDE6DC] break-keep">{item.substring(4)}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-xs text-[#7C6656] mt-6">
            * 실제 완성 범위는 수강생의 숙련도와 수업 진행 상황에 따라 달라질 수 있습니다.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 15. RECOMMENDED FOR (추천 수강생)
         ═══════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 border-b border-[#2A211B] bg-[#120E0C]">
        <div className="site-container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold tracking-widest text-[#C6A66B] uppercase">
              RECOMMENDED FOR
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#EDE6DC] mt-2 mb-4 break-keep">
              이런 분들께 추천합니다.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "마음공부와 자기이해에 관심이 있는 분",
              "자신의 감정과 이야기를 예술로 표현하고 싶은 분",
              "미술 경험 없이 AI 감성아트를 시작하고 싶은 분",
              "나만의 작품 스타일과 세계관을 만들고 싶은 분",
              "디지털 전시회와 개인 포트폴리오를 만들고 싶은 분",
              "감성 창작을 새로운 콘텐츠와 가치로 발전시키고 싶은 분",
            ].map((text, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-[#181310] border border-[#2E221B] flex items-center gap-3">
                <span className="text-[#C6A66B] font-bold">✓</span>
                <p className="text-xs sm:text-sm text-[#EDE6DC] font-medium break-keep">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 16. FAQ (자주 묻는 질문 6문항)
         ═══════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 border-b border-[#2A211B] bg-[#0D0B0A]">
        <div className="site-container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold tracking-widest text-[#C6A66B] uppercase">
              FAQ
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#EDE6DC] mt-2 mb-3 break-keep">
              자주 묻는 질문
            </h2>
            <p className="text-sm md:text-base text-[#A8988B] break-keep">
              수강 전 궁금한 점들을 미리 확인해 보세요.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "그림을 전혀 그리지 못해도 수강할 수 있나요?",
                a: "네. 전문적인 드로잉 기술보다 감정과 이야기의 표현, AI 이미지 생성 도구 활용을 중심으로 진행합니다.",
              },
              {
                q: "AI 이미지 제작 초보자도 가능한가요?",
                a: "기본적인 이미지 생성 방법부터 단계별로 안내할 예정입니다. 필요한 사전 준비사항은 개강 전에 안내합니다.",
              },
              {
                q: "실제로 온라인 전시회를 만들 수 있나요?",
                a: "직접 제작한 작품을 활용하여 온라인 디지털 전시관 초안을 구성하는 과정을 실습합니다. 사용 플랫폼과 공개 방식은 수업 구성 확정 후 안내합니다.",
              },
              {
                q: "그림의 스타일을 나만의 방식으로 통일할 수 있나요?",
                a: "색채, 화풍, 질감, 구도 및 시각적 콘셉트를 설계하여 작품 시리즈의 일관성을 유지하는 방법을 배웁니다.",
              },
              {
                q: "만든 작품을 굿즈나 상품으로 활용할 수 있나요?",
                a: "활용 가능성을 함께 살펴봅니다. 실제 상업적 사용은 생성 도구의 이용약관과 관련 권리 조건을 충족해야 합니다.",
              },
              {
                q: "유료 AI 도구가 필요한가요?",
                a: "실습에 사용할 도구와 무료·유료 플랜의 조건은 개강 전에 안내합니다.",
              },
            ].map((faq, idx) => (
              <div
                key={idx}
                className="bg-[#14100E] border border-[#2A211B] p-5 sm:p-6 rounded-2xl"
              >
                <div className="flex items-start gap-3 mb-2">
                  <span className="text-sm font-bold text-[#C6A66B] font-mono">Q.</span>
                  <h3 className="text-sm sm:text-base font-bold text-[#EDE6DC] break-keep">{faq.q}</h3>
                </div>
                <div className="flex items-start gap-3 pl-0 sm:pl-6">
                  <span className="text-sm font-bold text-[#A8988B] font-mono hidden sm:inline">A.</span>
                  <p className="text-xs sm:text-sm text-[#A8988B] leading-relaxed break-keep">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 17. RESERVATION (FINAL CTA)
         ═══════════════════════════════════════════════ */}
      <section id="apply" className="py-20 md:py-28 bg-[#181310] border-b border-[#2A211B] text-center relative overflow-hidden">
        {/* 은은한 배경 광원 효과 */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#C6A66B]/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="site-container relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <span className="text-xs font-bold tracking-widest text-[#C6A66B] uppercase">
              RESERVATION
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#EDE6DC] mt-2 mb-4 break-keep">
              내 안의 이야기를 작품으로, <br className="hidden sm:inline" />
              나만의 세계를 세상으로.
            </h2>
            <p className="text-sm sm:text-base text-[#A8988B] mb-8 break-keep">
              감정과 이야기를 발견하고, AI로 표현하고, 하나의 작품 세계와 디지털 전시회로 완성하는 시간.
              <br className="hidden sm:inline" />
              마음에서 시작하는 AI, 자명스쿨에서 당신만의 창작 여정을 시작해 보세요.
            </p>

            <div className="bg-[#14100E] border border-[#2A211B] p-6 sm:p-8 rounded-2xl shadow-xl max-w-md mx-auto">
              <div className="text-center mb-6">
                <span className="text-xs text-[#8C7A6B] block">모집 상태</span>
                <span className="text-lg font-bold text-[#C6A66B] block mt-1">모집 예정 (일정 준비 중)</span>
                <span className="text-xs text-[#A8988B] block mt-1">
                  일정과 세부 사항이 확정되면 가장 먼저 안내해 드립니다.
                </span>
              </div>

              <a
                href="https://pf.kakao.com/_IxguMn"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 rounded-xl bg-[#C6A66B] hover:bg-[#D6C6A8] text-[#1A1410] font-bold text-sm sm:text-base transition-colors shadow-lg block text-center"
              >
                {CLASS_CONFIG.ctaText}
              </a>

              <div className="mt-4 flex items-center justify-center gap-2 text-xs text-[#7C6656]">
                <span>✓ 스팸 없는 수업 안내</span>
                <span>•</span>
                <span>✓ 무료 알림 등록</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────
          SECTION 18. 환불 및 취소 규정 공통 섹션
         ─────────────────────────────────────────────── */}
      <CourseRefundPolicySection />

      {/* ───────────────────────────────────────────────
          모바일 하단 고정 CTA 바
         ─────────────────────────────────────────────── */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0D0B0A]/95 backdrop-blur-md border-t border-[#2A211B] p-3 px-4 flex items-center justify-between">
        <div>
          <span className="text-[10px] text-[#A8988B] block">AI 감성아트·디지털 전시회</span>
          <span className="text-xs font-bold text-[#EDE6DC]">모집 예정</span>
        </div>
        <a
          href="#apply"
          className="px-4 py-2 rounded-xl bg-[#C6A66B] text-[#1A1410] font-bold text-xs shadow-md"
        >
          {CLASS_CONFIG.ctaText}
        </a>
      </div>
    </main>
  );
}
