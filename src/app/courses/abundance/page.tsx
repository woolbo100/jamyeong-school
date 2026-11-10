"use client";

import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";

export default function AbundanceCoursePage() {
  // 풍요(Abundance & Ether) 테마 색상 (따뜻하고 기품 있는 샴페인 골드 & 에테르 오로라)
  const ABUNDANCE_GOLD = "#E2C37A";
  const ABUNDANCE_LIGHT = "#F5E6C8";
  const ABUNDANCE_AMBER = "#D4AF37";

  // 4단계 상세 커리큘럼 로드맵 예시 데이터
  const roadmapData = [
    {
      part: "Part 1",
      title: "나의 중심을 세우는 풍요 마인드",
      details: [
        "돈·성취·인정에 대한 나의 신념 돌아보기",
        "불안과 비교가 의사결정에 미치는 영향 살펴보기",
        "나의 전문성과 제공 가치 정리하기",
        "건강한 보상과 지속 가능한 일의 기준 세우기"
      ],
      result: "나의 가치와 풍요 실천 기준"
    },
    {
      part: "Part 2",
      title: "사람의 가능성을 여는 마인드 코칭",
      details: [
        "상대의 이야기를 듣는 경청 연습",
        "자기이해를 돕는 질문 만들기",
        "실천 가능한 목표와 행동 정리하기",
        "코칭의 역할과 활동 범위 이해하기"
      ],
      result: "자기이해 질문지와 코칭 대화 구성안"
    },
    {
      part: "Part 3",
      title: "배움을 이끄는 강사 리더십",
      details: [
        "자명스쿨 5원소 성장 체계 이해하기",
        "나의 전문성을 교육 주제로 구체화하기",
        "초보 학습자를 위한 단계별 수업 설계하기",
        "짧은 시연 강의와 피드백 연습하기"
      ],
      result: "나만의 수업 기획안과 시연 강의안"
    },
    {
      part: "Part 4",
      title: "함께 성장하는 교육 공간 설계",
      details: [
        "교육 살롱·스터디·커뮤니티 운영 형태 살펴보기",
        "대상·주제·진행 방식·운영 원칙 정하기",
        "모집부터 참여 안내와 후속 활동까지 설계하기",
        "협회 연계 강사 활동과 과정 운영 절차 알아보기"
      ],
      result: "교육 커뮤니티 또는 프로그램 운영 초안"
    }
  ];

  const part1And2 = roadmapData.slice(0, 2);
  const part3And4 = roadmapData.slice(2, 4);

  // 이 과정이 특별한 이유 (3가지 핵심 차별점)
  const features = [
    {
      num: "01",
      title: "내면의 정렬 — Abundance Code",
      sub: "불안에 끌려가기보다, 나의 가치와 기준에서 시작합니다.",
      desc: "돈·성취·인정에 대한 생각을 돌아보고, 내가 제공하는 가치와 건강한 보상의 관계를 정리합니다. 자신의 시간과 에너지를 존중하면서도 타인과 협력하고 나눌 수 있는 리더십의 기반을 다집니다."
    },
    {
      num: "02",
      title: "협회 연계 강사 성장 경로",
      sub: "배운 내용을 나누고 가르치는 다음 단계를 준비합니다.",
      desc: "한국디지털마인드코칭협회의 운영 기준에 따른 자격과정과 강사 활동 경로를 살펴보고, 교육자로서 필요한 수업 설계·진행·피드백 역량을 기릅니다. 자격 취득과 강사 위촉, 과정 운영 자격은 각각의 기준과 절차에 따라 안내합니다."
    },
    {
      num: "03",
      title: "살롱 & 교육 커뮤니티 운영",
      sub: "사람들이 다시 찾아와 함께 성장하는 배움의 공간을 설계합니다.",
      desc: "소규모 교육 살롱, 스터디, 워크숍 등 나의 전문성과 운영 여건에 맞는 형태를 기획합니다. 참여자의 경험과 운영자의 지속 가능성을 함께 고려한 교육 비즈니스의 기본 구조를 배웁니다."
    }
  ];

  return (
    <div className="bg-[#090909] min-h-screen text-white font-sans selection:bg-[#E2C37A]/30 overflow-x-hidden">
      
      {/* 1. Hero Section (상단 타이틀 영역) */}
      <section className="relative pt-24 pb-20 lg:pt-28 lg:pb-24 px-6">
        {/* Aura Background (부드러운 황금빛과 에테르 오라) */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] blur-[160px] opacity-[0.09] pointer-events-none"
          style={{ backgroundColor: ABUNDANCE_GOLD }}
        ></div>
        <div 
          className="absolute top-[35%] left-[48%] -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] blur-[150px] opacity-[0.04] pointer-events-none"
          style={{ backgroundColor: "#FFFFFF" }}
        ></div>

        <div className="site-container relative z-10 text-center">
          <div className="max-w-5xl mx-auto">
            <Reveal>
              <div className="flex justify-center mb-8">
                <div className="relative w-20 h-20 md:w-28 md:h-28 group">
                  <Image 
                    src="/images/icon/ether.png" 
                    alt="Ether Icon" 
                    fill 
                    className="object-contain filter drop-shadow-[0_0_25px_rgba(226,195,122,0.35)] group-hover:scale-110 transition-transform duration-1000" 
                  />
                </div>
              </div>
              
              <div 
                className="course-caption tracking-[0.4rem] mb-4 uppercase font-display opacity-90 font-medium" 
                style={{ color: ABUNDANCE_GOLD }}
              >
                Ether Curriculum • 최고위 리더십 & 강사 양성
              </div>

              <h1 className="course-hero-title font-display mb-6 leading-tight tracking-tight italic">
                마음을 <span style={{ color: ABUNDANCE_GOLD }}>빛내다</span>
              </h1>

              <div className="mb-6">
                <span className="course-hero-sub font-light text-white/90 tracking-wide block mb-1">
                  리더십 & 마인드 코치 & 협회 강사 양성
                </span>
                <span className="course-caption tracking-[0.2em] text-[#E2C37A]/80 font-medium uppercase">
                  풍요 마인드 · Abundance Code
                </span>
              </div>

              <p className="course-mid-title text-white font-medium leading-relaxed max-w-3xl mx-auto mb-10">
                개인의 배움을 넘어, <br className="md:hidden" />
                <span style={{ color: ABUNDANCE_LIGHT }}>타인의 성장을 이끄는 마인드 리더로</span>
              </p>
            </Reveal>

            {/* 소개 문구 (과정의 철학을 전달하는 인용 박스) */}
            <Reveal delayMs={200}>
              <div className="max-w-2xl mx-auto p-8 md:p-10 rounded-[2rem] bg-gradient-to-br from-[#1a1712] to-[#121316] border border-[rgba(226,195,122,0.18)] mb-12 relative overflow-hidden group shadow-2xl">
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" 
                  style={{ backgroundColor: `${ABUNDANCE_GOLD}0D` }}
                ></div>
                <p className="relative z-10 course-quote text-[#D1D1D1] leading-relaxed font-light italic">
                  “진정한 풍요는 결핍을 채우려는 노력이 아니라, <br className="hidden md:block" />
                  내 안의 충만함이 흘러넘쳐 <br className="hidden md:block" />
                  <span className="text-white font-normal">세상과 연결되고 순환할 때</span> 비로소 완성됩니다.”
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
                  className="group relative overflow-visible h-14 w-full sm:w-64 px-8 flex items-center justify-center text-sm font-bold uppercase tracking-widest rounded-full bg-gradient-to-br from-[#8C6D37] to-[#4A3B22] text-white shadow-2xl transition-all duration-300 transform-gpu hover:-translate-y-[2px]"
                >
                  <span className="relative z-10 font-bold italic">👉 과정 안내 받기</span>
                  <span className="absolute -inset-2 bg-gradient-to-br from-[#8C6D37] to-[#4A3B22] opacity-0 blur-xl group-hover:opacity-45 transition-opacity duration-300 rounded-full" />
                </a>
                <button
                  className="group flex items-center gap-3 text-[#BFBFBF] hover:text-[#E2C37A] transition-all duration-300 course-caption tracking-widest uppercase border-b border-white/10 pb-1"
                  onClick={() => alert("PDF 안내 파일은 준비 중입니다. 잠시만 기다려 주세요!")}
                >
                  <span className="text-lg">📄</span> 과정 안내 PDF 보기
                </button>
              </div>
            </Reveal>
          </div>
        </div>

        {/* 상단 메인 비주얼 배너 영역 */}
        <div className="site-container mt-16 md:mt-20">
          <Reveal delayMs={600} slideFrom="bottom">
            <div className="relative aspect-[21/9] rounded-[3rem] overflow-hidden border border-white/[0.05] shadow-[0_30px_60px_rgba(0,0,0,0.5)] bg-gradient-to-br from-[#181510] via-[#101012] to-[#090909]">
              <Image 
                src="/images/main/ether.png" 
                alt="Abundance Mind & Ether Visual" 
                fill 
                className="object-cover opacity-60 mix-blend-screen scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090909] via-transparent to-transparent opacity-90"></div>
              <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 z-10 max-w-xl">
                <span 
                  className="inline-block text-xs uppercase tracking-[0.25em] px-4 py-1.5 rounded-full bg-white/[0.05] border border-white/10 mb-4 font-mono"
                  style={{ color: ABUNDANCE_GOLD }}
                >
                  5-Element Journey • Final Stage
                </span>
                <p className="course-hero-sub font-light text-white/90 leading-relaxed">
                  나를 이해하고 표현하던 배움의 여정이 <br />
                  <span className="font-medium text-white">타인을 밝히는 따뜻한 리더십</span>으로 확장됩니다.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2. 고민 공감 영역 (Earth 문제 제기 레이아웃) */}
      <section className="py-24 md:py-28 px-6 bg-[#090909]">
        <div className="site-container">
          <div className="grid lg:grid-cols-2 gap-16 md:gap-20 items-center">
            <Reveal>
              <h2 className="course-section-title font-display mb-10 leading-tight text-white">
                혹시 이런 갈증을 <br />
                <span style={{ color: ABUNDANCE_GOLD }}>느끼고 계신가요?</span>
              </h2>
              <div className="space-y-4">
                {[
                  "나 혼자만의 창작과 성장을 넘어, 더 큰 영향력을 발휘하고 싶습니다.",
                  "결핍과 불안에 쫓기기보다, 풍요와 신뢰를 바탕으로 나의 일을 이어가고 싶습니다.",
                  "자명스쿨의 5원소 시스템을 바탕으로 수강생의 성장을 돕는 리더가 되고 싶습니다.",
                  "협회와 연계한 강사 활동, 자격과정 및 교육 커뮤니티 운영으로 활동 범위를 넓히고 싶습니다."
                ].map((text, i) => (
                  <div 
                    key={i} 
                    className="flex items-center gap-4 p-6 rounded-2xl bg-gradient-to-br from-[#1a1712] to-[#121316] border border-white/[0.03] group transition-all duration-500 hover:border-[rgba(226,195,122,0.3)]"
                  >
                    <span className="text-[#E2C37A] text-xl">✦</span>
                    <p className="text-[#BFBFBF] course-body font-light leading-relaxed">{text}</p>
                  </div>
                ))}
              </div>

              {/* 마무리 강조 문구 */}
              <div className="mt-10 p-8 rounded-[2rem] bg-white/[0.02] border border-white/[0.05]">
                <p className="course-hero-sub leading-relaxed text-[#BFBFBF] font-light">
                  👉 이제 나의 전문성 위에 <br />
                  <span style={{ color: ABUNDANCE_GOLD }} className="font-medium underline underline-offset-8">
                    사람을 이끄는 리더십
                  </span>과 <br className="hidden md:block" />
                  <span className="text-white font-medium">함께 성장하는 풍요의 관점</span>을 더할 때입니다.
                </p>
              </div>
            </Reveal>

            {/* 우측 이미지/비주얼 영역 */}
            <Reveal delayMs={400}>
              <div className="relative aspect-square rounded-[3rem] overflow-hidden border border-white/[0.05] shadow-2xl group bg-gradient-to-br from-[#1a1712] to-[#121316] flex items-center justify-center p-8">
                <Image 
                  src="/images/elements/ether.png" 
                  alt="Abundance Mind Leadership" 
                  fill 
                  className="object-cover opacity-75 group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-transparent to-black/70"></div>
                <div className="relative z-10 text-center p-6 backdrop-blur-sm bg-black/30 rounded-3xl border border-white/10 max-w-sm">
                  <span className="course-caption uppercase tracking-[0.25em] block mb-2" style={{ color: ABUNDANCE_LIGHT }}>
                    Leadership with Warmth
                  </span>
                  <p className="text-white course-body font-light leading-relaxed">
                    권위와 경쟁 대신, <br />
                    <span className="font-medium text-white">사람의 속도와 가능성을 존중</span>하며 <br />
                    함께 성장하는 리더의 자리
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
          style={{ backgroundColor: ABUNDANCE_GOLD }}
        ></div>
        <div className="site-container relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <Reveal>
              <span 
                className="course-caption tracking-[0.4em] uppercase mb-6 block font-semibold opacity-80"
                style={{ color: ABUNDANCE_GOLD }}
              >
                Our Mission
              </span>
              <h2 className="course-section-title font-display mb-10 italic text-white leading-tight">
                내가 발견한 빛이 <br />
                <span style={{ color: ABUNDANCE_GOLD }}>누군가의 시작을 밝힐 수 있도록.</span>
              </h2>

              <div className="space-y-6 course-body font-light text-[#BFBFBF] leading-relaxed max-w-3xl mx-auto">
                <p>
                  내가 배움을 통해 얻은 변화와 자신감은 <br />
                  다른 사람의 가능성을 알아보는 힘이 됩니다.
                </p>
                <div className="w-[1px] h-10 mx-auto" style={{ backgroundColor: `${ABUNDANCE_GOLD}33` }}></div>
                <p className="text-white/90">
                  자명스쿨의 마지막 원소는 <br className="md:hidden" />
                  <span className="text-white font-medium">나의 성장을 타인의 성장으로 연결하는 과정</span>입니다.
                </p>
                <div className="p-6 rounded-[2rem] bg-gradient-to-br from-[#1a1712] to-[#121316] border border-white/[0.04] mt-10 text-center shadow-lg">
                  <p className="text-[#BFBFBF] font-light leading-relaxed course-caption">
                    가르치는 지식과 함께 <br />
                    <span style={{ color: ABUNDANCE_GOLD }} className="font-medium">듣고, 기다리고, 질문하고, 함께 실천하는 힘</span>을 기릅니다.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 4. 이 과정이 특별한 이유 (3가지 핵심 차별점) */}
      <section className="py-24 md:py-28 px-6 bg-[#090909]">
        <div className="site-container">
          <Reveal>
            <div className="text-center mb-16 md:mb-20">
              <span 
                className="course-caption tracking-[0.3em] uppercase mb-3 block font-semibold opacity-80"
                style={{ color: ABUNDANCE_GOLD }}
              >
                Core Distinctives
              </span>
              <h2 className="course-section-title font-display mb-4 text-white italic">
                이 과정이 특별한 이유
              </h2>
              <div className="w-20 h-[1px] mx-auto" style={{ backgroundColor: `${ABUNDANCE_GOLD}4D` }}></div>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {features.map((item, i) => (
              <Reveal key={i} delayMs={i * 150}>
                <div className="p-8 md:p-10 rounded-[2.5rem] bg-gradient-to-br from-[#1a1712] to-[#121316] border border-white/[0.04] h-full flex flex-col justify-between group hover:-translate-y-2 transition-all duration-700 hover:border-[rgba(226,195,122,0.3)] shadow-xl">
                  <div>
                    <div 
                      className="text-3xl font-display font-bold italic mb-4 opacity-40 group-hover:opacity-100 transition-opacity" 
                      style={{ color: ABUNDANCE_GOLD }}
                    >
                      {item.num}
                    </div>
                    <h3 className="course-card-title font-bold mb-2 text-white group-hover:text-[#E2C37A] transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="course-caption font-medium mb-4 text-[#E2C37A]/90">
                      {item.sub}
                    </p>
                    <p className="text-[#BFBFBF] course-caption font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <div className="w-10 h-[1px] mt-6" style={{ backgroundColor: `${ABUNDANCE_GOLD}33` }}></div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. 강의에서 배우는 내용 (Earth 4개 카드 그리드 구조) */}
      <section className="py-24 md:py-28 px-6 bg-[#0a0a0c]">
        <div className="site-container">
          <Reveal>
            <div className="text-center mb-16 md:mb-20">
              <span 
                className="course-caption tracking-[0.3em] uppercase mb-3 block font-semibold opacity-80"
                style={{ color: ABUNDANCE_GOLD }}
              >
                Key Learning Modules
              </span>
              <h2 className="course-section-title font-display mb-4 text-white">
                강의에서 배우는 내용
              </h2>
              <p className="course-hero-sub text-[#BFBFBF] font-light max-w-2xl mx-auto">
                자기 내면의 정렬부터 코칭, 강의 설계, 커뮤니티 운영까지 체계적으로 익힙니다
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "풍요 마인드와 자기 리더십",
                desc: "결핍과 불안의 패턴을 돌아보고, 나의 가치·보상·성장 기준을 정리합니다.",
                icon: "🌿"
              },
              {
                step: "02",
                title: "마인드 코칭의 기초",
                desc: "경청과 질문, 목표 설정과 실천 점검을 통해 상대가 자신의 답을 찾아가도록 돕습니다.",
                icon: "🧭"
              },
              {
                step: "03",
                title: "따뜻한 강의 설계와 진행",
                desc: "학습자의 눈높이에 맞는 설명, 단계별 실습, 참여와 피드백의 흐름을 설계합니다.",
                icon: "📖"
              },
              {
                step: "04",
                title: "커뮤니티와 교육 운영",
                desc: "나에게 맞는 교육 프로그램과 모임을 기획하고, 협회 연계 활동의 준비 과정을 이해합니다.",
                icon: "🤝"
              }
            ].map((card, i) => (
              <Reveal key={i} delayMs={i * 150}>
                <div className="p-8 md:p-10 rounded-[2.5rem] bg-gradient-to-br from-[#1a1712] to-[#121316] border border-white/[0.03] h-full flex flex-col justify-between group hover:-translate-y-2 transition-all duration-700 hover:border-[rgba(226,195,122,0.3)] shadow-lg">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-3xl">{card.icon}</span>
                      <span 
                        className="text-[11px] uppercase tracking-widest font-mono px-3 py-1 rounded-full bg-white/[0.03] border border-white/5"
                        style={{ color: ABUNDANCE_GOLD }}
                      >
                        STEP {card.step}
                      </span>
                    </div>
                    <h3 className="course-card-title font-bold mb-3 text-white leading-snug group-hover:text-[#E2C37A] transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-[#BFBFBF] leading-relaxed course-caption font-light">
                      {card.desc}
                    </p>
                  </div>
                  <div className="w-8 h-[1px] mt-6" style={{ backgroundColor: `${ABUNDANCE_GOLD}40` }}></div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. 상세 커리큘럼 초안 (단계별 로드맵 예시) */}
      <section className="py-24 md:py-28 px-6 bg-[#090909]">
        <div className="site-container">
          <Reveal>
            <div 
              className="relative p-8 md:p-16 rounded-[3rem] border border-white/[0.05] shadow-[0_40px_100px_rgba(0,0,0,0.6)] overflow-hidden"
              style={{ background: "linear-gradient(180deg, rgba(26,23,18,0.98) 0%, rgba(9,9,9,1) 100%)" }}
            >
              <div className="relative z-10 text-center mb-16 md:mb-20">
                <h2 className="course-section-title font-display mb-6 tracking-tight italic text-white leading-tight">
                  나를 채우는 성장에서 <br />
                  <span style={{ color: ABUNDANCE_GOLD }}>함께 빛나는 리더십으로</span>
                </h2>
                
                <div className="w-24 h-[1px] mx-auto mb-8" style={{ backgroundColor: `${ABUNDANCE_GOLD}4D` }}></div>
                
                <p className="course-hero-sub text-[#BFBFBF] font-light max-w-2xl mx-auto leading-relaxed mb-8">
                  자기 내면의 풍요 정렬부터 코칭 실습, <br />
                  <span className="text-white font-medium">강의 설계 및 커뮤니티 운영까지</span> 단계적으로 나아갑니다
                </p>

                {/* 단계별 로드맵 예시 안내 뱃지 */}
                <div className="inline-flex items-center px-6 py-2.5 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-md">
                  <span className="text-[#BFBFBF] course-caption tracking-widest font-light">
                    📌 단계별 로드맵 예시 • 총 기간 및 세부 회차는 모집 시 확정 안내됩니다
                  </span>
                </div>
              </div>

              {/* Part 1 & Part 2 */}
              <div className="mb-20">
                <div className="flex items-center gap-6 mb-12">
                  <div className="h-[1px] flex-1" style={{ background: `linear-gradient(to right, transparent, ${ABUNDANCE_GOLD}33)` }}></div>
                  <h3 className="course-mid-title font-display tracking-[0.1em] px-4 italic text-center" style={{ color: `${ABUNDANCE_GOLD}E6` }}>
                    Phase 1. <span className="text-white font-normal">풍요 마인드와 마인드 코칭</span>
                  </h3>
                  <div className="h-[1px] flex-1" style={{ background: `linear-gradient(to left, transparent, ${ABUNDANCE_GOLD}33)` }}></div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                  {part1And2.map((item, i) => (
                    <Reveal key={i} delayMs={i * 150} slideFrom="bottom">
                      <div className="group relative p-8 md:p-10 rounded-[2.5rem] border border-white/[0.04] transition-all duration-700 shadow-[0_20px_50px_rgba(0,0,0,0.4)] flex flex-col h-full bg-gradient-to-br from-[#1a1712] to-[#121316] hover:border-[rgba(226,195,122,0.3)]">
                        <div 
                          className="absolute top-0 left-0 w-full h-1 opacity-0 group-hover:opacity-100 transition-opacity" 
                          style={{ background: `linear-gradient(to right, transparent, ${ABUNDANCE_GOLD}66, transparent)` }}
                        ></div>
                        
                        <div className="text-3xl font-display font-bold mb-4 tracking-tighter" style={{ color: `${ABUNDANCE_GOLD}66` }}>
                          {item.part}
                        </div>
                        <h4 className="course-card-title font-bold mb-6 text-white group-hover:text-[#E2C37A] transition-colors leading-tight">
                          {item.title}
                        </h4>
                        
                        <ul className="space-y-4 mb-8 flex-1">
                          {item.details.map((detail, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-[#BFBFBF] group-hover:text-white transition-colors course-caption">
                              <span className="text-[#E2C37A] text-xs mt-1">✦</span>
                              <span className="font-light">{detail}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="pt-6 border-t border-white/[0.05] flex items-center justify-between">
                          <span className="font-bold course-body italic tracking-wide" style={{ color: ABUNDANCE_GOLD }}>
                            {item.result}
                          </span>
                          <span className="text-xl group-hover:translate-x-2 transition-transform duration-500" style={{ color: `${ABUNDANCE_GOLD}66` }}>
                            →
                          </span>
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>

              {/* Part 3 & Part 4 */}
              <div className="mb-12">
                <div className="flex items-center gap-6 mb-12">
                  <div className="h-[1px] flex-1" style={{ background: `linear-gradient(to right, transparent, ${ABUNDANCE_GOLD}33)` }}></div>
                  <h3 className="course-mid-title font-display tracking-[0.1em] px-4 italic text-center" style={{ color: `${ABUNDANCE_GOLD}E6` }}>
                    Phase 2. <span className="text-white font-normal">강사 리더십과 교육 공간 설계</span>
                  </h3>
                  <div className="h-[1px] flex-1" style={{ background: `linear-gradient(to left, transparent, ${ABUNDANCE_GOLD}33)` }}></div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                  {part3And4.map((item, i) => (
                    <Reveal key={i} delayMs={i * 150} slideFrom="bottom">
                      <div className="group relative p-8 md:p-10 rounded-[2.5rem] border border-white/[0.04] transition-all duration-700 shadow-[0_20px_50px_rgba(0,0,0,0.4)] flex flex-col h-full bg-gradient-to-br from-[#1a1712] to-[#121316] hover:border-[rgba(226,195,122,0.3)]">
                        <div 
                          className="absolute top-0 left-0 w-full h-1 opacity-0 group-hover:opacity-100 transition-opacity" 
                          style={{ background: `linear-gradient(to right, transparent, ${ABUNDANCE_GOLD}66, transparent)` }}
                        ></div>
                        
                        <div className="text-3xl font-display font-bold mb-4 tracking-tighter" style={{ color: `${ABUNDANCE_GOLD}66` }}>
                          {item.part}
                        </div>
                        <h4 className="course-card-title font-bold mb-6 text-white group-hover:text-[#E2C37A] transition-colors leading-tight">
                          {item.title}
                        </h4>
                        
                        <ul className="space-y-4 mb-8 flex-1">
                          {item.details.map((detail, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-[#BFBFBF] group-hover:text-white transition-colors course-caption">
                              <span className="text-[#E2C37A] text-xs mt-1">✦</span>
                              <span className="font-light">{detail}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="pt-6 border-t border-white/[0.05] flex items-center justify-between">
                          <span className="font-bold course-body italic tracking-wide" style={{ color: ABUNDANCE_GOLD }}>
                            {item.result}
                          </span>
                          <span className="text-xl group-hover:translate-x-2 transition-transform duration-500" style={{ color: `${ABUNDANCE_GOLD}66` }}>
                            →
                          </span>
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>

              {/* 커리큘럼 참고 사항 안내 */}
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05] text-center max-w-3xl mx-auto">
                <p className="course-caption text-[#BFBFBF] font-light leading-relaxed">
                  ※ 본 커리큘럼은 단계별 학습 흐름을 보여주는 초안 예시입니다. <br className="hidden md:block" />
                  실제 교육 기간, 회차 구성, 세부 실습 내용은 정식 모집 요강에서 확정 안내됩니다.
                </p>
              </div>

            </div>
          </Reveal>
        </div>
      </section>

      {/* 7. 수강 후 기대 변화 (Earth 4개 결과 그리드 레이아웃) */}
      <section className="py-24 md:py-28 px-6 bg-[#0a0a0c]">
        <div className="site-container">
          <Reveal>
            <div className="text-center mb-16 md:mb-20">
              <span 
                className="course-caption tracking-[0.3em] uppercase mb-3 block font-semibold opacity-80"
                style={{ color: ABUNDANCE_GOLD }}
              >
                Expected Outcomes
              </span>
              <h2 className="course-section-title font-display mb-6 text-white">
                이 과정을 통해 준비하는 다음 모습
              </h2>
              <div className="w-16 h-[1px] mx-auto" style={{ backgroundColor: `${ABUNDANCE_GOLD}33` }}></div>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
            {[
              "나의 가치와 보상에 대한 기준을 정리하고, 지속 가능한 활동 방향을 세웁니다.",
              "경청과 질문을 활용해 다른 사람의 자기이해와 실천을 돕는 기초 역량을 기릅니다.",
              "나의 경험과 전문성을 수업으로 구성하고 전달하는 방법을 익힙니다.",
              "교육 살롱이나 커뮤니티를 시작하기 위한 운영안을 마련합니다.",
              "협회 연계 활동에 필요한 조건과 준비 경로를 이해합니다."
            ].map((text, i) => (
              <Reveal key={i} delayMs={i * 120}>
                <div className="p-8 md:p-10 rounded-[2.5rem] bg-gradient-to-br from-[#1a1712] to-[#121316] border border-white/[0.03] flex items-start gap-5 group transition-all duration-500 hover:border-[rgba(226,195,122,0.3)] shadow-lg h-full">
                  <span 
                    className="w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0 group-hover:text-black transition-all mt-0.5 text-sm" 
                    style={{ backgroundColor: `${ABUNDANCE_GOLD}1A`, color: ABUNDANCE_GOLD }}
                  >
                    ✓
                  </span>
                  <p className="course-card-title text-[#BFBFBF] font-light leading-relaxed">
                    {text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          
          <Reveal delayMs={600}>
            <div className="mt-16 md:mt-20 text-center">
              <p className="course-quote font-display italic tracking-tight" style={{ color: ABUNDANCE_GOLD }}>
                “나의 성장 → <span className="text-white">타인의 가능성을 여는 마인드 리더</span>”
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 8. 자격 및 협회 활동 안내 (독립 섹션) */}
      <section className="py-24 md:py-28 px-6 bg-[#090909] border-t border-white/[0.03]">
        <div className="site-container">
          <Reveal>
            <div className="p-8 md:p-14 rounded-[3rem] bg-gradient-to-br from-[#181510] to-[#101012] border border-[rgba(226,195,122,0.15)] shadow-2xl relative overflow-hidden">
              <div 
                className="absolute top-0 right-0 w-80 h-80 blur-[120px] opacity-10 pointer-events-none"
                style={{ backgroundColor: ABUNDANCE_GOLD }}
              ></div>
              
              <div className="relative z-10 text-center max-w-3xl mx-auto">
                <span 
                  className="course-caption uppercase tracking-[0.25em] px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/10 mb-4 inline-block font-mono"
                  style={{ color: ABUNDANCE_GOLD }}
                >
                  Association Partnership
                </span>
                
                <h3 className="course-section-title font-display mb-6 text-white leading-tight italic">
                  배움을 넘어, <br className="md:hidden" />
                  <span style={{ color: ABUNDANCE_GOLD }}>교육자로 성장하는 길</span>
                </h3>

                <div className="space-y-4 course-body text-[#BFBFBF] font-light leading-relaxed text-left md:text-center">
                  <p>
                    본 과정과 연계되는 자격 및 강사 활동은 <br className="hidden md:block" />
                    <strong className="text-white font-medium">한국디지털마인드코칭협회</strong>의 해당 운영 기준에 따라 체계적으로 안내됩니다.
                  </p>
                  <p>
                    자격 취득, 강사 위촉, 자격과정 운영, 지부 활동은 각각의 요건과 심사·협약 절차가 적용될 수 있으며, <br className="hidden md:block" />
                    세부 사항은 정식 모집 시 별도로 안내해 드립니다.
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-white/[0.06] flex flex-wrap justify-center gap-3 course-caption text-white/50">
                  <span className="px-4 py-1.5 rounded-full bg-white/[0.02] border border-white/5">
                    기준에 따른 자격 안내
                  </span>
                  <span className="px-4 py-1.5 rounded-full bg-white/[0.02] border border-white/5">
                    교육자 역량 강화
                  </span>
                  <span className="px-4 py-1.5 rounded-full bg-white/[0.02] border border-white/5">
                    협회 네트워크 연계
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 9. 하단 브랜드 메시지 및 신청 안내 (Earth CTA 구조) */}
      <section className="py-28 md:py-36 px-6 text-center bg-gradient-to-b from-[#0a0a0c] to-[#090909] relative overflow-hidden border-t border-white/[0.03]">
        <div 
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-full opacity-10 pointer-events-none"
          style={{ background: `radial-gradient(circle at 50% 100%, ${ABUNDANCE_GOLD} 0%, transparent 70%)` }}
        ></div>

        <div className="site-container relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            {/* 마무리 메시지 */}
            <Reveal>
              <h2 className="course-section-title font-display mb-8 leading-tight italic text-white">
                나의 속도로 자라온 시간이 <br />
                <span style={{ color: ABUNDANCE_GOLD }}>이제 누군가의 성장을 비추는 빛이 됩니다.</span> <br />
                나를 채운 배움을, 함께 성장하는 힘으로 이어가세요.
              </h2>
            </Reveal>

            {/* 신청 안내 */}
            <Reveal delayMs={300}>
              <div className="mt-10 mb-12 p-6 md:p-8 rounded-3xl bg-white/[0.02] border border-white/[0.05] max-w-xl mx-auto">
                <p className="course-card-title text-white font-medium mb-2">
                  세부 커리큘럼과 모집 일정은 준비 중입니다.
                </p>
                <p className="course-caption text-[#BFBFBF] font-light">
                  수강 대상과 참여 절차는 모집 시 자세히 안내드립니다. <br />
                  궁금하신 점은 아래로 편하게 문의해 주세요.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
                <a
                  href="https://pf.kakao.com/_IxguMn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-visible h-16 w-full sm:w-80 px-8 flex items-center justify-center course-card-title font-bold tracking-[0.15em] rounded-full bg-gradient-to-br from-[#8C6D37] to-[#4A3B22] text-white shadow-2xl transition-all duration-300 transform-gpu hover:-translate-y-1"
                >
                  <span className="relative z-10 font-bold italic">👉 카카오톡 문의하기</span>
                  <span className="absolute -inset-2 bg-gradient-to-br from-[#8C6D37] to-[#4A3B22] opacity-0 blur-2xl group-hover:opacity-40 transition-opacity duration-300 rounded-full" />
                </a>
                <a
                  href="https://pf.kakao.com/_IxguMn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center"
                >
                  <span 
                    className="text-[#BFBFBF] hover:text-[#E2C37A] transition-all duration-300 course-caption tracking-[0.3em] uppercase border-b border-white/10 pb-1 mb-2"
                  >
                    과정 알림 신청
                  </span>
                  <span className="text-[10px] text-white/20 uppercase tracking-[0.5em]">Notification</span>
                </a>
              </div>
            </Reveal>

            {/* 목록으로 돌아가기 링크 */}
            <Reveal delayMs={600}>
              <Link
                href="/courses"
                className="inline-block mt-24 text-white/20 hover:text-[#E2C37A] transition-all duration-500 course-caption tracking-[0.5em] uppercase"
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

