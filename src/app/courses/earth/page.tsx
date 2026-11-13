"use client";

import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import CourseRefundPolicySection from "@/components/CourseRefundPolicySection";

export default function EarthCoursePage() {
  const curriculumData = [
    {
      week: "1회차",
      title: "주제 및 스토리 기획",
      summary: "나의 스토리 주제찾기 & 동화책 스토리 짜기",
      details: [
        "나의 스토리 주제 찾기",
        "동화책 스토리 짜기",
        "AI 툴 기초 배우기",
        "컬러링북 이미지 제작",
        "나의 캐릭터 정하기"
      ],
      result: "주제, 스토리 짜기"
    },
    {
      week: "2회차",
      title: "그림책 이미지 제작",
      summary: "AI를 활용한 고퀄리티 그림책 이미지 생성",
      details: [
        "나의 캐릭터 생성",
        "그림책 이미지 제작",
        "캐릭터 일관성 유지 기법",
        "다양한 배경 생성 및 다중 캐릭터 이미지"
      ],
      result: "그림책 이미지"
    },
    {
      week: "3회차",
      title: "편집 및 표지 완성",
      summary: "캔바(Canva)와 도구를 활용한 책 디자인 완성",
      details: [
        "캔바로 세부 편집",
        "그림책 표지 제작",
        "종이책 표지 제작",
        "양쪽 이미지 연결법",
        "목업 표지 제작"
      ],
      result: "편집, 표지 완성"
    },
    {
      week: "4회차",
      title: "동화 영상 제작",
      summary: "움직이는 동화와 사운드 입히기",
      details: [
        "동화 영상 제작 및 편집",
        "Suno AI 음악 제작",
        "목소리 TTS 생성",
        "캐릭터 립싱크 적용"
      ],
      result: "동화 영상 제작"
    },
    {
      week: "5회차",
      title: "아트, 굿즈, 전시",
      summary: "내 작품을 굿즈와 전시로 확장하기",
      details: [
        "감성 에세이 이미지 제작",
        "캐릭터 굿즈 제작 및 사이트 등록",
        "아트 이미지 및 아트 영상 제작",
        "온라인 전시회 개최"
      ],
      result: "아트, 굿즈, 전시"
    },
    {
      week: "6회차",
      title: "책 등록 및 출판사 창업",
      summary: "작가 정식 데뷔 및 1인 출판사 설립",
      details: [
        "유페이퍼 전자책 등록",
        "부크크 POD 종이책 등록",
        "예술인 등록 신청",
        "네이버 인물 등록",
        "1인 출판사 창업 실무"
      ],
      result: "책 등록, 출판사 창업"
    }
  ];

  const part1 = curriculumData.slice(0, 3);
  const part2 = curriculumData.slice(3, 6);

  // New Premium Gold from the provided image
  const PREMIUM_GOLD = "#A68253";

  return (
    <div className="bg-[#090909] min-h-screen text-white font-sans selection:bg-[#A68253]/30 overflow-x-hidden">
      
      {/* 1. Hero Section */}
      <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-28">
        {/* Aura Background - Updated to Refined Gold */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] blur-[150px] opacity-[0.07] pointer-events-none"
          style={{ backgroundColor: PREMIUM_GOLD }}
        ></div>
        <div 
          className="absolute top-[40%] left-[45%] -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] blur-[150px] opacity-[0.05] pointer-events-none"
          style={{ backgroundColor: "#FFFFFF" }}
        ></div>

        <div className="relative z-10 site-container text-center">
          <Reveal>
            <div className="flex justify-center mb-8">
              <div className="relative w-20 h-20 md:w-28 md:h-28 group">
                <Image 
                  src="/images/icon/earth.png" 
                  alt="Earth Icon" 
                  fill 
                  className="object-contain filter drop-shadow-[0_0_20px_rgba(166,130,83,0.3)] group-hover:scale-110 transition-transform duration-1000" 
                />
              </div>
            </div>
            <div className="course-caption tracking-[0.35rem] mb-4 uppercase font-display opacity-90 font-medium" style={{ color: PREMIUM_GOLD }}>
              Earth Curriculum • 6 Weeks
            </div>
            <h1 className="course-hero-title font-display mb-6 tracking-tight italic">
              마음을 <span style={{ color: PREMIUM_GOLD }}>심다</span>
            </h1>
            <p className="course-hero-sub text-[#BFBFBF] font-light max-w-2xl mx-auto mb-10">
              나를 이해하고, <span className="text-white font-medium">나의 이야기를 시작하는 첫 단계</span>
            </p>
          </Reveal>

          <Reveal delayMs={200}>
            <div className="max-w-2xl mx-auto p-8 md:p-9 rounded-[2rem] bg-gradient-to-br from-[#1c1914] to-[#14161A] border border-[rgba(166,130,83,0.1)] mb-12 relative overflow-hidden group shadow-2xl">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{ backgroundColor: `${PREMIUM_GOLD}0D` }}></div>
              <p className="relative z-10 course-body text-[#BFBFBF] leading-relaxed italic">
                “혼란스럽고 방향이 보이지 않을 때 <br />
                가장 먼저 필요한 것은 <br className="hidden md:block" />
                <span className="text-white font-semibold">‘무엇을 할까’</span>가 아니라 <br className="hidden md:block" />
                <span style={{ color: PREMIUM_GOLD }} className="font-semibold">‘나는 누구인가’</span>를 아는 것입니다.”
              </p>
            </div>
          </Reveal>

          <Reveal delayMs={400}>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
              <a
                href="https://pf.kakao.com/_IxguMn"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-visible h-14 w-full sm:w-64 px-8 flex items-center justify-center course-caption font-bold uppercase tracking-widest rounded-full bg-gradient-to-br from-[#8B5E3C] to-[#2D5A27] text-white shadow-2xl transition-all duration-300 transform-gpu hover:-translate-y-[2px]"
              >
                <span className="relative z-10 font-bold italic">👉 강의 안내 받기</span>
                <span className="absolute -inset-2 bg-gradient-to-br from-[#8B5E3C] to-[#2D5A27] opacity-0 blur-xl group-hover:opacity-45 transition-opacity duration-300 rounded-full" />
              </a>
              <button
                className={`group flex items-center gap-2.5 text-[#BFBFBF] hover:text-[${PREMIUM_GOLD}] transition-all duration-300 course-caption tracking-widest uppercase border-b border-white/10 pb-1`}
                style={{ "--hover-color": PREMIUM_GOLD } as any}
                onClick={() => alert("PDF 안내 파일은 준비 중입니다. 잠시만 기다려 주세요!")}
              >
                 <span className="text-lg">📄</span> 강의 안내 PDF 보기
              </button>
            </div>
          </Reveal>
        </div>

        <div className="site-container mt-16 md:mt-20">
          <Reveal delayMs={600} slideFrom="bottom">
            <div className="relative aspect-[21/9] rounded-[2.5rem] overflow-hidden border border-white/[0.05] shadow-[0_30px_60px_rgba(0,0,0,0.5)]">
              <Image 
                src="/images/courses/earth/seeds-book.png" 
                alt="Mystical Soil, Seeds and Picture Book" 
                fill 
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090909] via-transparent to-transparent opacity-80"></div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2. 문제 제기 */}
      <section className="py-24 md:py-28 bg-[#090909]">
        <div className="site-container">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <Reveal>
              <h2 className="course-section-title font-display mb-10 text-white">
                혹시 이런 고민을 <br />
                <span style={{ color: PREMIUM_GOLD }}>하고 계신가요?</span>
              </h2>
              <div className="space-y-5">
                {[
                  "하고 싶은 건 많은데 방향이 없습니다",
                  "나만의 콘텐츠를 만들고 싶은데 막막합니다",
                  "글을 쓰고 싶지만 무엇부터 시작해야 할지 모르겠습니다",
                  "내 이야기를 표현하고 싶은데 방법이 없습니다"
                ].map((text, i) => (
                  <div key={i} className="flex items-center gap-4 p-6 rounded-2xl bg-gradient-to-br from-[#1c1914] to-[#14161A] border border-white/[0.03] group transition-all duration-500 hover:border-[rgba(166,130,83,0.3)]">
                    <span className="text-[#6B8F71] text-xl">✦</span>
                    <p className="text-[#BFBFBF] course-body font-light">{text}</p>
                  </div>
                ))}
              </div>
              <div className="mt-10 p-8 md:p-9 rounded-[2rem] bg-white/[0.02] border border-white/[0.05]">
                <p className="course-hero-sub italic text-[#BFBFBF]">
                  👉 그렇다면 지금 필요한 것은 <br />
                  기술이 아니라 <span style={{ color: PREMIUM_GOLD }} className="font-bold underline underline-offset-8">“내면 정리”</span>입니다
                </p>
              </div>
            </Reveal>

            <Reveal delayMs={400}>
              <div className="relative aspect-square rounded-[3rem] overflow-hidden border border-white/[0.05] shadow-2xl group">
                <Image 
                  src="/images/courses/earth/problem.png" 
                  alt="Inner Reflection" 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-transparent"></div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 3. 해결 제안 */}
      <section className="py-24 md:py-28 bg-[#090909]">
        <div className="site-container">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="course-section-title font-display mb-6 text-white">이 강의는 이런 시작을 <br className="md:hidden" /> 만들어드립니다</h2>
              <p className="course-hero-sub text-[#BFBFBF] font-light max-w-2xl mx-auto italic">
                나를 브랜드 그림책 작가로 거듭나게 하는 <br />
                <span style={{ color: PREMIUM_GOLD }}>“아.그.작(아이디어 그림책 제작) 프로젝트”</span>
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {[
              { 
                title: "나를 이해하는 힘", 
                desc: "감정과 생각을 정리하고 내 상태를 정확히 인식",
                icon: "/images/icon/ether.png" 
              },
              { 
                title: "나의 이야기 발견", 
                desc: "나만의 경험과 가치에서 콘텐츠의 씨앗 찾기",
                icon: "/images/icon/fire.png" 
              },
              { 
                title: "표현의 시작", 
                desc: "글, 이미지, 콘텐츠로 나를 표현하는 첫 단계 완성",
                icon: "/images/icon/air.png" 
              }
            ].map((card, i) => (
              <Reveal key={i} delayMs={i * 200}>
                <div className="p-8 md:p-10 rounded-[2.5rem] bg-gradient-to-br from-[#1c1914] to-[#14161A] border border-white/[0.03] h-full flex flex-col items-center text-center group hover:-translate-y-3 transition-all duration-700 hover:border-[rgba(166,130,83,0.2)]">
                  <div className="relative w-16 h-16 mb-8 group-hover:rotate-[15deg] transition-transform duration-700">
                    <Image src={card.icon} alt={card.title} fill className="object-contain" />
                  </div>
                  <h3 className="course-card-title font-bold mb-4 text-white">{card.title}</h3>
                  <div className="w-10 h-[1px] mb-6" style={{ backgroundColor: `${PREMIUM_GOLD}33` }}></div>
                  <p className="text-[#BFBFBF] course-caption font-light leading-relaxed">
                    → {card.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHY */}
      <section className="py-24 md:py-28 relative overflow-hidden bg-[#0a0a0c]">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundColor: PREMIUM_GOLD }}></div>
        <div className="site-container relative z-10 text-center">
          <Reveal>
            <span style={{ color: PREMIUM_GOLD }} className="course-caption tracking-[0.4em] uppercase mb-6 block font-semibold opacity-80">The Era of AI & Expression</span>
            <h2 className="course-section-title font-display mb-12 italic text-white">왜 지금 <span style={{ color: PREMIUM_GOLD }}>‘표현’</span>이 중요한가</h2>
            
            <div className="space-y-8 course-body font-light text-[#BFBFBF] max-w-3xl mx-auto">
              <p>
                AI 시대는 기술의 시대가 아니라 <br />
                <span className="text-white font-bold course-mid-title">“표현의 시대”</span>입니다
              </p>
              <div className="w-[1px] h-12 mx-auto" style={{ backgroundColor: `${PREMIUM_GOLD}33` }}></div>
              <p>
                아이디어는 있는데 <br />
                표현하지 못하면 아무 일도 일어나지 않습니다
              </p>
              <div className="p-8 md:p-10 rounded-[2.5rem] bg-gradient-to-br from-[#1c1914] to-[#14161A] border border-white/[0.04] mt-12 text-center shadow-lg">
                <p style={{ color: `${PREMIUM_GOLD}CC` }} className="font-medium mb-3 course-caption">AI는 도구일 뿐입니다</p>
                <p className="text-white font-medium course-body">중요한 것은 당신의 <span style={{ color: PREMIUM_GOLD }}>이야기</span>와 <span style={{ color: PREMIUM_GOLD }}>가치</span>입니다</p>
              </div>
              <p className="mt-12 course-caption text-white/50">
                이 강의는 그 표현의 시작을 만들어드립니다
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 5. 상세 커리큘럼 */}
      <section className="py-24 md:py-28">
        <div className="site-container">
          <Reveal>
            <div className="relative p-8 md:p-16 rounded-[3rem] border border-white/[0.05] shadow-[0_40px_100px_rgba(0,0,0,0.6)] overflow-hidden"
                 style={{ background: "linear-gradient(180deg, rgba(20,22,26,0.98) 0%, rgba(9,9,9,1) 100%)" }}>
              
              <div className="relative z-10 text-center mb-16 md:mb-20">
                <h2 className="course-section-title font-display mb-6 tracking-tight italic text-white">상세 커리큘럼</h2>
                <div className="w-24 h-[1px] mx-auto mb-8" style={{ backgroundColor: `${PREMIUM_GOLD}4D` }}></div>
                
                <p className="course-hero-sub text-[#BFBFBF] font-light max-w-2xl mx-auto mb-8">
                  6주 동안 <br className="md:hidden" />
                  <span className="text-white font-medium">스토리, 이미지, 편집, 영상, 굿즈, 출판</span>까지 <br />
                  단계적으로 완성해가는 실전형 과정입니다
                </p>

                <div className="inline-flex items-center px-8 py-3 rounded-full bg-white/[0.02] border border-white/[0.05] backdrop-blur-md">
                  <span className="text-[#BFBFBF] course-caption tracking-widest font-light">
                    실시간 챌린지형 과정 · 매주 과제 제출 · 정해진 일정에 따라 완성
                  </span>
                </div>
              </div>

              {/* Part 1 */}
              <div className="mb-20 md:mb-24">
                <div className="flex items-center gap-6 mb-12">
                  <div className="h-[1px] flex-1" style={{ background: `linear-gradient(to right, transparent, ${PREMIUM_GOLD}33)` }}></div>
                  <h3 className="course-mid-title font-display tracking-[0.15em] px-4 italic text-center" style={{ color: `${PREMIUM_GOLD}E6` }}>
                    Part 1. <span className="text-white font-normal">나의 이야기와 그림책 완성</span>
                  </h3>
                  <div className="h-[1px] flex-1" style={{ background: `linear-gradient(to left, transparent, ${PREMIUM_GOLD}33)` }}></div>
                </div>

                <div className="relative w-full aspect-[21/9] rounded-[2.5rem] overflow-hidden mb-12 border border-white/[0.05] shadow-2xl">
                  <Image 
                    src="/images/courses/earth/curriculum-journey.png" 
                    alt="Creative Journey Workspace" 
                    fill 
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090909] via-transparent to-transparent opacity-80"></div>
                </div>

                <div className="grid md:grid-cols-3 gap-6 md:gap-8">
                  {part1.map((item, i) => (
                    <Reveal key={i} delayMs={i * 150} slideFrom="bottom">
                      <div className="group relative p-8 md:p-10 rounded-[2.5rem] border border-white/[0.04] transition-all duration-700 shadow-[0_20px_50px_rgba(0,0,0,0.4)] flex flex-col h-full bg-gradient-to-br from-[#1c1914] to-[#14161A] hover:border-[rgba(166,130,83,0.3)]">
                        <div className="absolute top-0 left-0 w-full h-1 opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: `linear-gradient(to right, transparent, ${PREMIUM_GOLD}33, transparent)` }}></div>
                        
                        <div className="text-3xl font-display font-bold mb-4 tracking-tighter" style={{ color: `${PREMIUM_GOLD}66` }}>{item.week}</div>
                        <h4 className="course-card-title font-bold mb-6 text-white group-hover:text-[${PREMIUM_GOLD}] transition-colors" style={{ "--hover-color": PREMIUM_GOLD } as any}>
                          {item.summary}
                        </h4>
                        
                        <ul className="space-y-4 mb-8 flex-1">
                          {item.details.map((detail, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-[#BFBFBF] group-hover:text-white transition-colors course-caption">
                              <span className="text-[#6B8F71] text-xs mt-1">✦</span>
                              <span className="font-light">{detail}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="pt-6 border-t border-white/[0.05] flex items-center justify-between">
                          <span className="font-bold course-body italic tracking-wide" style={{ color: PREMIUM_GOLD }}>
                             {item.result}
                          </span>
                          <span className="text-xl group-hover:translate-x-2 transition-transform duration-500" style={{ color: `${PREMIUM_GOLD}4D` }}>→</span>
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>

              {/* Part 2 */}
              <div>
                <div className="flex items-center gap-6 mb-12">
                  <div className="h-[1px] flex-1" style={{ background: `linear-gradient(to right, transparent, ${PREMIUM_GOLD}33)` }}></div>
                  <h3 className="course-mid-title font-display tracking-[0.15em] px-4 italic text-center" style={{ color: `${PREMIUM_GOLD}E6` }}>
                    Part 2. <span className="text-white font-normal">영상·굿즈·출판까지 확장</span>
                  </h3>
                  <div className="h-[1px] flex-1" style={{ background: `linear-gradient(to left, transparent, ${PREMIUM_GOLD}33)` }}></div>
                </div>

                <div className="grid md:grid-cols-3 gap-6 md:gap-8">
                  {part2.map((item, i) => (
                    <Reveal key={i} delayMs={i * 150} slideFrom="bottom">
                      <div className="group relative p-8 md:p-10 rounded-[2.5rem] border border-white/[0.04] transition-all duration-700 shadow-[0_20px_50px_rgba(0,0,0,0.4)] flex flex-col h-full bg-gradient-to-br from-[#1c1914] to-[#14161A] hover:border-[rgba(166,130,83,0.3)]">
                        <div className="absolute top-0 left-0 w-full h-1 opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: `linear-gradient(to right, transparent, ${PREMIUM_GOLD}33, transparent)` }}></div>
                        
                        <div className="text-3xl font-display font-bold mb-4 tracking-tighter" style={{ color: `${PREMIUM_GOLD}66` }}>{item.week}</div>
                        <h4 className="course-card-title font-bold mb-6 text-white group-hover:text-[${PREMIUM_GOLD}] transition-colors" style={{ "--hover-color": PREMIUM_GOLD } as any}>
                          {item.summary}
                        </h4>
                        
                        <ul className="space-y-4 mb-8 flex-1">
                          {item.details.map((detail, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-[#BFBFBF] group-hover:text-white transition-colors course-caption">
                              <span className="text-[#6B8F71] text-xs mt-1">✦</span>
                              <span className="font-light">{detail}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="pt-6 border-t border-white/[0.05] flex items-center justify-between">
                          <span className="font-bold course-body italic tracking-wide" style={{ color: PREMIUM_GOLD }}>
                             {item.result}
                          </span>
                          <span className="text-xl group-hover:translate-x-2 transition-transform duration-500" style={{ color: `${PREMIUM_GOLD}4D` }}>→</span>
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>

            </div>
          </Reveal>
        </div>
      </section>

      {/* 6. 결과 */}
      <section className="py-24 md:py-28 bg-[#090909]">
        <div className="site-container">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="course-section-title font-display mb-6 text-white">이 강의를 듣고 나면</h2>
              <div className="w-16 h-[1px] mx-auto" style={{ backgroundColor: `${PREMIUM_GOLD}33` }}></div>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
            {[
              { text: "나에 대한 이해가 명확해집니다", highlight: "명확한 이해" },
              { text: "더 이상 흔들리지 않는 기준이 생깁니다", highlight: "단단한 기준" },
              { text: "나만의 콘텐츠 방향이 보이기 시작합니다", highlight: "콘텐츠 방향" },
              { text: "글쓰기, 콘텐츠 제작의 출발점이 만들어집니다", highlight: "표현의 시작" }
            ].map((item, i) => (
              <Reveal key={i} delayMs={i * 150}>
                <div className="p-8 md:p-10 rounded-[2.5rem] bg-gradient-to-br from-[#1c1914] to-[#14161A] border border-white/[0.02] flex items-start gap-5 group transition-all duration-500 hover:border-[rgba(166,130,83,0.2)]">
                  <span className={`w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0 group-hover:text-black transition-all text-sm`} style={{ backgroundColor: `${PREMIUM_GOLD}1A`, color: PREMIUM_GOLD }}>✓</span>
                  <p className="course-card-title text-[#BFBFBF] font-light">
                    {item.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          
          <Reveal delayMs={600}>
            <div className="mt-16 md:mt-20 text-center">
              <p className="course-quote font-display italic tracking-tight" style={{ color: PREMIUM_GOLD }}>
                “막막함 → <span className="text-white">확신</span>”으로 바뀌는 경험
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 7. 확장 */}
      <section className="py-24 md:py-28 bg-[#090909] border-t border-white/[0.03]">
        <div className="site-container">
          <div className="grid lg:grid-cols-2 gap-16 md:gap-20 items-center">
            <Reveal>
              <h2 className="course-section-title font-display mb-8 leading-tight italic text-white">이 과정은 <br /> <span style={{ color: PREMIUM_GOLD }}>시작일 뿐입니다</span></h2>
              <div className="space-y-6 course-body font-light text-[#BFBFBF] mb-12">
                <p>브랜드 그림책 출판을 넘어,</p>
                <div className="flex flex-wrap gap-3 mt-6">
                  {["전자책 출판", "POD 종이책", "캐릭터 굿즈", "예술인 등록", "1인 출판사"].map((tag, i) => (
                    <span key={i} className="px-6 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.07] course-caption font-medium" style={{ color: PREMIUM_GOLD }}>
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="course-mid-title text-white font-medium mt-10">👉 당신의 지혜가 <span style={{ color: PREMIUM_GOLD }}>수익</span>과 <span style={{ color: PREMIUM_GOLD }}>영향력</span>이 됩니다.</p>
                <p>모든 시작은 <span className="text-white font-bold italic">“나를 아는 것”</span>에서 출발합니다.</p>
              </div>
            </Reveal>

            <Reveal delayMs={400}>
              <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/[0.05] shadow-[0_40px_80px_rgba(0,0,0,0.7)]">
                <Image 
                  src="/images/courses/earth/expansion.png" 
                  alt="Branding and Growth Expansion" 
                  fill 
                  className="object-cover scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#090909] to-transparent"></div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 8. 특별한 점 */}
      <section className="py-24 md:py-28 bg-gradient-to-b from-[#14161A] to-[#090909]">
        <div className="site-container">
          <Reveal>
            <div className="text-center mb-16 md:mb-20">
              <h2 className="course-section-title font-display mb-4 italic text-white">이 강의가 특별한 이유</h2>
              <div className="w-20 h-[1px] mx-auto" style={{ backgroundColor: `${PREMIUM_GOLD}66` }}></div>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-10 lg:gap-14">
            {[
              { title: "실전 결과물 도출", desc: "단순 학습이 아닌 실제 출판과 연계된 1:1 결과물 완성" },
              { title: "AI 도입의 효율성", desc: "누구나 그림책 작가가 될 수 있는 최신 AI 도구 활용" },
              { title: "브랜딩 연결", desc: "책 출판을 넘어 네이버 인물등록 및 출판사 창업까지" },
              { title: "강력한 커뮤니티", desc: "자명스쿨의 네트워크를 통한 지속 가능한 성장 지원" }
            ].map((item, i) => (
              <Reveal key={i} delayMs={i * 150}>
                <div className="flex gap-6 group">
                  <div className="text-3xl font-display font-bold italic opacity-40 group-hover:opacity-100 transition-opacity" style={{ color: PREMIUM_GOLD }}>0{i+1}</div>
                  <div>
                    <h4 className="course-card-title font-bold mb-3 text-white group-hover:text-[${PREMIUM_GOLD}] transition-colors" style={{ "--hover-color": PREMIUM_GOLD } as any}>{item.title}</h4>
                    <p className="course-body text-[#BFBFBF] font-light">{item.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delayMs={800}>
            <div className="mt-20 md:mt-24 p-10 md:p-14 rounded-[3rem] bg-gradient-to-br from-[#1c1914] to-transparent border border-[rgba(166,130,83,0.15)] text-center relative overflow-hidden group shadow-2xl">
              <div className="absolute inset-0 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-1000" style={{ backgroundColor: `${PREMIUM_GOLD}0D` }}></div>
              <p className="relative z-10 course-quote font-display italic text-white">
                “도구가 아니라 <br className="md:hidden" />
                <span style={{ color: PREMIUM_GOLD }} className="font-bold">사람 자체를 바꾸는 강의</span>입니다.”
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 9. CTA */}
      <section className="py-28 md:py-36 text-center bg-[#090909] relative overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-t from-[#A682531A] to-transparent pointer-events-none"></div>
        <div className="site-container relative z-10 text-center">
          <Reveal>
            <h2 className="course-section-title font-display mb-12 italic text-white">
              지금 필요한 것은 <br />
              더 많은 정보가 아니라 <br className="md:hidden" />
              <span style={{ color: PREMIUM_GOLD }}>나를 이해하고 표현하는 시간</span>입니다.
            </h2>
          </Reveal>

          <Reveal delayMs={300}>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-8 mt-12">
              <a
                href="https://pf.kakao.com/_IxguMn"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-visible h-16 w-full sm:w-80 px-8 flex items-center justify-center course-card-title font-bold tracking-[0.15em] rounded-full bg-gradient-to-br from-[#8B5E3C] to-[#2D5A27] text-white shadow-2xl transition-all duration-300 transform-gpu hover:-translate-y-1"
              >
                <span className="relative z-10 font-bold italic">👉 강의 안내 받기</span>
                <span className="absolute -inset-2 bg-gradient-to-br from-[#8B5E3C] to-[#2D5A27] opacity-0 blur-2xl group-hover:opacity-40 transition-opacity duration-300 rounded-full" />
              </a>
              <a
                href="https://pf.kakao.com/_IxguMn"
                target="_blank"
                className="group flex flex-col items-center"
              >
                <span className={`text-[#BFBFBF] hover:text-[${PREMIUM_GOLD}] transition-all duration-300 course-caption tracking-[0.3em] uppercase border-b border-white/10 pb-1 mb-2`} style={{ "--hover-color": PREMIUM_GOLD } as any}>
                  문의하기
                </span>
                <span className="text-[0.75rem] text-white/30 uppercase tracking-[0.4em]">Contact Us</span>
              </a>
            </div>
          </Reveal>

          <Reveal delayMs={600}>
            <Link
              href="/courses"
              className={`inline-block mt-24 text-white/30 hover:text-[${PREMIUM_GOLD}] transition-all duration-500 course-caption tracking-[0.5em] uppercase`}
              style={{ "--hover-color": PREMIUM_GOLD } as any}
            >
              ← BACK TO COURSES
            </Link>
          </Reveal>
        </div>
      </section>

      {/* 수강 취소 및 환불 안내 공통 섹션 */}
      <CourseRefundPolicySection />
    </div>
  );
}
