import type { OnedayStatus } from "./onedayClasses";

// ─────────────────────────────────────────────────────────────
// 1. 교체형 이미지 슬롯 정의
// 모든 예시 이미지와 실제 서비스 화면은 src에 이미지 경로를 넣으면 즉시 교체됩니다.
// ─────────────────────────────────────────────────────────────
export interface BrandPageImageSlot {
  id: string;
  src: string | null; // 실제 이미지 경로 (예: "/images/oneday/brand-page/hero-mockup.png") - 미등록 시 null
  alt: string;
  caption: string;
  aspectRatio: string;
  objectFit: "contain" | "cover";
  enableZoom?: boolean;
  badgeText?: string;
  subLabel?: string;
}

export const BRAND_PAGE_IMAGES: Record<
  | "heroMobileMockup"
  | "conceptWarmCoach"
  | "conceptCreator"
  | "conceptModernBrand"
  | "conceptMindful"
  | "diffStepStructure"
  | "diffStepVibe"
  | "diffStepCustom"
  | "realCaseHero"
  | "realCaseAbout"
  | "realCaseCareer"
  | "realCaseService"
  | "realCaseMobile",
  BrandPageImageSlot
> = {
  // 상단 히어로 모바일 목업
  heroMobileMockup: {
    id: "hero-mobile-mockup",
    src: null,
    alt: "소개, 경력, 서비스, 활동, SNS 링크까지 담은 나만의 모바일 브랜드 소개 페이지 화면",
    caption: "첫 화면 → 자기소개 → 활동 → 서비스 → 문의 흐름 예시",
    aspectRatio: "aspect-[9/16]",
    objectFit: "contain",
    enableZoom: true,
    badgeText: "수업 결과물 예시",
    subLabel: "모바일 브랜드 소개 페이지",
  },
  // 디자인 콘셉트 4종 (DESIGN EXAMPLES)
  conceptWarmCoach: {
    id: "concept-warm-coach",
    src: null,
    alt: "크림, 베이지, 브라운 톤의 따뜻한 강사 및 코치 브랜드 소개 페이지 디자인",
    caption: "따뜻한 사진, 부드러운 타이포그래피, 강의와 코칭을 소개하기 좋은 디자인",
    aspectRatio: "aspect-[4/3]",
    objectFit: "contain",
    enableZoom: true,
    badgeText: "디자인 예시",
    subLabel: "따뜻한 강사·코치",
  },
  conceptCreator: {
    id: "concept-creator",
    src: null,
    alt: "오프화이트, 블랙, 포인트 컬러를 활용한 감각적인 작가 및 크리에이터 포트폴리오 디자인",
    caption: "책, 작품, 콘텐츠와 포트폴리오를 중심으로 보여주는 감각적인 디자인",
    aspectRatio: "aspect-[4/3]",
    objectFit: "contain",
    enableZoom: true,
    badgeText: "디자인 예시",
    subLabel: "작가·크리에이터",
  },
  conceptModernBrand: {
    id: "concept-modern-brand",
    src: null,
    alt: "화이트, 차콜, 골드 톤과 정돈된 타이포그래피의 모던 1인브랜드 디자인",
    caption: "정돈된 타이포그래피와 넉넉한 여백으로 전문성을 보여주는 디자인",
    aspectRatio: "aspect-[4/3]",
    objectFit: "contain",
    enableZoom: true,
    badgeText: "디자인 예시",
    subLabel: "모던 1인브랜드",
  },
  conceptMindful: {
    id: "concept-mindful",
    src: null,
    alt: "크림, 세이지, 내추럴 톤의 편안하고 따뜻한 감성 상담 및 힐링 브랜드 디자인",
    caption: "상담, 명상, 심리, 감성 콘텐츠에 어울리는 편안하고 따뜻한 디자인",
    aspectRatio: "aspect-[4/3]",
    objectFit: "contain",
    enableZoom: true,
    badgeText: "디자인 예시",
    subLabel: "감성 상담·힐링 브랜드",
  },
  // 핵심 차별점 3단계 시각 화면
  diffStepStructure: {
    id: "diff-step-structure",
    src: null,
    alt: "소개, 경력, 서비스, 활동을 구조화하여 정리하는 브랜드 정리 화면",
    caption: "01. 브랜드 구조부터 체계적으로 정리",
    aspectRatio: "aspect-[4/3]",
    objectFit: "contain",
    enableZoom: true,
    badgeText: "핵심 기둥 01",
    subLabel: "브랜드 구조화",
  },
  diffStepVibe: {
    id: "diff-step-vibe",
    src: null,
    alt: "AI와 대화하며 자연어로 요청하고 실시간으로 웹페이지를 만드는 바이브코딩 화면",
    caption: "02. 복잡한 코딩 없이 AI와 대화하며 제작",
    aspectRatio: "aspect-[4/3]",
    objectFit: "contain",
    enableZoom: true,
    badgeText: "핵심 기둥 02",
    subLabel: "바이브코딩 제작",
  },
  diffStepCustom: {
    id: "diff-step-custom",
    src: null,
    alt: "문구와 디자인, 서비스를 언제든 직접 수정하고 확장하는 유지관리 화면",
    caption: "03. 외주 없이 내가 직접 수정하고 확장",
    aspectRatio: "aspect-[4/3]",
    objectFit: "contain",
    enableZoom: true,
    badgeText: "핵심 기둥 03",
    subLabel: "직접 수정 및 확장",
  },
  // 실제 제작 사례 5종
  realCaseHero: {
    id: "real-case-hero",
    src: null,
    alt: "이름, 직업, 핵심 메시지와 CTA가 들어간 나를 설명하는 Hero 첫 화면",
    caption: "이름, 직업, 핵심 메시지와 CTA가 들어간 첫 화면",
    aspectRatio: "aspect-[9/12]",
    objectFit: "contain",
    enableZoom: true,
    badgeText: "수업 결과물 예시",
    subLabel: "CASE 01. Hero 첫 화면",
  },
  realCaseAbout: {
    id: "real-case-about",
    src: null,
    alt: "내가 어떤 경험을 해왔고 무엇을 중요하게 생각하는지 보여주는 About 영역",
    caption: "내가 어떤 경험을 해왔고 무엇을 중요하게 생각하는지 보여주는 영역",
    aspectRatio: "aspect-[9/12]",
    objectFit: "contain",
    enableZoom: true,
    badgeText: "수업 결과물 예시",
    subLabel: "CASE 02. About & Story",
  },
  realCaseCareer: {
    id: "real-case-career",
    src: null,
    alt: "강의, 출판, 프로젝트, 자격, 작업물 등을 정리해서 보여주는 Career & Portfolio 영역",
    caption: "강의, 출판, 프로젝트, 자격, 작업물 등을 정리해서 보여주는 영역",
    aspectRatio: "aspect-[9/12]",
    objectFit: "contain",
    enableZoom: true,
    badgeText: "수업 결과물 예시",
    subLabel: "CASE 03. Career & Portfolio",
  },
  realCaseService: {
    id: "real-case-service",
    src: null,
    alt: "강의, 상담, 제작 서비스와 블로그, SNS, 문의 링크를 연결하는 Service & Contact 영역",
    caption: "강의, 상담, 제작 서비스와 블로그·SNS·문의 링크를 연결하는 영역",
    aspectRatio: "aspect-[9/12]",
    objectFit: "contain",
    enableZoom: true,
    badgeText: "수업 결과물 예시",
    subLabel: "CASE 04. Service & Contact",
  },
  realCaseMobile: {
    id: "real-case-mobile",
    src: null,
    alt: "스마트폰에서도 깔끔하게 볼 수 있는 모바일 반응형 완성 화면",
    caption: "스마트폰에서도 깔끔하게 볼 수 있는 반응형 완성 화면",
    aspectRatio: "aspect-[9/12]",
    objectFit: "contain",
    enableZoom: true,
    badgeText: "수업 결과물 예시",
    subLabel: "CASE 05. 모바일 반응형 완성",
  },
};

// ─────────────────────────────────────────────────────────────
// 2. 강의 기본 설정 및 운영 메타데이터
// ─────────────────────────────────────────────────────────────
export interface BrandPageClassConfig {
  id: string;
  routePath: string;
  categoryLabel: string;
  subBadge: string;
  courseTitle: string;
  courseSubtitle: string;
  heroTitleLine1: string;
  heroTitleLine2: string;
  heroSubTitle: string;
  heroDescription: string;
  heroHighlight: string;
  heroBadges: string[];
  tags: string[];
  status: OnedayStatus;
  format: string;
  duration: string;
  schedule: string;
  price: string;
  difficulty: string;
  goalSummary: string;
  materialsSummary: string;
  preparationSummary: string;
  preClassNotice: string;
  replayPolicy: string | null;
  questionSupportPolicy: string | null;
  communityInviteText: string;
  applicationUrl: string | null;
  notificationUrl: string;
  ctaOpenText: string;
  ctaScheduledText: string;
  termsUrl: string;
  onedayListUrl: string;
}

export const BRAND_PAGE_CLASS_CONFIG: BrandPageClassConfig = {
  id: "ai-brand-page",
  routePath: "/brand-page",
  categoryLabel: "AI BRAND PAGE · ONE DAY CLASS",
  subBadge: "자명스쿨 원데이 실전 마스터",
  courseTitle: "AI로 브랜드 소개 페이지 제작",
  courseSubtitle: "비개발자를 위한 바이브코딩 첫 실습",
  heroTitleLine1: "코딩을 몰라도 만들 수 있는",
  heroTitleLine2: "나만의 브랜드 소개 페이지",
  heroSubTitle: "AI 브랜드 소개 페이지 제작 | 비개발자를 위한 바이브코딩 첫 실습",
  heroDescription:
    "강사, 작가, 상담가, 프리랜서, 1인사업자라면 나를 설명해주는 온라인 공간 하나쯤은 필요합니다. AI와 대화하며 소개, 경력, 서비스, 활동, SNS 링크까지 담은 나만의 브랜드 웹페이지를 직접 완성합니다.",
  heroHighlight: "링크 하나로 나와 내 일을 소개하는 나만의 브랜드 페이지를 직접 만들어보세요.",
  heroBadges: [
    "비개발자·초보 참여 가능",
    "소개·경력·서비스 1페이지 완성",
    "AI 대화형 바이브코딩",
    "PC & 모바일 반응형 완비",
  ],
  tags: ["브랜드페이지", "바이브코딩", "AI웹제작", "1인브랜드"],
  status: "scheduled",
  format: "Zoom 실시간 온라인 실습",
  duration: "하루 3~4시간",
  schedule: "개강 일정 준비 중",
  price: "오픈 예정",
  difficulty: "코딩 지식 전혀 없이 참여 가능",
  goalSummary: "소개·경력·서비스·SNS 링크가 포함된 나만의 브랜드 페이지 첫 버전",
  materialsSummary:
    "기본 템플릿 · 바이브코딩 기초 PDF · 디자인 레퍼런스 · 워크시트 · Notion 프롬프트",
  preparationSummary: "PC 또는 노트북 · 크롬 브라우저 · 수업 안내 도구",
  preClassNotice:
    "원활한 실습을 위해 PC 또는 노트북 환경을 권장합니다. 기본 템플릿과 워크시트를 활용해 단계별로 함께 완성합니다.",
  replayPolicy: null,
  questionSupportPolicy: null,
  communityInviteText:
    "함께 배우는 분들과 결과물을 나누고, 자명스쿨의 다음 수업 소식을 받아볼 수 있는 커뮤니티로 초대합니다.",
  applicationUrl: null,
  notificationUrl: "https://pf.kakao.com/_IxguMn",
  ctaOpenText: "브랜드 페이지 클래스 신청하기",
  ctaScheduledText: "개강 알림 신청",
  termsUrl: "/terms",
  onedayListUrl: "/oneday",
};

// ─────────────────────────────────────────────────────────────
// 3. 섹션별 상세 데이터
// ─────────────────────────────────────────────────────────────

// [4. 결과물 예시 흐름 5단계]
export const BRAND_PAGE_FLOW_STEPS = [
  {
    step: "01. HERO",
    title: "나를 한 문장으로 소개하는 첫 화면",
    desc: "예: “AI와 콘텐츠로 나만의 일을 만들어가는 사람”",
    badge: "첫인상",
  },
  {
    step: "02. ABOUT",
    title: "나의 소개와 이야기",
    desc: "나는 누구인가 · 어떤 일을 하는가 · 어떤 경험을 가지고 있는가",
    badge: "자기소개",
  },
  {
    step: "03. CAREER & WORK",
    title: "경력과 활동",
    desc: "강의 · 출판 · 프로젝트 · 자격 및 활동 · 포트폴리오",
    badge: "전문성",
  },
  {
    step: "04. SERVICE",
    title: "내가 제공하는 서비스",
    desc: "강의 · 상담 · 제작 · 프로그램 · 콘텐츠",
    badge: "수익연결",
  },
  {
    step: "05. CONTACT",
    title: "SNS · 블로그 · 문의 · 신청 링크 연결",
    desc: "인스타그램 · 유튜브 · 오픈카톡 · 뉴스레터 · 제휴 문의",
    badge: "연결 및 전환",
  },
];

// [6. 고민 공감 — WHY BRAND PAGE?]
export const BRAND_PAGE_PROBLEM_CARDS = [
  {
    number: "고민 01",
    title: "SNS만으로는 설명이 부족함",
    description: "인스타그램이나 블로그만으로는 내 경력과 서비스를 한눈에 보여주기 어렵습니다.",
  },
  {
    number: "고민 02",
    title: "홈페이지 제작은 너무 어려워 보임",
    description: "코딩도 모르고 디자인도 자신이 없어 홈페이지 제작을 미루게 됩니다.",
  },
  {
    number: "고민 03",
    title: "무엇을 넣어야 할지 모르겠음",
    description: "소개, 경력, 서비스, 포트폴리오 중 무엇부터 어떻게 정리해야 하는지 막막합니다.",
  },
  {
    number: "고민 04",
    title: "외주 제작은 부담스러움",
    description: "간단한 소개페이지 하나를 만들기 위해 큰 비용을 쓰기는 부담스럽습니다.",
  },
];

// [7. 수강 전후 변화 — TRANSFORMATION]
export const BRAND_PAGE_BEFORE_AFTER = [
  {
    before: "SNS 프로필 한 줄로만 나를 소개",
    after: "소개·경력·서비스가 한 페이지에 정리",
  },
  {
    before: "홈페이지는 개발자만 만든다고 생각",
    after: "AI와 대화하며 직접 수정하고 제작",
  },
  {
    before: "무엇을 넣어야 할지 막막함",
    after: "제공되는 구성 템플릿으로 순서대로 완성",
  },
  {
    before: "외주 수정 요청이 번거로움",
    after: "필요할 때 내가 직접 문구와 디자인 수정",
  },
  {
    before: "나를 소개할 때 매번 길게 설명",
    after: "브랜드 페이지 링크 하나로 전달",
  },
];

// [8. 하루 완성 결과물 — ONE DAY RESULT]
export const BRAND_PAGE_ONE_DAY_RESULTS = [
  {
    step: "01 · BRAND MESSAGE",
    title: "나를 설명하는 한 문장",
    description: "내가 누구이고 어떤 일을 하는 사람인지 핵심 메시지를 정리합니다.",
    tags: ["#퍼스널브랜딩", "#브랜드메시지", "#한줄소개"],
  },
  {
    step: "02 · PAGE STRUCTURE",
    title: "소개페이지 구성 만들기",
    description: "Hero, 소개, 경력, 서비스, 포트폴리오, 문의 영역을 구성합니다.",
    tags: ["#페이지구성", "#프로필페이지", "#브랜드구조"],
  },
  {
    step: "03 · VIBE CODING",
    title: "AI와 대화하며 웹페이지 제작",
    description: "복잡한 코드를 직접 작성하기보다 AI에게 요청하고 수정하며 페이지를 만듭니다.",
    tags: ["#바이브코딩", "#AI코딩", "#비개발자"],
  },
  {
    step: "04 · CUSTOM DESIGN",
    title: "내 브랜드에 맞는 디자인",
    description: "컬러, 폰트, 이미지, 카드, 버튼을 수정하여 나만의 분위기를 완성합니다.",
    tags: ["#브랜드디자인", "#웹디자인", "#커스텀"],
  },
  {
    step: "05 · ONLINE RELEASE",
    title: "실제로 열리는 웹페이지",
    description: "PC와 모바일을 확인하고 공유할 수 있는 첫 브랜드 페이지를 완성합니다.",
    tags: ["#웹페이지", "#온라인브랜드", "#첫사이트"],
  },
];

// [9. 수업 구성 요약 — PACKAGE INCLUDED]
export const BRAND_PAGE_PACKAGE_SUMMARY = [
  {
    number: "01",
    title: "브랜드 정리",
    description: "나를 설명하는 핵심 메시지와 소개 내용 정리",
  },
  {
    number: "02",
    title: "페이지 기획",
    description: "Hero · About · Career · Service · Contact 구성",
  },
  {
    number: "03",
    title: "바이브코딩",
    description: "AI에게 요청하며 실제 웹페이지 제작",
  },
  {
    number: "04",
    title: "디자인",
    description: "컬러·폰트·이미지·레이아웃 수정",
  },
  {
    number: "05",
    title: "공개",
    description: "PC·모바일 확인 및 공유 가능한 상태로 완성",
  },
];

// [10. 디자인 예시 — DESIGN EXAMPLES 4종]
export interface BrandPageConceptExample {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
  palette: string;
  description: string;
  imageSlotKey:
    | "conceptWarmCoach"
    | "conceptCreator"
    | "conceptModernBrand"
    | "conceptMindful";
}

export const BRAND_PAGE_CONCEPT_EXAMPLES: BrandPageConceptExample[] = [
  {
    id: "warm-coach",
    icon: "☕",
    title: "따뜻한 강사·코치",
    subtitle: "WARM COACH",
    palette: "크림·베이지·브라운",
    description: "따뜻한 사진, 부드러운 타이포그래피, 강의와 코칭을 소개하기 좋은 디자인",
    imageSlotKey: "conceptWarmCoach",
  },
  {
    id: "creator",
    icon: "🖋️",
    title: "작가·크리에이터",
    subtitle: "CREATOR",
    palette: "오프화이트·블랙·포인트 컬러",
    description: "책, 작품, 콘텐츠와 포트폴리오를 중심으로 보여주는 감각적인 디자인",
    imageSlotKey: "conceptCreator",
  },
  {
    id: "modern-brand",
    icon: "💼",
    title: "모던 1인브랜드",
    subtitle: "MODERN BRAND",
    palette: "화이트·차콜·골드",
    description: "정돈된 타이포그래피와 넉넉한 여백으로 전문성을 보여주는 디자인",
    imageSlotKey: "conceptModernBrand",
  },
  {
    id: "mindful",
    icon: "🌿",
    title: "감성 상담·힐링 브랜드",
    subtitle: "MINDFUL",
    palette: "크림·세이지·내추럴 톤",
    description: "상담, 명상, 심리, 감성 콘텐츠에 어울리는 편안하고 따뜻한 디자인",
    imageSlotKey: "conceptMindful",
  },
];

// [11. 핵심 차별점 — 3개 기둥]
export const BRAND_PAGE_CORE_PILLARS = [
  {
    pillar: "첫 번째 기둥",
    title: "브랜드 구조부터 정리",
    description:
      "AI에게 바로 홈페이지를 만들어달라고 하기 전에 나의 소개, 경력, 서비스, 활동을 먼저 정리합니다.",
    imageSlotKey: "diffStepStructure" as const,
  },
  {
    pillar: "두 번째 기둥",
    title: "제작은 AI와 대화하며",
    description:
      "복잡한 코드를 외우기보다 AI에게 요청하고 결과를 확인하며 수정합니다.",
    imageSlotKey: "diffStepVibe" as const,
  },
  {
    pillar: "세 번째 기둥",
    title: "이후에도 직접 고칠 수 있게",
    description:
      "문구, 사진, 서비스가 바뀌었을 때 외주를 다시 맡기지 않고 AI와 함께 직접 수정하는 기본 흐름을 익힙니다.",
    imageSlotKey: "diffStepCustom" as const,
  },
];

// [12. 제작 과정 — HOW IT WORKS 8단계]
export const BRAND_PAGE_CURRICULUM_STEPS = [
  {
    step: "STEP 01",
    title: "누구를 위한 페이지인지 정하기",
    output: "페이지 목적·대상",
  },
  {
    step: "STEP 02",
    title: "나를 설명하는 핵심 문장 만들기",
    output: "메인 카피·소개 문장",
  },
  {
    step: "STEP 03",
    title: "넣을 콘텐츠 정리하기",
    output: "소개·경력·서비스·링크",
  },
  {
    step: "STEP 04",
    title: "레퍼런스로 디자인 방향 정하기",
    output: "컬러·폰트·레이아웃",
  },
  {
    step: "STEP 05",
    title: "기본 템플릿 실행하기",
    output: "수정 가능한 브랜드 페이지 기본 구조",
  },
  {
    step: "STEP 06",
    title: "AI와 대화하며 페이지 수정하기",
    output: "나의 콘텐츠가 들어간 웹페이지",
  },
  {
    step: "STEP 07",
    title: "디자인과 모바일 화면 다듬기",
    output: "브랜드 분위기가 반영된 반응형 페이지",
  },
  {
    step: "STEP 08",
    title: "최종 점검하고 공개하기",
    output: "공유 가능한 브랜드 소개 페이지",
  },
];

// [13. 시간표 — TIME SCHEDULE (4시간 기준)]
export const BRAND_PAGE_TIME_SCHEDULE = [
  { phase: "브랜드 메시지·콘텐츠 정리", duration: "25분" },
  { phase: "페이지 구조·디자인 방향", duration: "25분" },
  { phase: "기본 템플릿 실행", duration: "30분" },
  { phase: "Hero·About 영역 제작", duration: "40분" },
  { phase: "휴식", duration: "10분" },
  { phase: "Career·Service 영역 제작", duration: "35분" },
  { phase: "AI 프롬프트로 디자인 수정", duration: "35분" },
  { phase: "모바일·오류 점검", duration: "25분" },
  { phase: "공개 및 후속 활용 안내", duration: "15분" },
];

// [14. 혜택 자료 — CLASS KIT 5종]
export const BRAND_PAGE_CLASS_KITS = [
  {
    code: "KIT 01",
    title: "브랜드 소개페이지 기본 템플릿",
    description: "Hero · About · Career · Service · Contact가 포함된 수정 가능한 기본 페이지",
  },
  {
    code: "KIT 02",
    title: "비개발자를 위한 바이브코딩 기초 PDF",
    description: "AI에게 페이지 제작과 수정을 요청하는 기본 흐름 설명",
  },
  {
    code: "KIT 03",
    title: "브랜드 페이지 디자인 레퍼런스",
    description: "강사, 작가, 코치, 1인브랜드 등에 활용할 레이아웃·컬러·타이포그래피 참고 자료",
  },
  {
    code: "KIT 04",
    title: "브랜드 소개 콘텐츠 작성 가이드",
    description: "소개, 경력, 서비스 내용을 어떻게 정리할지 안내하는 워크시트",
  },
  {
    code: "KIT 05",
    title: "프롬프트 정리 Notion 자료",
    description: "페이지 제작, 문구 수정, 디자인 변경, 오류 점검에 활용할 프롬프트",
  },
];

// [15. 실제 제작 사례 — REAL EXPERIENCE 5종]
export interface BrandPageRealCaseItem {
  number: string;
  title: string;
  description: string;
  imageSlotKey:
    | "realCaseHero"
    | "realCaseAbout"
    | "realCaseCareer"
    | "realCaseService"
    | "realCaseMobile";
}

export const BRAND_PAGE_REAL_CASES: BrandPageRealCaseItem[] = [
  {
    number: "01",
    title: "나를 설명하는 Hero 화면",
    description: "이름, 직업, 핵심 메시지와 CTA가 들어간 첫 화면",
    imageSlotKey: "realCaseHero",
  },
  {
    number: "02",
    title: "About & Story",
    description: "내가 어떤 경험을 해왔고 무엇을 중요하게 생각하는지 보여주는 영역",
    imageSlotKey: "realCaseAbout",
  },
  {
    number: "03",
    title: "Career & Portfolio",
    description: "강의, 출판, 프로젝트, 자격, 작업물 등을 정리해서 보여주는 영역",
    imageSlotKey: "realCaseCareer",
  },
  {
    number: "04",
    title: "Service & Contact",
    description: "강의, 상담, 제작 서비스와 블로그·SNS·문의 링크를 연결하는 영역",
    imageSlotKey: "realCaseService",
  },
  {
    number: "05",
    title: "모바일 브랜드 페이지",
    description: "스마트폰에서도 깔끔하게 볼 수 있는 반응형 완성 화면",
    imageSlotKey: "realCaseMobile",
  },
];

// [16. 후속 확장 — FIRST RELEASE & EXPANSION 8개]
export const BRAND_PAGE_EXPANSION_POINTS = [
  "강의 신청 페이지 연결",
  "전자책·상품 판매 페이지 연결",
  "블로그·유튜브·SNS 연결",
  "포트폴리오 추가",
  "고객 후기 추가",
  "뉴스레터 신청",
  "문의·예약 시스템 연결",
  "나만의 서비스 페이지로 확장",
];

// [17. 추천 대상 — RECOMMENDED FOR 8개]
export const BRAND_PAGE_RECOMMENDED_FOR = [
  "강사·코치·상담가로 나를 소개할 페이지가 필요한 분",
  "작가·창작자·프리랜서로 활동을 정리하고 싶은 분",
  "1인사업 또는 개인 브랜드를 시작하는 분",
  "SNS 외에 내 이름으로 된 공간이 필요한 분",
  "코딩을 몰라도 직접 웹페이지를 만들어보고 싶은 분",
  "바이브코딩을 가장 쉬운 결과물부터 경험하고 싶은 분",
  "외주 없이 내 페이지를 직접 수정하고 싶은 분",
  "앞으로 온라인 강의·상품·서비스를 연결하고 싶은 분",
];

// [18. 활용 방향 — BUSINESS EXPANSION 5개]
export const BRAND_PAGE_EXPANSION_IDEAS = [
  {
    number: "01",
    title: "강사·코치 프로필",
    description: "강의 소개와 경력, 문의 링크를 한곳에 정리",
  },
  {
    number: "02",
    title: "작가·크리에이터 포트폴리오",
    description: "책, 작품, 콘텐츠, SNS 채널 연결",
  },
  {
    number: "03",
    title: "1인사업 브랜드 소개",
    description: "서비스와 상품을 소개하고 신청페이지 연결",
  },
  {
    number: "04",
    title: "SNS 프로필 링크",
    description: "인스타그램, 스레드, 유튜브, 블로그에서 하나의 대표 링크로 사용",
  },
  {
    number: "05",
    title: "이후 서비스 사이트의 시작점",
    description: "브랜드 페이지에서 시작해 예약, 강의, 상품, 테스트, AI 서비스 등으로 확장",
  },
];

// [19. 자주 묻는 질문 — FAQ 6문항]
export interface BrandPageFaqItem {
  id: string;
  question: string;
  answer: string;
}

export const BRAND_PAGE_FAQS: BrandPageFaqItem[] = [
  {
    id: "brand-faq-1",
    question: "코딩을 전혀 몰라도 가능한가요?",
    answer:
      "가능합니다. 복잡한 코드를 직접 작성하는 수업보다 AI에게 요청하고 결과를 수정하는 바이브코딩 방식으로 진행합니다.",
  },
  {
    id: "brand-faq-2",
    question: "홈페이지를 만들어본 적이 없어도 되나요?",
    answer:
      "괜찮습니다. 기본 템플릿과 단계별 실습자료를 제공하며 한 페이지씩 수정하면서 완성합니다.",
  },
  {
    id: "brand-faq-3",
    question: "어떤 사람이 만들면 좋은가요?",
    answer:
      "강사, 작가, 상담가, 코치, 프리랜서, 1인사업자 등 자신과 자신의 일을 온라인에서 소개하고 싶은 분에게 적합합니다.",
  },
  {
    id: "brand-faq-4",
    question: "수업이 끝나면 실제 사이트가 생기나요?",
    answer:
      "수업에서는 공유 가능한 첫 버전을 완성하는 것을 목표로 합니다. 도메인·호스팅 환경은 사용하는 방식에 따라 달라질 수 있습니다.",
  },
  {
    id: "brand-faq-5",
    question: "수업 후에도 수정할 수 있나요?",
    answer:
      "네. 텍스트, 이미지, 컬러, 서비스 내용 등을 AI와 함께 직접 수정하는 기본 방법도 함께 배웁니다.",
  },
  {
    id: "brand-faq-6",
    question: "노트북이 필요한가요?",
    answer:
      "실습 중심 수업이므로 PC 또는 노트북 사용을 권장합니다.",
  },
];

// [20. 최종 CTA 영역 요약 4종]
export const BRAND_PAGE_FINAL_COMPLETION_ITEMS = [
  "나를 한 문장으로 드러내는 Hero & About 구조",
  "경력·서비스·포트폴리오가 담긴 1페이지 브랜드 웹",
  "내 분위기에 맞춘 컬러·폰트·반응형 디자인",
  "언제든 직접 문구를 고치고 확장하는 바이브코딩 역량",
];

