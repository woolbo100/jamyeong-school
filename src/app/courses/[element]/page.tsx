import Link from "next/link";
import Reveal from "@/components/Reveal";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

type ElementType = "earth" | "fire" | "water" | "abundance";

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
  water: {
    slug: "water",
    symbol: "💧",
    name: "물",
    lectureName: "마음을 채우다",
    tagline: "나의 온기를 담은 24시간 일하는 디지털 안식처",
    color: "text-water",
    borderColor: "border-water",
    bgColor: "bg-water/10",
    auraColor: "rgba(137, 207, 240, 0.2)",
    recommends: [
      "시간과 체력의 한계를 느끼는 강사·상담사·창작자",
      "코딩을 전혀 모르지만 나만의 웹서비스를 갖고 싶은 분",
      "내 콘텐츠와 철학을 담은 독립적인 서비스 공간을 원하는 분",
      "매번 신청을 받고 안내하는 반복 업무를 줄이고 싶은 분",
    ],
    learningContent: [
      "내 전문성을 담은 서비스 기획",
      "AI와 대화하며 만드는 바이브 코딩 기초",
      "감성을 담은 웹서비스 디자인",
      "배포와 운영·자동화의 기초",
    ],
    curriculum: [
      { unit: "1회차", title: "서비스 기획", details: "내 전문성을 담은 서비스 주제 선정 및 핵심 기능 정리" },
      { unit: "2회차", title: "바이브 코딩 기초", details: "AI와 대화하며 화면과 기능을 구현하는 첫 프로토타입" },
      { unit: "3회차", title: "웹서비스 구현", details: "감성적인 디자인과 인터랙션으로 사용하기 편한 웹앱 완성" },
      { unit: "4회차", title: "배포 및 운영", details: "웹 배포와 반복 업무 자동화, 결제·운영 구조의 이해" },
    ],
    effects: [
      "AI와 함께 웹서비스 첫 버전을 만드는 실전 흐름 습득",
      "직접 응대하지 않는 시간에도 온기를 전하는 디지털 안식처 확보",
      "반복 업무를 줄이고 유료 서비스로 확장하는 지속 가능한 기반 마련",
    ],
  },
  abundance: {
    slug: "abundance",
    symbol: "✨",
    name: "제5원소",
    lectureName: "마음을 빛내다",
    tagline: "개인의 배움을 넘어, 타인의 성장을 이끄는 마인드 리더로",
    color: "text-[#E2C37A]",
    borderColor: "border-[#E2C37A]",
    bgColor: "bg-[#E2C37A]/10",
    auraColor: "rgba(226, 195, 122, 0.2)",
    recommends: [
      "혼자만의 창작과 성장을 넘어 더 큰 선한 영향력을 발휘하고 싶은 분",
      "결핍과 불안 대신 풍요와 신뢰를 바탕으로 일을 이어가고 싶은 분",
      "자명스쿨의 5원소 시스템을 바탕으로 수강생의 성장을 돕고 싶은 리더",
      "협회 연계 강사 활동, 자격과정 및 교육 커뮤니티로 확장하고 싶은 분",
    ],
    learningContent: [
      "풍요 마인드와 자기 리더십",
      "마인드 코칭의 기초 (경청과 질문)",
      "따뜻한 강의 설계와 진행",
      "커뮤니티와 교육 운영 (협회 연계)",
    ],
    curriculum: [
      { unit: "Part 1", title: "풍요 마인드", details: "나의 가치와 보상 기준을 세우고 결핍에서 풍요로 내면 정렬" },
      { unit: "Part 2", title: "마인드 코칭", details: "경청과 질문을 통해 상대의 가능성과 답을 이끌어내는 코칭 실습" },
      { unit: "Part 3", title: "강사 리더십", details: "초보 학습자의 눈높이에 맞춘 따뜻한 수업 설계와 강의 시연" },
      { unit: "Part 4", title: "교육 공간 설계", details: "교육 살롱 및 커뮤니티 기획, 협회 연계 활동의 준비 경로 이해" },
    ],
    effects: [
      "가치와 보상에 대한 확고한 기준을 세우고 지속 가능한 활동 방향 확보",
      "경청과 질문으로 다른 사람의 자기이해와 성장을 돕는 코칭 역량 습득",
      "나만의 전문성을 수업으로 전달하고 교육 커뮤니티를 운영할 기반 마련",
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
