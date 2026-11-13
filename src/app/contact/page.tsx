import type { Metadata } from "next";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "고객센터 | 자명스쿨",
  description: "자명스쿨 교육, 협업, 콘텐츠 제작 및 강연 문의를 하실 수 있는 공간입니다.",
};

interface SnsCardItem {
  id: string;
  name: string;
  subhead: string;
  description: string;
  icon: React.ReactNode;
  url?: string; // 향후 실제 계정 URL 연결 시 사용 (현재는 미연결 상태)
}

const SNS_ITEMS: SnsCardItem[] = [
  {
    id: "instagram",
    name: "Instagram",
    subhead: "일상 속 영감과 감성 창작 이야기",
    description: "AI 창작 작품, 그림책, 감성 콘텐츠와 자명스쿨의 새로운 소식을 소개하는 공간",
    icon: (
      <div className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 shadow-md p-2.5 bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888]">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full text-white">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      </div>
    ),
    // url: "" // 향후 실제 URL 추가 시 입력
  },
  {
    id: "threads",
    name: "Threads",
    subhead: "생각을 나누고 영감을 발견하는 공간",
    description: "자기 이해, 마음공부, AI 활용과 창작에 관한 짧은 생각을 나누는 공간",
    icon: (
      <div className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 shadow-md p-2.5 bg-[#101010] border border-white/15">
        <svg viewBox="0 0 192 192" fill="currentColor" className="w-full h-full text-white">
          <path d="M141.537 88.9883C140.71 88.5919 139.87 88.2104 139.019 87.8451C137.537 60.5382 122.616 44.905 97.4619 44.905C70.3934 44.905 52.4111 63.666 52.4111 96.1105C52.4111 128.555 70.3934 147.316 97.4619 147.316C117.808 147.316 132.85 136.938 138.448 119.782H118.826C114.717 127.387 106.843 131.642 97.4619 131.642C79.8058 131.642 68.6186 118.069 68.6186 96.1105C68.6186 74.1523 79.8058 60.5791 97.4619 60.5791C114.167 60.5791 122.421 71.9366 123.328 92.2037C114.664 90.0076 104.912 88.8093 94.0728 88.8093C68.0494 88.8093 54.0254 100.999 54.0254 117.818C54.0254 134.637 68.0494 146.827 94.0728 146.827C111.458 146.827 125.751 138.747 131.611 125.59C135.215 138.411 146.545 147.316 162.274 147.316C174.653 147.316 184.28 140.669 187.644 129.412L172.936 124.903C171.189 130.342 166.705 133.284 160.771 133.284C152.015 133.284 146.304 126.777 146.304 115.829V112.564C151.782 107.829 156.402 101.428 159.277 93.9859L144.151 88.242C142.366 93.0039 139.11 97.2797 134.808 100.725C136.634 94.7578 138.877 88.8093 141.537 88.9883ZM94.0728 131.153C77.4112 131.153 69.7214 123.957 69.7214 117.818C69.7214 111.679 77.4112 104.483 94.0728 104.483C104.092 104.483 113.125 105.747 121.171 107.962C118.665 122.955 108.974 131.153 94.0728 131.153Z" />
        </svg>
      </div>
    ),
    // url: ""
  },
  {
    id: "naver-blog",
    name: "Naver Blog",
    subhead: "배움과 창작을 깊이 있게 기록하는 공간",
    description: "AI 활용법, 출판 실습, 디지털 콘텐츠 제작과 교육 이야기를 차분하게 정리하는 공간",
    icon: (
      <div className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 shadow-md p-3 bg-[#03C75A]">
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-white">
          <path d="M16.273 12.845L7.376 0H0v24h7.727V11.155L16.624 24H24V0h-7.727z" />
        </svg>
      </div>
    ),
    // url: ""
  },
  {
    id: "youtube",
    name: "YouTube",
    subhead: "직접 보고 따라 하는 실전 배움",
    description: "AI 창작 튜토리얼, 원데이 클래스 미리보기와 다양한 실습 영상을 만나는 공간",
    icon: (
      <div className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 shadow-md p-3 bg-[#FF0000]">
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-white">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      </div>
    ),
    // url: ""
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-trueBlack text-white selection:bg-antiqueGold/30 overflow-x-hidden">
      {/* 1. Hero Section & Main Contact */}
      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-28 px-6">
        {/* Subtle Background Aurora Effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-antiqueGold/10 blur-[120px] rounded-full pointer-events-none opacity-40"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <Reveal>
            <span className="inline-block text-antiqueGold font-display text-xs tracking-[0.4em] mb-6 uppercase opacity-80">
              Customer Center
            </span>
          </Reveal>
          
          <Reveal delayMs={200}>
            <h1 className="text-5xl md:text-7xl font-display mb-10 leading-tight tracking-tight uppercase italic bg-gradient-to-br from-[#E2D4BE] via-[#D6C6A8] to-[#B89B6A] bg-clip-text text-transparent inline-block py-2 pr-4">
              고객센터
            </h1>
          </Reveal>
          
          <Reveal delayMs={300}>
            <div className="space-y-5 max-w-2xl mx-auto mb-14">
              <p className="text-xl md:text-2xl text-antiqueGold font-medium">
                지금, 당신의 시작을 도와드립니다
              </p>
              <div className="text-base md:text-lg text-white/70 font-light leading-relaxed space-y-3">
                <p>
                  자명스쿨은 단순한 교육이 아니라 <br />
                  삶의 방향을 함께 만드는 공간입니다.
                </p>
                <p>
                  강의, 협업, 콘텐츠 제작, 강연 문의까지 <br />
                  편하게 남겨주세요.
                </p>
                <p className="text-white/40 text-sm md:text-base">
                  하나하나 정성껏 답변드립니다. <br className="md:hidden" />
                  궁금한 점이 있다면 언제든 편하게 문의해주세요.
                </p>
              </div>
            </div>
          </Reveal>
          
          {/* Main Kakao CTA (기존 카카오톡 채널 버튼 및 링크 유지) */}
          <Reveal delayMs={400} slideFrom="bottom">
            <div className="flex justify-center mb-16 sm:mb-20">
              <a
                href="https://pf.kakao.com/_IxguMn"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative h-20 w-full max-w-md px-10 flex items-center justify-center text-sm font-bold uppercase tracking-[0.2em] rounded-full bg-gradient-to-br from-[#B89B6A] to-[#9E7C47] text-[#0B0B10] shadow-2xl transition-all duration-300 ease-out transform-gpu hover:-translate-y-[3px] hover:shadow-antiqueGold/20 active:scale-95"
              >
                <span className="relative z-10 text-base md:text-lg">카카오톡 채널로 문의하기</span>
                {/* Glow effect on hover */}
                <span className="absolute -inset-1 bg-gradient-to-br from-[#B89B6A] to-[#9E7C47] opacity-0 blur-xl group-hover:opacity-40 transition-opacity duration-300 rounded-full" />
                <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
              </a>
            </div>
          </Reveal>

          {/* 2. SNS 안내 섹션 (카카오톡 채널 버튼 바로 아래 신규 추가) */}
          <div className="pt-10 sm:pt-14 pb-16 sm:pb-20 border-t border-white/5">
            <Reveal delayMs={200}>
              <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
                <span className="text-xs font-bold tracking-[0.25em] text-[#B89B6A] uppercase mb-3 block">
                  Official Channels
                </span>
                <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#FAF7F2] mb-4 tracking-tight">
                  자명스쿨의 다양한 이야기를 만나보세요
                </h2>
                <p className="text-sm sm:text-base text-zinc-400 font-light leading-relaxed break-keep">
                  AI와 마음공부, 나만의 창작 이야기부터 새로운 강의 소식까지.<br className="hidden sm:inline" />
                  자명스쿨의 다양한 콘텐츠를 SNS에서도 만나보세요.
                </p>
              </div>
            </Reveal>

            {/* SNS 카드 그리드 (PC 2열 x 2행, 모바일 1열 x 4행) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 text-left max-w-4xl mx-auto">
              {SNS_ITEMS.map((item, idx) => {
                const isClickable = Boolean(item.url);

                // 향후 실제 URL이 입력되면 <a> 링크로 래핑, 현재는 안내용 정보 카드로 안전하게 렌더링
                const CardWrapper = isClickable ? "a" : "div";
                const wrapperProps = isClickable
                  ? {
                      href: item.url,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className: "cursor-pointer group",
                    }
                  : {
                      className: "cursor-default group",
                    };

                return (
                  <Reveal key={item.id} delayMs={150 * (idx + 1)}>
                    <CardWrapper
                      {...wrapperProps}
                      className={`h-full flex items-center justify-between p-6 sm:p-7 md:p-8 rounded-[20px] bg-gradient-to-br from-[#161619] via-[#141416] to-[#101012] border border-[#B89B6A]/20 transition-all duration-300 ease-out hover:-translate-y-[3px] hover:border-[#B89B6A]/50 hover:bg-[#1A1A1E] ${wrapperProps.className}`}
                    >
                      {/* 좌측: SNS 브랜드 아이콘 */}
                      <div className="shrink-0 mr-4 sm:mr-5">
                        {item.icon}
                      </div>

                      {/* 중앙: 텍스트 정보 */}
                      <div className="flex-1 min-w-0 pr-3 sm:pr-4">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-base sm:text-lg font-bold text-[#FAF7F2] tracking-tight">
                            {item.name}
                          </h3>
                        </div>
                        <p className="text-xs sm:text-[13px] font-medium text-[#D6C6A8] mb-1.5 break-keep">
                          {item.subhead}
                        </p>
                        <p className="text-xs text-zinc-400 font-light leading-relaxed line-clamp-2 break-keep">
                          {item.description}
                        </p>
                      </div>

                      {/* 우측: 장식용 화살표 아이콘 (링크 미연결 시 은은한 장식으로 표시) */}
                      <div className="shrink-0 text-zinc-600 group-hover:text-[#B89B6A]/80 transition-colors duration-300">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </CardWrapper>
                  </Reveal>
                );
              })}
            </div>
          </div>
          
          {/* 3. Email Section (기존 유지) */}
          <Reveal delayMs={300}>
            <div className="pt-10 border-t border-white/5 space-y-6">
              <div className="space-y-2">
                <p className="text-xs text-white/40 uppercase tracking-widest font-bold">Email Inquiry</p>
                <p className="text-2xl md:text-3xl font-display text-white transition-colors hover:text-antiqueGold">
                  buzasun@naver.com
                </p>
              </div>
              <p className="text-sm text-white/30 leading-relaxed font-light">
                ※ 이메일 문의는 답변까지 시간이 소요될 수 있습니다. <br />
                빠른 상담은 <span className="text-antiqueGold/60">카카오 채널</span>을 이용해주세요.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
      
      {/* Decorative vertical line (기존 유지) */}
      <div className="flex justify-center pb-20">
        <div className="w-px h-32 bg-gradient-to-b from-antiqueGold/40 to-transparent"></div>
      </div>
    </div>
  );
}
