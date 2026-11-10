"use client";

import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";

export default function WaterCoursePage() {
  // Water 테마 색상 (차분하고 맑은 물결 컬러)
  const WATER_BLUE = "#5EA9DD";
  const WATER_LIGHT = "#99D5F9";
  const WATER_EMERALD = "#4DB6AC";

  // 커리큘럼 데이터 (단계별 커리큘럼 예시)
  const curriculumData = [
    {
      week: "1회차",
      title: "서비스 기획",
      summary: "내 전문성을 담은 서비스 기획",
      details: [
        "타로·심리·상담·일기 등 관심 분야에서 서비스 주제 찾기",
        "사용할 사람과 필요한 기능 정하기",
        "서비스 이름과 핵심 사용 흐름 정리하기"
      ],
      result: "서비스 기획 & 흐름도"
    },
    {
      week: "2회차",
      title: "바이브 코딩 기초",
      summary: "AI와 대화하며 만드는 바이브 코딩 기초",
      details: [
        "제작 도구의 기본 사용 흐름 익히기",
        "자연어로 화면과 기능 요청하기",
        "실행 결과를 확인하고 수정하기",
        "오류가 생겼을 때 상황을 설명하고 해결하기"
      ],
      result: "첫 화면 & 동작 프로토타입"
    },
    {
      week: "3회차",
      title: "웹서비스 구현",
      summary: "나의 감성을 담은 웹서비스 구현",
      details: [
        "색감·글꼴·이미지 등 디자인 방향 정하기",
        "입력·선택·결과 표시 등 핵심 기능 연결하기",
        "모바일과 PC 화면 점검하기",
        "사용자가 편하게 이용하도록 다듬기"
      ],
      result: "감성 웹서비스 UI 완성"
    },
    {
      week: "4회차",
      title: "배포 및 운영",
      summary: "웹 배포와 운영·수익화 구조 이해",
      details: [
        "웹에 서비스를 배포하고 링크로 공유하기",
        "신청과 안내 등 반복 업무의 자동화 흐름 살펴보기",
        "결제 연동에 필요한 준비와 구조 이해하기",
        "앱인토스 등 추가 배포 방식과 확장 방향 알아보기"
      ],
      result: "배포 완료 & 운영 로드맵"
    }
  ];

  const part1 = curriculumData.slice(0, 2);
  const part2 = curriculumData.slice(2, 4);

  // 만들 수 있는 서비스 예시 데이터
  const serviceExamples = [
    {
      title: "타로·사주 콘텐츠 서비스",
      desc: "내가 준비한 해석과 메시지를 사용자에게 전달하는 공간",
      tag: "콘텐츠형 서비스",
      badge: "제작 예시"
    },
    {
      title: "감정일기·미래일기",
      desc: "감정을 기록하고 바라는 일상을 그려보는 나만의 기록 서비스",
      tag: "기록 & 힐링",
      badge: "제작 예시"
    },
    {
      title: "자기이해 질문 카드",
      desc: "하루의 질문과 성찰 메시지를 만나는 작은 웹앱",
      tag: "인터랙티브 웹앱",
      badge: "제작 예시"
    },
    {
      title: "감성 배경화면 서비스",
      desc: "나만의 이미지와 문장을 담아 제공하는 콘텐츠 공간",
      tag: "디지털 굿즈",
      badge: "제작 예시"
    },
    {
      title: "상담·강의 사이트",
      desc: "내 철학과 프로그램을 소개하고 신청을 받는 브랜드 공간",
      tag: "1인 브랜드 허브",
      badge: "제작 예시"
    }
  ];

  return (
    <div className="bg-[#090909] min-h-screen text-white font-sans selection:bg-[#5EA9DD]/30 overflow-x-hidden">

      {/* 1. Hero Section (상단 타이틀 영역) */}
      <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-28 px-6">
        {/* Aura Background (차분한 물결의 블루 오라) */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] blur-[160px] opacity-[0.08] pointer-events-none"
          style={{ backgroundColor: WATER_BLUE }}
        ></div>
        <div
          className="absolute top-[40%] left-[45%] -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] blur-[150px] opacity-[0.04] pointer-events-none"
          style={{ backgroundColor: "#FFFFFF" }}
        ></div>

        <div className="site-container relative z-10 text-center">
          <div className="max-w-5xl mx-auto">
            <Reveal>
              <div className="flex justify-center mb-8">
                <div className="relative w-20 h-20 md:w-28 md:h-28 group">
                  <Image
                    src="/images/icon/water.png"
                    alt="Water Icon"
                    fill
                    className="object-contain filter drop-shadow-[0_0_25px_rgba(94,169,221,0.35)] group-hover:scale-110 transition-transform duration-1000"
                  />
                </div>
              </div>
              
              <div 
                className="course-caption tracking-[0.35rem] mb-4 uppercase font-display opacity-90 font-medium" 
                style={{ color: WATER_BLUE }}
              >
                Water Curriculum • 1인 서비스 구축
              </div>

              <h1 className="course-hero-title font-display mb-5 tracking-tight italic">
                마음을 <span style={{ color: WATER_BLUE }}>채우다</span>
              </h1>

              <div className="mb-6">
                <span className="course-hero-sub font-light text-white/90 tracking-wide block mb-1.5">
                  1인 비즈니스 창업 & 서비스 개발
                </span>
                <span className="course-caption tracking-[0.25em] text-[#89CFF0]/80 font-medium uppercase">
                  바이브 코딩 & 감성 자동화
                </span>
              </div>

              <p className="course-hero-sub text-white font-medium max-w-2xl mx-auto mb-10">
                나의 온기를 담은 <br className="md:hidden" />
                <span style={{ color: WATER_LIGHT }}>24시간 일하는 디지털 안식처</span>
              </p>
            </Reveal>

            {/* 소개 문구 박스 */}
            <Reveal delayMs={200}>
              <div className="max-w-2xl mx-auto p-8 md:p-9 rounded-[2rem] bg-gradient-to-br from-[#121c24] to-[#0c1218] border border-[rgba(94,169,221,0.15)] mb-12 relative overflow-hidden group shadow-2xl">
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  style={{ backgroundColor: `${WATER_BLUE}0D` }}
                ></div>
                <p className="relative z-10 course-body text-[#BFBFBF] font-light">
                  배움을 이어가고 있지만 여전히 불안한 이유는, <br className="hidden md:block" />
                  <span className="text-white font-normal">나의 시간과 노동에만 의지하고 있기 때문</span>일지 모릅니다. <br /><br className="hidden md:block" />
                  이제 당신의 지혜와 경험을 <br className="hidden md:block" />
                  사람들에게 지속적으로 전달할 수 있는 <br className="md:hidden" />
                  <span style={{ color: WATER_BLUE }} className="font-medium">디지털 자산으로 채워보세요.</span>
                </p>
              </div>
            </Reveal>

            {/* 신청 및 문의 버튼 */}
            <Reveal delayMs={400}>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                <a
                  href="https://pf.kakao.com/_IxguMn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-visible h-14 w-full sm:w-64 px-8 flex items-center justify-center course-caption font-bold uppercase tracking-widest rounded-full bg-gradient-to-br from-[#1E5F74] to-[#133B5C] text-white shadow-2xl transition-all duration-300 transform-gpu hover:-translate-y-[2px]"
                >
                  <span className="relative z-10 font-bold italic">👉 강의 안내 받기</span>
                  <span className="absolute -inset-2 bg-gradient-to-br from-[#1E5F74] to-[#133B5C] opacity-0 blur-xl group-hover:opacity-45 transition-opacity duration-300 rounded-full" />
                </a>
                <button
                  className="group flex items-center gap-2.5 text-[#BFBFBF] hover:text-[#5EA9DD] transition-all duration-300 course-caption tracking-widest uppercase border-b border-white/10 pb-1"
                  onClick={() => alert("PDF 안내 파일은 준비 중입니다. 잠시만 기다려 주세요!")}
                >
                  <span className="text-lg">📄</span> 강의 안내 PDF 보기
                </button>
              </div>
            </Reveal>
          </div>
        </div>

        {/* 상단 메인 비주얼 배너 영역 */}
        <div className="site-container mt-16 md:mt-20">
          <Reveal delayMs={600} slideFrom="bottom">
            <div className="relative aspect-[21/9] rounded-[2.5rem] overflow-hidden border border-white/[0.05] shadow-[0_30px_60px_rgba(0,0,0,0.5)] bg-gradient-to-br from-[#101921] via-[#0b1016] to-[#090909]">
              <Image
                src="/images/main/water.png"
                alt="Digital Sanctuary - Water Course Visual"
                fill
                className="object-cover opacity-60 mix-blend-screen scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090909] via-transparent to-transparent opacity-90"></div>
              <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 z-10 max-w-xl">
                <span
                  className="inline-block course-caption uppercase tracking-[0.2em] px-3.5 py-1 rounded-full bg-white/[0.05] border border-white/10 mb-3 font-mono"
                  style={{ color: WATER_BLUE }}
                >
                  제작 예시 • Digital Asset
                </span>
                <p className="course-hero-sub font-light text-white/90">
                  마음과 철학을 담은 1인 서비스, <br />
                  <span className="font-medium text-white">AI와 함께 가장 단순하고 따뜻하게</span> 구현합니다.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2. 고민 공감 영역 (Earth 문제 제기 구조와 동일) */}
      <section className="py-24 md:py-28 px-6 bg-[#090909]">
        <div className="site-container">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <Reveal>
              <h2 className="course-section-title font-display mb-10 text-white">
                혹시 이런 고민을 <br />
                <span style={{ color: WATER_BLUE }}>하고 계신가요?</span>
              </h2>
              <div className="space-y-5">
                {[
                  "강의와 상담을 하고 있지만, 시간과 체력의 한계를 느낍니다.",
                  "코딩이나 개발은 나와는 전혀 상관없는 먼 세상 이야기 같습니다.",
                  "나만의 콘텐츠와 철학을 담은 독립적인 서비스 공간을 갖고 싶습니다.",
                  "매번 신청을 받고 안내하는 반복 업무를 줄이고 싶습니다."
                ].map((text, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 p-6 rounded-2xl bg-gradient-to-br from-[#121c24] to-[#0c1218] border border-white/[0.03] group transition-all duration-500 hover:border-[rgba(94,169,221,0.3)]"
                  >
                    <span className="text-[#5EA9DD] text-xl">✦</span>
                    <p className="text-[#BFBFBF] course-body font-light">{text}</p>
                  </div>
                ))}
              </div>

              {/* 마무리 강조 문구 */}
              <div className="mt-10 p-8 md:p-9 rounded-[2rem] bg-white/[0.02] border border-white/[0.05]">
                <p className="course-hero-sub text-[#BFBFBF] font-light">
                  👉 지금 필요한 것은 <br />
                  내 생각을 작은 기능으로 정리하고, <br />
                  <span style={{ color: WATER_BLUE }} className="font-medium underline underline-offset-8">
                    AI와 함께 하나씩 구현해 보는 경험
                  </span>입니다.
                </p>
              </div>
            </Reveal>

            {/* 우측 이미지/비주얼 영역 */}
            <Reveal delayMs={400}>
              <div className="relative aspect-square rounded-[3rem] overflow-hidden border border-white/[0.05] shadow-2xl group bg-gradient-to-br from-[#121c24] to-[#0c1218] flex items-center justify-center p-8">
                <Image
                  src="/images/elements/water.png"
                  alt="Inner Digital Space"
                  fill
                  className="object-cover opacity-75 group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-transparent to-black/70"></div>
                <div className="relative z-10 text-center p-7 backdrop-blur-sm bg-black/30 rounded-3xl border border-white/10 max-w-sm">
                  <span className="course-caption uppercase tracking-[0.25em] block mb-2.5" style={{ color: WATER_LIGHT }}>
                    Warm & Gentle Creation
                  </span>
                  <p className="text-white course-body font-light">
                    복잡한 프로그래밍 언어 대신, <br />
                    <span className="font-medium text-white">나의 일상 언어</span>로 만드는 <br />
                    작고 온전한 첫 서비스
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 3. 과정의 철학 영역 (Our Mission) */}
      <section className="py-24 md:py-28 px-6 bg-[#0a0a0c] relative overflow-hidden border-t border-b border-white/[0.03]">
        <div
          className="absolute inset-0 opacity-[0.02] pointer-events-none"
          style={{ backgroundColor: WATER_BLUE }}
        ></div>
        <div className="site-container relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <Reveal>
              <span
                className="course-caption tracking-[0.35em] uppercase mb-6 block font-semibold opacity-80"
                style={{ color: WATER_BLUE }}
              >
                Our Mission
              </span>
              <h2 className="course-section-title font-display mb-10 italic text-white">
                당신의 지혜와 온기가 <br />
                <span style={{ color: WATER_BLUE }}>필요한 사람에게 닿도록.</span>
              </h2>

              <div className="space-y-6 course-hero-sub font-light text-[#BFBFBF] max-w-3xl mx-auto">
                <p>
                  누군가의 마음을 이해해 온 경험, <br />
                  일상을 바꾸는 작은 질문, <br />
                  오래 쌓아온 나만의 지식과 이야기.
                </p>
                <div className="w-[1px] h-10 mx-auto" style={{ backgroundColor: `${WATER_BLUE}33` }}></div>
                <p className="text-white/90">
                  자명스쿨은 그 가치를 <br className="md:hidden" />
                  <span className="text-white font-medium">디지털 서비스로 옮기는 과정</span>을 함께합니다.
                </p>
                <div className="p-7 md:p-8 rounded-[2rem] bg-gradient-to-br from-[#121c24] to-[#0c1218] border border-white/[0.04] mt-10 text-center shadow-lg">
                  <p className="text-[#BFBFBF] course-body font-light">
                    처음부터 모든 기능을 만들기보다, <br />
                    <span style={{ color: WATER_BLUE }} className="font-medium">나에게 의미 있는 작은 서비스 하나</span>에서 시작합니다.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 4. 과정 필요성 영역 (WHY) */}
      <section className="py-24 md:py-28 px-6 relative overflow-hidden bg-[#090909]">
        <div className="site-container relative z-10">
          <div className="max-w-5xl mx-auto">
            <Reveal>
              <div className="text-center mb-12">
                <span
                  className="course-caption tracking-[0.3em] uppercase mb-3 block font-semibold opacity-80"
                  style={{ color: WATER_BLUE }}
                >
                  Vibe Coding & 1-Person Business
                </span>
                <h2 className="course-section-title font-display mb-6 italic text-white">
                  왜 지금, <br className="md:hidden" />
                  <span style={{ color: WATER_BLUE }}>바이브 코딩 & 1인 서비스</span>인가요?
                </h2>
              </div>

              <div className="max-w-3xl mx-auto space-y-6 course-body font-light text-[#BFBFBF]">
                <p>
                  AI와 함께 서비스를 만드는 방법이 넓어지고 있습니다.
                </p>
                <p>
                  <strong className="text-white font-medium">바이브 코딩(Vibe Coding)</strong>은 원하는 화면과 기능을 일상 언어로 설명하고,
                  AI가 만든 결과를 실행하고 확인하며 수정하는 가장 직관적인 제작 방식입니다.
                </p>
                <p>
                  타로·사주 콘텐츠 서비스, 매일의 감정을 기록하는 다이어리, 자기이해 질문 카드, 상담·강의 소개 사이트까지.
                  내가 가진 관심과 경험을 실제로 사용할 수 있는 서비스로 연결해 봅니다.
                </p>

                {/* 강조 문구 카드 */}
                <div className="p-8 md:p-10 rounded-[2.5rem] bg-gradient-to-br from-[#121c24] to-[#0c1218] border border-[rgba(94,169,221,0.2)] mt-10 text-center shadow-xl">
                  <p className="course-quote font-medium text-white">
                    “나의 직관과 감성이 <br />
                    <span style={{ color: WATER_BLUE }}>누군가에게 도움이 되는 서비스의 출발점</span>이 됩니다.”
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 5. 강의에서 배우는 내용 (Earth 해결 제안 구조 활용) */}
      <section className="py-24 md:py-28 px-6 bg-[#0a0a0c]">
        <div className="site-container">
          <Reveal>
            <div className="text-center mb-16">
              <span
                className="course-caption tracking-[0.3em] uppercase mb-3 block font-semibold opacity-80"
                style={{ color: WATER_BLUE }}
              >
                Curriculum Core
              </span>
              <h2 className="course-section-title font-display mb-4 text-white">
                강의에서 배우는 핵심 내용
              </h2>
              <p className="course-hero-sub text-[#BFBFBF] font-light max-w-2xl mx-auto">
                복잡한 개발 지식 없이도 차근차근 따라할 수 있는 4가지 핵심 과정
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "내 전문성을 담은 서비스 기획",
                desc: "누구를 돕고 싶은지 정하고, 내 경험과 콘텐츠를 핵심 기능으로 정리합니다.",
                icon: "💡"
              },
              {
                step: "02",
                title: "AI와 대화하며 만드는 바이브 코딩",
                desc: "화면과 기능을 요청하고, 실행 결과를 확인하며 수정하는 기초 흐름을 배웁니다.",
                icon: "💬"
              },
              {
                step: "03",
                title: "감성을 담은 웹서비스 디자인",
                desc: "색감·글꼴·버튼·화면 흐름을 정리하고, 모바일과 PC에서 사용하기 편하게 구성합니다.",
                icon: "🎨"
              },
              {
                step: "04",
                title: "배포와 운영·자동화의 기초",
                desc: "서비스를 웹에 공개하고, 신청·안내·결제 등 운영에 필요한 연결 구조를 이해합니다.",
                icon: "🚀"
              }
            ].map((card, i) => (
              <Reveal key={i} delayMs={i * 150}>
                <div className="p-8 rounded-[2rem] bg-gradient-to-br from-[#121c24] to-[#0c1218] border border-white/[0.03] h-full flex flex-col justify-between group hover:-translate-y-2 transition-all duration-700 hover:border-[rgba(94,169,221,0.3)] shadow-lg">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-2xl">{card.icon}</span>
                      <span
                        className="course-caption uppercase tracking-widest font-mono px-3 py-1 rounded-full bg-white/[0.03] border border-white/5"
                        style={{ color: WATER_BLUE }}
                      >
                        STEP {card.step}
                      </span>
                    </div>
                    <h3 className="course-card-title font-bold mb-3 text-white group-hover:text-[#5EA9DD] transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-[#BFBFBF] course-caption font-light leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                  <div className="w-10 h-[1px] mt-6" style={{ backgroundColor: `${WATER_BLUE}40` }}></div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. 만들 수 있는 서비스 예시 (독립 쇼케이스 영역) */}
      <section className="py-24 md:py-28 px-6 bg-[#090909]">
        <div className="site-container">
          <Reveal>
            <div className="text-center mb-14">
              <span
                className="course-caption tracking-[0.3em] uppercase mb-3 block font-semibold opacity-80"
                style={{ color: WATER_BLUE }}
              >
                Service Showcase
              </span>
              <h2 className="course-section-title font-display mb-4 text-white">
                만들 수 있는 서비스 예시
              </h2>

              {/* 공통 실습 목표 명확화 */}
              <div className="inline-block p-5 md:p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] max-w-2xl mx-auto mb-8">
                <p className="course-body text-[#BFBFBF] font-light">
                  💡 <span className="text-white font-medium">웹서비스 하나의 첫 버전을 완성하는 것</span>이 공통 실습 목표입니다. <br className="hidden md:block" />
                  수업에서 아래 모든 예시를 각각 만드는 것이 아니라, <br className="hidden md:block" />
                  <span style={{ color: WATER_LIGHT }}>나의 관심사에 맞는 서비스 하나를 선택하여 완성</span>합니다.
                </p>
              </div>
            </div>
          </Reveal>

          {/* 예시 카드 목록 */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {serviceExamples.map((item, i) => (
              <Reveal key={i} delayMs={i * 120}>
                <div className="p-7 md:p-8 rounded-[2rem] bg-gradient-to-br from-[#121c24] to-[#0c1218] border border-white/[0.04] h-full flex flex-col justify-between group hover:-translate-y-2 transition-all duration-500 hover:border-[rgba(94,169,221,0.3)] shadow-lg">
                  <div>
                    {/* 상단 뱃지 영역 */}
                    <div className="flex items-center justify-between mb-5">
                      <span
                        className="course-caption font-semibold px-3 py-1 rounded-full bg-[rgba(94,169,221,0.1)] border border-[rgba(94,169,221,0.3)] tracking-wider"
                        style={{ color: WATER_BLUE }}
                      >
                        {item.badge}
                      </span>
                      <span className="course-caption text-white/40 tracking-wider font-mono">
                        {item.tag}
                      </span>
                    </div>

                    {/* 추후 교체 가능한 독립 비주얼 영역 */}
                    <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-5 border border-white/[0.05] bg-gradient-to-br from-black/40 to-white/[0.02] flex items-center justify-center text-center p-4">
                      <div className="text-white/30 course-caption tracking-widest font-mono">
                        [ 화면 이미지 영역 ]
                      </div>
                    </div>

                    <h3 className="course-card-title font-bold mb-2.5 text-white group-hover:text-[#5EA9DD] transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-[#BFBFBF] course-caption font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-white/[0.04] flex items-center justify-between course-caption text-white/40">
                    <span>1인 서비스 프로토타입</span>
                    <span style={{ color: WATER_BLUE }}>→</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 7. 상세 커리큘럼 (Earth의 5. 상세 커리큘럼 구조 적용) */}
      <section className="py-24 px-6 lg:py-32 bg-[#0a0a0c]">
        <div className="site-container">
          <Reveal>
            <div
              className="relative p-8 md:p-16 lg:p-20 rounded-[3rem] border border-white/[0.05] shadow-[0_40px_100px_rgba(0,0,0,0.6)] overflow-hidden"
              style={{ background: "linear-gradient(180deg, rgba(18,28,36,0.98) 0%, rgba(9,9,9,1) 100%)" }}
            >
              <div className="relative z-10 text-center mb-16 md:mb-20">
                <h2 className="course-section-title font-display mb-6 italic text-white">
                  작은 아이디어에서 <br />
                  <span style={{ color: WATER_BLUE }}>나만의 서비스가 되기까지</span>
                </h2>

                <div className="w-24 h-[1px] mx-auto mb-8" style={{ backgroundColor: `${WATER_BLUE}4D` }}></div>

                <p className="course-hero-sub text-[#BFBFBF] font-light max-w-2xl mx-auto mb-8">
                  기획부터 화면 구현, 배포와 운영 구조까지 <br />
                  <span className="text-white font-medium">차근차근 완성해가는 실습 중심 커리큘럼</span>입니다
                </p>

                {/* 단계별 커리큘럼 예시 안내 뱃지 */}
                <div className="inline-flex items-center px-6 py-2.5 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-md">
                  <span className="text-[#BFBFBF] course-caption tracking-widest font-light">
                    📌 단계별 커리큘럼 예시 • 실습과 피드백을 통해 단계적으로 완성합니다
                  </span>
                </div>
              </div>

              {/* Part 1 */}
              <div className="mb-20 md:mb-24">
                <div className="flex items-center gap-6 md:gap-8 mb-12">
                  <div className="h-[1px] flex-1" style={{ background: `linear-gradient(to right, transparent, ${WATER_BLUE}33)` }}></div>
                  <h3 className="course-mid-title font-display tracking-[0.1em] px-4 md:px-6 italic" style={{ color: `${WATER_BLUE}E6` }}>
                    Part 1. <span className="text-white font-normal">나의 경험을 서비스로 설계하기</span>
                  </h3>
                  <div className="h-[1px] flex-1" style={{ background: `linear-gradient(to left, transparent, ${WATER_BLUE}33)` }}></div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                  {part1.map((item, i) => (
                    <Reveal key={i} delayMs={i * 150} slideFrom="bottom">
                      <div className="group relative p-8 md:p-10 rounded-[2.5rem] border border-white/[0.04] transition-all duration-700 shadow-[0_20px_50px_rgba(0,0,0,0.4)] flex flex-col h-full bg-gradient-to-br from-[#121c24] to-[#0c1218] hover:border-[rgba(94,169,221,0.3)]">
                        <div
                          className="absolute top-0 left-0 w-full h-1 opacity-0 group-hover:opacity-100 transition-opacity"
                          style={{ background: `linear-gradient(to right, transparent, ${WATER_BLUE}66, transparent)` }}
                        ></div>

                        <div className="course-mid-title font-display font-bold mb-4 tracking-tighter" style={{ color: `${WATER_BLUE}66` }}>
                          {item.week}
                        </div>
                        <h4 className="course-card-title font-bold mb-6 text-white group-hover:text-[#5EA9DD] transition-colors leading-tight">
                          {item.summary}
                        </h4>

                        <ul className="space-y-4 mb-10 flex-1">
                          {item.details.map((detail, idx) => (
                            <li key={idx} className="flex items-start gap-4 text-[#BFBFBF] group-hover:text-white transition-colors course-body">
                              <span className="text-[#5EA9DD] text-xs mt-1.5">✦</span>
                              <span className="leading-[1.7] font-light">{detail}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="pt-6 border-t border-white/[0.05] flex items-center justify-between">
                          <span className="course-body font-bold italic tracking-wide" style={{ color: WATER_BLUE }}>
                            {item.result}
                          </span>
                          <span className="text-xl group-hover:translate-x-2 transition-transform duration-500" style={{ color: `${WATER_BLUE}66` }}>
                            →
                          </span>
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>

              {/* Part 2 */}
              <div className="mb-12">
                <div className="flex items-center gap-6 md:gap-8 mb-12">
                  <div className="h-[1px] flex-1" style={{ background: `linear-gradient(to right, transparent, ${WATER_BLUE}33)` }}></div>
                  <h3 className="course-mid-title font-display tracking-[0.1em] px-4 md:px-6 italic" style={{ color: `${WATER_BLUE}E6` }}>
                    Part 2. <span className="text-white font-normal">서비스에 모습을 입히고 세상에 연결하기</span>
                  </h3>
                  <div className="h-[1px] flex-1" style={{ background: `linear-gradient(to left, transparent, ${WATER_BLUE}33)` }}></div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                  {part2.map((item, i) => (
                    <Reveal key={i} delayMs={i * 150} slideFrom="bottom">
                      <div className="group relative p-8 md:p-10 rounded-[2.5rem] border border-white/[0.04] transition-all duration-700 shadow-[0_20px_50px_rgba(0,0,0,0.4)] flex flex-col h-full bg-gradient-to-br from-[#121c24] to-[#0c1218] hover:border-[rgba(94,169,221,0.3)]">
                        <div
                          className="absolute top-0 left-0 w-full h-1 opacity-0 group-hover:opacity-100 transition-opacity"
                          style={{ background: `linear-gradient(to right, transparent, ${WATER_BLUE}66, transparent)` }}
                        ></div>

                        <div className="course-mid-title font-display font-bold mb-4 tracking-tighter" style={{ color: `${WATER_BLUE}66` }}>
                          {item.week}
                        </div>
                        <h4 className="course-card-title font-bold mb-6 text-white group-hover:text-[#5EA9DD] transition-colors leading-tight">
                          {item.summary}
                        </h4>

                        <ul className="space-y-4 mb-10 flex-1">
                          {item.details.map((detail, idx) => (
                            <li key={idx} className="flex items-start gap-4 text-[#BFBFBF] group-hover:text-white transition-colors course-body">
                              <span className="text-[#5EA9DD] text-xs mt-1.5">✦</span>
                              <span className="leading-[1.7] font-light">{detail}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="pt-6 border-t border-white/[0.05] flex items-center justify-between">
                          <span className="course-body font-bold italic tracking-wide" style={{ color: WATER_BLUE }}>
                            {item.result}
                          </span>
                          <span className="text-xl group-hover:translate-x-2 transition-transform duration-500" style={{ color: `${WATER_BLUE}66` }}>
                            →
                          </span>
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>

              {/* 커리큘럼 참고 사항 안내 */}
              <div className="p-6 md:p-7 rounded-2xl bg-white/[0.02] border border-white/[0.05] text-center max-w-3xl mx-auto">
                <p className="course-caption text-[#BFBFBF] font-light leading-relaxed">
                  ※ 웹 배포를 기본 실습으로 진행하며, 결제 연동에 필요한 준비와 앱인토스 등 추가 배포 방식의 확장 방향을 다룹니다. <br className="hidden md:block" />
                  세부 실습 및 연동 범위는 과정 모집 시 최종 확정 안내됩니다.
                </p>
              </div>

            </div>
          </Reveal>
        </div>
      </section>

      {/* 8. 수강 후 기대 변화 (Earth의 6. 결과 위치) */}
      <section className="py-24 md:py-28 px-6 bg-[#090909]">
        <div className="site-container">
          <Reveal>
            <div className="text-center mb-16 md:mb-20">
              <span
                className="course-caption tracking-[0.3em] uppercase mb-3 block font-semibold opacity-80"
                style={{ color: WATER_BLUE }}
              >
                Expected Outcomes
              </span>
              <h2 className="course-section-title font-display mb-6 text-white">
                이 과정을 마치고 나면
              </h2>
              <div className="w-16 h-[1px] mx-auto" style={{ backgroundColor: `${WATER_BLUE}33` }}></div>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
            {[
              "내 아이디어를 화면과 기능으로 정리하고, AI와 함께 웹서비스 첫 버전을 만드는 흐름을 익힙니다.",
              "내가 직접 응대하지 않는 시간에도 콘텐츠를 전달할 수 있는 공간이 생깁니다.",
              "나의 브랜드와 콘텐츠를 담은 서비스와 제작 원본을 갖추고, 직접 수정하며 발전시킬 기반을 마련합니다.",
              "반복 업무를 줄이고, 유료 서비스로 확장하는 데 필요한 운영 구조를 이해합니다."
            ].map((text, i) => (
              <Reveal key={i} delayMs={i * 150}>
                <div className="p-8 md:p-9 rounded-[2rem] bg-gradient-to-br from-[#121c24] to-[#0c1218] border border-white/[0.03] flex items-start gap-5 group transition-all duration-500 hover:border-[rgba(94,169,221,0.3)] shadow-lg h-full">
                  <span 
                    className="w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0 group-hover:text-black transition-all mt-0.5 text-sm" 
                    style={{ backgroundColor: `${WATER_BLUE}1A`, color: WATER_BLUE }}
                  >
                    ✓
                  </span>
                  <p className="course-body text-[#BFBFBF] font-light leading-relaxed">
                    {text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delayMs={600}>
            <div className="mt-16 md:mt-20 text-center">
              <p className="course-quote font-display italic tracking-tight" style={{ color: WATER_BLUE }}>
                “시간에 쫓기던 강의자 → <span className="text-white">나만의 디지털 안식처를 가진 창작자</span>”
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 9. 하단 브랜드 메시지 및 신청 안내 (Earth CTA 구조) */}
      <section className="py-32 md:py-36 px-6 text-center bg-gradient-to-b from-[#0a0a0c] to-[#090909] relative overflow-hidden border-t border-white/[0.03]">
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-full opacity-10 pointer-events-none"
          style={{ background: `radial-gradient(circle at 50% 100%, ${WATER_BLUE} 0%, transparent 70%)` }}
        ></div>

        <div className="site-container relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            {/* 브랜드 메시지 */}
            <Reveal>
              <h2 className="course-section-title font-display mb-6 leading-tight italic text-white">
                빠르게 달려가지 않아도 괜찮습니다. <br />
                <span style={{ color: WATER_BLUE }}>나의 속도대로, 차분하고 따뜻하게</span> <br className="hidden md:block" />
                내 손으로 첫 결과물을 완성해보세요.
              </h2>
            </Reveal>

            {/* 신청 안내 */}
            <Reveal delayMs={300}>
              <div className="mt-10 mb-12 p-6 md:p-8 rounded-3xl bg-white/[0.02] border border-white/[0.05] max-w-xl mx-auto">
                <p className="course-hero-sub text-white font-medium mb-2">
                  상세 일정과 모집 안내는 준비 중입니다.
                </p>
                <p className="course-caption text-[#BFBFBF] font-light">
                  과정에 대해 궁금한 점은 아래로 편하게 문의해 주세요.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row justify-center items-center gap-6 md:gap-8">
                <a
                  href="https://pf.kakao.com/_IxguMn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-visible h-16 w-full sm:w-80 px-8 flex items-center justify-center course-body font-bold tracking-[0.15em] rounded-full bg-gradient-to-br from-[#1E5F74] to-[#133B5C] text-white shadow-2xl transition-all duration-300 transform-gpu hover:-translate-y-2"
                >
                  <span className="relative z-10 font-bold italic">👉 카카오톡 문의하기</span>
                  <span className="absolute -inset-2 bg-gradient-to-br from-[#1E5F74] to-[#133B5C] opacity-0 blur-2xl group-hover:opacity-40 transition-opacity duration-300 rounded-full" />
                </a>
                <a
                  href="https://pf.kakao.com/_IxguMn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center"
                >
                  <span
                    className="text-[#BFBFBF] hover:text-[#5EA9DD] transition-all duration-300 course-caption tracking-[0.25em] uppercase border-b border-white/10 pb-1 mb-2"
                  >
                    과정 알림 신청
                  </span>
                  <span className="text-[11px] text-white/20 uppercase tracking-[0.4em]">Notification</span>
                </a>
              </div>
            </Reveal>

            {/* 목록으로 돌아가기 링크 */}
            <Reveal delayMs={600}>
              <Link
                href="/courses"
                className="inline-block mt-24 text-white/20 hover:text-[#5EA9DD] transition-all duration-500 course-caption tracking-[0.5em] uppercase"
              >
                ← BACK TO COURSES
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

    </div>
  );
}

