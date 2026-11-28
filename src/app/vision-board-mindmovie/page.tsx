import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import CourseRefundPolicySection from "@/components/CourseRefundPolicySection";

export const metadata: Metadata = {
  title: "비전보드·마인드무비 제작 | AI로 시각화하는 나의 미래 · 자명스쿨 원데이 클래스",
  description:
    "자기탐구와 미래 자아 설계부터 AI 이미지 제작, 긍정확언, 디지털 비전보드 및 마인드무비 영상 제작까지 경험하는 자명스쿨 감성 창작 원데이 클래스입니다.",
  keywords: [
    "비전보드 만들기",
    "마인드무비 제작",
    "AI 비전보드",
    "미래 자아",
    "긍정확언",
    "풍요 마인드",
    "마음공부",
    "AI 시각화",
    "자명스쿨",
    "디지털마인드코칭",
  ],
  alternates: {
    canonical: "https://www.jmschool.kr/vision-board-mindmovie",
  },
  openGraph: {
    title: "비전보드·마인드무비 제작 | 자명스쿨 원데이 클래스",
    description:
      "마음에 그린 미래를, 눈앞에 펼쳐지는 영상으로. 자기탐구와 미래 자아 설계부터 AI 이미지 제작, 비전보드 디자인, 긍정확언, 감성 영상 편집까지 경험하는 실전 시각화 클래스입니다.",
    url: "https://www.jmschool.kr/vision-board-mindmovie",
    siteName: "자명스쿨",
    locale: "ko_KR",
    type: "website",
  },
};

// ─────────────────────────────────────────────────────────────
// [클래스 기본 설정 데이터]
// ─────────────────────────────────────────────────────────────
const CLASS_CONFIG = {
  category: "VISION BOARD & MIND MOVIE · ONE DAY CLASS",
  badge: "자명스쿨 감성 창작 원데이",
  titleMain: "비전보드·",
  titleSub: "마인드무비 제작",
  subtitle: "마음에 그린 미래를, 눈앞에 펼쳐지는 영상으로",
  coreCopy: "“마음속에 그려왔던 삶을 눈으로 바라보고, 나만의 미래를 향한 첫걸음을 시작합니다.”",
  description:
    "당신은 앞으로 어떤 삶을 살아가고 싶으신가요? 원하는 일과 풍요로운 일상, 사랑하는 사람들과의 관계, 건강한 몸과 마음, 그리고 진정으로 나다운 삶. 막연하게 마음속에 머물던 미래의 모습을 구체적인 이미지와 문장으로 표현하고, 음악과 영상을 결합하여 나만의 마인드무비를 완성해 보세요. 자기탐구와 미래 자아 설계부터 AI 이미지 제작, 비전보드 디자인, 긍정확언, 감성 영상 편집까지 경험하는 실전 시각화 클래스입니다.",
  meta: {
    format: "온라인 실습 원데이",
    duration: "세부 시간 추후 확정",
    schedule: "준비 중",
    price: "미정",
    prerequisite: "입문 가능 (영상 제작 경험 무관)",
  },
  tags: ["비전보드", "마인드무비", "미래시각화", "자기이해", "긍정확언"],
  ctaText: "개강 알림 신청",
};

export default function VisionBoardMindMoviePage() {
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
          SECTION 01. HERO (상단 소개 · 비전보드 & 마인드무비)
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
                    "자기탐구를 통한 원하는 삶의 방향 발견",
                    "미래 자아 및 삶의 비전 설계",
                    "AI를 활용한 미래 이미지 시각화",
                    "나만의 디지털 비전보드 제작",
                    "긍정확언·음악·내레이션 구성",
                    "개인 맞춤형 마인드무비 영상 제작",
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

            {/* 우측 대표 이미지 슬롯 (디지털 비전보드 + 마인드무비 영상) */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-[460px] bg-[#14100E] border-2 border-[#8E6D38]/30 rounded-2xl p-4 shadow-2xl text-left">
                {/* 상단 윈도우 바 */}
                <div className="flex items-center justify-between pb-3 border-b border-[#2A211B] text-xs text-[#A8988B]">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#C6A66B]"></span>
                    <span className="font-mono text-[11px] text-[#E0A96D]">DIGITAL VISION BOARD & MOVIE</span>
                  </div>
                  <span className="text-[10px] bg-[#2A211B] text-[#EDE6DC] px-2 py-0.5 rounded">16:9 4K CINEMATIC</span>
                </div>

                {/* 대표 비주얼 슬롯 (비전보드 콜라주 + 영상 프리뷰 플레이스홀더) */}
                <div className="relative w-full aspect-video mt-3 rounded-xl overflow-hidden bg-gradient-to-br from-[#1C1512] via-[#2A1F1A] to-[#120E0C] border border-[#3A2D25] flex flex-col items-center justify-center text-center p-6 group">
                  <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#C6A66B_1px,transparent_1px)] [background-size:16px_16px]"></div>

                  {/* 마인드무비 시네마틱 재생 버튼 아이콘 */}
                  <div className="relative z-10 w-16 h-16 rounded-full bg-[#0D0B0A]/80 border-2 border-[#C6A66B] flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform mb-3">
                    <span className="text-2xl text-[#C6A66B] ml-1">▶</span>
                  </div>

                  <p className="relative z-10 text-xs font-semibold text-[#EDE6DC] mb-1">
                    마음에 그린 미래 · 디지털 비전보드 & 감성 마인드무비
                  </p>
                  <p className="relative z-10 text-[11px] text-[#A8988B]">
                    Quiet Creation · Visualizing Your Future Self & Mind Movie
                  </p>

                  <div className="mt-3 px-3 py-1 rounded-full bg-[#0D0B0A]/80 border border-[#C6A66B]/40 text-[10px] text-[#C6A66B]">
                    ✦ 추후 실제 비전보드 및 마인드무비 대표 영상 슬롯
                  </div>
                </div>

                {/* 하단 정보 */}
                <div className="mt-4 pt-3 border-t border-[#2A211B] flex items-center justify-between text-[11px] text-[#A8988B]">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#8E6D38]/30 flex items-center justify-center text-[#C6A66B] font-serif">✦</span>
                    <span className="text-[#EDE6DC] font-medium">자명스쿨 감성 시각화 랩</span>
                  </div>
                  <span className="text-[10px] text-[#7C6656]">미래 자아 설계 & 감성 편집</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 02. RESULT PREVIEW (완성 결과물 예시 3종)
         ═══════════════════════════════════════════════ */}
      <section className="py-20 border-b border-[#2A211B] bg-[#0D0B0A]">
        <div className="site-container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold text-[#C6A66B] tracking-widest uppercase">
              RESULT PREVIEW
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold mt-2 text-[#EDE6DC] break-keep">
              마음에 그린 미래가 <br className="hidden sm:inline" />
              나만의 창작 콘텐츠로 완성됩니다.
            </h2>
            <p className="text-[#A8988B] text-sm sm:text-base mt-3 break-keep">
              자신이 원하는 삶을 이미지로 표현하고, 의미 있는 문장과 음악을 결합하여 일상에서 반복적으로 활용할 수 있는 시각화 콘텐츠를 제작합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* 카드 1 */}
            <div className="bg-[#14100E] border border-[#2A211B] rounded-2xl overflow-hidden hover:border-[#C6A66B]/60 transition-all flex flex-col group">
              <div className="relative aspect-video w-full bg-gradient-to-br from-[#1E1713] to-[#120E0C] border-b border-[#2A211B] flex flex-col items-center justify-center p-4">
                <span className="text-3xl mb-1">🖼️</span>
                <span className="text-xs font-mono text-[#C6A66B]">16:9 VISION BOARD PREVIEW</span>
                <span className="text-[10px] text-[#8C7A6B] mt-1">삶의 6대 영역 종합 콜라주 캔버스</span>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-mono text-[#C6A66B]">01. RESULT</span>
                  <h3 className="text-lg font-bold text-[#EDE6DC] mt-1">나만의 디지털 비전보드</h3>
                  <p className="text-xs text-[#8C7A6B] font-mono mt-0.5">MY PERSONAL VISION BOARD</p>
                  <p className="text-sm text-[#A8988B] mt-3 leading-relaxed break-keep">
                    일과 경제적 목표, 관계, 건강, 자기성장, 라이프스타일 등 자신이 원하는 삶의 모습을 하나의 조화로운 비전보드로 구성합니다.
                  </p>
                </div>
                <div className="mt-5 pt-4 border-t border-[#2A211B]/60 flex flex-wrap gap-1.5 text-[11px] text-[#C6A66B]">
                  <span>#비전보드</span>
                  <span>#미래설계</span>
                  <span>#삶의방향</span>
                </div>
              </div>
            </div>

            {/* 카드 2 */}
            <div className="bg-[#14100E] border border-[#2A211B] rounded-2xl overflow-hidden hover:border-[#C6A66B]/60 transition-all flex flex-col group">
              <div className="relative aspect-video w-full bg-gradient-to-br from-[#241A14] to-[#14100E] border-b border-[#2A211B] flex flex-col items-center justify-center p-4">
                <span className="text-3xl mb-1">✨</span>
                <span className="text-xs font-mono text-[#E0A96D]">16:9 FUTURE SELF IMAGE PREVIEW</span>
                <span className="text-[10px] text-[#8C7A6B] mt-1">고화질 AI 시각화 라이프스타일 컷</span>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-mono text-[#E0A96D]">02. RESULT</span>
                  <h3 className="text-lg font-bold text-[#EDE6DC] mt-1">미래의 나를 만나는 이미지</h3>
                  <p className="text-xs text-[#8C7A6B] font-mono mt-0.5">MY FUTURE SELF</p>
                  <p className="text-sm text-[#A8988B] mt-3 leading-relaxed break-keep">
                    AI 이미지 생성 기술을 활용하여 자신이 원하는 미래의 환경과 라이프스타일, 깊이 있게 성장한 자신의 모습을 아름답게 시각화합니다.
                  </p>
                </div>
                <div className="mt-5 pt-4 border-t border-[#2A211B]/60 flex flex-wrap gap-1.5 text-[11px] text-[#E0A96D]">
                  <span>#미래자아</span>
                  <span>#AI시각화</span>
                  <span>#자기발견</span>
                </div>
              </div>
            </div>

            {/* 카드 3 */}
            <div className="bg-[#14100E] border border-[#2A211B] rounded-2xl overflow-hidden hover:border-[#C6A66B]/60 transition-all flex flex-col group">
              <div className="relative aspect-video w-full bg-gradient-to-br from-[#1F1915] to-[#0E0B09] border-b border-[#2A211B] flex flex-col items-center justify-center p-4">
                <span className="text-3xl mb-1">🎬</span>
                <span className="text-xs font-mono text-[#C6A66B]">16:9 MIND MOVIE VIDEO PREVIEW</span>
                <span className="text-[10px] text-[#8C7A6B] mt-1">긍정확언 내레이션 & 감성 BGM 결합</span>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-mono text-[#C6A66B]">03. RESULT</span>
                  <h3 className="text-lg font-bold text-[#EDE6DC] mt-1">나만의 마인드무비</h3>
                  <p className="text-xs text-[#8C7A6B] font-mono mt-0.5">MY PERSONAL MIND MOVIE</p>
                  <p className="text-sm text-[#A8988B] mt-3 leading-relaxed break-keep">
                    미래 이미지와 긍정확언, 음악, 내레이션을 결합하여 자신의 삶의 방향과 목표를 매일 마음에 새길 수 있는 감성 영상으로 완성합니다.
                  </p>
                </div>
                <div className="mt-5 pt-4 border-t border-[#2A211B]/60 flex flex-wrap gap-1.5 text-[11px] text-[#C6A66B]">
                  <span>#마인드무비</span>
                  <span>#긍정확언</span>
                  <span>#감성영상</span>
                </div>
              </div>
            </div>
          </div>

          <p className="text-center text-xs text-[#8C7A6B] mt-8">
            ※ 제작 예시는 실제 수강생 작품으로 오인되지 않도록 가이드용 슬롯으로 표시되었습니다.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 03. WHY VISION BOARD (공감과 문제 정의)
         ═══════════════════════════════════════════════ */}
      <section className="py-20 border-b border-[#2A211B] bg-[#14100E]">
        <div className="site-container">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <span className="text-xs font-bold text-[#C6A66B] tracking-widest uppercase">
              WHY VISION BOARD & MIND MOVIE?
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold mt-2 text-[#EDE6DC] break-keep leading-snug">
              열심히 살아가고 있지만, <br className="hidden sm:inline" />
              정작 원하는 삶의 모습은 선명하신가요?
            </h2>
            <div className="text-sm sm:text-base text-[#A8988B] mt-6 leading-relaxed space-y-3 break-keep text-left sm:text-center">
              <p>
                우리는 매일 수많은 일을 해내며 살아가지만, 정작 자신이 어떤 삶을 원하는지 충분히 생각해 볼 시간은 많지 않습니다.
              </p>
              <p>
                사회가 정해놓은 성공의 모습이나 타인의 기대를 따라가다 보면 내가 진정으로 원하는 삶의 방향을 놓치기도 합니다.
              </p>
              <p>
                비전보드와 마인드무비는 막연한 소망을 구체적인 이미지와 이야기로 표현하고, 자신의 가치관과 목표를 돌아볼 수 있도록 돕는 창작 도구입니다.
              </p>
              <p className="text-[#C6A66B] font-semibold pt-1">
                중요한 것은 화려한 미래의 이미지를 만드는 것이 아니라, 진정으로 자신에게 의미 있는 삶의 모습을 발견하는 것입니다.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { num: "01", text: "열심히 살아가지만 앞으로의 방향이 명확하지 않다." },
              { num: "02", text: "원하는 삶이 있지만 구체적으로 표현하기 어렵다." },
              { num: "03", text: "목표를 세워도 일상에서 쉽게 잊어버린다." },
              { num: "04", text: "나만의 비전보드와 마인드무비를 만들어보고 싶다." },
              { num: "05", text: "마음공부와 AI 창작을 함께 경험하고 싶다." },
            ].map((card, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#1A1410] border border-[#2A211B] flex flex-col justify-between hover:border-[#C6A66B]/50 transition-colors"
              >
                <span className="text-xl font-bold font-serif text-[#C6A66B]/60">{card.num}</span>
                <p className="text-sm font-medium text-[#EDE6DC] mt-4 leading-relaxed break-keep">
                  {card.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 04. MY LIFE VISION (미래 자아 설계 5대 질문 & 3대 콘셉트)
         ═══════════════════════════════════════════════ */}
      <section className="py-20 border-b border-[#2A211B] bg-[#0D0B0A]">
        <div className="site-container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold text-[#C6A66B] tracking-widest uppercase">
              DESIGN YOUR LIFE VISION
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold mt-2 text-[#EDE6DC] break-keep">
              미래를 그리기 전에, <br className="hidden sm:inline" />
              내가 진정으로 원하는 삶을 발견합니다.
            </h2>
            <p className="text-[#A8988B] text-sm sm:text-base mt-3 break-keep">
              다른 사람의 성공이 아닌 자신의 가치관과 감정, 삶의 방향을 중심으로 나만의 비전을 설계합니다.
            </p>
          </div>

          {/* 미래 자아 설계 5대 질문 */}
          <div className="mb-14">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#C6A66B] text-center mb-6">
              미래 자아 설계를 위한 5대 질문
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {[
                {
                  q: "Q1. 나는 어떤 마음으로 하루를 살아가고 싶은가?",
                  desc: "여유, 감사, 평온, 자신감, 자유 등 원하는 내면의 상태 발견",
                },
                {
                  q: "Q2. 나는 어떤 일과 활동을 하며 살아가고 싶은가?",
                  desc: "좋아하는 일, 창작 활동, 전문성, 새로운 도전과 사회적 가치 탐색",
                },
                {
                  q: "Q3. 나에게 풍요로운 삶이란 무엇인가?",
                  desc: "경제적 안정, 시간의 자유, 관계, 건강, 창작의 즐거움 등 자신만의 풍요 정의",
                },
                {
                  q: "Q4. 미래의 나는 어떤 모습으로 성장해 있는가?",
                  desc: "미래 자아의 생활 방식, 가치관, 환경, 행동과 습관 설계",
                },
                {
                  q: "Q5. 그 미래를 향해 오늘 시작할 수 있는 작은 행동은 무엇인가?",
                  desc: "시각화한 목표를 현실적인 행동과 일상 속 실천으로 연결",
                },
              ].map((item, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-[#14100E] border border-[#2A211B] flex flex-col justify-between">
                  <h4 className="text-xs sm:text-sm font-bold text-[#EDE6DC] leading-snug break-keep">
                    {item.q}
                  </h4>
                  <p className="text-xs text-[#A8988B] mt-4 leading-relaxed break-keep">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 비전 콘셉트 예시 3종 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#14100E] border border-[#2A211B]">
              <span className="text-xs font-bold text-[#C6A66B]">CONCEPT 01</span>
              <h4 className="text-base font-bold text-[#EDE6DC] mt-1">풍요로운 나의 삶</h4>
              <p className="text-xs text-[#A8988B] mt-2 leading-relaxed break-keep">
                경제적 안정과 시간의 자유, 자신이 원하는 일과 삶의 균형을 표현하는 비전
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-[#14100E] border border-[#2A211B]">
              <span className="text-xs font-bold text-[#E0A96D]">CONCEPT 02</span>
              <h4 className="text-base font-bold text-[#EDE6DC] mt-1">나를 사랑하는 일상</h4>
              <p className="text-xs text-[#A8988B] mt-2 leading-relaxed break-keep">
                자기수용과 건강한 마음, 감사와 여유가 있는 일상을 표현하는 비전
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-[#14100E] border border-[#2A211B]">
              <span className="text-xs font-bold text-[#C6A66B]">CONCEPT 03</span>
              <h4 className="text-base font-bold text-[#EDE6DC] mt-1">새로운 나의 시작</h4>
              <p className="text-xs text-[#A8988B] mt-2 leading-relaxed break-keep">
                새로운 도전과 창작 활동, 성장한 미래 자아의 모습을 표현하는 비전
              </p>
            </div>
          </div>

          <div className="mt-12 text-center p-6 rounded-2xl bg-[#14100E] border border-[#2A211B] max-w-2xl mx-auto">
            <p className="text-sm sm:text-base font-serif italic text-[#C6A66B]">
              “AI는 미래의 모습을 이미지로 만들어 주지만, 어떤 삶을 살아갈지는 내가 선택합니다.”
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 05. SIX DIMENSIONS OF LIFE (삶의 6가지 영역)
         ═══════════════════════════════════════════════ */}
      <section className="py-20 border-b border-[#2A211B] bg-[#14100E]">
        <div className="site-container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold text-[#C6A66B] tracking-widest uppercase">
              SIX DIMENSIONS OF LIFE
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold mt-2 text-[#EDE6DC] break-keep">
              나만의 풍요로운 삶을 구성하는 <br className="hidden sm:inline" />
              여섯 가지 영역
            </h2>
            <p className="text-[#A8988B] text-sm sm:text-base mt-3 break-keep">
              비전보드를 단순한 소망의 이미지 모음이 아닌, 자신의 삶을 종합적으로 바라보는 시각화 도구로 구성합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                num: "01",
                title: "마음과 자기성장",
                desc: "자기이해, 자신감, 마음의 평온, 새로운 배움과 성장",
                icon: "🌿",
                tag: "INNER GROWTH",
              },
              {
                num: "02",
                title: "일과 창조",
                desc: "좋아하는 일, 전문성, 창작 활동, 새로운 사업과 도전",
                icon: "💡",
                tag: "WORK & CREATIVITY",
              },
              {
                num: "03",
                title: "경제적 풍요",
                desc: "경제적 안정, 자산 형성, 시간의 자유와 원하는 생활 방식",
                icon: "🏛️",
                tag: "ABUNDANCE & FREEDOM",
              },
              {
                num: "04",
                title: "사랑과 관계",
                desc: "가족, 사랑, 우정, 건강한 인간관계와 소통",
                icon: "🤝",
                tag: "LOVE & RELATIONSHIPS",
              },
              {
                num: "05",
                title: "건강과 에너지",
                desc: "건강한 몸과 마음, 휴식, 운동, 균형 있는 생활 습관",
                icon: "☀️",
                tag: "VITALITY & WELLNESS",
              },
              {
                num: "06",
                title: "라이프스타일과 경험",
                desc: "여행, 취미, 주거 공간, 자연, 문화생활과 일상의 즐거움",
                icon: "✈️",
                tag: "LIFESTYLE & JOURNEY",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-[#1A1410] border border-[#2A211B] rounded-2xl overflow-hidden hover:border-[#C6A66B]/50 transition-colors flex flex-col justify-between"
              >
                {/* 이미지 슬롯 */}
                <div className="aspect-[16/10] w-full bg-gradient-to-br from-[#241A14] to-[#120E0C] border-b border-[#2A211B] flex flex-col items-center justify-center p-4 text-center">
                  <span className="text-3xl mb-1">{item.icon}</span>
                  <span className="text-[11px] font-mono text-[#C6A66B]">{item.tag} PREVIEW</span>
                  <span className="text-[10px] text-[#8C7A6B] mt-0.5">{item.title} 비전 이미지 슬롯</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono text-[#C6A66B] font-bold">{item.num}</span>
                    <span className="text-[10px] text-[#8C7A6B] uppercase">{item.tag}</span>
                  </div>
                  <h3 className="text-base font-bold text-[#EDE6DC]">{item.title}</h3>
                  <p className="text-xs text-[#A8988B] mt-2 leading-relaxed break-keep">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 06. BEFORE & AFTER (변화의 비교)
         ═══════════════════════════════════════════════ */}
      <section className="py-20 border-b border-[#2A211B] bg-[#0D0B0A]">
        <div className="site-container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold text-[#C6A66B] tracking-widest uppercase">
              TRANSFORMATION
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold mt-2 text-[#EDE6DC] break-keep">
              막연하게 꿈꾸는 미래에서, <br className="hidden sm:inline" />
              구체적으로 표현하고 실천하는 미래로
            </h2>
          </div>

          <div className="max-w-4xl mx-auto bg-[#14100E] border border-[#2A211B] rounded-2xl overflow-hidden shadow-xl">
            <div className="grid grid-cols-2 bg-[#1C1612] border-b border-[#2A211B] p-4 text-center font-bold text-xs sm:text-sm">
              <span className="text-[#8C7A6B]">BEFORE (이전의 나)</span>
              <span className="text-[#C6A66B]">AFTER (수업 후 완성된 나)</span>
            </div>
            <div className="divide-y divide-[#2A211B]">
              {[
                {
                  before: "원하는 삶의 모습이 막연하다.",
                  after: "자신의 가치관과 삶의 방향을 명확하게 정리한다.",
                },
                {
                  before: "다른 사람의 성공 이미지를 바라본다.",
                  after: "나만의 미래 자아와 비전을 주체적으로 설계한다.",
                },
                {
                  before: "마음속에만 목표를 간직한다.",
                  after: "이미지와 문장으로 구체적인 디지털 비전보드를 제작한다.",
                },
                {
                  before: "목표를 세워도 쉽게 잊어버린다.",
                  after: "일상에서 매일 활용할 수 있는 시각화 콘텐츠를 만든다.",
                },
                {
                  before: "영상을 감상하는 데 그친다.",
                  after: "나만의 긍정확언과 음악이 담긴 마인드무비를 직접 제작한다.",
                },
                {
                  before: "꿈꾸는 것과 행동하는 것이 따로 이루어진다.",
                  after: "미래의 비전을 오늘 시작할 수 있는 작은 실천 목표와 연결한다.",
                },
              ].map((row, idx) => (
                <div key={idx} className="grid grid-cols-2 p-4 sm:p-5 text-xs sm:text-sm items-center">
                  <div className="pr-3 text-[#A8988B] flex items-start gap-2 break-keep">
                    <span className="text-[#8C7A6B]">✕</span>
                    <span>{row.before}</span>
                  </div>
                  <div className="pl-3 border-l border-[#2A211B] text-[#EDE6DC] font-medium flex items-start gap-2 break-keep">
                    <span className="text-[#C6A66B]">✓</span>
                    <span>{row.after}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 07. CREATE YOUR VISION (AI 이미지 제작 8단계)
         ═══════════════════════════════════════════════ */}
      <section className="py-20 border-b border-[#2A211B] bg-[#14100E]">
        <div className="site-container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold text-[#C6A66B] tracking-widest uppercase">
              CREATE YOUR VISION
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold mt-2 text-[#EDE6DC] break-keep">
              마음속에 그려온 미래를 <br className="hidden sm:inline" />
              AI 이미지로 표현합니다.
            </h2>
            <p className="text-[#A8988B] text-sm mt-3">
              실제 사용 도구는 수업 준비 과정에서 최적의 직관적 도구로 확정합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { step: "01", title: "미래 자아 기획", desc: "미래 자아와 라이프스타일 이미지 기획" },
              { step: "02", title: "시각화 키워드", desc: "삶의 영역별 시각화 키워드 설정" },
              { step: "03", title: "AI 도구 활용", desc: "AI 이미지 생성 도구 기초 및 심화 활용" },
              { step: "04", title: "미래 이미지 생성", desc: "나의 미래 모습과 환경 이미지 제작" },
              { step: "05", title: "감성 색채 설계", desc: "감성적인 색채와 시각적 분위기 설계" },
              { step: "06", title: "일관된 스타일", desc: "일관된 인물과 이미지 스타일 구성" },
              { step: "07", title: "선별 및 리터칭", desc: "비전 이미지 선별 및 디테일 수정" },
              { step: "08", title: "레이아웃 완성", desc: "디지털 비전보드 레이아웃 완성" },
            ].map((item, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-[#1A1410] border border-[#2A211B]">
                <span className="text-xs font-mono text-[#C6A66B] font-bold">STEP {item.step}</span>
                <h4 className="text-sm font-bold text-[#EDE6DC] mt-1">{item.title}</h4>
                <p className="text-xs text-[#A8988B] mt-2 leading-relaxed break-keep">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 08. AI VISION PROMPT SKILL (구조화 프롬프트 스킬)
         ═══════════════════════════════════════════════ */}
      <section className="py-20 border-b border-[#2A211B] bg-[#0D0B0A]">
        <div className="site-container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold text-[#C6A66B] tracking-widest uppercase">
              AI VISION PROMPT SKILL
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold mt-2 text-[#EDE6DC] break-keep">
              막연한 꿈을 구체적인 미래 이미지로 <br className="hidden sm:inline" />
              표현할 수 있도록
            </h2>
            <p className="text-[#A8988B] text-sm sm:text-base mt-3 break-keep">
              자명스쿨에서 제공할 예정인 비전 이미지 구조화 프롬프트 스킬을 활용하여 자신이 원하는 삶의 모습을 구체적인 AI 이미지 제작 프롬프트로 발전시킵니다.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* STEP 01 */}
            <div className="p-6 rounded-2xl bg-[#14100E] border border-[#2A211B] flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-[#C6A66B] font-bold">STEP 01</span>
                <h3 className="text-base font-bold text-[#EDE6DC] mt-1">원하는 미래 입력</h3>
                <div className="mt-4 p-4 rounded-xl bg-[#1C1612] border border-[#2A211B] text-xs text-[#A8988B] leading-relaxed italic break-keep font-serif">
                  “자연이 보이는 아름다운 작업실에서 좋아하는 창작 활동을 하며 경제적으로 안정되고 여유로운 삶을 살고 싶어요.”
                </div>
              </div>
              <p className="text-[11px] text-[#8C7A6B] mt-4">단순한 한 줄 소망에서 출발합니다.</p>
            </div>

            {/* STEP 02 */}
            <div className="p-6 rounded-2xl bg-[#14100E] border border-[#2A211B] flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-[#E0A96D] font-bold">STEP 02</span>
                <h3 className="text-base font-bold text-[#EDE6DC] mt-1">AI 비전 이미지 프롬프트 구조화</h3>
                <ul className="mt-4 grid grid-cols-2 gap-2 text-xs text-[#EDE6DC]">
                  {[
                    "미래 자아의 모습",
                    "원하는 삶의 영역",
                    "공간과 환경",
                    "라이프스타일 및 활동",
                    "감정과 분위기",
                    "상징적 이미지",
                    "색채와 조명",
                    "구도와 시각 스타일",
                    "미래 이미지 일관성",
                  ].map((elem, idx) => (
                    <li key={idx} className="flex items-center gap-1.5 text-[11px] bg-[#1C1612] p-1.5 px-2 rounded border border-[#2A211B]">
                      <span className="text-[#C6A66B]">✦</span>
                      <span>{elem}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <p className="text-[11px] text-[#8C7A6B] mt-4">프롬프트를 다각도로 체계화합니다.</p>
            </div>

            {/* STEP 03 */}
            <div className="p-6 rounded-2xl bg-[#14100E] border border-[#2A211B] flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-[#C6A66B] font-bold">STEP 03</span>
                <h3 className="text-base font-bold text-[#EDE6DC] mt-1">RESULT</h3>
                <div className="mt-4 p-4 rounded-xl bg-[#1C1612] border border-[#C6A66B]/30 text-xs text-[#EDE6DC] leading-relaxed font-mono">
                  <p className="text-[#C6A66B] font-bold mb-1">[개인 맞춤형 미래 프롬프트]</p>
                  cinematic shot of a serene sunlit atelier overlooking a pine forest, peaceful creator sketching ideas, warm morning amber light, minimal wooden aesthetics, fulfilled expression, 8k resolution, quiet creation style --ar 16:9
                </div>
              </div>
              <p className="text-[11px] text-[#8C7A6B] mt-4">AI 툴에 즉시 입력 가능한 최종 프롬프트 완성</p>
            </div>
          </div>

          <div className="mt-10 text-center">
            <p className="text-sm font-serif italic text-[#C6A66B]">
              “마음에 그린 미래를 나만의 시각적 언어로 표현합니다.”
            </p>
            <p className="text-xs text-[#8C7A6B] mt-2">
              ※ 해당 스킬은 제공 예정이며 실제 기능과 제공 형식은 개강 전 확정합니다.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 09. DIGITAL VISION BOARD (비전보드 실습 & 디자인 3종)
         ═══════════════════════════════════════════════ */}
      <section className="py-20 border-b border-[#2A211B] bg-[#14100E]">
        <div className="site-container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold text-[#C6A66B] tracking-widest uppercase">
              DIGITAL VISION BOARD
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold mt-2 text-[#EDE6DC] break-keep">
              내가 원하는 삶의 모습을 <br className="hidden sm:inline" />
              하나의 비전보드에 담습니다.
            </h2>
            <p className="text-[#A8988B] text-sm sm:text-base mt-3 break-keep">
              삶의 영역별로 생성한 이미지를 선별하고 의미 있는 문장과 함께 하나의 시각적 작품으로 구성합니다.
            </p>
          </div>

          {/* 7가지 실습 내용 */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 mb-14">
            {[
              "비전보드 핵심 주제·제목 설정",
              "삶의 영역별 이미지 선정",
              "미래 자아 이미지 배치",
              "핵심 목표·긍정확언 구성",
              "색채와 레이아웃 디자인",
              "디지털 비전보드 완성",
              "스마트폰·PC 배경화면 활용",
            ].map((item, idx) => (
              <div key={idx} className="p-3.5 rounded-xl bg-[#1A1410] border border-[#2A211B] text-center">
                <span className="text-xs font-mono text-[#C6A66B] font-bold block mb-1">0{idx + 1}</span>
                <span className="text-xs text-[#EDE6DC] leading-snug break-keep block">{item}</span>
              </div>
            ))}
          </div>

          {/* 비전보드 디자인 예시 3종 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "감성 콜라주형 비전보드",
                desc: "다양한 삶의 영역과 영감을 주는 이미지들을 리드미컬하게 배치한 콜라주 스타일",
                tag: "EMOTIONAL COLLAGE",
                ratio: "16:9 DESKTOP",
              },
              {
                title: "미니멀 라이프스타일 비전보드",
                desc: "절제된 그리드와 여백, 핵심 가치관 중심의 단정한 미니멀 비주얼 스타일",
                tag: "MINIMAL LIFESTYLE",
                ratio: "16:9 DESKTOP",
              },
              {
                title: "풍요와 자기성장 중심 비전보드",
                desc: "경제적 자유, 커리어 성취, 내면의 성장을 상징적인 황금빛 무드로 구성한 스타일",
                tag: "ABUNDANCE & GROWTH",
                ratio: "9:16 MOBILE",
              },
            ].map((design, idx) => (
              <div key={idx} className="bg-[#1A1410] border border-[#2A211B] rounded-2xl overflow-hidden flex flex-col justify-between">
                <div className="aspect-video w-full bg-gradient-to-br from-[#241A14] to-[#14100E] border-b border-[#2A211B] flex flex-col items-center justify-center p-4 text-center">
                  <span className="text-xs font-mono text-[#C6A66B]">{design.tag}</span>
                  <span className="text-[10px] text-[#8C7A6B] mt-1">{design.ratio} 디자인 템플릿 슬롯</span>
                </div>
                <div className="p-5">
                  <h4 className="text-sm sm:text-base font-bold text-[#EDE6DC]">{design.title}</h4>
                  <p className="text-xs text-[#A8988B] mt-2 leading-relaxed break-keep">{design.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 10. AFFIRMATION & INNER NARRATIVE (긍정확언 5대 주제)
         ═══════════════════════════════════════════════ */}
      <section className="py-20 border-b border-[#2A211B] bg-[#0D0B0A]">
        <div className="site-container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold text-[#C6A66B] tracking-widest uppercase">
              AFFIRMATION & INNER NARRATIVE
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold mt-2 text-[#EDE6DC] break-keep">
              내가 살아가고 싶은 삶을 <br className="hidden sm:inline" />
              나만의 문장으로 표현합니다.
            </h2>
            <p className="text-[#A8988B] text-sm sm:text-base mt-3 break-keep">
              비전 이미지에 자신의 가치관과 원하는 삶의 방향을 담은 긍정확언과 내레이션을 구성합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              {
                theme: "01. 자기수용",
                copy: "나는 있는 그대로의 나를 존중하며, 나만의 속도로 성장합니다.",
                desc: "불안과 비교를 내려놓고 내면의 평온을 회복하는 선언",
              },
              {
                theme: "02. 풍요 마인드",
                copy: "나는 나의 능력과 창조성을 발견하고, 새로운 가치를 만들어갑니다.",
                desc: "결핍 대신 잠재력과 무한한 기회에 집중하는 선언",
              },
              {
                theme: "03. 용기와 도전",
                copy: "나는 작은 행동을 통해 새로운 가능성을 열어갑니다.",
                desc: "두려움을 딛고 한 걸음 내딛는 실천적 선언",
              },
              {
                theme: "04. 사랑과 감사",
                copy: "나는 나 자신과 주변 사람들에게 따뜻한 마음을 전합니다.",
                desc: "관계 속에서 감사와 온기를 나누는 선언",
              },
              {
                theme: "05. 미래 자아",
                copy: "나는 내가 원하는 삶의 방향을 선택하고, 오늘의 행동으로 그 미래를 만들어갑니다.",
                desc: "미래의 나와 현재의 나를 잇는 주체적 선언",
              },
            ].map((item, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-[#14100E] border border-[#2A211B] flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold text-[#C6A66B]">{item.theme}</span>
                  <blockquote className="text-xs sm:text-sm font-serif italic text-[#EDE6DC] mt-3 leading-relaxed break-keep border-l-2 border-[#C6A66B] pl-2.5">
                    “{item.copy}”
                  </blockquote>
                </div>
                <p className="text-[11px] text-[#8C7A6B] mt-4 break-keep">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 p-4 rounded-xl bg-[#14100E] border border-[#2A211B] text-center max-w-xl mx-auto">
            <p className="text-xs text-[#8C7A6B]">
              ※ 긍정확언은 특정한 결과나 경제적 성과를 보장하는 것이 아닌 자기성찰과 실천을 위한 메시지로 구성합니다.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 11. CREATE YOUR MIND MOVIE (영상 확장 & 프리뷰 슬롯)
         ═══════════════════════════════════════════════ */}
      <section className="py-20 border-b border-[#2A211B] bg-[#14100E]">
        <div className="site-container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold text-[#C6A66B] tracking-widest uppercase">
              CREATE YOUR MIND MOVIE
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold mt-2 text-[#EDE6DC] break-keep">
              나의 미래를 이미지에서 <br className="hidden sm:inline" />
              음악과 영상으로 확장합니다.
            </h2>
            <p className="text-[#A8988B] text-sm sm:text-base mt-3 break-keep">
              비전보드에 담긴 이미지와 메시지를 연결하여 일상에서 활용할 수 있는 개인 맞춤형 마인드무비를 제작합니다.
            </p>
          </div>

          {/* 제작 과정 8단계 */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5 mb-14">
            {[
              "주제·스토리 기획",
              "이미지·영상 선정",
              "스토리보드 구성",
              "긍정확언 대본",
              "감성 BGM·음악",
              "움직임·전환 효과",
              "자막·타이밍 싱크",
              "영상 출력·완성",
            ].map((step, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-[#1A1410] border border-[#2A211B] text-center">
                <span className="text-xs font-mono text-[#C6A66B] font-bold block mb-1">0{idx + 1}</span>
                <span className="text-xs text-[#EDE6DC] leading-snug break-keep block">{step}</span>
              </div>
            ))}
          </div>

          {/* 영상 프리뷰 슬롯 (16:9 가로형 + 9:16 모바일 세로형) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* 16:9 가로형 슬롯 */}
            <div className="lg:col-span-7 bg-[#1A1410] border border-[#2A211B] rounded-2xl p-5">
              <div className="flex items-center justify-between pb-3 border-b border-[#2A211B] text-xs">
                <span className="font-mono text-[#C6A66B]">16:9 DESKTOP & TV MIND MOVIE</span>
                <span className="text-[#8C7A6B]">가로형 시네마틱 릴리즈</span>
              </div>
              <div className="aspect-video w-full mt-4 rounded-xl bg-gradient-to-br from-[#241A14] to-[#120E0C] border border-[#3A2D25] flex flex-col items-center justify-center text-center p-6">
                <span className="text-4xl mb-2 text-[#C6A66B]">🎬</span>
                <p className="text-sm font-bold text-[#EDE6DC]">16:9 가로형 감성 마인드무비</p>
                <p className="text-xs text-[#A8988B] mt-1">Full HD / 4K 고화질 시네마틱 컷 & 긍정확언 자막</p>
                <div className="mt-3 px-3 py-1 rounded-full bg-[#0D0B0A] text-[10px] text-[#C6A66B] border border-[#C6A66B]/30">
                  ✦ 가로형 영상 플레이어 슬롯
                </div>
              </div>
            </div>

            {/* 9:16 세로형 슬롯 */}
            <div className="lg:col-span-5 bg-[#1A1410] border border-[#2A211B] rounded-2xl p-5">
              <div className="flex items-center justify-between pb-3 border-b border-[#2A211B] text-xs">
                <span className="font-mono text-[#E0A96D]">9:16 MOBILE & SHORTS MIND MOVIE</span>
                <span className="text-[#8C7A6B]">모바일 전용</span>
              </div>
              <div className="aspect-[9/14] max-w-[240px] mx-auto mt-4 rounded-xl bg-gradient-to-br from-[#241A14] to-[#120E0C] border border-[#3A2D25] flex flex-col items-center justify-center text-center p-4">
                <span className="text-3xl mb-2 text-[#E0A96D]">📱</span>
                <p className="text-xs font-bold text-[#EDE6DC]">9:16 모바일 마인드무비</p>
                <p className="text-[10px] text-[#A8988B] mt-1">스마트폰 잠금화면 & 숏폼 시각화</p>
                <div className="mt-3 px-2.5 py-0.5 rounded-full bg-[#0D0B0A] text-[9px] text-[#E0A96D] border border-[#E0A96D]/30">
                  ✦ 모바일 세로형 영상 슬롯
                </div>
              </div>
            </div>
          </div>

          <p className="text-center text-xs text-[#8C7A6B] mt-8">
            ※ 실제 수업에서는 핵심 제작 과정을 중심으로 짧은 개인 맞춤형 마인드무비 영상 완성을 목표로 합니다.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 12. MIND MOVIE STORYBOARD (6개 장면 예시)
         ═══════════════════════════════════════════════ */}
      <section className="py-20 border-b border-[#2A211B] bg-[#0D0B0A]">
        <div className="site-container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold text-[#C6A66B] tracking-widest uppercase">
              MIND MOVIE STORYBOARD
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold mt-2 text-[#EDE6DC] break-keep">
              미래의 나를 만나는 <br className="hidden sm:inline" />
              하나의 감성 스토리
            </h2>
            <p className="text-[#A8988B] text-sm sm:text-base mt-3 break-keep">
              마인드무비를 단순한 이미지 슬라이드쇼가 아니라 자신이 원하는 삶의 방향과 메시지가 담긴 영상으로 구성합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                scene: "SCENE 01",
                title: "새로운 하루의 시작",
                desc: "여유롭고 평온한 아침을 맞이하는 미래의 나",
                icon: "🌅",
              },
              {
                scene: "SCENE 02",
                title: "내가 사랑하는 일",
                desc: "좋아하는 일과 창작 활동에 몰입하는 모습",
                icon: "🎨",
              },
              {
                scene: "SCENE 03",
                title: "풍요로운 일상",
                desc: "경제적 안정과 시간의 자유, 자신이 원하는 생활 환경",
                icon: "☕",
              },
              {
                scene: "SCENE 04",
                title: "사랑과 관계",
                desc: "소중한 사람들과 따뜻한 관계를 나누는 모습",
                icon: "🌿",
              },
              {
                scene: "SCENE 05",
                title: "성장하는 나",
                desc: "배움과 새로운 경험을 통해 자신만의 가능성을 확장하는 모습",
                icon: "📖",
              },
              {
                scene: "SCENE 06",
                title: "나의 미래 선언",
                desc: "자신의 삶의 방향을 표현하는 핵심 긍정확언과 마무리 메시지",
                icon: "✨",
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-[#14100E] border border-[#2A211B] rounded-2xl overflow-hidden flex flex-col justify-between">
                <div className="aspect-video w-full bg-gradient-to-br from-[#241A14] to-[#120E0C] border-b border-[#2A211B] flex flex-col items-center justify-center p-4 text-center">
                  <span className="text-2xl mb-1">{item.icon}</span>
                  <span className="text-xs font-mono text-[#C6A66B]">{item.scene} PREVIEW</span>
                  <span className="text-[10px] text-[#8C7A6B] mt-0.5">{item.title} 장면 슬롯</span>
                </div>
                <div className="p-5">
                  <span className="text-xs font-mono text-[#C6A66B] font-bold">{item.scene}</span>
                  <h4 className="text-base font-bold text-[#EDE6DC] mt-1">{item.title}</h4>
                  <p className="text-xs text-[#A8988B] mt-2 leading-relaxed break-keep">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-sm font-serif italic text-[#C6A66B]">
              “내가 원하는 삶을 발견하고, 그 삶을 향해 움직이는 나만의 이야기.”
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 13. FROM VISION TO ACTION (일상 속 실천 4가지)
         ═══════════════════════════════════════════════ */}
      <section className="py-20 border-b border-[#2A211B] bg-[#14100E]">
        <div className="site-container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold text-[#C6A66B] tracking-widest uppercase">
              FROM VISION TO ACTION
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold mt-2 text-[#EDE6DC] break-keep">
              마음에 그린 미래를 <br className="hidden sm:inline" />
              오늘의 작은 실천으로 연결합니다.
            </h2>
            <div className="text-[#A8988B] text-sm sm:text-base mt-4 space-y-2 leading-relaxed break-keep">
              <p>
                비전보드와 마인드무비는 미래를 자동으로 실현해 주는 도구가 아닙니다.
              </p>
              <p>
                자신이 중요하게 생각하는 가치와 삶의 방향을 기억하고, 일상에서 구체적인 행동을 선택하도록 돕는 창작 및 자기성찰 도구입니다.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                num: "01",
                title: "아침 시각화 루틴",
                desc: "하루를 시작하며 나만의 비전과 삶의 방향을 떠올리기",
              },
              {
                num: "02",
                title: "긍정적인 자기대화",
                desc: "자신에게 필요한 문장을 읽으며 현재의 생각과 마음 돌아보기",
              },
              {
                num: "03",
                title: "미래 자아 행동 실천",
                desc: "원하는 미래에 가까워질 수 있는 작은 행동 하나 선택하기",
              },
              {
                num: "04",
                title: "성장 기록과 재설계",
                desc: "실천 경험을 기록하고 변화하는 삶의 방향에 맞게 비전보드를 수정하기",
              },
            ].map((action, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-[#1A1410] border border-[#2A211B] flex flex-col justify-between">
                <span className="text-xl font-bold font-serif text-[#C6A66B]">{action.num}</span>
                <div className="mt-4">
                  <h4 className="text-base font-bold text-[#EDE6DC]">{action.title}</h4>
                  <p className="text-xs text-[#A8988B] mt-2 leading-relaxed break-keep">{action.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-sm font-serif italic text-[#C6A66B]">
              “미래를 바라보는 것에서 시작하여, 오늘의 행동으로 나만의 삶을 만들어갑니다.”
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 14. CURRICULUM (상세 커리큘럼 6개 파트)
         ═══════════════════════════════════════════════ */}
      <section className="py-20 border-b border-[#2A211B] bg-[#0D0B0A]">
        <div className="site-container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold text-[#C6A66B] tracking-widest uppercase">
              CURRICULUM
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold mt-2 text-[#EDE6DC] break-keep">
              자기탐구에서 미래 시각화, <br className="hidden sm:inline" />
              마인드무비 완성까지
            </h2>
            <p className="text-[#A8988B] text-sm mt-3">
              단계별 실습을 통해 나만의 비전보드와 영상을 체계적으로 완성합니다.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                part: "PART 01",
                title: "자기탐구와 미래 자아 설계",
                desc: "나의 가치관 탐색 · 원하는 삶의 모습 · 삶의 영역별 목표 및 비전 기획",
              },
              {
                part: "PART 02",
                title: "AI 미래 이미지 제작",
                desc: "미래 자아 이미지 · 라이프스타일 시각화 · 구조화 프롬프트 활용",
              },
              {
                part: "PART 03",
                title: "디지털 비전보드 제작",
                desc: "이미지 선별 · 긍정확언 배치 · 비전보드 레이아웃 및 디자인 완성",
              },
              {
                part: "PART 04",
                title: "긍정확언 및 마인드무비 대본 제작",
                desc: "개인 맞춤형 메시지 · 미래 자아 스토리 · 내레이션 대본 구성",
              },
              {
                part: "PART 05",
                title: "마인드무비 영상 제작",
                desc: "장면별 이미지 구성 · 음악 및 내레이션 · 자막과 영상 편집",
              },
              {
                part: "PART 06",
                title: "일상 속 활용 및 실천 루틴",
                desc: "영상 출력 · 스마트폰 활용 · 시각화 루틴 · 작은 행동과 성장 기록",
              },
            ].map((curr, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-[#14100E] border border-[#2A211B] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div>
                  <span className="text-xs font-mono text-[#C6A66B] font-bold block mb-1">{curr.part}</span>
                  <h3 className="text-base font-bold text-[#EDE6DC]">{curr.title}</h3>
                  <p className="text-xs text-[#A8988B] mt-1 break-keep">{curr.desc}</p>
                </div>
                <span className="text-[11px] px-2.5 py-1 rounded-full bg-[#1C1612] text-[#C6A66B] border border-[#2A211B] whitespace-nowrap self-end sm:self-auto">
                  실습 집중
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 15. CLASS KIT & BENEFITS (7가지 제공 예정 자료)
         ═══════════════════════════════════════════════ */}
      <section className="py-20 border-b border-[#2A211B] bg-[#14100E]">
        <div className="site-container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold text-[#C6A66B] tracking-widest uppercase">
              CLASS KIT & BENEFITS
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold mt-2 text-[#EDE6DC] break-keep">
              수업 이후에도 나만의 미래를 <br className="hidden sm:inline" />
              계속 그려갈 수 있도록
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {[
              { num: "01", title: "자기탐구 워크시트", desc: "자기탐구 및 미래 자아 설계 워크시트" },
              { num: "02", title: "비전보드 기획 템플릿", desc: "삶의 6가지 영역별 비전보드 기획 템플릿" },
              { num: "03", title: "시각화 프롬프트 스킬", desc: "AI 미래 시각화 구조화 프롬프트 스킬" },
              { num: "04", title: "비전보드 디자인 템플릿", desc: "디지털 비전보드 디자인 템플릿" },
              { num: "05", title: "대본 작성 가이드", desc: "긍정확언 및 마인드무비 대본 작성 가이드" },
              { num: "06", title: "영상 제작 템플릿", desc: "마인드무비 스토리보드 및 영상 제작 템플릿" },
              { num: "07", title: "실천 루틴 가이드", desc: "일상 속 시각화와 실천 루틴 가이드" },
              { num: "08", title: "자명스쿨 수강생 혜택", desc: "추후 커뮤니티 및 심화 과정 연계 안내" },
            ].map((kit, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-[#1A1410] border border-[#2A211B]">
                <span className="text-xs font-mono text-[#C6A66B] font-bold">혜택 {kit.num}</span>
                <h4 className="text-sm font-bold text-[#EDE6DC] mt-1">{kit.title}</h4>
                <p className="text-xs text-[#A8988B] mt-2 leading-relaxed break-keep">{kit.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-xs text-[#8C7A6B] mt-8">
            ※ 각 자료는 제공 예정으로 표시하며 실제 제공 범위와 파일 형식은 개강 전 확정합니다.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 16. ONE DAY DELIVERABLES (6가지 산출물)
         ═══════════════════════════════════════════════ */}
      <section className="py-20 border-b border-[#2A211B] bg-[#0D0B0A]">
        <div className="site-container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold text-[#C6A66B] tracking-widest uppercase">
              ONE DAY DELIVERABLES
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold mt-2 text-[#EDE6DC] break-keep">
              단 하루, 내가 원하는 삶을 <br className="hidden sm:inline" />
              나만의 작품으로 표현하는 경험
            </h2>
            <p className="text-[#A8988B] text-sm mt-3">
              수업에서 완성을 목표로 하는 6가지 핵심 결과물
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { num: "01", title: "미래 자아 기획안", desc: "나만의 미래 자아 및 삶의 비전 기획안" },
              { num: "02", title: "AI 미래 시각화 이미지", desc: "삶의 영역별 고화질 AI 미래 시각화 이미지" },
              { num: "03", title: "개인 맞춤형 디지털 비전보드", desc: "스마트폰/PC 배경화면용 완성형 비전보드" },
              { num: "04", title: "긍정확언 & 내레이션 대본", desc: "나의 가치관을 담은 맞춤형 긍정확언 대본" },
              { num: "05", title: "마인드무비 스토리보드", desc: "감성 영상 구성을 위한 체계적 스토리보드" },
              { num: "06", title: "개인 맞춤형 마인드무비 영상", desc: "음악과 자막이 결합된 감성 마인드무비 영상" },
            ].map((del, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-[#14100E] border border-[#2A211B] flex items-start gap-4">
                <span className="text-lg font-bold font-serif text-[#C6A66B]">{del.num}</span>
                <div>
                  <h4 className="text-sm font-bold text-[#EDE6DC]">{del.title}</h4>
                  <p className="text-xs text-[#A8988B] mt-1 break-keep">{del.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-xs text-[#8C7A6B] mt-8">
            ※ 실제 완성 범위는 수강생의 숙련도와 수업 진행 상황에 따라 달라질 수 있습니다.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 17. RECOMMENDED FOR (수강 추천 대상 8가지)
         ═══════════════════════════════════════════════ */}
      <section className="py-20 border-b border-[#2A211B] bg-[#14100E]">
        <div className="site-container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold text-[#C6A66B] tracking-widest uppercase">
              RECOMMENDED FOR
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold mt-2 text-[#EDE6DC] break-keep">
              이런 분들께 추천합니다.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {[
              "자신이 원하는 삶의 방향을 구체적으로 정리하고 싶은 분",
              "마음공부와 자기이해에 관심이 있는 분",
              "풍요로운 삶과 미래 자아를 시각적으로 표현하고 싶은 분",
              "나만의 디지털 비전보드를 만들고 싶은 분",
              "긍정확언과 음악이 담긴 마인드무비를 제작하고 싶은 분",
              "AI를 활용하여 의미 있는 감성 영상을 창작하고 싶은 분",
              "자기성장 및 마음공부 커뮤니티에 활용할 콘텐츠가 필요한 분",
              "새로운 목표를 일상 속 실천으로 연결하고 싶은 분",
            ].map((item, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-[#1A1410] border border-[#2A211B] flex items-start gap-3">
                <span className="text-[#C6A66B] font-bold">✓</span>
                <p className="text-xs sm:text-sm text-[#EDE6DC] leading-relaxed break-keep">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 18. FAQ (자주 묻는 질문 7가지)
         ═══════════════════════════════════════════════ */}
      <section className="py-20 border-b border-[#2A211B] bg-[#0D0B0A]">
        <div className="site-container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold text-[#C6A66B] tracking-widest uppercase">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold mt-2 text-[#EDE6DC] break-keep">
              자주 묻는 질문
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: "Q. 영상 제작 경험이 없어도 수강할 수 있나요?",
                a: "네. 이미지 기획과 AI 이미지 제작, 비전보드 디자인, 기본적인 영상 구성과 편집 방법을 단계별로 안내할 예정입니다.",
              },
              {
                q: "Q. 비전보드와 마인드무비의 차이는 무엇인가요?",
                a: "비전보드는 원하는 삶의 이미지를 하나의 화면에 구성하는 시각화 작품입니다. 마인드무비는 이러한 이미지에 음악, 영상, 긍정확언 등을 결합하여 하나의 감성 영상으로 표현하는 방식입니다.",
              },
              {
                q: "Q. 제 얼굴이나 미래의 모습을 이미지에 반영할 수 있나요?",
                a: "본인의 이미지를 활용하거나 자신을 상징하는 인물과 환경을 제작하는 방법을 다룰 예정입니다. 타인의 이미지를 활용할 때는 반드시 적절한 권한과 동의를 확보해야 합니다.",
              },
              {
                q: "Q. 마음공부를 해본 경험이 없어도 가능한가요?",
                a: "네. 자신의 가치관과 원하는 삶을 돌아보는 기초적인 자기탐구 질문부터 차근차근 시작하므로 누구나 편안하게 참여하실 수 있습니다.",
              },
              {
                q: "Q. 마인드무비를 만들면 실제로 원하는 삶이 실현되나요?",
                a: "비전보드와 마인드무비는 자신의 목표와 가치관을 떠올리고 실천 방향을 정리하는 도구입니다. 특정한 미래, 경제적 성과 또는 심리적·건강상의 효과를 보장하지 않습니다.",
              },
              {
                q: "Q. 제작한 영상을 SNS나 유튜브에 활용할 수 있나요?",
                a: "활용할 수 있으나 사용한 이미지, 음악, 영상 소재, 폰트 및 AI 도구의 이용약관과 상업적 사용 조건을 확인해야 합니다.",
              },
              {
                q: "Q. 유료 AI 도구가 필요한가요?",
                a: "실습에 필요한 도구와 무료·유료 플랜의 조건은 개강 전 투명하게 사전 안내해 드립니다.",
              },
            ].map((faq, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-[#14100E] border border-[#2A211B]">
                <h3 className="text-sm sm:text-base font-bold text-[#EDE6DC]">{faq.q}</h3>
                <p className="text-xs sm:text-sm text-[#A8988B] mt-2.5 leading-relaxed break-keep">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 19. RESERVATION (개강 알림 신청)
         ═══════════════════════════════════════════════ */}
      <section id="apply" className="py-20 border-b border-[#2A211B] bg-[#14100E] scroll-mt-20">
        <div className="site-container">
          <div className="max-w-xl mx-auto text-center space-y-6">
            <span className="text-xs font-bold text-[#C6A66B] tracking-widest uppercase">
              RESERVATION
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#EDE6DC] break-keep">
              마음에 그린 미래, <br />
              나로부터 시작되는 새로운 삶.
            </h2>
            <p className="text-sm sm:text-base text-[#A8988B] leading-relaxed break-keep">
              내가 진정으로 원하는 삶을 발견하고, AI로 시각화하고, 나만의 비전보드와 마인드무비로 표현하는 시간.
              <br className="hidden sm:inline" />
              마음에서 시작하는 AI, 자명스쿨에서 당신만의 미래를 창조하는 여정을 시작해 보세요.
            </p>

            <div className="bg-[#1C1612] border border-[#2A211B] p-6 sm:p-8 rounded-2xl shadow-xl max-w-md mx-auto">
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
          SECTION 20. 환불 및 취소 규정 공통 섹션
         ─────────────────────────────────────────────── */}
      <CourseRefundPolicySection />

      {/* ───────────────────────────────────────────────
          모바일 하단 고정 CTA 바
         ─────────────────────────────────────────────── */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0D0B0A]/95 backdrop-blur-md border-t border-[#2A211B] p-3 px-4 flex items-center justify-between">
        <div>
          <span className="text-[10px] text-[#A8988B] block">비전보드·마인드무비 제작</span>
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
