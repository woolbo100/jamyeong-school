import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import CourseRefundPolicySection from "@/components/CourseRefundPolicySection";

export const metadata: Metadata = {
  title: "전자책 판매 퍼널·SNS 자동화 구축 | 1인 지식 비즈니스 원데이 · 자명스쿨",
  description:
    "전자책 한 권을 만드는 것보다 중요한 건, 그 책이 계속 발견되고 판매되는 구조입니다. SNS 콘텐츠 멀티유즈, 랜딩페이지, 고객 DB, 이메일 마케팅, 결제 및 자동전달까지 연결하는 실전 원데이 클래스입니다.",
  alternates: {
    canonical: "https://www.jmschool.kr/ebook-funnel",
  },
  openGraph: {
    title: "전자책 판매 퍼널·SNS 자동화 구축 | 자명스쿨 원데이 클래스",
    description:
      "내 지식을 콘텐츠로, 콘텐츠를 고객으로, 고객과의 관계를 지속 가능한 자산으로. 1인 디지털 비즈니스 판매 시스템을 하루 만에 설계합니다.",
    url: "https://www.jmschool.kr/ebook-funnel",
    siteName: "자명스쿨",
    locale: "ko_KR",
    type: "website",
  },
};

// ─────────────────────────────────────────────────────────────
// [클래스 기본 설정 데이터]
// ─────────────────────────────────────────────────────────────
const CLASS_CONFIG = {
  category: "EBOOK & SNS AUTOMATION · ONE DAY CLASS",
  badge: "자명스쿨 1인 비즈니스 원데이",
  titleMain: "전자책 판매 퍼널 ·",
  titleSub: "SNS 자동화 구축",
  subtitle: "내 지식을 콘텐츠로, 콘텐츠를 고객으로, 고객과의 관계를 지속 가능한 자산으로",
  coreCopy: "“전자책 한 권을 만드는 것보다 중요한 건, 그 책이 계속 발견되고 판매되는 구조입니다.”",
  description:
    "내가 가진 경험과 지식으로 전자책을 만들었다면, 이제 그 가치를 세상에 알릴 차례입니다. 하지만 전자책을 완성했다고 저절로 고객이 찾아오지는 않습니다. 누구에게 어떻게 알릴지, 관심 있는 사람을 어디로 안내할지, 무료 콘텐츠를 통해 어떻게 신뢰를 쌓을지, 결제한 고객에게 상품을 어떻게 전달할지까지 연결되어야 합니다. 이번 클래스에서는 전자책을 중심으로 랜딩페이지, SNS 콘텐츠 멀티유즈, 발행 자동화, 고객 DB 수집, 이메일 마케팅, 결제와 자동전달을 하나의 판매 흐름으로 설계합니다. 내가 만든 콘텐츠를 지속적으로 활용할 수 있는 1인 디지털 비즈니스 시스템을 배워 보세요.",
  meta: {
    format: "온라인 실습 원데이",
    duration: "세부 시간 추후 확정",
    schedule: "준비 중",
    price: "미정",
    prerequisite: "1인 창업가·지식 창작자 (입문 가능)",
  },
  tags: ["전자책판매", "마케팅퍼널", "콘텐츠멀티유즈", "SNS자동화", "이메일마케팅"],
  ctaText: "개강 알림 신청",
};

export default function EbookFunnelPage() {
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
          SECTION 01. HERO (상단 소개 & 퍼널 비주얼 목업)
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

              {/* 6대 핵심 혜택 뱃지 리스트 */}
              <div className="pt-2">
                <p className="text-xs font-bold uppercase tracking-wider text-[#8E6D38] mb-3">
                  KEY HIGHLIGHTS · 6대 핵심 혜택
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-[#4A3E37]">
                  {[
                    "전자책 판매 퍼널 기획 템플릿",
                    "랜딩페이지 및 무료 콘텐츠 유입 설계",
                    "SNS 멀티유즈 콘텐츠 변환 스킬",
                    "SNS 발행 자동화 실습 가이드",
                    "디지털 상품 간편결제 및 자동전달 실습",
                    "고객 DB·이메일 마케팅 시퀀스 설계",
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

            {/* 우측 비주얼 목업 (디지털 퍼널 파이프라인 목업) */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-[460px] bg-[#14100E] border-2 border-[#8E6D38]/30 rounded-2xl p-5 shadow-2xl text-left">
                {/* 상단 타이틀 바 */}
                <div className="flex items-center justify-between pb-3 border-b border-[#2A211B] text-xs text-[#A8988B]">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#C6A66B]"></span>
                    <span className="font-mono text-[11px] text-[#E0A96D]">1-PERSON BUSINESS SYSTEM</span>
                  </div>
                  <span className="text-[10px] bg-[#2A211B] text-[#EDE6DC] px-2 py-0.5 rounded">AUTOMATION</span>
                </div>

                {/* 시스템 파이프라인 다이어그램 목업 */}
                <div className="my-4 space-y-2.5 text-xs">
                  <div className="bg-[#1C1512] p-3 rounded-xl border border-[#3A2D25] flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <span className="w-7 h-7 rounded-lg bg-[#8E6D38]/20 text-[#C6A66B] flex items-center justify-center font-bold">1</span>
                      <div>
                        <p className="font-bold text-[#EDE6DC]">전자책 · 지식 자산</p>
                        <p className="text-[10px] text-[#A8988B]">PDF 원고 · 워크북 템플릿</p>
                      </div>
                    </div>
                    <span className="text-[10px] text-[#C6A66B] font-mono">ASSET</span>
                  </div>

                  <div className="text-center text-[#8E6D38] text-xs font-bold">↓ 멀티유즈 변환</div>

                  <div className="bg-[#1C1512] p-3 rounded-xl border border-[#3A2D25] flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <span className="w-7 h-7 rounded-lg bg-[#8E6D38]/20 text-[#C6A66B] flex items-center justify-center font-bold">2</span>
                      <div>
                        <p className="font-bold text-[#EDE6DC]">SNS 발행 & 랜딩 유입</p>
                        <p className="text-[10px] text-[#A8988B]">스레드 · 인스타 · 블로그</p>
                      </div>
                    </div>
                    <span className="text-[10px] text-[#C6A66B] font-mono">TRAFFIC</span>
                  </div>

                  <div className="text-center text-[#8E6D38] text-xs font-bold">↓ 가치 제공 & DB 신청</div>

                  <div className="bg-[#1C1512] p-3 rounded-xl border border-[#3A2D25] flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <span className="w-7 h-7 rounded-lg bg-[#8E6D38]/20 text-[#C6A66B] flex items-center justify-center font-bold">3</span>
                      <div>
                        <p className="font-bold text-[#EDE6DC]">고객 DB & 이메일 시퀀스</p>
                        <p className="text-[10px] text-[#A8988B]">무료 자료 발송 · 신뢰 형성</p>
                      </div>
                    </div>
                    <span className="text-[10px] text-[#C6A66B] font-mono">LEAD</span>
                  </div>

                  <div className="text-center text-[#8E6D38] text-xs font-bold">↓ 결제 & 즉시 자동전달</div>

                  <div className="bg-[#241A14] p-3 rounded-xl border border-[#C6A66B]/50 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <span className="w-7 h-7 rounded-lg bg-[#C6A66B] text-[#14100E] flex items-center justify-center font-bold">4</span>
                      <div>
                        <p className="font-bold text-[#EDE6DC]">간편 자동판매 & 후속 확장</p>
                        <p className="text-[10px] text-[#E0A96D]">결제 연결 · 다운로드 · VOD</p>
                      </div>
                    </div>
                    <span className="text-[10px] bg-[#C6A66B]/20 text-[#C6A66B] px-1.5 py-0.5 rounded font-mono font-bold">SALES</span>
                  </div>
                </div>

                {/* 하단 시스템 요약 */}
                <div className="pt-3 border-t border-[#2A211B] flex items-center justify-between text-[11px] text-[#A8988B]">
                  <span>자명스쿨 1인 비즈니스 연구소</span>
                  <span className="text-[#C6A66B] font-medium">연동 실습 중심</span>
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
              THE PROBLEM
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#EDE6DC] mt-2 mb-6 break-keep">
              전자책은 만들었는데, 왜 판매는 막막할까요?
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-[#A8988B] leading-relaxed break-keep text-left bg-[#14100E] p-6 sm:p-8 rounded-2xl border border-[#2A211B]">
              <p>
                AI 덕분에 누구나 자신의 지식과 경험을 전자책으로 만들 수 있는 시대가 되었습니다.
                하지만 전자책을 완성하는 것과 실제 고객에게 판매하는 것은 전혀 다른 문제입니다.
              </p>
              <p>
                상품은 있지만 고객을 유입시킬 방법이 없고, SNS에 콘텐츠를 올려도 관심을 보인 고객과 다시 연결되지 못합니다.
                결제나 파일 전달을 수동으로 처리하다 보면 반복적인 운영에도 많은 시간이 소모됩니다.
              </p>
              <p className="text-[#EDE6DC] font-medium border-l-2 border-[#C6A66B] pl-3 py-0.5">
                파일 하나가 완성되었다고 사업이 완성되는 것은 아닙니다.
                <strong> 이제는 만드는 법을 넘어, 팔리는 구조를 배워야 합니다.</strong>
              </p>
            </div>
          </div>

          {/* 문제 카드 5종 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 max-w-5xl mx-auto">
            {[
              { num: "01", title: "판매 경로의 부재", desc: "전자책은 만들었지만 어디서 어떻게 팔아야 할지 모른다." },
              { num: "02", title: "소재 고갈과 피로", desc: "SNS에 무엇을 올려야 할지 매번 처음부터 고민한다." },
              { num: "03", title: "고객 연결 단절", desc: "관심을 보인 방문자의 정보를 내 자산으로 축적하지 못한다." },
              { num: "04", title: "수동 운영의 늪", desc: "입금 확인, 결제 링크 전송, 파일 발송을 일일이 수동 처리한다." },
              { num: "05", title: "후속 판매 실종", desc: "첫 구매가 마지막 접점이 되고 다음 상품으로 이어지지 않는다." },
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
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 03. BEFORE & AFTER (5대 비교)
         ═══════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 border-b border-[#2A211B] bg-[#0D0B0A]">
        <div className="site-container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold tracking-widest text-[#C6A66B] uppercase">
              BEFORE & AFTER
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#EDE6DC] mt-2 mb-3 break-keep">
              한 번 만들고 끝나는 전자책에서, <br />
              지속적으로 활용되는 디지털 상품으로
            </h2>
            <p className="text-sm md:text-base text-[#A8988B] break-keep">
              고객 유입부터 구매 후 관계 형성까지 전 과정이 시스템으로 바뀝니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {[
              {
                before: "전자책 PDF를 만든 후 어디에 판매할지 고민한다.",
                after: "상품페이지·결제·자동전달 동선을 구축한다.",
              },
              {
                before: "SNS마다 새로운 홍보 글을 매번 작성한다.",
                after: "원본 콘텐츠 하나를 여러 채널에 맞게 재구성한다.",
              },
              {
                before: "SNS 방문자가 일회성 방문으로 끝난다.",
                after: "무료 자료와 랜딩페이지를 통해 동의 기반 고객 DB를 확보한다.",
              },
              {
                before: "상품을 구매한 고객에게 수동으로 안내한다.",
                after: "결제 후 상품 전달과 기본 안내를 자동화한다.",
              },
              {
                before: "첫 구매가 마지막 접점이 된다.",
                after: "동의한 고객에게 유용한 이메일 콘텐츠와 후속 상품을 안내한다.",
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
          SECTION 04. THE FUNNEL — 7단계 판매 시스템 다이어그램
         ═══════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 border-b border-[#2A211B] bg-[#120E0C]">
        <div className="site-container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold tracking-widest text-[#C6A66B] uppercase">
              DIGITAL PRODUCT AUTOMATION FUNNEL
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#EDE6DC] mt-2 mb-3 break-keep">
              내 콘텐츠 하나에서 시작되는 7단계 디지털 판매 시스템
            </h2>
            <p className="text-sm md:text-base text-[#A8988B] break-keep">
              발견에서 연결, 구매와 후속 가치 확장까지 한눈에 보는 고객 여정
            </p>
          </div>

          {/* 7단계 타임라인 다이어그램 */}
          <div className="max-w-4xl mx-auto space-y-3 mb-10">
            {[
              {
                step: "STEP 01",
                title: "지식 자산 준비",
                desc: "전자책·워크북·PDF·템플릿 등 판매할 콘텐츠 준비",
                tag: "ASSET",
              },
              {
                step: "STEP 02",
                title: "랜딩페이지 구축",
                desc: "상품 가치와 무료 자료를 소개하고 고객 행동을 명확히 안내",
                tag: "PAGE",
              },
              {
                step: "STEP 03",
                title: "SNS 콘텐츠 멀티유즈",
                desc: "원본 콘텐츠를 스레드·인스타·블로그·숏폼으로 다양하게 확장",
                tag: "TRAFFIC",
              },
              {
                step: "STEP 04",
                title: "고객 DB 확보",
                desc: "무료 전자책·체험 콘텐츠 등으로 관심 고객을 유입하고 동의 기반 신청 정보 수집",
                tag: "LEAD",
              },
              {
                step: "STEP 05",
                title: "이메일 관계 형성",
                desc: "유용한 정보, 활용 팁, 신뢰 형성 콘텐츠로 잠재 고객과 지속적 소통",
                tag: "NURTURE",
              },
              {
                step: "STEP 06",
                title: "결제 및 자동전달",
                desc: "간편 판매 도구를 이용해 상품 판매와 구매 즉시 파일 자동전달 연결",
                tag: "SALES",
              },
              {
                step: "STEP 07",
                title: "후속 상품과 가치 확장",
                desc: "심화 전자책·VOD 강의·원데이·정규과정 등 다음 단계 상품으로 확장 안내",
                tag: "EXPAND",
              },
            ].map((step, idx) => (
              <div
                key={idx}
                className="bg-[#14100E] border border-[#2A211B] p-4 sm:p-5 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:border-[#C6A66B]/50 transition-colors"
              >
                <div className="flex items-start sm:items-center gap-3.5">
                  <span className="w-16 text-center py-1 rounded bg-[#C6A66B]/10 border border-[#C6A66B]/30 text-xs font-mono font-bold text-[#C6A66B] shrink-0">
                    {step.step}
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-[#EDE6DC]">{step.title}</h3>
                    <p className="text-xs sm:text-sm text-[#A8988B] mt-0.5 break-keep">{step.desc}</p>
                  </div>
                </div>
                <span className="text-[10px] font-mono text-[#8C7A6B] bg-[#1C1512] px-2 py-1 rounded self-start sm:self-center shrink-0">
                  {step.tag}
                </span>
              </div>
            ))}
          </div>

          {/* 하단 강조 문구 & 안내 */}
          <div className="max-w-3xl mx-auto bg-gradient-to-r from-[#241A14] via-[#35261C] to-[#241A14] border border-[#C6A66B]/40 p-5 sm:p-6 rounded-2xl text-center">
            <p className="text-sm sm:text-base md:text-lg font-bold text-[#EDE6DC] break-keep mb-2">
              ✨ &ldquo;콘텐츠는 발견을 만들고, 랜딩페이지는 연결을 만들며, 지속적인 소통은 신뢰를 쌓습니다.&rdquo;
            </p>
            <p className="text-xs text-[#A8988B] leading-relaxed break-keep">
              * 위 흐름은 대표적인 교육용 퍼널입니다. 무료 DB 신청 없이 직접 구매하는 동선이나 구매 후 추가 상담으로 이어지는 동선 등 비즈니스 상황에 맞춰 유연하게 적용할 수 있습니다.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 05. KNOWLEDGE ASSET — 지식 상품 준비
         ═══════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 border-b border-[#2A211B] bg-[#0D0B0A]">
        <div className="site-container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold tracking-widest text-[#C6A66B] uppercase">
              KNOWLEDGE ASSET
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#EDE6DC] mt-2 mb-3 break-keep">
              내가 가진 지식에서 첫 번째 디지털 상품을 시작합니다.
            </h2>
            <p className="text-sm md:text-base text-[#A8988B] break-keep">
              이번 수업은 원고를 처음부터 쓰는 시간이 아닙니다. 준비된 지식을 판매 시스템으로 전환하는 데 집중합니다.
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-[#14100E] border border-[#2A211B] p-6 sm:p-8 rounded-2xl mb-8">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#C6A66B] mb-4">
              다룰 수 있는 지식 상품 유형 5종
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                { title: "전자책 PDF", desc: "나의 전문 지식과 노하우를 집약한 본편 유료 전자책" },
                { title: "무료 미니 전자책", desc: "핵심 팁을 담아 잠재 고객의 이메일 신청을 유도하는 리드마그넷" },
                { title: "워크북 및 체크리스트", desc: "독자가 직접 따라 하며 실행할 수 있는 실천형 워크시트" },
                { title: "프롬프트 · 디지털 템플릿", desc: "업무와 창작 속도를 10배 높여주는 실무용 템플릿 파일" },
                { title: "녹화 강의 & 후속 교육", desc: "전자책 구매자가 추가로 선택할 수 있는 VOD 및 코칭 상품" },
              ].map((asset, idx) => (
                <div key={idx} className="bg-[#1C1512] border border-[#2A211B] p-4 rounded-xl">
                  <span className="text-xs font-bold text-[#C6A66B] block mb-1">TYPE 0{idx + 1}</span>
                  <h4 className="text-sm font-bold text-[#EDE6DC] mb-1">{asset.title}</h4>
                  <p className="text-xs text-[#A8988B] leading-relaxed">{asset.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-5 border-t border-[#2A211B] text-center">
              <p className="text-xs sm:text-sm text-[#EDE6DC] font-medium break-keep">
                * 전자책이 아직 준비되지 않은 수강생도 안심하고 참여할 수 있도록 <strong>실습용 샘플 파일</strong>을 제공해 드립니다.
              </p>
            </div>
          </div>

          <div className="text-center max-w-xl mx-auto">
            <p className="text-base sm:text-lg font-bold text-[#EDE6DC]">
              &ldquo;상품을 만드는 기술에서 한 단계 더 나아가, 그 지식 자산을 판매하고 관리하는 구조를 배웁니다.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 06. LANDING PAGE — 고객 유입 랜딩페이지
         ═══════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 border-b border-[#2A211B] bg-[#120E0C]">
        <div className="site-container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold tracking-widest text-[#C6A66B] uppercase">
              BUILD YOUR LANDING PAGE
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#EDE6DC] mt-2 mb-3 break-keep">
              관심을 보인 사람을 어디로 안내할 것인가?
            </h2>
            <p className="text-sm md:text-base text-[#A8988B] break-keep">
              SNS에서 콘텐츠를 보고 찾아온 잠재 고객이 머뭇거림 없이 행동할 수 있도록 최적화된 랜딩페이지를 설계합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {/* 랜딩페이지 6대 구성 요소 */}
            <div className="bg-[#14100E] border border-[#2A211B] p-6 rounded-2xl">
              <span className="text-xs font-bold uppercase tracking-wider text-[#C6A66B] block mb-3">
                STRUCTURE · 6대 기본 구성
              </span>
              <ul className="space-y-3 text-xs sm:text-sm">
                {[
                  { num: "01", text: "고객의 고민을 정밀하게 건드리는 후킹 헤드카피" },
                  { num: "02", text: "무료 자료 또는 상품이 해결해 주는 핵심 가치 제안" },
                  { num: "03", text: "독자가 얻을 수 있는 구체적인 혜택과 산출물 안내" },
                  { num: "04", text: "신뢰를 더하는 목차, 저자 소개, 본문 미리보기" },
                  { num: "05", text: "명확하고 누르기 쉬운 이메일 신청 폼 및 구매 버튼" },
                  { num: "06", text: "개인정보 수집 및 마케팅 수신 동의 절차 안내" },
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-[#A8988B]">
                    <span className="font-mono text-xs font-bold text-[#C6A66B] mt-0.5">{item.num}</span>
                    <span className="text-[#EDE6DC]">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 실습 내용 */}
            <div className="bg-[#14100E] border border-[#2A211B] p-6 rounded-2xl flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#C6A66B] block mb-3">
                  PRACTICE · 실전 실습 내용
                </span>
                <div className="space-y-2.5 text-xs sm:text-sm text-[#A8988B]">
                  <div className="bg-[#1C1512] p-3 rounded-xl border border-[#2A211B]">
                    <p className="font-bold text-[#EDE6DC] mb-1">무료 전자책 배포용 랜딩 동선</p>
                    <p className="text-[11px]">이메일만 입력하면 즉시 무료 자료를 발송하는 간편 리드 수집 페이지</p>
                  </div>
                  <div className="bg-[#1C1512] p-3 rounded-xl border border-[#2A211B]">
                    <p className="font-bold text-[#EDE6DC] mb-1">유료 전자책 구매 전환 동선</p>
                    <p className="text-[11px]">설득력 있는 카피와 결제 링크를 연결해 바로 구매가 일어나는 판매 페이지</p>
                  </div>
                  <div className="bg-[#1C1512] p-3 rounded-xl border border-[#2A211B]">
                    <p className="font-bold text-[#EDE6DC] mb-1">신청 후 감사 페이지 & 다음 안내</p>
                    <p className="text-[11px]">신청 완료 후 오픈채팅방 또는 이메일 확인을 유도하는 후속 행동 설계</p>
                  </div>
                </div>
              </div>
              <p className="text-[11px] text-[#7C6656] mt-4 pt-3 border-t border-[#2A211B]">
                * 랜딩페이지의 실제 구현 범위는 수업에서 사용하는 도구와 템플릿 기준으로 실습합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 07. SNS MULTI-USE — 콘텐츠 멀티유즈
         ═══════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 border-b border-[#2A211B] bg-[#0D0B0A]">
        <div className="site-container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold tracking-widest text-[#C6A66B] uppercase">
              ONE CONTENT · MULTIPLE CHANNELS
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#EDE6DC] mt-2 mb-3 break-keep">
              전자책 한 챕터가 여러 개의 SNS 콘텐츠가 됩니다.
            </h2>
            <p className="text-sm md:text-base text-[#A8988B] break-keep">
              매일 새로운 소재를 처음부터 고민하는 대신, 이미 만든 지식 자산을 다양한 콘텐츠로 다시 표현합니다.
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-[#14100E] border border-[#2A211B] rounded-2xl p-6 sm:p-8 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              {/* 원본 */}
              <div className="md:col-span-4 bg-[#1C1512] border border-[#3A2D25] p-5 rounded-xl text-center">
                <span className="text-xs font-mono font-bold text-[#C6A66B] uppercase block mb-1">
                  SOURCE CONTENT
                </span>
                <span className="text-3xl my-2 block">📖</span>
                <h4 className="text-sm font-bold text-[#EDE6DC]">전자책 1개 챕터</h4>
                <p className="text-xs text-[#A8988B] mt-1">또는 블로그 핵심 글 1편</p>
              </div>

              {/* 분기 화살표 */}
              <div className="md:col-span-1 flex justify-center text-[#C6A66B] text-xl font-bold">
                <span className="hidden md:inline">→</span>
                <span className="md:hidden">↓</span>
              </div>

              {/* 채널별 변환 결과 */}
              <div className="md:col-span-7 space-y-2 text-xs">
                {[
                  { channel: "THREADS", label: "스레드", desc: "공감과 대화를 이끄는 짧은 글 및 연속 스레드 게시물" },
                  { channel: "INSTAGRAM", label: "인스타그램", desc: "카드뉴스 슬라이드별 원고, 릴스 후킹 문구, 캡션" },
                  { channel: "BLOG", label: "네이버/티스토리", desc: "검색 의도에 맞춘 체계적인 정보형 설명 글" },
                  { channel: "SHORTS & REELS", label: "숏폼 비디오", desc: "15~60초 분량의 빠른 후킹 영상 대본" },
                  { channel: "EMAIL", label: "뉴스레터", desc: "구독자에게 깊은 신뢰를 전하는 인사이트 이메일" },
                ].map((item, idx) => (
                  <div key={idx} className="bg-[#1C1512] p-2.5 rounded-lg border border-[#2A211B] flex items-center justify-between">
                    <div>
                      <span className="font-mono font-bold text-[#C6A66B] mr-2">{item.channel}</span>
                      <span className="text-[11px] text-[#A8988B]">{item.desc}</span>
                    </div>
                    <span className="text-[10px] text-[#7C6656] shrink-0 hidden sm:inline">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center max-w-xl mx-auto">
            <p className="text-base sm:text-lg font-bold text-[#EDE6DC]">
              &ldquo;하나의 지식 자산을, 여러 채널에서 계속 활용하는 콘텐츠 시스템.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 08. SPECIAL SKILL 01 — SNS 멀티유즈 스킬
         ═══════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 border-b border-[#2A211B] bg-[#120E0C]">
        <div className="site-container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold tracking-widest text-[#C6A66B] uppercase">
              CONTENT REPURPOSING SKILL
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#EDE6DC] mt-2 mb-3 break-keep">
              한 번 작성한 원고를 여러 채널의 언어로 바꿉니다.
            </h2>
            <p className="text-sm md:text-base text-[#A8988B] break-keep">
              자명스쿨에서 제공하는 SNS 멀티유즈 변환 스킬로 복사·붙여넣기가 아닌 채널별 맞춤 포맷으로 재구성합니다.
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-[#14100E] border border-[#2A211B] rounded-2xl p-6 sm:p-8 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* 입력 예시 */}
              <div className="bg-[#1C1512] p-5 rounded-xl border border-[#3A2D25]">
                <span className="text-xs font-bold text-[#C6A66B] uppercase block mb-2">
                  INPUT EXAMPLE · 입력 예시
                </span>
                <div className="bg-[#0D0B0A] p-3 rounded-lg border border-[#2A211B] text-xs text-[#EDE6DC]">
                  &ldquo;전자책 3장 — 내가 가진 지식을 상품으로 만드는 방법&rdquo;
                </div>
                <p className="text-xs text-[#A8988B] mt-3 leading-relaxed">
                  원고의 핵심 텍스트를 입력하면 스킬이 각 플랫폼의 문법(문장 길이, 어조, 시각 구조)을 분석합니다.
                </p>
              </div>

              {/* 출력 예시 */}
              <div className="bg-[#1C1512] p-5 rounded-xl border border-[#3A2D25]">
                <span className="text-xs font-bold text-[#C6A66B] uppercase block mb-2">
                  OUTPUT EXAMPLE · 자동 생성 결과
                </span>
                <ul className="space-y-1.5 text-xs text-[#EDE6DC]">
                  <li className="flex items-center gap-1.5">
                    <span className="text-[#C6A66B]">✓</span>
                    <span>스레드용 짧은 글과 연속 게시물 세트</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="text-[#C6A66B]">✓</span>
                    <span>인스타그램 카드뉴스 슬라이드별 원고 (1~10장)</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="text-[#C6A66B]">✓</span>
                    <span>릴스·쇼츠 후킹 문구 및 대본</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="text-[#C6A66B]">✓</span>
                    <span>블로그 검색 최적화용 소개 글</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="text-[#C6A66B]">✓</span>
                    <span>이메일 뉴스레터 본문 초안</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="text-[#C6A66B]">✓</span>
                    <span>채널별 맞춤형 CTA 문구 & 해시태그 후보</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#2A211B] text-center">
              <p className="text-xs text-[#A8988B]">
                * 동일한 글을 그대로 올리는 것이 아니라, 플랫폼 알고리즘과 사용자 소비 습관에 최적화된 형식으로 바꿉니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 09. SNS PUBLISHING — SNS 발행 자동화
         ═══════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 border-b border-[#2A211B] bg-[#0D0B0A]">
        <div className="site-container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold tracking-widest text-[#C6A66B] uppercase">
              SOCIAL PUBLISHING WORKFLOW
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#EDE6DC] mt-2 mb-3 break-keep">
              만든 콘텐츠를 계획하고, 검수하고, 발행하는 흐름까지 연결합니다.
            </h2>
            <p className="text-sm md:text-base text-[#A8988B] break-keep">
              체계적인 일정표와 예약 발행 도구를 활용해 지치지 않고 지속 가능한 운영 워크플로를 구축합니다.
            </p>
          </div>

          {/* 7단계 발행 파이프라인 */}
          <div className="max-w-4xl mx-auto mb-10">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#C6A66B] mb-4 text-center sm:text-left">
              PUBLISHING PIPELINE · 기본 발행 자동화 흐름
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2 text-center text-xs">
              {[
                { step: "01", name: "원본 선택" },
                { step: "02", name: "멀티유즈 변환" },
                { step: "03", name: "문구·이미지 검수" },
                { step: "04", name: "채널별 준비" },
                { step: "05", name: "예약·자동 게시" },
                { step: "06", name: "게시 결과 확인" },
                { step: "07", name: "댓글·반응 분석" },
              ].map((item, idx) => (
                <div key={idx} className="bg-[#14100E] border border-[#2A211B] p-3 rounded-xl">
                  <span className="text-[10px] font-mono text-[#C6A66B] block mb-1">{item.step}</span>
                  <span className="font-bold text-[#EDE6DC] block break-keep">{item.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 실습 내용 및 현실적 가이드 */}
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[#14100E] border border-[#2A211B] p-5 rounded-xl">
              <h4 className="text-sm font-bold text-[#EDE6DC] mb-2">실습 핵심 내용</h4>
              <ul className="space-y-1.5 text-xs text-[#A8988B]">
                <li>• 채널별 게시물 규격 및 알고리즘 특성 이해</li>
                <li>• 한 주 단위 콘텐츠 캘린더 작성 실습</li>
                <li>• 스레드/인스타그램 공식 예약 발행 기능 활용</li>
                <li>• 블로그 예약 업로드 및 태그 최적화</li>
                <li>• 발행 오류 대응 및 반응 모니터링</li>
              </ul>
            </div>
            <div className="bg-[#181310] border border-[#3A2D25] p-5 rounded-xl flex flex-col justify-between">
              <div>
                <h4 className="text-sm font-bold text-[#C6A66B] mb-2">실습 범위 가이드</h4>
                <p className="text-xs text-[#A8988B] leading-relaxed break-keep">
                  플랫폼별 API와 계정 권한(프로페셔널/비즈니스)에 따라 자동 게시 지원 범위가 다릅니다.
                  완전한 무인 자동화라는 비현실적 과장 대신, 안전하고 실현 가능한 예약 워크플로와 댓글 응답 초안 작성 중심으로 실습합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 10. LEAD MAGNET — 무료 콘텐츠와 DB 수집
         ═══════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 border-b border-[#2A211B] bg-[#120E0C]">
        <div className="site-container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold tracking-widest text-[#C6A66B] uppercase">
              BUILD YOUR CUSTOMER LIST
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#EDE6DC] mt-2 mb-3 break-keep">
              SNS의 방문자를, 다시 만날 수 있는 고객과 연결합니다.
            </h2>
            <p className="text-sm md:text-base text-[#A8988B] break-keep">
              팔로워 숫자만 늘리는 것이 아니라, 내 콘텐츠를 필요로 하는 사람의 동의 기반 고객 DB를 축적합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-8">
            <div className="bg-[#14100E] border border-[#2A211B] p-6 rounded-2xl">
              <span className="text-xs font-bold text-[#C6A66B] uppercase block mb-3">
                무료 콘텐츠(리드마그넷) 예시 5종
              </span>
              <ul className="space-y-2 text-xs sm:text-sm text-[#A8988B]">
                <li className="flex items-center gap-2">
                  <span className="text-[#C6A66B]">•</span>
                  <span className="text-[#EDE6DC]">핵심 요약본을 담은 무료 미니 전자책</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#C6A66B]">•</span>
                  <span className="text-[#EDE6DC]">실무에 바로 쓰는 실전 체크리스트</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#C6A66B]">•</span>
                  <span className="text-[#EDE6DC]">시간을 아껴주는 작업용 템플릿 & 시트</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#C6A66B]">•</span>
                  <span className="text-[#EDE6DC]">기초 개념을 정리한 무료 체험 강의 자료</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#C6A66B]">•</span>
                  <span className="text-[#EDE6DC]">본편 전자책 1~2개 챕터 미리보기 PDF</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#14100E] border border-[#2A211B] p-6 rounded-2xl">
              <span className="text-xs font-bold text-[#C6A66B] uppercase block mb-3">
                고객 DB 수집 및 자동발송 실습
              </span>
              <ul className="space-y-2 text-xs sm:text-sm text-[#A8988B]">
                <li className="flex items-center gap-2">
                  <span className="text-[#C6A66B]">✓</span>
                  <span>신청 폼과 개인정보 수집 동의 체크박스 구성</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#C6A66B]">✓</span>
                  <span>신청 즉시 이메일로 무료 자료 자동 전송</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#C6A66B]">✓</span>
                  <span>구독자 명단 자동 정리 및 관리</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#C6A66B]">✓</span>
                  <span>수신 거부 및 개인정보 보호 법규 준수 가이드</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="max-w-3xl mx-auto bg-[#181310] border border-[#3A2D25] p-4 rounded-xl text-center text-xs text-[#A8988B]">
            * 자명스쿨은 무단 크롤링이나 스크래핑을 일체 배제하며, 오직 <strong>고객의 자발적인 신청과 동의에 기반한 정당한 관계 형성</strong>만을 교육합니다.
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 11. NO-CODE DIGITAL SALES — 간편 디지털 자동판매
          (플랫폼 브랜드명 비공개 원칙 완벽 준수)
         ═══════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 border-b border-[#2A211B] bg-[#0D0B0A]">
        <div className="site-container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold tracking-widest text-[#C6A66B] uppercase">
              NO-CODE DIGITAL SALES
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#EDE6DC] mt-2 mb-3 break-keep">
              복잡한 쇼핑몰 없이 시작하는 디지털 상품 자동판매
            </h2>
            <p className="text-sm md:text-base text-[#C6A66B] font-medium mb-3">
              판매 페이지부터 결제, 파일 자동전달까지 한 번에
            </p>
            <p className="text-xs sm:text-sm text-[#A8988B] leading-relaxed break-keep">
              전자책 한 권을 판매하기 위해 처음부터 복잡한 홈페이지를 구축할 필요는 없습니다.
              간편한 디지털 상품 판매 플랫폼을 활용하면 상품 소개 페이지를 만들고, 결제와 구매 후 파일 전달까지 하나의 흐름으로 연결할 수 있습니다.
              이번 클래스에서는 실제 활용 가능한 판매 도구를 비교하고, 자신의 상품과 운영 목적에 맞는 방식을 선택해 판매 시스템을 구성하는 방법을 배웁니다.
            </p>
          </div>

          {/* 핵심 실습 5단계 카드 */}
          <div className="max-w-4xl mx-auto space-y-3 mb-8">
            {[
              {
                step: "STEP 01",
                title: "디지털 상품 등록",
                desc: "전자책·PDF·워크북·템플릿 등 판매할 디지털 상품을 등록합니다.",
              },
              {
                step: "STEP 02",
                title: "판매 페이지와 결제 링크 만들기",
                desc: "고객을 설득하는 상품 소개와 편리한 구매 동선을 구성합니다.",
              },
              {
                step: "STEP 03",
                title: "간편결제 연결",
                desc: "선택한 플랫폼의 가입 및 결제 이용 조건을 확인하고 가능한 방식으로 결제를 설정합니다.",
              },
              {
                step: "STEP 04",
                title: "구매 후 자동전달",
                desc: "결제 완료 후 파일이나 다운로드 안내가 실시간으로 전달되는 자동화 흐름을 설정합니다.",
              },
              {
                step: "STEP 05",
                title: "고객 안내 및 후속 마케팅",
                desc: "구매자 안내와 고객 정보 관리, 지원되는 이메일 자동화 기능을 활용합니다.",
              },
            ].map((st, idx) => (
              <div
                key={idx}
                className="bg-[#14100E] border border-[#2A211B] p-4 sm:p-5 rounded-2xl flex items-start gap-4 hover:border-[#C6A66B]/50 transition-colors"
              >
                <span className="w-16 py-1 rounded bg-[#C6A66B]/10 border border-[#C6A66B]/30 text-xs font-mono font-bold text-[#C6A66B] text-center shrink-0 mt-0.5">
                  {st.step}
                </span>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-[#EDE6DC] mb-1">{st.title}</h3>
                  <p className="text-xs sm:text-sm text-[#A8988B] leading-relaxed break-keep">{st.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* 강조 문구 및 현실적 안내 */}
          <div className="max-w-3xl mx-auto bg-gradient-to-r from-[#241A14] via-[#35261C] to-[#241A14] border border-[#C6A66B]/40 p-5 rounded-2xl text-center mb-6">
            <p className="text-sm sm:text-base md:text-lg font-bold text-[#EDE6DC] break-keep">
              ✨ &ldquo;상품만 만들지 마세요. 고객이 구매하고 전달받는 과정까지 연결하세요.&rdquo;
            </p>
          </div>

          <div className="max-w-3xl mx-auto bg-[#181310] border border-[#3A2D25] p-4 rounded-xl text-center text-xs text-[#A8988B] leading-relaxed">
            * 활용 도구와 세부 설정 방법은 실제 수업에서 상세히 안내해 드립니다. <br />
            * 플랫폼에 따라 회원가입, 본인 인증, 사업자 여부, 판매 심사, 결제 수수료 및 유료 기능 조건이 다를 수 있으며, 사업자등록 없이 모든 결제 기능을 무제한 사용할 수 있다고 과장하지 않습니다.
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 12. EMAIL AUTOMATION — 이메일 마케팅
         ═══════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 border-b border-[#2A211B] bg-[#120E0C]">
        <div className="site-container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold tracking-widest text-[#C6A66B] uppercase">
              EMAIL RELATIONSHIP FUNNEL
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#EDE6DC] mt-2 mb-3 break-keep">
              한 번의 방문을, 지속적인 고객 관계로 연결합니다.
            </h2>
            <p className="text-sm md:text-base text-[#A8988B] break-keep">
              무료 자료를 신청했거나 구매 이후 마케팅 수신에 동의한 고객에게 유용한 정보와 후속 콘텐츠를 전달하는 이메일 시퀀스를 설계합니다.
            </p>
          </div>

          {/* 이메일 5단계 시퀀스 */}
          <div className="max-w-4xl mx-auto space-y-3 mb-8">
            {[
              {
                mail: "EMAIL 01",
                title: "환영과 무료 자료 전달",
                desc: "신청한 자료를 즉시 보내드리고, 가장 먼저 확인해야 할 핵심 활용 방법을 친절하게 안내합니다.",
              },
              {
                mail: "EMAIL 02",
                title: "유용한 정보 제공 (가치 전달)",
                desc: "고객이 겪고 있는 실무적인 고민과 관련된 팁을 전달하며 내 전문성에 대한 신뢰를 쌓습니다.",
              },
              {
                mail: "EMAIL 03",
                title: "신뢰 형성과 적용 사례",
                desc: "실제 적용 예시와 비포&애프터를 소개하며 독자 스스로 문제를 해결할 수 있다는 확신을 줍니다.",
              },
              {
                mail: "EMAIL 04",
                title: "유료 상품 안내 (전자책 소개)",
                desc: "고객의 필요와 자연스럽게 연결되는 본편 전자책의 핵심 가치와 특별 혜택을 정중하게 제안합니다.",
              },
              {
                mail: "EMAIL 05",
                title: "후속 콘텐츠 & 다음 단계 안내",
                desc: "관련 워크북, VOD 강의, 원데이 클래스 등 고객이 지속적으로 성장할 수 있는 다음 학습을 안내합니다.",
              },
            ].map((seq, idx) => (
              <div
                key={idx}
                className="bg-[#14100E] border border-[#2A211B] p-4 sm:p-5 rounded-2xl flex items-start gap-4"
              >
                <span className="w-20 py-1 rounded bg-[#C6A66B]/10 border border-[#C6A66B]/30 text-xs font-mono font-bold text-[#C6A66B] text-center shrink-0 mt-0.5">
                  {seq.mail}
                </span>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-[#EDE6DC] mb-1">{seq.title}</h3>
                  <p className="text-xs sm:text-sm text-[#A8988B] leading-relaxed break-keep">{seq.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-xs text-[#7C6656]">
            * 광고성 정보 표기의무와 수신거부 기능 등 관련 법규 요건을 철저히 지키며, 단순 거래 안내 메일과 마케팅 메일의 목적을 명확히 구분합니다.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 13. AUTOMATION SKILLS — 제공 스킬 및 템플릿
         ═══════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 border-b border-[#2A211B] bg-[#0D0B0A]">
        <div className="site-container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold tracking-widest text-[#C6A66B] uppercase">
              SPECIAL AUTOMATION TOOLKIT
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#EDE6DC] mt-2 mb-3 break-keep">
              한 번 배우고 끝나지 않도록, 반복해서 활용할 수 있는 실전 자료를 제공합니다.
            </h2>
            <p className="text-sm md:text-base text-[#A8988B] break-keep">
              수업 후 혼자서도 새 상품의 판매 시스템을 뚝딱 조립할 수 있는 스킬과 기획 템플릿
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto mb-8">
            {[
              {
                badge: "SPECIAL SKILL 01",
                title: "SNS 멀티유즈 콘텐츠 변환 스킬",
                desc: "원본 전자책·블로그·강의 콘텐츠를 채널별 맞춤 콘텐츠로 재구성하는 맞춤형 변환 도구",
              },
              {
                badge: "SPECIAL SKILL 02",
                title: "SNS 발행 자동화 실습 가이드",
                desc: "게시물 준비, 일정표 수립, 예약 발행 및 채널별 운영 체크포인트를 정리한 실습 가이드",
              },
              {
                badge: "TEMPLATE 01",
                title: "전자책 판매 퍼널 기획서",
                desc: "상품 가치, 타깃, 무료 콘텐츠, 랜딩페이지, 판매 동선의 전체 흐름을 정리하는 기획 시트",
              },
              {
                badge: "TEMPLATE 02",
                title: "무료 자료 및 랜딩페이지 기획서",
                desc: "잠재 고객의 클릭을 유도하고 이메일 신청율을 극대화하는 랜딩페이지 카피라이팅 템플릿",
              },
              {
                badge: "TEMPLATE 03",
                title: "이메일 시퀀스 템플릿",
                desc: "환영, 정보 제공, 상품 제안, 후속 안내까지 복사해서 바로 쓰는 5단계 이메일 문구 초안",
              },
              {
                badge: "GUIDE",
                title: "디지털 상품 자동판매 구축 실습 가이드",
                desc: "상품 등록부터 결제 링크 생성, 다운로드 자동전달, 구매자 안내까지 한 번에 정리한 실전 가이드",
              },
            ].map((tool, idx) => (
              <div key={idx} className="bg-[#14100E] border border-[#2A211B] p-5 rounded-2xl flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-mono font-bold text-[#C6A66B] block mb-2">{tool.badge}</span>
                  <h3 className="text-sm sm:text-base font-bold text-[#EDE6DC] mb-2">{tool.title}</h3>
                  <p className="text-xs text-[#A8988B] leading-relaxed">{tool.desc}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#2A211B] text-[11px] text-[#8E6D38] font-medium">
                  수강 시 제공 예정
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-xs text-[#7C6656]">
            * 각 자료는 최종 제공 여부와 파일 형식을 확인한 후 개강 시점에 확정 배포됩니다.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 14. ONE DAY RESULT — 수업 결과물 7대 산출물
         ═══════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 border-b border-[#2A211B] bg-[#120E0C]">
        <div className="site-container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold tracking-widest text-[#C6A66B] uppercase">
              ONE DAY DELIVERABLES
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#EDE6DC] mt-2 mb-3 break-keep">
              전자책 하나를 중심으로, 나만의 디지털 판매 흐름을 설계합니다.
            </h2>
            <p className="text-sm md:text-base text-[#A8988B] break-keep">
              원데이 클래스를 마친 후 내 손에 남는 7가지 구체적인 비즈니스 자산
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-3 mb-8">
            {[
              { num: "01", name: "전자책 또는 디지털 상품 판매 퍼널 기획안", detail: "내 상품의 유입과 구매 동선을 한 장으로 정리한 마스터 플랜" },
              { num: "02", name: "랜딩페이지 및 무료 자료 신청 흐름", detail: "방문자를 잠재 고객 DB로 전환하는 신청 페이지 구조" },
              { num: "03", name: "SNS 멀티유즈 콘텐츠 샘플", detail: "스레드, 인스타, 블로그에 즉시 발행 가능한 채널별 콘텐츠 초안" },
              { num: "04", name: "SNS 발행·예약 운영 워크플로 초안", detail: "지치지 않고 꾸준히 글을 올릴 수 있는 주간 발행 캘린더" },
              { num: "05", name: "디지털 상품 자동판매 설정 예시", detail: "상품 등록, 결제 링크, 파일 자동전달이 연결된 판매 세팅" },
              { num: "06", name: "이메일 시퀀스 및 DB 관리 설계안", detail: "무료 신청 고객에게 자동으로 발송되는 신뢰 형성 이메일 흐름" },
              { num: "07", name: "후속 상품으로 확장하는 고객 여정도", detail: "전자책 이후 VOD, 원데이, 정규과정으로 연결되는 장기 로드맵" },
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
                    <p className="text-xs text-[#A8988B] mt-0.5">{deliv.detail}</p>
                  </div>
                </div>
                <span className="text-xs text-[#C6A66B] font-bold shrink-0 hidden sm:inline">완성 목표</span>
              </div>
            ))}
          </div>

          <p className="text-center text-xs text-[#7C6656] max-w-2xl mx-auto">
            * 하루 안에 모든 외부 플랫폼을 완전히 연동한 거대 시스템을 보장하기보다는, 대표 상품 하나를 중심으로 핵심 판매 흐름을 체화하고 이후 스스로 반복 적용할 수 있는 실천 역량을 완성합니다.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 15. CLASS CURRICULUM — 실전 커리큘럼 7단계
         ═══════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 border-b border-[#2A211B] bg-[#0D0B0A]">
        <div className="site-container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold tracking-widest text-[#C6A66B] uppercase">
              CURRICULUM
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#EDE6DC] mt-2 mb-3 break-keep">
              지식 상품에서 고객 유입, 결제, 후속 마케팅까지
            </h2>
            <p className="text-sm md:text-base text-[#A8988B] break-keep">
              실무에서 바로 작동하는 1인 디지털 비즈니스 7단계 완벽 마스터
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                part: "PART 01",
                title: "전자책 자동판매 퍼널 이해",
                desc: "디지털 상품 판매 구조의 본질 · 유입과 구매 전환의 차이 · 고객 여정과 퍼널 설계 · 실습용 상품 정리",
              },
              {
                part: "PART 02",
                title: "랜딩페이지 및 무료 자료 기획",
                desc: "상품의 핵심 가치 도출 · 무료 리드마그넷 구성 · 랜딩페이지 구조와 행동 유도 CTA · DB 수집 동선 설계",
              },
              {
                part: "PART 03",
                title: "SNS 멀티유즈 스킬 활용",
                desc: "원본 지식 콘텐츠 정리 · 스레드 글 변환 · 인스타 카드뉴스 및 릴스 원고 · 블로그 및 숏폼 재구성 실습",
              },
              {
                part: "PART 04",
                title: "SNS 발행 자동화 워크플로",
                desc: "콘텐츠 검수 및 주간 일정표 · 예약·자동 게시 구조 · 지원 채널별 업로드 실습 · 게시 오류 및 댓글 관리 흐름",
              },
              {
                part: "PART 05",
                title: "간편결제 · 디지털 상품 자동판매 구축",
                desc: "판매 플랫폼 선택 기준 · 상품 등록 및 판매 페이지 만들기 · 결제 링크와 구매 동선 설정 · 디지털 파일 자동전달 · 고객 안내 및 구매 테스트",
              },
              {
                part: "PART 06",
                title: "고객 DB와 이메일 마케팅",
                desc: "무료 콘텐츠 신청자 DB 관리 · 개인정보 및 마케팅 동의 구분 · 자동 환영 이메일 발송 · 신뢰 형성 시퀀스 · 후속 상품 연결",
              },
              {
                part: "PART 07",
                title: "전체 퍼널 연결과 최종 검수",
                desc: "SNS에서 랜딩페이지 이동 테스트 · 무료 신청 및 자료 전달 검증 · 상품 구매 테스트 · 향후 자체 시스템 확장 로드맵",
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
          SECTION 16. BEGINNER & ADVANCED — 수강 대상과 난이도
         ═══════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 border-b border-[#2A211B] bg-[#120E0C]">
        <div className="site-container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold tracking-widest text-[#C6A66B] uppercase">
              RECOMMENDED FOR
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#EDE6DC] mt-2 mb-3 break-keep">
              지금 가진 콘텐츠에서 시작하는 1인 디지털 사업
            </h2>
            <p className="text-sm md:text-base text-[#A8988B] break-keep">
              팔리는 구조를 갖춰 지식 자산을 지속 가능한 수입원으로 키우고 싶은 모든 분
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto mb-8">
            {[
              "전자책을 만들었지만 어떻게 팔아야 할지 모르는 분",
              "자신의 지식과 경험을 디지털 상품으로 만들고 싶은 분",
              "SNS 홍보를 주먹구구식이 아닌 시스템으로 운영하고 싶은 분",
              "매번 새로운 콘텐츠를 만드는 데 큰 부담을 느끼는 분",
              "고객 DB와 이메일 마케팅을 체계적으로 시작하고 싶은 분",
              "수동 입금 확인과 파일 발송에서 벗어나고 싶은 1인 창업가",
              "온라인 교육, VOD, 강의 상품으로 비즈니스를 확장하고 싶은 분",
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

          <div className="max-w-2xl mx-auto bg-[#181310] border border-[#3A2D25] p-4 rounded-xl text-center text-xs text-[#A8988B]">
            <strong>권장 선수 지식:</strong> AI 기본 사용 경험(ChatGPT 등)과 SNS 기본 계정 운영 경험이 있으면 실습에 훨씬 수월합니다. 도구 연동에 익숙하지 않은 수강생을 위해 사전 안내 자료를 제공합니다.
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 17. EXPANSION — 자체 브랜드 시스템 확장
         ═══════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 border-b border-[#2A211B] bg-[#0D0B0A]">
        <div className="site-container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold tracking-widest text-[#C6A66B] uppercase">
              GROWTH ROADMAP
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#EDE6DC] mt-2 mb-3 break-keep">
              처음에는 간편하게, 사업이 성장하면 나에게 맞는 방식으로.
            </h2>
            <p className="text-sm md:text-base text-[#A8988B] break-keep">
              불필요한 초기 투자 없이, 검증된 판매 데이터를 바탕으로 단계적으로 시스템을 확장합니다.
            </p>
          </div>

          {/* 5단계 성장 로드맵 */}
          <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 mb-8">
            {[
              { step: "1단계", title: "지식 상품 준비", desc: "전자책·디지털 자료 완성" },
              { step: "2단계", title: "간편 판매 시작", desc: "도구 활용해 빠르게 판매 개시" },
              { step: "3단계", title: "퍼널 시스템 구축", desc: "SNS·고객 DB·이메일 연동" },
              { step: "4단계", title: "데이터 확인", desc: "고객 반응 및 실제 판매 검증" },
              { step: "5단계", title: "자체 시스템 확장", desc: "자사 브랜드 사이트 및 VOD 구축" },
            ].map((rd, idx) => (
              <div key={idx} className="bg-[#14100E] border border-[#2A211B] p-4 rounded-xl text-center flex flex-col justify-between">
                <div>
                  <span className="text-xs font-mono font-bold text-[#C6A66B] block mb-1">{rd.step}</span>
                  <h3 className="text-xs sm:text-sm font-bold text-[#EDE6DC] mb-1">{rd.title}</h3>
                  <p className="text-[11px] text-[#A8988B]">{rd.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto bg-[#181310] border border-[#3A2D25] p-5 rounded-2xl text-center">
            <p className="text-sm sm:text-base font-bold text-[#EDE6DC] break-keep">
              &ldquo;처음부터 큰돈 들여 홈페이지를 만들지 마세요. 먼저 팔아보고, 성장에 필요한 만큼 나만의 사업 시스템을 확장하세요.&rdquo;
            </p>
            <p className="text-xs text-[#7C6656] mt-2">
              * 자체 사이트 구축은 선택 가능한 발전 방향이며, 모든 수강생이 반드시 이동해야 하는 필수 단계는 아닙니다.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 18. FAQ (자주 묻는 질문 8문항 - 수정안 적용)
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

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: "전자책을 아직 만들지 않았는데 수강할 수 있나요?",
                a: "네, 가능합니다. 이번 강의는 전자책 제작법 자체보다 판매 퍼널 구축에 집중합니다. 제공되는 실습용 예시 상품으로 시스템을 먼저 실습한 후, 추후 자신의 전자책이 완성되었을 때 그대로 적용하실 수 있습니다.",
              },
              {
                q: "SNS를 한 번도 운영하지 않았는데 가능한가요?",
                a: "기본적인 게시 방법부터 흐름을 차근차근 설명해 드립니다. 다만 여러 채널의 예약 및 자동화 실습이 포함되므로 평소 인스타그램이나 스레드 등 SNS를 이용해 본 경험이 있으시면 훨씬 빠르게 이해하실 수 있습니다.",
              },
              {
                q: "어떤 판매 플랫폼을 사용하나요?",
                a: "전자책과 디지털 상품 판매에 손쉽게 활용할 수 있는 간편 판매 도구를 사용합니다. 구체적인 도구의 장단점과 실습 방법은 수업에서 친절히 안내해 드립니다.",
              },
              {
                q: "사업자등록 없이도 시작할 수 있나요?",
                a: "개인 판매자에게 제공되는 기능이 있는 플랫폼도 있지만, 실제 결제 이용 가능 여부와 필요한 인증·심사·수수료 조건은 플랫폼과 판매 방식에 따라 다릅니다. 수업에서 선택 가능한 방법과 사전 확인 사항을 꼼꼼히 안내해 드립니다.",
              },
              {
                q: "별도의 홈페이지를 만들어야 하나요?",
                a: "아닙니다. 처음에는 간편 판매 플랫폼이 제공하는 상품페이지와 결제 기능을 활용해 바로 시작할 수 있습니다. 자체 독립 사이트는 사업이 성장한 이후 필요에 따라 확장하시면 됩니다.",
              },
              {
                q: "SNS 게시물을 완전히 자동으로 올릴 수 있나요?",
                a: "일부 채널에서 공식적으로 지원하는 예약·자동 게시 방식을 활용할 수 있습니다. 다만 실제 지원 범위는 플랫폼 및 계정 권한(개인/프로페셔널)에 따라 달라지므로, 안전하고 지속 가능한 실천형 워크플로를 안내합니다.",
              },
              {
                q: "이메일 마케팅도 배우나요?",
                a: "네. 고객 DB 수집부터 환영 이메일, 유용한 팁 제공, 유료 상품 안내로 이어지는 5단계 이메일 시퀀스 설계와 지원 도구를 통한 자동화 흐름을 체계적으로 배웁니다.",
              },
              {
                q: "구매 고객 DB를 자유롭게 마케팅에 활용해도 되나요?",
                a: "아닙니다. 개인정보 처리 목적과 마케팅 수신 동의 여부를 명확히 구분하고 관련 법규(정보통신망법 및 개인정보보호법)에 맞는 범위 내에서만 정당하게 활용해야 합니다.",
              },
              {
                q: "수업을 들으면 자동으로 매출이 발생하나요?",
                a: "자동화는 반복적인 운영 업무를 효율화하는 훌륭한 시스템이지만 매출 자체를 보장하지는 않습니다. 상품의 매력도, 고객 유입량, 콘텐츠의 신뢰도 등에 따라 결과가 달라지며, 올바른 비즈니스 본질을 함께 안내합니다.",
              },
              {
                q: "나중에 강의나 VOD도 판매할 수 있나요?",
                a: "네, 이번 클래스에서 배운 퍼널 설계 원리는 전자책뿐만 아니라 온라인 강의, VOD, 워크북, 템플릿 등 모든 디지털 상품에 동일하게 적용하실 수 있습니다.",
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
          SECTION 19. FINAL CTA & REFUND POLICY
         ═══════════════════════════════════════════════ */}
      <section id="apply" className="py-20 md:py-28 bg-[#181310] border-b border-[#2A211B] text-center relative overflow-hidden">
        {/* 은은한 배경 광원 효과 */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#C6A66B]/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="site-container relative z-10 max-w-2xl mx-auto px-4">
          <span className="text-xs font-bold tracking-widest text-[#C6A66B] uppercase">
            RESERVATION
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#EDE6DC] mt-2 mb-4 break-keep">
            내가 만든 지식이, <br className="hidden sm:inline" />
            고객과 연결되는 시스템이 됩니다.
          </h2>
          <p className="text-sm sm:text-base text-[#A8988B] mb-8 break-keep">
            전자책 한 권에서 시작해 SNS 홍보, 고객 DB, 결제, 자동전달, 이메일 마케팅까지. <br className="hidden sm:inline" />
            나의 경험과 지식을 지속적으로 활용하는 디지털 비즈니스의 첫걸음을 시작해 보세요.
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
          <span className="text-[10px] text-[#A8988B] block">전자책 판매 퍼널·SNS 자동화</span>
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
