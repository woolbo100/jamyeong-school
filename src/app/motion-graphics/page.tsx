import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import CourseRefundPolicySection from "@/components/CourseRefundPolicySection";

export const metadata: Metadata = {
  title: "마음을 움직이는 모션그래픽 | 바이브코딩 감성 숏폼 원데이 · 자명스쿨",
  description:
    "나를 위로하는 한 문장이, 누군가의 마음을 움직이는 영상이 됩니다. Codex와 Remotion을 활용해 마인드셋 모션과 감성 힐링 숏폼을 하루 만에 완성하는 실전 원데이 클래스입니다.",
  alternates: {
    canonical: "https://www.jmschool.kr/motion-graphics",
  },
  openGraph: {
    title: "마음을 움직이는 모션그래픽 | 자명스쿨 원데이 클래스",
    description:
      "바이브코딩으로 만드는 감성·위로·동기부여 숏폼. 나만의 메시지를 움직이는 콘텐츠로 표현하는 실전 클래스입니다.",
    url: "https://www.jmschool.kr/motion-graphics",
    siteName: "자명스쿨",
    locale: "ko_KR",
    type: "website",
  },
};

// ─────────────────────────────────────────────────────────────
// [클래스 기본 설정 데이터]
// ─────────────────────────────────────────────────────────────
const CLASS_CONFIG = {
  category: "AI EMOTIONAL MOTION · ONE DAY CLASS",
  badge: "자명스쿨 감성 창작 원데이",
  titleMain: "마음을 움직이는",
  titleSub: "모션그래픽",
  subtitle: "바이브코딩으로 만드는 감성·위로·동기부여 숏폼",
  coreCopy: "“나를 위로하는 한 문장이, 누군가의 마음을 움직이는 영상이 됩니다.”",
  description:
    "내 마음에 남은 문장, 나를 다시 일으켜 세웠던 말, 누군가에게 전하고 싶은 작은 위로. 이제 그 이야기를 움직이는 영상으로 표현해 보세요. Codex와 Remotion을 활용해 감성적인 글자 움직임부터 역동적인 타이포그래피, 캐릭터와 이미지 모션까지 나만의 숏폼 콘텐츠로 제작합니다. 생각을 표현하는 즐거움과 실제 제작 기술을 함께 배우는 자명스쿨의 AI 감성 콘텐츠 클래스입니다.",
  meta: {
    format: "온라인 실습 원데이",
    duration: "세부 시간 추후 확정",
    schedule: "준비 중",
    price: "미정",
    prerequisite: "바이브코딩 기초 경험자 권장",
  },
  tags: ["바이브코딩", "Remotion", "모션그래픽", "감성숏폼", "AI콘텐츠"],
  ctaText: "개강 알림 신청",
};

export default function MotionGraphicsPage() {
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
          SECTION 01. HERO (상단 소개 · 숏폼 프리뷰 목업)
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

              {/* 핵심 감성 카피 배너 */}
              <div className="p-4 rounded-xl bg-[#FAF2E6] border border-[#E8DFD3] text-sm md:text-base font-semibold text-[#8E6D38] leading-relaxed break-keep">
                ✨ {CLASS_CONFIG.coreCopy}
              </div>

              {/* 소개 본문 */}
              <p className="text-sm sm:text-base text-[#4A3F35] leading-relaxed break-keep">
                {CLASS_CONFIG.description}
              </p>

              {/* 메타데이터 4종 카드 */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1">
                <div className="p-3 rounded-xl bg-white border border-[#E8DFD3] text-center shadow-xs">
                  <span className="block text-[11px] text-[#7C6656] mb-0.5">진행 방식</span>
                  <strong className="text-xs sm:text-sm text-[#2E2723] font-bold">
                    {CLASS_CONFIG.meta.format}
                  </strong>
                </div>
                <div className="p-3 rounded-xl bg-white border border-[#E8DFD3] text-center shadow-xs">
                  <span className="block text-[11px] text-[#7C6656] mb-0.5">수업 시간</span>
                  <strong className="text-xs sm:text-sm text-[#2E2723] font-bold">
                    {CLASS_CONFIG.meta.duration}
                  </strong>
                </div>
                <div className="p-3 rounded-xl bg-white border border-[#E8DFD3] text-center shadow-xs">
                  <span className="block text-[11px] text-[#7C6656] mb-0.5">수강료</span>
                  <strong className="text-xs sm:text-sm text-[#8E6D38] font-bold">
                    {CLASS_CONFIG.meta.price}
                  </strong>
                </div>
                <div className="p-3 rounded-xl bg-white border border-[#E8DFD3] text-center shadow-xs">
                  <span className="block text-[11px] text-[#7C6656] mb-0.5">모집 일정</span>
                  <strong className="text-xs sm:text-sm text-[#C6A66B] font-bold">
                    {CLASS_CONFIG.meta.schedule}
                  </strong>
                </div>
              </div>

              {/* 선수학습 권장 안내 뱃지 */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF2E6] border border-[#E8DFD3] text-xs font-semibold text-[#8E6D38]">
                <span>ℹ️ {CLASS_CONFIG.meta.prerequisite}</span>
              </div>

              {/* CTA 버튼 */}
              <div className="pt-2">
                <a
                  href="#apply"
                  className="w-full sm:w-auto min-h-[48px] px-8 rounded-xl bg-[#2E2723] hover:bg-[#1F1916] text-[#FFFBD1] text-base font-bold inline-flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all group"
                >
                  <span>{CLASS_CONFIG.ctaText}</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>

              {/* 키워드 태그 */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {CLASS_CONFIG.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-2.5 py-1 rounded-lg bg-[#FAF2E6] text-[#7C6656] font-medium border border-[#E8DFD3]"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* 우측: 9:16 세로형 숏폼 비주얼 목업 */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-[280px] sm:max-w-[300px] lg:max-w-[320px] relative rounded-[32px] overflow-hidden border-[6px] border-[#2A231F] bg-[#110E0C] shadow-2xl">
                {/* 스마트폰 상단 바 */}
                <div className="h-6 bg-[#1A1512] flex items-center justify-between px-5 text-[10px] text-[#8C7B6E] select-none">
                  <span>9:41</span>
                  <div className="w-12 h-3 rounded-full bg-[#0D0B0A]" />
                  <span>5G 100%</span>
                </div>

                {/* 숏폼 영상 미리보기 화면 (포스터 플레이스홀더) */}
                <div className="relative aspect-[9/16] bg-gradient-to-b from-[#1E1712] via-[#140F0D] to-[#0A0807] p-5 flex flex-col justify-between overflow-hidden">
                  {/* 상단 태그 */}
                  <div className="flex items-center justify-between z-10">
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#C6A66B]/20 text-[#D6C6A8] font-bold border border-[#C6A66B]/30">
                      Remotion 9:16
                    </span>
                    <span className="text-[10px] text-[#8C7B6E]">Short-form Video</span>
                  </div>

                  {/* 중앙 감성 타이포그래피 모션 연출 프리뷰 */}
                  <div className="text-center space-y-3 z-10 py-6">
                    <div className="w-12 h-12 mx-auto rounded-full bg-[#C6A66B]/15 border border-[#C6A66B]/30 flex items-center justify-center text-xl animate-pulse">
                      ✨
                    </div>
                    <p className="text-xs font-mono text-[#C6A66B] tracking-widest uppercase">
                      Mindset & Healing
                    </p>
                    <h3 className="text-lg sm:text-xl font-bold text-[#FAF7F2] leading-snug break-keep">
                      “나를 위로하는 한 문장이, <br />
                      누군가의 마음을 움직입니다.”
                    </h3>
                    <div className="w-10 h-0.5 bg-[#C6A66B]/40 mx-auto" />
                    <p className="text-[11px] text-[#A8988B] leading-relaxed">
                      Codex × Remotion 자동화 렌더링
                    </p>
                  </div>

                  {/* 하단 재생 컨트롤러 룩 */}
                  <div className="space-y-2 z-10">
                    <div className="w-full bg-white/10 h-1 rounded-full overflow-hidden">
                      <div className="w-2/3 bg-[#C6A66B] h-full rounded-full" />
                    </div>
                    <div className="flex items-center justify-between text-[10px] text-[#8C7B6E]">
                      <span>00:15</span>
                      <span>실제 MP4 영상 출력</span>
                    </div>
                  </div>

                  {/* 은은한 배경 오라 */}
                  <div className="absolute inset-0 bg-radial from-[#C6A66B]/10 to-transparent pointer-events-none" />
                </div>

                {/* 스마트폰 하단 홈 바 */}
                <div className="h-5 bg-[#120E0C] flex items-center justify-center">
                  <div className="w-24 h-1 rounded-full bg-[#3E3127]" />
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
            SECTION 02. WHY MOTION GRAPHICS — 문제 제기
           ─────────────────────────────────────────── */}
        <section className="w-full py-20 md:py-28 border-b border-[#26201B]">
          <div className="site-container">
            <div className="text-center mb-14">
              <span className="text-xs md:text-sm font-semibold tracking-[0.2em] text-[#C6A66B] uppercase mb-3 block">
                WHY EMOTIONAL MOTION?
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold text-[#FAF7F2] mb-5 leading-tight break-keep max-w-3xl mx-auto">
                전하고 싶은 메시지는 있는데, <br />
                어떻게 영상으로 표현해야 할지 막막했나요?
              </h2>
              <div className="space-y-3 text-sm sm:text-base text-[#9E8B7C] max-w-2xl mx-auto leading-relaxed break-keep">
                <p>
                  마음에 드는 문장을 발견하고, 영상으로 표현하고 싶어도 글자를 움직이고 장면을 전환하는 일이 어렵게 느껴집니다.
                </p>
                <p>
                  영상 편집 프로그램의 복잡한 기능을 익혀야 할 것 같고, 원하는 장면을 직접 만드는 일도 부담스럽습니다.
                </p>
                <p className="pt-2 text-[#C8BCB0]">
                  하지만 바이브코딩과 AI를 활용하면 아이디어를 구체적인 움직임으로 구현하는 새로운 방법을 배울 수 있습니다.
                </p>
              </div>
            </div>

            {/* 3대 고민 카드 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="p-6 md:p-7 rounded-2xl bg-[#14100E] border border-[#2A211B] flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold text-[#C6A66B] mb-2 block">장벽 01</span>
                  <h3 className="text-lg font-bold text-[#FAF7F2] mb-3">복잡한 툴의 피로감</h3>
                  <p className="text-sm text-[#9E8B7C] leading-relaxed break-keep">
                    타임라인과 키프레임, 복잡한 영상 편집 툴의 메뉴를 익히느라 정작 담고 싶었던 메시지는 시작도 못 하셨나요?
                  </p>
                </div>
              </div>

              <div className="p-6 md:p-7 rounded-2xl bg-[#14100E] border border-[#2A211B] flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold text-[#C6A66B] mb-2 block">장벽 02</span>
                  <h3 className="text-lg font-bold text-[#FAF7F2] mb-3">정적 이미지의 한계</h3>
                  <p className="text-sm text-[#9E8B7C] leading-relaxed break-keep">
                    깊은 울림을 주는 좋은 글귀와 영감이 멈춰 있는 카드뉴스 한 장에 갇혀 사람들의 시선을 끌지 못했나요?
                  </p>
                </div>
              </div>

              <div className="p-6 md:p-7 rounded-2xl bg-[#14100E] border border-[#2A211B] flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold text-[#C6A66B] mb-2 block">장벽 03</span>
                  <h3 className="text-lg font-bold text-[#FAF7F2] mb-3">재현하기 힘든 움직임</h3>
                  <p className="text-sm text-[#9E8B7C] leading-relaxed break-keep">
                    마음에 드는 감성 모션 영상을 보아도, 어떻게 만들어졌는지 원리를 몰라 내 콘텐츠로 바꿀 수 없었나요?
                  </p>
                </div>
              </div>
            </div>

            {/* 강조 문구 배너 */}
            <div className="p-8 md:p-10 rounded-2xl bg-gradient-to-b from-[#1C1510] to-[#120E0C] border border-[#3E3024] text-center shadow-lg max-w-3xl mx-auto">
              <p className="text-base sm:text-xl font-bold text-[#D6C6A8] leading-relaxed break-keep">
                “중요한 것은 화려한 효과보다, 내가 어떤 메시지를 전하고 싶은가입니다.”
              </p>
              <p className="text-xs sm:text-sm text-[#8F7D6E] mt-2">
                복잡한 기술의 벽은 AI 바이브코딩으로 풀고, 여러분은 마음을 울리는 메시지와 감성 연출에 집중합니다.
              </p>
            </div>
          </div>
        </section>

        {/* ───────────────────────────────────────────
            SECTION 03. TRANSFORMATION — BEFORE & AFTER
           ─────────────────────────────────────────── */}
        <section className="w-full py-20 md:py-28 bg-[#120E0C] border-b border-[#26201B]">
          <div className="site-container">
            <div className="text-center mb-14">
              <span className="text-xs md:text-sm font-semibold tracking-[0.2em] text-[#C6A66B] uppercase mb-3 block">
                TRANSFORMATION
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold text-[#FAF7F2] mb-4 break-keep">
                생각의 기록에서 <br />
                마음을 움직이는 영상으로
              </h2>
              <p className="text-sm sm:text-base text-[#9E8B7C] max-w-xl mx-auto break-keep">
                단순한 텍스트가 바이브코딩과 만나 나만의 고유한 모션그래픽 자산이 됩니다.
              </p>
            </div>

            {/* Before vs After 비교 4개 리스트 */}
            <div className="space-y-4 max-w-4xl mx-auto">
              {/* 항목 1 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-5 rounded-2xl bg-[#17120F] border border-[#2B221B]">
                <div className="space-y-1">
                  <span className="text-xs text-red-400 font-bold">✕ BEFORE</span>
                  <p className="text-xs sm:text-sm text-[#8F7D6E] leading-relaxed">
                    좋은 문장은 있지만 평범한 이미지 게시물로만 표현한다.
                  </p>
                </div>
                <div className="space-y-1 md:border-l md:border-[#2B221B] md:pl-5">
                  <span className="text-xs text-[#C6A66B] font-bold">✓ AFTER</span>
                  <p className="text-xs sm:text-sm text-[#D6C6A8] font-medium leading-relaxed">
                    나만의 문장을 타이포그래피와 모션으로 표현한다.
                  </p>
                </div>
              </div>

              {/* 항목 2 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-5 rounded-2xl bg-[#17120F] border border-[#2B221B]">
                <div className="space-y-1">
                  <span className="text-xs text-red-400 font-bold">✕ BEFORE</span>
                  <p className="text-xs sm:text-sm text-[#8F7D6E] leading-relaxed">
                    숏폼 제작을 위해 복잡한 편집 기능을 먼저 익혀야 한다고 생각한다.
                  </p>
                </div>
                <div className="space-y-1 md:border-l md:border-[#2B221B] md:pl-5">
                  <span className="text-xs text-[#C6A66B] font-bold">✓ AFTER</span>
                  <p className="text-xs sm:text-sm text-[#D6C6A8] font-medium leading-relaxed">
                    AI에게 원하는 움직임을 설명하고 결과를 확인하며 수정한다.
                  </p>
                </div>
              </div>

              {/* 항목 3 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-5 rounded-2xl bg-[#17120F] border border-[#2B221B]">
                <div className="space-y-1">
                  <span className="text-xs text-red-400 font-bold">✕ BEFORE</span>
                  <p className="text-xs sm:text-sm text-[#8F7D6E] leading-relaxed">
                    마음에 드는 예시 영상을 보아도 재현하는 방법을 모른다.
                  </p>
                </div>
                <div className="space-y-1 md:border-l md:border-[#2B221B] md:pl-5">
                  <span className="text-xs text-[#C6A66B] font-bold">✓ AFTER</span>
                  <p className="text-xs sm:text-sm text-[#D6C6A8] font-medium leading-relaxed">
                    제공된 프롬프트와 예시 프로젝트를 활용해 자신만의 영상으로 변형한다.
                  </p>
                </div>
              </div>

              {/* 항목 4 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-5 rounded-2xl bg-[#17120F] border border-[#2B221B]">
                <div className="space-y-1">
                  <span className="text-xs text-red-400 font-bold">✕ BEFORE</span>
                  <p className="text-xs sm:text-sm text-[#8F7D6E] leading-relaxed">
                    영상 한 편을 만들 때마다 처음부터 다시 작업한다.
                  </p>
                </div>
                <div className="space-y-1 md:border-l md:border-[#2B221B] md:pl-5">
                  <span className="text-xs text-[#C6A66B] font-bold">✓ AFTER</span>
                  <p className="text-xs sm:text-sm text-[#D6C6A8] font-medium leading-relaxed">
                    기존 프로젝트의 문구, 색상, 이미지, 움직임을 수정하며 새로운 콘텐츠를 제작한다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ───────────────────────────────────────────
            SECTION 04. TWO CREATIVE STYLES — 2가지 콘텐츠 콘셉트
           ─────────────────────────────────────────── */}
        <section className="w-full py-20 md:py-28 border-b border-[#26201B]">
          <div className="site-container">
            <div className="text-center mb-16">
              <span className="text-xs md:text-sm font-semibold tracking-[0.2em] text-[#C6A66B] uppercase mb-3 block">
                TWO CREATIVE STYLES
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold text-[#FAF7F2] mb-4 break-keep">
                내 마음의 메시지를 두 가지 움직임으로 표현합니다.
              </h2>
              <p className="text-sm sm:text-base text-[#9E8B7C] max-w-2xl mx-auto break-keep">
                같은 모션그래픽이라도 전하고 싶은 감정과 메시지에 따라 표현은 달라집니다.
              </p>
            </div>

            {/* 2대 콘셉트 상세 카드 그리드 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* TYPE 01 — 마인드셋 모션 */}
              <div className="p-7 sm:p-9 rounded-3xl bg-[#14100E] border border-[#2A211B] flex flex-col justify-between space-y-6 shadow-xl">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs px-3 py-1 rounded-full bg-[#C6A66B]/15 text-[#D6C6A8] font-bold border border-[#C6A66B]/30">
                      TYPE 01
                    </span>
                    <span className="text-xs text-[#7A6A5E] font-medium">에너지 & 동기부여</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-[#FAF7F2]">
                    마인드셋 모션 (Mindset Motion)
                  </h3>

                  <div className="p-4 rounded-xl bg-[#1A1411] border border-[#3E3024] text-xs sm:text-sm text-[#D6C6A8] italic">
                    “오늘의 작은 반복이 내일의 나를 만듭니다.”
                  </div>

                  <div className="space-y-2.5 text-xs sm:text-sm text-[#9E8B7C] pt-2">
                    <p>
                      <strong className="text-white font-semibold">주제:</strong>{" "}
                      성장·꾸준함·도전·자존감·인생 명언
                    </p>
                    <p>
                      <strong className="text-white font-semibold">표현 방식:</strong>{" "}
                      강렬한 타이포그래피, 숫자 카운트, 찢어지는 일력, 도형 전환, 리듬감 있는 움직임
                    </p>
                    <p>
                      <strong className="text-white font-semibold">활용:</strong>{" "}
                      동기부여 릴스, 자기계발 숏폼, 성장 메시지, 브랜드 콘텐츠
                    </p>
                  </div>
                </div>

                {/* 영상 미리보기 플레이스홀더 영역 (추후 실제 MP4 삽입 가능 구조) */}
                <div className="relative aspect-[9/16] max-w-[240px] mx-auto w-full rounded-2xl overflow-hidden border border-[#3E3024] bg-gradient-to-b from-[#1C1510] to-[#0D0A08] p-4 flex flex-col justify-between text-center">
                  <div className="text-right">
                    <span className="text-[10px] px-2 py-0.5 rounded bg-white/10 text-[#C6A66B]">
                      PREVIEW
                    </span>
                  </div>
                  <div className="space-y-2 py-4">
                    <div className="text-3xl">🔥</div>
                    <strong className="text-xs text-[#FAF7F2] block font-bold">
                      마인드셋 모션 예시
                    </strong>
                    <p className="text-[11px] text-[#8C7B6E] leading-snug">
                      타이포그래피 & 일력 모션
                    </p>
                  </div>
                  <div className="text-[10px] text-[#7A6A5E] bg-[#140F0C] py-1.5 rounded-lg border border-[#2B2119]">
                    실제 영상 삽입 슬롯 (MP4 준비 중)
                  </div>
                </div>
              </div>

              {/* TYPE 02 — 감성 힐링 모션 */}
              <div className="p-7 sm:p-9 rounded-3xl bg-[#14100E] border border-[#2A211B] flex flex-col justify-between space-y-6 shadow-xl">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs px-3 py-1 rounded-full bg-[#C6A66B]/15 text-[#D6C6A8] font-bold border border-[#C6A66B]/30">
                      TYPE 02
                    </span>
                    <span className="text-xs text-[#7A6A5E] font-medium">위로 & 마음회복</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-[#FAF7F2]">
                    감성 힐링 모션 (Healing Motion)
                  </h3>

                  <div className="p-4 rounded-xl bg-[#1A1411] border border-[#3E3024] text-xs sm:text-sm text-[#D6C6A8] italic">
                    “오늘도 나에게 조금 더 다정해지기로 했습니다.”
                  </div>

                  <div className="space-y-2.5 text-xs sm:text-sm text-[#9E8B7C] pt-2">
                    <p>
                      <strong className="text-white font-semibold">주제:</strong>{" "}
                      위로·자기 사랑·감사·마음 회복·긍정확언
                    </p>
                    <p>
                      <strong className="text-white font-semibold">표현 방식:</strong>{" "}
                      잔잔하게 흐르는 글자, 꽃과 빛, 부드러운 이미지 이동, 감성적인 장면 전환
                    </p>
                    <p>
                      <strong className="text-white font-semibold">활용:</strong>{" "}
                      명상 콘텐츠, 힐링 릴스, 긍정확언 영상, 감성 브랜드 콘텐츠
                    </p>
                  </div>
                </div>

                {/* 영상 미리보기 플레이스홀더 영역 (추후 실제 MP4 삽입 가능 구조) */}
                <div className="relative aspect-[9/16] max-w-[240px] mx-auto w-full rounded-2xl overflow-hidden border border-[#3E3024] bg-gradient-to-b from-[#1C1510] to-[#0D0A08] p-4 flex flex-col justify-between text-center">
                  <div className="text-right">
                    <span className="text-[10px] px-2 py-0.5 rounded bg-white/10 text-[#C6A66B]">
                      PREVIEW
                    </span>
                  </div>
                  <div className="space-y-2 py-4">
                    <div className="text-3xl">🌿</div>
                    <strong className="text-xs text-[#FAF7F2] block font-bold">
                      감성 힐링 모션 예시
                    </strong>
                    <p className="text-[11px] text-[#8C7B6E] leading-snug">
                      부드러운 빛 & 글자 연출
                    </p>
                  </div>
                  <div className="text-[10px] text-[#7A6A5E] bg-[#140F0C] py-1.5 rounded-lg border border-[#2B2119]">
                    실제 영상 삽입 슬롯 (MP4 준비 중)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ───────────────────────────────────────────
            SECTION 05. ONE DAY RESULT — 실습 결과물
           ─────────────────────────────────────────── */}
        <section className="w-full py-20 md:py-28 bg-[#120E0C] border-b border-[#26201B]">
          <div className="site-container">
            <div className="text-center mb-14">
              <span className="text-xs md:text-sm font-semibold tracking-[0.2em] text-[#C6A66B] uppercase mb-3 block">
                ONE DAY RESULT
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold text-[#FAF7F2] mb-4 break-keep">
                나의 문장이 움직이는 숏폼 영상이 됩니다.
              </h2>
              <p className="text-sm sm:text-base text-[#9E8B7C] max-w-xl mx-auto break-keep">
                단 하루 만에 기획부터 렌더링까지 하나의 온전한 작품을 완성합니다.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto mb-10">
              {/* 01 */}
              <div className="p-6 rounded-2xl bg-[#17120F] border border-[#2B221B] space-y-2">
                <span className="text-xs font-mono font-bold text-[#C6A66B] block">01</span>
                <h4 className="text-base font-bold text-[#FAF7F2]">메시지 선택</h4>
                <p className="text-xs sm:text-sm text-[#9E8B7C] leading-relaxed break-keep">
                  나만의 성장·위로·감성 문구 정하기
                </p>
              </div>

              {/* 02 */}
              <div className="p-6 rounded-2xl bg-[#17120F] border border-[#2B221B] space-y-2">
                <span className="text-xs font-mono font-bold text-[#C6A66B] block">02</span>
                <h4 className="text-base font-bold text-[#FAF7F2]">모션 스타일 선택</h4>
                <p className="text-xs sm:text-sm text-[#9E8B7C] leading-relaxed break-keep">
                  타이포그래피, 이미지, 캐릭터 등 표현 방식 선택
                </p>
              </div>

              {/* 03 */}
              <div className="p-6 rounded-2xl bg-[#17120F] border border-[#2B221B] space-y-2">
                <span className="text-xs font-mono font-bold text-[#C6A66B] block">03</span>
                <h4 className="text-base font-bold text-[#FAF7F2]">AI와 모션 제작</h4>
                <p className="text-xs sm:text-sm text-[#9E8B7C] leading-relaxed break-keep">
                  Codex와 Remotion으로 원하는 움직임 제작 및 수정
                </p>
              </div>

              {/* 04 */}
              <div className="p-6 rounded-2xl bg-[#17120F] border border-[#2B221B] space-y-2">
                <span className="text-xs font-mono font-bold text-[#C6A66B] block">04</span>
                <h4 className="text-base font-bold text-[#FAF7F2]">영상 완성</h4>
                <p className="text-xs sm:text-sm text-[#9E8B7C] leading-relaxed break-keep">
                  미리보기 확인 후 MP4로 렌더링하고 저장
                </p>
              </div>
            </div>

            {/* 핵심 결과물 배너 */}
            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#C6A66B]/15 via-white/[0.02] to-[#C6A66B]/15 border border-[#C6A66B]/30 max-w-3xl mx-auto text-center space-y-2 shadow-lg">
              <span className="text-xs font-bold text-[#C6A66B] uppercase tracking-wider block">
                CORE DELIVERABLE
              </span>
              <p className="text-lg sm:text-2xl font-bold text-white break-keep">
                나만의 메시지가 담긴 모션그래픽 숏폼 영상 1편 완성
              </p>
              <p className="text-xs text-[#8F7D6E] pt-1">
                * 수강생의 준비 상태와 실습 속도에 따라 완성 범위가 달라질 수 있습니다.
              </p>
            </div>
          </div>
        </section>

        {/* ───────────────────────────────────────────
            SECTION 06. HOW IT WORKS — 실전 제작 과정
           ─────────────────────────────────────────── */}
        <section className="w-full py-20 md:py-28 border-b border-[#26201B]">
          <div className="site-container">
            <div className="text-center mb-16">
              <span className="text-xs md:text-sm font-semibold tracking-[0.2em] text-[#C6A66B] uppercase mb-3 block">
                HOW IT WORKS
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold text-[#FAF7F2] mb-4 break-keep">
                아이디어에서 영상 완성까지, 하나의 흐름으로 배웁니다.
              </h2>
              <p className="text-sm sm:text-base text-[#9E8B7C] max-w-xl mx-auto break-keep">
                세로형 9:16 숏폼을 기준으로 기획부터 최종 MP4 파일 출력까지 실습합니다.
              </p>
            </div>

            <div className="space-y-4 max-w-3xl mx-auto">
              {[
                {
                  step: "STEP 01",
                  title: "메시지와 영상 기획",
                  desc: "전하고 싶은 문구와 영상 분위기 정하기",
                },
                {
                  step: "STEP 02",
                  title: "예시 프로젝트 활용",
                  desc: "제공된 프롬프트와 영상 소스, 프로젝트 구조 이해하기",
                },
                {
                  step: "STEP 03",
                  title: "Codex로 움직임 만들기",
                  desc: "원하는 타이포그래피와 움직임을 자연어로 요청하기",
                },
                {
                  step: "STEP 04",
                  title: "Remotion 미리보기",
                  desc: "화면을 확인하고 속도, 색상, 타이밍, 이미지 수정하기",
                },
                {
                  step: "STEP 05",
                  title: "MP4 렌더링",
                  desc: "완성 영상을 출력하고 SNS에 활용할 수 있도록 저장하기",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 sm:p-6 rounded-2xl bg-[#14100E] border border-[#2A211B] flex items-center gap-4 sm:gap-6 shadow-sm"
                >
                  <span className="text-xs sm:text-sm font-mono font-bold text-[#C6A66B] px-3 py-1 rounded-full bg-[#C6A66B]/10 border border-[#C6A66B]/20 shrink-0">
                    {item.step}
                  </span>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-base font-bold text-[#FAF7F2] mb-0.5">{item.title}</h4>
                    <p className="text-xs sm:text-sm text-[#9E8B7C] leading-relaxed break-keep font-light">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-xs text-center text-[#7A6A5E] mt-8">
              * 기본 실습은 세로형 9:16 숏폼 중심으로 진행되며, 실제 수업에서 사용하는 영상 길이와 예제 개수는 추후 확정됩니다.
            </p>
          </div>
        </section>

        {/* ───────────────────────────────────────────
            SECTION 07. CLASS CURRICULUM — 원데이 커리큘럼
           ─────────────────────────────────────────── */}
        <section className="w-full py-20 md:py-28 bg-[#120E0C] border-b border-[#26201B]">
          <div className="site-container">
            <div className="text-center mb-16">
              <span className="text-xs md:text-sm font-semibold tracking-[0.2em] text-[#C6A66B] uppercase mb-3 block">
                CLASS CURRICULUM
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold text-[#FAF7F2] mb-4 break-keep">
                따라 만들고, 바꾸어 보고, 내 작품으로 완성하는 실전 클래스
              </h2>
              <p className="text-sm sm:text-base text-[#9E8B7C] max-w-xl mx-auto break-keep">
                지루한 이론 대신 실제 작동하는 프로젝트를 열어 나만의 콘텐츠로 완성합니다.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-10">
              {/* PART 01 */}
              <div className="p-7 rounded-2xl bg-[#17120F] border border-[#2B221B] space-y-4">
                <span className="text-xs font-mono font-bold text-[#C6A66B] px-2.5 py-0.5 rounded bg-[#C6A66B]/15">
                  PART 01
                </span>
                <h3 className="text-lg font-bold text-[#FAF7F2]">
                  영상 콘셉트와 레퍼런스 이해
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-[#9E8B7C] leading-relaxed">
                  <li className="flex items-start gap-2">
                    <span className="text-[#C6A66B]">•</span>
                    <span>마인드셋 모션과 감성 힐링 모션 비교</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#C6A66B]">•</span>
                    <span>모션그래픽 표현 방식 이해</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#C6A66B]">•</span>
                    <span>메시지와 영상 스타일 정하기</span>
                  </li>
                </ul>
              </div>

              {/* PART 02 */}
              <div className="p-7 rounded-2xl bg-[#17120F] border border-[#2B221B] space-y-4">
                <span className="text-xs font-mono font-bold text-[#C6A66B] px-2.5 py-0.5 rounded bg-[#C6A66B]/15">
                  PART 02
                </span>
                <h3 className="text-lg font-bold text-[#FAF7F2]">
                  제작 환경 및 프로젝트 실행
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-[#9E8B7C] leading-relaxed">
                  <li className="flex items-start gap-2">
                    <span className="text-[#C6A66B]">•</span>
                    <span>Codex와 Remotion 프로젝트 구조 확인</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#C6A66B]">•</span>
                    <span>제공된 프로젝트 열기</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#C6A66B]">•</span>
                    <span>영상 미리보기 실행</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#C6A66B]">•</span>
                    <span>필요한 기본 명령과 파일 위치 확인</span>
                  </li>
                </ul>
              </div>

              {/* PART 03 */}
              <div className="p-7 rounded-2xl bg-[#17120F] border border-[#2B221B] space-y-4">
                <span className="text-xs font-mono font-bold text-[#C6A66B] px-2.5 py-0.5 rounded bg-[#C6A66B]/15">
                  PART 03
                </span>
                <h3 className="text-lg font-bold text-[#FAF7F2]">
                  모션그래픽 실습
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-[#9E8B7C] leading-relaxed">
                  <li className="flex items-start gap-2">
                    <span className="text-[#C6A66B]">•</span>
                    <span>제공된 예제 활용</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#C6A66B]">•</span>
                    <span>글자 움직임과 등장 타이밍 수정</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#C6A66B]">•</span>
                    <span>이미지·캐릭터·도형 모션 활용</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#C6A66B]">•</span>
                    <span>프롬프트로 장면과 색상 수정</span>
                  </li>
                </ul>
              </div>

              {/* PART 04 */}
              <div className="p-7 rounded-2xl bg-[#17120F] border border-[#2B221B] space-y-4">
                <span className="text-xs font-mono font-bold text-[#C6A66B] px-2.5 py-0.5 rounded bg-[#C6A66B]/15">
                  PART 04
                </span>
                <h3 className="text-lg font-bold text-[#FAF7F2]">
                  나만의 영상 완성
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-[#9E8B7C] leading-relaxed">
                  <li className="flex items-start gap-2">
                    <span className="text-[#C6A66B]">•</span>
                    <span>개인 문구와 이미지 적용</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#C6A66B]">•</span>
                    <span>움직임과 전환 확인</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#C6A66B]">•</span>
                    <span>MP4 렌더링</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#C6A66B]">•</span>
                    <span>완성 영상 저장 및 공유 준비</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* 중요 사전 안내 박스 */}
            <div className="p-6 rounded-2xl bg-[#1A1411] border border-[#3E3024] max-w-4xl mx-auto text-center space-y-2">
              <strong className="text-xs sm:text-sm text-[#D6C6A8] block font-bold">
                ⚠️ 클래스 운영 원칙
              </strong>
              <p className="text-xs sm:text-sm text-[#9E8B7C] leading-relaxed break-keep font-light">
                이번 클래스에서는 바이브코딩 기초 환경 설치를 처음부터 상세하게 반복 교육하지 않습니다. 기본 환경을 이해한 수강생을 대상으로 실제 작품 제작에 집중합니다.
              </p>
            </div>
          </div>
        </section>

        {/* ───────────────────────────────────────────
            SECTION 08. PREREQUISITES — 수강 전 준비 안내
           ─────────────────────────────────────────── */}
        <section className="w-full py-20 md:py-28 border-b border-[#26201B]">
          <div className="site-container">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <span className="text-xs md:text-sm font-semibold tracking-[0.2em] text-[#C6A66B] uppercase block">
                PREREQUISITES
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold text-[#FAF7F2] break-keep">
                바이브코딩이 처음이라면, 기초부터 차근차근 시작해 주세요.
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-[#9E8B7C] leading-relaxed break-keep">
                <p>
                  본 과정은 바이브코딩 기초 학습을 마친 분들을 위한 실전 프로젝트 과정입니다.
                </p>
                <p>
                  자명스쿨의 《AI 바이브코딩 기초 클래스》를 수강하셨거나 Codex, VS Code 등 AI 코딩 도구의 기본 사용법을 알고 계신 분이라면 참여하실 수 있습니다.
                </p>
              </div>

              {/* 기초 권장 내용 카드 */}
              <div className="p-6 sm:p-8 rounded-2xl bg-[#14100E] border border-[#2A211B] text-left space-y-3">
                <h4 className="text-sm sm:text-base font-bold text-[#D6C6A8]">
                  📌 기초 과정에서 먼저 익히는 것을 권장하는 내용:
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-[#9E8B7C]">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C6A66B]" />
                    <span>VS Code, Node.js, Codex 등 환경 설치</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C6A66B]" />
                    <span>작업 폴더와 프로젝트 생성</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C6A66B]" />
                    <span>기본 명령어와 프로젝트 실행</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C6A66B]" />
                    <span>프롬프트를 활용한 수정</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C6A66B]" />
                    <span>Remotion 미리보기와 렌더링 기초</span>
                  </li>
                </ul>
              </div>

              <div className="pt-2">
                <span className="inline-block px-5 py-2 rounded-full bg-[#1A1411] border border-[#C6A66B]/30 text-xs text-[#C6A66B] font-medium">
                  ※ 별도의 기초 클래스는 향후 일정이 확정되는 대로 우선 안내해 드립니다.
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ───────────────────────────────────────────
            SECTION 09. CLASS KIT — 제공 학습자료
           ─────────────────────────────────────────── */}
        <section className="w-full py-20 md:py-28 bg-[#120E0C] border-b border-[#26201B]">
          <div className="site-container">
            <div className="text-center mb-14">
              <span className="text-xs md:text-sm font-semibold tracking-[0.2em] text-[#C6A66B] uppercase mb-3 block">
                CLASS KIT
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold text-[#FAF7F2] mb-4 break-keep">
                혼자서도 다시 만들어 볼 수 있도록, 실전 자료를 함께 준비합니다.
              </h2>
              <p className="text-xs sm:text-sm text-[#7A6A5E] max-w-xl mx-auto break-keep">
                * 다음 항목은 제공 예정 자료의 구성 초안이며, 수업 확정 시 함께 제공됩니다.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
              {[
                { title: "모션그래픽 예시 프롬프트", desc: "원하는 분위기와 움직임을 자연어로 지시하는 실전 프롬프트 모음" },
                { title: "Remotion 프로젝트 예제", desc: "바로 열어보고 실행할 수 있는 스타터 프로젝트 원본 코드" },
                { title: "글자·이미지·캐릭터 소스 활용 가이드", desc: "시각 요소를 배치하고 조화롭게 연출하는 방법 가이드" },
                { title: "영상 수정용 프롬프트", desc: "속도, 색상, 레이아웃을 손쉽게 변경하는 맞춤형 지시문" },
                { title: "MP4 렌더링 안내", desc: "오류 없이 고화질 세로 영상으로 최종 출력하는 실무 팁" },
                { title: "SNS 업로드용 점검 체크리스트", desc: "릴스·쇼츠 등록 전 화질, 비율, 자막 가독성을 점검하는 체크리스트" },
              ].map((kit, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-[#17120F] border border-[#2B221B] space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-[#C6A66B]/10 border border-[#C6A66B]/20 flex items-center justify-center text-xs font-mono text-[#C6A66B] font-bold">
                    0{idx + 1}
                  </div>
                  <h4 className="text-base font-bold text-[#FAF7F2]">{kit.title}</h4>
                  <p className="text-xs text-[#9E8B7C] leading-relaxed break-keep font-light">{kit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ───────────────────────────────────────────
            SECTION 10. RECOMMENDED FOR — 추천 대상
           ─────────────────────────────────────────── */}
        <section className="w-full py-20 md:py-28 border-b border-[#26201B]">
          <div className="site-container">
            <div className="text-center mb-14">
              <span className="text-xs md:text-sm font-semibold tracking-[0.2em] text-[#C6A66B] uppercase mb-3 block">
                RECOMMENDED FOR
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold text-[#FAF7F2] mb-4 break-keep">
                이런 분이라면 함께하세요.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {[
                "감성적인 문장과 메시지를 영상으로 표현하고 싶은 분",
                "성장·동기부여 숏폼을 만들고 싶은 분",
                "명상·힐링·긍정확언 콘텐츠를 제작하고 싶은 분",
                "자신의 브랜드에 어울리는 숏폼을 직접 만들고 싶은 분",
                "Codex를 영상 창작에 활용해 보고 싶은 분",
                "기존 영상 편집과 다른 AI 제작 방식을 경험하고 싶은 분",
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-[#14100E] border border-[#2A211B] flex items-center gap-3.5"
                >
                  <span className="w-6 h-6 rounded-full bg-[#C6A66B]/15 text-[#C6A66B] flex items-center justify-center text-xs font-bold shrink-0">
                    ✓
                  </span>
                  <span className="text-sm font-medium text-[#D6C6A8] break-keep">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ───────────────────────────────────────────
            SECTION 11. CREATIVE EXPANSION — 챌린지 확장
           ─────────────────────────────────────────── */}
        <section className="w-full py-20 md:py-28 bg-[#120E0C] border-b border-[#26201B]">
          <div className="site-container">
            <div className="text-center mb-14">
              <span className="text-xs md:text-sm font-semibold tracking-[0.2em] text-[#C6A66B] uppercase mb-3 block">
                CREATIVE EXPANSION
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold text-[#FAF7F2] mb-4 break-keep">
                하나의 작품에서 시작해, 나만의 콘텐츠 시리즈로 확장합니다.
              </h2>
              <p className="text-sm sm:text-base text-[#9E8B7C] max-w-2xl mx-auto break-keep">
                원데이에서 제작 방식을 익힌 후에는 다양한 감성 문구와 모션 스타일을 조합해 반복적으로 창작할 수 있습니다.
              </p>
            </div>

            {/* 챌린지 활동 5단계 */}
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 max-w-5xl mx-auto mb-8">
              {[
                { num: "01", text: "오늘의 모션그래픽 예시 감상" },
                { num: "02", text: "제공된 프롬프트와 소스 확인" },
                { num: "03", text: "나만의 문구와 색상으로 수정" },
                { num: "04", text: "Codex로 제작 및 미리보기" },
                { num: "05", text: "완성 영상 SNS 인증" },
              ].map((step, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-[#17120F] border border-[#2B221B] text-center space-y-2">
                  <span className="text-xs font-mono font-bold text-[#C6A66B] block">{step.num}</span>
                  <p className="text-xs font-medium text-[#D6C6A8] break-keep">{step.text}</p>
                </div>
              ))}
            </div>

            <p className="text-xs text-center text-[#7A6A5E] max-w-xl mx-auto">
              * 이 섹션은 후속 학습 방향의 예시이며, 현재 원데이 신청만으로 별도 챌린지 참여가 자동 제공되는 것은 아닙니다.
            </p>
          </div>
        </section>

        {/* ───────────────────────────────────────────
            SECTION 12. FAQ — 자주 묻는 질문
           ─────────────────────────────────────────── */}
        <section className="w-full py-20 md:py-28 border-b border-[#26201B]">
          <div className="site-container">
            <div className="text-center mb-14">
              <span className="text-xs md:text-sm font-semibold tracking-[0.2em] text-[#C6A66B] uppercase mb-3 block">
                FREQUENTLY ASKED QUESTIONS
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold text-[#FAF7F2] mb-4 break-keep">
                자주 묻는 질문
              </h2>
            </div>

            <div className="space-y-4 max-w-3xl mx-auto">
              {[
                {
                  q: "코딩을 전혀 몰라도 수강할 수 있나요?",
                  a: "본 과정은 기초 바이브코딩 사용 경험이 있는 분께 권장합니다. 처음이라면 환경 설치와 프로젝트 실행 방법을 먼저 익힌 후 참여하시는 것이 좋습니다.",
                },
                {
                  q: "전문 영상 편집 프로그램이 필요한가요?",
                  a: "주된 제작 도구는 Codex와 Remotion입니다. 기존 영상 편집 프로그램의 전문 기술보다 AI를 통한 영상 제작 및 수정에 집중합니다.",
                },
                {
                  q: "어떤 영상을 만들 수 있나요?",
                  a: "성장·동기부여 메시지를 표현하는 마인드셋 모션과 위로·감사·긍정확언 등을 담은 감성 힐링 모션을 중심으로 실습합니다.",
                },
                {
                  q: "원데이에서 여러 편을 완성하나요?",
                  a: "기본 목표는 대표 모션그래픽 영상 1편 완성입니다. 여러 가지 예시를 살펴보더라도 실제 제작 범위는 수업 구성과 실습 속도에 따라 달라질 수 있습니다.",
                },
                {
                  q: "완성한 영상은 SNS에 올릴 수 있나요?",
                  a: "본인이 사용할 권리가 있는 이미지·음악·폰트·영상 소스를 활용했다면 해당 라이선스 범위에서 게시할 수 있습니다. 수업에서는 SNS 활용을 고려한 출력 방식을 안내합니다.",
                },
                {
                  q: "챌린지도 포함되어 있나요?",
                  a: "챌린지는 향후 확장 학습 방향으로 기획 중이며, 원데이 포함 여부와 운영 방식은 별도로 안내할 예정입니다.",
                },
              ].map((faq, idx) => (
                <div key={idx} className="p-6 md:p-7 rounded-2xl bg-[#14100E] border border-[#2A211B] space-y-2.5">
                  <h4 className="text-base sm:text-lg font-bold text-[#FAF7F2] flex items-start gap-2.5">
                    <span className="text-[#C6A66B] font-mono">Q.</span>
                    <span>{faq.q}</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-[#9E8B7C] leading-relaxed break-keep pl-6">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ───────────────────────────────────────────
            SECTION 13. FINAL CTA (#apply)
           ─────────────────────────────────────────── */}
        <section
          id="apply"
          className="w-full py-20 md:py-28 bg-gradient-to-b from-[#14100E] to-[#0A0807] relative overflow-hidden"
        >
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none opacity-15 blur-[140px]"
            style={{
              background: "radial-gradient(circle, rgba(198,166,107,0.5) 0%, transparent 70%)",
            }}
          />

          <div className="site-container relative z-10">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <span className="text-xs md:text-sm font-semibold tracking-[0.25em] text-[#C6A66B] uppercase block">
                ONE SENTENCE TO MOTION
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-[#FAF7F2] leading-tight break-keep">
                내 안의 이야기가, <br />
                누군가의 마음을 움직이는 영상이 됩니다.
              </h2>
              <p className="text-base sm:text-lg text-[#D6C6A8] leading-relaxed break-keep max-w-xl mx-auto font-medium">
                마음에 남은 한 문장에서 시작해 나만의 모션그래픽 작품을 완성해 보세요.
              </p>

              <div className="pt-6">
                <a
                  href="https://pf.kakao.com/_IxguMn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto min-h-[52px] px-10 rounded-full bg-[#C6A66B] hover:bg-[#D6C6A8] text-[#1A1410] text-base font-bold inline-flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl transition-all group"
                >
                  <span>개강 알림 신청</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>

              <p className="text-xs text-[#7A6A5E] pt-2">
                * 개강 일정과 수강 인원이 확정되면 자명스쿨 채널을 통해 우선 알림을 보내드립니다.
              </p>
            </div>
          </div>
        </section>

        {/* ───────────────────────────────────────────
            공통 환불 정책 컴포넌트
           ─────────────────────────────────────────── */}
        <CourseRefundPolicySection />

      </div>
    </main>
  );
}
