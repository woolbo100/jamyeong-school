import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import HeroParticles from "@/components/HeroParticles";
import { Brain, Palette, Rocket, ArrowRight, ShieldCheck } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="bg-trueBlack min-h-screen font-sans selection:bg-antiqueGold/30 text-white">
      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 overflow-hidden">
        <HeroParticles />
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <Reveal>
            <span className="group relative inline-block border border-antiqueGold/40 bg-antiqueGold/5 rounded-full px-6 py-2 text-antiqueGold font-display mx-auto text-sm md:text-base tracking-[0.2em] mb-8 uppercase shadow-sm cursor-default transition-all duration-300 hover:border-antiqueGold/60">
              <span className="relative z-10">한국디지털마인드코칭협회 승인</span>
              {/* Golden Aura Glow */}
              <span className="absolute -inset-1 bg-gradient-to-br from-[#B89B6A] to-[#9E7C47] opacity-0 blur-lg group-hover:opacity-30 transition-opacity duration-500 rounded-full" />
            </span>
          </Reveal>
          <Reveal delayMs={200}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display mb-10 leading-tight tracking-tight uppercase italic">
              <span className="bg-gradient-to-br from-[#E2D4BE] via-[#D6C6A8] to-[#B89B6A] bg-clip-text text-transparent inline-block py-2 pr-4">
                자명스쿨
              </span>
              <span className="text-white inline-block py-2 pr-4 ml-2">
                소개
              </span>
            </h1>
          </Reveal>
          <Reveal delayMs={400}>
            <div className="max-w-4xl mx-auto space-y-2">
              <p className="text-xl md:text-2xl text-[#E2D4BE] font-medium leading-relaxed">
                나를 이해하고, 방향을 설계하고, 디지털로 현실화하는 학교
              </p>
              <p className="text-lg md:text-xl text-white/80 font-normal leading-relaxed">
                AI로 마음을 이해하고 콘텐츠로 표현하며 삶을 변화시키는 교육을 합니다.
              </p>
            </div>
          </Reveal>
          <Reveal delayMs={600}>
            <div className="mt-12 flex justify-center">
              <Link
                href="/courses"
                className="group relative overflow-visible h-14 px-10 flex items-center justify-center text-sm font-bold uppercase tracking-widest rounded-full bg-gradient-to-br from-[#B89B6A] to-[#9E7C47] text-[#0B0B10] shadow-2xl transition-all duration-300 ease-out transform-gpu hover:-translate-y-[2px]"
              >
                <span className="relative z-10">강의 보러가기</span>
                <span className="absolute -inset-2 bg-gradient-to-br from-[#B89B6A] to-[#9E7C47] opacity-0 blur-xl group-hover:opacity-45 transition-opacity duration-300 rounded-full" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Hero to Philosophy Divider */}
      <Reveal>
        <div className="w-full flex items-center justify-center relative z-20 py-16 opacity-80">
          <div className="h-px w-full max-w-md bg-gradient-to-r from-transparent via-[#B89B6A]/80 to-transparent"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rotate-45 border border-[#B89B6A] bg-[#0b0b10] shadow-[0_0_15px_rgba(184,155,106,0.5)]"></div>
        </div>
      </Reveal>

      {/* 2. Philosophy Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <Reveal>
          <div className="text-center mb-16 px-4">
            <h2 className="text-3xl md:text-5xl font-display mb-6">자명스쿨 철학</h2>
            <div className="w-20 h-1 bg-antiqueGold mx-auto rounded-full mb-8"></div>
            <p className="text-xl md:text-2xl text-white/80 font-light leading-relaxed max-w-3xl mx-auto">
              자명스쿨은 단순한 AI 기술 교육이 아닙니다. <br />
              우리는 <span className="text-antiqueGold font-medium">‘마음’</span>을 이해하고 그것을 콘텐츠로 표현하며 <br />
              삶과 수익으로 연결하는 교육을 합니다.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "마음을 구조화하는 힘",
              desc: "추상적인 감정과 무의식을 구체적인 이야기의 틀로 정제합니다.",
              icon: <Brain className="w-12 h-12 text-[#B89B6A] drop-shadow-[0_0_12px_rgba(184,155,106,0.4)] mx-auto" strokeWidth={1.5} />,
            },
            {
              title: "감정을 콘텐츠로 바꾸는 힘",
              desc: "내면의 에너지를 AI라는 도구를 통해 세상에 없는 작품으로 창조합니다.",
              icon: <Palette className="w-12 h-12 text-[#B89B6A] drop-shadow-[0_0_12px_rgba(184,155,106,0.4)] mx-auto" strokeWidth={1.5} />,
            },
            {
              title: "AI로 표현하고 확장하는 힘",
              desc: "기술을 넘어 나만의 브랜드를 구축하고 영향력을 확장해 나갑니다.",
              icon: <Rocket className="w-12 h-12 text-[#B89B6A] drop-shadow-[0_0_12px_rgba(184,155,106,0.4)] mx-auto" strokeWidth={1.5} />,
            },
          ].map((item, idx) => (
            <Reveal key={idx} delayMs={idx * 200}>
              <div className="p-10 rounded-[2rem] border border-white/10 bg-white/[0.03] backdrop-blur-sm hover:border-antiqueGold/40 hover:-translate-y-1 hover:scale-[1.01] hover:bg-white/[0.05] hover:shadow-[0_20px_40px_rgba(184,155,106,0.1)] transition-all duration-500 text-center group">
                <div className="mb-6 group-hover:scale-110 group-hover:drop-shadow-[0_0_20px_rgba(184,155,106,0.6)] transition-all duration-500">{item.icon}</div>
                <h3 className="text-xl font-bold mb-4 text-[#B89B6A] transition-colors duration-300">{item.title}</h3>
                <p className="text-white/60 leading-relaxed">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delayMs={600}>
          <p className="mt-16 text-center text-lg text-antiqueGold/80 italic">
            이 3가지를 통해 누구나 자신의 이야기를 브랜드로 만들 수 있도록 돕습니다.
          </p>
        </Reveal>
      </section>

      {/* 3. 5 Elements System Section */}
      <section className="py-24 px-6 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="text-center mb-20">
              <span className="text-antiqueGold tracking-[0.3em] text-xs font-bold uppercase mb-4 block">Core Curriculum</span>
              <h2 className="text-4xl md:text-6xl font-display mb-8">자명스쿨 5원소 시스템</h2>
              <p className="text-lg md:text-xl text-white/70 font-light max-w-3xl mx-auto leading-relaxed">
                자기 이해부터 수익화까지, 단계별로 성장하는 자명스쿨만의 통합 변화 시스템입니다. <br />
                우리는 배움이 아닌 ‘변화’를 만듭니다.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-5">
            {[
              {
                id: "earth",
                label: "흙",
                name: "마음을 심다",
                image: "/images/icon/earth.png",
                desc: "자기 이해 / 책 출판",
                color: "text-earth",
                borderClass: "border-earth/30",
                hoverBorderClass: "hover:border-earth/50",
                glowClass: "via-earth",
              },
              {
                id: "fire",
                label: "불",
                name: "마음을 그리다",
                image: "/images/icon/fire.png",
                desc: "AI 아트 / 감성 표현",
                color: "text-fire",
                borderClass: "border-fire/30",
                hoverBorderClass: "hover:border-fire/50",
                glowClass: "via-fire",
              },
              {
                id: "air",
                label: "공기",
                name: "마음을 나누다",
                image: "/images/icon/air.png",
                desc: "브랜딩 / 콘텐츠 제작",
                color: "text-air",
                borderClass: "border-air/30",
                hoverBorderClass: "hover:border-air/50",
                glowClass: "via-air",
              },
              {
                id: "water",
                label: "물",
                name: "마음을 채우다",
                image: "/images/icon/water.png",
                desc: "수익화 / 자동화",
                color: "text-water",
                borderClass: "border-water/30",
                hoverBorderClass: "hover:border-water/50",
                glowClass: "via-water",
              },
              {
                id: "ether",
                label: "에테르",
                name: "마음을 비추다",
                image: "/images/icon/ether.png",
                desc: "풍요 마인드 / 리더쉽",
                color: "text-ether",
                borderClass: "border-ether/30",
                hoverBorderClass: "hover:border-ether/50",
                glowClass: "via-ether",
              },
            ].map((element, idx) => (
              <Reveal key={idx} delayMs={idx * 150}>
                <div className={`p-8 rounded-[2rem] border ${element.borderClass} bg-white/[0.02] hover:bg-white/[0.06] hover:-translate-y-1.5 hover:scale-[1.01] ${element.hoverBorderClass} hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-all duration-[400ms] group text-center h-full flex flex-col items-center relative overflow-hidden`}>
                  <div className={`text-2xl font-display mb-4 ${element.color} opacity-70 group-hover:opacity-100 transition-opacity`}>{element.label}</div>
                  
                  <div className="relative w-24 h-24 mb-6 group-hover:scale-110 transition-transform duration-500 drop-shadow-md">
                    <Image src={element.image} alt={element.label} fill className="object-contain" />
                  </div>
                  
                  <h4 className="text-lg font-bold mb-2 group-hover:text-white transition-colors">{element.name}</h4>
                  <p className="text-sm text-white/60 leading-relaxed group-hover:text-white/80 transition-colors">{element.desc}</p>
                  {/* Subtle Glow Background */}
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br from-transparent ${element.glowClass} to-transparent`} />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Section Divider/Transition Text */}
      <div className="py-12 text-center bg-white/[0.02]">
        <Reveal delayMs={200}>
          <p className="text-3xl md:text-4xl font-display text-white/90 tracking-widest italic mb-6">
            "자명스쿨 5원소 시스템으로 이렇게 변화, 성장합니다."
          </p>
          <p className="text-base md:text-lg text-white/40 font-light tracking-wide">
            이 흐름을 따라가면 실제 강의, 콘텐츠, 수익 구조까지 연결됩니다.
          </p>
          <div className="mt-8 w-12 h-[1px] bg-white/20 mx-auto" />
        </Reveal>
      </div>

      {/* 3.5. Growth Flow Section */}
      <section className="pb-24 pt-12 px-6 relative overflow-hidden bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4 relative">
            {[
              {
                num: "01",
                name: "Earth",
                title: "나를 이해한다",
                desc: "나를 이해하고\n글, 그림으로 표현합니다.",
                color: "text-[#B89B6A]",
                bgColor: "bg-[#B89B6A]/10",
                borderColor: "border-[#B89B6A]/30",
                image: "/images/icon/earth.png"
              },
              {
                num: "02",
                name: "Fire",
                title: "나를 표현한다",
                desc: "감정과 내면에너지를\n아트로 만들어냅니다.",
                color: "text-[#EF4444]",
                bgColor: "bg-[#EF4444]/10",
                borderColor: "border-[#EF4444]/30",
                image: "/images/icon/fire.png"
              },
              {
                num: "03",
                name: "Air",
                title: "나를 전달한다",
                desc: "메시지와 콘텐츠로\n사람들과 연결합니다.",
                color: "text-[#E5E7EB]",
                bgColor: "bg-[#E5E7EB]/10",
                borderColor: "border-[#E5E7EB]/30",
                image: "/images/icon/air.png"
              },
              {
                num: "04",
                name: "Water",
                title: "돈을 흐르게 한다",
                desc: "가치를 돈으로 바꾸는\n구조를 만듭니다.",
                color: "text-[#3B82F6]",
                bgColor: "bg-[#3B82F6]/10",
                borderColor: "border-[#3B82F6]/30",
                image: "/images/icon/water.png"
              },
              {
                num: "05",
                name: "Ether",
                title: "확장된다",
                desc: "에너지를 확장하고\n세상에 영향을 미칩니다.",
                color: "text-[#A855F7]",
                bgColor: "bg-[#A855F7]/10",
                borderColor: "border-[#A855F7]/30",
                image: "/images/icon/ether.png",
              }
            ].map((item, idx) => {
              const flowGlowColors = [
                "from-[#B89B6A] via-[#D6C6A8] to-transparent", // Earth -> Fire (Gold)
                "from-[#EF4444] via-[#F87171] to-transparent", // Fire -> Air (Red)
                "from-[#E5E7EB] via-white to-transparent",     // Air -> Water (Silver/White)
                "from-[#3B82F6] via-[#A855F7] to-transparent", // Water -> Ether (Blue/Purple)
              ];

              return (
                <Reveal key={idx} delayMs={idx * 100} slideFrom="bottom">
                  <div className="relative flex flex-col items-center text-center group">
                    {/* Number */}
                    <span className={`text-sm font-bold mb-4 opacity-60 ${item.color}`}>{item.num}</span>
                    
                    {/* Circle Icon Container */}
                    <div className={`w-24 h-24 rounded-full border-2 ${item.borderColor} ${item.bgColor} flex items-center justify-center mb-6 relative z-10 transition-transform duration-500 group-hover:scale-110 shadow-[0_0_20px_rgba(0,0,0,0.3)] p-5`}>
                      <div className="relative w-full h-full">
                        <Image src={item.image} alt={item.name} fill className="object-contain" />
                      </div>
                      
                      {/* Connecting Arrow (Desktop Only Animation) */}
                      {idx < 4 && (
                        <div className="hidden md:block absolute top-1/2 -right-full w-full h-[1px] bg-white/5 z-0">
                          {/* Base Static Line */}
                          <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent" />
                          
                          {/* Animated Flow Glow */}
                          <div className={`absolute top-0 h-full w-1/2 bg-gradient-to-r ${flowGlowColors[idx]} animate-flow-line opacity-50 blur-[2px]`} />
                          
                          {/* Arrow Head */}
                          <div className="absolute right-0 -top-[3px] border-t-[1px] border-r-[1px] border-white/20 w-[7px] h-[7px] rotate-45" />
                        </div>
                      )}
                    </div>

                    {/* Text Content */}
                    <div className="space-y-3">
                      <h4 className={`text-lg font-bold uppercase tracking-wider ${item.color}`}>{item.name}</h4>
                      <h3 className="text-xl font-bold text-white break-keep">{item.title}</h3>
                      <p className="text-sm text-white/40 leading-relaxed whitespace-pre-line break-keep">{item.desc}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>


      {/* 4. Instructor Section */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div className="relative group perspective-1000">
              <div className="absolute -inset-4 bg-antiqueGold/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-all duration-1000"></div>
              <div className="relative overflow-hidden rounded-[2.5rem] bg-zinc-900 border border-white/10 aspect-[4/5] md:aspect-[3/4] transition-all duration-700 group-hover:translate-y-[-8px] group-hover:shadow-[0_45px_100px_rgba(0,0,0,0.6)]">
                <Image
                  src="/images/about/instructor.jpg"
                  alt="자명쌤 백진선 프로필"
                  fill
                  className="object-cover transition-all duration-1000 group-hover:scale-110 group-hover:brightness-110"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-softBlack/80 backdrop-blur-xl border border-white/10 rounded-3xl p-6 hidden md:flex flex-col justify-center transition-all duration-500 group-hover:translate-y-[-4px] group-hover:border-antiqueGold/30 group-hover:shadow-2xl">
                <span className="text-antiqueGold font-display text-4xl mb-2 italic">Vision</span>
                <p className="text-white/60 text-xs leading-relaxed">
                  마음을 콘텐츠로 바꾸는 <br />
                  가장 아름다운 기술
                </p>
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal slideFrom="right">
              <div className="flex items-center space-x-3 text-antiqueGold mb-6">
                <span className="font-display tracking-[0.3em] text-xs uppercase">Founder & Instructor</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-display mb-2 text-white italic lowercase tracking-tight">
                자명쌤 <span className="bg-gradient-to-r from-antiqueGold to-champagneGold bg-clip-text text-transparent font-sans not-italic text-3xl font-bold ml-2">백진선</span>
              </h2>
              <p className="text-white/40 font-light mb-8 italic">AI × 심리 × 인문학을 결합한 교육 전문가</p>
              
              <div className="space-y-10 mb-12">
                <p className="text-white/80 font-light leading-relaxed break-keep">
                  심리학 전공을 기반으로 NLP, 최면, 명상, 브레인 트레이닝 등 사람의 무의식과 변화 구조를 연구해왔으며, AI 관련 자격증 30개 이상과 강의·콘텐츠 제작·수익화 경험을 통해 검증된 실전 교육을 제공합니다.
                </p>
                <p className="text-white/80 font-light leading-relaxed break-keep">
                  자명심리문화연구소 대표, 한국디지털마인드코칭협회 협회장, 그리고 이끌림출판사 대표로서 단순한 정보 전달을 넘어 사람들의 내면에 잠든 창의성을 깨우는 일을 하고 있습니다.
                </p>
                <ul className="space-y-3 text-white/60 text-sm font-light">
                  <li className="flex items-start gap-3 text-antiqueGold/90 font-medium">
                    <span className="text-antiqueGold">✔</span> 
                    <span>자명심리문화연구소 / 한국디지털마인드코칭협회 / 이끌림출판사 대표</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-antiqueGold">✔</span> 
                    <span>구글 공인 교육자 (Google Certified Educator) 인증</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-antiqueGold">✔</span> 
                    <span>국제디지털콘텐츠협회 지국장</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-antiqueGold">✔</span> 
                    <span>40권 이상 저서 출간 작가 및 출판 지도사</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-antiqueGold">✔</span> 
                    <span>AI 그림책 / 감성 콘텐츠 제작 전문가</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-antiqueGold">✔</span> 
                    <span>1,000명 이상의 수강생과 3,000건 이상의 코칭 프로젝트 진행</span>
                  </li>
                </ul>
              </div>

              <div className="p-8 rounded-3xl border border-antiqueGold/20 bg-antiqueGold/5 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <svg className="w-12 h-12 text-antiqueGold" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017V14H15.017C13.3601 14 12.017 12.6569 12.017 11V7C12.017 5.34315 13.3601 4 15.017 4H19.017C20.6739 4 22.017 5.34315 22.017 7V16C22.017 18.7614 19.7784 21 17.017 21H14.017ZM2.01697 21L2.01697 18C2.01697 16.8954 2.91241 16 4.01697 16H7.01697V14H3.01697C1.36012 14 0.0169678 12.6569 0.0169678 11V7C0.0169678 5.34315 1.36012 4 3.01697 4H7.01697C8.67383 4 10.017 5.34315 10.017 7V16C10.017 18.7614 7.77839 21 5.01697 21H2.01697Z" />
                  </svg>
                </div>
                <p className="text-xl md:text-2xl text-antiqueGold font-display leading-tight italic">
                  “AI는 단순한 도구가 아니라 <br />
                  마음을 표현하는 가장 현대적인 언어입니다.”
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 4.5 Professional Certification Courses Section */}
      <section className="py-24 md:py-32 px-6 max-w-7xl mx-auto relative">
        <div className="text-center mb-16 px-4">
          <Reveal>
            <div className="flex items-center justify-center space-x-3 text-antiqueGold mb-4">
              <span className="font-display tracking-[0.3em] text-xs uppercase">Professional Certifications</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-white mb-6 leading-tight break-keep">
              자명스쿨은 마음과 디지털 역량을 연결하는 <br className="hidden md:block" />
              <span className="bg-gradient-to-r from-[#E2D4BE] via-[#D6C6A8] to-[#B89B6A] bg-clip-text text-transparent font-bold inline-block px-1">
                5개의 전문 자격과정
              </span>
              을 운영합니다.
            </h2>
            <p className="text-white/60 text-base md:text-lg font-light max-w-3xl mx-auto leading-relaxed break-keep">
              한국디지털마인드코칭협회 공식 인증 커리큘럼을 통해 내면의 본질을 세우고,
              디지털과 AI 기술로 세상에 가치를 전하는 전문 강사·지도사로 성장하세요.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {[
            {
              title: "디지털마인드코칭전문가",
              badge: "제5원소 에테르",
              category: "마인드 & 리더십",
              desc: "무의식과 잠재력을 깨우고 디지털 시대 풍요로운 삶의 좌표를 이끄는 최고위 코칭 과정",
              image: "/images/icon/ether.png",
              link: "/courses/abundance",
              color: "text-[#A855F7]",
              borderColor: "border-[#A855F7]/30",
              badgeBg: "bg-[#A855F7]/10 text-[#C084FC]",
              glowColor: "rgba(168, 85, 247, 0.15)",
            },
            {
              title: "AI브랜딩마스터강사",
              badge: "제4원소 물",
              category: "비즈니스 & 수익화",
              desc: "고유한 가치와 AI 자동화 시스템을 결합하여 지속 가능한 디지털 수익 자산을 구축하는 과정",
              image: "/images/icon/water.png",
              link: "/courses/water",
              color: "text-water",
              borderColor: "border-water/30",
              badgeBg: "bg-water/10 text-water",
              glowColor: "rgba(56, 189, 248, 0.15)",
            },
            {
              title: "캔바콘텐츠마스터강사",
              badge: "제3원소 공기",
              category: "콘텐츠 & 강의",
              desc: "캔바와 AI를 활용하여 시선을 사로잡는 고품격 비주얼 콘텐츠와 명품 강의 교안을 제작하는 과정",
              image: "/images/icon/air.png",
              link: "/courses/air",
              color: "text-air",
              borderColor: "border-air/30",
              badgeBg: "bg-air/10 text-[#F1E5AC]",
              glowColor: "rgba(226, 212, 190, 0.15)",
            },
            {
              title: "감성출판지도사",
              badge: "제1원소 흙",
              category: "자기인식 & 출판",
              desc: "내면의 경험과 통찰을 정돈하여 세상에 단 하나뿐인 브랜딩 그림책과 에세이를 기획·출판하는 과정",
              image: "/images/icon/earth.png",
              link: "/courses/earth",
              color: "text-earth",
              borderColor: "border-earth/30",
              badgeBg: "bg-earth/10 text-earth",
              glowColor: "rgba(184, 155, 106, 0.15)",
            },
            {
              title: "AI감성아트지도사",
              badge: "제2원소 불",
              category: "감정표현 & 아트",
              desc: "감정과 내면 세계관을 최첨단 생성형 AI 아트로 시각화하고 실제 작품과 굿즈로 확장하는 과정",
              image: "/images/icon/fire.png",
              link: "/courses/fire",
              color: "text-fire",
              borderColor: "border-fire/30",
              badgeBg: "bg-fire/10 text-fire",
              glowColor: "rgba(239, 68, 68, 0.15)",
            },
          ].map((course, idx) => (
            <Reveal key={idx} delayMs={idx * 100} slideFrom="bottom">
              <div className="h-full p-7 rounded-[2rem] bg-white/[0.02] border border-white/10 hover:border-antiqueGold/40 hover:bg-white/[0.05] transition-all duration-500 flex flex-col justify-between group relative overflow-hidden shadow-lg hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] hover:-translate-y-2">
                {/* Glow backdrop on hover */}
                <div 
                  className="absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem] pointer-events-none -z-10" 
                  style={{
                    background: `radial-gradient(400px circle at 50% 0%, ${course.glowColor}, transparent 70%)`
                  }}
                />

                <div>
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className={`text-xs px-3 py-1 rounded-full font-medium border border-white/10 ${course.badgeBg}`}>
                      {course.badge}
                    </span>
                    <div className="relative w-12 h-12 group-hover:scale-110 transition-transform duration-500">
                      <Image src={course.image} alt={course.title} fill className="object-contain" />
                    </div>
                  </div>

                  <p className="text-xs text-white/40 tracking-wider mb-2 font-light">{course.category}</p>
                  <h3 className="text-lg md:text-xl font-bold text-white mb-3 group-hover:text-antiqueGold transition-colors break-keep leading-snug">
                    {course.title}
                  </h3>
                  <p className="text-sm text-white/60 font-light leading-relaxed mb-6 break-keep">
                    {course.desc}
                  </p>
                </div>

                {/* Action Link */}
                <div className="pt-4 border-t border-white/5">
                  <Link
                    href={course.link}
                    className="w-full py-3 px-4 rounded-xl bg-white/[0.04] border border-white/10 text-white/90 text-sm font-semibold flex items-center justify-center gap-2 group/btn hover:bg-gradient-to-r hover:from-antiqueGold hover:to-champagneGold hover:text-[#0B0B10] hover:border-transparent transition-all duration-300"
                  >
                    <span>과정 자세히 보기</span>
                    <span className="group-hover/btn:translate-x-1 transition-transform duration-300 text-xs">→</span>
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* KDMCA Association Link Banner */}
        <div className="mt-14 max-w-4xl mx-auto">
          <Reveal delayMs={200} slideFrom="bottom">
            <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-r from-white/[0.04] via-white/[0.02] to-white/[0.04] border border-antiqueGold/30 hover:border-antiqueGold/60 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="text-center sm:text-left space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-antiqueGold/10 border border-antiqueGold/30 text-antiqueGold text-xs font-medium">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>공식 자격증 발급·인증 기관</span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">
                  한국디지털마인드코칭협회 <span className="text-antiqueGold text-base font-normal">(KDMCA)</span>
                </h3>
                <p className="text-white/60 text-sm font-light leading-relaxed break-keep">
                  자명스쿨의 5대 민간자격과정 공식 인증 기준 및 협회 설립 목적과 비전을 확인하실 수 있습니다.
                </p>
              </div>

              <Link
                href="/kdmca"
                className="shrink-0 px-6 py-3.5 rounded-xl bg-gradient-to-r from-antiqueGold via-[#D4AF37] to-champagneGold text-[#0B0B10] font-bold text-sm tracking-tight flex items-center gap-2 hover:brightness-110 hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 group"
              >
                <span>협회 소개 바로가기</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 5. Target Audience Section */}
      <section className="py-24 px-6 bg-white/[0.02]">
        <div className="max-w-5xl mx-auto py-16 px-8 rounded-[3rem] border border-white/5 bg-white/[0.01] text-center">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-display mb-12">이런 분들에게 추천합니다</h2>
            <div className="grid sm:grid-cols-2 gap-4 text-left">
              {[
                "나만의 콘텐츠를 만들고 싶은 분",
                "AI로 수익을 만들고 싶은 분",
                "감성과 이야기를 표현하고 싶은 분",
                "강의 / 전자책 / 브랜드를 만들고 싶은 분",
                "새로운 삶의 방향을 찾고 있는 분",
                "디지털 도구를 가치 있게 쓰고 싶은 분",
                "나를 표현하고 가치를 전달하고 싶으신 분",
                "AI시대 마음과 기술을 융합하고 싶으신 분",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.07] hover:border-white/15 hover:translate-x-1.5 transition-all duration-300 group cursor-default">
                  <span className="text-antiqueGold text-lg leading-none group-hover:scale-150 transition-transform">●</span>
                  <span className="text-white/80 font-light group-hover:text-white transition-colors">{item}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* 6. Results/Transformation Section */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <Reveal>
          <div className="text-center mb-16 px-4">
             <h2 className="text-2xl md:text-3xl font-display text-antiqueGold tracking-[0.2em] mb-4 uppercase">Transformation</h2>
            <h3 className="text-4xl md:text-6xl font-display mb-8">자명스쿨에서 얻을 수 있는 변화</h3>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {[
            { title: "콘텐츠 제작 능력", desc: "나만의 고유한 메시지를 창작물로 변형" },
            { title: "AI 실전 스킬", desc: "이미지, 텍스트, 자동화 도구 숙달" },
            { title: "브랜드 구축", desc: "고유한 페르소나와 정체성 확립" },
            { title: "수익화 구조", desc: "지식 창업과 콘텐츠 기반 수익 시스템" },
            { title: "삶의 자신감", desc: "도구에 매몰되지 않는 주체적 변화" },
          ].map((item, idx) => (
            <Reveal key={idx} delayMs={idx * 150} slideFrom="bottom">
              <div className="p-8 rounded-[2.5rem] bg-white/[0.03] border border-white/10 hover:-translate-y-1.5 hover:scale-[1.01] hover:bg-white/[0.06] hover:border-antiqueGold/20 hover:shadow-[0_25px_50px_rgba(0,0,0,0.5)] transition-all duration-500 h-full flex flex-col justify-center text-center group">
                <div className="text-3xl mb-4 font-display text-[#B89B6A]/50 group-hover:text-[#B89B6A]/80 transition-colors">{idx + 1}</div>
                <h4 className="text-lg font-bold mb-3 text-[#B89B6A] group-hover:text-white transition-colors">{item.title}</h4>
                <p className="text-white/50 text-xs leading-relaxed group-hover:text-white/70 transition-colors">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
        
        <Reveal delayMs={800}>
          <p className="mt-20 text-center text-xl md:text-2xl font-display text-white italic tracking-wide">
             단순한 배움을 넘어, <br className="md:hidden" />
             삶의 <span className="text-antiqueGold">전환</span>을 경험하게 됩니다.
          </p>
        </Reveal>
      </section>

      {/* 7. Final CTA Section */}
      <section className="py-32 px-6 bg-white/[0.02] border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <h3 className="text-4xl md:text-6xl font-display mb-12 leading-tight tracking-tight italic uppercase">
              지금 당신의 <span className="text-antiqueGold">새로운 가능성</span>을 <br />
              자명스쿨에서 시작하세요
            </h3>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
              <Link
                href="/courses"
                className="group relative overflow-visible h-16 w-full sm:w-64 px-8 flex items-center justify-center text-sm font-bold uppercase tracking-widest rounded-full bg-gradient-to-br from-[#B89B6A] to-[#9E7C47] text-[#0B0B10] shadow-2xl transition-all duration-300 ease-out transform-gpu hover:-translate-y-[2px]"
              >
                <span className="relative z-10">강의 보러가기</span>
                <span className="absolute -inset-2 bg-gradient-to-br from-[#B89B6A] to-[#9E7C47] opacity-0 blur-xl group-hover:opacity-45 transition-opacity duration-300 rounded-full" />
              </Link>

              <a
                href="https://pf.kakao.com/_IxguMn"
                target="_blank"
                rel="noopener noreferrer"
                className="h-16 w-full sm:w-64 px-8 flex items-center justify-center text-sm font-bold uppercase tracking-widest rounded-full border border-white/20 text-white hover:bg-white/5 transition-all duration-300"
              >
                무료특강 참여하기
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
