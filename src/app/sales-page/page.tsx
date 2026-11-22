import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import CourseRefundPolicySection from "@/components/CourseRefundPolicySection";

export const metadata: Metadata = {
  title: "AI 브랜드 상품 상세페이지 제작 | 구매 설득 기획부터 자동 제작까지 · 자명스쿨",
  description:
    "예쁜 상세페이지를 넘어, 구매 이유를 설계하다. 소비자 심리 기반 기획부터 제품컷·GIF·영상 소스 제작, 템플릿 배치 및 AI 자동화 스킬까지 하루 만에 배우는 실전 원데이 클래스입니다.",
  alternates: {
    canonical: "https://www.jmschool.kr/sales-page",
  },
  openGraph: {
    title: "AI 브랜드 상품 상세페이지 제작 | 자명스쿨 원데이 클래스",
    description:
      "고객의 마음을 읽는 기획부터 AI 자동 제작까지. 디자인을 넘어 기획 + 비주얼 제작 + 템플릿 배치 + AI 자동화로 연결되는 실전 프로세스를 완성합니다.",
    url: "https://www.jmschool.kr/sales-page",
    siteName: "자명스쿨",
    locale: "ko_KR",
    type: "website",
  },
};

// ─────────────────────────────────────────────────────────────
// [클래스 기본 설정 데이터]
// ─────────────────────────────────────────────────────────────
const CLASS_CONFIG = {
  category: "AI SALES PAGE · ONE DAY CLASS",
  badge: "자명스쿨 실전 비즈니스 원데이",
  titleMain: "AI 브랜드 상품",
  titleSub: "상세페이지 제작",
  subtitle: "고객의 마음을 읽는 기획부터 AI 자동 제작까지",
  coreCopy: "“예쁜 상세페이지를 넘어, 구매 이유를 설계하다.”",
  description:
    "고객은 단순히 상품의 기능만 보고 구매하지 않습니다. 이 상품이 왜 필요한지, 내 문제를 어떻게 해결해 주는지, 믿고 선택할 수 있는지, 지금 행동해야 할 이유가 있는지를 함께 판단합니다. 이번 클래스에서는 소비자 심리와 구매 의사결정 흐름을 바탕으로 상세페이지의 기획 구조를 먼저 설계합니다. 그다음 상품의 매력을 더 잘 보여주는 상세컷과 이미지 소스, 설명형 컷, 브랜드 영상, 펀딩용 GIF 등의 비주얼 요소를 제작하고, 템플릿에 배치한 뒤 AI 자동화 스킬까지 연결해 실제 판매에 활용할 수 있는 상세페이지 초안을 완성합니다.",
  meta: {
    format: "온라인 실습 원데이",
    duration: "세부 시간 추후 확정",
    schedule: "준비 중",
    price: "미정",
    prerequisite: "1인 사업자 · 창작자 (입문 가능)",
  },
  tags: ["AI상세페이지", "소비자심리", "카피라이팅", "비주얼소스", "크라우드펀딩"],
  ctaText: "개강 알림 신청",
};

export default function SalesPageDesignPage() {
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
          SECTION 01. HERO (상단 소개 & 상세페이지 목업)
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

              {/* 핵심 감성 후킹 카피 */}
              <blockquote className="border-l-4 border-[#C6A66B] pl-4 py-1 italic font-serif text-base sm:text-lg text-[#5C4D43] bg-[#EFE9DF]/50 rounded-r-lg">
                {CLASS_CONFIG.coreCopy}
              </blockquote>

              {/* 상세 소개 본문 */}
              <p className="text-[#5C4D43] leading-relaxed text-sm sm:text-base break-keep">
                {CLASS_CONFIG.description}
              </p>

              {/* 5대 핵심 혜택 뱃지 리스트 */}
              <div className="pt-2">
                <p className="text-xs font-bold uppercase tracking-wider text-[#8E6D38] mb-3">
                  KEY HIGHLIGHTS · 5대 핵심 혜택
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-[#4A3E37]">
                  {[
                    "소비자 심리 기반 상세페이지 기획법",
                    "자명스쿨 상세페이지 제작 템플릿",
                    "제품 상세컷·GIF·브랜드 영상 소스 제작 실습",
                    "Flow 기반 AI 비주얼 제작 실습",
                    "일반 상품 · 펀딩 자동 제작 스킬 2종 제공",
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 bg-[#EFE9DF] px-3 py-2 rounded-lg border border-[#E2D8CA]">
                      <span className="text-[#8E6D38] font-bold">✓</span>
                      <span className="font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 메타 카드 (일정 / 수강료 / 형태 / 난이도) */}
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

            {/* 우측 비주얼 목업 (모바일 & 데스크톱 상세페이지 목업) */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-[420px] bg-[#14100E] border-2 border-[#8E6D38]/30 rounded-3xl p-5 shadow-2xl text-left">
                {/* 상단 브라우저/스마트폰 바 */}
                <div className="flex items-center justify-between pb-3 border-b border-[#2A211B] text-xs text-[#A8988B]">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#E0A96D]"></span>
                    <span className="font-mono text-[11px] text-[#E0A96D]">HIGH-CONVERTING SALES PAGE</span>
                  </div>
                  <span className="text-[10px] bg-[#2A211B] text-[#EDE6DC] px-2 py-0.5 rounded">FLOW & CODEX</span>
                </div>

                {/* 상세페이지 스크롤 프리뷰 카드 */}
                <div className="my-3 space-y-2.5 text-xs">
                  {/* 1. Hooking Hero */}
                  <div className="bg-gradient-to-r from-[#241A14] to-[#1C1512] p-3.5 rounded-xl border border-[#3A2D25]">
                    <span className="text-[10px] font-mono text-[#C6A66B] block">01. HOOK & HERO</span>
                    <p className="font-bold text-[#EDE6DC] text-xs sm:text-sm mt-0.5">
                      고객의 문제를 즉시 건드리는 후킹 비주얼
                    </p>
                    <p className="text-[11px] text-[#A8988B] mt-0.5">핵심 가치 제안 및 대표 제품컷</p>
                  </div>

                  {/* 2. Empathy & Problem */}
                  <div className="bg-[#1C1512] p-3 rounded-xl border border-[#2A211B]">
                    <span className="text-[10px] font-mono text-[#8C7A6B] block">02. EMPATHY · 공감 컷</span>
                    <p className="font-medium text-[#EDE6DC] text-xs mt-0.5">
                      &ldquo;이런 고민, 한 번쯤 해보셨죠?&rdquo;
                    </p>
                    <p className="text-[10px] text-[#A8988B]">4컷 만화형 공감 소스 및 상황 설명컷</p>
                  </div>

                  {/* 3. Solution & Benefit */}
                  <div className="bg-[#1C1512] p-3 rounded-xl border border-[#2A211B]">
                    <span className="text-[10px] font-mono text-[#C6A66B] block">03. BENEFIT & GIF</span>
                    <p className="font-bold text-[#EDE6DC] text-xs mt-0.5">
                      작동 원리와 실시간 변화를 보여주는 GIF
                    </p>
                    <p className="text-[10px] text-[#A8988B]">숫자 상승, 전후 비교, 생생한 사용 장면</p>
                  </div>

                  {/* 4. Trust & CTA */}
                  <div className="bg-[#241A14] p-3 rounded-xl border border-[#C6A66B]/40 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-mono text-[#E0A96D] block">04. PROOF & CTA</span>
                      <p className="font-bold text-[#EDE6DC] text-xs">근거 제시와 망설임 없는 구매 유도</p>
                    </div>
                    <span className="text-[10px] bg-[#C6A66B] text-[#14100E] font-bold px-2.5 py-1 rounded-full">
                      ORDER
                    </span>
                  </div>
                </div>

                {/* 하단 시스템 요약 */}
                <div className="pt-3 border-t border-[#2A211B] flex items-center justify-between text-[11px] text-[#A8988B]">
                  <span>자명스쿨 상세페이지 설득 랩</span>
                  <span className="text-[#C6A66B] font-medium">기획 + 비주얼 + 자동화</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 02. PROBLEM — 문제 제기 (5대 문제 카드)
         ═══════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 border-b border-[#2A211B] bg-[#120E0C]">
        <div className="site-container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-xs font-bold tracking-widest text-[#C6A66B] uppercase">
              WHY SALES PAGES FAIL
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#EDE6DC] mt-2 mb-6 break-keep">
              상세페이지를 열심히 만들었는데, <br />
              왜 고객은 구매하지 않을까요?
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-[#A8988B] leading-relaxed break-keep text-left bg-[#14100E] p-6 sm:p-8 rounded-2xl border border-[#2A211B]">
              <p>
                상품의 장점을 자세히 설명했는데도 고객에게 매력이 전달되지 않을 때가 있습니다.
                이미지는 예쁘지만 어떤 순서로 보여줘야 하는지 모르겠고, 기능은 나열했지만 고객이 왜 필요하다고 느껴야 하는지는 약하게 전달되기도 합니다.
              </p>
              <p>
                또는 제품 이미지는 있지만 상세컷이 부족하고, 페이지 안에서 사용할 설명형 소스나 움직이는 시각 자료가 부족해 전달력이 떨어지는 경우도 많습니다.
              </p>
              <p className="text-[#EDE6DC] font-medium border-l-2 border-[#C6A66B] pl-3 py-0.5">
                상세페이지는 단순히 예쁘게 꾸미는 디자인 작업이 아닙니다.
                <strong> 꾸미기 전에 설득 구조를 설계해야 하고, 설계 후에는 이를 증명할 생생한 소스가 필요합니다.</strong>
              </p>
            </div>
          </div>

          {/* 5대 문제 카드 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 max-w-5xl mx-auto">
            {[
              { num: "01", title: "기능만 나열하는 설명", desc: "고객에게 어떤 변화를 주는지보다 기술과 스펙만 나열한다." },
              { num: "02", title: "고민과 동떨어진 카피", desc: "소비자의 실제 고통이나 결핍과 연결되지 못하고 겉돈다." },
              { num: "03", title: "설득 흐름의 부재", desc: "시선 유도, 의문 해소, 구매 전환으로 이어지는 공식이 없다." },
              { num: "04", title: "비주얼 소스 부족", desc: "페이지 안에서 보여줄 상세컷, 설명컷, 영상, GIF가 부족하다." },
              { num: "05", title: "반복적인 제작 피로", desc: "새 상품이 나올 때마다 디자인 작업이 오래 걸리고 지친다." },
            ].map((card, idx) => (
              <div
                key={idx}
                className="bg-[#14100E] border border-[#2A211B] p-4 rounded-xl flex flex-col justify-between hover:border-[#C6A66B]/40 transition-colors"
              >
                <div>
                  <span className="text-xs font-mono font-bold text-[#C6A66B] mb-1 block">{card.num}</span>
                  <h3 className="text-sm font-bold text-[#EDE6DC] mb-1">{card.title}</h3>
                  <p className="text-xs text-[#A8988B] leading-relaxed break-keep">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-2xl mx-auto mt-10 text-center">
            <p className="text-sm sm:text-base font-bold text-[#EDE6DC]">
              &ldquo;상세페이지는 꾸미기 전에 설계해야 하고, 설계 후에는 보여줄 소스가 필요합니다.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 03. CUSTOMER PSYCHOLOGY — 소비자 심리 기반 기획
         ═══════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 border-b border-[#2A211B] bg-[#0D0B0A]">
        <div className="site-container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold tracking-widest text-[#C6A66B] uppercase">
              PSYCHOLOGY FIRST
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#EDE6DC] mt-2 mb-3 break-keep">
              디자인보다 먼저, 고객의 마음을 읽습니다.
            </h2>
            <p className="text-sm md:text-base text-[#A8988B] break-keep">
              소비자가 어떤 순간에 필요성을 느끼고, 무엇을 보고 신뢰하며, 어떤 이유로 망설이는지부터 살펴봅니다.
            </p>
          </div>

          {/* 6대 기획 핵심 질문 카드 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto mb-10">
            {[
              {
                q: "Q1",
                title: "이 상품은 누구에게 필요한가?",
                desc: "막연한 대중이 아닌, 당장 결핍을 느끼는 구체적인 타깃 페르소나 정의",
              },
              {
                q: "Q2",
                title: "고객은 어떤 고민과 욕구를 가지는가?",
                desc: "일상에서 겪는 실질적인 불편함과 속마음의 결핍 파악",
              },
              {
                q: "Q3",
                title: "왜 이 상품을 선택해야 하는가?",
                desc: "타사 상품과 뚜렷하게 구별되는 독창적인 차별점과 핵심 가치",
              },
              {
                q: "Q4",
                title: "구매를 망설이게 만드는 불안은 무엇인가?",
                desc: "가격, 효과 의심, 사용법 어려움 등 장바구니 이탈 요인 사전 차단",
              },
              {
                q: "Q5",
                title: "어떤 정보와 근거가 신뢰를 만드는가?",
                desc: "검증된 수치, 인증, 제작자의 진정성, 실제 전후 비교 자료 제시",
              },
              {
                q: "Q6",
                title: "상품을 통해 기대하는 변화는 무엇인가?",
                desc: "단순 구매를 넘어 상품을 사용한 뒤 얻게 될 더 나은 삶의 모습 전달",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-[#14100E] border border-[#2A211B] p-5 rounded-2xl hover:border-[#C6A66B]/40 transition-colors"
              >
                <span className="text-xs font-mono font-bold text-[#C6A66B] bg-[#2A211B] px-2 py-0.5 rounded">
                  {item.q}
                </span>
                <h3 className="text-sm sm:text-base font-bold text-[#EDE6DC] mt-2 mb-1.5">{item.title}</h3>
                <p className="text-xs text-[#A8988B] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto bg-[#181310] border border-[#3A2D25] p-5 rounded-2xl text-center text-xs sm:text-sm text-[#A8988B] leading-relaxed break-keep">
            수업에서는 고객을 조종하는 기술이 아니라, <strong>고객의 문제와 욕구를 정확히 이해하고 그것을 설득력 있게 전달하는 바른 방법</strong>을 배웁니다.
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 04. BEFORE & AFTER (4대 비교)
         ═══════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 border-b border-[#2A211B] bg-[#120E0C]">
        <div className="site-container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold tracking-widest text-[#C6A66B] uppercase">
              BEFORE & AFTER
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#EDE6DC] mt-2 mb-3 break-keep">
              상품을 설명하는 페이지에서, <br />
              선택의 이유를 전달하는 페이지로
            </h2>
            <p className="text-sm md:text-base text-[#A8988B] break-keep">
              시각 디자인에 갇혀 있던 상세페이지 제작이 설득 시스템으로 진화합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {[
              {
                before: "기능과 스펙, 특징을 나열하기만 한다.",
                after: "고객이 원하는 구체적인 변화와 가치를 보여준다.",
              },
              {
                before: "예쁜 디자인과 템플릿부터 먼저 고민한다.",
                after: "고객 분석과 설득 구조를 먼저 완벽히 설계한다.",
              },
              {
                before: "단순 제품 이미지만 몇 장 대충 넣는다.",
                after: "상세컷, 설명컷, GIF, 브랜드 영상까지 목적에 맞는 소스를 만든다.",
              },
              {
                before: "페이지 구성을 매번 처음부터 막막하게 고민한다.",
                after: "검증된 프레임워크와 템플릿, AI 자동화 스킬을 활용한다.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-[#14100E] border border-[#2A211B] rounded-2xl p-5 hover:border-[#C6A66B]/40 transition-all flex flex-col justify-between"
              >
                {/* BEFORE */}
                <div className="pb-3 border-b border-[#221B17]">
                  <span className="text-[11px] font-bold text-[#8C7A6B] bg-[#221B17] px-2 py-0.5 rounded">
                    BEFORE
                  </span>
                  <p className="text-xs sm:text-sm text-[#8C7A6B] mt-2 line-through decoration-[#8C7A6B]/50 leading-relaxed">
                    {item.before}
                  </p>
                </div>
                {/* AFTER */}
                <div className="pt-3">
                  <span className="text-[11px] font-bold text-[#C6A66B] bg-[#C6A66B]/10 px-2 py-0.5 rounded border border-[#C6A66B]/30">
                    AFTER
                  </span>
                  <p className="text-sm sm:text-base font-bold text-[#EDE6DC] mt-2 break-keep leading-relaxed">
                    {item.after}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 05. PERSUASION STRUCTURE — 설득 기획 공식
         ═══════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 border-b border-[#2A211B] bg-[#0D0B0A]">
        <div className="site-container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold tracking-widest text-[#C6A66B] uppercase">
              PERSUASION ARCHITECTURE
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#EDE6DC] mt-2 mb-3 break-keep">
              고객의 마음을 따라가는 상세페이지 설계 공식
            </h2>
            <p className="text-sm md:text-base text-[#A8988B] break-keep">
              스크롤을 내릴 때마다 자연스럽게 신뢰가 쌓이고 결제로 이어지는 8단계 설득 흐름
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 max-w-5xl mx-auto mb-8">
            {[
              { step: "01", name: "HOOK", title: "시선을 멈추는 첫 문장", desc: "이탈률을 낮추는 강력한 헤드카피와 비주얼" },
              { step: "02", name: "EMPATHY", title: "고객의 고민과 공감", desc: "&ldquo;내 이야기 같다&rdquo;고 느끼게 만드는 상황 제시" },
              { step: "03", name: "PROBLEM", title: "문제의 원인과 필요성", desc: "기존 방식의 한계와 새로운 해결책의 당위성" },
              { step: "04", name: "SOLUTION", title: "상품이 제공하는 해결책", desc: "왜 이 상품이어야만 하는지 명확한 답 제시" },
              { step: "05", name: "BENEFIT", title: "고객이 얻는 구체적 가치", desc: "사용 후 달라지는 삶의 혜택과 결과물" },
              { step: "06", name: "PROOF", title: "신뢰를 만드는 근거", desc: "수치, 테스트 결과, 인증, 제작자의 진정성" },
              { step: "07", name: "OBJECTION", title: "망설임과 의문 해소", desc: "구매 직전 의심과 불안을 미리 답변하는 FAQ" },
              { step: "08", name: "CTA", title: "자연스러운 행동 유도", desc: "지금 구매해야 할 이유와 간편한 구매 버튼" },
            ].map((pst, idx) => (
              <div
                key={idx}
                className="bg-[#14100E] border border-[#2A211B] p-4 rounded-xl flex flex-col justify-between hover:border-[#C6A66B]/50 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-bold text-[#C6A66B]">{pst.step}</span>
                    <span className="text-[10px] font-mono text-[#8C7A6B] bg-[#1C1512] px-1.5 py-0.5 rounded">
                      {pst.name}
                    </span>
                  </div>
                  <h3 className="text-sm font-bold text-[#EDE6DC] mb-1">{pst.title}</h3>
                  <p className="text-xs text-[#A8988B] leading-relaxed break-keep">{pst.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto bg-gradient-to-r from-[#241A14] via-[#35261C] to-[#241A14] border border-[#C6A66B]/40 p-4 rounded-xl text-center">
            <p className="text-xs sm:text-sm text-[#EDE6DC] font-medium break-keep">
              이 구조를 바탕으로 상품에 맞는 설득 흐름을 먼저 잡고, 그다음 각 섹션에 들어갈 이미지와 소스의 역할을 함께 설계합니다.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 06. VISUAL SOURCE CREATION — 상세페이지용 소스 제작
         ═══════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 border-b border-[#2A211B] bg-[#120E0C]">
        <div className="site-container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold tracking-widest text-[#C6A66B] uppercase">
              VISUAL ASSET CREATION
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#EDE6DC] mt-2 mb-3 break-keep">
              상세페이지의 설득력을 높이는 비주얼 소스를 직접 만듭니다.
            </h2>
            <p className="text-sm md:text-base text-[#A8988B] break-keep">
              단순히 예쁜 사진이 아니라, 상품의 매력과 사용 장면, 전후 변화를 더 잘 전달하는 소스를 제작합니다.
            </p>
          </div>

          {/* 4대 비주얼 소스 카드 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-8">
            {/* 01. 제품 상세컷 */}
            <div className="bg-[#14100E] border border-[#2A211B] p-6 rounded-2xl hover:border-[#C6A66B]/50 transition-colors">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-7 h-7 rounded-lg bg-[#8E6D38]/20 text-[#C6A66B] text-xs font-bold flex items-center justify-center">
                  01
                </span>
                <h3 className="text-base sm:text-lg font-bold text-[#EDE6DC]">제품 상세컷</h3>
              </div>
              <ul className="space-y-1.5 text-xs sm:text-sm text-[#A8988B]">
                <li>• 브랜드 톤이 일관되게 유지되는 스튜디오 제품 이미지</li>
                <li>• 일상 속에서 자연스럽게 활용되는 라이프스타일 사용 장면 컷</li>
                <li>• 기능과 핵심 특징을 클로즈업하여 보여주는 디테일 강조 컷</li>
                <li>• 옵션 구성, 패키지 조합, 타사 상품과의 비교 컷</li>
              </ul>
            </div>

            {/* 02. 설명형 컷 / 4컷 만화형 컷 */}
            <div className="bg-[#14100E] border border-[#2A211B] p-6 rounded-2xl hover:border-[#C6A66B]/50 transition-colors">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-7 h-7 rounded-lg bg-[#8E6D38]/20 text-[#C6A66B] text-xs font-bold flex items-center justify-center">
                  02
                </span>
                <h3 className="text-base sm:text-lg font-bold text-[#EDE6DC]">설명형 컷 / 4컷 만화형 컷</h3>
              </div>
              <ul className="space-y-1.5 text-xs sm:text-sm text-[#A8988B]">
                <li>• 복잡한 사용 방법을 한눈에 이해시키는 인포그래픽 컷</li>
                <li>• 사용 전과 후의 극적인 변화를 명확하게 보여주는 비교 컷</li>
                <li>• 고객의 실제 고민에 공감대를 형성하는 미니 웹툰·스토리 컷</li>
                <li>• 어려운 기술 용어를 직관적으로 풀어주는 도식화 컷</li>
              </ul>
            </div>

            {/* 03. 간단한 브랜드 영상 */}
            <div className="bg-[#14100E] border border-[#2A211B] p-6 rounded-2xl hover:border-[#C6A66B]/50 transition-colors">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-7 h-7 rounded-lg bg-[#8E6D38]/20 text-[#C6A66B] text-xs font-bold flex items-center justify-center">
                  03
                </span>
                <h3 className="text-base sm:text-lg font-bold text-[#EDE6DC]">간단한 브랜드 영상</h3>
              </div>
              <ul className="space-y-1.5 text-xs sm:text-sm text-[#A8988B]">
                <li>• 브랜드의 철학과 감성을 전하는 10~15초 인트로 무드 영상</li>
                <li>• 실제 제품의 질감과 사용 모습을 실감 나게 담아낸 클립</li>
                <li>• 상세페이지 상단이나 중간에 배치하여 체류 시간을 늘리는 영상</li>
                <li>• 모바일 환경에서도 가볍게 로딩되는 최적화 클립 제작</li>
              </ul>
            </div>

            {/* 04. 펀딩형 GIF 소스 */}
            <div className="bg-[#14100E] border border-[#2A211B] p-6 rounded-2xl hover:border-[#C6A66B]/50 transition-colors">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-7 h-7 rounded-lg bg-[#8E6D38]/20 text-[#C6A66B] text-xs font-bold flex items-center justify-center">
                  04
                </span>
                <h3 className="text-base sm:text-lg font-bold text-[#EDE6DC]">펀딩형 GIF 소스</h3>
              </div>
              <ul className="space-y-1.5 text-xs sm:text-sm text-[#A8988B]">
                <li>• 달성률, 숫자 상승, 성과 확대를 생생히 보여주는 모션 GIF</li>
                <li>• 시선이 멈추는 리얼 후기 등장 및 타이핑 인터랙션 GIF</li>
                <li>• 핵심 강점이나 기능 작동 순간을 반복적으로 보여주는 루프 GIF</li>
                <li>• 프로젝트의 역동성과 신뢰도를 극대화하는 움직이는 시각자료</li>
              </ul>
            </div>
          </div>

          <div className="max-w-2xl mx-auto text-center">
            <p className="text-sm sm:text-base font-bold text-[#EDE6DC] mb-2">
              &ldquo;좋은 상세페이지는 텍스트만으로 설득하지 않습니다. 기획에 맞는 소스가 있어야 전달력이 살아납니다.&rdquo;
            </p>
            <p className="text-xs text-[#7C6656]">
              * 수업 중에는 상품과 실습 구성에 맞는 핵심 대표 소스를 중심으로 실습하며, 목적에 맞는 소스를 기획·배치하는 역량을 완성합니다.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 07. TEMPLATE DESIGN — 템플릿 배치 실습
         ═══════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 border-b border-[#2A211B] bg-[#0D0B0A]">
        <div className="site-container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold tracking-widest text-[#C6A66B] uppercase">
              FROM STRATEGY TO LAYOUT
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#EDE6DC] mt-2 mb-3 break-keep">
              기획과 소스가 준비되었다면, 이제 설득의 흐름으로 배치합니다.
            </h2>
            <p className="text-sm md:text-base text-[#A8988B] break-keep">
              자명스쿨에서 제공하는 상세페이지 템플릿에 분석한 고객 심리와 소스를 조립합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-5xl mx-auto mb-8">
            {[
              { title: "히어로 섹션 최적화", desc: "시선을 3초 만에 사로잡는 헤드카피와 대표 비주얼 배치" },
              { title: "공감 및 문제 제기 영역", desc: "고객 고민을 짚어주는 텍스트와 설명형 소스 배치" },
              { title: "핵심 혜택 시각화", desc: "스펙을 넘어 실질적인 사용자 혜택을 도식화" },
              { title: "제품 상세컷 & 설명컷 연결", desc: "원고 흐름에 맞춰 사진과 컷 만화의 위치 최적화" },
              { title: "GIF & 브랜드 영상 삽입", desc: "스크롤 중간 지루함을 깨뜨리는 모션 소스 삽입" },
              { title: "신뢰 정보와 최종 CTA", desc: "구매 망설임을 해소하는 검증 자료와 간편 결제 버튼" },
            ].map((tmpl, idx) => (
              <div key={idx} className="bg-[#14100E] border border-[#2A211B] p-4 rounded-xl">
                <span className="text-xs font-mono font-bold text-[#C6A66B] block mb-1">LAYOUT 0{idx + 1}</span>
                <h3 className="text-sm font-bold text-[#EDE6DC] mb-1">{tmpl.title}</h3>
                <p className="text-xs text-[#A8988B] leading-relaxed">{tmpl.desc}</p>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto bg-[#181310] border border-[#3A2D25] p-5 rounded-2xl text-center">
            <p className="text-sm sm:text-base font-bold text-[#EDE6DC]">
              &ldquo;빈 화면에서 시작하지 않습니다. 기획과 소스를 담을 수 있는 탄탄한 구조를 먼저 제공합니다.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 08. AI VISUAL CREATION — Flow 활용
         ═══════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 border-b border-[#2A211B] bg-[#120E0C]">
        <div className="site-container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold tracking-widest text-[#C6A66B] uppercase">
              AI VISUAL WORKFLOW
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#EDE6DC] mt-2 mb-3 break-keep">
              이미지와 비주얼 제작도 AI와 함께 연결합니다.
            </h2>
            <p className="text-sm md:text-base text-[#A8988B] break-keep">
              Flow 도구를 활용해 상품 분위기와 기획 방향에 꼭 맞는 고화질 비주얼 자료를 빠르게 생성합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto mb-8">
            {[
              { num: "01", title: "상품 콘셉트 이미지 제작", desc: "브랜드의 프리미엄 무드를 극대화하는 감성 배경과 조명 연출" },
              { num: "02", title: "일관성 있는 제품컷 생성", desc: "각도와 배경이 바뀌어도 제품의 정체성이 유지되는 프롬프트 설계" },
              { num: "03", title: "실제 사용 장면 컷 제작", desc: "소비자가 제품을 직접 만지고 사용하는 생생한 라이프스타일 컷" },
              { num: "04", title: "설명용 보조 시각 자료", desc: "텍스트만으로 설명하기 어려운 제품 내부 구조나 재질 강조" },
              { num: "05", title: "브랜드 무드 비주얼", desc: "상세페이지 전반의 신뢰감을 높여주는 감성형 무드 보드 에셋" },
              { num: "06", title: "전체 이미지 톤 통일", desc: "색감, 채도, 밝기를 하나로 정돈해 완성도 높은 페이지 룩 완성" },
            ].map((flw, idx) => (
              <div key={idx} className="bg-[#14100E] border border-[#2A211B] p-4 rounded-xl">
                <span className="text-xs font-mono font-bold text-[#C6A66B] block mb-1">FLOW {flw.num}</span>
                <h3 className="text-sm font-bold text-[#EDE6DC] mb-1">{flw.title}</h3>
                <p className="text-xs text-[#A8988B] leading-relaxed">{flw.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-xs text-[#7C6656]">
            * AI 이미지 제작은 실제 상품 정보와 어긋나지 않도록 가이드를 준수하며, 필요 시 연출 이미지임을 안내합니다.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 09. SPECIAL BENEFITS — 자동 제작 스킬 2종
         ═══════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 border-b border-[#2A211B] bg-[#0D0B0A]">
        <div className="site-container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold tracking-widest text-[#C6A66B] uppercase">
              SPECIAL AI AUTOMATION KIT
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#EDE6DC] mt-2 mb-3 break-keep">
              기획과 소스가 준비되면, 제작은 AI와 함께 더 빠르게
            </h2>
            <p className="text-sm md:text-base text-[#A8988B] break-keep">
              한 번 만들고 끝나는 것이 아니라, 다음 상품에도 평생 반복 활용할 수 있는 자동 제작 스킬 2종을 제공합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-8">
            {/* SKILL 01. 일반 상품 상세페이지 자동 제작 */}
            <div className="bg-[#14100E] border border-[#2A211B] p-6 sm:p-7 rounded-2xl flex flex-col justify-between hover:border-[#C6A66B]/50 transition-colors">
              <div>
                <span className="text-xs font-mono font-bold text-[#C6A66B] bg-[#C6A66B]/10 px-2.5 py-1 rounded border border-[#C6A66B]/30 block w-fit mb-3">
                  SKILL 01
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-[#EDE6DC] mb-1">
                  일반 상품 상세페이지 자동 제작
                </h3>
                <span className="text-xs text-[#8C7A6B] block mb-4">
                  온라인 쇼핑몰, 디지털 상품, 교육 상품, 브랜드 서비스 등
                </span>
                <ul className="space-y-2 text-xs sm:text-sm text-[#A8988B]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#C6A66B] font-bold">✓</span>
                    <span>상품 스펙 및 타깃 정보 자동 구조화</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#C6A66B] font-bold">✓</span>
                    <span>구매 설득 알고리즘 기반 섹션별 카피 생성</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#C6A66B] font-bold">✓</span>
                    <span>이미지 및 비주얼 소스 배치 가이드 제안</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#C6A66B] font-bold">✓</span>
                    <span>Codex 기반 반응형 상세페이지 코드 자동 구현</span>
                  </li>
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-[#2A211B] text-[11px] text-[#C6A66B]">
                구매 판단과 상품 가치 전달 중심
              </div>
            </div>

            {/* SKILL 02. 펀딩 상세페이지 자동 제작 */}
            <div className="bg-[#14100E] border border-[#2A211B] p-6 sm:p-7 rounded-2xl flex flex-col justify-between hover:border-[#C6A66B]/50 transition-colors">
              <div>
                <span className="text-xs font-mono font-bold text-[#E0A96D] bg-[#E0A96D]/10 px-2.5 py-1 rounded border border-[#E0A96D]/30 block w-fit mb-3">
                  SKILL 02
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-[#EDE6DC] mb-1">
                  펀딩 상세페이지 자동 제작
                </h3>
                <span className="text-xs text-[#8C7A6B] block mb-4">
                  와디즈/텀블벅 크라우드펀딩, 신규 프로젝트, 스토리 중심 상품
                </span>
                <ul className="space-y-2 text-xs sm:text-sm text-[#A8988B]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#E0A96D] font-bold">✓</span>
                    <span>창작자의 철학과 프로젝트 기획 의도 정리</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#E0A96D] font-bold">✓</span>
                    <span>스토리 중심의 진정성 있는 공감 구조 설계</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#E0A96D] font-bold">✓</span>
                    <span>서포터 참여 이유 및 리워드 소개 흐름 구성</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#E0A96D] font-bold">✓</span>
                    <span>Codex 기반 펀딩형 인터랙티브 상세페이지 구현</span>
                  </li>
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-[#2A211B] text-[11px] text-[#E0A96D]">
                프로젝트 스토리, 공감, 참여 이유 전달 중심
              </div>
            </div>
          </div>

          <div className="text-center max-w-xl mx-auto">
            <p className="text-base sm:text-lg font-bold text-[#EDE6DC]">
              &ldquo;한 번의 수업으로 끝나는 것이 아니라, 다음 상품에도 적용할 수 있는 제작 시스템을 배웁니다.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 10. AUTOMATION WORKFLOW — 전체 제작 흐름
         ═══════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 border-b border-[#2A211B] bg-[#120E0C]">
        <div className="site-container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold tracking-widest text-[#C6A66B] uppercase">
              END-TO-END PIPELINE
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#EDE6DC] mt-2 mb-3 break-keep">
              고객 분석부터 상세페이지 완성까지, 하나의 흐름으로 연결합니다.
            </h2>
            <p className="text-sm md:text-base text-[#A8988B] break-keep">
              사람의 기획과 검수 위에 AI 도구가 결합된 가장 안전하고 실전적인 워크플로
            </p>
          </div>

          {/* 10단계 파이프라인 */}
          <div className="max-w-4xl mx-auto space-y-2 mb-8 text-xs sm:text-sm">
            {[
              { num: "01", title: "상품 정보 정리", desc: "제품의 기본 스펙과 특징 정리" },
              { num: "02", title: "타깃 및 심리 분석", desc: "고객 결핍과 구매 망설임 요인 도출" },
              { num: "03", title: "설득 구조 원고 기획", desc: "8단계 설계 공식에 맞춘 카피라이팅" },
              { num: "04", title: "비주얼 소스 기획", desc: "페이지에 꼭 필요한 이미지와 영상 목록 작성" },
              { num: "05", title: "제품컷·설명컷·GIF 제작", desc: "목적에 부합하는 그래픽과 모션 제작" },
              { num: "06", title: "템플릿에 콘텐츠 배치", desc: "자명스쿨 전용 템플릿에 레이아웃 구성" },
              { num: "07", title: "Flow로 이미지 보강", desc: "부족한 보조 비주얼 생성 및 톤 통일" },
              { num: "08", title: "스킬 선택 (일반/펀딩)", desc: "판매 성격에 맞는 AI 자동 제작 스킬 적용" },
              { num: "09", title: "Codex로 구현 및 수정", desc: "상세페이지 코드 생성 및 실시간 수정" },
              { num: "10", title: "최종 검토 및 완성", desc: "모바일 가독성 검수 후 실전 판매 게시" },
            ].map((pipe, idx) => (
              <div
                key={idx}
                className="bg-[#14100E] border border-[#2A211B] p-3.5 sm:p-4 rounded-xl flex items-center justify-between gap-3 hover:border-[#C6A66B]/40 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-[#C6A66B]/10 border border-[#C6A66B]/30 text-[#C6A66B] font-mono text-xs font-bold flex items-center justify-center shrink-0">
                    {pipe.num}
                  </span>
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-[#EDE6DC]">{pipe.title}</h3>
                    <p className="text-[11px] text-[#A8988B]">{pipe.desc}</p>
                  </div>
                </div>
                <span className="text-[10px] text-[#7C6656] shrink-0 font-mono hidden sm:inline">STEP</span>
              </div>
            ))}
          </div>

          <p className="text-center text-xs text-[#7C6656]">
            * 본 흐름은 사람의 정밀한 기획 위에 AI가 반복 작업을 가속화하는 협업 모델로 진행됩니다.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 11. ONE DAY RESULT — 수업 결과물 6종
         ═══════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 border-b border-[#2A211B] bg-[#0D0B0A]">
        <div className="site-container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold tracking-widest text-[#C6A66B] uppercase">
              DELIVERABLES
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#EDE6DC] mt-2 mb-3 break-keep">
              하루의 실습으로, 나만의 상세페이지 초안을 완성합니다.
            </h2>
            <p className="text-sm md:text-base text-[#A8988B] break-keep">
              수업 종료와 함께 내 비즈니스에 바로 적용할 수 있는 6가지 구체적인 산출물
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-3 mb-8">
            {[
              { num: "01", name: "타깃 고객 및 구매 심리 분석 기획서", desc: "고객 결핍과 구매 이유가 정리된 전략 시트" },
              { num: "02", name: "설득 구조가 반영된 상세페이지 원고", desc: "8단계 설계 공식에 맞춘 완성형 카피라이팅" },
              { num: "03", name: "상세페이지용 비주얼 소스 기획안", desc: "어떤 컷과 영상이 들어가야 하는지 정리한 콘티" },
              { num: "04", name: "대표 제품컷 / 설명컷 / GIF / 영상 소스", desc: "실제 페이지에 삽입되는 고품질 비주얼 에셋" },
              { num: "05", name: "전용 템플릿을 활용한 상세페이지 초안", desc: "PC/모바일에서 바로 확인 가능한 완성형 웹 초안" },
              { num: "06", name: "일반 상품 · 펀딩 자동 제작 스킬 활용법", desc: "다음 상품에도 계속해서 써먹을 수 있는 자동화 프롬프트" },
            ].map((deliv, idx) => (
              <div
                key={idx}
                className="bg-[#14100E] border border-[#2A211B] p-4 rounded-xl flex items-center justify-between gap-4"
              >
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-[#C6A66B]/10 border border-[#C6A66B]/30 text-[#C6A66B] font-mono text-xs font-bold flex items-center justify-center shrink-0">
                    {deliv.num}
                  </span>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-[#EDE6DC]">{deliv.name}</h3>
                    <p className="text-xs text-[#A8988B] mt-0.5">{deliv.desc}</p>
                  </div>
                </div>
                <span className="text-xs text-[#C6A66B] font-bold shrink-0 hidden sm:inline">완성 목표</span>
              </div>
            ))}
          </div>

          <p className="text-center text-xs text-[#7C6656]">
            * 실습 속도와 준비 상황에 따라 대표 상품 1개를 중심으로 집중 실습합니다.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 12. CURRICULUM — 단계별 강의 구성 (PART 01~07)
         ═══════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 border-b border-[#2A211B] bg-[#120E0C]">
        <div className="site-container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold tracking-widest text-[#C6A66B] uppercase">
              CURRICULUM
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#EDE6DC] mt-2 mb-3 break-keep">
              기획부터 소스 제작, 자동화까지 실제 상품 하나로 배우는 원데이
            </h2>
            <p className="text-sm md:text-base text-[#A8988B] break-keep">
              단계별로 실습하며 당일 내 상세페이지 초안을 완성하는 7단계 커리큘럼
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                part: "PART 01",
                title: "소비자 심리와 구매 동기 이해",
                desc: "고객 욕구와 구매 망설임 요인 분석 · 타깃 고객 페르소나 정의 · 핵심 차별화 메시지 도출",
              },
              {
                part: "PART 02",
                title: "설득형 상세페이지 기획",
                desc: "후킹과 공감 구조 설계 · 문제-해결-혜택-신뢰 프레임워크 · 상세페이지 원고 흐름 작성",
              },
              {
                part: "PART 03",
                title: "상세페이지용 비주얼 소스 기획 및 제작",
                desc: "필요 소스 리스트업 · 제품컷과 라이프스타일컷 · 설명형 컷과 4컷 만화형 컷 · 브랜드 영상 및 펀딩 GIF 제작",
              },
              {
                part: "PART 04",
                title: "자명스쿨 전용 템플릿 실습",
                desc: "제공 템플릿 구조 파악 · 원고와 비주얼 소스 배치 실습 · 브랜드 분위기에 맞춘 색상/폰트 튜닝",
              },
              {
                part: "PART 05",
                title: "Flow 활용 AI 이미지 제작",
                desc: "상품 콘셉트 비주얼 생성 · 스타일 일관성 유지 테크닉 · 필요한 보조 이미지 및 톤 매칭",
              },
              {
                part: "PART 06",
                title: "Codex 자동화 스킬 활용",
                desc: "일반 상품 상세페이지 스킬 적용 · 펀딩 상세페이지 스킬 적용 · 입력값 정리 및 코드 실시간 수정",
              },
              {
                part: "PART 07",
                title: "결과물 점검 및 완성",
                desc: "고객 관점 검수 체크리스트 · 모바일 반응형 가독성 확인 · 사실 정보 검증 및 최종 초안 완성",
              },
            ].map((curri, idx) => (
              <div
                key={idx}
                className="bg-[#14100E] border border-[#2A211B] p-5 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:border-[#C6A66B]/40 transition-colors"
              >
                <div className="flex items-start sm:items-center gap-3">
                  <span className="px-2.5 py-1 rounded bg-[#C6A66B]/10 border border-[#C6A66B]/30 text-xs font-mono font-bold text-[#C6A66B] whitespace-nowrap">
                    {curri.part}
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-[#EDE6DC]">{curri.title}</h3>
                    <p className="text-xs text-[#A8988B] mt-0.5">{curri.desc}</p>
                  </div>
                </div>
                <span className="text-[11px] text-[#7C6656] sm:text-right shrink-0">실습 중심</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 13. CLASS KIT — 수강 혜택
         ═══════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 border-b border-[#2A211B] bg-[#0D0B0A]">
        <div className="site-container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold tracking-widest text-[#C6A66B] uppercase">
              CLASS KIT & RESOURCES
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#EDE6DC] mt-2 mb-3 break-keep">
              수업이 끝난 뒤에도 활용할 수 있는 제작 자산을 제공합니다.
            </h2>
            <p className="text-sm md:text-base text-[#A8988B] break-keep">
              새로운 상품을 런칭할 때마다 바로 꺼내 쓰는 실전 키트
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto mb-8">
            {[
              {
                title: "소비자 심리 기반 기획 프레임워크",
                desc: "타깃 정의와 고객 고민, 설득 포인트를 일목요연하게 정리하는 기획 워크시트",
              },
              {
                title: "자명스쿨 상세페이지 제작 템플릿",
                desc: "검증된 전환율 구조를 그대로 담아 복사해서 쓸 수 있는 반응형 템플릿",
              },
              {
                title: "상세페이지용 소스 제작 가이드",
                desc: "제품컷, 설명컷, 4컷 만화, 펀딩 GIF를 만드는 실전 프롬프트 및 제작 팁",
              },
              {
                title: "AI 이미지 제작 및 배치 가이드",
                desc: "Flow 도구를 사용해 제품 무드를 통일하고 배치하는 워크플로 매뉴얼",
              },
              {
                title: "일반 상품 상세페이지 자동 제작 스킬",
                desc: "쇼핑몰 및 디지털 상품 상세페이지를 자동 조립하는 자명 전용 AI 스킬",
              },
              {
                title: "펀딩 상세페이지 자동 제작 스킬",
                desc: "스토리텔링과 후원자 공감을 극대화하는 크라우드펀딩 전용 AI 스킬",
              },
            ].map((kit, idx) => (
              <div key={idx} className="bg-[#14100E] border border-[#2A211B] p-5 rounded-2xl flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold text-[#C6A66B] block mb-2">KIT 0{idx + 1}</span>
                  <h3 className="text-sm sm:text-base font-bold text-[#EDE6DC] mb-2">{kit.title}</h3>
                  <p className="text-xs text-[#A8988B] leading-relaxed">{kit.desc}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#2A211B] text-[11px] text-[#8E6D38] font-medium">
                  수강 시 제공 예정
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-xs text-[#7C6656]">
            * 각 자료는 최종 제공 여부와 형식을 확인한 후 개강 시점에 확정 배포됩니다.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 14. RECOMMENDED FOR — 추천 대상
         ═══════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 border-b border-[#2A211B] bg-[#120E0C]">
        <div className="site-container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold tracking-widest text-[#C6A66B] uppercase">
              RECOMMENDED FOR
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#EDE6DC] mt-2 mb-3 break-keep">
              이런 분들께 추천합니다.
            </h2>
            <p className="text-sm md:text-base text-[#A8988B] break-keep">
              상품의 진짜 가치를 제대로 전달해 실제 구매로 연결하고 싶은 모든 분
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {[
              "자신의 상품이나 서비스를 직접 판매하고 싶은 1인 사업자",
              "상세페이지 기획과 설득 구조 잡기가 막막한 분",
              "전자책, 온라인 강의, 디지털 상품을 판매하려는 창작자",
              "제품 상세컷, 설명컷, GIF까지 직접 제작하고 싶은 분",
              "와디즈·텀블벅 등 크라우드펀딩 상세페이지를 준비하는 분",
              "상세페이지 제작에 AI와 자동화를 도입해 시간을 아끼고 싶은 분",
            ].map((target, idx) => (
              <div
                key={idx}
                className="bg-[#14100E] border border-[#2A211B] p-5 rounded-2xl flex items-start gap-3 hover:border-[#C6A66B]/40 transition-colors"
              >
                <span className="w-5 h-5 rounded-full bg-[#8E6D38]/20 text-[#C6A66B] text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                  ✓
                </span>
                <p className="text-xs sm:text-sm text-[#EDE6DC] font-medium leading-relaxed break-keep">
                  {target}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 15. FAQ (자주 묻는 질문 6문항)
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

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: "디자인 경험이 없어도 수강할 수 있나요?",
                a: "네, 가능합니다. 복잡한 포토샵 그래픽 대신 자명스쿨 제공 템플릿과 Flow, AI 자동화 도구를 활용해 실습하므로 전문 디자인 경험이 없어도 충분히 설득력 있는 페이지를 완성할 수 있습니다.",
              },
              {
                q: "어떤 상품으로 실습하나요?",
                a: "수강생 본인이 직접 판매할 상품(실물 제품, 전자책, 디지털 파일, 교육 서비스 등)으로 실습하거나, 준비된 실습용 예시 상품을 기준으로 진행할 수 있습니다.",
              },
              {
                q: "제품컷이나 GIF도 직접 배우나요?",
                a: "네. 상세페이지 안에서 고객의 시선을 사로잡는 대표적인 비주얼 소스(제품컷, 설명컷, 간단한 브랜드 영상, 펀딩용 GIF)의 기획과 제작 흐름을 함께 다룹니다.",
              },
              {
                q: "일반 상품과 펀딩형 상세페이지를 모두 배우나요?",
                a: "두 유형의 기획 차이와 각각에 최적화된 자동 제작 스킬 활용법을 모두 소개합니다. 수업 중 기본 실습은 본인의 대표 상품 1개를 중심으로 완성합니다.",
              },
              {
                q: "수업 안에서 모든 소스를 완벽하게 다 만드나요?",
                a: "실습 시간 내에는 대표 소스를 중심으로 핵심 제작 프로세스를 체화합니다. 핵심은 각 소스를 어떤 목적에 맞게 제작하고 배치하는지 이해하는 것입니다.",
              },
              {
                q: "코딩을 알아야 하나요?",
                a: "Codex를 활용한 상세페이지 자동 생성 및 수정 실습이 포함되지만, 코드를 직접 타이핑하는 것이 아니라 자연어로 요청하는 방식이므로 코딩 지식이 없어도 수강 가능합니다.",
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
          SECTION 16. FINAL CTA & REFUND POLICY
         ═══════════════════════════════════════════════ */}
      <section id="apply" className="py-20 md:py-28 bg-[#181310] border-b border-[#2A211B] text-center relative overflow-hidden">
        {/* 은은한 배경 광원 효과 */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#C6A66B]/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="site-container relative z-10 max-w-2xl mx-auto px-4">
          <span className="text-xs font-bold tracking-widest text-[#C6A66B] uppercase">
            RESERVATION
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#EDE6DC] mt-2 mb-4 break-keep">
            고객의 마음을 이해하는 기획이, <br className="hidden sm:inline" />
            설득력 있는 소스와 만나 상세페이지가 됩니다.
          </h2>
          <p className="text-sm sm:text-base text-[#A8988B] mb-8 break-keep">
            소비자 심리 분석부터 제품컷·GIF·브랜드 영상 제작, 그리고 AI 자동화까지 연결해 나만의 상품 상세페이지를 완성해 보세요.
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
      </section>

      {/* ───────────────────────────────────────────────
          환불 및 취소 규정 공통 섹션
         ─────────────────────────────────────────────── */}
      <CourseRefundPolicySection />

      {/* ───────────────────────────────────────────────
          모바일 하단 고정 CTA 바
         ─────────────────────────────────────────────── */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0D0B0A]/95 backdrop-blur-md border-t border-[#2A211B] p-3 px-4 flex items-center justify-between">
        <div>
          <span className="text-[10px] text-[#A8988B] block">AI 상품 상세페이지 제작</span>
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
