import Link from "next/link";
import Reveal from "@/components/Reveal";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

type ElementType = "earth" | "fire" | "metal" | "water" | "abundance";

interface ElementData {
  slug: ElementType;
  symbol: string;
  name: string;
  lectureName: string;
  tagline: string;
  color: string;
  borderColor: string;
  bgColor: string;
  auraColor: string;
  recommends: string[];
  learningContent: string[];
  curriculum: {
    unit: string;
    title: string;
    details: string;
  }[];
  effects: string[];
}

const elementData: Record<ElementType, ElementData> = {
  earth: {
    slug: "earth",
    symbol: "🌱",
    name: "흙",
    lectureName: "마음을 심다",
    tagline: "내면의 뿌리를 세우는 자기이해 클래스",
    color: "text-earth",
    borderColor: "border-earth",
    bgColor: "bg-earth/10",
    auraColor: "rgba(168, 148, 122, 0.2)",
    recommends: [
      "자신에 대해 더 깊이 알고 싶은 분",
      "마음을 정리하고 정체성을 찾고 싶은 분",
      "막연한 불안감을 해소하고 단단한 내면을 원하는 분",
      "변화의 첫 단추를 제대로 끼우고 싶은 입문자",
    ],
    learningContent: [
      "자기 인식 및 무의식 정화 기법",
      "나만의 고유한 브랜드 가치 발견",
      "인생의 비전과 방향성 수립",
      "AI를 활용한 내면 탐색 대화법",
    ],
    curriculum: [
      { unit: "1주차", title: "무의식의 발견", details: "내면의 목소리를 듣고 현재의 나를 있는 그대로 수용하기" },
      { unit: "2주차", title: "감정 정화와 수용", details: "과거의 기억에서 자유로워지고 맑은 의식 상태 만들기" },
      { unit: "3주차", title: "정체성 구조화", details: "나만의 핵심 가치와 키워드를 뽑아내어 정체성 확립하기" },
      { unit: "4주차", title: "미래 설계와 확신", details: "확정된 정체성을 바탕으로 구체적인 삶의 청사진 그리기" },
    ],
    effects: [
      "자신에 대한 확신과 높은 자존감 형성",
      "삶의 우선순위가 명확해지는 지혜 확보",
      "어떤 상황에서도 흔들리지 않는 뿌리 깊은 마인드",
    ],
  },
  fire: {
    slug: "fire",
    symbol: "🔥",
    name: "불",
    lectureName: "마음을 그리다",
    tagline: "AI로 감정과 상상을 시각화하는 아트 클래스",
    color: "text-fire",
    borderColor: "border-fire",
    bgColor: "bg-fire/10",
    auraColor: "rgba(255, 95, 95, 0.2)",
    recommends: [
      "AI 아트를 배우고 싶은 입문자",
      "감정을 예술적으로 표현하고 싶은 분",
      "글만으로는 부족함을 느끼는 창작자",
      "독창적인 세계관을 시각화하고 싶은 분",
    ],
    learningContent: [
      "고성능 AI 이미지 생성 도구 사용법",
      "감정에 따른 프롬프트 설계 기법",
      "세계관 시각화 및 아트워크 제작",
      "디지털 갤러리 전시 및 작품화",
    ],
    curriculum: [
      { unit: "1주차", title: "AI 도구와 친해지기", details: "기본적인 이미지 생성 원리와 프롬프트 기초 학습" },
      { unit: "2주차", title: "감정의 색채화", details: "현재의 감정을 상징적인 이미지로 표현하는 기술" },
      { unit: "3주차", title: "세계관 심화", details: "나만의 고유한 서사를 담은 연작 시리즈 제작하기" },
      { unit: "4주차", title: "아트워크 완성", details: "최종 작품 리터칭 및 나만의 포트폴리오 사이트 구축" },
    ],
    effects: [
      "전문가 수준의 AI 이미지 제작 능력 확보",
      "내적 억눌림을 예술로 치유하는 창조적 경험",
      "디지털 시대의 새로운 창작 무기 장착",
    ],
  },
  metal: {
    slug: "metal",
    symbol: "🌀",
    name: "공기",
    lectureName: "마음을 나누다",
    tagline: "콘텐츠와 메시지로 나를 표현하는 브랜딩 클래스",
    color: "text-air",
    borderColor: "border-air",
    bgColor: "bg-air/10",
    auraColor: "rgba(214, 198, 168, 0.2)",
    recommends: [
      "나만의 지혜를 세상에 알리고 싶은 분",
      "전자책이나 강의를 만들고 싶은 분",
      "콘텐츠 제작의 구조를 잡고 싶은 분",
      "설득력 있는 메시지 전달을 원하는 리더",
    ],
    learningContent: [
      "메시지 구조화 및 커리큘럼 설계",
      "독자의 마음을 움직이는 콘텐츠 글쓰기",
      "전자책 기획 및 디자인 자동화",
      "AI를 활용한 콘텐츠 재생산 시스템",
    ],
    curriculum: [
      { unit: "1주차", title: "메시지 타겟팅", details: "나의 지혜를 필요로 하는 대상과 핵심 메시지 규정" },
      { unit: "2주차", title: "콘텐츠 설계학", details: "누구나 쉽게 이해하는 4단계 교육 구조 설계" },
      { unit: "3주차", title: "제작 자동화", details: "AI와 캔바를 연동해 빠른 결과물 제작 시스템 구축" },
      { unit: "4주차", title: "런칭 전략", details: "첫 콘텐츠를 세상에 내놓는 브랜딩 및 홍보 기법" },
    ],
    effects: [
      "자신만의 콘텐츠/강의 브랜드 구축 완료",
      "논리적이고 설득력 있는 표현 능력 비약적 향상",
      "세상과 소통하는 강력한 영향력의 씨앗 확보",
    ],
  },
  water: {
    slug: "water",
    symbol: "💧",
    name: "물",
    lectureName: "마음을 채우다",
    tagline: "지식과 콘텐츠를 수익으로 연결하는 클래스",
    color: "text-water",
    borderColor: "border-water",
    bgColor: "bg-water/10",
    auraColor: "rgba(137, 207, 240, 0.2)",
    recommends: [
      "1인 지식창업을 꿈꾸는 분",
      "콘텐츠를 수익으로 자동 연결하고 싶은 분",
      "랜딩페이지 및 마케팅 구조를 배우고 싶은 분",
      "지속 가능한 비즈니스 시스템을 원하는 프로",
    ],
    learningContent: [
      "고수익 상품 구조 및 가격 전략",
      "구매를 부르는 랜딩페이지 카피라이팅",
      "자동화 깔때기(Funnel) 시스템 구축",
      "AI 기반 고객 관리 및 마케팅 도구활용",
    ],
    curriculum: [
      { unit: "1주차", title: "수익 구조 설계", details: "고객 여정에 맞는 상품 라인업과 비즈니스 모델링" },
      { unit: "2주차", title: "랜딩페이지 구축", details: "단숨에 시선을 끄는 카피라이팅과 웹 페이지 제작" },
      { unit: "3주차", title: "자동화 시스템", details: "지속적인 유입과 판매가 일어나는 자동 순환 구조 설계" },
      { unit: "4주차", title: "성장과 분석", details: "데이터를 읽고 사업을 더 크게 키우는 확장 전략" },
    ],
    effects: [
      "실제로 작동하는 지식 창업 시스템 확보",
      "시간과 장소에 구애받지 않는 수익 구조 기반 마련",
      "경제적 자유를 위한 실질적인 실무 역량 완성",
    ],
  },
  abundance: {
    slug: "abundance",
    symbol: "✨",
    name: "제5원소",
    lectureName: "풍요마인드",
    tagline: "확장과 순환의 에너지를 배우는 성장 클래스",
    color: "text-white",
    borderColor: "border-white",
    bgColor: "bg-white/10",
    auraColor: "rgba(255, 255, 255, 0.15)",
    recommends: [
      "성장의 한계를 느끼는 비즈니스 리더",
      "풍요로운 의식 상태를 유지하고 싶은 분",
      "타인에게 선한 영향력을 주고자 하는 멘토",
      "의식과 현실의 균형을 마스터하고 싶은 분",
    ],
    learningContent: [
      "결핍 의식에서 풍요 의식으로의 완전한 전환",
      "지속 가능한 성장을 만드는 리더십 마인드셋",
      "에너지 파동과 현실 창조의 상관관계",
      "커뮤니티 확장 및 선순환 리더십",
    ],
    curriculum: [
      { unit: "1주차", title: "풍요의 근원", details: "모든 것이 이미 부족함 없음을 아는 의식 전환 훈련" },
      { unit: "2주차", title: "확장의 에너지", details: "나의 한계를 깨고 무한한 성장의 장으로 들어서기" },
      { unit: "3주차", title: "나눔의 리더십", details: "주는 행위가 곧 받는 행위임을 깨닫는 선순환 실습" },
      { unit: "4주차", title: "마스터리", details: "현실을 창조하고 세상을 이롭게 하는 마스터의 삶 수립" },
    ],
    effects: [
      "어떤 상황에서도 평온한 풍요 의식 상태 확립",
      "주변 사람들에게 깊은 영감을 주는 리더십 확보",
      "성장 그 자체가 즐거움이 되는 최고 수준의 마인드",
    ],
  },
};

export async function generateMetadata({ params }: { params: Promise<{ element: string }> }): Promise<Metadata> {
  const { element } = await params;
  const data = elementData[element as ElementType];
  
  if (!data) return { title: "Page Not Found" };
  
  return {
    title: `${data.name} | ${data.lectureName} - 자명스쿨`,
    description: data.tagline,
  };
}

export default async function ElementDetailPage({ params }: { params: Promise<{ element: string }> }) {
  const { element } = await params;
  const data = elementData[element as ElementType];

  if (!data) return notFound();

  return (
    <div className="bg-trueBlack min-h-screen text-white font-sans selection:bg-antiqueGold/30">
      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 overflow-hidden">
        {/* Aura Background */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] blur-[150px] opacity-20 pointer-events-none"
          style={{ backgroundColor: data.auraColor }}
        ></div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <Reveal>
            <div className={`text-6xl md:text-8xl mb-10 group-hover:scale-110 transition-transform duration-700`}>
              {data.symbol}
            </div>
          </Reveal>
          <Reveal delayMs={200}>
            <span className={`${data.color} font-display text-sm tracking-[0.4em] mb-6 block uppercase opacity-80`}>
              {data.name} Curriculum
            </span>
            <h1 className="text-4xl md:text-7xl font-display mb-8 leading-tight tracking-tight uppercase italic">
              {data.lectureName}
            </h1>
          </Reveal>
          <Reveal delayMs={400}>
            <p className="text-xl md:text-2xl text-white/80 font-light leading-relaxed max-w-2xl mx-auto">
              {data.tagline}
            </p>
          </Reveal>
        </div>
      </section>

      {/* 2. Recommended For Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
           <Reveal>
              <h2 className="text-3xl md:text-5xl font-display mb-8">이런 분께 <br className="hidden md:block" /><span className={data.color}>추천합니다</span></h2>
              <div className="space-y-4">
                {data.recommends.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-5 rounded-2xl bg-white/[0.03] border border-white/5">
                    <span className={data.color}>✦</span>
                    <span className="text-white/80 font-light">{item}</span>
                  </div>
                ))}
              </div>
           </Reveal>
           <Reveal delayMs={400}>
              <div className={`p-12 rounded-[2.5rem] border ${data.borderColor}/20 bg-white/[0.02] flex flex-col justify-center h-full`}>
                <h3 className="text-xl font-bold mb-6 italic text-white/40">Our Mission</h3>
                <p className="text-2xl md:text-3xl font-display leading-tight italic">
                   단순한 지식이 아닌, <br />
                   당신의 존재 자체가 <br /> 
                   <span className={data.color}>가치가 되는 과정</span>입니다.
                </p>
              </div>
           </Reveal>
        </div>
      </section>

      {/* 3. Learning Content Section */}
      <section className="py-24 px-6 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display mb-4">강의에서 배우는 내용</h2>
              <div className={`w-20 h-1 mx-auto rounded-full bg-current ${data.color}`}></div>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.learningContent.map((item, idx) => (
              <Reveal key={idx} delayMs={idx * 150} slideFrom="bottom">
                <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/5 hover:border-white/20 transition-all duration-500 h-full flex flex-col items-center text-center">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-6 ${data.bgColor} ${data.color} font-bold`}>
                    {idx + 1}
                  </div>
                  <p className="text-white/90 font-medium leading-relaxed">{item}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Curriculum Section */}
      <section className="py-24 px-6 max-w-5xl mx-auto font-sans">
        <Reveal>
          <div className="text-center mb-16">
             <h2 className="text-3xl md:text-4xl font-display mb-12">상세 커리큘럼</h2>
          </div>
        </Reveal>

        <div className="space-y-6">
          {data.curriculum.map((item, idx) => (
            <Reveal key={idx} delayMs={idx * 150}>
              <div className="group relative p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all duration-500">
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  <div className={`text-2xl font-display ${data.color} opacity-60 min-w-[100px]`}>{item.unit}</div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold mb-2 text-white/90">{item.title}</h4>
                    <p className="text-white/50 leading-relaxed font-light">{item.details}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 5. Expected Effects Section */}
      <section className="py-24 px-6 max-w-4xl mx-auto text-center">
        <Reveal>
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-display mb-12">수강 후 기대 효과</h2>
            <div className="space-y-6">
              {data.effects.map((item, idx) => (
                <div key={idx} className="text-xl md:text-2xl text-white/80 font-light italic">
                  “ {item} ”
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* 6. Application Info & CTA */}
      <section className="py-32 px-6 bg-gradient-to-b from-transparent to-white/[0.03] border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <div className="mb-12">
               <h3 className="text-2xl font-bold mb-4">신청 안내</h3>
               <p className="text-white/50 font-light">
                 상세 일정 및 모집 안내는 별도 공지됩니다. <br />
                 현재 수강 대기 및 궁금한 사항은 아래로 문의해 주세요.
               </p>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-20">
              <a
                href="https://pf.kakao.com/_IxguMn"
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative overflow-visible h-16 w-full sm:w-72 px-8 flex items-center justify-center text-sm font-bold uppercase tracking-widest rounded-full bg-gradient-to-br from-[#B89B6A] to-[#9E7C47] text-[#0B0B10] shadow-2xl transition-all duration-300 transform-gpu hover:-translate-y-[2px]`}
              >
                <span className="relative z-10 font-bold">강의 신청 문의하기</span>
                <span className="absolute -inset-2 bg-gradient-to-br from-[#B89B6A] to-[#9E7C47] opacity-0 blur-xl group-hover:opacity-45 transition-opacity duration-300 rounded-full" />
              </a>
            </div>

            <Link
              href="/courses"
              className="text-white/40 hover:text-white transition-colors duration-300 text-sm tracking-widest uppercase border-b border-white/10 pb-1"
            >
              ← 강의소개 메인으로 돌아가기
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
