"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";

export default function AirCoursePage() {
  const [activePart, setActivePart] = useState<number | null>(null);

  const togglePart = (index: number) => {
    setActivePart(activePart === index ? null : index);
  };

  const curriculumPhases = [
    {
      phase: "Part 1. Brand Canvas",
      title: "나만의 브랜드 세계를 디자인하다",
      period: "1~4주차",
      summary: "브랜드 기초, 디자인 표현, 템플릿 활용, 콘텐츠 기획",
      result: "브랜드 기초 콘텐츠와 비주얼 방향 확립",
      weeks: [
        {
          no: "1주차",
          desc: "캔바와 구글 AI 도구의 기초를 익히고 브랜드 제작에 필요한 기본 환경을 정리합니다. 디자인의 첫걸음을 안정적으로 시작하는 단계입니다.",
          result: "캔바 기초와 디자인 기본기 이해"
        },
        {
          no: "2주차",
          desc: "이미지 보정, 합성, 레이어 구성과 같은 캔바의 핵심 기능을 활용해 시각 표현의 범위를 넓힙니다. 브랜드 디자인의 완성도를 높이는 단계입니다.",
          result: "이미지 편집과 디자인 응용력 향상"
        },
        {
          no: "3주차",
          desc: "텍스트 효과, 타이포그래피, 텍스트 앱 활용을 통해 메시지를 더 강하게 보이게 만드는 방법을 익힙니다. 브랜드 언어를 시각적으로 설계하는 단계입니다.",
          result: "텍스트 중심 콘텐츠 표현력 강화"
        },
        {
          no: "4주차",
          desc: "프로필 소개, 썸네일, 카드뉴스, 광고 소재 등 실제로 쓰이는 콘텐츠를 제작합니다. 브랜드 첫인상을 만드는 콘텐츠 구조를 익히는 단계입니다.",
          result: "브랜드 소개용 콘텐츠 제작"
        }
      ]
    },
    {
      phase: "Part 2. Content Canvas",
      title: "AI로 시각과 메시지를 구현하다",
      period: "5~8주차",
      summary: "전자책, 굿즈, 영상, 광고 콘텐츠 제작",
      result: "보이는 콘텐츠 자산 제작",
      weeks: [
        {
          no: "5주차",
          desc: "전자책, 표지, 그림책형 콘텐츠와 같은 디지털 출판 콘텐츠를 기획하고 제작합니다. 정보를 한 권의 결과물로 정리하는 시작 단계입니다.",
          result: "전자책·출판형 콘텐츠 제작 기초"
        },
        {
          no: "6주차",
          desc: "굿즈와 POD 상품, 디지털 파일형 상품을 제작하고 실제 판매 가능한 형태로 정리합니다. 콘텐츠가 상품으로 확장되는 흐름을 배우는 단계입니다.",
          result: "굿즈 및 디지털 상품 제작 구조 이해"
        },
        {
          no: "7주차",
          desc: "캔바 영상, 모션그래픽, 음악 활용의 기초를 익히고 감성 영상과 트렌드형 영상을 제작합니다. 정적인 콘텐츠를 움직이는 콘텐츠로 확장하는 단계입니다.",
          result: "영상 콘텐츠 제작 기본기 형성"
        },
        {
          no: "8주차",
          desc: "광고 영상, 브랜딩 영상, 스토리형 영상 등 보다 완성도 높은 영상 콘텐츠로 확장합니다. 브랜드 메시지를 영상으로 구현하는 심화 단계입니다.",
          result: "고급 영상 콘텐츠 기획·제작 심화"
        }
      ]
    },
    {
      phase: "Part 3. Business Canvas",
      title: "나의 지식과 경험으로 온라인 비즈니스를 구축하다",
      period: "9~12주차",
      summary: "상세페이지, 홈페이지, PPT, 챗봇, 앱, 자동화 기초",
      result: "비즈니스 자산과 시스템 연결",
      weeks: [
        {
          no: "9주차",
          desc: "제품 연출컷, 상세페이지, 광고 소재 등 매출과 연결되는 콘텐츠를 설계합니다. 콘텐츠를 실제 전환 구조에 맞게 제작하는 단계입니다.",
          result: "상세페이지 및 광고 콘텐츠 기획"
        },
        {
          no: "10주차",
          desc: "랜딩페이지, 포트폴리오 페이지, 브랜드 홈페이지 등 웹 기반 자산을 직접 구축합니다. 브랜드를 보여주는 온라인 공간을 만드는 단계입니다.",
          result: "홈페이지 및 웹페이지 제작 기초"
        },
        {
          no: "11주차",
          desc: "강의 PPT, 발표 자료, 설문, 뉴스레터, 자동화 기초 등 강의와 마케팅 운영에 필요한 구조를 연결합니다. 지식을 체계적으로 전달하는 시스템을 만드는 단계입니다.",
          result: "강의 자료와 마케팅 운영 자산 구축"
        },
        {
          no: "12주차",
          desc: "챗봇, 앱, 노코드 구조 등 내 지식과 경험을 디지털 자산으로 확장하는 흐름을 익힙니다. 최종적으로 나만의 지식창업 로드맵을 정리합니다.",
          result: "지식창업 확장 구조와 최종 포트폴리오 정리"
        }
      ]
    }
  ];

  const ACCENT_1 = "#C9B37E"; // Main accent (Silver-Gold)
  const ACCENT_2 = "#D8D2C4"; // Sub line/icon
  const ACCENT_3 = "#B8B1A3"; // Border/Highlight
  const BG = "#09090B";

  return (
    <div className={`bg-[${BG}] min-h-screen text-white font-sans selection:bg-[${ACCENT_1}]/30 overflow-x-hidden`} style={{ backgroundColor: BG }}>
      
      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-40 px-6">
        <div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] blur-[150px] opacity-[0.08] pointer-events-none"
          style={{ background: `radial-gradient(circle, ${ACCENT_2}, transparent 70%)` }}
        ></div>
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-32">
            <Reveal>
              <div className="flex justify-center mb-10">
                <div className="relative w-24 h-24 md:w-32 md:h-32 group">
                  <Image 
                    src="/images/icon/air.png" 
                    alt="Air Icon" 
                    fill 
                    className="object-contain filter drop-shadow-[0_0_20px_rgba(201,179,126,0.2)] group-hover:scale-110 transition-transform duration-1000" 
                  />
                </div>
              </div>
              
              <div className="text-sm tracking-[0.5rem] mb-6 uppercase font-display opacity-90 font-medium" style={{ color: ACCENT_1 }}>
                Air Curriculum • 12 Weeks
              </div>
              
              <h1 className="text-5xl md:text-8xl font-display mb-10 leading-tight tracking-[0.02em] italic">
                AI 지식창업 & <span style={{ color: ACCENT_1 }}>콘텐츠 확장</span>
              </h1>

              <p className="text-xl md:text-2xl text-[#C7C7CC] font-light leading-relaxed max-w-3xl mx-auto mb-20">
                내 지식과 경험을 <span className="text-white font-medium">콘텐츠와 강의로 바꾸는 12주</span>
              </p>
            </Reveal>

            <Reveal delayMs={200}>
              <div className="max-w-3xl mx-auto p-12 md:p-16 rounded-[2.5rem] bg-gradient-to-br from-[#14161A] to-[#0d0e12] border border-[rgba(201,179,126,0.15)] mb-16 relative overflow-hidden group shadow-[0_40px_100px_rgba(0,0,0,0.6)]">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{ backgroundColor: `${ACCENT_1}08` }}></div>
                <p className="relative z-10 text-lg md:text-xl text-[#C7C7CC] leading-[1.8] font-light">
                  이 과정은 단순히 툴을 배우는 수업이 아닙니다. <br />
                  내 안에 있는 지식과 경험을 <br />
                  <span className="text-white font-semibold">보이는 콘텐츠, 강의 자료, 웹페이지, 브랜드 시스템</span>으로 <br />
                  하나씩 구조화해가는 과정입니다.
                </p>
              </div>
            </Reveal>

            <Reveal delayMs={400}>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
                <a
                  href="https://pf.kakao.com/_IxguMn"
                  target="_blank"
                  className="group relative h-16 w-full sm:w-72 px-10 flex items-center justify-center text-sm font-bold uppercase tracking-widest rounded-full bg-gradient-to-br from-[#C9B37E] to-[#B8B1A3] text-black shadow-2xl transition-all duration-500 hover:-translate-y-[2px]"
                >
                  <span className="relative z-10 font-bold italic">강의 안내 받기</span>
                  <div className="absolute -inset-2 bg-gradient-to-br from-[#C9B37E] to-[#B8B1A3] opacity-0 blur-xl group-hover:opacity-40 transition-opacity duration-300 rounded-full" />
                </a>
                <a
                  href="https://pf.kakao.com/_IxguMn"
                  target="_blank"
                  className="flex items-center gap-3 text-white/30 hover:text-white transition-colors text-sm tracking-widest uppercase"
                >
                  <span className="w-5 h-[1px] bg-white/20"></span>
                  문의하기
                </a>
              </div>
              <p className="mt-10 text-xs tracking-[0.3em] text-[#C7C7CC]/50 uppercase font-light">
                기획 → 콘텐츠 → 홈페이지 → 강의 자료 → 자동화까지
              </p>
            </Reveal>
          </div>

          <div className="w-full h-[1px] bg-white/5 mb-32" />

          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2 text-left">
              <Reveal delayMs={600} slideFrom="left">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-[1px]" style={{ background: `linear-gradient(to right, transparent, ${ACCENT_1})` }}></div>
                  <span className="text-sm tracking-[0.4rem] uppercase font-display font-medium" style={{ color: ACCENT_1 }}>
                    Premium Brand Studio
                  </span>
                </div>
                <h2 className="text-4xl md:text-7xl font-display mb-10 leading-tight tracking-tight italic">
                  지식을 구조로<br />
                  <span style={{ color: ACCENT_1 }}>바꾸는 힘</span>
                </h2>
                <p className="text-xl text-[#C7C7CC] font-light leading-relaxed max-w-xl mb-12">
                  내 지식과 경험을 콘텐츠와 강의,<br />
                  <span className="text-white font-medium italic">그리고 브랜드로 확장하는 시간입니다.</span>
                </p>
                <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/[0.05] inline-block">
                   <p className="text-base text-[#C7C7CC] italic leading-relaxed">
                    공기 원소답게 흐름과 연결, 확장이 보여야 합니다.<br />
                    <span className="text-white font-medium">실질적인 비즈니스의 시작을 함께합니다.</span>
                  </p>
                </div>
              </Reveal>
            </div>

            <div className="lg:w-1/2 w-full">
              <Reveal delayMs={800} slideFrom="right">
                <div className="relative aspect-[16/10] rounded-[2.5rem] overflow-hidden border border-white/[0.1] shadow-[0_0_100px_rgba(201,179,126,0.15)] group">
                  <Image 
                    src="/images/courses/air/hero.png" 
                    alt="Air Studio Visual" 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-[3000ms]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-8 left-8 p-6 rounded-2xl bg-black/40 backdrop-blur-md border border-white/10 max-w-[280px]">
                    <p className="text-sm font-light text-white/80 italic leading-relaxed">
                      "지식은 정리되는 순간 <br /> 비즈니스 자산이 됩니다."
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Problem Section */}
      <section className="py-32 px-6 bg-[#09090B]">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="text-center mb-24">
              <h2 className="text-4xl md:text-6xl font-display mb-8 text-white italic">
                혹시 이런 고민을<br />
                <span style={{ color: ACCENT_1 }}>하고 계신가요?</span>
              </h2>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              "나만의 지식과 경험은 있는데 어떻게 풀어내야 할지 모르겠습니다",
              "콘텐츠를 만들고 싶지만 매번 시작이 어렵습니다",
              "강의 자료, 상세페이지, 홈페이지까지 연결이 안 됩니다",
              "배운 것은 많은데 비즈니스 구조로 이어지지 않습니다"
            ].map((text, i) => (
              <Reveal key={i} delayMs={i * 100}>
                <div className="flex items-center gap-6 p-10 rounded-3xl bg-[#14161A] border border-white/[0.05] group transition-all duration-500 hover:border-[#C9B37E]/30 hover:-translate-y-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#C9B37E]" />
                  <p className="text-[#C7C7CC] text-lg font-light group-hover:text-white transition-colors">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delayMs={500}>
            <div className="mt-24 text-center">
              <div className="inline-block p-12 rounded-[3.5rem] bg-gradient-to-br from-[#14161A] to-[#09090B] border border-white/5 shadow-2xl">
                <p className="text-2xl md:text-3xl italic leading-relaxed text-[#C7C7CC]">
                  지금 필요한 것은 더 많은 정보가 아니라<br />
                  <span className="text-white font-bold italic underline underline-offset-8 decoration-[#C9B37E]">지식을 구조로 바꾸는 힘</span>입니다
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 3. Solution Section */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="text-center mb-24">
              <h2 className="text-4xl md:text-5xl font-display mb-8 text-white uppercase italic tracking-tight">이 과정은 이런 변화를 만들어드립니다</h2>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                title: "브랜드 구조화", 
                desc: "내가 가진 지식과 경험을 브랜드 메시지와 콘텐츠 방향으로 정리합니다",
                icon: "📐" 
              },
              { 
                title: "콘텐츠 시스템화", 
                desc: "상세페이지, 전자책, 홈페이지까지 하나의 흐름으로 연결합니다",
                icon: "🔗" 
              },
              { 
                title: "비즈니스 확장", 
                desc: "강의 자료, 챗봇, 자동화까지 실제 운영 가능한 구조를 만듭니다",
                icon: "🚀" 
              }
            ].map((card, i) => (
              <Reveal key={i} delayMs={i * 200}>
                <div className="p-12 rounded-[2.5rem] bg-[#14161A] border border-white/[0.05] h-full flex flex-col items-center text-center group hover:-translate-y-3 transition-all duration-700 hover:border-[#C9B37E]/20 shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#C9B37E]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="text-5xl mb-10 group-hover:scale-110 transition-transform duration-700">{card.icon}</div>
                  <h3 className="text-2xl font-bold mb-6 text-white leading-tight">{card.title}</h3>
                  <p className="text-[#C7C7CC] leading-relaxed text-base font-light group-hover:text-white/90 transition-colors">
                    {card.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHY Section */}
      <section className="py-40 px-6 relative overflow-hidden bg-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(201,179,126,0.05),transparent_50%)]" />
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <Reveal>
            <span style={{ color: ACCENT_1 }} className="text-xs tracking-[0.5em] uppercase mb-10 block font-semibold">The Air Philosophy</span>
            <h2 className="text-4xl md:text-6xl font-display mb-16 italic text-white leading-tight">전달되지 않는 지혜는<br /><span style={{ color: ACCENT_1 }}>존재하지 않는 것</span>과 같습니다</h2>
            <div className="space-y-12 text-lg md:text-xl font-light text-[#C7C7CC] leading-relaxed">
              <p>
                이제는 아는 사람보다 <br />
                <span className="text-white font-medium italic underline underline-offset-4 decoration-[#C9B37E]/40">정리해서 전달할 수 있는 사람</span>이 기회를 가집니다.
              </p>
              <p>
                AI와 디지털 도구는 당신의 지식과 경험을 <br />
                세상에 더 넓게 전달하는 강력한 확장 장치입니다.
              </p>
              <div className="p-12 rounded-[3.5rem] bg-gradient-to-br from-[#14161A] to-black border border-white/5 mt-20 group">
                <p className="text-white text-2xl md:text-3xl font-light italic leading-relaxed">
                  이 과정은 당신의 지식을<br />
                  <span style={{ color: ACCENT_1 }} className="font-bold underline underline-offset-8">강의, 콘텐츠, 브랜드로 바꾸는 여정</span>입니다.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 5. Curriculum Section */}
      <section className="py-32 px-6 bg-[#050505]">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="text-center mb-28">
              <h2 className="text-5xl md:text-8xl font-display mb-12 italic text-white uppercase tracking-tighter">Curriculum</h2>
              <div className="w-32 h-[1px] mx-auto mb-10 bg-[#C9B37E]/30" />
              <p className="text-xl md:text-2xl text-white font-light max-w-3xl mx-auto leading-relaxed italic">
                브랜드를 디자인하고, 콘텐츠를 구현하며,<br />
                <span style={{ color: ACCENT_1 }}>비즈니스 시스템</span>으로 연결하는 12주
              </p>
            </div>
          </Reveal>

          <div className="space-y-16">
            {curriculumPhases.map((phase, i) => (
              <div key={i} className="relative">
                <Reveal>
                  <div className="p-10 md:p-16 rounded-[3rem] bg-[#14161A] border border-white/[0.05] shadow-2xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-8 text-6xl font-display font-bold text-[#C9B37E]/5 italic pointer-events-none">0{i+1}</div>
                    
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10">
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-6">
                          <span className="text-[#C9B37E] font-bold tracking-widest text-sm uppercase">{phase.period}</span>
                          <div className="w-8 h-[1px] bg-[#C9B37E]/30"></div>
                          <span className="text-white/40 text-xs tracking-widest uppercase font-medium">{phase.phase}</span>
                        </div>
                        <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white tracking-tight">{phase.title}</h3>
                        <p className="text-[#C7C7CC] mb-8 text-lg leading-relaxed font-light italic">{phase.summary}</p>
                        <div className="flex items-center gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#C9B37E]"></span>
                          <span className="text-sm font-medium text-white/80 italic">결과: {phase.result}</span>
                        </div>
                      </div>

                      <div className="flex flex-col items-start lg:items-end">
                        <button
                          onClick={() => togglePart(i)}
                          className={`px-8 py-4 rounded-xl text-sm font-bold tracking-widest uppercase transition-all duration-500 border ${
                            activePart === i 
                            ? "bg-[#C9B37E] text-black border-[#C9B37E]" 
                            : "bg-transparent text-[#D8D2C4] border-[rgba(201,179,126,0.24)] hover:border-[#C9B37E]/60 hover:text-white"
                          }`}
                        >
                          {activePart === i ? "상세 닫기" : "주차별 상세보기"}
                        </button>
                      </div>
                    </div>

                    {/* Weekly Details (Accordion) */}
                    <div 
                      className={`overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                        activePart === i ? "max-h-[2000px] opacity-100 mt-16" : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {phase.weeks.map((week, idx) => (
                          <div
                            key={idx}
                            className="bg-[rgba(20,22,26,0.96)] border border-[rgba(216,210,196,0.10)] rounded-[20px] p-8 flex flex-col h-full hover:border-[#C9B37E]/30 transition-colors duration-300"
                          >
                            <span className="text-[#C9B37E] font-bold text-[0.95rem] mb-4 block">{week.no}</span>
                            <p className="text-[#C7C7CC] text-sm leading-relaxed font-light mb-6 flex-1">
                              {week.desc}
                            </p>
                            <div className="pt-4 border-t border-white/5">
                              <p className="text-[#D8D2C4] text-[0.9rem] font-semibold leading-tight">
                                <span className="text-[#C9B37E]/50 mr-2 text-[10px]">●</span>
                                {week.result}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Reveal>
              </div>
            ))}
          </div>

          <Reveal delayMs={500}>
            <div className="mt-32 p-10 rounded-3xl bg-white/[0.02] border border-white/5 text-center">
              <p className="text-[#C7C7CC] text-sm tracking-[0.3em] uppercase mb-4 opacity-50">Curriculum Flow</p>
              <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-16">
                <div className="flex flex-col">
                  <span className="text-white font-bold text-lg">1~4주차</span>
                  <span className="text-[#C7C7CC] text-sm italic">브랜드 기초 / 시각화</span>
                </div>
                <div className="hidden md:block w-[1px] h-8 bg-white/10"></div>
                <div className="flex flex-col">
                  <span className="text-white font-bold text-lg">5~8주차</span>
                  <span className="text-[#C7C7CC] text-sm italic">전자책 / 영상 / 굿즈</span>
                </div>
                <div className="hidden md:block w-[1px] h-8 bg-white/10"></div>
                <div className="flex flex-col">
                  <span className="text-white font-bold text-lg">9~12주차</span>
                  <span className="text-[#C7C7CC] text-sm italic">상세페이지 / 웹 / 자동화</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 6. Results Section */}
      <section className="py-40 px-6">
        <div className="max-w-5xl mx-auto p-16 md:p-24 rounded-[4rem] border border-white/5 bg-gradient-to-br from-[#14161A] to-black">
          <Reveal>
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-display mb-10 text-white italic">이 과정을 끝내면</h2>
              <div className="w-20 h-[1px] bg-[#C9B37E]/30 mx-auto" />
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {[
              "내 브랜드 방향이 명확해집니다",
              "콘텐츠를 반복 가능하게 만드는 구조가 생깁니다",
              "전자책, 상세페이지, 홈페이지를 직접 만듭니다",
              "강의 자료와 온라인 비즈니스 자산이 쌓입니다",
              "내 지식이 수익 구조로 연결되기 시작합니다"
            ].map((text, i) => (
              <Reveal key={i} delayMs={i * 100}>
                <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 text-center group hover:border-[#C9B37E]/40 transition-all duration-300">
                  <p className="text-lg text-[#C7C7CC] font-light group-hover:text-white transition-colors leading-relaxed">
                    ✔ {text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delayMs={600}>
            <div className="text-center">
              <p className="text-2xl md:text-4xl font-display italic text-white leading-tight">
                흩어져 있던 생각과 경험이<br />
                <span style={{ color: ACCENT_1 }} className="font-bold underline underline-offset-8">브랜드와 비즈니스의 흐름</span>으로 연결됩니다
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 7. Expansion Section */}
      <section className="py-40 px-6 border-t border-white/5 relative overflow-hidden">
        <div className="absolute right-0 bottom-0 w-1/2 h-1/2 bg-[#C9B37E]/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-24">
          <div className="lg:w-1/2">
            <Reveal>
              <h2 className="text-5xl md:text-8xl font-display mb-10 leading-tight italic text-white uppercase tracking-tighter">
                Studio<br />
                <span style={{ color: ACCENT_1 }}>Expansion</span>
              </h2>
              <p className="text-xl md:text-2xl font-light text-[#C7C7CC] mb-16 leading-relaxed italic">
                Air 단계는 실질적인 확장의 시작입니다.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-16">
                {["나만의 강의 런칭", "전자책 / 디지털 상품", "홈페이지 운영", "챗봇 / 앱 확장", "자동화 구조 연결"].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 text-lg">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9B37E]" />
                    <span className="text-white/90 font-light italic">{item}</span>
                  </div>
                ))}
              </div>
              <div className="p-10 rounded-[2.5rem] bg-[#14161A] border border-white/10 inline-block shadow-2xl">
                <p className="text-xl md:text-2xl text-[#C7C7CC] font-light leading-relaxed">
                  내 안의 지식을 세상과 연결하는 <br />
                  <span className="font-bold text-white italic underline underline-offset-4 decoration-[#C9B37E]">실질적인 확장이 시작됩니다.</span>
                </p>
              </div>
            </Reveal>
          </div>
          <div className="lg:w-1/2 w-full grid grid-cols-2 gap-6">
            <Reveal delayMs={400} slideFrom="bottom">
              <div className="aspect-[3/4] rounded-[2.5rem] overflow-hidden relative border border-white/10 group shadow-2xl">
                <Image src="/images/courses/air/gallery1.png" alt="Expansion Visual 1" fill className="object-cover group-hover:scale-110 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
            </Reveal>
            <Reveal delayMs={600} slideFrom="bottom">
              <div className="aspect-[3/4] rounded-[2.5rem] overflow-hidden relative border border-white/10 mt-12 group shadow-2xl">
                <Image src="/images/courses/air/gallery2.png" alt="Expansion Visual 2" fill className="object-cover group-hover:scale-110 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 8. CTA Section */}
      <section className="py-48 px-6 text-center bg-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "radial-gradient(#C9B37E 1.2px, transparent 1.2px)", backgroundSize: "60px 60px" }} />
        <div className="max-w-4xl mx-auto relative z-10">
          <Reveal>
            <div className="flex justify-center mb-16">
              <div className="w-24 h-24 relative">
                <Image src="/images/icon/air.png" alt="Air Icon" fill className="object-contain filter drop-shadow-[0_0_20px_rgba(201,179,126,0.4)]" />
              </div>
            </div>
            <h2 className="text-4xl md:text-7xl font-display mb-10 tracking-tight italic text-white leading-tight uppercase">
              이제는 당신의 브랜드를<br />
              <span style={{ color: ACCENT_1 }}>구축할 차례입니다</span>
            </h2>
            <p className="text-xl text-[#C7C7CC] font-light italic mb-20 opacity-80">
              지식과 경험은 정리되는 순간 비즈니스 자산이 됩니다.
            </p>
          </Reveal>
          <Reveal delayMs={300}>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-10">
              <a
                href="https://pf.kakao.com/_IxguMn"
                target="_blank"
                className="group relative h-20 w-full sm:w-96 px-8 flex items-center justify-center text-xl font-bold tracking-[0.2em] rounded-full bg-gradient-to-br from-[#C9B37E] to-[#B8B1A3] text-black shadow-[0_20px_60px_rgba(201,179,126,0.25)] transition-all duration-500 hover:-translate-y-2"
              >
                <span className="relative z-10 font-bold italic">강의 안내 받기</span>
                <span className="absolute -inset-2 bg-gradient-to-br from-[#C9B37E] to-[#B8B1A3] opacity-0 blur-3xl group-hover:opacity-40 transition-opacity duration-300 rounded-full" />
              </a>
              <a
                href="https://pf.kakao.com/_IxguMn"
                target="_blank"
                className="group flex flex-col items-center"
              >
                <span className="text-white/40 group-hover:text-[#C9B37E] transition-all duration-300 text-xl tracking-[0.3em] uppercase border-b border-white/5 pb-1 mb-3">
                  문의하기
                </span>
                <span className="text-[10px] text-white/10 uppercase tracking-[0.6em] font-bold">REACH OUT</span>
              </a>
            </div>
          </Reveal>
          <Reveal delayMs={800}>
            <Link
              href="/courses"
              className="inline-block mt-40 text-white/20 hover:text-[#C9B37E] transition-all duration-500 text-sm tracking-[0.5em] uppercase font-light"
            >
              ← Return To Collection
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
