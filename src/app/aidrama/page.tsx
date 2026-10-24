import React from "react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI 브랜드 숏드라마 제작 실전 원데이 클래스 | 자명스쿨",
  description:
    "도파민 터지는 스토리부터 영상 완성까지, 90분 만에 웹소설 작가의 서사 공식과 AI 전용 프롬프트 엔진으로 나만의 첫 숏드라마 1편을 직접 완성합니다.",
};

export default function AidramaPage() {
  return (
    <main className="min-h-screen bg-[#0D0B0A] text-[#EDE6DC] selection:bg-[#C6A66B]/30 selection:text-white font-sans">
      {/* ───────────────────────────────────────────────
          공통 서브 헤더 네비게이션
         ─────────────────────────────────────────────── */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-[#0D0B0A]/85 border-b border-[#2E2723] px-6 py-3.5 transition-all">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link
            href="/oneday"
            className="inline-flex items-center gap-2 text-xs md:text-sm text-[#A8988B] hover:text-[#C6A66B] transition-colors group"
          >
            <span className="group-hover:-translate-x-1 transition-transform">←</span>
            <span>원데이 클래스 목록</span>
          </Link>
          <div className="text-[11px] md:text-xs tracking-wider text-[#C6A66B] font-medium">
            작은 배움, 하나의 완성.
          </div>
          <a
            href="#apply"
            className="px-3.5 py-1.5 rounded-full bg-[#C6A66B] hover:bg-[#D6C6A8] text-[#1A1410] text-xs font-bold transition-colors"
          >
            수강 신청
          </a>
        </div>
      </nav>

      {/* ───────────────────────────────────────────────
          ① 메인 후킹과 수업 정보 (Hero Section)
         ─────────────────────────────────────────────── */}
      <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 px-6 overflow-hidden border-b border-[#26201B]">
        {/* 은은한 샴페인골드 오라 배경 효과 */}
        <div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] pointer-events-none opacity-20 blur-[120px]"
          style={{
            background: "radial-gradient(circle, rgba(198,166,107,0.4) 0%, rgba(138,106,63,0.1) 70%, transparent 100%)",
          }}
        />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          {/* 상단 뱃지 */}
          <div className="inline-flex flex-wrap items-center justify-center gap-2 mb-6">
            <span className="px-3.5 py-1.5 rounded-full bg-[#C6A66B]/15 border border-[#C6A66B]/30 text-xs md:text-sm font-semibold text-[#D6C6A8]">
              자명스쿨 원데이 실전 마스터
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-[#3D2F24] border border-[#5C4635] text-xs md:text-sm font-semibold text-[#E5D7C5]">
              실시간 1편 완성 보장 코칭
            </span>
          </div>

          {/* 메인 카피 */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#FAF7F2] mb-6 leading-[1.2] break-keep">
            도파민 터지는 스토리부터 영상 완성까지, <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-[#D6C6A8] via-[#F3E7D3] to-[#C6A66B] bg-clip-text text-transparent">
              내 아이디어가 1분 숏드라마가 되는 90분
            </span>
          </h1>

          {/* 서브 카피 */}
          <p className="text-base sm:text-lg md:text-xl text-[#B8A89A] max-w-2xl mx-auto mb-8 leading-relaxed break-keep font-normal">
            비싼 유료 툴 결제나 프로그램 설치 없이도 충분합니다. <br className="hidden sm:inline" />
            웹소설 작가의 서사 공식과 자명스쿨 전용 AI 프롬프트 엔진으로 <br className="hidden sm:inline" />
            오늘 바로 당신만의 첫 작품을 완성하세요.
          </p>

          {/* 핵심 지표 3개 */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl mx-auto mb-12">
            <div className="p-4 rounded-2xl bg-[#181310] border border-[#2E241E] text-center">
              <span className="block text-xs text-[#9E8B7C] mb-1">실전 중심 러닝타임</span>
              <strong className="text-base md:text-lg text-[#F5EFE6] font-bold">실시간 실습 90분</strong>
            </div>
            <div className="p-4 rounded-2xl bg-[#181310] border border-[#2E241E] text-center">
              <span className="block text-xs text-[#9E8B7C] mb-1">원데이 완성 목표</span>
              <strong className="text-base md:text-lg text-[#D6C6A8] font-bold">수강생 전원 1편 완성</strong>
            </div>
            <div className="p-4 rounded-2xl bg-[#181310] border border-[#2E241E] text-center">
              <span className="block text-xs text-[#9E8B7C] mb-1">크레딧 낭비 제로</span>
              <strong className="text-base md:text-lg text-[#F5EFE6] font-bold">전용 프롬프트 엔진 증정</strong>
            </div>
          </div>

          {/* [대표 이미지 또는 영상 자리] */}
          <div className="relative rounded-3xl overflow-hidden border border-[#3E3228] bg-[#14100D] p-8 md:p-14 shadow-2xl mb-10 group">
            <div className="flex flex-col items-center justify-center min-h-[260px] md:min-h-[340px] text-center">
              <div className="w-16 h-16 rounded-full bg-[#C6A66B]/15 border border-[#C6A66B]/40 flex items-center justify-center text-[#D6C6A8] text-2xl mb-4 group-hover:scale-110 transition-transform">
                ▶
              </div>
              <span className="inline-block px-3 py-1 rounded-md bg-[#241C17] border border-[#3D3027] text-xs font-semibold text-[#C6A66B] mb-2">
                [대표 영상 자리 · 권장 비율 16:9 또는 9:16]
              </span>
              <h3 className="text-lg md:text-xl font-bold text-[#FAF7F2] mb-1">
                본 수업 제작 기법으로 완성된 1분 숏드라마 시연작
              </h3>
              <p className="text-xs md:text-sm text-[#8F7D6E] max-w-md">
                3초 만에 시선을 사로잡는 오프닝과 극적 반전 사이다 결말이 담긴 대표 완성본이 재생됩니다.
              </p>
            </div>
          </div>

          {/* 일정 및 신청 요약 카드 */}
          <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-r from-[#1A1410] via-[#211A15] to-[#1A1410] border border-[#3E3127] max-w-xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-left">
            <div className="space-y-1.5 text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-2 text-xs text-[#C6A66B] font-semibold">
                <span className="w-2 h-2 rounded-full bg-[#C6A66B] animate-pulse" />
                <span>실시간 온라인 Zoom 라이브</span>
              </div>
              <div className="text-sm md:text-base text-[#EDE6DC]">
                <strong>일시:</strong> <span className="text-[#C6A66B] font-medium">[확정 필요 · 일정 조율중]</span>
              </div>
              <div className="text-sm md:text-base text-[#EDE6DC]">
                <strong>참가비:</strong> <span className="text-[#C6A66B] font-bold">[확정 필요 · 런칭 특가 예정]</span>
              </div>
            </div>
            <a
              href="#apply"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#C6A66B] hover:bg-[#D6C6A8] text-[#1A1410] text-sm md:text-base font-bold shadow-lg transition-all text-center shrink-0"
            >
              [신청 링크 확정 필요]
            </a>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────
          ② 공감과 창작 욕구 (Pain Points & Empathy)
         ─────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 px-6 max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-xs md:text-sm font-semibold tracking-[0.2em] text-[#C6A66B] uppercase mb-3 block">
            REAL STRUGGLES
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold text-[#FAF7F2] mb-4 break-keep">
            "인스타, 유튜브 쇼츠에 하루에도 수십 개씩 뜨는 AI 숏드라마… <br />
            보면서 '나도 저런 거 하나 만들어보고 싶다' 생각해보셨죠?"
          </h2>
          <p className="text-sm sm:text-base text-[#9E8B7C] max-w-xl mx-auto break-keep">
            하지만 막상 혼자 시작해보면 마주하는 현실의 3대 장벽, 여러분만의 문제가 아닙니다.
          </p>
        </div>

        {/* 3대 고통 카드 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="p-6 md:p-7 rounded-2xl bg-[#14100E] border border-[#2A211B] flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold text-[#C6A66B] mb-2 block">장벽 01</span>
              <h3 className="text-lg font-bold text-[#FAF7F2] mb-3">비용 폭탄 & 툴 피로</h3>
              <p className="text-sm text-[#9E8B7C] leading-relaxed break-keep">
                영상 툴, 음성 툴, 이미지 툴… 사이트마다 가입하고 결제하느라 정작 영상은 손도 못 대고 지치셨나요?
              </p>
            </div>
          </div>

          <div className="p-6 md:p-7 rounded-2xl bg-[#14100E] border border-[#2A211B] flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold text-[#C6A66B] mb-2 block">장벽 02</span>
              <h3 className="text-lg font-bold text-[#FAF7F2] mb-3">일관성 붕괴</h3>
              <p className="text-sm text-[#9E8B7C] leading-relaxed break-keep">
                컷마다 주인공 얼굴과 옷이 제각각 바뀌고, 로봇처럼 어색한 움직임에 소중한 크레딧만 날리셨나요?
              </p>
            </div>
          </div>

          <div className="p-6 md:p-7 rounded-2xl bg-[#14100E] border border-[#2A211B] flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold text-[#C6A66B] mb-2 block">장벽 03</span>
              <h3 className="text-lg font-bold text-[#FAF7F2] mb-3">지루한 서사</h3>
              <p className="text-sm text-[#9E8B7C] leading-relaxed break-keep">
                화질은 그럴듯한데 시청자가 3초 만에 넘겨버려 조회수가 0에 머무는 허탈함을 겪으셨나요?
              </p>
            </div>
          </div>
        </div>

        {/* 공감 이미지 자리 */}
        <div className="rounded-2xl border border-dashed border-[#3D3026] bg-[#120F0D] p-8 text-center mb-10">
          <span className="inline-block px-3 py-1 rounded bg-[#1D1713] text-xs font-medium text-[#C6A66B] mb-2">
            [이미지 자리: 제작 전 흔히 겪는 시행착오 화면]
          </span>
          <p className="text-xs text-[#8F7D6E]">
            얼굴이 제각각 바뀌어 실패한 생성 컷들과 복잡한 사이트 결제 화면 예시
          </p>
        </div>

        {/* 핵심 전환 메시지 */}
        <div className="p-8 md:p-10 rounded-2xl bg-gradient-to-b from-[#1C1510] to-[#120E0C] border border-[#3E3024] text-center">
          <p className="text-base sm:text-xl font-bold text-[#D6C6A8] leading-relaxed break-keep">
            “기술은 거들 뿐, 대중을 미치게 만드는 것은 결국 ‘이야기’와 ‘연출’입니다.”
          </p>
          <p className="text-xs sm:text-sm text-[#8F7D6E] mt-2">
            불필요한 시행착오는 줄이고, 사람의 마음을 쥐락펴락하는 스토리텔링에 집중하도록 돕습니다.
          </p>
        </div>
      </section>

      {/* ───────────────────────────────────────────────
          ③ 완성 결과물 미리보기 (Result Preview)
         ─────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 px-6 bg-[#120E0C] border-y border-[#26201B]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs md:text-sm font-semibold tracking-[0.2em] text-[#C6A66B] uppercase mb-3 block">
              YOUR RESULT
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-[#FAF7F2] mb-4 break-keep">
              수업 종료 후 내 손에 쥐어질 단 하나의 결과물
            </h2>
            <p className="text-sm sm:text-base text-[#9E8B7C] max-w-xl mx-auto break-keep">
              이론으로 끝나지 않습니다. 수업이 끝나는 순간 내 스마트폰에 저장되는 완성된 1분 숏드라마 파일(mp4)을 확인하세요.
            </p>
          </div>

          {/* 메인 비디오 자리 & 주요 3장면 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-10">
            {/* 세로 영상 자리 */}
            <div className="lg:col-span-5 rounded-3xl border border-[#3E3228] bg-[#181310] p-6 text-center shadow-xl">
              <div className="aspect-[9/16] max-w-[280px] mx-auto rounded-2xl border border-dashed border-[#4A3C30] bg-[#0E0B09] flex flex-col items-center justify-center p-4">
                <div className="w-12 h-12 rounded-full bg-[#C6A66B]/20 flex items-center justify-center text-[#D6C6A8] mb-3">
                  📱
                </div>
                <span className="text-xs font-bold text-[#C6A66B] mb-1">[영상 자리: 대표 완성작]</span>
                <p className="text-[11px] text-[#7A6A5E] leading-relaxed">
                  9:16 모바일 숏폼 최적화 <br />
                  완성 영상 (mp4) 재생 영역
                </p>
              </div>
            </div>

            {/* 주요 3장면 컷 분석 */}
            <div className="lg:col-span-7 space-y-4">
              <h3 className="text-lg md:text-xl font-bold text-[#FAF7F2] mb-2">
                시청자를 끝까지 붙잡는 3대 핵심 컷 설계
              </h3>
              
              <div className="p-4 rounded-xl bg-[#17120F] border border-[#2C221B] flex gap-4 items-center">
                <div className="w-20 h-16 rounded-lg bg-[#241D17] border border-dashed border-[#4D3D30] shrink-0 flex items-center justify-center text-[10px] text-[#C6A66B]">
                  [컷 1 자리]
                </div>
                <div>
                  <strong className="text-sm font-bold text-[#E5D7C5] block">01. 첫 3초 후킹 컷</strong>
                  <p className="text-xs text-[#8F7D6E]">스크롤을 멈추게 만드는 강렬한 클로즈업과 호기심 유발 대사</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#17120F] border border-[#2C221B] flex gap-4 items-center">
                <div className="w-20 h-16 rounded-lg bg-[#241D17] border border-dashed border-[#4D3D30] shrink-0 flex items-center justify-center text-[10px] text-[#C6A66B]">
                  [컷 2 자리]
                </div>
                <div>
                  <strong className="text-sm font-bold text-[#E5D7C5] block">02. 긴장감 폭발 갈등 컷</strong>
                  <p className="text-xs text-[#8F7D6E]">빌런의 도발과 인물의 결핍이 극대화되는 오버숄더 및 인서트 컷</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#17120F] border border-[#2C221B] flex gap-4 items-center">
                <div className="w-20 h-16 rounded-lg bg-[#241D17] border border-dashed border-[#4D3D30] shrink-0 flex items-center justify-center text-[10px] text-[#C6A66B]">
                  [컷 3 자리]
                </div>
                <div>
                  <strong className="text-sm font-bold text-[#E5D7C5] block">03. 통쾌한 사이다 반전 컷</strong>
                  <p className="text-xs text-[#8F7D6E]">도파민이 터지는 역전극으로 다음 화 시청과 공유를 유도하는 마무리</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────
          ④ 강사 소개와 신뢰 근거 (Instructor)
         ─────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 px-6 max-w-4xl mx-auto">
        <div className="rounded-3xl bg-gradient-to-b from-[#181310] to-[#120E0C] border border-[#3E3127] p-8 md:p-12">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            {/* 강사 프로필 이미지 자리 */}
            <div className="w-36 h-36 md:w-44 md:h-44 rounded-2xl bg-[#201814] border border-dashed border-[#5C4838] shrink-0 flex flex-col items-center justify-center p-3 text-center">
              <span className="text-2xl mb-1">✍️</span>
              <span className="text-xs font-bold text-[#C6A66B]">[강사 프로필 자리]</span>
              <span className="text-[10px] text-[#7A6A5E] mt-1">자명스쿨 대표 & 기획자</span>
            </div>

            {/* 강사 소개 텍스트 */}
            <div className="space-y-4 text-center md:text-left">
              <div>
                <span className="text-xs font-bold tracking-widest text-[#C6A66B] uppercase block mb-1">
                  INSTRUCTOR
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-[#FAF7F2]">
                  “이야기를 짓고, 시스템으로 완성하는 AI 크리에이터”
                </h3>
              </div>

              <ul className="space-y-2 text-xs md:text-sm text-[#A8988B] text-left">
                <li className="flex items-start gap-2">
                  <span className="text-[#C6A66B] font-bold">✔</span>
                  <span><strong>공인 웹소설 전문 자격 보유</strong> (스토리 구조, 인물 갈등, 클리셰 연출 전문)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C6A66B] font-bold">✔</span>
                  <span><strong>자명스쿨 대표 & 지식 콘텐츠/전자책 다수 출간 기획자</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C6A66B] font-bold">✔</span>
                  <span><strong>복잡한 기술을 왕초보도 바로 쓰는 시스템으로 압축해 주는 AI 실전 교육가</strong></span>
                </li>
              </ul>
            </div>
          </div>

          {/* 강사의 한마디 */}
          <div className="mt-8 pt-8 border-t border-[#2E241E] bg-[#120E0C]/60 p-6 rounded-2xl">
            <p className="text-sm md:text-base text-[#D6C6A8] italic leading-relaxed break-keep">
              “AI 툴은 누구나 며칠이면 배웁니다. 하지만 사람의 마음을 쥐락펴락하고 끝까지 영상을 보게 만드는 '서사 설계 능력'은 아무나 가르칠 수 없습니다. 비싼 프로그램 설치 없이도 내 머릿속 상상이 생생한 드라마가 되는 쾌감을 선물해 드릴게요.”
            </p>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────
          ⑤ 혼자 할 때 막히는 지점과 해결 방식 (Solution)
         ─────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 px-6 bg-[#120E0C] border-y border-[#26201B]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs md:text-sm font-semibold tracking-[0.2em] text-[#C6A66B] uppercase mb-3 block">
              DIFFERENCE
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-[#FAF7F2] mb-4 break-keep">
              혼자 헤매던 방식 vs 자명스쿨 원데이의 해결법
            </h2>
            <p className="text-sm sm:text-base text-[#9E8B7C] max-w-xl mx-auto break-keep">
              막막했던 제작 과정을 가장 단순하고 명료한 4가지 솔루션으로 치환했습니다.
            </p>
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-5 rounded-2xl bg-[#17120F] border border-[#2B221B]">
              <div className="space-y-1">
                <span className="text-xs text-red-400 font-bold">✕ 혼자 할 때의 한계</span>
                <h4 className="text-sm md:text-base font-bold text-[#FAF7F2]">막막한 백지에서 소설 쓰기</h4>
                <p className="text-xs text-[#8F7D6E]">어디서 본 듯 뻔하거나 도입부에서 늘어지는 이야기</p>
              </div>
              <div className="space-y-1 md:border-l md:border-[#2B221B] md:pl-5">
                <span className="text-xs text-[#C6A66B] font-bold">✓ 자명스쿨의 해결책</span>
                <h4 className="text-sm md:text-base font-bold text-[#D6C6A8]">웹소설 도파민 클리셰 템플릿 대입</h4>
                <p className="text-xs text-[#A8988B]">키워드만 바꾸면 3초 후킹과 사이다 결말이 자동 도출</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-5 rounded-2xl bg-[#17120F] border border-[#2B221B]">
              <div className="space-y-1">
                <span className="text-xs text-red-400 font-bold">✕ 혼자 할 때의 한계</span>
                <h4 className="text-sm md:text-base font-bold text-[#FAF7F2]">컷마다 얼굴·의상이 바뀌는 참사</h4>
                <p className="text-xs text-[#8F7D6E]">프롬프트만 무한 반복하며 아까운 유료 크레딧 낭비</p>
              </div>
              <div className="space-y-1 md:border-l md:border-[#2B221B] md:pl-5">
                <span className="text-xs text-[#C6A66B] font-bold">✓ 자명스쿨의 해결책</span>
                <h4 className="text-sm md:text-base font-bold text-[#D6C6A8]">캐릭터·비주얼 고정 프롬프트 기술</h4>
                <p className="text-xs text-[#A8988B]">주인공의 외모와 한국 실사 톤앤매너를 유지하는 규칙 전수</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-5 rounded-2xl bg-[#17120F] border border-[#2B221B]">
              <div className="space-y-1">
                <span className="text-xs text-red-400 font-bold">✕ 혼자 할 때의 한계</span>
                <h4 className="text-sm md:text-base font-bold text-[#FAF7F2]">어색한 카메라 앵글과 컷 길이</h4>
                <p className="text-xs text-[#8F7D6E]">감에 의존해 이어붙이다가 뚝뚝 끊기는 부자연스러운 편집</p>
              </div>
              <div className="space-y-1 md:border-l md:border-[#2B221B] md:pl-5">
                <span className="text-xs text-[#C6A66B] font-bold">✓ 자명스쿨의 해결책</span>
                <h4 className="text-sm md:text-base font-bold text-[#D6C6A8]">초 단위(타임코드) 프로 컷 연출 공식표</h4>
                <p className="text-xs text-[#A8988B]">몇 초에 클로즈업, 몇 초에 오버숄더를 둘지 수학 공식처럼 제공</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-5 rounded-2xl bg-[#17120F] border border-[#2B221B]">
              <div className="space-y-1">
                <span className="text-xs text-red-400 font-bold">✕ 혼자 할 때의 한계</span>
                <h4 className="text-sm md:text-base font-bold text-[#FAF7F2]">5~6개 사이트를 전전하는 파편화</h4>
                <p className="text-xs text-[#8F7D6E]">툴마다 결제하고 파일 옮기다 지쳐 포기하는 악순환</p>
              </div>
              <div className="space-y-1 md:border-l md:border-[#2B221B] md:pl-5">
                <span className="text-xs text-[#C6A66B] font-bold">✓ 자명스쿨의 해결책</span>
                <h4 className="text-sm md:text-base font-bold text-[#D6C6A8]">원클릭 전용 AI 제작 파이프라인</h4>
                <p className="text-xs text-[#A8988B]">불필요한 구독 없이 바로 완성하는 통합 워크플로우 지원</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────
          ⑥ 핵심 학습 포인트 (3 Key Points)
         ─────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 px-6 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs md:text-sm font-semibold tracking-[0.2em] text-[#C6A66B] uppercase mb-3 block">
            KEY POINTS
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold text-[#FAF7F2] mb-4 break-keep">
            이 수업에서만 얻어가는 3가지 결정적 차별점
          </h2>
          <p className="text-sm sm:text-base text-[#9E8B7C] max-w-xl mx-auto break-keep">
            단순 도구 사용법이 아닙니다. 무엇을 판단하고 어떻게 완성해야 하는지 알려드립니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {/* 포인트 1 */}
          <div className="rounded-2xl bg-[#16120F] border border-[#30261E] p-7 flex flex-col justify-between">
            <div>
              <span className="inline-block px-3 py-1 rounded bg-[#271E17] text-[#C6A66B] text-xs font-bold mb-4">
                POINT 01
              </span>
              <h3 className="text-lg md:text-xl font-bold text-[#FAF7F2] mb-3 break-keep">
                웹소설 작가의 도파민 서사 공식 전수
              </h3>
              <p className="text-xs sm:text-sm text-[#9E8B7C] leading-relaxed break-keep mb-6">
                회귀, 환생, 숨은 거물, 사이다 참교육! 독자의 밤을 새우게 만드는 '3초 후킹 대사'와 '초 단위 정보 격차'를 숏폼 문법에 그대로 이식합니다.
              </p>
            </div>
            <div className="rounded-xl border border-dashed border-[#44352A] bg-[#0F0C0A] p-4 text-center">
              <span className="text-[11px] text-[#C6A66B] font-medium block">[이미지 자리: 서사 공식 표]</span>
              <span className="text-[10px] text-[#7A6A5E]">갈등-도발-사이다 플롯 구조도</span>
            </div>
          </div>

          {/* 포인트 2 */}
          <div className="rounded-2xl bg-[#16120F] border border-[#30261E] p-7 flex flex-col justify-between">
            <div>
              <span className="inline-block px-3 py-1 rounded bg-[#271E17] text-[#C6A66B] text-xs font-bold mb-4">
                POINT 02
              </span>
              <h3 className="text-lg md:text-xl font-bold text-[#FAF7F2] mb-3 break-keep">
                초 단위(타임코드)로 뜯어보는 프로 연출법
              </h3>
              <p className="text-xs sm:text-sm text-[#9E8B7C] leading-relaxed break-keep mb-6">
                감으로 만들지 않습니다. 알고리즘이 터진 영상이 몇 초에 클로즈업을 쓰고, 몇 초에 오버숄더와 인서트 컷을 배치하는지 공식표를 드립니다.
              </p>
            </div>
            <div className="rounded-xl border border-dashed border-[#44352A] bg-[#0F0C0A] p-4 text-center">
              <span className="text-[11px] text-[#C6A66B] font-medium block">[이미지 자리: 타임코드 분석표]</span>
              <span className="text-[10px] text-[#7A6A5E]">초·구도·행동 연출 가이드</span>
            </div>
          </div>

          {/* 포인트 3 */}
          <div className="rounded-2xl bg-[#16120F] border border-[#30261E] p-7 flex flex-col justify-between">
            <div>
              <span className="inline-block px-3 py-1 rounded bg-[#271E17] text-[#C6A66B] text-xs font-bold mb-4">
                POINT 03
              </span>
              <h3 className="text-lg md:text-xl font-bold text-[#FAF7F2] mb-3 break-keep">
                크레딧 낭비 제로! 원클릭 AI 프롬프트 스킬
              </h3>
              <p className="text-xs sm:text-sm text-[#9E8B7C] leading-relaxed break-keep mb-6">
                프롬프트 고민 끝! 키워드만 넣으면 6장면 대본, 카메라 무빙, 한국어 대사, 심의 우회 연출까지 한 번에 뽑아주는 전용 스킬을 소장용으로 증정합니다.
              </p>
            </div>
            <div className="rounded-xl border border-dashed border-[#44352A] bg-[#0F0C0A] p-4 text-center">
              <span className="text-[11px] text-[#C6A66B] font-medium block">[이미지 자리: 전용 스킬 화면]</span>
              <span className="text-[10px] text-[#7A6A5E]">자명스쿨 전용 프롬프트 엔진 UI</span>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────
          ⑦ 단계별 커리큘럼 (Curriculum)
         ─────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 px-6 bg-[#120E0C] border-y border-[#26201B]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs md:text-sm font-semibold tracking-[0.2em] text-[#C6A66B] uppercase mb-3 block">
              90-MIN CURRICULUM
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-[#FAF7F2] mb-4 break-keep">
              5단계로 끝내는 90분 실시간 완성 로드맵
            </h2>
            <p className="text-sm sm:text-base text-[#9E8B7C] max-w-xl mx-auto break-keep">
              단순 시청 강의가 아닌, 강사와 함께 화면을 띄워놓고 1단계부터 5단계까지 직접 만들어갑니다.
            </p>
          </div>

          <div className="space-y-6">
            {/* 1단계 */}
            <div className="p-6 md:p-8 rounded-2xl bg-[#181310] border border-[#2E241E] flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded bg-[#C6A66B]/15 text-[#D6C6A8] text-xs font-bold">1단계</span>
                  <h3 className="text-lg md:text-xl font-bold text-[#FAF7F2]">욕망과 갈등 설계 (이야기 기획)</h3>
                </div>
                <ul className="text-xs md:text-sm text-[#9E8B7C] space-y-1 pl-1">
                  <li>• 인물의 결핍, 빌런의 도발, 통쾌한 사이다 반전 구조 잡기</li>
                  <li>• 1분 안에 기-승-전-결을 끝내는 한 줄 로그라인 도출</li>
                </ul>
              </div>
              <div className="p-3 rounded-xl bg-[#231A15] border border-[#3E2F25] text-center shrink-0 min-w-[180px]">
                <span className="text-[11px] text-[#A8988B] block">직접 만드는 결과물</span>
                <strong className="text-xs md:text-sm text-[#D6C6A8]">1분 기승전결 기획안</strong>
              </div>
            </div>

            {/* 2단계 */}
            <div className="p-6 md:p-8 rounded-2xl bg-[#181310] border border-[#2E241E] flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded bg-[#C6A66B]/15 text-[#D6C6A8] text-xs font-bold">2단계</span>
                  <h3 className="text-lg md:text-xl font-bold text-[#FAF7F2]">웹소설 후킹의 영상화 (대본 완성)</h3>
                </div>
                <ul className="text-xs md:text-sm text-[#9E8B7C] space-y-1 pl-1">
                  <li>• 시청자를 멈춰 세우는 첫 3초 후킹 대사 작성법</li>
                  <li>• 심의에 걸리지 않고 긴장감을 올리는 시각적 연출 팁</li>
                </ul>
              </div>
              <div className="p-3 rounded-xl bg-[#231A15] border border-[#3E2F25] text-center shrink-0 min-w-[180px]">
                <span className="text-[11px] text-[#A8988B] block">직접 만드는 결과물</span>
                <strong className="text-xs md:text-sm text-[#D6C6A8]">3초 후킹 대본 1편</strong>
              </div>
            </div>

            {/* 3단계 */}
            <div className="p-6 md:p-8 rounded-2xl bg-[#181310] border border-[#2E241E] flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded bg-[#C6A66B]/15 text-[#D6C6A8] text-xs font-bold">3단계</span>
                  <h3 className="text-lg md:text-xl font-bold text-[#FAF7F2]">타임코드 레퍼런스 분해 (컷 문법)</h3>
                </div>
                <ul className="text-xs md:text-sm text-[#9E8B7C] space-y-1 pl-1">
                  <li>• 10초 단위 6장면 컷 설계 (초·구도·행동·전환 정밀 해부)</li>
                  <li>• 감정에 따라 카메라 앵글(클로즈업, 오버숄더, 패닝) 배치하기</li>
                </ul>
              </div>
              <div className="p-3 rounded-xl bg-[#231A15] border border-[#3E2F25] text-center shrink-0 min-w-[180px]">
                <span className="text-[11px] text-[#A8988B] block">직접 만드는 결과물</span>
                <strong className="text-xs md:text-sm text-[#D6C6A8]">6장면 스토리보드 시트</strong>
              </div>
            </div>

            {/* 4단계 */}
            <div className="p-6 md:p-8 rounded-2xl bg-[#181310] border border-[#2E241E] flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded bg-[#C6A66B]/15 text-[#D6C6A8] text-xs font-bold">4단계</span>
                  <h3 className="text-lg md:text-xl font-bold text-[#FAF7F2]">캐릭터 & 비주얼 고정 (아이덴티티)</h3>
                </div>
                <ul className="text-xs md:text-sm text-[#9E8B7C] space-y-1 pl-1">
                  <li>• 컷이 바뀌어도 주인공 얼굴, 헤어, 의상이 유지되는 프롬프트 테크닉</li>
                  <li>• 한국 실사 드라마 질감을 살리는 비주얼 톤앤매너 세팅</li>
                </ul>
              </div>
              <div className="p-3 rounded-xl bg-[#231A15] border border-[#3E2F25] text-center shrink-0 min-w-[180px]">
                <span className="text-[11px] text-[#A8988B] block">직접 만드는 결과물</span>
                <strong className="text-xs md:text-sm text-[#D6C6A8]">고정 캐릭터 이미지 세트</strong>
              </div>
            </div>

            {/* 5단계 */}
            <div className="p-6 md:p-8 rounded-2xl bg-[#181310] border border-[#2E241E] flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded bg-[#C6A66B]/15 text-[#D6C6A8] text-xs font-bold">5단계</span>
                  <h3 className="text-lg md:text-xl font-bold text-[#FAF7F2]">원클릭 생성 & 최종 완성 (내 폰 저장)</h3>
                </div>
                <ul className="text-xs md:text-sm text-[#9E8B7C] space-y-1 pl-1">
                  <li>• 구글 플로우 기반 원스톱 영상 일괄 생성 및 불량 컷 수정 요령</li>
                  <li>• 또렷한 한국어 대사 + 효과음 결합 후 완성본(mp4) 스마트폰 다운로드</li>
                </ul>
              </div>
              <div className="p-3 rounded-xl bg-[#231A15] border border-[#3E2F25] text-center shrink-0 min-w-[180px]">
                <span className="text-[11px] text-[#A8988B] block">직접 만드는 결과물</span>
                <strong className="text-xs md:text-sm text-[#D6C6A8]">완성 숏드라마 영상 (mp4)</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────
          ⑧ 제공 자료와 수업 후 활용 (Materials & Bonus)
         ─────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 px-6 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs md:text-sm font-semibold tracking-[0.2em] text-[#C6A66B] uppercase mb-3 block">
            EXCLUSIVE BONUSES
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold text-[#FAF7F2] mb-4 break-keep">
            수업 후에도 다음 작품을 무한 제작할 수 있는 실전 무기 4종
          </h2>
          <p className="text-sm sm:text-base text-[#9E8B7C] max-w-xl mx-auto break-keep">
            원데이 수강생에게만 평생 소장 가능한 실전 패키지를 100% 증정합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div className="p-6 rounded-2xl bg-[#15110E] border border-[#2E241D] flex items-start gap-4">
            <span className="w-10 h-10 rounded-xl bg-[#C6A66B]/15 text-[#D6C6A8] flex items-center justify-center font-bold shrink-0">
              01
            </span>
            <div>
              <span className="text-xs text-[#C6A66B] font-bold">[평생 소장]</span>
              <h3 className="text-base font-bold text-[#FAF7F2] mb-1">
                자명스쿨 '1분 숏드라마 올인원 AI 프롬프트 스킬' 원본
              </h3>
              <p className="text-xs text-[#8F7D6E] leading-relaxed">
                키워드만 넣으면 기획부터 대본, 프롬프트까지 자동 완성해 주는 전용 엔진 파일
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#15110E] border border-[#2E241D] flex items-start gap-4">
            <span className="w-10 h-10 rounded-xl bg-[#C6A66B]/15 text-[#D6C6A8] flex items-center justify-center font-bold shrink-0">
              02
            </span>
            <div>
              <span className="text-xs text-[#C6A66B] font-bold">[실전 템플릿]</span>
              <h3 className="text-base font-bold text-[#FAF7F2] mb-1">
                단어만 바꾸면 완성되는 '도파민 클리셰 대본 3대 템플릿'
              </h3>
              <p className="text-xs text-[#8F7D6E] leading-relaxed">
                회귀/복수, 신분위장 사이다, 감동 반전 등 검증된 숏폼 서사 골격 문서
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#15110E] border border-[#2E241D] flex items-start gap-4">
            <span className="w-10 h-10 rounded-xl bg-[#C6A66B]/15 text-[#D6C6A8] flex items-center justify-center font-bold shrink-0">
              03
            </span>
            <div>
              <span className="text-xs text-[#C6A66B] font-bold">[연출 가이드]</span>
              <h3 className="text-base font-bold text-[#FAF7F2] mb-1">
                타임코드 컷 연출 & 카메라 무빙 분석표
              </h3>
              <p className="text-xs text-[#8F7D6E] leading-relaxed">
                초 단위 앵글 설계와 프롬프트에 넣을 카메라 무빙 영문 지시어 일람표
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#15110E] border border-[#2E241D] flex items-start gap-4">
            <span className="w-10 h-10 rounded-xl bg-[#C6A66B]/15 text-[#D6C6A8] flex items-center justify-center font-bold shrink-0">
              04
            </span>
            <div>
              <span className="text-xs text-[#C6A66B] font-bold">[애프터 케어]</span>
              <h3 className="text-base font-bold text-[#FAF7F2] mb-1">
                수업 종료 후 전용 질의응답 오픈채팅방 케어
              </h3>
              <p className="text-xs text-[#8F7D6E] leading-relaxed">
                혼자 다음 작품을 만들다 막히는 지점을 묻고 피드백을 받을 수 있는 소통방 [기간 확정 필요]
              </p>
            </div>
          </div>
        </div>

        {/* 제공 자료 미리보기 박스 */}
        <div className="rounded-2xl border border-dashed border-[#3D3025] bg-[#120E0C] p-8 text-center">
          <span className="inline-block px-3 py-1 rounded bg-[#1F1813] text-xs font-semibold text-[#C6A66B] mb-2">
            [이미지 자리: 제공 자료 4종 목업 번들 패키지]
          </span>
          <p className="text-xs text-[#8F7D6E]">
            템플릿 문서 표지, 프롬프트 시트 목업, 모바일 가이드 화면이 포함된 그래픽
          </p>
        </div>
      </section>

      {/* ───────────────────────────────────────────────
          ⑨ 추천 대상과 준비 안내 (Guide)
         ─────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 px-6 bg-[#120E0C] border-y border-[#26201B]">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* 추천 대상 */}
            <div className="p-7 rounded-2xl bg-[#16120F] border border-[#2C221B]">
              <span className="text-xs font-bold text-[#C6A66B] uppercase block mb-2">TARGET</span>
              <h3 className="text-xl font-bold text-[#FAF7F2] mb-5">이런 분들께 강력 추천합니다</h3>
              <ul className="space-y-3 text-xs md:text-sm text-[#A8988B]">
                <li className="flex items-start gap-2">
                  <span className="text-[#C6A66B] font-bold">✔</span>
                  <span>내 브랜드나 상품을 바이럴할 숏폼 영상 콘텐츠가 절실한 대표님</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C6A66B] font-bold">✔</span>
                  <span>AI 숏드라마를 시작하고 싶지만 비싼 툴과 복잡한 프롬프트로 좌절했던 분</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C6A66B] font-bold">✔</span>
                  <span>영상 편집은 할 줄 몰라도 번뜩이는 이야기 아이디어를 영상으로 만들고 싶은 분</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C6A66B] font-bold">✔</span>
                  <span>새로운 AI 영상 창작 파이프라인을 습득해 수익화 기회를 찾고 계신 분</span>
                </li>
              </ul>
            </div>

            {/* 수강 준비 안내 */}
            <div className="p-7 rounded-2xl bg-[#16120F] border border-[#2C221B]">
              <span className="text-xs font-bold text-[#C6A66B] uppercase block mb-2">PREPARATION</span>
              <h3 className="text-xl font-bold text-[#FAF7F2] mb-5">수업 전 확인해주세요</h3>
              <ul className="space-y-3 text-xs md:text-sm text-[#A8988B]">
                <li className="flex items-start gap-2">
                  <strong className="text-[#EDE6DC] shrink-0">기기 환경:</strong>
                  <span>크롬 브라우저 구동 가능한 노트북 또는 데스크톱 PC (유료 프로그램 설치 불필요)</span>
                </li>
                <li className="flex items-start gap-2">
                  <strong className="text-[#EDE6DC] shrink-0">사전 계정:</strong>
                  <span>구글 계정 및 안내드리는 도구 무료 가입 [확정 필요]</span>
                </li>
                <li className="flex items-start gap-2">
                  <strong className="text-[#EDE6DC] shrink-0">추가 비용:</strong>
                  <span>수업 실습은 무료 제공 크레딧 범위 내에서 충분히 진행되도록 설계되었습니다.</span>
                </li>
                <li className="flex items-start gap-2">
                  <strong className="text-[#EDE6DC] shrink-0">수강 수준:</strong>
                  <span>코딩 및 영상 편집 경험이 전무한 왕초보자도 따라오실 수 있습니다.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────
          ⑩ 자주 묻는 질문 (FAQ)
         ─────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 px-6 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs md:text-sm font-semibold tracking-[0.2em] text-[#C6A66B] uppercase mb-3 block">
            FAQ
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold text-[#FAF7F2] mb-4 break-keep">
            자주 묻는 질문
          </h2>
          <p className="text-sm sm:text-base text-[#9E8B7C] max-w-xl mx-auto break-keep">
            수강 전 가장 많이 질문해주시는 내용을 정리했습니다.
          </p>
        </div>

        <div className="space-y-4">
          <div className="p-6 rounded-2xl bg-[#16120F] border border-[#2A211A]">
            <h4 className="text-base font-bold text-[#FAF7F2] mb-2">
              Q. 영상 편집이나 컴퓨터를 잘 모르는 왕초보도 정말 가능한가요?
            </h4>
            <p className="text-xs sm:text-sm text-[#9E8B7C] leading-relaxed break-keep">
              네, 가능합니다. 복잡한 전문 영상 편집 프로그램을 쓰지 않으며, 검증된 프롬프트 엔진에 키워드를 넣고 완성된 클립을 이어붙이는 직관적인 워크플로우로 진행됩니다.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#16120F] border border-[#2A211A]">
            <h4 className="text-base font-bold text-[#FAF7F2] mb-2">
              Q. 90분 수업 안에 진짜로 1편이 완성되나요?
            </h4>
            <p className="text-xs sm:text-sm text-[#9E8B7C] leading-relaxed break-keep">
              네. 수강생이 기획 단계에서 길을 잃지 않도록 대본 템플릿과 컷 연출 공식표를 사전에 제공하며, 90분 안에 스마트폰에 1편의 영상 파일(mp4)을 다운로드하는 것을 목표로 커리큘럼이 정밀하게 짜여 있습니다.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#16120F] border border-[#2A211A]">
            <h4 className="text-base font-bold text-[#FAF7F2] mb-2">
              Q. 도구 결제 비용(구독료)이 별도로 필요한가요?
            </h4>
            <p className="text-xs sm:text-sm text-[#9E8B7C] leading-relaxed break-keep">
              아닙니다. 수업 시작 전부터 비싼 유료 프로그램을 강제 결제하지 않습니다. 무료 크레딧을 지혜롭게 활용하는 방법과 크레딧 낭비를 막는 프롬프트 팁을 알려드립니다. [세부 도구 무료 크레딧 기준 확정 필요]
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#16120F] border border-[#2A211A]">
            <h4 className="text-base font-bold text-[#FAF7F2] mb-2">
              Q. 수업 녹화본(다시보기)을 제공하나요?
            </h4>
            <p className="text-xs sm:text-sm text-[#9E8B7C] leading-relaxed break-keep">
              [다시보기 제공 여부 및 열람 기간 정책 확정 필요]
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#16120F] border border-[#2A211A]">
            <h4 className="text-base font-bold text-[#FAF7F2] mb-2">
              Q. 취소 및 환불 기준은 어떻게 되나요?
            </h4>
            <p className="text-xs sm:text-sm text-[#9E8B7C] leading-relaxed break-keep">
              자명스쿨의 공통 수강 취소 및 환불 규정을 따릅니다. [환불 정책 세부 기준 확정 필요]
            </p>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────
          ⑪ 최종 신청 (CTA Section)
         ─────────────────────────────────────────────── */}
      <section id="apply" className="py-20 md:py-28 px-6 bg-gradient-to-b from-[#14100E] to-[#0A0807] border-t border-[#26201B] relative overflow-hidden">
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none opacity-15 blur-[140px]"
          style={{
            background: "radial-gradient(circle, rgba(198,166,107,0.5) 0%, transparent 70%)",
          }}
        />

        <div className="max-w-3xl mx-auto text-center relative z-10">
          <span className="text-xs md:text-sm font-semibold tracking-[0.25em] text-[#C6A66B] uppercase mb-4 block">
            ONE DAY, ONE RESULT
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#FAF7F2] mb-6 leading-tight break-keep">
            머릿속에만 맴돌던 상상, <br />
            오늘 당신의 첫 숏드라마로 현실이 됩니다.
          </h2>
          <p className="text-base sm:text-lg text-[#A8988B] mb-10 max-w-xl mx-auto break-keep">
            웹소설 작가의 서사 설계와 AI 제작 시스템을 손에 쥐고 <br className="hidden sm:inline" />
            단 90분 만에 손에 잡히는 내 작품을 만들어보세요.
          </p>

          {/* 최종 신청 카드 */}
          <div className="p-8 md:p-10 rounded-3xl bg-[#181310] border border-[#3E3127] shadow-2xl max-w-xl mx-auto mb-6 text-left">
            <div className="space-y-4 mb-8">
              <div className="flex items-center justify-between pb-3 border-b border-[#2B221B]">
                <span className="text-xs md:text-sm text-[#8F7D6E]">과정 형태</span>
                <span className="text-xs md:text-sm text-[#FAF7F2] font-semibold">실시간 온라인 Zoom 라이브 코칭</span>
              </div>
              <div className="flex items-center justify-between pb-3 border-b border-[#2B221B]">
                <span className="text-xs md:text-sm text-[#8F7D6E]">일정 및 시간</span>
                <span className="text-xs md:text-sm text-[#C6A66B] font-bold">[일정 확정 필요 · 90분 진행]</span>
              </div>
              <div className="flex items-center justify-between pb-3 border-b border-[#2B221B]">
                <span className="text-xs md:text-sm text-[#8F7D6E]">참가비</span>
                <div className="text-right">
                  <span className="text-base md:text-xl text-[#FAF7F2] font-extrabold">[수강료 확정 필요]</span>
                  <span className="text-[11px] text-[#A8988B] block">* 대형 플랫폼 VOD 대비 합리적인 실시간 코칭</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs md:text-sm text-[#8F7D6E]">제공 혜택</span>
                <span className="text-xs md:text-sm text-[#D6C6A8] font-semibold">전용 프롬프트 스킬 + 템플릿 4종 증정</span>
              </div>
            </div>

            {/* 신청 버튼 */}
            <button
              type="button"
              disabled
              className="w-full py-4 px-6 rounded-2xl bg-[#C6A66B]/50 text-[#1A1410] font-extrabold text-base md:text-lg cursor-not-allowed flex items-center justify-center gap-2 shadow-lg"
              title="클래스 일정 확정 후 신청이 오픈됩니다."
            >
              <span>[지금 바로 내 첫 숏드라마 완성하러 가기] (확정 필요)</span>
            </button>
            <p className="text-[11px] text-center text-[#7A6A5E] mt-3">
              * 정식 접수 페이지 오픈 시 카카오톡 또는 안내 문자로 가장 먼저 알려드립니다.
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
    </main>
  );
}
