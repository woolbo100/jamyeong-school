import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import CourseRefundPolicySection from "@/components/CourseRefundPolicySection";

export const metadata: Metadata = {
  title: "AI 명상·힐링 플레이리스트 제작 | 마음을 쉬게 하는 음악 원데이 · 자명스쿨",
  description:
    "내 마음에 쉼이 되는 음악이 누군가의 하루에도 위로가 됩니다. AI로 명상·힐링 음악을 만들고, 감성 비주얼과 결합해 나만의 유튜브 플레이리스트를 완성하는 실전 원데이 클래스입니다.",
  alternates: {
    canonical: "https://www.jmschool.kr/healing-playlist",
  },
  openGraph: {
    title: "AI 명상·힐링 플레이리스트 제작 | 자명스쿨 원데이 클래스",
    description:
      "마음을 쉬게 하는 음악부터 나만의 유튜브 채널 콘텐츠까지. AI 음악 제작, 감성 영상 결합, 플레이리스트 편집, 유튜브 운영 기초를 배웁니다.",
    url: "https://www.jmschool.kr/healing-playlist",
    siteName: "자명스쿨",
    locale: "ko_KR",
    type: "website",
  },
};

// ─────────────────────────────────────────────────────────────
// [클래스 기본 설정 데이터]
// ─────────────────────────────────────────────────────────────
const CLASS_CONFIG = {
  category: "AI HEALING PLAYLIST · ONE DAY CLASS",
  badge: "자명스쿨 감성 창작 원데이",
  titleMain: "AI 명상·힐링",
  titleSub: "플레이리스트 제작",
  subtitle: "마음을 쉬게 하는 음악부터 나만의 유튜브 채널 콘텐츠까지",
  coreCopy: "“내 마음에 쉼이 되는 음악이, 누군가의 하루에도 위로가 됩니다.”",
  description:
    "하루의 끝에 듣고 싶은 잔잔한 음악, 마음을 정리하고 싶을 때 찾는 명상 사운드, 조용한 밤을 채우는 수면 플레이리스트. 이제 나의 취향과 감성을 담아 직접 만들어 보세요. AI로 음악을 만들고, 그 분위기에 어울리는 감성 영상과 결합해 나만의 플레이리스트를 완성합니다. 음악 제작부터 영상 편집, 유튜브 업로드와 채널 운영의 기초까지 배우는 실전 원데이 클래스입니다.",
  meta: {
    format: "온라인 실습 원데이",
    duration: "세부 시간 추후 확정",
    schedule: "준비 중",
    price: "미정",
    prerequisite: "입문 가능 (음악 경험 무관)",
  },
  tags: ["AI음악", "명상", "힐링", "플레이리스트", "유튜브"],
  ctaText: "개강 알림 신청",
};

export default function HealingPlaylistPage() {
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
          SECTION 01. HERO (상단 소개 · 플레이리스트 비주얼)
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

              {/* 6대 핵심 혜택 뱃지 리스트 */}
              <div className="pt-2">
                <p className="text-xs font-bold uppercase tracking-wider text-[#8E6D38] mb-3">
                  KEY HIGHLIGHTS
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-[#4A3E37]">
                  {[
                    "AI 명상·힐링·수면 음악 제작",
                    "나만의 플레이리스트 콘셉트 기획",
                    "AI 음악 프롬프트 스킬 활용",
                    "감성 배경 이미지와 영상 제작",
                    "플레이리스트 편집 및 유튜브 업로드",
                    "유튜브 콘텐츠 운영과 차별화 전략",
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

            {/* 우측 비주얼 목업 (16:9 유튜브 플레이리스트 목업) */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-[460px] bg-[#14100E] border-2 border-[#8E6D38]/30 rounded-2xl p-4 shadow-2xl text-left">
                {/* 상단 유튜브 바 */}
                <div className="flex items-center justify-between pb-3 border-b border-[#2A211B] text-xs text-[#A8988B]">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#E05252]"></span>
                    <span className="font-mono text-[11px] text-[#E0A96D]">YOUTUBE PLAYLIST PREVIEW</span>
                  </div>
                  <span className="text-[10px] bg-[#2A211B] text-[#EDE6DC] px-2 py-0.5 rounded">16:9 HD</span>
                </div>

                {/* 16:9 영상 프리뷰 슬롯 (추후 실제 mp4/iframe 교체 가능 구조) */}
                <div className="relative w-full aspect-video mt-3 rounded-xl overflow-hidden bg-gradient-to-br from-[#1C1512] via-[#2A1F1A] to-[#120E0C] border border-[#3A2D25] flex flex-col items-center justify-center text-center p-6 group">
                  {/* 오디오 파형/감성 배경 그래픽 */}
                  <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#C6A66B_1px,transparent_1px)] [background-size:16px_16px]"></div>
                  
                  {/* 음파 애니메이션 비주얼 */}
                  <div className="relative z-10 flex items-center justify-center gap-1.5 mb-3 h-8">
                    <span className="w-1 bg-[#C6A66B] rounded-full h-3 animate-pulse"></span>
                    <span className="w-1 bg-[#C6A66B] rounded-full h-6 animate-pulse" style={{ animationDelay: "150ms" }}></span>
                    <span className="w-1 bg-[#C6A66B] rounded-full h-4 animate-pulse" style={{ animationDelay: "300ms" }}></span>
                    <span className="w-1 bg-[#E0A96D] rounded-full h-7 animate-pulse" style={{ animationDelay: "450ms" }}></span>
                    <span className="w-1 bg-[#E0A96D] rounded-full h-5 animate-pulse" style={{ animationDelay: "200ms" }}></span>
                    <span className="w-1 bg-[#C6A66B] rounded-full h-8 animate-pulse" style={{ animationDelay: "350ms" }}></span>
                    <span className="w-1 bg-[#C6A66B] rounded-full h-3 animate-pulse" style={{ animationDelay: "100ms" }}></span>
                  </div>

                  <p className="relative z-10 text-xs font-semibold text-[#EDE6DC] mb-1">
                    마음을 채우는 잔잔한 피아노 & 앰비언트
                  </p>
                  <p className="relative z-10 text-[11px] text-[#A8988B]">
                    432Hz Calm Mind · Deep Sleep & Meditation
                  </p>

                  <div className="mt-3 px-3 py-1 rounded-full bg-[#0D0B0A]/80 border border-[#C6A66B]/40 text-[10px] text-[#C6A66B]">
                    ✦ 추후 실제 제작 영상/음원 연결 슬롯
                  </div>
                </div>

                {/* 하단 트랙 정보 */}
                <div className="mt-4 pt-3 border-t border-[#2A211B] flex items-center justify-between text-[11px] text-[#A8988B]">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#8E6D38]/30 flex items-center justify-center text-[#C6A66B] font-serif">♫</span>
                    <span className="text-[#EDE6DC] font-medium">자명스쿨 힐링 사운드 랩</span>
                  </div>
                  <span className="text-[10px] text-[#7C6656]">구독자 맞춤형 기획</span>
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
              내가 만든 음악이 하나의 감성 플레이리스트가 됩니다.
            </h2>
            <p className="text-sm md:text-base text-[#A8988B] break-keep">
              AI로 작곡한 음악과 그에 어울리는 감성 루프 영상을 결합하여 유튜브에 바로 올릴 수 있는 16:9 콘텐츠를 완성합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* 01. 아침의 마음챙김 */}
            <div className="bg-[#14100E] border border-[#2A211B] rounded-2xl overflow-hidden hover:border-[#C6A66B]/50 transition-all flex flex-col">
              {/* 16:9 미리보기 영역 (추후 실제 영상 교체 가능) */}
              <div className="relative w-full aspect-video bg-gradient-to-tr from-[#241A14] via-[#38261A] to-[#1C1410] border-b border-[#2A211B] flex flex-col items-center justify-center p-4 text-center">
                <span className="text-3xl mb-2">🌅</span>
                <span className="text-xs font-bold text-[#E0A96D] tracking-wider">01. MORNING MINDFULNESS</span>
                <span className="text-[11px] text-[#A8988B] mt-1">432Hz Calm Sunlight Sounds</span>
                {/* 비디오 교체 슬롯 안내 */}
                <div className="mt-3 text-[10px] bg-[#0D0B0A]/80 text-[#C6A66B] px-2.5 py-0.5 rounded-full border border-[#C6A66B]/30">
                  [ 16:9 MP4 / YouTube Embed 슬롯 ]
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-[#EDE6DC] mb-2">
                    01. 아침의 마음챙김
                  </h3>
                  <p className="text-xs sm:text-sm text-[#A8988B] leading-relaxed break-keep">
                    따뜻한 햇살과 부드러운 사운드가 어우러지는 명상 플레이리스트. 하루를 긍정적인 에너지로 시작할 수 있도록 맑은 톤을 설계합니다.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#2A211B] flex flex-wrap gap-1.5 text-[11px] text-[#C6A66B]">
                  <span>#아침명상</span>
                  <span>#마음챙김</span>
                  <span>#햇살앰비언트</span>
                </div>
              </div>
            </div>

            {/* 02. 깊은 밤의 수면 음악 */}
            <div className="bg-[#14100E] border border-[#2A211B] rounded-2xl overflow-hidden hover:border-[#C6A66B]/50 transition-all flex flex-col">
              {/* 16:9 미리보기 영역 (추후 실제 영상 교체 가능) */}
              <div className="relative w-full aspect-video bg-gradient-to-tr from-[#121624] via-[#1A2238] to-[#0D101A] border-b border-[#2A211B] flex flex-col items-center justify-center p-4 text-center">
                <span className="text-3xl mb-2">🌙</span>
                <span className="text-xs font-bold text-[#8FA8DF] tracking-wider">02. DEEP SLEEP AMBIENT</span>
                <span className="text-[11px] text-[#A8988B] mt-1">Gentle Rain & Soft Drone</span>
                {/* 비디오 교체 슬롯 안내 */}
                <div className="mt-3 text-[10px] bg-[#0D0B0A]/80 text-[#8FA8DF] px-2.5 py-0.5 rounded-full border border-[#8FA8DF]/30">
                  [ 16:9 MP4 / YouTube Embed 슬롯 ]
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-[#EDE6DC] mb-2">
                    02. 깊은 밤의 수면 음악
                  </h3>
                  <p className="text-xs sm:text-sm text-[#A8988B] leading-relaxed break-keep">
                    잔잔한 빗소리와 부드러운 앰비언트 사운드가 이어지는 휴식 플레이리스트. 깊은 이완과 편안한 숙면을 돕는 차분한 음악을 구성합니다.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#2A211B] flex flex-wrap gap-1.5 text-[11px] text-[#8FA8DF]">
                  <span>#수면음악</span>
                  <span>#빗소리휴식</span>
                  <span>#숙면플레이리스트</span>
                </div>
              </div>
            </div>

            {/* 03. 나를 위한 위로의 시간 */}
            <div className="bg-[#14100E] border border-[#2A211B] rounded-2xl overflow-hidden hover:border-[#C6A66B]/50 transition-all flex flex-col">
              {/* 16:9 미리보기 영역 (추후 실제 영상 교체 가능) */}
              <div className="relative w-full aspect-video bg-gradient-to-tr from-[#24151C] via-[#381E29] to-[#170E13] border-b border-[#2A211B] flex flex-col items-center justify-center p-4 text-center">
                <span className="text-3xl mb-2">🌿</span>
                <span className="text-xs font-bold text-[#DFA8C0] tracking-wider">03. COMFORT & HEALING</span>
                <span className="text-[11px] text-[#A8988B] mt-1">Emotional Piano & Nature Mood</span>
                {/* 비디오 교체 슬롯 안내 */}
                <div className="mt-3 text-[10px] bg-[#0D0B0A]/80 text-[#DFA8C0] px-2.5 py-0.5 rounded-full border border-[#DFA8C0]/30">
                  [ 16:9 MP4 / YouTube Embed 슬롯 ]
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-[#EDE6DC] mb-2">
                    03. 나를 위한 위로의 시간
                  </h3>
                  <p className="text-xs sm:text-sm text-[#A8988B] leading-relaxed break-keep">
                    감성적인 피아노와 풍경 영상으로 표현하는 힐링 플레이리스트. 지친 일상 속에서 잠시 멈추고 자신을 다독일 수 있는 따뜻한 멜로디입니다.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#2A211B] flex flex-wrap gap-1.5 text-[11px] text-[#DFA8C0]">
                  <span>#감성피아노</span>
                  <span>#위로음악</span>
                  <span>#마음치유</span>
                </div>
              </div>
            </div>
          </div>

          <p className="text-center text-xs text-[#7C6656] mt-8">
            * 각 영역은 실제 수강생 실습 파일 및 완성된 유튜브 영상으로 유연하게 교체할 수 있도록 설계되었습니다.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 03. WHY PLAYLIST (문제 제기 및 5대 공감)
         ═══════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 border-b border-[#2A211B] bg-[#120E0C]">
        <div className="site-container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-xs font-bold tracking-widest text-[#C6A66B] uppercase">
              WHY HEALING PLAYLIST
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#EDE6DC] mt-2 mb-6 break-keep">
              유튜브를 시작하고 싶은데, <br />
              어떤 콘텐츠를 만들어야 할지 고민되셨나요?
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-[#A8988B] leading-relaxed break-keep text-left bg-[#14100E] p-6 sm:p-8 rounded-2xl border border-[#2A211B]">
              <p>
                유튜브를 시작하고 싶지만 얼굴을 공개하거나 카메라 앞에서 말하는 일이 부담스러울 수 있습니다.
                영상 촬영과 편집이 어렵게 느껴지고, 어떤 주제로 꾸준히 콘텐츠를 만들어야 할지도 막막합니다.
              </p>
              <p>
                명상·수면·힐링 플레이리스트는 자신의 목소리나 얼굴을 드러내지 않고도 음악과 영상으로 감성을 표현할 수 있는 콘텐츠 형식입니다.
              </p>
              <p className="text-[#EDE6DC] font-medium border-l-2 border-[#C6A66B] pl-3 py-0.5">
                하지만 음악을 여러 개 연결해 단순히 길게 올리는 것만으로 차별화된 채널이 만들어지는 것은 아닙니다.
                <strong> 누구에게, 어떤 순간에, 어떤 감정과 분위기를 전달할 것인지가 중요합니다.</strong>
              </p>
            </div>
          </div>

          {/* 5대 공감 카드 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 max-w-5xl mx-auto">
            {[
              { num: "01", text: "얼굴 공개나 촬영이 부담스럽다" },
              { num: "02", text: "음악 제작 경험이 전혀 없다" },
              { num: "03", text: "영상 편집 툴이 어렵게 느껴진다" },
              { num: "04", text: "차별화된 유튜브 콘셉트를 찾고 싶다" },
              { num: "05", text: "꾸준히 지속할 수 있는 제작법을 원한다" },
            ].map((card, idx) => (
              <div
                key={idx}
                className="bg-[#14100E] border border-[#2A211B] p-4 rounded-xl flex flex-col justify-between hover:border-[#C6A66B]/40 transition-colors"
              >
                <span className="text-xs font-mono font-bold text-[#C6A66B] mb-2">{card.num}</span>
                <p className="text-xs sm:text-sm font-medium text-[#EDE6DC] break-keep">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 04. BRAND CONCEPT (나만의 채널 차별화)
         ═══════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 border-b border-[#2A211B] bg-[#0D0B0A]">
        <div className="site-container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold tracking-widest text-[#C6A66B] uppercase">
              MY HEALING CHANNEL
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#EDE6DC] mt-2 mb-3 break-keep">
              같은 힐링 음악이라도, 나만의 이야기가 있어야 합니다.
            </h2>
            <p className="text-sm md:text-base text-[#A8988B] break-keep">
              음악보다 먼저, 누가 언제 어떤 마음으로 듣는 콘텐츠인지 생각합니다.
            </p>
          </div>

          {/* 5대 핵심 기획 질문 그리드 */}
          <div className="max-w-4xl mx-auto mb-12">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#C6A66B] mb-4 text-center sm:text-left">
              5 CORE PLANNING QUESTIONS · 채널 기획 5대 질문
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                { q: "Q1", title: "내 음악을 듣는 사람은 누구인가?", desc: "피로한 직장인, 수험생, 명상 입문자 등 명확한 타깃" },
                { q: "Q2", title: "어떤 시간에 음악을 찾는가?", desc: "출근길 아침, 점심 휴식 시간, 밤 11시 잠들기 전" },
                { q: "Q3", title: "어떤 감정과 분위기를 전할 것인가?", desc: "불안 완화, 따뜻한 위로, 깊은 몰입, 감사의 마음" },
                { q: "Q4", title: "나만의 이미지와 음악 스타일은 무엇인가?", desc: "따뜻한 피아노, 자연의 소리, 로파이, 앰비언트 등" },
                { q: "Q5", title: "어떤 시리즈를 꾸준히 만들 수 있는가?", desc: "계절별 힐링, 요일별 마음챙김 등 지속 가능한 포맷" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#14100E] border border-[#2A211B] p-4 rounded-xl hover:border-[#C6A66B]/40 transition-colors"
                >
                  <span className="text-xs font-mono font-bold text-[#C6A66B] bg-[#2A211B] px-2 py-0.5 rounded">
                    {item.q}
                  </span>
                  <h4 className="text-sm font-bold text-[#EDE6DC] mt-2 mb-1">{item.title}</h4>
                  <p className="text-xs text-[#A8988B]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 3대 채널 콘셉트 예시 */}
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
            <div className="bg-[#181310] border border-[#3A2D25] p-5 rounded-2xl">
              <span className="text-xs font-bold text-[#E0A96D] block mb-1">CONCEPT 01</span>
              <h4 className="text-base font-bold text-[#EDE6DC] mb-2">하루를 마무리하는 마음의 쉼표</h4>
              <p className="text-xs text-[#A8988B] leading-relaxed">
                퇴근 후 휴식, 수면, 긴장 완화를 위한 차분한 분위기의 음악과 잔잔한 비주얼을 제공하는 채널
              </p>
            </div>
            <div className="bg-[#181310] border border-[#3A2D25] p-5 rounded-2xl">
              <span className="text-xs font-bold text-[#E0A96D] block mb-1">CONCEPT 02</span>
              <h4 className="text-base font-bold text-[#EDE6DC] mb-2">나를 사랑하는 아침</h4>
              <p className="text-xs text-[#A8988B] leading-relaxed">
                긍정확언, 감사, 자기돌봄을 주제로 한 따뜻한 음악과 활기를 불어넣는 아침 루틴 채널
              </p>
            </div>
            <div className="bg-[#181310] border border-[#3A2D25] p-5 rounded-2xl">
              <span className="text-xs font-bold text-[#E0A96D] block mb-1">CONCEPT 03</span>
              <h4 className="text-base font-bold text-[#EDE6DC] mb-2">고요한 명상의 정원</h4>
              <p className="text-xs text-[#A8988B] leading-relaxed">
                자연음, 앰비언트, 잔잔한 명상 사운드를 중심으로 깊은 몰입과 호흡을 이끄는 전문 채널
              </p>
            </div>
          </div>

          {/* 강조 배너 */}
          <div className="max-w-3xl mx-auto bg-gradient-to-r from-[#241A14] via-[#35261C] to-[#241A14] border border-[#C6A66B]/40 p-5 sm:p-6 rounded-2xl text-center">
            <p className="text-sm sm:text-base md:text-lg font-bold text-[#EDE6DC] break-keep">
              ✨ &ldquo;AI는 음악을 만들어 주지만, 그 음악에 어떤 의미를 담을지는 내가 결정합니다.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 05. THREE CONTENT STYLES (3가지 플레이리스트)
         ═══════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 border-b border-[#2A211B] bg-[#120E0C]">
        <div className="site-container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold tracking-widest text-[#C6A66B] uppercase">
              THREE CONTENT STYLES
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#EDE6DC] mt-2 mb-3 break-keep">
              내가 좋아하는 감성으로 시작하는 세 가지 음악 콘텐츠
            </h2>
            <p className="text-sm md:text-base text-[#A8988B] break-keep">
              초보자도 명확한 목적에 맞춰 바로 제작해볼 수 있는 대표 힐링 카테고리
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* TYPE 01 */}
            <div className="bg-[#14100E] border border-[#2A211B] rounded-2xl p-6 flex flex-col justify-between hover:border-[#C6A66B]/50 transition-all">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#8E6D38]/20 text-[#C6A66B] flex items-center justify-center font-bold text-sm mb-4">
                  01
                </div>
                <h3 className="text-lg font-bold text-[#EDE6DC] mb-3">
                  TYPE 01. 명상·마음챙김 음악
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-[#A8988B]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#C6A66B] mt-0.5">•</span>
                    <span>명상 및 호흡을 위한 배경음악</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#C6A66B] mt-0.5">•</span>
                    <span>잔잔한 앰비언트 사운드와 드론</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#C6A66B] mt-0.5">•</span>
                    <span>자연음과 명상적인 공간감 연출</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#C6A66B] mt-0.5">•</span>
                    <span>432Hz·528Hz 등 주파수 콘셉트 사운드 기획</span>
                  </li>
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-[#2A211B] text-[11px] text-[#7C6656] leading-relaxed">
                * 주파수 콘셉트는 편안한 청취 무드를 위한 기획 요소이며, 의료적 치료 효과를 보장하는 표현은 사용하지 않습니다.
              </div>
            </div>

            {/* TYPE 02 */}
            <div className="bg-[#14100E] border border-[#2A211B] rounded-2xl p-6 flex flex-col justify-between hover:border-[#C6A66B]/50 transition-all">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#8E6D38]/20 text-[#C6A66B] flex items-center justify-center font-bold text-sm mb-4">
                  02
                </div>
                <h3 className="text-lg font-bold text-[#EDE6DC] mb-3">
                  TYPE 02. 수면·휴식 음악
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-[#A8988B]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#C6A66B] mt-0.5">•</span>
                    <span>잔잔한 피아노와 몽환적인 앰비언트</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#C6A66B] mt-0.5">•</span>
                    <span>밤의 분위기에 맞는 차분한 템포 설계</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#C6A66B] mt-0.5">•</span>
                    <span>빗소리·숲소리·장작불 등 자연음 결합</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#C6A66B] mt-0.5">•</span>
                    <span>장시간 감상을 고려한 심리스 루프 편집</span>
                  </li>
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-[#2A211B] text-[11px] text-[#7C6656] leading-relaxed">
                * 밤 시간대 시청 지속 시간을 높일 수 있는 부드러운 다이내믹스와 음량 밸런스를 다룹니다.
              </div>
            </div>

            {/* TYPE 03 */}
            <div className="bg-[#14100E] border border-[#2A211B] rounded-2xl p-6 flex flex-col justify-between hover:border-[#C6A66B]/50 transition-all">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#8E6D38]/20 text-[#C6A66B] flex items-center justify-center font-bold text-sm mb-4">
                  03
                </div>
                <h3 className="text-lg font-bold text-[#EDE6DC] mb-3">
                  TYPE 03. 감성·위로 음악
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-[#A8988B]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#C6A66B] mt-0.5">•</span>
                    <span>감사·자기 사랑·긍정확언 테마</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#C6A66B] mt-0.5">•</span>
                    <span>위로와 마음 회복을 이끄는 서정적 선율</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#C6A66B] mt-0.5">•</span>
                    <span>따뜻한 뉴에이지, 로파이(Lofi), 어쿠스틱 사운드</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#C6A66B] mt-0.5">•</span>
                    <span>브랜드 무드가 담긴 영상과 텍스트 연출</span>
                  </li>
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-[#2A211B] text-[11px] text-[#7C6656] leading-relaxed">
                * 개인의 메시지와 감성을 담아 공감을 이끌어내는 브랜딩형 콘텐츠에 최적화되어 있습니다.
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
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold tracking-widest text-[#C6A66B] uppercase">
              BEFORE & AFTER
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#EDE6DC] mt-2 mb-3 break-keep">
              음악을 듣는 사람에서, 나만의 감성 콘텐츠를 만드는 사람으로
            </h2>
            <p className="text-sm md:text-base text-[#A8988B] break-keep">
              막연했던 플레이리스트 창작의 모든 과정을 확실한 내 역량으로 바꿉니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {[
              {
                before: "좋아하는 힐링 음악을 감상하기만 한다.",
                after: "나만의 콘셉트로 AI 음악을 직접 제작한다.",
              },
              {
                before: "AI 음악 프롬프트를 어떻게 작성해야 할지 모른다.",
                after: "음악 구조화 스킬로 원하는 분위기를 구체적으로 설계한다.",
              },
              {
                before: "음악 파일만 만들고 영상으로 연결하지 못한다.",
                after: "감성 배경 영상과 편집을 통해 플레이리스트로 완성한다.",
              },
              {
                before: "유튜브 채널 방향과 업로드 방법이 막막하다.",
                after: "채널 콘셉트와 업로드 흐름을 이해하고 직접 콘텐츠를 게시한다.",
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
                  <p className="text-xs sm:text-sm text-[#8C7A6B] mt-2 line-through decoration-[#8C7A6B]/50">
                    {item.before}
                  </p>
                </div>
                {/* AFTER */}
                <div className="pt-3">
                  <span className="text-[11px] font-bold text-[#C6A66B] bg-[#C6A66B]/10 px-2 py-0.5 rounded border border-[#C6A66B]/30">
                    AFTER
                  </span>
                  <p className="text-sm sm:text-base font-bold text-[#EDE6DC] mt-2 break-keep">
                    {item.after}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 07. AI MUSIC CREATION (AI 음악 제작 8대 학습)
         ═══════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 border-b border-[#2A211B] bg-[#120E0C]">
        <div className="site-container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold tracking-widest text-[#C6A66B] uppercase">
              CREATE YOUR OWN SOUND
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#EDE6DC] mt-2 mb-3 break-keep">
              내가 원하는 감정을, 하나의 음악으로 표현합니다.
            </h2>
            <p className="text-sm md:text-base text-[#A8988B] break-keep">
              복잡한 악기 연주나 작곡 이론이 없어도, 감정과 목적에 맞게 AI로 사운드를 정밀하게 설계합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {[
              { num: "01", title: "AI 음악 도구 기본 사용법", desc: "음악 생성 인터페이스와 작업 프로세스 익히기" },
              { num: "02", title: "명상·수면 장르 구분", desc: "앰비언트, 뉴에이지, 로파이, 싱잉볼 등 장르 특성 파악" },
              { num: "03", title: "감정과 분위기 설정", desc: "차분함, 포근함, 깊은 이완 등 무드 키워드 정립" },
              { num: "04", title: "악기·템포·질감 선택", desc: "피아노 톤, 리버브 공간감, BPM 템포 조절" },
              { num: "05", title: "보컬 유무 & 자연음 활용", desc: "인스트루멘탈 설정 및 빗소리·바람소리 레이어링" },
              { num: "06", title: "음악 구조 설계", desc: "인트로, 반복되는 테마, 아웃트로의 흐름 완성" },
              { num: "07", title: "생성 결과 확인과 수정", desc: "원하는 분위기가 나올 때까지 디테일 프롬프트 튜닝" },
              { num: "08", title: "음원 저장 & 활용 조건", desc: "고음질 포맷 내보내기 및 상업적 라이선스 범위 확인" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-[#14100E] border border-[#2A211B] p-4 rounded-xl hover:border-[#C6A66B]/40 transition-colors"
              >
                <span className="text-xs font-mono font-bold text-[#C6A66B]">{item.num}</span>
                <h3 className="text-sm font-bold text-[#EDE6DC] mt-1 mb-1">{item.title}</h3>
                <p className="text-xs text-[#A8988B] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-xs text-[#7C6656] mt-8">
            * 음악 생성 도구명과 구체적인 기능은 실제 수업에서 사용하는 최신 안정화 도구를 확인하여 반영합니다.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 08. SPECIAL SKILL (음악 구조화 프롬프트 스킬)
         ═══════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 border-b border-[#2A211B] bg-[#0D0B0A]">
        <div className="site-container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold tracking-widest text-[#C6A66B] uppercase">
              AI MUSIC PROMPT SKILL
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#EDE6DC] mt-2 mb-3 break-keep">
              음악을 몰라도, 원하는 분위기를 구체적으로 설계할 수 있도록.
            </h2>
            <p className="text-sm md:text-base text-[#A8988B] break-keep">
              자명스쿨에서 제공할 예정인 AI 음악 구조화 프롬프트 스킬을 활용해, 간단한 아이디어를 음악 생성에 적합한 프롬프트로 발전시킵니다.
            </p>
          </div>

          {/* 스킬 작동 프로세스 카드 */}
          <div className="max-w-4xl mx-auto bg-[#14100E] border border-[#2A211B] rounded-2xl p-6 sm:p-8 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              {/* 입력 */}
              <div className="md:col-span-4 bg-[#1C1512] border border-[#3A2D25] p-4 rounded-xl">
                <span className="text-[11px] font-bold text-[#C6A66B] uppercase block mb-1">
                  STEP 1. 단순 아이디어 입력
                </span>
                <p className="text-sm font-medium text-[#EDE6DC] bg-[#0D0B0A] p-3 rounded-lg border border-[#2A211B]">
                  &ldquo;잠들기 전에 듣는 따뜻한 피아노 음악&rdquo;
                </p>
                <span className="text-[11px] text-[#8C7A6B] mt-2 block">
                  단 한 줄의 문장으로 시작
                </span>
              </div>

              {/* 변환 화살표 */}
              <div className="md:col-span-1 flex justify-center text-[#C6A66B] text-xl font-bold">
                <span className="hidden md:inline">→</span>
                <span className="md:hidden">↓</span>
              </div>

              {/* 스킬 분석 결과 */}
              <div className="md:col-span-7 bg-[#1C1512] border border-[#3A2D25] p-4 rounded-xl">
                <span className="text-[11px] font-bold text-[#C6A66B] uppercase block mb-2">
                  STEP 2. AI 음악 구조화 스킬이 자동 정리하는 9대 요소
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
                  {[
                    "음악의 사용 목적",
                    "전체 감정과 분위기",
                    "장르 및 스타일",
                    "주요 악기와 음색",
                    "템포 및 리듬 (BPM)",
                    "곡의 전개 구조",
                    "자연음 및 공간감",
                    "보컬 유무 (Inst)",
                    "피해야 할 요소 (Negative)",
                  ].map((elem, idx) => (
                    <div key={idx} className="bg-[#0D0B0A] px-2.5 py-1.5 rounded border border-[#2A211B] text-[#EDE6DC]">
                      <span className="text-[#C6A66B] mr-1">✦</span>
                      <span>{elem}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-[#2A211B] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold text-[#C6A66B] block">RESULT</span>
                <p className="text-xs sm:text-sm text-[#EDE6DC] font-medium">
                  AI 음악 생성 도구에 바로 붙여넣는 구조화된 영문/한글 프롬프트 완성
                </p>
              </div>
              <div className="px-4 py-2 bg-[#8E6D38]/20 border border-[#8E6D38]/50 rounded-xl text-xs text-[#E0A96D] font-bold">
                프롬프트 오류 및 실패율 대폭 감소
              </div>
            </div>
          </div>

          {/* 하단 강조 문구 */}
          <div className="text-center max-w-xl mx-auto">
            <p className="text-base sm:text-lg font-bold text-[#EDE6DC] mb-2">
              &ldquo;막연한 감성을, 구체적인 음악 설계로 바꾸는 방법을 배웁니다.&rdquo;
            </p>
            <p className="text-xs text-[#7C6656]">
              * 본 스킬은 수강 혜택으로 제공 예정이며, 최종 기능과 파일 형식은 강의 오픈 시 확정 안내됩니다.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 09. VISUAL CREATION (감성 배경 영상)
         ═══════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 border-b border-[#2A211B] bg-[#120E0C]">
        <div className="site-container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold tracking-widest text-[#C6A66B] uppercase">
              EMOTIONAL VISUALS
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#EDE6DC] mt-2 mb-3 break-keep">
              음악의 분위기를 눈으로도 느낄 수 있도록.
            </h2>
            <p className="text-sm md:text-base text-[#A8988B] break-keep">
              음악에 어울리는 감성 배경 이미지와 부드러운 움직임의 루프 영상을 제작합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto mb-12">
            {/* 7대 학습 내용 리스트 */}
            <div className="lg:col-span-7 space-y-3">
              {[
                { title: "음악 콘셉트에 맞는 배경 기획", desc: "사운드의 무드와 톤앤매너를 일치시키는 시각적 기획" },
                { title: "AI 이미지 제작 프롬프트", desc: "고해상도 감성 일러스트 및 실사풍 풍경 이미지 생성" },
                { title: "채널별 일관된 색채와 스타일", desc: "시리즈 전체를 관통하는 일관된 브랜드 팔레트 구축" },
                { title: "빛·비·자연 등 감성 요소 활용", desc: "햇살, 창가 빗방울, 안개, 밤하늘 등 몰입감 높은 디테일" },
                { title: "이미지에 부드러운 움직임 적용", desc: "정적인 이미지를 살아 숨쉬게 만드는 모션 제네레이션" },
                { title: "짧은 루프 영상 제작 및 연결", desc: "어색한 끊김 없이 자연스럽게 반복되는 심리스 루프" },
                { title: "16:9 유튜브 영상 비율 최적화", desc: "데스크톱, TV, 모바일 어디서나 완벽한 가독성 확보" },
              ].map((item, idx) => (
                <div key={idx} className="bg-[#14100E] border border-[#2A211B] p-3 sm:p-3.5 rounded-xl flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-[#8E6D38]/20 text-[#C6A66B] text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-[#EDE6DC]">{item.title}</h3>
                    <p className="text-xs text-[#A8988B] mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* 4대 결과물 무드 카드 */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-3">
              <div className="bg-[#181310] border border-[#2A211B] p-4 rounded-xl text-center">
                <span className="text-2xl mb-1 block">🌌</span>
                <span className="text-xs font-bold text-[#EDE6DC] block">밤하늘과 달빛</span>
                <span className="text-[10px] text-[#A8988B]">Deep Night & Moon</span>
              </div>
              <div className="bg-[#181310] border border-[#2A211B] p-4 rounded-xl text-center">
                <span className="text-2xl mb-1 block">🌧️</span>
                <span className="text-xs font-bold text-[#EDE6DC] block">비 내리는 창가</span>
                <span className="text-[10px] text-[#A8988B]">Rainy Window View</span>
              </div>
              <div className="bg-[#181310] border border-[#2A211B] p-4 rounded-xl text-center">
                <span className="text-2xl mb-1 block">🏡</span>
                <span className="text-xs font-bold text-[#EDE6DC] block">햇살 들어오는 정원</span>
                <span className="text-[10px] text-[#A8988B]">Warm Sunlit Garden</span>
              </div>
              <div className="bg-[#181310] border border-[#2A211B] p-4 rounded-xl text-center">
                <span className="text-2xl mb-1 block">🌊</span>
                <span className="text-xs font-bold text-[#EDE6DC] block">잔잔한 수면 풍경</span>
                <span className="text-[10px] text-[#A8988B]">Gentle Water Ripples</span>
              </div>
            </div>
          </div>

          <p className="text-center text-xs text-[#7C6656]">
            * 실제 사용하는 영상 생성 도구와 이미지 소스는 수업 구성 확정 후 최적의 워크플로로 제공됩니다.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 10. PLAYLIST EDITING (영상 편집)
         ═══════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 border-b border-[#2A211B] bg-[#0D0B0A]">
        <div className="site-container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold tracking-widest text-[#C6A66B] uppercase">
              SEAMLESS EDITING
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#EDE6DC] mt-2 mb-3 break-keep">
              음악과 영상을 연결해 하나의 플레이리스트로 완성합니다.
            </h2>
            <p className="text-sm md:text-base text-[#A8988B] break-keep">
              음원 연결부터 자연스러운 볼륨 크로스페이드, 배경 영상 결합 및 MP4 출력까지
            </p>
          </div>

          {/* 7대 학습 내용 */}
          <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-8">
            {[
              { num: "01", title: "AI 생성 음원 정리", desc: "메타데이터 정리 및 트랙별 길이, 무드 분류" },
              { num: "02", title: "플레이리스트 순서 구성", desc: "도입-몰입-이완으로 이어지는 자연스러운 곡 배치" },
              { num: "03", title: "음악 간 전환 & 음량 균형", desc: "튀는 소리 없는 부드러운 크로스페이드와 노멀라이징" },
              { num: "04", title: "배경 영상과 음악 연결", desc: "음악 박자와 무드에 맞춘 영상 트랙 싱크 맞추기" },
              { num: "05", title: "반복 구간과 자연스러운 전환", desc: "루프 구간의 이음새를 숨기는 편집 노하우" },
              { num: "06", title: "긴 영상 구성과 출력", desc: "15분·30분·1시간 등 플레이리스트 인코딩 세팅" },
              { num: "07", title: "썸네일 제작 & 최종 검수", desc: "시선을 끄는 감성 텍스트 배치 및 음질·화질 검수" },
            ].map((step, idx) => (
              <div key={idx} className="bg-[#14100E] border border-[#2A211B] p-4 rounded-xl">
                <span className="text-xs font-mono font-bold text-[#C6A66B]">{step.num}</span>
                <h3 className="text-sm font-bold text-[#EDE6DC] mt-1 mb-1">{step.title}</h3>
                <p className="text-xs text-[#A8988B]">{step.desc}</p>
              </div>
            ))}
          </div>

          {/* 현실적 제작 안내 박스 */}
          <div className="max-w-3xl mx-auto bg-[#181310] border border-[#3A2D25] p-5 rounded-2xl text-center">
            <span className="text-xs font-bold text-[#C6A66B] uppercase block mb-1">
              PRACTICAL LEARNING GUIDE
            </span>
            <p className="text-xs sm:text-sm text-[#A8988B] leading-relaxed break-keep">
              장시간 영상은 원데이에서 <strong>제작 프로세스와 핵심 기술을 완벽히 체화</strong>하고, 수업 중에는 약 5~10분 분량의 완성도 높은 실습 샘플로 확인합니다.
              몇 시간짜리 렌더링에 시간을 낭비하지 않고, 혼자서도 얼마든지 긴 영상을 확장할 수 있는 기초를 완성합니다.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 11. YOUTUBE UPLOAD (유튜브 업로드 및 SEO)
         ═══════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 border-b border-[#2A211B] bg-[#120E0C]">
        <div className="site-container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold tracking-widest text-[#C6A66B] uppercase">
              FIRST CHANNEL STEP
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#EDE6DC] mt-2 mb-3 break-keep">
              나만의 음악을 세상과 나누는 첫 번째 채널 콘텐츠
            </h2>
            <p className="text-sm md:text-base text-[#A8988B] break-keep">
              정확한 타깃 검색어와 정돈된 업로드 설정으로 유튜브 알고리즘에 올바르게 소개합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto mb-8">
            {[
              { title: "채널 콘셉트 & 기본 세팅", desc: "채널 아트, 프로필, 채널 키워드 일관성 맞추기" },
              { title: "플레이리스트 제목 기획", desc: "검색 유입과 감성 클릭을 모두 잡는 네이밍 공식" },
              { title: "검색 의도 키워드 선정", desc: "명상, 수면, 집중 등 시청자가 실제 검색하는 태그" },
              { title: "썸네일 & 영상 설명문 작성", desc: "트랙리스트 타임스탬프와 편안한 소개글 구성" },
              { title: "동영상 업로드 & 공개 설정", desc: "예약 발행, 공개/일부공개 범위, 카테고리 지정" },
              { title: "재생목록 시리즈 구성", desc: "체류 시간을 늘리는 테마별 재생목록 묶기" },
              { title: "저작권 & 라이선스 확인", desc: "Content ID 저작권 침해 없는 안전한 음원 검증" },
              { title: "유튜브 분석 지표 이해", desc: "노출 클릭률(CTR), 평균 시청 지속 시간 분석법" },
            ].map((item, idx) => (
              <div key={idx} className="bg-[#14100E] border border-[#2A211B] p-4 rounded-xl">
                <span className="w-5 h-5 rounded-full bg-[#8E6D38]/20 text-[#C6A66B] text-xs font-bold flex items-center justify-center mb-2">
                  ✓
                </span>
                <h3 className="text-xs sm:text-sm font-bold text-[#EDE6DC] mb-1">{item.title}</h3>
                <p className="text-xs text-[#A8988B] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-xs text-[#7C6656]">
            * 제목과 썸네일은 과장된 치료 효과나 검증되지 않은 의학적 효능을 배제하고, 건강하고 신뢰받는 채널 가이드를 준수합니다.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 12. YOUTUBE CHANNEL STRATEGY (지속 전략)
         ═══════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 border-b border-[#2A211B] bg-[#0D0B0A]">
        <div className="site-container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold tracking-widest text-[#C6A66B] uppercase">
              SUSTAINABLE CHANNEL
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#EDE6DC] mt-2 mb-3 break-keep">
              한 편의 음악에서, 나만의 콘텐츠 채널로.
            </h2>
            <p className="text-sm md:text-base text-[#A8988B] break-keep">
              명상·수면 음악은 긴 호흡으로 사랑받는 장르입니다. 단순 업로드를 넘어 지속 가능한 채널 성장 원리를 배웁니다.
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {[
              {
                title: "채널 타깃과 콘셉트의 일관성",
                desc: "구독자가 채널을 찾는 이유를 명확히 유지해야 알고리즘 추천이 시작됩니다.",
              },
              {
                title: "샘플과 장시간 영상의 역할 분담",
                desc: "쇼츠나 짧은 미리보기로 신규 유입을 만들고, 긴 플레이리스트로 총 시청시간을 확보합니다.",
              },
              {
                title: "시리즈형 콘텐츠 기획",
                desc: "‘비 오는 날의 서재’, ‘새벽 2시 수면’ 등 정기적으로 찾아오는 시리즈를 구축합니다.",
              },
              {
                title: "제목·썸네일·재생목록 최적화",
                desc: "클릭을 유도하는 감성 카피와 타임스탬프 기반 재생목록으로 시청 편의성을 극대화합니다.",
              },
              {
                title: "시청 지속 시간 등 핵심 분석 지표",
                desc: "어느 구간에서 이탈하는지 데이터를 읽고 다음 플레이리스트 구성에 반영합니다.",
              },
              {
                title: "AI 음악 독창성과 반복 정책",
                desc: "단순 복사·붙여넣기가 아닌, 독창적인 무드와 영상 결합으로 유튜브 중복 콘텐츠 규제를 예방합니다.",
              },
              {
                title: "저작권과 상업적 사용 권리",
                desc: "생성 AI 툴의 상업적 플랜 조건을 정확히 이해하고 안전하게 채널을 운영합니다.",
              },
              {
                title: "유튜브 파트너 프로그램 기본 조건",
                desc: "수익 창출을 위한 구독자 1,000명 및 시청시간 4,000시간 요건의 현실적 달성 로드맵을 이해합니다.",
              },
            ].map((strategy, idx) => (
              <div key={idx} className="bg-[#14100E] border border-[#2A211B] p-4 rounded-xl flex items-start gap-3">
                <span className="text-xs font-mono font-bold text-[#C6A66B] mt-0.5">0{idx + 1}</span>
                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-[#EDE6DC] mb-1">{strategy.title}</h3>
                  <p className="text-xs text-[#A8988B] leading-relaxed">{strategy.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* 건전한 성장 안내 배너 */}
          <div className="max-w-3xl mx-auto bg-[#181310] border border-[#3A2D25] p-4 sm:p-5 rounded-2xl text-center">
            <p className="text-xs sm:text-sm text-[#A8988B]">
              자명스쿨은 <strong>‘쉬운 자동 수익’이나 ‘단기 수익 보장’ 같은 허위·과장 광고를 지양합니다.</strong> <br className="hidden sm:inline" />
              진정성 있는 감성과 꾸준한 창작으로 내 취향을 하나의 채널 브랜드로 키워나가는 바른 길을 함께합니다.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 13. CURRICULUM (실전 커리큘럼 6단계)
         ═══════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 border-b border-[#2A211B] bg-[#120E0C]">
        <div className="site-container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold tracking-widest text-[#C6A66B] uppercase">
              CURRICULUM
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#EDE6DC] mt-2 mb-3 break-keep">
              기획부터 음악 제작, 영상 편집, 유튜브 업로드까지
            </h2>
            <p className="text-sm md:text-base text-[#A8988B] break-keep">
              단 하루 만에 기획에서 유튜브 등록까지 전 과정을 직접 경험하는 원스톱 실습
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                part: "PART 01",
                title: "나만의 힐링 채널 콘셉트 기획",
                desc: "타깃과 감정 키워드 정하기 · 채널 브랜드와 콘텐츠 스타일 설정 · 음악 제작 주제 선정",
              },
              {
                part: "PART 02",
                title: "AI 음악 제작 실습",
                desc: "음악 생성 도구 실습 · 음악 장르와 구조 설계 · 자명 음악 프롬프트 스킬 활용 · 음악 수정과 고음질 저장",
              },
              {
                part: "PART 03",
                title: "감성 비주얼 & 루프 영상 제작",
                desc: "배경 이미지 생성 · 영상 스타일 일관성 유지 · 잔잔하게 반복되는 루프형 감성 영상 제작",
              },
              {
                part: "PART 04",
                title: "플레이리스트 영상 편집",
                desc: "음원 연결과 볼륨 레벨링 · 배경 영상 결합 · 긴 영상 구성 및 크로스페이드 · 16:9 MP4 출력",
              },
              {
                part: "PART 05",
                title: "유튜브 콘텐츠 완성 & 업로드",
                desc: "썸네일 및 제목 제작 · 설명문과 타임스탬프 구성 · 키워드 태그 설정 및 실습 업로드",
              },
              {
                part: "PART 06",
                title: "채널 운영 기초 & 지속 전략",
                desc: "콘텐츠 시리즈 기획 · 시청시간과 분석 지표 읽는 법 · 저작권 라이선스 및 수익화 정책 이해",
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
          SECTION 14. CLASS KIT (수강 혜택 6종)
         ═══════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 border-b border-[#2A211B] bg-[#0D0B0A]">
        <div className="site-container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold tracking-widest text-[#C6A66B] uppercase">
              CLASS KIT & BENEFITS
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#EDE6DC] mt-2 mb-3 break-keep">
              음악을 만든 뒤에도 계속 활용할 수 있는 제작 자료를 준비합니다.
            </h2>
            <p className="text-sm md:text-base text-[#A8988B] break-keep">
              수업이 끝난 후에도 집에서 혼자 새로운 플레이리스트를 제작할 수 있는 실전 키트
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto mb-8">
            {[
              {
                num: "혜택 01",
                title: "AI 명상·힐링 음악 구조화 프롬프트 스킬",
                desc: "감정과 악기를 입력하면 AI 음악 프롬프트를 자동으로 조립해 주는 맞춤 프롬프트 템플릿",
              },
              {
                num: "혜택 02",
                title: "힐링 플레이리스트 콘셉트 기획 템플릿",
                desc: "타깃, 상황, 감정 키워드를 빠르게 도출해 채널의 정체성을 잡는 기획 워크시트",
              },
              {
                num: "혜택 03",
                title: "AI 음악 프롬프트 & 장르별 예제집",
                desc: "수면, 명상, 뉴에이지, 앰비언트 등 검증된 사운드 키워드와 추천 세팅 모음",
              },
              {
                num: "혜택 04",
                title: "감성 배경 이미지·영상 제작 가이드",
                desc: "미드저니/달리 등 AI 이미지 프롬프트와 16:9 루프 영상 제작 실전 가이드",
              },
              {
                num: "혜택 05",
                title: "플레이리스트 편집 및 출력 가이드",
                desc: "크로스페이드, 음량 평준화, 빠른 렌더링을 위한 영상 편집 세팅 프리셋",
              },
              {
                num: "혜택 06",
                title: "유튜브 업로드 & 채널 운영 체크리스트",
                desc: "업로드 전 반드시 확인할 저작권, 설명문 타임스탬프, SEO 태그 점검 목록",
              },
            ].map((kit, idx) => (
              <div key={idx} className="bg-[#14100E] border border-[#2A211B] p-5 rounded-2xl flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold text-[#C6A66B] block mb-2">{kit.num}</span>
                  <h3 className="text-sm sm:text-base font-bold text-[#EDE6DC] mb-2">{kit.title}</h3>
                  <p className="text-xs text-[#A8988B] leading-relaxed">{kit.desc}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#2A211B] text-[11px] text-[#8E6D38] font-medium">
                  제공 예정 자료
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
          SECTION 15. ONE DAY RESULT (수업 결과물 5대 산출물)
         ═══════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 border-b border-[#2A211B] bg-[#120E0C]">
        <div className="site-container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold tracking-widest text-[#C6A66B] uppercase">
              ONE DAY DELIVERABLES
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#EDE6DC] mt-2 mb-3 break-keep">
              나만의 감성이 담긴 플레이리스트 한 편을 완성하는 경험
            </h2>
            <p className="text-sm md:text-base text-[#A8988B] break-keep">
              이론으로 끝나지 않고, 수업 종료와 함께 내 손에 쥐어지는 5가지 구체적인 산출물
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-3 mb-8">
            {[
              { num: "01", name: "나만의 힐링 채널 콘셉트 기획안", detail: "누구에게 어떤 위로를 전할지 정의한 채널 아이덴티티 시트" },
              { num: "02", name: "AI로 직접 제작한 힐링 음악 샘플", detail: "내 취향과 프롬프트 스킬로 뽑아낸 고음질 오디오 트랙" },
              { num: "03", name: "감성 배경 이미지 및 루프 영상", detail: "음악의 무드와 어우러지는 16:9 고화질 비주얼 에셋" },
              { num: "04", name: "음악과 영상이 결합된 플레이리스트 영상 초안", detail: "실제 유튜브에 등록 가능한 형태의 완성된 MP4 영상 파일" },
              { num: "05", name: "유튜브 업로드용 제목·썸네일·설명문 초안", detail: "클릭률과 검색 유입을 모두 고려한 콘텐츠 메타데이터 세트" },
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

          <p className="text-center text-xs text-[#7C6656]">
            * 실제 업로드는 개인 채널 준비 상황과 수업 진행 범위에 따라 자율적으로 진행할 수 있습니다.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 16. RECOMMENDED FOR (추천 대상)
         ═══════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 border-b border-[#2A211B] bg-[#0D0B0A]">
        <div className="site-container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold tracking-widest text-[#C6A66B] uppercase">
              RECOMMENDED FOR
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#EDE6DC] mt-2 mb-3 break-keep">
              이런 분들께 추천합니다.
            </h2>
            <p className="text-sm md:text-base text-[#A8988B] break-keep">
              얼굴 공개 없이 나의 감성과 취향을 하나의 디지털 채널로 키워나가고 싶은 모든 분
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {[
              "얼굴을 공개하지 않고 유튜브를 시작하고 싶은 분",
              "명상·힐링·수면 음악에 깊은 관심이 있는 분",
              "나만의 감성 콘텐츠를 제작하고 싶은 분",
              "음악 경험은 없지만 AI 음악 제작을 배우고 싶은 분",
              "긴 형태의 플레이리스트 제작 방법을 배우고 싶은 분",
              "자신의 취향을 하나의 콘텐츠 브랜드로 발전시키고 싶은 분",
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
          SECTION 17. FAQ (자주 묻는 질문 6문항)
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
                q: "음악을 전혀 몰라도 수강할 수 있나요?",
                a: "네, 가능합니다. 복잡한 작곡 이론이나 악기 연주 대신, 음악 생성 도구와 자명스쿨의 구조화 프롬프트 스킬을 중심으로 실습하므로 전문 작곡 경험이 없어도 누구나 감성적인 음악을 완성할 수 있습니다.",
              },
              {
                q: "얼굴이나 목소리를 공개해야 하나요?",
                a: "아닙니다. 명상 및 힐링 플레이리스트는 자신의 얼굴이나 목소리를 드러내지 않고, AI로 만든 음악과 감성 배경 영상을 중심으로 운영하는 대표적인 노페이스(No-Face) 채널 방식입니다.",
              },
              {
                q: "수면 음악과 주파수 음악도 만들 수 있나요?",
                a: "수면·명상·앰비언트 사운드의 제작 방법과 432Hz, 528Hz 등 주파수 기반 콘셉트를 함께 다룹니다. 다만 특정 주파수의 건강 개선 효과나 질병 치료 효과를 보장하는 의학적 과정은 아닙니다.",
              },
              {
                q: "장시간 플레이리스트를 완성할 수 있나요?",
                a: "긴 플레이리스트의 구성 원리와 심리스 루프 편집 방법을 배웁니다. 원데이 수업 현장에서는 렌더링 시간을 감안해 약 5~10분의 실습 샘플로 실습하며, 혼자서도 1~3시간 이상 영상을 만드는 방법을 안내해 드립니다.",
              },
              {
                q: "AI로 만든 음악은 유튜브에서 수익화할 수 있나요?",
                a: "AI 음악도 생성 도구의 상업적 라이선스와 유튜브의 수익화 및 재사용 콘텐츠 가이드라인을 충족하면 수익화 가능성이 있습니다. 다만 음악의 독창성, 비주얼의 결합 완성도, 채널 심사 기준에 따라 상이할 수 있습니다.",
              },
              {
                q: "음악 제작에 유료 도구가 필요한가요?",
                a: "사용하는 음악 및 영상 생성 도구의 무료 제공 범위와 유료 플랜 조건을 비교 안내해 드립니다. 수업 실습에 필요한 구체적인 조건은 개강 확정 시 사전에 상세히 안내해 드립니다.",
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
          SECTION 18. FINAL CTA & REFUND POLICY
         ═══════════════════════════════════════════════ */}
      <section id="apply" className="py-20 md:py-28 bg-[#181310] border-b border-[#2A211B] text-center relative overflow-hidden">
        {/* 은은한 배경 광원 효과 */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#C6A66B]/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="site-container relative z-10 max-w-2xl mx-auto px-4">
          <span className="text-xs font-bold tracking-widest text-[#C6A66B] uppercase">
            RESERVATION
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#EDE6DC] mt-2 mb-4 break-keep">
            내 마음에 쉼이 되는 음악을, <br className="hidden sm:inline" />
            누군가의 하루에 전해 보세요.
          </h2>
          <p className="text-sm sm:text-base text-[#A8988B] mb-8 break-keep">
            AI로 음악을 만들고, 감성 영상에 담아 나만의 플레이리스트와 유튜브 콘텐츠로 완성하는 시간.
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
              href="https://forms.gle/placeholder"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 rounded-xl bg-[#C6A66B] hover:bg-[#D6C6A8] text-[#1A1410] font-bold text-sm sm:text-base transition-colors shadow-lg block text-center"
              onClick={(e) => {
                // 신청 링크가 미확정인 경우 친절한 alert 안내
                e.preventDefault();
                alert("현재 개강 알림 신청 페이지 준비 중입니다. 원데이 목록에서 새로운 소식을 기다려 주세요!");
              }}
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
          <span className="text-[10px] text-[#A8988B] block">AI 힐링 플레이리스트</span>
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
