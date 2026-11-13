"use client";

import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import CourseRefundPolicySection from "@/components/CourseRefundPolicySection";

export default function WaterCoursePage() {
  // Water 테마 색상 (차분하고 맑은 물결 컬러)
  const WATER_BLUE = "#5EA9DD";
  const WATER_LIGHT = "#99D5F9";
  const WATER_EMERALD = "#4DB6AC";
  const WATER_GOLD = "#E2B774";

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

  // 5~6주차 확장 커리큘럼 데이터 (비즈니스 & 자동판매 퍼널)
  const extendedCurriculum = [
    {
      week: "5회차",
      badge: "고객 흐름 & 동선",
      title: "서비스 판매 동선 & 고객 퍼널",
      summary: "나의 서비스를 실제 비즈니스로 연결하기",
      details: [
        "내가 만든 서비스의 타깃과 고객 흐름 다시 정리하기",
        "서비스 소개페이지와 신청 동선 설계하기",
        "무료 콘텐츠와 유료 서비스의 연결 구조 이해하기",
        "고객이 어디에서 들어오고 어디로 이동하는지 간단한 퍼널 구조 그려보기",
        "블로그·SNS·스레드·유튜브 등 콘텐츠 유입 채널과 서비스 연결하기"
      ],
      result: "서비스 판매 동선 & 고객 퍼널 설계"
    },
    {
      week: "6회차",
      badge: "자동판매 & 운영 시스템",
      title: "1인 비즈니스 자동판매 퍼널",
      summary: "1인 비즈니스 자동판매 퍼널 & 운영 시스템",
      details: [
        "콘텐츠 → 무료자료 → 신청폼 → 이메일 DB → 상품·서비스로 이어지는 자동판매 퍼널 구조 이해하기",
        "리드마그넷과 무료자료를 활용해 관심 고객을 모으는 방법 이해하기",
        "이메일 DB를 활용한 후속 콘텐츠와 관계 형성 구조 설계하기",
        "전자책·강의·상담·디지털서비스 등 내 상품으로 자연스럽게 연결하는 흐름 만들기",
        "반복되는 안내·신청·자료 전달 업무를 자동화할 수 있는 기본 구조 이해하기",
        "이후 Make, n8n, API, 이메일 자동화 등으로 확장할 수 있는 방향 살펴보기"
      ],
      result: "나만의 1인 비즈니스 자동판매 시스템 설계"
    }
  ];

  // 퍼널 흐름 시각화 단계 데이터
  const funnelSteps = [
    {
      step: "01",
      code: "CONTENT",
      title: "콘텐츠",
      desc: "블로그·SNS·스레드·유튜브 등\n관심을 만드는 콘텐츠"
    },
    {
      step: "02",
      code: "LEAD MAGNET",
      title: "무료자료",
      desc: "체크리스트·미니 전자책·가이드 등\n무료 제공 자료"
    },
    {
      step: "03",
      code: "FORM",
      title: "신청폼",
      desc: "신청폼을 통한\n관심 고객 정보 수집"
    },
    {
      step: "04",
      code: "DB",
      title: "이메일 DB",
      desc: "다시 만날 수 있는\n고객 자산 축적"
    },
    {
      step: "05",
      code: "FOLLOW-UP",
      title: "후속 콘텐츠",
      desc: "이메일·콘텐츠를 통한\n신뢰 형성"
    },
    {
      step: "06",
      code: "OFFER",
      title: "상품·서비스",
      desc: "전자책·강의·상담·\n서비스로 연결"
    }
  ];

  // 실제 적용 예시 3개 데이터
  const funnelExamples = [
    {
      label: "예시 01",
      category: "전자책 판매",
      flow: ["스레드 콘텐츠", "무료 미니북", "이메일 DB", "본 전자책"]
    },
    {
      label: "예시 02",
      category: "강의 모집",
      flow: ["블로그·유튜브", "무료 체크리스트", "개강 알림", "원데이·정규과정"]
    },
    {
      label: "예시 03",
      category: "상담·코칭·서비스",
      flow: ["무료 테스트", "결과 자료", "이메일 후속 콘텐츠", "유료 서비스"]
    }
  ];

  // 1인 비즈니스 시스템 6단계 데이터
  const businessSystemSteps = [
    {
      step: "01",
      keyword: "IDEA & TARGET",
      shortKey: "01 IDEA",
      title: "아이템과 타깃 정하기",
      desc: "내 경험·지식·서비스 중 무엇을 상품화할 것인지 정리합니다.",
      bullets: [
        "내가 잘 아는 것",
        "고객이 필요로 하는 것",
        "실제 서비스로 만들 수 있는 것",
        "누구에게 판매할 것인지"
      ],
      result: "나의 서비스 아이템 + 핵심 타깃"
    },
    {
      step: "02",
      keyword: "BUILD",
      shortKey: "02 BUILD",
      title: "서비스 만들기",
      desc: "아이디어를 실제로 사용할 수 있는 디지털 서비스 형태로 구현합니다.",
      examples: [
        "브랜드 소개 페이지",
        "테스트형 서비스",
        "상담형 서비스",
        "간단한 웹도구",
        "콘텐츠형 웹서비스",
        "디지털 상품"
      ],
      result: "나만의 서비스 1개"
    },
    {
      step: "03",
      keyword: "SALES PAGE",
      shortKey: "03 SALES",
      title: "판매 페이지와 신청 구조 만들기",
      desc: "서비스를 만들었다면 고객이 내용을 이해하고 신청할 수 있는 흐름이 필요합니다.",
      bullets: [
        "랜딩페이지",
        "서비스 소개",
        "CTA (행동 유도)",
        "신청폼",
        "문의",
        "결제 또는 신청 동선"
      ],
      result: "판매페이지 + 신청 구조"
    },
    {
      step: "04",
      keyword: "TRAFFIC",
      shortKey: "04 TRAFFIC",
      title: "콘텐츠 유입 만들기",
      desc: "좋은 서비스를 만들어도 사람이 찾아오지 않으면 판매가 일어나지 않습니다.",
      trafficText: "블로그, 스레드, 유튜브, SNS 등 나에게 맞는 콘텐츠 채널을 선택하고 콘텐츠에서 서비스로 이동하는 흐름을 설계합니다.",
      result: "콘텐츠 유입 전략"
    },
    {
      step: "05",
      keyword: "LEAD & DB",
      shortKey: "05 LEAD",
      title: "DB와 무료자료 연결",
      desc: "처음 방문한 사람이 바로 구매하지 않아도 다시 만날 수 있는 구조를 만듭니다.",
      leadFlow: {
        sources: ["무료 체크리스트", "미니 전자책", "가이드", "무료 테스트", "샘플 자료"],
        form: "신청폼",
        db: "이메일 또는 고객 DB"
      },
      result: "리드마그넷 + 고객 DB 수집 구조"
    },
    {
      step: "06",
      keyword: "AUTOMATION",
      shortKey: "06 AUTOMATION",
      title: "자동판매·운영 시스템 만들기",
      desc: "모아진 고객과 지속적으로 연결될 수 있도록 반복되는 업무와 판매 흐름을 자동화 가능한 구조로 설계합니다.",
      automationItems: [
        "무료자료 자동 전달",
        "후속 이메일",
        "상품 안내",
        "신청 안내",
        "고객 관리",
        "반복 업무 자동화",
        "기존 고객 재접점"
      ],
      futureExpansion: ["Make", "n8n", "API", "이메일 자동화", "CRM"],
      result: "나만의 자동판매·운영 시스템 설계"
    }
  ];

  // 6주 후 최종 4대 핵심 결과물
  const finalDeliverables = [
    { num: "01", title: "내 서비스 1개", desc: "실제 사용할 수 있는 완성형 디지털 서비스" },
    { num: "02", title: "판매페이지", desc: "고객이 이해하고 신청하는 랜딩·신청 동선" },
    { num: "03", title: "고객유입 퍼널", desc: "콘텐츠·무료자료·DB로 연결되는 유입 구조" },
    { num: "04", title: "자동화 운영 구조", desc: "반복 업무를 줄이고 지속되는 1인 시스템" }
  ];

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
          <div
            className="relative p-8 md:p-16 lg:p-20 rounded-[3rem] border border-white/[0.05] shadow-[0_40px_100px_rgba(0,0,0,0.6)] overflow-hidden"
            style={{ background: "linear-gradient(180deg, rgba(18,28,36,0.98) 0%, rgba(9,9,9,1) 100%)" }}
          >
            <Reveal>
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
            </Reveal>

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

              {/* ──────────────────────────────────────────────────────────
                  신규 5~6주차 확장 섹션 (1인 비즈니스 운영·자동판매 퍼널)
                  ────────────────────────────────────────────────────────── */}
              <div className="mt-20 md:mt-28 pt-16 md:pt-20 border-t border-white/[0.08]">
                {/* 6. 과정 전체 흐름 설명 브릿지 메시지 */}
                <Reveal>
                  <div className="relative p-8 md:p-12 lg:p-14 rounded-[2.5rem] bg-gradient-to-br from-[#121c24] via-[#0d161e] to-[#090909] border border-[rgba(94,169,221,0.22)] text-center mb-16 md:mb-20 overflow-hidden shadow-2xl">
                    <div
                      className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 blur-[140px] opacity-15 pointer-events-none"
                      style={{ backgroundColor: WATER_BLUE }}
                    ></div>
                    <div
                      className="absolute -bottom-24 right-10 w-80 h-80 blur-[130px] opacity-10 pointer-events-none"
                      style={{ backgroundColor: WATER_GOLD }}
                    ></div>

                    <div className="relative z-10 max-w-3xl mx-auto">
                      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-[rgba(226,183,116,0.3)] mb-6">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#E2B774] animate-pulse"></span>
                        <span className="course-caption uppercase tracking-[0.25em] font-mono text-[#E2B774] font-semibold text-xs">
                          6-Week Expansion • Business Funnel
                        </span>
                      </div>

                      <h3 className="course-section-title font-display text-white mb-6 leading-tight italic">
                        만드는 것에서 <span style={{ color: WATER_BLUE }}>끝나지 않습니다</span>
                      </h3>

                      <p className="course-body text-[#BFBFBF] font-light leading-relaxed mb-6">
                        아이디어를 서비스로 만들고, <br className="md:hidden" />
                        웹에 배포하고, <br className="md:hidden" />
                        사람을 불러오고, <br />
                        관심 고객을 모으고, <br className="md:hidden" />
                        상품과 서비스로 연결하는 것까지.
                      </p>

                      <div className="w-16 h-[1px] mx-auto mb-6" style={{ backgroundColor: `${WATER_BLUE}40` }}></div>

                      <p className="course-hero-sub text-white font-medium">
                        Water 과정은 <span style={{ color: WATER_LIGHT }}>'서비스 제작'</span>에서 <br className="md:hidden" />
                        <span style={{ color: WATER_GOLD }}>'1인 비즈니스 운영 구조'</span>까지 확장합니다.
                      </p>
                    </div>
                  </div>
                </Reveal>

                {/* Part 3 헤더 */}
                <div className="flex items-center gap-6 md:gap-8 mb-12">
                  <div className="h-[1px] flex-1" style={{ background: `linear-gradient(to right, transparent, ${WATER_BLUE}33, ${WATER_GOLD}33)` }}></div>
                  <h3 className="course-mid-title font-display tracking-[0.1em] px-4 md:px-6 italic text-center" style={{ color: WATER_LIGHT }}>
                    Part 3. <span className="text-white font-normal">1인 비즈니스 운영과 자동판매 퍼널</span>
                  </h3>
                  <div className="h-[1px] flex-1" style={{ background: `linear-gradient(to left, transparent, ${WATER_BLUE}33, ${WATER_GOLD}33)` }}></div>
                </div>

                {/* 2 & 3. 5주차 및 6주차 커리큘럼 카드 */}
                <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-20 md:mb-24">
                  {extendedCurriculum.map((item, i) => (
                    <Reveal key={i} delayMs={i * 150} slideFrom="bottom">
                      <div className="group relative p-8 md:p-10 rounded-[2.5rem] border border-white/[0.05] transition-all duration-700 shadow-[0_20px_50px_rgba(0,0,0,0.4)] flex flex-col h-full bg-gradient-to-br from-[#121c24] to-[#0c1218] hover:border-[rgba(94,169,221,0.35)]">
                        <div
                          className="absolute top-0 left-0 w-full h-1 opacity-0 group-hover:opacity-100 transition-opacity"
                          style={{
                            background: i === 1
                              ? `linear-gradient(to right, transparent, ${WATER_GOLD}66, transparent)`
                              : `linear-gradient(to right, transparent, ${WATER_BLUE}66, transparent)`
                          }}
                        ></div>

                        <div className="flex items-center justify-between mb-4">
                          <div
                            className="course-mid-title font-display font-bold tracking-tighter"
                            style={{ color: i === 1 ? `${WATER_GOLD}B3` : `${WATER_BLUE}B3` }}
                          >
                            {item.week}
                          </div>
                          <span
                            className="course-caption font-mono uppercase px-3 py-1 rounded-full bg-white/[0.03] border text-xs"
                            style={{
                              borderColor: i === 1 ? "rgba(226,183,116,0.3)" : "rgba(94,169,221,0.25)",
                              color: i === 1 ? WATER_GOLD : WATER_BLUE
                            }}
                          >
                            {item.badge}
                          </span>
                        </div>

                        <h4 className="course-card-title font-bold mb-6 text-white group-hover:text-[#99D5F9] transition-colors leading-tight">
                          {item.summary}
                        </h4>

                        <ul className="space-y-4 mb-10 flex-1">
                          {item.details.map((detail, idx) => (
                            <li key={idx} className="flex items-start gap-4 text-[#BFBFBF] group-hover:text-white transition-colors course-body">
                              <span
                                className="text-xs mt-1.5"
                                style={{ color: i === 1 ? WATER_GOLD : WATER_BLUE }}
                              >
                                ✦
                              </span>
                              <span className="leading-[1.7] font-light">{detail}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="pt-6 border-t border-white/[0.05] flex items-center justify-between">
                          <span
                            className="course-body font-bold italic tracking-wide"
                            style={{ color: i === 1 ? WATER_GOLD : WATER_BLUE }}
                          >
                            {item.result}
                          </span>
                          <span
                            className="text-xl group-hover:translate-x-2 transition-transform duration-500"
                            style={{ color: i === 1 ? `${WATER_GOLD}66` : `${WATER_BLUE}66` }}
                          >
                            →
                          </span>
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </div>

                {/* 4. 퍼널 흐름 시각화 */}
                <Reveal delayMs={200}>
                  <div className="p-8 md:p-12 lg:p-14 rounded-[2.5rem] bg-gradient-to-br from-[#101921] to-[#0a0f14] border border-white/[0.06] shadow-2xl mb-16 md:mb-20 relative overflow-hidden">
                    <div
                      className="absolute top-0 right-0 w-80 h-80 blur-[130px] opacity-10 pointer-events-none"
                      style={{ backgroundColor: WATER_BLUE }}
                    ></div>

                    <div className="text-center mb-12 md:mb-14">
                      <span
                        className="course-caption tracking-[0.35em] uppercase mb-3 block font-mono font-semibold"
                        style={{ color: WATER_BLUE }}
                      >
                        SOLO BUSINESS AUTOMATION
                      </span>
                      <h3 className="course-mid-title font-display text-white italic leading-tight">
                        내가 일하지 않는 시간에도 <br />
                        <span style={{ color: WATER_LIGHT }}>콘텐츠와 서비스가 연결되는 구조</span>
                      </h3>
                      <p className="course-caption text-[#A0A0A0] font-light mt-4 max-w-xl mx-auto">
                        디지털 자산과 자동판매 퍼널이 연결되어 반복 업무를 줄이고 고객과 신뢰를 쌓아가는 현실적인 6단계 흐름
                      </p>
                    </div>

                    {/* 가로형 / 단계형 흐름도 */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4 relative">
                      {funnelSteps.map((step, idx) => (
                        <div key={idx} className="relative flex flex-col">
                          <div className="p-5 md:p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-[rgba(94,169,221,0.35)] transition-all duration-300 h-full flex flex-col justify-between group">
                            <div>
                              <div className="flex items-center justify-between mb-3">
                                <span className="course-caption font-mono text-[11px] px-2 py-0.5 rounded bg-white/[0.04] text-white/50">
                                  {step.step}
                                </span>
                                <span className="text-xs" style={{ color: idx >= 4 ? WATER_GOLD : WATER_BLUE }}>
                                  ✦
                                </span>
                              </div>
                              <div
                                className="course-caption font-mono font-semibold text-[11px] tracking-wider mb-1"
                                style={{ color: idx >= 4 ? WATER_GOLD : WATER_BLUE }}
                              >
                                {step.code}
                              </div>
                              <div className="text-base font-bold text-white mb-3 group-hover:text-[#99D5F9] transition-colors">
                                {step.title}
                              </div>
                            </div>
                            <div className="text-xs text-[#BFBFBF] font-light leading-relaxed whitespace-pre-line pt-3 border-t border-white/[0.04]">
                              {step.desc}
                            </div>
                          </div>

                          {/* 화살표 (마지막 아이템 제외, 데스크톱 가로 연결 표시) */}
                          {idx < funnelSteps.length - 1 && (
                            <div className="hidden lg:flex absolute -right-2.5 top-1/2 -translate-y-1/2 z-10 text-white/30 text-sm pointer-events-none">
                              →
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </Reveal>

                {/* ──────────────────────────────────────────────────────────
                    [추가] 1인 비즈니스 시스템 6단계 & 최종 결과물 강조
                    ────────────────────────────────────────────────────────── */}
                <div className="mb-20 md:mb-24">
                  {/* 섹션 헤더 */}
                  <Reveal delayMs={100}>
                    <div className="text-center mb-14 md:mb-16">
                      <span
                        className="course-caption tracking-[0.35em] uppercase mb-3 block font-mono font-semibold"
                        style={{ color: WATER_GOLD }}
                      >
                        SOLO BUSINESS SYSTEM
                      </span>
                      <h3 className="course-section-title font-display text-white mb-6 leading-tight italic">
                        하나의 아이디어가 <br />
                        <span style={{ color: WATER_BLUE }}>팔리는 서비스와 운영 시스템</span>이 되기까지
                      </h3>
                      <div className="max-w-2xl mx-auto space-y-2 course-body text-[#BFBFBF] font-light leading-relaxed">
                        <p>
                          단순히 웹서비스 하나를 만드는 데서 끝나지 않습니다.
                        </p>
                        <p className="text-white/90 font-normal">
                          내가 가진 경험과 지식을 실제 서비스로 만들고, <br className="hidden sm:inline" />
                          고객이 들어오는 길을 설계하고, <br className="hidden sm:inline" />
                          판매와 운영이 반복될 수 있는 구조까지 연결합니다.
                        </p>
                      </div>
                    </div>
                  </Reveal>

                  {/* 6단계 카드 그리드 (2열 카드형, 스크롤하며 발전하는 흐름) */}
                  <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-16 md:mb-20">
                    {businessSystemSteps.map((step, idx) => (
                      <Reveal key={idx} delayMs={idx * 120} slideFrom="bottom">
                        <div className="group relative p-8 md:p-9 rounded-[2rem] bg-gradient-to-br from-[#121c24] to-[#0c1218] border border-white/[0.05] hover:border-[rgba(94,169,221,0.35)] transition-all duration-500 shadow-xl flex flex-col justify-between h-full">
                          {/* 상단 은은한 호버 라인 */}
                          <div
                            className="absolute top-0 left-0 w-full h-1 opacity-0 group-hover:opacity-100 transition-opacity rounded-t-[2rem]"
                            style={{
                              background: idx >= 4
                                ? `linear-gradient(to right, transparent, ${WATER_GOLD}80, transparent)`
                                : `linear-gradient(to right, transparent, ${WATER_BLUE}80, transparent)`
                            }}
                          ></div>

                          <div>
                            {/* 상단 번호 & 영문 키워드 */}
                            <div className="flex items-center justify-between mb-4">
                              <span
                                className="course-caption font-mono font-bold px-3 py-1 rounded-full text-xs"
                                style={{
                                  backgroundColor: idx >= 4 ? `${WATER_GOLD}15` : `${WATER_BLUE}15`,
                                  color: idx >= 4 ? WATER_GOLD : WATER_BLUE,
                                  border: `1px solid ${idx >= 4 ? `${WATER_GOLD}30` : `${WATER_BLUE}30`}`
                                }}
                              >
                                {step.shortKey}
                              </span>
                              <span className="course-caption text-white/30 font-mono text-xs">
                                {step.keyword}
                              </span>
                            </div>

                            {/* 단계 제목 & 설명 */}
                            <h4 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-[#99D5F9] transition-colors leading-snug">
                              {step.title}
                            </h4>
                            <p className="text-sm text-[#BFBFBF] font-light leading-relaxed mb-6">
                              {step.desc}
                            </p>

                            {/* 단계별 맞춤형 세부 내용 */}
                            {/* 01: 아이템과 타깃 정하기 불릿 */}
                            {step.bullets && (
                              <ul className="space-y-2.5 mb-8">
                                {step.bullets.map((bullet, bIdx) => (
                                  <li key={bIdx} className="flex items-center gap-2.5 text-xs text-[#D0D0D0] font-light">
                                    <span className="text-xs" style={{ color: WATER_BLUE }}>•</span>
                                    <span>{bullet}</span>
                                  </li>
                                ))}
                              </ul>
                            )}

                            {/* 02: 서비스 만들기 예시 태그 */}
                            {step.examples && (
                              <div className="mb-8">
                                <div className="course-caption text-white/40 font-mono text-[11px] mb-2.5 uppercase">
                                  구현 예시
                                </div>
                                <div className="flex flex-wrap gap-2">
                                  {step.examples.map((ex, eIdx) => (
                                    <span
                                      key={eIdx}
                                      className="px-2.5 py-1 rounded-lg bg-white/[0.03] border border-white/[0.06] text-xs text-[#BFBFBF] font-light"
                                    >
                                      {ex}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            )}

                            {/* 04: 콘텐츠 유입 전략 텍스트 */}
                            {step.trafficText && (
                              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.04] mb-8">
                                <p className="text-xs text-[#C8C8C8] font-light leading-relaxed">
                                  {step.trafficText}
                                </p>
                              </div>
                            )}

                            {/* 05: 리드 & DB 플로우 */}
                            {step.leadFlow && (
                              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] space-y-2 mb-8 text-center">
                                <div className="text-xs text-[#D8D8D8] font-light leading-relaxed">
                                  {step.leadFlow.sources.join(" · ")}
                                </div>
                                <div className="text-xs" style={{ color: WATER_BLUE }}>↓</div>
                                <div className="inline-block px-3 py-1 rounded-md bg-white/[0.04] text-xs font-medium text-white border border-white/10">
                                  {step.leadFlow.form}
                                </div>
                                <div className="text-xs" style={{ color: WATER_GOLD }}>↓</div>
                                <div className="text-xs font-semibold" style={{ color: WATER_GOLD }}>
                                  {step.leadFlow.db}
                                </div>
                              </div>
                            )}

                            {/* 06: 자동판매 운영 시스템 & 확장 */}
                            {step.automationItems && (
                              <div className="space-y-4 mb-8">
                                <div>
                                  <div className="course-caption text-white/40 font-mono text-[11px] mb-2 uppercase">
                                    자동화 영역
                                  </div>
                                  <div className="grid grid-cols-2 gap-1.5">
                                    {step.automationItems.map((item, aIdx) => (
                                      <div key={aIdx} className="flex items-center gap-1.5 text-xs text-[#C0C0C0] font-light">
                                        <span className="text-[10px]" style={{ color: WATER_GOLD }}>✦</span>
                                        <span>{item}</span>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                                {step.futureExpansion && (
                                  <div className="pt-3 border-t border-white/[0.04]">
                                    <span className="course-caption text-white/40 font-mono text-[11px] block mb-1.5 uppercase">
                                      향후 확장 도구
                                    </span>
                                    <div className="flex flex-wrap gap-1.5">
                                      {step.futureExpansion.map((tool, tIdx) => (
                                        <span
                                          key={tIdx}
                                          className="px-2 py-0.5 rounded bg-white/[0.03] text-[11px] font-mono text-[#E2B774] border border-[#E2B774]/20"
                                        >
                                          {tool}
                                        </span>
                                      ))}
                                    </div>
                                  </div>
                                )}
                              </div>
                            )}
                          </div>

                          {/* 하단 결과물 뱃지 박스 */}
                          <div className="pt-4 border-t border-white/[0.05] flex items-center justify-between">
                            <span className="course-caption text-white/40 text-xs">결과물</span>
                            <span
                              className="text-xs md:text-sm font-semibold italic"
                              style={{ color: idx >= 4 ? WATER_GOLD : WATER_BLUE }}
                            >
                              {step.result}
                            </span>
                          </div>
                        </div>
                      </Reveal>
                    ))}
                  </div>

                  {/* 최종 결과물 강조 (FINAL BUSINESS SYSTEM) */}
                  <Reveal delayMs={200}>
                    <div className="relative p-8 md:p-12 lg:p-14 rounded-[2.5rem] bg-gradient-to-br from-[#121c24] via-[#0d161e] to-[#0a0f14] border border-[rgba(226,183,116,0.25)] shadow-2xl text-center overflow-hidden">
                      <div
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] blur-[150px] opacity-10 pointer-events-none"
                        style={{ backgroundColor: WATER_GOLD }}
                      ></div>

                      <div className="relative z-10 max-w-4xl mx-auto">
                        <span
                          className="course-caption tracking-[0.35em] uppercase mb-3 block font-mono font-semibold text-xs"
                          style={{ color: WATER_GOLD }}
                        >
                          FINAL BUSINESS SYSTEM
                        </span>
                        <h3 className="course-mid-title font-display text-white mb-8 leading-tight italic">
                          6주 후, 하나의 서비스가 <br />
                          <span style={{ color: WATER_GOLD }}>하나의 비즈니스 구조</span>가 됩니다.
                        </h3>

                        {/* 4대 결과물 박스 */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 text-left">
                          {finalDeliverables.map((item, idx) => (
                            <div
                              key={idx}
                              className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-[rgba(226,183,116,0.35)] transition-all duration-300 group"
                            >
                              <span
                                className="course-caption font-mono font-bold text-xs block mb-2"
                                style={{ color: WATER_GOLD }}
                              >
                                {item.num}
                              </span>
                              <div className="text-base font-bold text-white mb-1.5 group-hover:text-[#F5C26B] transition-colors">
                                {item.title}
                              </div>
                              <p className="text-xs text-[#A0A0A0] font-light leading-relaxed">
                                {item.desc}
                              </p>
                            </div>
                          ))}
                        </div>

                        <div className="w-16 h-[1px] mx-auto mb-6" style={{ backgroundColor: `${WATER_GOLD}40` }}></div>

                        <p className="course-caption text-[#D0D0D0] font-light leading-relaxed max-w-2xl mx-auto">
                          아이디어만 남기는 것이 아니라 <br />
                          <span className="text-white font-medium">만들고, 보여주고, 사람을 모으고, 판매하고, 반복해서 운영할 수 있는</span> <br />
                          <strong className="text-white font-semibold">'나만의 1인 비즈니스 시스템'</strong>을 설계합니다.
                        </p>
                      </div>
                    </div>
                  </Reveal>
                </div>

                {/* 5. 실제 적용 예시 (사례 카드 3개) */}
                <Reveal delayMs={300}>
                  <div>
                    <div className="text-center mb-8">
                      <span className="course-caption uppercase tracking-[0.25em] text-[#89CFF0]/80 font-mono text-xs block mb-2">
                        PRACTICAL EXAMPLES
                      </span>
                      <h4 className="course-card-title font-bold text-white mb-2">
                        실제 적용 예시
                      </h4>
                      <p className="course-caption text-[#A0A0A0] font-light max-w-lg mx-auto">
                        위 6단계 시스템이 실제 비즈니스 모델(전자책·강의·상담)에서 어떻게 구현되는지 살펴보세요
                      </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                      {funnelExamples.map((ex, idx) => (
                        <div
                          key={idx}
                          className="p-7 rounded-[2rem] bg-gradient-to-br from-[#121c24] to-[#0c1218] border border-white/[0.05] hover:border-[rgba(94,169,221,0.3)] transition-all duration-500 shadow-lg flex flex-col justify-between"
                        >
                          <div>
                            <div className="flex items-center justify-between mb-4">
                              <span className="course-caption font-mono font-semibold px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.06] text-[#E2B774] text-xs">
                                {ex.label}
                              </span>
                              <span className="course-caption text-white/40 font-mono text-xs">
                                Case Study
                              </span>
                            </div>

                            <h5 className="text-lg font-bold text-white mb-6">
                              {ex.category}
                            </h5>

                            <div className="space-y-3">
                              {ex.flow.map((item, fIdx) => (
                                <div key={fIdx}>
                                  <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                                    <span
                                      className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-mono font-bold flex-shrink-0"
                                      style={{
                                        backgroundColor: fIdx === ex.flow.length - 1 ? `${WATER_GOLD}26` : `${WATER_BLUE}1A`,
                                        color: fIdx === ex.flow.length - 1 ? WATER_GOLD : WATER_BLUE
                                      }}
                                    >
                                      {fIdx + 1}
                                    </span>
                                    <span
                                      className={`course-caption font-light ${
                                        fIdx === ex.flow.length - 1 ? "text-white font-medium" : "text-[#BFBFBF]"
                                      }`}
                                    >
                                      {item}
                                    </span>
                                  </div>
                                  {fIdx < ex.flow.length - 1 && (
                                    <div className="text-center py-1 text-white/20 text-xs">
                                      ↓
                                    </div>
                                  )}
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="mt-6 pt-4 border-t border-white/[0.04] text-center">
                            <span className="course-caption text-white/50 text-xs font-light">
                              {ex.category} 자동판매 퍼널 흐름
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </Reveal>

              </div>

            </div>
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

      {/* 수강 취소 및 환불 안내 공통 섹션 */}
      <CourseRefundPolicySection />
    </div>
  );
}

