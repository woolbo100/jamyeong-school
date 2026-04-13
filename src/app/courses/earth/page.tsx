"use client";

import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";

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

  return (
    <div className="bg-[#0B0B0D] min-h-screen text-white font-sans selection:bg-antiqueGold/30 overflow-x-hidden">
      
      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-40 px-6">
        {/* Aura Background */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] blur-[150px] opacity-10 pointer-events-none"
          style={{ backgroundColor: "#2D5A27" }}
        ></div>
        <div 
          className="absolute top-[40%] left-[45%] -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] blur-[150px] opacity-10 pointer-events-none"
          style={{ backgroundColor: "#8B5E3C" }}
        ></div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <Reveal>
            <div className="flex justify-center mb-8">
              <div className="relative w-24 h-24 md:w-32 md:h-32 group">
                <Image 
                  src="/images/icon/earth.png" 
                  alt="Earth Icon" 
                  fill 
                  className="object-contain filter drop-shadow-[0_0_15px_rgba(168,148,122,0.4)] group-hover:scale-110 transition-transform duration-700" 
                />
              </div>
            </div>
            <div className="text-[#a8947a] text-sm tracking-[0.4rem] mb-6 uppercase font-display opacity-80">
              Earth Curriculum • 6 Weeks
            </div>
            <h1 className="text-5xl md:text-8xl font-display mb-8 leading-tight tracking-tight italic">
              마음을 <span className="text-antiqueGold">심다</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-light leading-relaxed max-w-3xl mx-auto mb-12">
              나를 이해하고, 나의 이야기를 시작하는 첫 단계
            </p>
          </Reveal>

          <Reveal delayMs={200}>
            <div className="max-w-2xl mx-auto p-8 rounded-3xl bg-[#15161A] border border-[rgba(139,94,60,0.2)] mb-12 relative overflow-hidden group">
              <div className="absolute inset-0 bg-green-900/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <p className="relative z-10 text-lg md:text-xl text-white/70 leading-relaxed italic">
                “혼란스럽고 방향이 보이지 않을 때 <br />
                가장 먼저 필요한 것은 <br className="hidden md:block" />
                <span className="text-[#8B5E3C] font-semibold">‘무엇을 할까’</span>가 아니라 <br className="hidden md:block" />
                <span className="text-[#8B5E3C] font-semibold">‘나는 누구인가’</span>를 아는 것입니다.”
              </p>
            </div>
          </Reveal>

          <Reveal delayMs={400}>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
              <a
                href="https://pf.kakao.com/_IxguMn"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-visible h-16 w-full sm:w-64 px-8 flex items-center justify-center text-sm font-bold uppercase tracking-widest rounded-full bg-gradient-to-br from-[#8B5E3C] to-[#2D5A27] text-white shadow-2xl transition-all duration-300 transform-gpu hover:-translate-y-[2px]"
              >
                <span className="relative z-10 font-bold">👉 강의 안내 받기</span>
                <span className="absolute -inset-2 bg-gradient-to-br from-[#8B5E3C] to-[#2D5A27] opacity-0 blur-xl group-hover:opacity-45 transition-opacity duration-300 rounded-full" />
              </a>
              <button
                className="group flex items-center gap-3 text-white/40 hover:text-antiqueGold transition-colors duration-300 text-sm tracking-widest uppercase border-b border-white/10 pb-1"
                onClick={() => alert("PDF 안내 파일은 준비 중입니다. 잠시만 기다려 주세요!")}
              >
                <span className="text-lg">📄</span> 강의 안내 PDF 보기
              </button>
            </div>
          </Reveal>
        </div>

        <div className="max-w-6xl mx-auto mt-24 px-6">
          <Reveal delayMs={600} slideFrom="bottom">
            <div className="relative aspect-[21/9] rounded-[2.5rem] overflow-hidden border border-[rgba(139,94,60,0.1)] shadow-2xl">
              <Image 
                src="/images/courses/earth/seeds-book.png" 
                alt="Mystical Soil, Seeds and Picture Book" 
                fill 
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0D] via-transparent to-transparent opacity-60"></div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2. 문제 제기 */}
      <section className="py-24 px-6 bg-[#0B0B0D]">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <h2 className="text-3xl md:text-5xl font-display mb-10 leading-tight">
                혹시 이런 고민을 <br />
                <span className="text-[#8B5E3C]">하고 계신가요?</span>
              </h2>
              <div className="space-y-6">
                {[
                  "하고 싶은 건 많은데 방향이 없습니다",
                  "나만의 콘텐츠를 만들고 싶은데 막막합니다",
                  "글을 쓰고 싶지만 무엇부터 시작해야 할지 모르겠습니다",
                  "내 이야기를 표현하고 싶은데 방법이 없습니다"
                ].map((text, i) => (
                  <div key={i} className="flex items-center gap-4 p-6 rounded-2xl bg-[#15161A] border border-white/5 group hover:border-[rgba(45,90,39,0.3)] transition-all">
                    <span className="text-[#2D5A27] text-xl">✦</span>
                    <p className="text-white/80 text-lg font-light">{text}</p>
                  </div>
                ))}
              </div>
              <div className="mt-12 p-8 rounded-3xl bg-[#8B5E3C]/5 border border-[#8B5E3C]/20">
                <p className="text-xl md:text-2xl italic leading-relaxed">
                  👉 그렇다면 지금 필요한 것은 <br />
                  기술이 아니라 <span className="text-[#2D5A27] font-bold underline underline-offset-8">“내면 정리”</span>입니다
                </p>
              </div>
            </Reveal>

            <Reveal delayMs={400}>
              <div className="relative aspect-square rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl group">
                <Image 
                  src="/images/courses/earth/problem.png" 
                  alt="Inner Reflection" 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#8B5E3C]/20 to-transparent"></div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 3. 해결 제안 (아이콘으로 교체) */}
      <section className="py-24 px-6 bg-[#0B0B0D]">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-display mb-6 text-white/90">이 강의는 이런 시작을 <br className="md:hidden" /> 만들어드립니다</h2>
              <p className="text-xl text-white/60 font-light max-w-2xl mx-auto italic">
                나를 브랜드 그림책 작가로 거듭나게 하는 <br />
                “아.그.작(아이디어 그림책 제작) 프로젝트”
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-8">
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
                <div className="p-10 rounded-[2.5rem] bg-[#15161A] border border-[rgba(214,198,168,0.1)] h-full flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-500 hover:border-[#2D5A27]/30">
                  <div className="relative w-16 h-16 mb-8 group-hover:rotate-12 transition-transform">
                    <Image src={card.icon} alt={card.title} fill className="object-contain" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-[#8B5E3C]">{card.title}</h3>
                  <div className="w-12 h-[1px] bg-[#8B5E3C]/30 mb-6"></div>
                  <p className="text-white/70 leading-relaxed text-lg font-light">
                    → {card.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHY */}
      <section className="py-32 px-6 relative overflow-hidden bg-[#0F100D]">
        <div className="absolute inset-0 bg-green-900/[0.03] pointer-events-none"></div>
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <Reveal>
            <span className="text-[#2D5A27] text-sm tracking-[0.3em] uppercase mb-6 block font-bold">The Era of AI & Expression</span>
            <h2 className="text-4xl md:text-6xl font-display mb-12">왜 지금 ‘표현’이 중요한가</h2>
            
            <div className="space-y-10 text-xl md:text-2xl font-light text-white/80 leading-relaxed">
              <p>
                AI 시대는 기술의 시대가 아니라 <br />
                <span className="text-white font-bold text-3xl md:text-4xl">“표현의 시대”</span>입니다
              </p>
              <div className="w-1 h-12 bg-[#8B5E3C]/20 mx-auto"></div>
              <p>
                아이디어는 있는데 <br />
                표현하지 못하면 아무 일도 일어나지 않습니다
              </p>
              <div className="p-8 rounded-3xl bg-[#15161A] border border-[rgba(45,90,39,0.2)] mt-12 text-center">
                <p className="text-[#8B5E3C] font-medium mb-2">👉 AI는 도구일 뿐입니다</p>
                <p className="text-[#8B5E3C] font-medium">👉 중요한 것은 당신의 이야기와 가치입니다</p>
              </div>
              <p className="mt-12 text-lg text-white/60">
                이 강의는 그 표현의 시작을 만들어드립니다
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 5. 상세 커리큘럼 - 프리미엄 고도화 */}
      <section className="py-24 px-6 lg:py-32">
        <div className="max-w-[1200px] mx-auto">
          <Reveal>
            <div className="relative p-8 md:p-16 rounded-[40px] border border-[rgba(212,175,55,0.12)] shadow-[0_18px_50px_rgba(0,0,0,0.35)] overflow-hidden"
                 style={{ background: "linear-gradient(180deg, rgba(18,18,22,0.96) 0%, rgba(22,22,28,0.98) 100%)" }}>
              
              <div className="relative z-10 text-center mb-20">
                <h2 className="text-4xl md:text-6xl font-display mb-8 tracking-tight italic">상세 커리큘럼</h2>
                <div className="w-24 h-[1px] bg-antiqueGold/30 mx-auto mb-8"></div>
                
                <p className="text-xl md:text-2xl text-white/60 font-light max-w-2xl mx-auto leading-relaxed mb-10">
                  6주 동안 <br className="md:hidden" />
                  <span className="text-white font-medium">스토리, 이미지, 편집, 영상, 굿즈, 출판</span>까지 <br />
                  단계적으로 완성해가는 실전형 과정입니다
                </p>

                <div className="inline-flex items-center px-8 py-3 rounded-full bg-white/[0.03] border border-antiqueGold/10 backdrop-blur-sm">
                  <span className="text-zinc-200 text-sm md:text-base tracking-widest font-light">
                    실시간 챌린지형 과정 · 매주 과제 제출 · 정해진 일정에 따라 완성
                  </span>
                </div>
              </div>

              {/* Part 1 */}
              <div className="mb-24">
                <div className="flex items-center gap-6 mb-12">
                  <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-antiqueGold/20"></div>
                  <h3 className="text-2xl md:text-3xl font-display tracking-widest text-antiqueGold/80 px-4">
                    Part 1. <span className="text-white/90">나의 이야기와 그림책 완성</span>
                  </h3>
                  <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-antiqueGold/20"></div>
                </div>

                {/* 이미지 위주 배치 (1-3주 상단) */}
                <div className="relative w-full aspect-[21/9] rounded-3xl overflow-hidden mb-16 border border-white/5 shadow-2xl">
                  <Image 
                    src="/images/courses/earth/curriculum-journey.png" 
                    alt="Creative Journey Workspace" 
                    fill 
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[rgba(18,18,22,0.8)]"></div>
                </div>

                <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
                  {part1.map((item, i) => (
                    <Reveal key={i} delayMs={i * 150} slideFrom="bottom">
                      <div className="group relative p-10 rounded-[32px] border border-white/[0.06] hover:border-antiqueGold/20 transition-all duration-500 shadow-[0_10px_28px_rgba(0,0,0,0.28)] flex flex-col h-full"
                           style={{ background: "linear-gradient(180deg, rgba(30,28,38,0.96) 0%, rgba(22,22,30,0.98) 100%)" }}>
                        
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-antiqueGold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        
                        <div className="text-3xl font-display text-antiqueGold/60 font-bold mb-4 tracking-tighter">{item.week}</div>
                        <h4 className="text-2xl font-bold mb-6 text-white group-hover:text-antiqueGold transition-colors leading-tight">
                          {item.summary}
                        </h4>
                        
                        <ul className="space-y-4 mb-10 flex-1">
                          {item.details.map((detail, idx) => (
                            <li key={idx} className="flex items-start gap-4 text-white/50 group-hover:text-white/70 transition-colors">
                              <span className="text-antiqueGold/40 text-xs mt-2">•</span>
                              <span className="text-[1.05rem] leading-[1.7] font-light">{detail}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                          <span className="text-antiqueGold font-bold text-lg italic tracking-wide">
                             {item.result}
                          </span>
                          <span className="text-antiqueGold/40 text-xl font-bold group-hover:translate-x-1 transition-transform">→</span>
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>

              {/* Part 2 */}
              <div>
                <div className="flex items-center gap-6 mb-12">
                  <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-antiqueGold/20"></div>
                  <h3 className="text-2xl md:text-3xl font-display tracking-widest text-antiqueGold/80 px-4">
                    Part 2. <span className="text-white/90">영상·굿즈·출판까지 확장</span>
                  </h3>
                  <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-antiqueGold/20"></div>
                </div>

                <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
                  {part2.map((item, i) => (
                    <Reveal key={i} delayMs={i * 150} slideFrom="bottom">
                      <div className="group relative p-10 rounded-[32px] border border-white/[0.06] hover:border-antiqueGold/20 transition-all duration-500 shadow-[0_10px_28px_rgba(0,0,0,0.28)] flex flex-col h-full"
                           style={{ background: "linear-gradient(180deg, rgba(30,28,38,0.96) 0%, rgba(22,22,30,0.98) 100%)" }}>
                        
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-antiqueGold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        
                        <div className="text-3xl font-display text-antiqueGold/60 font-bold mb-4 tracking-tighter">{item.week}</div>
                        <h4 className="text-2xl font-bold mb-6 text-white group-hover:text-antiqueGold transition-colors leading-tight">
                          {item.summary}
                        </h4>
                        
                        <ul className="space-y-4 mb-10 flex-1">
                          {item.details.map((detail, idx) => (
                            <li key={idx} className="flex items-start gap-4 text-white/50 group-hover:text-white/70 transition-colors">
                              <span className="text-antiqueGold/40 text-xs mt-2">•</span>
                              <span className="text-[1.05rem] leading-[1.7] font-light">{detail}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                          <span className="text-antiqueGold font-bold text-lg italic tracking-wide">
                             {item.result}
                          </span>
                          <span className="text-antiqueGold/40 text-xl font-bold group-hover:translate-x-1 transition-transform">→</span>
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
      <section className="py-24 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-display mb-6">이 강의를 듣고 나면</h2>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 gap-8">
            {[
              "나에 대한 이해가 명확해집니다",
              "더 이상 흔들리지 않는 기준이 생깁니다",
              "나만의 콘텐츠 방향이 보이기 시작합니다",
              "글쓰기, 콘텐츠 제작의 출발점이 만들어집니다"
            ].map((text, i) => (
              <Reveal key={i} delayMs={i * 150}>
                <div className="p-8 rounded-2xl bg-[#15161A] border border-[rgba(214,198,168,0.05)] flex items-start gap-5 group hover:border-[#2D5A27]/20 transition-all">
                  <span className="w-8 h-8 rounded-full bg-[#8B5E3C] text-white flex items-center justify-center font-bold flex-shrink-0 group-hover:bg-[#2D5A27] transition-colors">✓</span>
                  <p className="text-xl text-white/80 font-light leading-snug">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          
          <Reveal delayMs={600}>
            <div className="mt-16 text-center">
              <p className="text-3xl md:text-5xl font-display text-[#8B5E3C] italic">
                “막막함 → 방향성”으로 바뀌는 경험
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 7. 확장 */}
      <section className="py-32 px-6 bg-[#0B0B0D]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <Reveal>
              <h2 className="text-4xl md:text-6xl font-display mb-10 leading-tight">이 과정은 <br /> <span className="text-[#2D5A27]">여기서 끝나지 않습니다</span></h2>
              <div className="space-y-8 text-xl font-light text-white/70 leading-relaxed mb-12">
                <p>브랜드 그림책 출판을 넘어,</p>
                <div className="flex flex-wrap gap-4 mt-6">
                  {["전자책 출판", "POD 종이책", "캐릭터 굿즈", "예술인 등록", "1인 출판사"].map((tag, i) => (
                    <span key={i} className="px-6 py-2 rounded-full bg-white/[0.05] border border-white/10 text-white/80 text-base">
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-2xl text-white font-medium mt-10">👉 당신의 지혜가 수익과 영향력이 됩니다.</p>
                <p>모든 시작은 <span className="text-[#8B5E3C] font-bold italic">“나를 아는 것”</span>에서 출발합니다.</p>
              </div>
            </Reveal>

            <Reveal delayMs={400}>
              <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden border border-[rgba(139,94,60,0.2)] shadow-2xl">
                <Image 
                  src="/images/courses/earth/expansion.png" 
                  alt="Branding and Growth Expansion" 
                  fill 
                  className="object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#0B0B0D] to-transparent"></div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 8. 특별한 점 */}
      <section className="py-32 px-6 bg-[#15161A]">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-display mb-4 italic text-white/90">이 강의가 특별한 이유</h2>
              <div className="w-20 h-[2px] bg-[#8B5E3C] mx-auto"></div>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-12">
            {[
              { title: "실전 결과물 도출", desc: "단순 학습이 아닌 실제 출판과 연계된 1:1 결과물 완성" },
              { title: "AI 도입의 효율성", desc: "누구나 그림책 작가가 될 수 있는 최신 AI 도구 활용" },
              { title: "브랜딩 연결", desc: "책 출판을 넘어 네이버 인물등록 및 출판사 창업까지" },
              { title: "강력한 커뮤니티", desc: "자명스쿨의 네트워크를 통한 지속 가능한 성장 지원" }
            ].map((item, i) => (
              <Reveal key={i} delayMs={i * 150}>
                <div className="flex gap-6">
                  <div className="text-[#2D5A27] text-3xl font-bold italic">0{i+1}.</div>
                  <div>
                    <h4 className="text-2xl font-bold mb-3">{item.title}</h4>
                    <p className="text-lg text-white/50 font-light leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delayMs={800}>
            <div className="mt-20 p-12 rounded-[3.5rem] bg-gradient-to-br from-[#8B5E3C]/10 to-[#2D5A27]/10 border border-[#8B5E3C]/20 text-center">
              <p className="text-2xl md:text-4xl font-display italic leading-tight">
                “도구가 아니라 <br className="md:hidden" />
                <span className="text-antiqueGold font-bold">사람 자체를 바꾸는 강의</span>입니다.”
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 9. CTA */}
      <section className="py-40 px-6 text-center bg-[#0B0B0D] relative">
         <div 
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-t from-[#2D5A27]/5 to-transparent pointer-events-none"
        ></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-display mb-10 leading-tight">
              지금 필요한 것은 <br />
              더 많은 정보가 아니라 <br className="md:hidden" />
              <span className="text-[#8B5E3C]">나를 이해하고 표현하는 시간</span>입니다.
            </h2>
          </Reveal>

          <Reveal delayMs={300}>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-8 mt-12">
              <a
                href="https://pf.kakao.com/_IxguMn"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-visible h-20 w-full sm:w-80 px-8 flex items-center justify-center text-lg font-bold uppercase tracking-widest rounded-full bg-gradient-to-br from-[#8B5E3C] to-[#2D5A27] text-white shadow-2xl transition-all duration-300 transform-gpu hover:-translate-y-[2px]"
              >
                <span className="relative z-10 font-bold italic">👉 강의 안내 받기</span>
                <span className="absolute -inset-2 bg-gradient-to-br from-[#8B5E3C] to-[#2D5A27] opacity-0 blur-2xl group-hover:opacity-40 transition-opacity duration-300 rounded-full" />
              </a>
              <a
                href="https://pf.kakao.com/_IxguMn"
                target="_blank"
                className="group flex flex-col items-center"
              >
                <span className="text-white/40 group-hover:text-[#2D5A27] transition-colors duration-300 text-base tracking-widest uppercase border-b border-white/10 pb-1 mb-2">
                  문의하기
                </span>
                <span className="text-xs text-white/20 uppercase tracking-[0.3em]">Contact Us</span>
              </a>
            </div>
          </Reveal>

          <Reveal delayMs={600}>
            <Link
              href="/courses"
              className="inline-block mt-32 text-white/20 hover:text-[#8B5E3C] transition-colors duration-300 text-sm tracking-[0.5em] uppercase"
            >
              ← BACK TO COURSES
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
