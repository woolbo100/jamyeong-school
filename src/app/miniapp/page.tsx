import React from "react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI로 나만의 미니앱 만들고 실제 출시하기 | 자명스쿨 원데이 클래스",
  description:
    "코딩을 몰라도 내 아이디어가 실제 앱이 됩니다. ChatGPT와 Codex를 활용해 아이디어 기획부터 미니앱 제작, 테스트, 앱인토스 등록과 출시 과정까지 하루 만에 경험하세요.",
};

// ─────────────────────────────────────────────────────────────
// [원데이 클래스 기본 설정 데이터]
// ─────────────────────────────────────────────────────────────
const CLASS_CONFIG = {
  category: "AI MINI APP · ONE DAY CLASS",
  badge: "자명스쿨 원데이 실전 마스터",
  titleMain: "코딩을 몰라도",
  titleSub: "내 아이디어가 실제 앱이 됩니다",
  description:
    "ChatGPT와 Codex를 활용해 아이디어 기획부터 미니앱 제작, 테스트, 앱인토스 등록과 출시 과정까지 직접 경험합니다.",
  highlight: "배우는 데서 끝나지 않습니다. 오늘, 내가 만든 앱 하나를 완성합니다.",
  meta: {
    format: "실시간 온라인 실습",
    duration: "하루 완성 원데이",
    difficulty: "왕초보 가능",
    schedule: "수시 모집 (오픈 예정)",
  },
  tags: ["ChatGPT", "Codex", "앱인토스", "미니앱제작", "바이브코딩"],
  ctaText: "미니앱 만들기 시작하기",
};

export default function MiniappPage() {
  return (
    <main className="min-h-screen bg-[#0D0B0A] text-[#EDE6DC] selection:bg-[#C6A66B]/30 selection:text-white font-sans">
      {/* ───────────────────────────────────────────────
          공통 서브 헤더 네비게이션
         ─────────────────────────────────────────────── */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-[#0D0B0A]/90 border-b border-[#2E2723] px-4 sm:px-6 py-3.5 transition-all">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link
            href="/oneday"
            className="inline-flex items-center gap-2 text-xs md:text-sm text-[#A8988B] hover:text-[#C6A66B] transition-colors group"
          >
            <span className="group-hover:-translate-x-1 transition-transform">←</span>
            <span>원데이 클래스 목록</span>
          </Link>
          <div className="text-[11px] md:text-xs tracking-wider text-[#C6A66B] font-medium hidden sm:block">
            작은 배움, 하나의 완성.
          </div>
          <a
            href="#apply"
            className="px-4 py-1.5 rounded-full bg-[#C6A66B] hover:bg-[#D6C6A8] text-[#1A1410] text-xs font-bold transition-colors"
          >
            수강 신청
          </a>
        </div>
      </nav>

      {/* ═══════════════════════════════════════════════
          섹션 1. HERO (강의 제목 · 핵심 정보 · 앱 프리뷰 목업)
         ═══════════════════════════════════════════════ */}
      <section className="w-full bg-[#F9F6F0] text-[#2E2723] border-b border-[#E8DFD3] pt-8 pb-12 md:py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* 좌측: 분류, 강의명, 소개, 메타정보, 신청 버튼 */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* 1) 카테고리 뱃지 */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs md:text-sm font-bold tracking-wider text-[#8E6D38] uppercase">
                  {CLASS_CONFIG.category}
                </span>
                <span className="text-[#C6A66B]">·</span>
                <span className="text-xs text-[#7C6656] font-medium">
                  {CLASS_CONFIG.badge}
                </span>
              </div>

              {/* 2) 메인 헤드라인 */}
              <h1 className="text-2xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight text-[#2E2723] leading-tight break-keep">
                {CLASS_CONFIG.titleMain} <br />
                <span className="text-[#8E6D38]">{CLASS_CONFIG.titleSub}</span>
              </h1>

              {/* 3) 서브 카피 */}
              <p className="text-sm sm:text-base text-[#4A3F35] leading-relaxed break-keep">
                {CLASS_CONFIG.description}
              </p>

              {/* 강조 문구 배너 */}
              <div className="p-4 rounded-xl bg-[#FAF2E6] border border-[#E8DFD3] text-sm font-semibold text-[#8E6D38] leading-relaxed break-keep">
                ✨ {CLASS_CONFIG.highlight}
              </div>

              {/* 4) 진행 방식 / 수업 시간 / 난이도 / 일정 (핵심 정보 카드) */}
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
                  <span className="block text-[11px] text-[#7C6656] mb-0.5">수강 난이도</span>
                  <strong className="text-xs sm:text-sm text-[#8E6D38] font-bold">
                    {CLASS_CONFIG.meta.difficulty}
                  </strong>
                </div>
                <div className="p-3 rounded-xl bg-white border border-[#E8DFD3] text-center shadow-xs">
                  <span className="block text-[11px] text-[#7C6656] mb-0.5">수업 일정</span>
                  <strong className="text-xs sm:text-sm text-[#2E2723] font-bold">
                    {CLASS_CONFIG.meta.schedule}
                  </strong>
                </div>
              </div>

              {/* 5) CTA 버튼 */}
              <div className="pt-2">
                <a
                  href="#apply"
                  className="w-full sm:w-auto min-h-[48px] px-8 rounded-xl bg-[#2E2723] hover:bg-[#1F1916] text-[#FFFBD1] text-base font-bold inline-flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all group"
                >
                  <span>{CLASS_CONFIG.ctaText}</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>

              {/* 보조 태그 */}
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

            {/* 우측: 앱인토스 미니앱 프리뷰 목업 프레임 */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-[290px] sm:max-w-[310px] lg:max-w-[330px] relative rounded-[32px] overflow-hidden border-[6px] border-[#2A231F] bg-[#110E0C] shadow-2xl group">
                {/* 스마트폰 상단 노치/스피커 바 */}
                <div className="h-6 bg-[#1A1512] flex items-center justify-between px-5 text-[10px] text-[#8C7B6E] select-none">
                  <span>9:41</span>
                  <div className="w-12 h-3 rounded-full bg-[#0D0B0A]" />
                  <span>5G 100%</span>
                </div>

                {/* 앱인토스 상단 헤더 */}
                <div className="px-4 py-3 bg-[#1B1512] border-b border-[#2C231E] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-md bg-[#0064FF] flex items-center justify-center text-white text-[10px] font-bold">
                      t
                    </div>
                    <span className="text-xs font-semibold text-[#EDE6DC]">앱인토스 미니앱</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-[#8C7B6E]">
                    <span>•••</span>
                    <span>✕</span>
                  </div>
                </div>

                {/* 미니앱 내부 화면 콘텐츠 */}
                <div className="p-4 space-y-3 bg-gradient-to-b from-[#181310] to-[#120E0C] min-h-[380px]">
                  {/* 빌드 완료 배지 */}
                  <div className="flex items-center justify-between px-3 py-1.5 rounded-lg bg-[#0064FF]/15 border border-[#0064FF]/30 text-[11px] text-[#60A5FA]">
                    <span className="font-semibold">● App in Toss 빌드 완료</span>
                    <span className="text-[10px] text-zinc-400">.ait 파일</span>
                  </div>

                  {/* 미니앱 메인 카드 예시 */}
                  <div className="p-4 rounded-2xl bg-[#221B17] border border-[#3E3127] text-left space-y-2">
                    <span className="text-[10px] px-2 py-0.5 rounded bg-[#C6A66B]/20 text-[#D6C6A8] font-bold inline-block">
                      나만의 맞춤 추천 앱
                    </span>
                    <h3 className="text-sm font-bold text-[#FAF7F2]">
                      오늘 나에게 꼭 맞는 선택은?
                    </h3>
                    <p className="text-[11px] text-[#9E8B7C] leading-snug">
                      조건 3가지를 선택하면 AI가 분석한 최적의 결과를 안내해 드립니다.
                    </p>
                    <div className="pt-2 space-y-1.5">
                      <div className="w-full py-2 px-3 rounded-xl bg-[#2E241E] border border-[#4A3B2F] text-xs text-[#EDE6DC] font-medium flex justify-between items-center">
                        <span>1. 선호하는 분위기 선택</span>
                        <span className="text-[#C6A66B]">선택완료 ✓</span>
                      </div>
                      <div className="w-full py-2 px-3 rounded-xl bg-[#2E241E] border border-[#4A3B2F] text-xs text-[#EDE6DC] font-medium flex justify-between items-center">
                        <span>2. 관심 카테고리 설정</span>
                        <span className="text-[#C6A66B]">선택완료 ✓</span>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="w-full py-2.5 rounded-xl bg-[#0064FF] text-white text-xs font-bold shadow-md hover:bg-[#0052D4] transition-colors mt-2"
                    >
                      결과 확인하고 공유하기
                    </button>
                  </div>

                  {/* 하단 미니앱 상태 안내 */}
                  <div className="p-3 rounded-xl bg-[#1A1411] border border-[#2B211A] text-[11px] text-[#A8988B] space-y-1">
                    <div className="flex items-center justify-between text-[#D6C6A8]">
                      <span>심사 준비 상태</span>
                      <span className="font-bold text-green-400">등록 검증 완료</span>
                    </div>
                    <p className="text-[10px] text-[#7A6A5E]">
                      아이디어 기획 → Codex 개발 → 앱인토스 정식 배포
                    </p>
                  </div>
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
            02. PROBLEM (WHY MINI APP?)
           ─────────────────────────────────────────── */}
        <section className="py-20 md:py-28 px-4 sm:px-6 max-w-4xl mx-auto border-b border-[#26201B]">
          <div className="text-center mb-14">
            <span className="text-xs md:text-sm font-semibold tracking-[0.2em] text-[#C6A66B] uppercase mb-3 block">
              WHY MINI APP?
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-[#FAF7F2] mb-5 leading-tight break-keep">
              아이디어는 있는데 <br />
              앱을 만드는 건 너무 어렵게 느껴졌나요?
            </h2>
            <div className="space-y-3 text-sm sm:text-base text-[#9E8B7C] max-w-2xl mx-auto leading-relaxed break-keep">
              <p>
                앱을 만들려면 코딩부터 배워야 할 것 같고, <br />
                개발자를 찾아야 할 것 같고, <br />
                앱스토어 등록 과정도 복잡하게 느껴집니다.
              </p>
              <p className="pt-2 text-[#C8BCB0]">
                하지만 AI와 미니앱 플랫폼의 등장으로 <br />
                이제는 작은 아이디어도 직접 서비스로 구현해볼 수 있는 시대가 되었습니다.
              </p>
            </div>
          </div>

          {/* 3대 고민 카드 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="p-6 md:p-7 rounded-2xl bg-[#14100E] border border-[#2A211B] flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-[#C6A66B] mb-2 block">장벽 01</span>
                <h3 className="text-lg font-bold text-[#FAF7F2] mb-3">코딩의 막막함</h3>
                <p className="text-sm text-[#9E8B7C] leading-relaxed break-keep">
                  언어 문법과 복잡한 프레임워크를 배우느라 정작 만들고 싶었던 아이디어는 시작도 못 하셨나요?
                </p>
              </div>
            </div>

            <div className="p-6 md:p-7 rounded-2xl bg-[#14100E] border border-[#2A211B] flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-[#C6A66B] mb-2 block">장벽 02</span>
                <h3 className="text-lg font-bold text-[#FAF7F2] mb-3">개발자 & 외주 비용</h3>
                <p className="text-sm text-[#9E8B7C] leading-relaxed break-keep">
                  작은 테스트나 재미있는 도구 하나 만들고 싶은데 수백만 원 개발 비용을 쓸 수도 없어 포기하셨나요?
                </p>
              </div>
            </div>

            <div className="p-6 md:p-7 rounded-2xl bg-[#14100E] border border-[#2A211B] flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-[#C6A66B] mb-2 block">장벽 03</span>
                <h3 className="text-lg font-bold text-[#FAF7F2] mb-3">스토어 등록의 벽</h3>
                <p className="text-sm text-[#9E8B7C] leading-relaxed break-keep">
                  구글 플레이와 앱스토어의 복잡한 개발자 계정과 까다로운 심사 기준에 지쳐 끝나버리셨나요?
                </p>
              </div>
            </div>
          </div>

          {/* 강조 문구 배너 */}
          <div className="p-8 md:p-10 rounded-2xl bg-gradient-to-b from-[#1C1510] to-[#120E0C] border border-[#3E3024] text-center shadow-lg">
            <p className="text-base sm:text-xl font-bold text-[#D6C6A8] leading-relaxed break-keep">
              “중요한 것은 코드를 얼마나 아느냐가 아니라, 무엇을 만들 것인가입니다.”
            </p>
            <p className="text-xs sm:text-sm text-[#8F7D6E] mt-2">
              복잡한 코딩의 장벽은 AI가 대신 넘겨주고, 여러분은 오직 나만의 아이디어와 사용자 경험에만 집중합니다.
            </p>
          </div>
        </section>

        {/* ───────────────────────────────────────────
            03. BEFORE → AFTER
           ─────────────────────────────────────────── */}
        <section className="py-20 md:py-28 px-4 sm:px-6 bg-[#120E0C] border-b border-[#26201B]">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-14">
              <span className="text-xs md:text-sm font-semibold tracking-[0.2em] text-[#C6A66B] uppercase mb-3 block">
                TRANSFORMATION
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold text-[#FAF7F2] mb-4 break-keep">
                생각만 하던 아이디어를 <br />
                실제 작동하는 서비스로
              </h2>
              <p className="text-sm sm:text-base text-[#9E8B7C] max-w-xl mx-auto break-keep">
                망설임으로 가득했던 생각이 단 하루 만에 실행 가능한 디지털 자산으로 바뀝니다.
              </p>
            </div>

            {/* Before vs After 비교 리스트 */}
            <div className="space-y-4">
              {/* 항목 1 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-5 rounded-2xl bg-[#17120F] border border-[#2B221B]">
                <div className="space-y-1">
                  <span className="text-xs text-red-400 font-bold">✕ BEFORE</span>
                  <h4 className="text-sm md:text-base font-bold text-[#FAF7F2]">아이디어만 메모해 둔다</h4>
                  <p className="text-xs text-[#8F7D6E]">노트에 적힌 채 실현되지 못하고 잊혀지는 상상</p>
                </div>
                <div className="space-y-1 md:border-l md:border-[#2B221B] md:pl-5">
                  <span className="text-xs text-[#C6A66B] font-bold">✓ AFTER</span>
                  <h4 className="text-sm md:text-base font-bold text-[#D6C6A8]">아이디어를 앱 구조로 기획한다</h4>
                  <p className="text-xs text-[#A8988B]">사용자 흐름과 기능 명세가 정리된 실전 화면으로 구체화</p>
                </div>
              </div>

              {/* 항목 2 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-5 rounded-2xl bg-[#17120F] border border-[#2B221B]">
                <div className="space-y-1">
                  <span className="text-xs text-red-400 font-bold">✕ BEFORE</span>
                  <h4 className="text-sm md:text-base font-bold text-[#FAF7F2]">코딩을 몰라 시작하지 못한다</h4>
                  <p className="text-xs text-[#8F7D6E]">문법의 어려움에 부딪혀 시작 단계에서 중도 포기</p>
                </div>
                <div className="space-y-1 md:border-l md:border-[#2B221B] md:pl-5">
                  <span className="text-xs text-[#C6A66B] font-bold">✓ AFTER</span>
                  <h4 className="text-sm md:text-base font-bold text-[#D6C6A8]">AI에게 원하는 기능을 정확하게 요청한다</h4>
                  <p className="text-xs text-[#A8988B]">ChatGPT와 Codex와 대화하며 자연어로 코드를 완성</p>
                </div>
              </div>

              {/* 항목 3 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-5 rounded-2xl bg-[#17120F] border border-[#2B221B]">
                <div className="space-y-1">
                  <span className="text-xs text-red-400 font-bold">✕ BEFORE</span>
                  <h4 className="text-sm md:text-base font-bold text-[#FAF7F2]">앱 제작은 개발자의 영역이라 생각한다</h4>
                  <p className="text-xs text-[#8F7D6E]">소수의 엔지니어만 서비스 출시가 가능하다고 여김</p>
                </div>
                <div className="space-y-1 md:border-l md:border-[#2B221B] md:pl-5">
                  <span className="text-xs text-[#C6A66B] font-bold">✓ AFTER</span>
                  <h4 className="text-sm md:text-base font-bold text-[#D6C6A8]">직접 앱을 실행하고 수정한다</h4>
                  <p className="text-xs text-[#A8988B]">내 브라우저와 모바일에서 클릭하고 수정하는 능동적 창작</p>
                </div>
              </div>

              {/* 항목 4 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-5 rounded-2xl bg-[#17120F] border border-[#2B221B]">
                <div className="space-y-1">
                  <span className="text-xs text-red-400 font-bold">✕ BEFORE</span>
                  <h4 className="text-sm md:text-base font-bold text-[#FAF7F2]">서비스 출시 과정을 경험해본 적이 없다</h4>
                  <p className="text-xs text-[#8F7D6E]">등록 방법과 플랫폼 규격을 몰라 세상에 내보내지 못함</p>
                </div>
                <div className="space-y-1 md:border-l md:border-[#2B221B] md:pl-5">
                  <span className="text-xs text-[#C6A66B] font-bold">✓ AFTER</span>
                  <h4 className="text-sm md:text-base font-bold text-[#D6C6A8]">앱인토스에 실제 등록 과정을 경험한다</h4>
                  <p className="text-xs text-[#A8988B]">.ait 빌드부터 스크린샷, 심사 콘솔 등록까지 전 과정 체득</p>
                </div>
              </div>

              {/* 항목 5 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-5 rounded-2xl bg-[#17120F] border border-[#2B221B]">
                <div className="space-y-1">
                  <span className="text-xs text-red-400 font-bold">✕ BEFORE</span>
                  <h4 className="text-sm md:text-base font-bold text-[#FAF7F2]">한 번 만들고 나면 손댈 수 없다</h4>
                  <p className="text-xs text-[#8F7D6E]">버그나 추가 기능이 생겨도 대처하지 못하고 방치</p>
                </div>
                <div className="space-y-1 md:border-l md:border-[#2B221B] md:pl-5">
                  <span className="text-xs text-[#C6A66B] font-bold">✓ AFTER</span>
                  <h4 className="text-sm md:text-base font-bold text-[#D6C6A8]">완성한 프로젝트를 다시 수정하고 확장한다</h4>
                  <p className="text-xs text-[#A8988B]">새로운 아이디어를 얼마든지 계속해서 업데이트하고 발전</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ───────────────────────────────────────────
            04. 수업 핵심 결과 (ONE DAY RESULT)
           ─────────────────────────────────────────── */}
        <section className="py-20 md:py-28 px-4 sm:px-6 max-w-5xl mx-auto border-b border-[#26201B]">
          <div className="text-center mb-14">
            <span className="text-xs md:text-sm font-semibold tracking-[0.2em] text-[#C6A66B] uppercase mb-3 block">
              ONE DAY RESULT
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-[#FAF7F2] mb-4 break-keep">
              하루 만에 <br />
              ‘내 미니앱’ 하나를 완성합니다
            </h2>
            <p className="text-sm sm:text-base text-[#9E8B7C] max-w-xl mx-auto break-keep">
              기획부터 빌드, 테스트, 출시 준비까지 실습 4단계로 온전한 결과물을 만듭니다.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* 카드 1 */}
            <div className="p-6 rounded-2xl bg-[#14100E] border border-[#2A211B] hover:border-[#C6A66B]/50 transition-colors flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-[#C6A66B] uppercase tracking-wider block mb-2">
                  01 · IDEA
                </span>
                <h3 className="text-base font-bold text-[#FAF7F2] mb-3 break-keep">
                  내 아이디어를 <br />
                  앱 구조로 바꾸기
                </h3>
                <p className="text-xs sm:text-sm text-[#9E8B7C] leading-relaxed break-keep">
                  막연한 아이디어를 실제로 구현 가능한 앱의 기능과 화면으로 정리합니다.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-[#221B16] text-[11px] text-[#C6A66B] font-medium">
                #기획구조화 #화면설계
              </div>
            </div>

            {/* 카드 2 */}
            <div className="p-6 rounded-2xl bg-[#14100E] border border-[#2A211B] hover:border-[#C6A66B]/50 transition-colors flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-[#C6A66B] uppercase tracking-wider block mb-2">
                  02 · BUILD
                </span>
                <h3 className="text-base font-bold text-[#FAF7F2] mb-3 break-keep">
                  AI와 함께 <br />
                  직접 앱 만들기
                </h3>
                <p className="text-xs sm:text-sm text-[#9E8B7C] leading-relaxed break-keep">
                  ChatGPT와 Codex를 활용해 복잡한 코드를 직접 작성하지 않고 앱을 제작합니다.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-[#221B16] text-[11px] text-[#C6A66B] font-medium">
                #ChatGPT #Codex제작
              </div>
            </div>

            {/* 카드 3 */}
            <div className="p-6 rounded-2xl bg-[#14100E] border border-[#2A211B] hover:border-[#C6A66B]/50 transition-colors flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-[#C6A66B] uppercase tracking-wider block mb-2">
                  03 · TEST
                </span>
                <h3 className="text-base font-bold text-[#FAF7F2] mb-3 break-keep">
                  직접 실행하고 <br />
                  테스트하기
                </h3>
                <p className="text-xs sm:text-sm text-[#9E8B7C] leading-relaxed break-keep">
                  브라우저와 모바일 환경에서 내 앱이 제대로 작동하는지 확인합니다.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-[#221B16] text-[11px] text-[#C6A66B] font-medium">
                #모바일테스트 #디버깅
              </div>
            </div>

            {/* 카드 4 */}
            <div className="p-6 rounded-2xl bg-[#14100E] border border-[#2A211B] hover:border-[#C6A66B]/50 transition-colors flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-[#C6A66B] uppercase tracking-wider block mb-2">
                  04 · LAUNCH
                </span>
                <h3 className="text-base font-bold text-[#FAF7F2] mb-3 break-keep">
                  앱인토스 등록 <br />
                  과정 경험하기
                </h3>
                <p className="text-xs sm:text-sm text-[#9E8B7C] leading-relaxed break-keep">
                  앱 정보, 로고, 스크린샷, 주요 기능 등을 준비해 실제 서비스 등록 과정을 경험합니다.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-[#221B16] text-[11px] text-[#C6A66B] font-medium">
                #.ait빌드 #콘솔심사준비
              </div>
            </div>
          </div>
        </section>

        {/* ───────────────────────────────────────────
            05. 이런 앱을 만들 수 있습니다
           ─────────────────────────────────────────── */}
        <section className="py-20 md:py-28 px-4 sm:px-6 bg-[#120E0C] border-b border-[#26201B]">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-14">
              <span className="text-xs md:text-sm font-semibold tracking-[0.2em] text-[#C6A66B] uppercase mb-3 block">
                APP EXAMPLES
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold text-[#FAF7F2] mb-4 break-keep">
                거창한 앱이 아니어도 좋습니다
              </h2>
              <div className="space-y-2 text-sm sm:text-base text-[#9E8B7C] max-w-xl mx-auto break-keep">
                <p>처음부터 복잡한 서비스를 만들 필요는 없습니다.</p>
                <p className="text-[#D6C6A8] font-semibold">
                  하나의 작은 기능이라도 사람이 실제로 사용할 수 있다면 이미 훌륭한 첫 번째 미니앱입니다.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* 예시 1 */}
              <div className="p-6 md:p-7 rounded-2xl bg-[#17120F] border border-[#2B221B] hover:border-[#C6A66B]/40 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-[#C6A66B]/15 text-[#D6C6A8] flex items-center justify-center text-lg mb-4">
                  🎯
                </div>
                <h3 className="text-lg font-bold text-[#FAF7F2] mb-2">추천형 앱</h3>
                <p className="text-xs sm:text-sm text-[#9E8B7C] leading-relaxed mb-4">
                  몇 가지 조건을 선택하면 나에게 맞는 최적의 결과를 추천해 주는 앱
                </p>
                <div className="p-3 rounded-xl bg-[#1E1713] border border-[#33271E] text-xs text-[#D6C6A8]">
                  <span className="text-[#8E6D38] font-bold block mb-1">실전 예시:</span>
                  메뉴 추천 / 콘텐츠 추천 / 여행 추천 / 아이디어 추천
                </div>
              </div>

              {/* 예시 2 */}
              <div className="p-6 md:p-7 rounded-2xl bg-[#17120F] border border-[#2B221B] hover:border-[#C6A66B]/40 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-[#C6A66B]/15 text-[#D6C6A8] flex items-center justify-center text-lg mb-4">
                  📋
                </div>
                <h3 className="text-lg font-bold text-[#FAF7F2] mb-2">진단·테스트형 앱</h3>
                <p className="text-xs sm:text-sm text-[#9E8B7C] leading-relaxed mb-4">
                  몇 가지 질문에 답하면 사용자 유형이나 맞춤 분석 결과를 보여주는 앱
                </p>
                <div className="p-3 rounded-xl bg-[#1E1713] border border-[#33271E] text-xs text-[#D6C6A8]">
                  <span className="text-[#8E6D38] font-bold block mb-1">실전 예시:</span>
                  성향 테스트 / 브랜드 진단 / 학습 유형 / 간단 심리 테스트
                </div>
              </div>

              {/* 예시 3 */}
              <div className="p-6 md:p-7 rounded-2xl bg-[#17120F] border border-[#2B221B] hover:border-[#C6A66B]/40 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-[#C6A66B]/15 text-[#D6C6A8] flex items-center justify-center text-lg mb-4">
                  🃏
                </div>
                <h3 className="text-lg font-bold text-[#FAF7F2] mb-2">카드·콘텐츠형 앱</h3>
                <p className="text-xs sm:text-sm text-[#9E8B7C] leading-relaxed mb-4">
                  선택하거나 버튼을 누르면 유익한 콘텐츠 또는 결과 카드를 보여주는 앱
                </p>
                <div className="p-3 rounded-xl bg-[#1E1713] border border-[#33271E] text-xs text-[#D6C6A8]">
                  <span className="text-[#8E6D38] font-bold block mb-1">실전 예시:</span>
                  오늘의 문장 / 타로 카드 / 명언 / 질문 카드
                </div>
              </div>

              {/* 예시 4 */}
              <div className="p-6 md:p-7 rounded-2xl bg-[#17120F] border border-[#2B221B] hover:border-[#C6A66B]/40 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-[#C6A66B]/15 text-[#D6C6A8] flex items-center justify-center text-lg mb-4">
                  📝
                </div>
                <h3 className="text-lg font-bold text-[#FAF7F2] mb-2">기록·도구형 앱</h3>
                <p className="text-xs sm:text-sm text-[#9E8B7C] leading-relaxed mb-4">
                  간단한 내용을 직접 입력하고 저장하거나 다시 확인하는 실용 도구 앱
                </p>
                <div className="p-3 rounded-xl bg-[#1E1713] border border-[#33271E] text-xs text-[#D6C6A8]">
                  <span className="text-[#8E6D38] font-bold block mb-1">실전 예시:</span>
                  하루 기록 / 체크리스트 / 아이디어 노트 / 작은 습관 도구
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ───────────────────────────────────────────
            06. 실제 제작 과정 (HOW IT WORKS) - STEP 01 ~ 08
           ─────────────────────────────────────────── */}
        <section className="py-20 md:py-28 px-4 sm:px-6 max-w-4xl mx-auto border-b border-[#26201B]">
          <div className="text-center mb-16">
            <span className="text-xs md:text-sm font-semibold tracking-[0.2em] text-[#C6A66B] uppercase mb-3 block">
              HOW IT WORKS
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-[#FAF7F2] mb-4 break-keep">
              아이디어에서 출시까지 <br />
              하나의 흐름으로 배웁니다
            </h2>
            <p className="text-sm sm:text-base text-[#9E8B7C] max-w-xl mx-auto break-keep">
              처음 접하는 분들도 길을 잃지 않도록 체계적인 8단계 완성 파이프라인을 제공합니다.
            </p>
          </div>

          <div className="space-y-4">
            {/* STEP 01 */}
            <div className="p-5 md:p-6 rounded-2xl bg-[#15110E] border border-[#2A211B] flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded bg-[#C6A66B]/20 text-[#D6C6A8] text-xs font-bold">
                    STEP 01
                  </span>
                  <h3 className="text-base md:text-lg font-bold text-[#FAF7F2]">
                    내 앱 아이디어 정하기
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#9E8B7C] pl-1">
                  누구를 위한 앱인지, 어떤 문제를 해결하는지, 사용자가 무엇을 하게 할지 명확히 정리합니다.
                </p>
              </div>
              <span className="text-xs font-semibold text-[#C6A66B] shrink-0 self-start md:self-center">
                아이디어 워크시트 작성
              </span>
            </div>

            {/* STEP 02 */}
            <div className="p-5 md:p-6 rounded-2xl bg-[#15110E] border border-[#2A211B] flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded bg-[#C6A66B]/20 text-[#D6C6A8] text-xs font-bold">
                    STEP 02
                  </span>
                  <h3 className="text-base md:text-lg font-bold text-[#FAF7F2]">
                    ChatGPT로 앱 기획하기
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#9E8B7C] pl-1">
                  아이디어를 화면과 기능의 구조로 바꿉니다. 앱 이름, 핵심 기능, 사용자 흐름을 체계적으로 도출합니다.
                </p>
              </div>
              <span className="text-xs font-semibold text-[#C6A66B] shrink-0 self-start md:self-center">
                기능 및 화면 구조화
              </span>
            </div>

            {/* STEP 03 */}
            <div className="p-5 md:p-6 rounded-2xl bg-[#15110E] border border-[#2A211B] flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded bg-[#C6A66B]/20 text-[#D6C6A8] text-xs font-bold">
                    STEP 03
                  </span>
                  <h3 className="text-base md:text-lg font-bold text-[#FAF7F2]">
                    Codex로 앱 제작하기
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#9E8B7C] pl-1">
                  완성된 기획을 기반으로 AI에게 앱 제작을 요청합니다. 코드를 직접 쓰지 않고 AI와 대화하며 완성합니다.
                </p>
              </div>
              <span className="text-xs font-semibold text-[#C6A66B] shrink-0 self-start md:self-center">
                바이브코딩 실습
              </span>
            </div>

            {/* STEP 04 */}
            <div className="p-5 md:p-6 rounded-2xl bg-[#15110E] border border-[#2A211B] flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded bg-[#C6A66B]/20 text-[#D6C6A8] text-xs font-bold">
                    STEP 04
                  </span>
                  <h3 className="text-base md:text-lg font-bold text-[#FAF7F2]">
                    실행하고 수정하기
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#9E8B7C] pl-1">
                  브라우저에서 앱을 실행하고 버튼, 화면, 결과를 확인합니다. 마음에 들지 않으면 AI에게 즉시 수정을 요청합니다.
                </p>
              </div>
              <span className="text-xs font-semibold text-[#C6A66B] shrink-0 self-start md:self-center">
                실시간 프리뷰 & 피드백
              </span>
            </div>

            {/* STEP 05 */}
            <div className="p-5 md:p-6 rounded-2xl bg-[#15110E] border border-[#2A211B] flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded bg-[#C6A66B]/20 text-[#D6C6A8] text-xs font-bold">
                    STEP 05
                  </span>
                  <h3 className="text-base md:text-lg font-bold text-[#FAF7F2]">
                    앱인토스용으로 빌드하기
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#9E8B7C] pl-1">
                  앱인토스 환경에 맞게 설정을 마치고, 등록에 필요한 최종 <code className="text-[#C6A66B]">.ait</code> 빌드 파일을 생성합니다.
                </p>
              </div>
              <span className="text-xs font-semibold text-[#C6A66B] shrink-0 self-start md:self-center">
                .ait 파일 추출
              </span>
            </div>

            {/* STEP 06 */}
            <div className="p-5 md:p-6 rounded-2xl bg-[#15110E] border border-[#2A211B] flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded bg-[#C6A66B]/20 text-[#D6C6A8] text-xs font-bold">
                    STEP 06
                  </span>
                  <h3 className="text-base md:text-lg font-bold text-[#FAF7F2]">
                    실제 모바일 환경 테스트
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#9E8B7C] pl-1">
                  PC 브라우저에서 끝내지 않고 실제 모바일 앱 환경에서도 터치감과 주요 기능이 온전히 작동하는지 검증합니다.
                </p>
              </div>
              <span className="text-xs font-semibold text-[#C6A66B] shrink-0 self-start md:self-center">
                모바일 환경 최종 점검
              </span>
            </div>

            {/* STEP 07 */}
            <div className="p-5 md:p-6 rounded-2xl bg-[#15110E] border border-[#2A211B] flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded bg-[#C6A66B]/20 text-[#D6C6A8] text-xs font-bold">
                    STEP 07
                  </span>
                  <h3 className="text-base md:text-lg font-bold text-[#FAF7F2]">
                    등록 자료 준비하기
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#9E8B7C] pl-1">
                  앱 이름, 상세 설명, 출시 노트, 검색 키워드, 주요 기능, 앱 로고, 스크린샷 등 등록에 필요한 모든 자료를 완성합니다.
                </p>
              </div>
              <span className="text-xs font-semibold text-[#C6A66B] shrink-0 self-start md:self-center">
                메타데이터 & 이미지 규격
              </span>
            </div>

            {/* STEP 08 */}
            <div className="p-5 md:p-6 rounded-2xl bg-[#15110E] border border-[#2A211B] flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded bg-[#C6A66B]/20 text-[#D6C6A8] text-xs font-bold">
                    STEP 08
                  </span>
                  <h3 className="text-base md:text-lg font-bold text-[#FAF7F2]">
                    앱인토스 등록 과정 경험하기
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#9E8B7C] pl-1">
                  완성한 앱을 앱인토스 콘솔에 등록하고 심사 요청까지의 실제 서비스 릴리즈 흐름을 확실하게 익힙니다.
                </p>
              </div>
              <span className="text-xs font-semibold text-[#C6A66B] shrink-0 self-start md:self-center">
                콘솔 심사 접수 실전
              </span>
            </div>
          </div>
        </section>

        {/* ───────────────────────────────────────────
            07. 단순 코딩수업이 아닙니다
           ─────────────────────────────────────────── */}
        <section className="py-20 md:py-28 px-4 sm:px-6 bg-[#120E0C] border-b border-[#26201B]">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-xs md:text-sm font-semibold tracking-[0.2em] text-[#C6A66B] uppercase mb-3 block">
              NOT JUST CODING
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-[#FAF7F2] mb-6 break-keep">
              이 수업의 핵심은 <br />
              ‘코딩 공부’가 아닙니다
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-[#9E8B7C] max-w-2xl mx-auto leading-relaxed break-keep mb-10">
              <p>코딩 문법을 달달 외우는 수업이 아닙니다.</p>
              <p>
                내가 만들고 싶은 서비스를 논리적으로 설명하고, <br />
                AI와 협업해 실제 손에 잡히는 결과물을 만들어내는 방법을 배웁니다.
              </p>
            </div>

            <div className="p-8 md:p-10 rounded-3xl bg-gradient-to-b from-[#1C1510] to-[#140F0D] border border-[#4A3728] max-w-2xl mx-auto shadow-2xl">
              <span className="text-xs font-bold text-[#C6A66B] uppercase tracking-widest block mb-2">
                CORE PHILOSOPHY
              </span>
              <p className="text-lg sm:text-2xl font-extrabold text-[#FAF7F2] leading-snug break-keep">
                “코딩 실력보다 <br />
                <span className="text-[#D6C6A8]">아이디어를 구조화하고</span> <br />
                <span className="text-[#C6A66B]">AI에게 정확하게 요청하는 능력</span>입니다.”
              </p>
            </div>
          </div>
        </section>

        {/* ───────────────────────────────────────────
            08. 등록까지 쉽게 만드는 제공 자료 (CLASS KIT)
           ─────────────────────────────────────────── */}
        <section className="py-20 md:py-28 px-4 sm:px-6 max-w-5xl mx-auto border-b border-[#26201B]">
          <div className="text-center mb-16">
            <span className="text-xs md:text-sm font-semibold tracking-[0.2em] text-[#C6A66B] uppercase mb-3 block">
              CLASS KIT
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-[#FAF7F2] mb-4 break-keep">
              혼자 다시 만들 수 있도록 <br />
              실전 템플릿을 제공합니다
            </h2>
            <p className="text-sm sm:text-base text-[#9E8B7C] max-w-xl mx-auto break-keep">
              수업이 끝나도 언제든 두 번째, 세 번째 미니앱을 혼자 뚝딱 만들 수 있는 풀 패키지 자료를 드립니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
            {/* 자료 1 */}
            <div className="p-6 rounded-2xl bg-[#15110E] border border-[#2E241D] flex flex-col justify-between">
              <div>
                <span className="text-xs text-[#C6A66B] font-bold block mb-1">01 · 질문지</span>
                <h3 className="text-base font-bold text-[#FAF7F2] mb-2">앱 기획 워크시트</h3>
                <p className="text-xs text-[#8F7D6E] leading-relaxed break-keep">
                  내 아이디어를 막힘없이 앱 구조로 바꾸는 실전 기획 질문지
                </p>
              </div>
            </div>

            {/* 자료 2 */}
            <div className="p-6 rounded-2xl bg-[#15110E] border border-[#2E241D] flex flex-col justify-between">
              <div>
                <span className="text-xs text-[#C6A66B] font-bold block mb-1">02 · 전용 프롬프트</span>
                <h3 className="text-base font-bold text-[#FAF7F2] mb-2">Codex 제작 프롬프트</h3>
                <p className="text-xs text-[#8F7D6E] leading-relaxed break-keep">
                  AI에게 앱 제작을 요청할 때 사용하는 검증된 명령 기본 틀
                </p>
              </div>
            </div>

            {/* 자료 3 */}
            <div className="p-6 rounded-2xl bg-[#15110E] border border-[#2E241D] flex flex-col justify-between">
              <div>
                <span className="text-xs text-[#C6A66B] font-bold block mb-1">03 · 베이스 코드</span>
                <h3 className="text-base font-bold text-[#FAF7F2] mb-2">앱인토스 스타터 템플릿</h3>
                <p className="text-xs text-[#8F7D6E] leading-relaxed break-keep">
                  새로운 앱 제작 시 반복 사용할 수 있는 기본 프로젝트 구조
                </p>
              </div>
            </div>

            {/* 자료 4 */}
            <div className="p-6 rounded-2xl bg-[#15110E] border border-[#2E241D] flex flex-col justify-between">
              <div>
                <span className="text-xs text-[#C6A66B] font-bold block mb-1">04 · 등록 문구 AI</span>
                <h3 className="text-base font-bold text-[#FAF7F2] mb-2">등록 문구 프롬프트</h3>
                <p className="text-xs text-[#8F7D6E] leading-relaxed break-keep">
                  앱 설명, 출시 노트, 검색 키워드, 주요 기능을 정리하는 AI 프롬프트
                </p>
              </div>
            </div>

            {/* 자료 5 */}
            <div className="p-6 rounded-2xl bg-[#15110E] border border-[#2E241D] flex flex-col justify-between">
              <div>
                <span className="text-xs text-[#C6A66B] font-bold block mb-1">05 · 디자인 규격</span>
                <h3 className="text-base font-bold text-[#FAF7F2] mb-2">Canva 이미지 템플릿</h3>
                <p className="text-xs text-[#8F7D6E] leading-relaxed break-keep">
                  앱 로고와 등록용 스크린샷 제작을 위한 공식 규격 템플릿
                </p>
              </div>
            </div>

            {/* 자료 6 & 7 (결합) */}
            <div className="p-6 rounded-2xl bg-[#15110E] border border-[#2E241D] flex flex-col justify-between">
              <div>
                <span className="text-xs text-[#C6A66B] font-bold block mb-1">06 & 07 · 검증 시트</span>
                <h3 className="text-base font-bold text-[#FAF7F2] mb-2">테스트 & 출시 체크리스트</h3>
                <p className="text-xs text-[#8F7D6E] leading-relaxed break-keep">
                  브라우저 → 빌드 → 모바일 환경 검증 및 등록 전 필수 점검 항목 체크
                </p>
              </div>
            </div>
          </div>

          <p className="text-center text-xs text-[#7A6A5E]">
            ※ 템플릿과 세부 자료는 수업 시점의 최신 앱인토스 환경에 맞춰 제공됩니다.
          </p>
        </section>

        {/* ───────────────────────────────────────────
            09. 실제 출시 경험에서 만든 수업
           ─────────────────────────────────────────── */}
        <section className="py-20 md:py-28 px-4 sm:px-6 bg-[#120E0C] border-b border-[#26201B]">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-14">
              <span className="text-xs md:text-sm font-semibold tracking-[0.2em] text-[#C6A66B] uppercase mb-3 block">
                REAL EXPERIENCE
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold text-[#FAF7F2] mb-5 leading-tight break-keep">
                검색해서 만든 커리큘럼이 아니라 <br />
                직접 만들고 출시하며 정리한 과정입니다
              </h2>
              <p className="text-sm sm:text-base text-[#9E8B7C] max-w-2xl mx-auto leading-relaxed break-keep">
                앱을 만드는 것과 실제로 플랫폼에 등록하는 것은 조금 다릅니다. <br />
                직접 앱을 제작하고 등록하면서 겪은 모든 디테일을 압축했습니다.
              </p>
            </div>

            {/* 직접 확인한 8가지 실전 포인트 뱃지 그리드 */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
              <div className="p-3.5 rounded-xl bg-[#181310] border border-[#2C221B] text-center">
                <span className="text-xs text-[#C6A66B] font-semibold block mb-1">CHECK 01</span>
                <strong className="text-xs sm:text-sm text-[#FAF7F2]">앱 프로젝트 구조</strong>
              </div>
              <div className="p-3.5 rounded-xl bg-[#181310] border border-[#2C221B] text-center">
                <span className="text-xs text-[#C6A66B] font-semibold block mb-1">CHECK 02</span>
                <strong className="text-xs sm:text-sm text-[#FAF7F2]">appName 설정</strong>
              </div>
              <div className="p-3.5 rounded-xl bg-[#181310] border border-[#2C221B] text-center">
                <span className="text-xs text-[#C6A66B] font-semibold block mb-1">CHECK 03</span>
                <strong className="text-xs sm:text-sm text-[#FAF7F2]">빌드 파일(.ait) 생성</strong>
              </div>
              <div className="p-3.5 rounded-xl bg-[#181310] border border-[#2C221B] text-center">
                <span className="text-xs text-[#C6A66B] font-semibold block mb-1">CHECK 04</span>
                <strong className="text-xs sm:text-sm text-[#FAF7F2]">모바일 테스트</strong>
              </div>
              <div className="p-3.5 rounded-xl bg-[#181310] border border-[#2C221B] text-center">
                <span className="text-xs text-[#C6A66B] font-semibold block mb-1">CHECK 05</span>
                <strong className="text-xs sm:text-sm text-[#FAF7F2]">로고·스크린샷 규격</strong>
              </div>
              <div className="p-3.5 rounded-xl bg-[#181310] border border-[#2C221B] text-center">
                <span className="text-xs text-[#C6A66B] font-semibold block mb-1">CHECK 06</span>
                <strong className="text-xs sm:text-sm text-[#FAF7F2]">주요 기능 등록</strong>
              </div>
              <div className="p-3.5 rounded-xl bg-[#181310] border border-[#2C221B] text-center">
                <span className="text-xs text-[#C6A66B] font-semibold block mb-1">CHECK 07</span>
                <strong className="text-xs sm:text-sm text-[#FAF7F2]">검색 키워드 세팅</strong>
              </div>
              <div className="p-3.5 rounded-xl bg-[#181310] border border-[#2C221B] text-center">
                <span className="text-xs text-[#C6A66B] font-semibold block mb-1">CHECK 08</span>
                <strong className="text-xs sm:text-sm text-[#FAF7F2]">심사 요청 노하우</strong>
              </div>
            </div>

            <div className="p-6 md:p-8 rounded-2xl bg-[#17120F] border border-[#3E3024] text-center">
              <p className="text-sm sm:text-base text-[#D6C6A8] leading-relaxed break-keep font-medium">
                “처음 하는 사람이 어디에서 막히는지까지 세심하게 고려해, 제작부터 등록까지의 전 과정을 단계적으로 안내합니다.”
              </p>
            </div>
          </div>
        </section>

        {/* ───────────────────────────────────────────
            10. 완벽한 앱을 만드는 것이 목표가 아닙니다
           ─────────────────────────────────────────── */}
        <section className="py-20 md:py-28 px-4 sm:px-6 max-w-4xl mx-auto border-b border-[#26201B]">
          <div className="text-center mb-12">
            <span className="text-xs md:text-sm font-semibold tracking-[0.2em] text-[#C6A66B] uppercase mb-3 block">
              FIRST RELEASE
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-[#FAF7F2] mb-4 break-keep">
              첫 번째 버전을 세상에 내놓는 것
            </h2>
            <div className="space-y-3 text-sm sm:text-base text-[#9E8B7C] max-w-xl mx-auto leading-relaxed break-keep">
              <p>처음 만든 앱이 완벽할 필요는 없습니다.</p>
              <p>
                작은 기능으로 먼저 출시하고, 사용하면서 수정하고, <br />
                새로운 기능을 추가하고, 다시 새로운 버전을 출시할 수 있습니다.
              </p>
            </div>
          </div>

          {/* 순환 프로세스 배너 */}
          <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-r from-[#181310] via-[#241B16] to-[#181310] border border-[#443325] text-center mb-8 shadow-xl">
            <span className="text-xs text-[#C6A66B] font-bold tracking-widest block mb-2 uppercase">
              GROWTH CYCLE
            </span>
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-base sm:text-xl font-extrabold text-[#FAF7F2]">
              <span>1차 출시</span>
              <span className="text-[#C6A66B]">→</span>
              <span>실제 사용</span>
              <span className="text-[#C6A66B]">→</span>
              <span>피드백 개선</span>
              <span className="text-[#C6A66B]">→</span>
              <span className="text-[#D6C6A8]">버전 업데이트</span>
            </div>
          </div>

          <p className="text-center text-sm md:text-base text-[#C8BCB0] font-semibold break-keep">
            앱은 한 번 만들고 끝나는 일회성 결과물이 아니라, 계속 성장시킬 수 있는 소중한 디지털 자산입니다.
          </p>
        </section>

        {/* ───────────────────────────────────────────
            11. 이런 분께 추천합니다
           ─────────────────────────────────────────── */}
        <section className="py-20 md:py-28 px-4 sm:px-6 bg-[#120E0C] border-b border-[#26201B]">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-14">
              <span className="text-xs md:text-sm font-semibold tracking-[0.2em] text-[#C6A66B] uppercase mb-3 block">
                RECOMMENDED FOR
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold text-[#FAF7F2] mb-4 break-keep">
                이런 분이라면 함께하세요
              </h2>
              <p className="text-sm sm:text-base text-[#9E8B7C] max-w-xl mx-auto break-keep">
                혼자서는 막막했던 앱 제작을 가장 친절하고 확실한 가이드로 해결해 드립니다.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-[#17120F] border border-[#2B221B] flex items-start gap-3">
                <span className="text-[#C6A66B] font-bold text-lg leading-none mt-0.5">✔</span>
                <p className="text-sm text-[#E5D7C5] leading-relaxed break-keep">
                  코딩은 모르지만 나만의 앱을 꼭 만들어보고 싶은 분
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#17120F] border border-[#2B221B] flex items-start gap-3">
                <span className="text-[#C6A66B] font-bold text-lg leading-none mt-0.5">✔</span>
                <p className="text-sm text-[#E5D7C5] leading-relaxed break-keep">
                  ChatGPT를 단순 질문이 아니라 실제 제작에 활용하고 싶은 분
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#17120F] border border-[#2B221B] flex items-start gap-3">
                <span className="text-[#C6A66B] font-bold text-lg leading-none mt-0.5">✔</span>
                <p className="text-sm text-[#E5D7C5] leading-relaxed break-keep">
                  바이브코딩을 처음으로 직접 경험해보고 싶은 분
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#17120F] border border-[#2B221B] flex items-start gap-3">
                <span className="text-[#C6A66B] font-bold text-lg leading-none mt-0.5">✔</span>
                <p className="text-sm text-[#E5D7C5] leading-relaxed break-keep">
                  자신의 아이디어를 실제 디지털 서비스로 구현하고 싶은 분
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#17120F] border border-[#2B221B] flex items-start gap-3">
                <span className="text-[#C6A66B] font-bold text-lg leading-none mt-0.5">✔</span>
                <p className="text-sm text-[#E5D7C5] leading-relaxed break-keep">
                  1인 사업이나 개인 브랜드에 활용할 작은 실용 도구가 필요한 분
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#17120F] border border-[#2B221B] flex items-start gap-3">
                <span className="text-[#C6A66B] font-bold text-lg leading-none mt-0.5">✔</span>
                <p className="text-sm text-[#E5D7C5] leading-relaxed break-keep">
                  테스트·추천·콘텐츠·기록형 서비스를 만들어보고 싶은 분
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#17120F] border border-[#2B221B] flex items-start gap-3">
                <span className="text-[#C6A66B] font-bold text-lg leading-none mt-0.5">✔</span>
                <p className="text-sm text-[#E5D7C5] leading-relaxed break-keep">
                  앱 제작부터 실제 출시 과정까지 한 번 시원하게 경험해보고 싶은 분
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#17120F] border border-[#2B221B] flex items-start gap-3">
                <span className="text-[#C6A66B] font-bold text-lg leading-none mt-0.5">✔</span>
                <p className="text-sm text-[#E5D7C5] leading-relaxed break-keep">
                  향후 광고·상품·콘텐츠 등으로 서비스를 확장해보고 싶은 분
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ───────────────────────────────────────────
            12. 수업을 마치면 (YOU WILL HAVE)
           ─────────────────────────────────────────── */}
        <section className="py-20 md:py-28 px-4 sm:px-6 max-w-4xl mx-auto border-b border-[#26201B]">
          <div className="text-center mb-14">
            <span className="text-xs md:text-sm font-semibold tracking-[0.2em] text-[#C6A66B] uppercase mb-3 block">
              YOU WILL HAVE
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-[#FAF7F2] mb-4 break-keep">
              수업이 끝나면 <br />
              ‘아이디어’가 아니라 결과물이 남습니다
            </h2>
            <p className="text-sm sm:text-base text-[#9E8B7C] max-w-xl mx-auto break-keep">
              단순 지식 전달이 아닌, 내 손에 직접 쥐어지는 8가지 명확한 결과물을 확인하세요.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            <div className="p-4 rounded-xl bg-[#15110E] border border-[#2E241E] flex items-center gap-3">
              <span className="w-7 h-7 rounded-lg bg-[#C6A66B]/20 text-[#D6C6A8] flex items-center justify-center text-sm font-bold shrink-0">
                ✔
              </span>
              <span className="text-sm font-semibold text-[#FAF7F2]">나만의 미니앱 프로젝트</span>
            </div>

            <div className="p-4 rounded-xl bg-[#15110E] border border-[#2E241E] flex items-center gap-3">
              <span className="w-7 h-7 rounded-lg bg-[#C6A66B]/20 text-[#D6C6A8] flex items-center justify-center text-sm font-bold shrink-0">
                ✔
              </span>
              <span className="text-sm font-semibold text-[#FAF7F2]">실제 실행 가능한 앱</span>
            </div>

            <div className="p-4 rounded-xl bg-[#15110E] border border-[#2E241E] flex items-center gap-3">
              <span className="w-7 h-7 rounded-lg bg-[#C6A66B]/20 text-[#D6C6A8] flex items-center justify-center text-sm font-bold shrink-0">
                ✔
              </span>
              <span className="text-sm font-semibold text-[#FAF7F2]">앱인토스용 빌드 파일 (.ait)</span>
            </div>

            <div className="p-4 rounded-xl bg-[#15110E] border border-[#2E241E] flex items-center gap-3">
              <span className="w-7 h-7 rounded-lg bg-[#C6A66B]/20 text-[#D6C6A8] flex items-center justify-center text-sm font-bold shrink-0">
                ✔
              </span>
              <span className="text-sm font-semibold text-[#FAF7F2]">앱 소개 및 등록 문구</span>
            </div>

            <div className="p-4 rounded-xl bg-[#15110E] border border-[#2E241E] flex items-center gap-3">
              <span className="w-7 h-7 rounded-lg bg-[#C6A66B]/20 text-[#D6C6A8] flex items-center justify-center text-sm font-bold shrink-0">
                ✔
              </span>
              <span className="text-sm font-semibold text-[#FAF7F2]">앱 로고 및 스크린샷 이미지</span>
            </div>

            <div className="p-4 rounded-xl bg-[#15110E] border border-[#2E241E] flex items-center gap-3">
              <span className="w-7 h-7 rounded-lg bg-[#C6A66B]/20 text-[#D6C6A8] flex items-center justify-center text-sm font-bold shrink-0">
                ✔
              </span>
              <span className="text-sm font-semibold text-[#FAF7F2]">주요 기능 및 검색 키워드 세팅</span>
            </div>

            <div className="p-4 rounded-xl bg-[#15110E] border border-[#2E241E] flex items-center gap-3">
              <span className="w-7 h-7 rounded-lg bg-[#C6A66B]/20 text-[#D6C6A8] flex items-center justify-center text-sm font-bold shrink-0">
                ✔
              </span>
              <span className="text-sm font-semibold text-[#FAF7F2]">앱인토스 등록 실전 경험</span>
            </div>

            <div className="p-4 rounded-xl bg-[#15110E] border border-[#2E241E] flex items-center gap-3">
              <span className="w-7 h-7 rounded-lg bg-[#C6A66B]/20 text-[#D6C6A8] flex items-center justify-center text-sm font-bold shrink-0">
                ✔
              </span>
              <span className="text-sm font-semibold text-[#FAF7F2]">혼자 다시 제작할 수 있는 프롬프트와 템플릿</span>
            </div>
          </div>

          <div className="p-6 md:p-8 rounded-2xl bg-[#1C1510] border border-[#3E3024] text-center shadow-lg">
            <p className="text-base sm:text-lg font-bold text-[#D6C6A8] leading-relaxed break-keep">
              “오늘 배운 기술보다 더 중요한 것은 <br className="sm:hidden" />
              ‘나도 서비스를 만들 수 있다’는 경험입니다.”
            </p>
          </div>
        </section>

        {/* ───────────────────────────────────────────
            13. 향후 확장
           ─────────────────────────────────────────── */}
        <section className="py-20 md:py-28 px-4 sm:px-6 bg-[#120E0C] border-b border-[#26201B]">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-14">
              <span className="text-xs md:text-sm font-semibold tracking-[0.2em] text-[#C6A66B] uppercase mb-3 block">
                BUSINESS EXPANSION
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold text-[#FAF7F2] mb-4 break-keep">
                하나의 작은 앱에서 <br />
                나만의 서비스로 확장할 수 있습니다
              </h2>
              <p className="text-sm sm:text-base text-[#9E8B7C] max-w-xl mx-auto break-keep">
                앱은 단독으로 끝나지 않고 콘텐츠, 브랜드, 비즈니스와 유기적으로 연결됩니다.
              </p>
            </div>

            {/* 연결 흐름 다이어그램 */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#181310] border border-[#2E241E] mb-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-center">
                <div className="p-4 rounded-xl bg-[#231A15] border border-[#3E2F25] w-full md:w-auto flex-1">
                  <span className="text-[11px] text-[#A8988B] block mb-1">01단계</span>
                  <strong className="text-sm text-[#FAF7F2]">무료 콘텐츠</strong>
                </div>
                <span className="text-[#C6A66B] font-bold text-lg rotate-90 md:rotate-0">↓</span>
                <div className="p-4 rounded-xl bg-[#231A15] border border-[#C6A66B]/40 w-full md:w-auto flex-1 shadow-sm">
                  <span className="text-[11px] text-[#C6A66B] block mb-1">핵심 매개체</span>
                  <strong className="text-sm text-[#D6C6A8]">미니앱</strong>
                </div>
                <span className="text-[#C6A66B] font-bold text-lg rotate-90 md:rotate-0">↓</span>
                <div className="p-4 rounded-xl bg-[#231A15] border border-[#3E2F25] w-full md:w-auto flex-1">
                  <span className="text-[11px] text-[#A8988B] block mb-1">02단계</span>
                  <strong className="text-sm text-[#FAF7F2]">사용자 유입</strong>
                </div>
                <span className="text-[#C6A66B] font-bold text-lg rotate-90 md:rotate-0">↓</span>
                <div className="p-4 rounded-xl bg-[#231A15] border border-[#3E2F25] w-full md:w-auto flex-1">
                  <span className="text-[11px] text-[#A8988B] block mb-1">03단계</span>
                  <strong className="text-sm text-[#FAF7F2]">콘텐츠·서비스 연결</strong>
                </div>
                <span className="text-[#C6A66B] font-bold text-lg rotate-90 md:rotate-0">↓</span>
                <div className="p-4 rounded-xl bg-[#231A15] border border-[#3E2F25] w-full md:w-auto flex-1">
                  <span className="text-[11px] text-[#8E6D38] block mb-1">최종 목표</span>
                  <strong className="text-xs text-[#FAF7F2]">광고 / 디지털 상품 / 강의 / 브랜드</strong>
                </div>
              </div>
            </div>

            <div className="space-y-3 text-sm text-[#9E8B7C] leading-relaxed break-keep text-center max-w-2xl mx-auto">
              <p>
                처음에는 작은 앱 하나로 시작하지만, 이후에는 기능을 추가하고 사용자 반응을 확인하며 나만의 서비스로 발전시킬 수 있습니다.
              </p>
              <p className="text-xs text-[#7A6A5E] pt-2">
                ※ 광고 및 수익화 기능은 플랫폼 정책과 서비스 유형에 따라 적용 방식이 달라질 수 있습니다.
              </p>
            </div>
          </div>
        </section>

        {/* ───────────────────────────────────────────
            14. CLASS INFO (클래스 안내)
           ─────────────────────────────────────────── */}
        <section className="py-20 md:py-28 px-4 sm:px-6 max-w-4xl mx-auto border-b border-[#26201B]">
          <div className="text-center mb-12">
            <span className="text-xs md:text-sm font-semibold tracking-[0.2em] text-[#C6A66B] uppercase mb-2.5 block">
              CLASS INFO
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#FAF7F2] mb-3 break-keep">
              클래스 안내
            </h2>
            <p className="text-xs sm:text-sm text-[#9E8B7C] max-w-lg mx-auto break-keep">
              누구나 참여하실 수 있는 실전 실습 환경과 사전 준비 사항입니다.
            </p>
          </div>

          <div className="rounded-3xl bg-[#16120F] border border-[#2C221B] p-6 md:p-8 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pb-6 border-b border-[#241B15]">
              <div className="text-xs text-[#8F7D6E]">강의명</div>
              <div className="sm:col-span-2 text-sm sm:text-base font-bold text-[#FAF7F2]">
                AI로 나만의 앱인토스 미니앱 만들기
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pb-6 border-b border-[#241B15]">
              <div className="text-xs text-[#8F7D6E]">부제</div>
              <div className="sm:col-span-2 text-sm sm:text-base font-medium text-[#D6C6A8]">
                ChatGPT × Codex로 기획부터 실제 출시까지
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pb-6 border-b border-[#241B15]">
              <div className="text-xs text-[#8F7D6E]">진행 방식</div>
              <div className="sm:col-span-2 text-sm sm:text-base font-medium text-[#FAF7F2]">
                실시간 온라인 실습형 원데이 클래스
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pb-6 border-b border-[#241B15]">
              <div className="text-xs text-[#8F7D6E]">수강 난이도</div>
              <div className="sm:col-span-2 text-sm sm:text-base font-bold text-[#C6A66B]">
                왕초보 가능 (코딩 사전 지식 전혀 불필요)
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="text-xs text-[#8F7D6E]">사전 준비</div>
              <div className="sm:col-span-2 space-y-2">
                <ul className="text-xs sm:text-sm text-[#A8988B] space-y-1.5 list-disc pl-4">
                  <li>ChatGPT 사용 환경</li>
                  <li>Codex 사용 환경</li>
                  <li>앱인토스 계정 및 사전 준비 사항</li>
                  <li>Chrome 브라우저 구동 PC (노트북/데스크톱)</li>
                  <li>Canva 사용 환경 (로고/스크린샷 디자인용)</li>
                </ul>
                <p className="text-[11px] text-[#7A6A5E] pt-2">
                  ※ 구체적인 사전 설치 및 계정 준비 사항은 수강 전 별도로 상세하게 안내해 드립니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ───────────────────────────────────────────
            15. FAQ (자주 묻는 질문) - 자명스쿨 시그니처 웜베이지 배경
           ─────────────────────────────────────────── */}
        <section className="w-full bg-[#F9F6F0] text-[#2E2723] py-20 md:py-28 px-4 sm:px-6 border-b border-[#E8DFD3]">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-xs md:text-sm font-bold tracking-[0.2em] text-[#8E6D38] uppercase mb-3 block">
                FREQUENTLY ASKED QUESTIONS
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#2E2723] mb-4 break-keep">
                자주 묻는 질문
              </h2>
              <p className="text-sm sm:text-base text-[#6E5A4D] max-w-xl mx-auto break-keep">
                수강 전 수강생분들이 가장 많이 질문해 주시는 내용을 모았습니다.
              </p>
            </div>

            <div className="space-y-4">
              {/* FAQ 1 */}
              <div className="p-6 md:p-7 rounded-2xl bg-white border border-[#E8DFD3] shadow-xs">
                <h4 className="text-base sm:text-lg font-bold text-[#2E2723] mb-2 flex items-start gap-2">
                  <span className="text-[#8E6D38]">Q.</span>
                  <span>코딩을 전혀 몰라도 가능한가요?</span>
                </h4>
                <p className="text-xs sm:text-sm text-[#5C4C40] leading-relaxed break-keep pl-6">
                  네. 이 수업은 코딩 문법을 배우는 개발자 과정이 아닙니다. ChatGPT와 Codex에게 필요한 기능을 요청하면서 앱을 제작하는 AI 활용 실습 수업입니다.
                </p>
              </div>

              {/* FAQ 2 */}
              <div className="p-6 md:p-7 rounded-2xl bg-white border border-[#E8DFD3] shadow-xs">
                <h4 className="text-base sm:text-lg font-bold text-[#2E2723] mb-2 flex items-start gap-2">
                  <span className="text-[#8E6D38]">Q.</span>
                  <span>수강생마다 다른 앱을 만들어도 되나요?</span>
                </h4>
                <p className="text-xs sm:text-sm text-[#5C4C40] leading-relaxed break-keep pl-6">
                  네. 공통된 제작 구조와 프롬프트를 사용하지만 각자 자신의 아이디어로 앱을 제작합니다. 추천형, 테스트형, 카드형, 기록형 등 초보자가 구현하기 좋은 범위 안에서 진행합니다.
                </p>
              </div>

              {/* FAQ 3 */}
              <div className="p-6 md:p-7 rounded-2xl bg-white border border-[#E8DFD3] shadow-xs">
                <h4 className="text-base sm:text-lg font-bold text-[#2E2723] mb-2 flex items-start gap-2">
                  <span className="text-[#8E6D38]">Q.</span>
                  <span>수업에서 만든 앱을 실제로 출시할 수 있나요?</span>
                </h4>
                <p className="text-xs sm:text-sm text-[#5C4C40] leading-relaxed break-keep pl-6">
                  앱인토스 등록 절차까지 안내합니다. 다만 최종 심사 및 승인은 플랫폼의 심사 기준에 따라 결정되므로 승인을 보장하지는 않습니다.
                </p>
              </div>

              {/* FAQ 4 */}
              <div className="p-6 md:p-7 rounded-2xl bg-white border border-[#E8DFD3] shadow-xs">
                <h4 className="text-base sm:text-lg font-bold text-[#2E2723] mb-2 flex items-start gap-2">
                  <span className="text-[#8E6D38]">Q.</span>
                  <span>수업 시간 안에 앱을 완성할 수 있나요?</span>
                </h4>
                <p className="text-xs sm:text-sm text-[#5C4C40] leading-relaxed break-keep pl-6">
                  복잡한 대형 서비스가 아니라 원데이에서 구현 가능한 핵심 기능 중심의 미니앱을 제작합니다. 처음에는 작은 버전을 완성하는 것을 목표로 합니다.
                </p>
              </div>

              {/* FAQ 5 */}
              <div className="p-6 md:p-7 rounded-2xl bg-white border border-[#E8DFD3] shadow-xs">
                <h4 className="text-base sm:text-lg font-bold text-[#2E2723] mb-2 flex items-start gap-2">
                  <span className="text-[#8E6D38]">Q.</span>
                  <span>수업 후에도 수정할 수 있나요?</span>
                </h4>
                <p className="text-xs sm:text-sm text-[#5C4C40] leading-relaxed break-keep pl-6">
                  네. 원본 프로젝트를 수정하고 다시 빌드하여 새로운 버전으로 얼마든지 업데이트할 수 있습니다.
                </p>
              </div>

              {/* FAQ 6 */}
              <div className="p-6 md:p-7 rounded-2xl bg-white border border-[#E8DFD3] shadow-xs">
                <h4 className="text-base sm:text-lg font-bold text-[#2E2723] mb-2 flex items-start gap-2">
                  <span className="text-[#8E6D38]">Q.</span>
                  <span>어떤 아이디어를 준비해야 하나요?</span>
                </h4>
                <p className="text-xs sm:text-sm text-[#5C4C40] leading-relaxed break-keep pl-6">
                  수업 전 간단한 아이디어 워크시트를 제공합니다. 만들어보고 싶은 앱 아이디어를 2~3개 정도 생각해오면 수업 시간에 구현 가능한 형태로 함께 정리합니다.
                </p>
              </div>

              {/* FAQ 7 */}
              <div className="p-6 md:p-7 rounded-2xl bg-white border border-[#E8DFD3] shadow-xs">
                <h4 className="text-base sm:text-lg font-bold text-[#2E2723] mb-2 flex items-start gap-2">
                  <span className="text-[#8E6D38]">Q.</span>
                  <span>로고와 스크린샷도 만들어야 하나요?</span>
                </h4>
                <p className="text-xs sm:text-sm text-[#5C4C40] leading-relaxed break-keep pl-6">
                  실제 등록에 필요한 이미지 제작 방법과 규격도 함께 안내합니다. Canva에서 바로 활용할 수 있는 기본 제작 가이드를 제공합니다.
                </p>
              </div>

              {/* FAQ 8 */}
              <div className="p-6 md:p-7 rounded-2xl bg-white border border-[#E8DFD3] shadow-xs">
                <h4 className="text-base sm:text-lg font-bold text-[#2E2723] mb-2 flex items-start gap-2">
                  <span className="text-[#8E6D38]">Q.</span>
                  <span>광고나 수익화도 배우나요?</span>
                </h4>
                <p className="text-xs sm:text-sm text-[#5C4C40] leading-relaxed break-keep pl-6">
                  본 수업의 핵심은 앱 제작과 출시 경험입니다. 광고, 결제, 상품 연결 등은 플랫폼 정책 및 기능에 따라 별도의 확장 영역으로 안내할 수 있습니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ───────────────────────────────────────────
            16. FINAL CTA (#apply)
           ─────────────────────────────────────────── */}
        <section
          id="apply"
          className="py-20 md:py-28 px-4 sm:px-6 bg-gradient-to-b from-[#14100E] to-[#0A0807] relative overflow-hidden"
        >
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none opacity-15 blur-[140px]"
            style={{
              background: "radial-gradient(circle, rgba(198,166,107,0.5) 0%, transparent 70%)",
            }}
          />

          <div className="max-w-3xl mx-auto text-center relative z-10">
            <span className="text-xs md:text-sm font-semibold tracking-[0.25em] text-[#C6A66B] uppercase mb-4 block">
              FROM IDEA TO APP
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#FAF7F2] mb-6 leading-tight break-keep">
              머릿속에만 있던 아이디어를 <br />
              오늘, 작동하는 앱으로 만들어보세요.
            </h2>

            {/* 본문 설명 카드 */}
            <div className="my-8 p-6 md:p-8 rounded-2xl bg-[#1C1510] border border-[#4A3728] max-w-2xl mx-auto text-center space-y-3 shadow-lg">
              <p className="text-base sm:text-lg text-[#F5EFE6] font-bold leading-relaxed break-keep">
                코딩을 몰라서 미뤄두었던 아이디어도, <br />
                AI와 함께라면 작은 서비스로 시작할 수 있습니다.
              </p>
              <p className="text-sm sm:text-base text-[#D6C6A8] leading-relaxed break-keep font-medium">
                배우고 끝나는 수업이 아니라 직접 만들고, 실행하고, 출시까지 경험합니다.
              </p>
            </div>

            {/* 최종 신청 요약 카드 */}
            <div className="p-8 md:p-10 rounded-3xl bg-[#181310] border border-[#3E3127] shadow-2xl max-w-xl mx-auto mb-6 text-left">
              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-between pb-3 border-b border-[#2B221B]">
                  <span className="text-xs md:text-sm text-[#8F7D6E]">과정 형태</span>
                  <span className="text-xs md:text-sm text-[#FAF7F2] font-semibold">
                    {CLASS_CONFIG.meta.format}
                  </span>
                </div>
                <div className="flex items-center justify-between pb-3 border-b border-[#2B221B]">
                  <span className="text-xs md:text-sm text-[#8F7D6E]">일정 및 시간</span>
                  <span className="text-xs md:text-sm text-[#C6A66B] font-bold">
                    {CLASS_CONFIG.meta.schedule} · {CLASS_CONFIG.meta.duration}
                  </span>
                </div>
                <div className="flex items-center justify-between pb-3 border-b border-[#2B221B]">
                  <span className="text-xs md:text-sm text-[#8F7D6E]">수강 난이도</span>
                  <span className="text-xs md:text-sm text-[#FAF7F2] font-semibold">
                    {CLASS_CONFIG.meta.difficulty}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs md:text-sm text-[#8F7D6E]">제공 자료</span>
                  <span className="text-xs md:text-sm text-[#D6C6A8] font-semibold">
                    실전 템플릿 7종 풀 패키지
                  </span>
                </div>
              </div>

              {/* 신청 버튼 */}
              <button
                type="button"
                disabled
                className="w-full py-4 px-6 rounded-2xl bg-[#C6A66B]/50 text-[#1A1410] font-extrabold text-base md:text-lg cursor-not-allowed flex items-center justify-center gap-2 shadow-lg"
                title="클래스 일정 확정 후 신청이 오픈됩니다."
              >
                <span>내 미니앱 만들기 (모집 예정)</span>
              </button>
              <p className="text-[11px] text-center text-[#7A6A5E] mt-3">
                * 정식 접수 오픈 시 카카오톡 또는 안내 문자로 가장 먼저 알려드립니다.
              </p>
            </div>

            {/* 마지막 한 줄 */}
            <div className="py-6 text-center">
              <p className="text-base sm:text-lg font-bold text-[#D6C6A8] break-keep">
                작은 배움, 하나의 완성. <br />
                <span className="text-[#FAF7F2]">이번에는 당신의 아이디어가 앱이 됩니다.</span>
              </p>
            </div>

            <div className="text-center">
              <Link
                href="/oneday"
                className="text-xs md:text-sm text-[#A8988B] hover:text-[#C6A66B] underline underline-offset-4 transition-colors"
              >
                ← 다른 원데이 클래스도 함께 둘러보기
              </Link>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}
