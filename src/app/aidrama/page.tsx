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
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-[#0D0B0A]/90 border-b border-[#2E2723] px-6 py-3.5 transition-all">
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

      {/* ═══════════════════════════════════════════════
          영역 1. 최상단 대표 이미지 (Hero Media)
          - 가로형 대표 이미지/영상 자리 (본문 콘텐츠 폭 기준)
          - 모바일에서도 인물·결과물이 잘리지 않는 비율 최적화
         ═══════════════════════════════════════════════ */}
      <section className="pt-6 pb-2 md:pt-10 md:pb-4 px-4 sm:px-6 bg-[#0D0B0A]">
        <div className="max-w-6xl mx-auto">
          <div className="relative rounded-2xl md:rounded-3xl overflow-hidden border border-[#3E3228] bg-gradient-to-b from-[#181310] to-[#120E0C] shadow-2xl group">
            {/* 16:9 와이드 가로형 대표 미디어 영역 */}
            <div className="aspect-[16/9] w-full flex flex-col items-center justify-center p-6 sm:p-12 text-center relative overflow-hidden">
              {/* 은은한 배경 오라 */}
              <div
                className="absolute inset-0 pointer-events-none opacity-30"
                style={{
                  background:
                    "radial-gradient(circle at 50% 50%, rgba(198,166,107,0.35) 0%, rgba(46,39,35,0.2) 60%, transparent 100%)",
                }}
              />

              <div className="relative z-10 flex flex-col items-center max-w-2xl">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#C6A66B]/20 border border-[#C6A66B]/50 flex items-center justify-center text-[#D6C6A8] text-2xl md:text-3xl mb-4 shadow-lg group-hover:scale-105 transition-transform">
                  ▶
                </div>
                <span className="inline-block px-3.5 py-1.5 rounded-full bg-[#241C17]/90 border border-[#4D3A2B] text-xs md:text-sm font-bold text-[#D6C6A8] mb-3">
                  [대표 이미지 · 영상 자리 (가로형 16:9)]
                </span>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#FAF7F2] mb-2 break-keep">
                  AI로 완성하는 1분 숏드라마 대표 결과물
                </h2>
                <p className="text-xs sm:text-sm text-[#A8988B] leading-relaxed break-keep">
                  웹소설 도파민 서사 공식과 일관성 프롬프트 엔진으로 제작된 고화질 영상 및 대표 장면
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          영역 2. 제목·신청 안내 영역 (Beige Header & CTA)
          - 가로 전체를 채우는 자명스쿨 시그니처 베이지 배경 (#F9F6F0)
          - 진한 브라운 타이포그래피 (#2E2723, #4A3F35, #7C6656)
          - PC: 좌측(제목/목표/정보) + 우측(가격/신청 카드) 2열
          - Mobile: 제목 → 소개 → 정보 → 가격 → 신청 버튼 1열
         ═══════════════════════════════════════════════ */}
      <section className="w-full bg-[#F9F6F0] text-[#2E2723] border-b border-[#E8DFD3] py-12 md:py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* 좌측: 원데이 분류, 강의명, 완성 목표 소개, 수업 정보 메타 */}
            <div className="lg:col-span-7 space-y-6">
              {/* 원데이 분류 & 브랜드 문구 */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs md:text-sm font-bold tracking-wider text-[#8E6D38] uppercase">
                  AI CREATIVE 〉 영상 스토리텔링
                </span>
                <span className="text-[#C6A66B]">·</span>
                <span className="text-xs text-[#7C6656] font-medium">자명스쿨 원데이 실전 마스터</span>
              </div>

              {/* 강의명 */}
              <h1 className="text-2xl sm:text-4xl md:text-4xl font-extrabold tracking-tight text-[#2E2723] leading-tight break-keep">
                내 취향대로 도파민 풀충전! <br />
                AI로 만드는 나만의 브랜드 숏드라마
                <span className="block text-lg sm:text-2xl font-bold text-[#8E6D38] mt-2">
                  : 스토리 / 캐릭터 / 영상 입문 올인원
                </span>
              </h1>

              {/* 수업의 완성 목표를 담은 소개 */}
              <p className="text-sm sm:text-base text-[#4A3F35] leading-relaxed break-keep">
                인강 끊어놓고 작심삼일로 끝나지 않습니다. 복잡한 유료 프로그램 설치 없이 웹소설 작가의 서사 공식과 전용 프롬프트 엔진으로 <strong>단 90분 만에 내 스마트폰에 저장되는 1분 완성작(mp4)</strong>을 뽑아냅니다.
              </p>

              {/* 수업 진행 메타데이터 (진행방식 · 수업시간 · 난이도 · 일정) */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-white border border-[#E8DFD3] text-center shadow-xs">
                  <span className="block text-[11px] text-[#7C6656] mb-0.5">진행 방식</span>
                  <strong className="text-xs sm:text-sm text-[#2E2723] font-bold">Zoom 실시간</strong>
                </div>
                <div className="p-3.5 rounded-xl bg-white border border-[#E8DFD3] text-center shadow-xs">
                  <span className="block text-[11px] text-[#7C6656] mb-0.5">수업 시간</span>
                  <strong className="text-xs sm:text-sm text-[#2E2723] font-bold">90분 초압축</strong>
                </div>
                <div className="p-3.5 rounded-xl bg-white border border-[#E8DFD3] text-center shadow-xs">
                  <span className="block text-[11px] text-[#7C6656] mb-0.5">수강 난이도</span>
                  <strong className="text-xs sm:text-sm text-[#2E2723] font-bold">누구나 (입문)</strong>
                </div>
                <div className="p-3.5 rounded-xl bg-white border border-[#E8DFD3] text-center shadow-xs">
                  <span className="block text-[11px] text-[#7C6656] mb-0.5">수업 일정</span>
                  <strong className="text-xs sm:text-sm text-[#8E6D38] font-bold">[확정 필요]</strong>
                </div>
              </div>

              {/* 핵심 키워드 태그 */}
              <div className="flex flex-wrap gap-2 pt-1">
                {["AI영상", "숏드라마", "도파민서사", "캐릭터고정", "90분완성"].map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-2.5 py-1 rounded-lg bg-[#FAF2E6] text-[#7C6656] font-medium border border-[#E8DFD3]"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* 우측: 가격 안내 카드 & 신청 버튼 (PC 우측 고정 느낌, 모바일 아래 배치) */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl md:rounded-3xl bg-white border border-[#E8DFD3] p-6 sm:p-8 shadow-[0_12px_32px_rgba(46,39,35,0.06)] space-y-6">
                
                {/* 가격 영역 */}
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-red-50 text-red-600 border border-red-200 text-xs font-bold">
                      원데이 런칭 특가
                    </span>
                    <span className="text-xs text-[#7C6656] line-through">
                      정규 VOD 200,000원 상당
                    </span>
                  </div>

                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl sm:text-4xl font-extrabold text-[#2E2723]">
                      29,000<span className="text-2xl font-bold">원</span>
                    </span>
                    <span className="text-xs text-[#7C6656]">/ 실시간 라이브 코칭</span>
                  </div>
                  <p className="text-xs text-[#8E6D38] mt-1.5 font-medium">
                    * 커피 몇 잔 값으로 평생 소장 프롬프트 엔진과 1편 완성본 획득
                  </p>
                </div>

                {/* 포함 내역 체크리스트 */}
                <div className="py-4 border-y border-[#F0E8DD] space-y-2.5 text-xs text-[#5C4C40]">
                  <div className="flex items-center justify-between">
                    <span>• 90분 실시간 양방향 코칭</span>
                    <strong className="text-[#2E2723]">포함</strong>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>• 전용 숏드라마 AI 프롬프트 엔진</span>
                    <strong className="text-[#8E6D38]">평생 소장</strong>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>• 도파민 서사 & 타임코드 공식표 4종</span>
                    <strong className="text-[#8E6D38]">100% 증정</strong>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>• 실습 완성 결과물 (1분 숏드라마 mp4)</span>
                    <strong className="text-[#2E2723]">수강생 전원</strong>
                  </div>
                </div>

                {/* 신청 버튼 */}
                <div className="space-y-2.5">
                  <a
                    href="#apply"
                    className="w-full min-h-[52px] px-6 rounded-xl bg-[#2E2723] hover:bg-[#1F1916] text-[#FFFBD1] text-base font-bold flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all group"
                  >
                    <span>지금 바로 내 첫 숏드라마 완성하러 가기</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </a>
                  <p className="text-[11px] text-center text-[#7C6656]">
                    * 클래스 일정 확정 시 신청 링크가 바로 연결됩니다. [확정 필요]
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          영역 3. 본문 상세 영역 (Dark & Deep Brown)
          - 검정 & 딥브라운 배경 (#0D0B0A, #120E0C, #181310)
          - 기본 글자: 밝은 베이지 (#EDE6DC, #FAF7F2)
          - 강조 요소: 샴페인골드 (#C6A66B, #D6C6A8)
          - 9단계 순서 구조 준수
         ═══════════════════════════════════════════════ */}
      <div className="w-full bg-[#0D0B0A]">

        {/* ───────────────────────────────────────────
            3-1. 후킹 문구와 수강생의 고민 공감
           ─────────────────────────────────────────── */}
        <section className="py-20 md:py-28 px-4 sm:px-6 max-w-4xl mx-auto border-b border-[#26201B]">
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

          {/* 제작 전 고민 예시 자리 */}
          <div className="rounded-2xl border border-dashed border-[#3D3026] bg-[#120E0C] p-8 text-center mb-10">
            <span className="inline-block px-3 py-1 rounded bg-[#1D1713] text-xs font-medium text-[#C6A66B] mb-2">
              [실습 화면 자리: 제작 전 흔히 겪는 시행착오 예시]
            </span>
            <p className="text-xs text-[#8F7D6E]">
              얼굴이 제각각 바뀌어 실패한 불량 컷들과 복잡한 사이트 결제 화면 비교
            </p>
          </div>

          {/* 설득 전환 메시지 */}
          <div className="p-8 md:p-10 rounded-2xl bg-gradient-to-b from-[#1C1510] to-[#120E0C] border border-[#3E3024] text-center">
            <p className="text-base sm:text-xl font-bold text-[#D6C6A8] leading-relaxed break-keep">
              “기술은 거들 뿐, 대중을 미치게 만드는 것은 결국 ‘이야기’와 ‘연출’입니다.”
            </p>
            <p className="text-xs sm:text-sm text-[#8F7D6E] mt-2">
              불필요한 시행착오는 줄이고, 사람의 마음을 쥐락펴락하는 스토리텔링에 집중하도록 돕습니다.
            </p>
          </div>
        </section>

        {/* ───────────────────────────────────────────
            3-2. 완성작 이미지·영상과 실습 완성 범위
           ─────────────────────────────────────────── */}
        <section className="py-20 md:py-28 px-4 sm:px-6 bg-[#120E0C] border-b border-[#26201B]">
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

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-10">
              {/* 세로 영상 자리 */}
              <div className="lg:col-span-5 rounded-3xl border border-[#3E3228] bg-[#181310] p-6 text-center shadow-xl">
                <div className="aspect-[9/16] max-w-[280px] mx-auto rounded-2xl border border-dashed border-[#4A3C30] bg-[#0E0B09] flex flex-col items-center justify-center p-4">
                  <div className="w-12 h-12 rounded-full bg-[#C6A66B]/20 flex items-center justify-center text-[#D6C6A8] mb-3">
                    📱
                  </div>
                  <span className="text-xs font-bold text-[#C6A66B] mb-1">[완성 영상 자리: 대표 완성작]</span>
                  <p className="text-[11px] text-[#7A6A5E] leading-relaxed">
                    9:16 모바일 숏폼 최적화 <br />
                    완성 영상 (mp4) 재생 영역
                  </p>
                </div>
              </div>

              {/* 주요 장면 3개 자리 */}
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

        {/* ───────────────────────────────────────────
            3-3. 수업의 특징과 제공하는 해결 방법
           ─────────────────────────────────────────── */}
        <section className="py-20 md:py-28 px-4 sm:px-6 max-w-4xl mx-auto border-b border-[#26201B]">
          <div className="text-center mb-14">
            <span className="text-xs md:text-sm font-semibold tracking-[0.2em] text-[#C6A66B] uppercase mb-3 block">
              DIFFERENCE
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-[#FAF7F2] mb-4 break-keep">
              혼자 헤매던 방식 vs 자명스쿨 원데이의 해결법
            </h2>
            <p className="text-sm sm:text-base text-[#9E8B7C] max-w-xl mx-auto break-keep">
              막막했던 제작 과정을 가장 단순하고 직관적인 4가지 솔루션으로 해결합니다.
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
        </section>

        {/* ───────────────────────────────────────────
            3-4. 강사 소개와 신뢰 근거
           ─────────────────────────────────────────── */}
        <section className="py-20 md:py-28 px-4 sm:px-6 max-w-4xl mx-auto border-b border-[#26201B]">
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

        {/* ───────────────────────────────────────────
            3-5. 단계별 커리큘럼
           ─────────────────────────────────────────── */}
        <section className="py-20 md:py-28 px-4 sm:px-6 bg-[#120E0C] border-b border-[#26201B]">
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

        {/* ───────────────────────────────────────────
            3-6. 핵심 제공 자료와 수업 후 활용
           ─────────────────────────────────────────── */}
        <section className="py-20 md:py-28 px-4 sm:px-6 max-w-5xl mx-auto border-b border-[#26201B]">
          <div className="text-center mb-16">
            <span className="text-xs md:text-sm font-semibold tracking-[0.2em] text-[#C6A66B] uppercase mb-3 block">
              CORE LEARNING ASSETS
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-[#FAF7F2] mb-4 break-keep">
              수업 후에도 다음 작품을 무한 제작하는 핵심 실전 무기 4종
            </h2>
            <p className="text-sm sm:text-base text-[#9E8B7C] max-w-xl mx-auto break-keep">
              단순 보너스가 아닌, 본 수업의 완성도를 지탱하는 핵심 기획 스킬과 실전 패키지 원본을 평생 소장용으로 100% 제공합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div className="p-6 rounded-2xl bg-[#15110E] border border-[#2E241D] flex items-start gap-4">
              <span className="w-10 h-10 rounded-xl bg-[#C6A66B]/15 text-[#D6C6A8] flex items-center justify-center font-bold shrink-0">
                01
              </span>
              <div>
                <span className="text-xs text-[#C6A66B] font-bold">[핵심 실전 스킬 · 평생 소장]</span>
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
              [제공 자료 미리보기 자리: 실전 무기 4종 목업 번들]
            </span>
            <p className="text-xs text-[#8F7D6E]">
              템플릿 문서 표지, 프롬프트 시트 목업, 모바일 가이드 화면이 포함된 그래픽
            </p>
          </div>
        </section>

        {/* ───────────────────────────────────────────
            3-7. 추천 대상 · 준비물 · 추가 비용
           ─────────────────────────────────────────── */}
        <section className="py-20 md:py-28 px-4 sm:px-6 bg-[#120E0C] border-b border-[#26201B]">
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

        {/* ───────────────────────────────────────────
            3-8. 자주 묻는 질문 (FAQ) - 자명스쿨 시그니처 베이지 배경
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
                수강 전 가장 많이 궁금해하시는 질문과 답변을 모았습니다.
              </p>
            </div>

            <div className="space-y-4">
              <div className="p-6 md:p-7 rounded-2xl bg-white border border-[#E8DFD3] shadow-xs">
                <h4 className="text-base sm:text-lg font-bold text-[#2E2723] mb-2 flex items-start gap-2">
                  <span className="text-[#8E6D38]">Q.</span>
                  <span>영상 편집이나 컴퓨터를 잘 모르는 왕초보도 정말 가능한가요?</span>
                </h4>
                <p className="text-xs sm:text-sm text-[#5C4C40] leading-relaxed break-keep pl-6">
                  네, 가능합니다. 복잡한 전문 영상 편집 프로그램을 쓰지 않으며, 검증된 프롬프트 엔진에 키워드를 넣고 완성된 클립을 이어붙이는 직관적인 워크플로우로 진행됩니다.
                </p>
              </div>

              <div className="p-6 md:p-7 rounded-2xl bg-white border border-[#E8DFD3] shadow-xs">
                <h4 className="text-base sm:text-lg font-bold text-[#2E2723] mb-2 flex items-start gap-2">
                  <span className="text-[#8E6D38]">Q.</span>
                  <span>90분 수업 안에 진짜로 1편이 완성되나요?</span>
                </h4>
                <p className="text-xs sm:text-sm text-[#5C4C40] leading-relaxed break-keep pl-6">
                  네. 수강생이 기획 단계에서 길을 잃지 않도록 대본 템플릿과 컷 연출 공식표를 사전에 제공하며, 90분 안에 스마트폰에 1편의 영상 파일(mp4)을 다운로드하는 것을 목표로 커리큘럼이 정밀하게 짜여 있습니다.
                </p>
              </div>

              <div className="p-6 md:p-7 rounded-2xl bg-white border border-[#E8DFD3] shadow-xs">
                <h4 className="text-base sm:text-lg font-bold text-[#2E2723] mb-2 flex items-start gap-2">
                  <span className="text-[#8E6D38]">Q.</span>
                  <span>도구 결제 비용(구독료)이 별도로 필요한가요?</span>
                </h4>
                <p className="text-xs sm:text-sm text-[#5C4C40] leading-relaxed break-keep pl-6">
                  아닙니다. 수업 시작 전부터 비싼 유료 프로그램을 강제 결제하지 않습니다. 무료 크레딧을 지혜롭게 활용하는 방법과 크레딧 낭비를 막는 프롬프트 팁을 알려드립니다. [세부 도구 무료 크레딧 기준 확정 필요]
                </p>
              </div>

              <div className="p-6 md:p-7 rounded-2xl bg-white border border-[#E8DFD3] shadow-xs">
                <h4 className="text-base sm:text-lg font-bold text-[#2E2723] mb-2 flex items-start gap-2">
                  <span className="text-[#8E6D38]">Q.</span>
                  <span>수업 녹화본(다시보기)을 제공하나요?</span>
                </h4>
                <p className="text-xs sm:text-sm text-[#5C4C40] leading-relaxed break-keep pl-6">
                  [다시보기 제공 여부 및 열람 기간 정책 확정 필요]
                </p>
              </div>

              <div className="p-6 md:p-7 rounded-2xl bg-white border border-[#E8DFD3] shadow-xs">
                <h4 className="text-base sm:text-lg font-bold text-[#2E2723] mb-2 flex items-start gap-2">
                  <span className="text-[#8E6D38]">Q.</span>
                  <span>취소 및 환불 기준은 어떻게 되나요?</span>
                </h4>
                <p className="text-xs sm:text-sm text-[#5C4C40] leading-relaxed break-keep pl-6">
                  자명스쿨의 공통 수강 취소 및 환불 규정을 따릅니다. [환불 정책 세부 기준 확정 필요]
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ───────────────────────────────────────────
            3-9. 최종 가격 · 일정 · 신청 버튼 (Final CTA)
           ─────────────────────────────────────────── */}
        <section id="apply" className="py-20 md:py-28 px-4 sm:px-6 bg-gradient-to-b from-[#14100E] to-[#0A0807] relative overflow-hidden">
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

            {/* 설득 후킹 문구 박스 */}
            <div className="my-8 p-6 md:p-8 rounded-2xl bg-[#1C1510] border border-[#4A3728] max-w-2xl mx-auto text-center space-y-3 shadow-lg">
              <p className="text-base sm:text-lg text-[#F5EFE6] font-bold leading-relaxed break-keep">
                "20만 원 넘는 인강 끊어놓고 1강 듣다 포기하셨나요?"
              </p>
              <p className="text-sm sm:text-base text-[#D6C6A8] leading-relaxed break-keep font-medium">
                커피 몇 잔 값(29,000원)으로, 오늘 단 90분 만에 내 손으로 1분 완성작을 뽑아내는 초압축 실전으로 오세요.
              </p>
            </div>

            <p className="text-base sm:text-lg text-[#A8988B] mb-10 max-w-xl mx-auto break-keep">
              웹소설 작가의 서사 설계와 AI 제작 시스템을 손에 쥐고 <br className="hidden sm:inline" />
              단 90분 만에 손에 잡히는 내 작품을 만들어보세요.
            </p>

            {/* 최종 신청 요약 카드 */}
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
                    <span className="text-base md:text-xl text-[#FAF7F2] font-extrabold">29,000원</span>
                    <span className="text-[11px] text-[#A8988B] block">* 20만 원대 VOD 대비 80% 이상 가벼운 파격 실시간 특가</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs md:text-sm text-[#8F7D6E]">핵심 제공 자료</span>
                  <span className="text-xs md:text-sm text-[#D6C6A8] font-semibold">전용 프롬프트 엔진 원본 + 실전 템플릿 4종</span>
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

      </div>
    </main>
  );
}
