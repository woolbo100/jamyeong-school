import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import CourseRefundPolicySection from "@/components/CourseRefundPolicySection";

export const metadata: Metadata = {
  title: "감성 오라클 카드·굿즈 제작 | 마음을 표현하는 AI 창작 원데이 클래스 · 자명스쿨",
  description:
    "자신에게 필요한 마음의 메시지를 발견하고 AI를 활용하여 긍정확언 카드, 감성 오라클 카드, 카드 패키지 및 감성 굿즈를 제작하는 자명스쿨 원데이 클래스입니다.",
  keywords: [
    "AI 오라클 카드 제작",
    "긍정확언 카드",
    "감성 굿즈 제작",
    "AI 굿즈 디자인",
    "마음공부",
    "자기이해",
    "감성 창작",
    "자명스쿨",
    "AI 원데이 클래스",
  ],
  alternates: {
    canonical: "https://www.jmschool.kr/oracle-goods",
  },
  openGraph: {
    title: "감성 오라클 카드·굿즈 제작 | 자명스쿨 원데이 클래스",
    description:
      "마음에 필요한 한 문장부터 나만의 감성 굿즈까지. 메시지 기획부터 감성 이미지 제작, 오라클 카드 덱 디자인, 패키지와 굿즈 확장까지 배웁니다.",
    url: "https://www.jmschool.kr/oracle-goods",
    siteName: "자명스쿨",
    locale: "ko_KR",
    type: "website",
  },
};

// ─────────────────────────────────────────────────────────────
// [클래스 기본 설정 데이터]
// ─────────────────────────────────────────────────────────────
const CLASS_CONFIG = {
  category: "EMOTIONAL ORACLE CARDS & GOODS · ONE DAY CLASS",
  badge: "자명스쿨 감성 창작 원데이",
  titleMain: "감성 오라클 카드·",
  titleSub: "굿즈 제작",
  subtitle: "마음에 필요한 한 문장부터 나만의 감성 굿즈까지",
  coreCopy: "“나에게 건네는 따뜻한 한 문장이, 누군가의 하루를 밝혀주는 작은 작품이 됩니다.”",
  description:
    "지금의 나에게 가장 필요한 말은 무엇일까요? 용기가 필요한 순간, 마음이 흔들리는 날, 새로운 시작을 앞둔 시간. 자신에게 건네고 싶은 메시지를 발견하고 아름다운 이미지와 상징을 담은 카드로 표현해 보세요. AI를 활용한 메시지 기획부터 감성 이미지 제작, 오라클 카드 디자인, 카드 패키지와 다양한 굿즈 제작까지 경험하는 실전 감성 창작 클래스입니다.",
  meta: {
    format: "온라인 실습 원데이",
    duration: "세부 시간 추후 확정",
    schedule: "준비 중",
    price: "미정",
    prerequisite: "입문 가능 (디자인 경험 무관)",
  },
  tags: ["오라클카드", "굿즈제작", "감성브랜딩", "상징아트", "긍정확언"],
  ctaText: "개강 알림 신청",
};

export default function OracleGoodsPage() {
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
          SECTION 01. HERO (상단 소개 · 오라클 카드 & 굿즈)
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
                    "자기이해를 기반으로 한 마음 메시지 기획",
                    "긍정확언 및 자기성찰 카드 문구 제작",
                    "AI 감성 오라클 카드 이미지 생성",
                    "일관된 세계관과 카드 덱 디자인",
                    "카드 패키지 및 감성 굿즈 디자인",
                    "디지털 상품과 실물 굿즈로의 확장",
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

            {/* 우측 대표 이미지 슬롯 (오라클 카드 덱 + 패키지 + 굿즈) */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-[460px] bg-[#14100E] border-2 border-[#8E6D38]/30 rounded-2xl p-4 shadow-2xl text-left">
                {/* 상단 굿즈 바 */}
                <div className="flex items-center justify-between pb-3 border-b border-[#2A211B] text-xs text-[#A8988B]">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#C6A66B]"></span>
                    <span className="font-mono text-[11px] text-[#E0A96D]">ORACLE DECK & GOODS COLLECTION</span>
                  </div>
                  <span className="text-[10px] bg-[#2A211B] text-[#EDE6DC] px-2 py-0.5 rounded">3:4 CARDS</span>
                </div>

                {/* 대표 비주얼 슬롯 (카드 덱 + 굿즈 플레이스홀더) */}
                <div className="relative w-full aspect-video mt-3 rounded-xl overflow-hidden bg-gradient-to-br from-[#1C1512] via-[#2A1F1A] to-[#120E0C] border border-[#3A2D25] flex flex-col items-center justify-center text-center p-6 group">
                  <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#C6A66B_1px,transparent_1px)] [background-size:16px_16px]"></div>

                  {/* 카드 덱 & 굿즈 목업 시각화 */}
                  <div className="relative z-10 flex items-center justify-center gap-3 mb-3">
                    <div className="w-14 h-20 rounded-lg border-2 border-[#C6A66B]/60 bg-[#241A14] flex flex-col items-center justify-center shadow-lg -rotate-6">
                      <span className="text-sm">🃏</span>
                      <span className="text-[7px] text-[#C6A66B] mt-1 font-bold">CARD</span>
                    </div>
                    <div className="w-14 h-20 rounded-lg border-2 border-[#E0A96D] bg-[#2E2018] flex flex-col items-center justify-center shadow-xl z-10">
                      <span className="text-sm">✨</span>
                      <span className="text-[7px] text-[#E0A96D] mt-1 font-bold">DECK</span>
                    </div>
                    <div className="w-16 h-20 rounded-lg border-2 border-[#C6A66B]/60 bg-[#1F1814] flex flex-col items-center justify-center shadow-lg rotate-6">
                      <span className="text-sm">🎁</span>
                      <span className="text-[7px] text-[#C6A66B] mt-1 font-bold">GOODS</span>
                    </div>
                  </div>

                  <p className="relative z-10 text-xs font-semibold text-[#EDE6DC] mb-1">
                    마음의 문장 · 오라클 카드 덱 & 감성 굿즈 패키지
                  </p>
                  <p className="relative z-10 text-[11px] text-[#A8988B]">
                    Quiet Creation · Mindful Oracle Deck & Goods
                  </p>

                  <div className="mt-3 px-3 py-1 rounded-full bg-[#0D0B0A]/80 border border-[#C6A66B]/40 text-[10px] text-[#C6A66B]">
                    ✦ 추후 실제 카드 덱·굿즈 대표 이미지 슬롯
                  </div>
                </div>

                {/* 하단 정보 */}
                <div className="mt-4 pt-3 border-t border-[#2A211B] flex items-center justify-between text-[11px] text-[#A8988B]">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#8E6D38]/30 flex items-center justify-center text-[#C6A66B] font-serif">✦</span>
                    <span className="text-[#EDE6DC] font-medium">자명스쿨 감성 굿즈 랩</span>
                  </div>
                  <span className="text-[10px] text-[#7C6656]">패키지 & 목업 디자인</span>
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
              마음에서 시작된 메시지가 아름다운 창작 상품이 됩니다.
            </h2>
            <p className="text-sm md:text-base text-[#A8988B] break-keep">
              나만의 감성과 이야기를 담은 카드부터 일상에서 활용할 수 있는 굿즈까지 하나의 창작 컬렉션으로 연결합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* 01. 나를 위한 마음 메시지 카드 */}
            <div className="bg-[#14100E] border border-[#2A211B] rounded-2xl overflow-hidden hover:border-[#C6A66B]/50 transition-all flex flex-col">
              <div className="relative w-full aspect-video bg-gradient-to-tr from-[#241A14] via-[#38261A] to-[#1C1410] border-b border-[#2A211B] flex flex-col items-center justify-center p-4 text-center">
                <span className="text-3xl mb-2">💛</span>
                <span className="text-xs font-bold text-[#E0A96D] tracking-wider">01. AFFIRMATION CARDS</span>
                <span className="text-[11px] text-[#A8988B] mt-1">자기수용과 긍정 대화의 한 문장</span>
                <div className="mt-3 text-[10px] bg-[#0D0B0A]/80 text-[#C6A66B] px-2.5 py-0.5 rounded-full border border-[#C6A66B]/30">
                  [ 16:9 확언 카드 결과물 슬롯 ]
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-[#EDE6DC] mb-2">
                    01. 나를 위한 마음 메시지 카드
                  </h3>
                  <p className="text-xs sm:text-sm text-[#A8988B] leading-relaxed break-keep">
                    자기수용, 용기, 감사, 긍정적인 자기대화를 주제로 나에게 필요한 메시지를 담은 카드입니다.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#2A211B] flex flex-wrap gap-1.5 text-[11px] text-[#C6A66B]">
                  <span>#긍정확언</span>
                  <span>#자기수용</span>
                  <span>#마음메시지</span>
                </div>
              </div>
            </div>

            {/* 02. 나만의 감성 오라클 카드 덱 */}
            <div className="bg-[#14100E] border border-[#2A211B] rounded-2xl overflow-hidden hover:border-[#C6A66B]/50 transition-all flex flex-col">
              <div className="relative w-full aspect-video bg-gradient-to-tr from-[#1E1929] via-[#2A213D] to-[#120F1C] border-b border-[#2A211B] flex flex-col items-center justify-center p-4 text-center">
                <span className="text-3xl mb-2">🃏</span>
                <span className="text-xs font-bold text-[#BFA4E6] tracking-wider">02. MY ORACLE CARD DECK</span>
                <span className="text-[11px] text-[#A8988B] mt-1">상징과 서사가 있는 통일된 카드 덱</span>
                <div className="mt-3 text-[10px] bg-[#0D0B0A]/80 text-[#BFA4E6] px-2.5 py-0.5 rounded-full border border-[#BFA4E6]/30">
                  [ 16:9 오라클 카드 덱 슬롯 ]
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-[#EDE6DC] mb-2">
                    02. 나만의 감성 오라클 카드 덱
                  </h3>
                  <p className="text-xs sm:text-sm text-[#A8988B] leading-relaxed break-keep">
                    상징적인 이미지와 의미 있는 문장을 결합하여 일관된 세계관을 가진 감성 카드 컬렉션을 제작합니다.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#2A211B] flex flex-wrap gap-1.5 text-[11px] text-[#C6A66B]">
                  <span>#오라클카드</span>
                  <span>#상징아트</span>
                  <span>#카드디자인</span>
                </div>
              </div>
            </div>

            {/* 03. 마음을 전하는 감성 굿즈 */}
            <div className="bg-[#14100E] border border-[#2A211B] rounded-2xl overflow-hidden hover:border-[#C6A66B]/50 transition-all flex flex-col">
              <div className="relative w-full aspect-video bg-gradient-to-tr from-[#16211C] via-[#20332B] to-[#0E1713] border-b border-[#2A211B] flex flex-col items-center justify-center p-4 text-center">
                <span className="text-3xl mb-2">🎁</span>
                <span className="text-xs font-bold text-[#89C7A4] tracking-wider">03. MINDFUL CREATIVE GOODS</span>
                <span className="text-[11px] text-[#A8988B] mt-1">엽서, 노트, 포스터, 배경화면</span>
                <div className="mt-3 text-[10px] bg-[#0D0B0A]/80 text-[#89C7A4] px-2.5 py-0.5 rounded-full border border-[#89C7A4]/30">
                  [ 16:9 감성 굿즈 목업 슬롯 ]
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-[#EDE6DC] mb-2">
                    03. 마음을 전하는 감성 굿즈
                  </h3>
                  <p className="text-xs sm:text-sm text-[#A8988B] leading-relaxed break-keep">
                    카드에 담긴 이미지와 메시지를 엽서, 노트, 배경화면, 포스터 등 다양한 창작 굿즈로 확장합니다.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#2A211B] flex flex-wrap gap-1.5 text-[11px] text-[#C6A66B]">
                  <span>#감성굿즈</span>
                  <span>#디지털상품</span>
                  <span>#굿즈디자인</span>
                </div>
              </div>
            </div>
          </div>

          <p className="text-center text-xs text-[#7C6656] mt-8">
            ※ 제작 예시 이미지는 실제 수강생 작품으로 오인되지 않도록 표시합니다.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 03. WHY EMOTIONAL ORACLE (왜 감성 오라클인가)
         ═══════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 border-b border-[#2A211B] bg-[#120E0C]">
        <div className="site-container">
          <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16 space-y-4">
            <span className="text-xs font-bold tracking-widest text-[#C6A66B] uppercase">
              WHY EMOTIONAL ORACLE
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#EDE6DC] break-keep">
              오늘의 나에게 어떤 말을 건네고 싶으신가요?
            </h2>
            <div className="space-y-2 text-sm sm:text-base text-[#A8988B] font-light leading-relaxed break-keep pt-2">
              <p>
                우리는 다른 사람에게는 따뜻한 말을 건네면서도 정작 자신에게는 엄격한 말을 할 때가 많습니다.
              </p>
              <p>
                자신에게 필요한 메시지를 발견하고 그것을 이미지와 문장으로 표현하는 과정은 나의 마음을 돌아보는 하나의 창작 활동이 될 수 있습니다.
              </p>
              <p className="text-white/90">
                감성 오라클 카드는 미래를 예측하는 도구가 아니라, 마음을 돌아보고 자신에게 질문을 건네며 새로운 관점을 발견할 수 있도록 돕는 자기성찰의 매개체입니다.
              </p>
              <p className="text-[#C6A66B] font-medium pt-1">
                AI를 활용하여 나만의 메시지와 감성을 담은 카드, 그리고 그 마음을 일상에서 만날 수 있는 굿즈를 제작합니다.
              </p>
            </div>
          </div>

          {/* 공감 카드 5개 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              "마음공부를 일상에서 실천할 수 있는 방법을 찾고 있다.",
              "나만의 긍정확언 카드와 감성 콘텐츠를 만들고 싶다.",
              "AI 이미지를 활용해 실제 창작 상품을 제작하고 싶다.",
              "일관된 콘셉트의 카드 디자인이 어렵게 느껴진다.",
              "자신의 메시지와 감성을 담은 굿즈 브랜드를 만들고 싶다.",
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
          SECTION 04. MY ORACLE WORLD (카드 세계관 기획)
         ═══════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 border-b border-[#2A211B] bg-[#0D0B0A]">
        <div className="site-container">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold tracking-widest text-[#C6A66B] uppercase">
              MY ORACLE WORLD
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#EDE6DC] mt-2 mb-4 break-keep">
              좋은 카드에는 아름다운 이미지보다 먼저 마음의 이야기가 있습니다.
            </h2>
            <p className="text-sm md:text-base text-[#A8988B] break-keep">
              카드 디자인을 시작하기 전에 누구에게 어떤 메시지를 전달하고 싶은지, 나만의 카드가 가진 의미와 세계관을 설계합니다.
            </p>
          </div>

          {/* 오라클 카드 기획 5대 질문 */}
          <div className="mb-14">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#C6A66B] mb-6 text-center">
              오라클 카드 기획 5대 질문
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {[
                {
                  q: "Q1. 지금 나에게 가장 필요한 메시지는 무엇인가?",
                  desc: "자기수용, 위로, 용기, 감사, 풍요, 새로운 시작 등 마음의 주제 탐색",
                },
                {
                  q: "Q2. 나의 카드를 사용하는 사람은 누구인가?",
                  desc: "나 자신, 마음공부 입문자, 자기계발에 관심 있는 사람 등 대상 설정",
                },
                {
                  q: "Q3. 어떤 상징으로 메시지를 표현할 것인가?",
                  desc: "꽃, 달, 태양, 별, 자연, 빛, 색채 등 상징적 이미지 선정",
                },
                {
                  q: "Q4. 나만의 카드 스타일은 무엇인가?",
                  desc: "동양적 감성, 보태니컬 아트, 수채화, 몽환적 일러스트, 미니멀 디자인 등 시각적 방향 설정",
                },
                {
                  q: "Q5. 나의 카드가 어떤 경험을 선물하기를 원하는가?",
                  desc: "아침의 자기대화, 하루의 성찰, 감사 기록, 새로운 행동의 시작 등 활용 목적 기획",
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

          {/* 카드 콘셉트 예시 3종 */}
          <div className="w-full">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#C6A66B] mb-6 text-center">
              카드 콘셉트 예시 3종
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  concept: "CONCEPT 01",
                  title: "나를 사랑하는 문장",
                  desc: "자기수용과 자존감, 자신에게 건네는 따뜻한 메시지를 담은 카드 컬렉션",
                },
                {
                  concept: "CONCEPT 02",
                  title: "풍요를 여는 마음",
                  desc: "감사와 가능성, 성장에 대한 믿음과 실천을 주제로 구성한 긍정확언 카드",
                },
                {
                  concept: "CONCEPT 03",
                  title: "내면의 빛",
                  desc: "자기발견과 삶의 방향, 새로운 시작을 상징적인 이미지로 표현한 감성 오라클 카드",
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
                “AI는 아름다운 이미지를 만들어 주지만, 그 안에 어떤 메시지를 담을지는 내가 결정합니다.”
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 05. THREE CARD STYLES (세 가지 스타일)
         ═══════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 border-b border-[#2A211B] bg-[#120E0C]">
        <div className="site-container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold tracking-widest text-[#C6A66B] uppercase">
              THREE CARD STYLES
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#EDE6DC] mt-2 mb-4 break-keep">
              마음을 표현하는 세 가지 감성 카드 스타일
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* TYPE 01 */}
            <div className="bg-[#181310] border border-[#2E221B] rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <div className="aspect-[3/4] w-36 mx-auto rounded-xl bg-gradient-to-tr from-[#241A14] to-[#120E0C] border border-[#3A2D25] flex flex-col items-center justify-center p-3 text-center mb-5">
                  <span className="text-2xl mb-1">💛</span>
                  <span className="text-[10px] text-[#C6A66B]">[ 긍정확언 카드 슬롯 ]</span>
                </div>
                <span className="text-xs font-bold text-[#8E6D38] uppercase tracking-wider block mb-1">
                  TYPE 01
                </span>
                <h3 className="text-lg font-bold text-[#EDE6DC] mb-4">긍정확언 카드</h3>
                <ul className="space-y-2 text-xs sm:text-sm text-[#A8988B]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#C6A66B]">▪</span>
                    <span>긍정적인 자기대화 문장 제작</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#C6A66B]">▪</span>
                    <span>감사와 자기수용 메시지 구성</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#C6A66B]">▪</span>
                    <span>일상에서 활용할 수 있는 짧은 문장</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#C6A66B]">▪</span>
                    <span>아침 루틴 및 마음 기록과 연결</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* TYPE 02 */}
            <div className="bg-[#181310] border border-[#2E221B] rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <div className="aspect-[3/4] w-36 mx-auto rounded-xl bg-gradient-to-tr from-[#1E1929] to-[#120F1C] border border-[#3A2D25] flex flex-col items-center justify-center p-3 text-center mb-5">
                  <span className="text-2xl mb-1">🌸</span>
                  <span className="text-[10px] text-[#BFA4E6]">[ 상징형 오라클 슬롯 ]</span>
                </div>
                <span className="text-xs font-bold text-[#8E6D38] uppercase tracking-wider block mb-1">
                  TYPE 02
                </span>
                <h3 className="text-lg font-bold text-[#EDE6DC] mb-4">상징형 오라클 카드</h3>
                <ul className="space-y-2 text-xs sm:text-sm text-[#A8988B]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#C6A66B]">▪</span>
                    <span>꽃, 자연, 빛과 같은 상징적 이미지 활용</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#C6A66B]">▪</span>
                    <span>카드별 주제와 의미 설계</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#C6A66B]">▪</span>
                    <span>상징과 감성 메시지 연결</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#C6A66B]">▪</span>
                    <span>자기성찰을 위한 질문 구성</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* TYPE 03 */}
            <div className="bg-[#181310] border border-[#2E221B] rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <div className="aspect-[3/4] w-36 mx-auto rounded-xl bg-gradient-to-tr from-[#16211C] to-[#0E1713] border border-[#3A2D25] flex flex-col items-center justify-center p-3 text-center mb-5">
                  <span className="text-2xl mb-1">🌱</span>
                  <span className="text-[10px] text-[#89C7A4]">[ 마음 실천 카드 슬롯 ]</span>
                </div>
                <span className="text-xs font-bold text-[#8E6D38] uppercase tracking-wider block mb-1">
                  TYPE 03
                </span>
                <h3 className="text-lg font-bold text-[#EDE6DC] mb-4">마음 실천 카드</h3>
                <ul className="space-y-2 text-xs sm:text-sm text-[#A8988B]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#C6A66B]">▪</span>
                    <span>하루 한 가지 실천 메시지</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#C6A66B]">▪</span>
                    <span>감사와 자기탐구 질문</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#C6A66B]">▪</span>
                    <span>작은 행동으로 연결되는 미션 카드</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#C6A66B]">▪</span>
                    <span>마음공부 챌린지와 커뮤니티 활용</span>
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
              감성 이미지를 만드는 사람에서, <br className="hidden sm:inline" />
              나만의 메시지와 상품을 창조하는 사람으로
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
                  before: "다른 사람이 만든 확언 문장을 사용한다.",
                  after: "나만의 철학과 메시지를 담은 문장을 기획한다.",
                },
                {
                  before: "AI로 개별 이미지만 제작한다.",
                  after: "일관된 세계관의 카드 시리즈를 제작한다.",
                },
                {
                  before: "카드마다 색상과 디자인이 다르다.",
                  after: "통일된 카드 덱과 디자인 시스템을 구성한다.",
                },
                {
                  before: "만든 이미지를 저장하는 것으로 끝난다.",
                  after: "카드, 엽서, 노트 등 감성 굿즈로 확장한다.",
                },
                {
                  before: "상품 제작과 활용 방법이 막막하다.",
                  after: "디지털 상품과 실물 굿즈의 제작 과정을 이해한다.",
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
          SECTION 07. CREATE YOUR OWN ORACLE (카드 제작 기술)
         ═══════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 border-b border-[#2A211B] bg-[#120E0C]">
        <div className="site-container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold tracking-widest text-[#C6A66B] uppercase">
              CREATIVE METHOD
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#EDE6DC] mt-2 mb-4 break-keep">
              내 마음을 담은 문장과 상징을 하나의 카드로 표현합니다.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { num: "01", title: "카드의 주제와 핵심 메시지 설정" },
              { num: "02", title: "AI 활용 긍정확언 및 성찰 문구 제작" },
              { num: "03", title: "카드별 상징과 이미지 콘셉트 기획" },
              { num: "04", title: "색채·화풍·질감·구도 설계" },
              { num: "05", title: "AI 감성 카드 이미지 생성" },
              { num: "06", title: "카드 앞면과 뒷면 디자인" },
              { num: "07", title: "카드 시리즈의 스타일 일관성 유지" },
              { num: "08", title: "카드 이미지 및 인쇄용 파일 저장" },
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
          SECTION 08. AI ORACLE CARD PROMPT SKILL
         ═══════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 border-b border-[#2A211B] bg-[#0D0B0A]">
        <div className="site-container">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold tracking-widest text-[#C6A66B] uppercase">
              STRUCTURED PROMPT SKILL
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#EDE6DC] mt-2 mb-4 break-keep">
              마음속의 메시지를 아름다운 카드 디자인으로 바꾸는 방법
            </h2>
            <p className="text-sm md:text-base text-[#A8988B] break-keep">
              자명스쿨에서 제공할 예정인 오라클 카드 구조화 프롬프트 스킬을 활용하여 간단한 아이디어를 카드 제작에 적합한 프롬프트로 발전시킵니다.
            </p>
          </div>

          <div className="w-full space-y-6">
            {/* STEP 01 */}
            <div className="p-6 rounded-2xl bg-[#14100E] border border-[#2A211B]">
              <span className="text-xs font-bold text-[#8E6D38] uppercase tracking-wider block mb-2">
                STEP 01. 나의 메시지 입력
              </span>
              <div className="p-4 rounded-xl bg-[#1C1512] border border-[#2E221B] text-sm text-[#E0A96D] italic font-serif">
                “새로운 시작을 두려워하는 사람에게 용기를 전하는 카드를 만들고 싶어요.”
              </div>
            </div>

            {/* STEP 02 */}
            <div className="p-6 rounded-2xl bg-[#14100E] border border-[#2A211B]">
              <span className="text-xs font-bold text-[#8E6D38] uppercase tracking-wider block mb-4">
                STEP 02. 카드 제작 프롬프트 스킬의 구조화
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs sm:text-sm">
                {[
                  "카드의 핵심 주제",
                  "전달하고 싶은 메시지",
                  "카드별 제목과 긍정확언",
                  "자기성찰 질문",
                  "상징적 오브제",
                  "예술적 화풍",
                  "색채 팔레트",
                  "빛과 질감",
                  "카드 시리즈 디자인 일관성",
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
                AI 이미지 생성 도구에 활용할 수 있는 구조화된 카드 제작 프롬프트와 메시지 초안 완성
              </h4>
              <p className="text-xs text-[#A8988B]">
                막연한 상상을 직관적인 상징 언어로 바꾸어 고품격 카드 비주얼을 도출합니다.
              </p>
            </div>

            <div className="text-center pt-2">
              <p className="text-sm sm:text-base font-serif italic text-[#C6A66B]">
                “마음에 필요한 한 문장을, 오래 간직하고 싶은 하나의 작품으로.”
              </p>
              <p className="text-[11px] text-[#7C6656] mt-2">
                ※ 해당 스킬은 제공 예정이며 최종 기능과 제공 형식은 개강 전 확정합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 09. ORACLE CARD COLLECTION (카드 컬렉션)
         ═══════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 border-b border-[#2A211B] bg-[#120E0C]">
        <div className="site-container">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold tracking-widest text-[#C6A66B] uppercase">
              ORACLE CARD COLLECTION
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#EDE6DC] mt-2 mb-4 break-keep">
              한 장의 카드에서, 하나의 감성 오라클 카드 덱으로
            </h2>
            <p className="text-sm md:text-base text-[#A8988B] break-keep">
              단순히 예쁜 카드 한 장을 만드는 것이 아니라 일관된 주제와 메시지가 담긴 카드 컬렉션을 기획합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* 좌측: 실습 내용 7개 */}
            <div className="lg:col-span-6 space-y-2.5">
              {[
                "01. 카드 덱의 전체 주제와 이름 설정",
                "02. 카드별 핵심 키워드와 메시지 구성",
                "03. 카드 이미지 스타일 통일",
                "04. 카드 앞면과 뒷면 디자인",
                "05. 카드 제목 및 문구 배치",
                "06. 카드 시리즈의 색상과 레이아웃 통일",
                "07. 카드 패키지 및 설명서 구성",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-[#181310] border border-[#2E221B]">
                  <span className="w-6 h-6 rounded-full bg-[#8E6D38]/20 text-[#C6A66B] text-xs font-bold flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  <span className="text-xs sm:text-sm text-[#EDE6DC] font-medium">{item.substring(4)}</span>
                </div>
              ))}
            </div>

            {/* 우측: 4개 이미지 프리뷰 슬롯 (앞면, 뒷면, 덱 컬렉션, 패키지) */}
            <div className="lg:col-span-6">
              <div className="p-4 rounded-2xl bg-[#14100E] border-2 border-[#8E6D38]/30 shadow-2xl">
                <div className="text-xs text-[#A8988B] mb-3 flex items-center justify-between pb-2 border-b border-[#2A211B]">
                  <span className="font-bold text-[#E0A96D]">CARD DECK PREVIEW</span>
                  <span className="text-[10px]">결과물 프리뷰</span>
                </div>
                <div className="grid grid-cols-2 gap-3 aspect-square">
                  {[
                    { title: "카드 앞면 디자인", tag: "Front Art" },
                    { title: "카드 뒷면 디자인", tag: "Back Pattern" },
                    { title: "감성 오라클 카드 컬렉션", tag: "Full Deck" },
                    { title: "카드 패키지 및 설명서", tag: "Box & Guide" },
                  ].map((p, idx) => (
                    <div key={idx} className="rounded-xl bg-[#1F1814] border border-[#3A2D25] p-3 flex flex-col items-center justify-center text-center relative overflow-hidden group">
                      <span className="text-2xl mb-1">🃏</span>
                      <span className="text-[11px] font-bold text-[#EDE6DC] mb-1">{p.title}</span>
                      <span className="text-[9px] text-[#C6A66B]">{p.tag} 슬롯</span>
                    </div>
                  ))}
                </div>
                <p className="text-[11px] text-center text-[#7C6656] mt-3">
                  ✦ 일관된 세계관으로 완성되는 카드 덱 세트
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 10. FROM CARDS TO GOODS (굿즈 확장 6종)
         ═══════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 border-b border-[#2A211B] bg-[#0D0B0A]">
        <div className="site-container">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold tracking-widest text-[#C6A66B] uppercase">
              FROM CARDS TO GOODS
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#EDE6DC] mt-2 mb-4 break-keep">
              카드에 담긴 감성을 일상 속 굿즈로 확장합니다.
            </h2>
            <p className="text-sm md:text-base text-[#A8988B] break-keep">
              하나의 이미지와 메시지를 여러 형태의 창작 상품으로 발전시키는 방법을 배웁니다.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                num: "01",
                title: "감성 엽서",
                desc: "마음을 전하는 메시지와 일러스트를 담은 엽서 디자인",
                icon: "💌",
              },
              {
                num: "02",
                title: "확언 포스터",
                desc: "일상 공간에서 자신의 마음을 돌아볼 수 있는 감성 포스터",
                icon: "🖼️",
              },
              {
                num: "03",
                title: "마인드 저널",
                desc: "자기탐구 질문과 긍정확언을 결합한 기록용 노트",
                icon: "📓",
              },
              {
                num: "04",
                title: "디지털 배경화면",
                desc: "스마트폰과 태블릿에서 활용하는 마음 메시지 배경화면",
                icon: "📱",
              },
              {
                num: "05",
                title: "감성 생활 굿즈",
                desc: "머그컵, 에코백, 스티커 등 이미지와 메시지를 활용한 굿즈 디자인",
                icon: "☕",
              },
              {
                num: "06",
                title: "마음 선물 세트",
                desc: "오라클 카드, 엽서, 노트 등을 하나의 콘셉트로 구성한 감성 패키지",
                icon: "🎁",
              },
            ].map((goods, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-[#14100E] border border-[#2A211B] flex flex-col justify-between">
                <div>
                  {/* 목업 이미지 슬롯 */}
                  <div className="aspect-video w-full rounded-xl bg-gradient-to-tr from-[#1E1612] to-[#120E0C] border border-[#3A2D25] flex flex-col items-center justify-center p-3 text-center mb-4">
                    <span className="text-2xl mb-1">{goods.icon}</span>
                    <span className="text-[10px] text-[#C6A66B]">[ {goods.title} 목업 슬롯 ]</span>
                  </div>
                  <span className="text-xs font-bold text-[#8E6D38] font-mono block mb-1">
                    {goods.num}
                  </span>
                  <h3 className="text-base font-bold text-[#EDE6DC] mb-2">{goods.title}</h3>
                  <p className="text-xs text-[#A8988B] leading-relaxed break-keep">
                    {goods.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 11. GOODS DESIGN & PRODUCTION (제작 가이드)
         ═══════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 border-b border-[#2A211B] bg-[#120E0C]">
        <div className="site-container">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold tracking-widest text-[#C6A66B] uppercase">
              DESIGN & PRODUCTION
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#EDE6DC] mt-2 mb-4 break-keep">
              디지털 디자인을 실제 굿즈로 연결하는 제작 과정
            </h2>
            <p className="text-sm md:text-base text-[#A8988B] break-keep">
              AI로 제작한 이미지를 단순한 이미지 파일이 아닌 활용 가능한 디자인 결과물로 정리합니다.
            </p>
          </div>

          <div className="w-full space-y-8">
            {/* 제작 과정 8단계 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {[
                "01. 상품별 규격과 이미지 비율",
                "02. 인쇄용 해상도 및 파일 형식",
                "03. 카드와 굿즈 디자인 템플릿",
                "04. 재단선·안전여백·색상 설정",
                "05. 상품별 목업 이미지 제작",
                "06. 주문 제작 및 소량 제작 방식",
                "07. 디지털 다운로드 상품 제작",
                "08. 저작권과 상업적 활용 조건",
              ].map((step, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-[#181310] border border-[#2E221B] text-center">
                  <span className="text-xs font-semibold text-[#EDE6DC] block leading-snug">
                    {step}
                  </span>
                </div>
              ))}
            </div>

            {/* PRACTICAL LEARNING GUIDE 박스 */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#14100E] border border-[#8E6D38]/30 space-y-3 text-xs sm:text-sm text-[#A8988B] leading-relaxed break-keep">
              <span className="text-xs font-bold text-[#E0A96D] uppercase tracking-wider block">
                PRACTICAL LEARNING GUIDE
              </span>
              <p className="text-white/90">
                원데이 수업에서는 소규모 카드 시리즈와 대표 굿즈 디자인 샘플 제작을 목표로 합니다.
              </p>
              <p>
                실제 카드 인쇄, 실물 굿즈 주문 제작 및 대규모 카드 덱 제작은 수업 이후 개인의 필요에 따라 확장할 수 있도록 안내합니다.
              </p>
              <p className="text-[11px] text-[#7C6656] pt-1">
                ※ 실물 제작비와 인쇄비는 별도이며, 수업에서 사용하는 도구와 제작 플랫폼은 개강 전 안내합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 12. CREATIVE GOODS BRAND (브랜드 확장)
         ═══════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 border-b border-[#2A211B] bg-[#0D0B0A]">
        <div className="site-container">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold tracking-widest text-[#C6A66B] uppercase">
              CREATIVE GOODS BRAND
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#EDE6DC] mt-2 mb-4 break-keep">
              나만의 메시지와 감성이 하나의 창작 브랜드가 됩니다.
            </h2>
            <p className="text-sm md:text-base text-[#A8988B] break-keep">
              감성 오라클 카드와 굿즈는 개인적인 마음공부에서 시작하여 다양한 콘텐츠와 창작 활동으로 발전할 수 있습니다.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "개인 마음공부 및 자기성찰 카드", desc: "나만을 위한 아침 확언과 저녁 성찰 루틴의 도구" },
              { title: "SNS 긍정확언 콘텐츠", desc: "인스타그램, 블로그 등에서 감성 메시지 연재 및 소통" },
              { title: "마음공부 커뮤니티 및 챌린지", desc: "모임, 코칭, 독서 모임에서 활용할 수 있는 활동 도구" },
              { title: "디지털 카드 및 배경화면 상품", desc: "노션 템플릿, 디지털 굿즈 판매 플랫폼 입점" },
              { title: "소량 제작 감성 굿즈", desc: "텀블벅, 아이디어스 등 크라우드 펀딩과 소량 굿즈 제작" },
              { title: "나만의 감성 창작 브랜드", desc: "독창적인 메시지와 철학을 담은 1인 브랜드 런칭" },
            ].map((card, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-[#14100E] border border-[#2A211B] flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold text-[#C6A66B] font-mono block mb-2">
                    0{idx + 1}
                  </span>
                  <h3 className="text-base font-bold text-[#EDE6DC] mb-2">{card.title}</h3>
                  <p className="text-xs text-[#A8988B] leading-relaxed break-keep">
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto mt-10 text-center space-y-2">
            <p className="text-sm sm:text-base font-medium text-[#C6A66B]">
              “자신에게 건넨 따뜻한 메시지가, 세상과 나누는 새로운 가치가 됩니다.”
            </p>
            <p className="text-[11px] text-[#7C6656]">
              ※ 상품 제작과 판매는 생성 도구의 이용약관, 상업적 활용 조건 및 관련 권리를 확인한 후 진행해야 합니다. 특정 판매 성과나 수익을 보장하지 않습니다.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 13. CURRICULUM (상세 커리큘럼 6단계)
         ═══════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 border-b border-[#2A211B] bg-[#120E0C]">
        <div className="site-container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold tracking-widest text-[#C6A66B] uppercase">
              CURRICULUM
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#EDE6DC] mt-2 mb-4 break-keep">
              마음의 메시지에서 오라클 카드, 감성 굿즈까지
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                part: "PART 01",
                title: "마음 메시지와 카드 콘셉트 기획",
                desc: "자기탐구 · 마음 키워드 선정 · 카드 주제와 세계관 설정",
              },
              {
                part: "PART 02",
                title: "AI 긍정확언 및 오라클 메시지 제작",
                desc: "카드 제목 · 핵심 메시지 · 자기성찰 질문 · 카드 설명문 작성",
              },
              {
                part: "PART 03",
                title: "AI 감성 카드 이미지 제작",
                desc: "상징적 이미지 기획 · 화풍 및 컬러 설계 · 구조화 프롬프트 활용",
              },
              {
                part: "PART 04",
                title: "카드 덱 및 패키지 디자인",
                desc: "카드 앞면과 뒷면 · 레이아웃 구성 · 스타일 통일 · 패키지 디자인",
              },
              {
                part: "PART 05",
                title: "감성 굿즈 및 목업 제작",
                desc: "엽서 · 포스터 · 노트 · 배경화면 · 대표 굿즈 목업 제작",
              },
              {
                part: "PART 06",
                title: "디지털 상품과 실물 제작 활용",
                desc: "인쇄용 파일 준비 · 제작 방식 이해 · 디지털 상품 구성 · 브랜드 확장",
              },
            ].map((c, idx) => (
              <div
                key={idx}
                className="bg-[#181310] border border-[#2E221B] p-6 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-[#C6A66B]/40 transition-colors"
              >
                <div className="space-y-1">
                  <span className="text-xs font-bold text-[#8E6D38] uppercase tracking-wider block">
                    {c.part}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-[#EDE6DC]">{c.title}</h3>
                  <p className="text-xs sm:text-sm text-[#A8988B]">{c.desc}</p>
                </div>
                <div className="text-xs px-3 py-1.5 rounded-lg bg-[#14100E] border border-[#2A211B] text-[#C6A66B] self-start sm:self-center shrink-0">
                  실습 중심
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 14. CLASS KIT & BENEFITS (제공 예정 자료)
         ═══════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 border-b border-[#2A211B] bg-[#0D0B0A]">
        <div className="site-container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold tracking-widest text-[#C6A66B] uppercase">
              CLASS KIT & BENEFITS
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#EDE6DC] mt-2 mb-4 break-keep">
              수업 이후에도 나만의 감성 카드와 굿즈를 만들 수 있도록
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { num: "01", title: "AI 오라클 카드 구조화 프롬프트 스킬" },
              { num: "02", title: "마음 메시지 및 카드 콘셉트 기획 워크시트" },
              { num: "03", title: "긍정확언 및 자기성찰 질문 작성 가이드" },
              { num: "04", title: "감성 오라클 카드 디자인 템플릿" },
              { num: "05", title: "카드 패키지 및 감성 굿즈 목업 템플릿" },
              { num: "06", title: "카드 인쇄 및 굿즈 제작 활용 가이드" },
            ].map((b, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-[#14100E] border border-[#2A211B] flex items-start gap-3.5">
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
          SECTION 15. ONE DAY DELIVERABLES (결과물 6가지)
         ═══════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 border-b border-[#2A211B] bg-[#120E0C]">
        <div className="site-container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold tracking-widest text-[#C6A66B] uppercase">
              DELIVERABLES
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#EDE6DC] mt-2 mb-4 break-keep">
              단 하루, 내 마음을 담은 감성 창작 컬렉션의 시작
            </h2>
            <p className="text-sm text-[#A8988B]">
              수업에서 완성을 목표로 하는 결과물 6가지
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "01. 나만의 오라클 카드 콘셉트 기획안",
              "02. 긍정확언 및 자기성찰 메시지 초안",
              "03. 소규모 감성 오라클 카드 시리즈",
              "04. 카드 앞면 및 뒷면 디자인",
              "05. 카드 패키지 목업",
              "06. 대표 감성 굿즈 디자인 샘플",
            ].map((item, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-[#181310] border border-[#2E221B] text-center flex flex-col justify-center">
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
          SECTION 16. RECOMMENDED FOR (추천 수강생)
         ═══════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 border-b border-[#2A211B] bg-[#0D0B0A]">
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
              "긍정확언과 자기성찰 카드를 직접 만들고 싶은 분",
              "AI를 활용하여 감성적인 카드와 굿즈를 제작하고 싶은 분",
              "자신만의 철학과 메시지가 담긴 창작 상품을 만들고 싶은 분",
              "마음공부 커뮤니티 및 교육용 콘텐츠가 필요한 분",
              "소규모 감성 굿즈 브랜드를 기획하고 싶은 분",
              "AI 창작을 디지털 상품과 새로운 가치로 연결하고 싶은 분",
            ].map((text, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-[#14100E] border border-[#2A211B] flex items-center gap-3">
                <span className="text-[#C6A66B] font-bold">✓</span>
                <p className="text-xs sm:text-sm text-[#EDE6DC] font-medium break-keep">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 17. FAQ (자주 묻는 질문 7문항)
         ═══════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 border-b border-[#2A211B] bg-[#120E0C]">
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
                q: "디자인 경험이 없어도 수강할 수 있나요?",
                a: "네. AI 이미지 생성과 디자인 템플릿 활용을 중심으로 단계별 실습을 진행할 예정입니다.",
              },
              {
                q: "타로나 오라클 카드에 대한 전문 지식이 필요한가요?",
                a: "아닙니다. 본 과정은 점술이나 미래 예측이 아닌 자기이해, 긍정확언, 자기성찰을 위한 감성 카드 제작 과정입니다.",
              },
              {
                q: "나만의 카드 메시지와 이미지를 직접 만들 수 있나요?",
                a: "네. 자신의 주제와 가치관에 맞는 문장을 기획하고 AI를 활용하여 카드 이미지를 제작하는 방법을 배웁니다.",
              },
              {
                q: "하루 만에 전체 오라클 카드 덱을 완성하나요?",
                a: "원데이에서는 소규모 카드 시리즈와 제작 방식의 습득을 목표로 합니다. 전체 카드 덱은 수업 이후 확장할 수 있도록 안내합니다.",
              },
              {
                q: "실제 굿즈도 제작할 수 있나요?",
                a: "수업에서는 굿즈 디자인과 목업 제작, 인쇄 및 주문 제작 방법을 다룹니다. 실제 실물 제작과 배송 비용은 별도입니다.",
              },
              {
                q: "만든 카드와 굿즈를 판매할 수 있나요?",
                a: "상품화에 필요한 기본적인 제작 방법을 배웁니다. 실제 판매 시에는 사용한 이미지, 폰트, AI 도구 등의 상업적 이용 조건과 관련 권리를 확인해야 합니다.",
              },
              {
                q: "유료 AI 도구가 필요한가요?",
                a: "실습에 필요한 도구와 무료·유료 플랜의 조건은 개강 전 안내합니다.",
              },
            ].map((faq, idx) => (
              <div
                key={idx}
                className="bg-[#181310] border border-[#2E221B] p-5 sm:p-6 rounded-2xl"
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
          SECTION 18. RESERVATION (FINAL CTA)
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
              나에게 건넨 한 문장, <br className="hidden sm:inline" />
              세상에 전하는 하나의 작품.
            </h2>
            <p className="text-sm sm:text-base text-[#A8988B] mb-8 break-keep">
              마음에 필요한 메시지를 발견하고, AI로 아름답게 표현하고, 나만의 카드와 감성 굿즈로 완성하는 시간.
              <br className="hidden sm:inline" />
              마음에서 시작하는 AI, 자명스쿨에서 당신만의 감성 창작 여정을 시작해 보세요.
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
          SECTION 19. 환불 및 취소 규정 공통 섹션
         ─────────────────────────────────────────────── */}
      <CourseRefundPolicySection />

      {/* ───────────────────────────────────────────────
          모바일 하단 고정 CTA 바
         ─────────────────────────────────────────────── */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0D0B0A]/95 backdrop-blur-md border-t border-[#2A211B] p-3 px-4 flex items-center justify-between">
        <div>
          <span className="text-[10px] text-[#A8988B] block">감성 오라클 카드·굿즈 제작</span>
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
