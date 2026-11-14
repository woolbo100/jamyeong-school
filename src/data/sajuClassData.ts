import type { OnedayStatus } from "./onedayClasses";

// ─────────────────────────────────────────────────────────────
// 1. 교체형 이미지 슬롯 정의
// 모든 예시 이미지와 실제 서비스 화면은 src에 이미지 경로를 넣으면 즉시 교체됩니다.
// ─────────────────────────────────────────────────────────────
export interface SajuImageSlot {
  id: string;
  src: string | null; // 실제 이미지 경로 (예: "/images/oneday/saju/hero-mockup.png") - 미등록 시 null
  alt: string;
  caption: string;
  aspectRatio: string;
  objectFit: "contain" | "cover";
  enableZoom?: boolean;
  badgeText?: string;
  subLabel?: string;
}

export const SAJU_IMAGES: Record<
  | "heroMobileMockup"
  | "conceptTraditional"
  | "conceptMindful"
  | "conceptModern"
  | "conceptFantasy"
  | "diffStepInput"
  | "diffStepCalc"
  | "diffStepResult"
  | "realCaseInput"
  | "realCaseCompare"
  | "realCaseResult"
  | "realCaseMobile",
  SajuImageSlot
> = {
  // 상단 히어로 모바일 목업
  heroMobileMockup: {
    id: "hero-mobile-mockup",
    src: null,
    alt: "생년월일 입력부터 만세력 계산, 해석 결과페이지까지 이어지는 모바일 사주사이트 화면",
    caption: "입력 화면 → 만세력 계산 → 해석 결과 화면 예시",
    aspectRatio: "aspect-[9/16]",
    objectFit: "contain",
    enableZoom: true,
    badgeText: "수업 결과물 예시",
    subLabel: "모바일 사주사이트 화면",
  },
  // 디자인 콘셉트 4종 (디자인 콘셉트 예시)
  conceptTraditional: {
    id: "concept-traditional",
    src: null,
    alt: "한지 질감과 먹색, 절제된 전통 문양으로 표현한 한국적 감성 사주사이트 콘셉트 예시",
    caption: "한지 질감·먹색·절제된 전통 문양의 차분한 한국적 감성 디자인",
    aspectRatio: "aspect-[4/3]",
    objectFit: "contain",
    enableZoom: true,
    badgeText: "디자인 콘셉트 예시",
    subLabel: "한국적 감성",
  },
  conceptMindful: {
    id: "concept-mindful",
    src: null,
    alt: "크림색과 부드러운 문장, 차분한 결과 카드로 구성한 따뜻한 마음돌봄 콘셉트 예시",
    caption: "크림색·부드러운 문장·차분한 결과 카드로 편안함을 주는 디자인",
    aspectRatio: "aspect-[4/3]",
    objectFit: "contain",
    enableZoom: true,
    badgeText: "디자인 콘셉트 예시",
    subLabel: "따뜻한 마음돌봄",
  },
  conceptModern: {
    id: "concept-modern",
    src: null,
    alt: "정돈된 타이포그래피와 깊이 있는 색감, 넉넉한 여백의 모던 프리미엄 콘셉트 예시",
    caption: "정돈된 타이포그래피·깊이 있는 색감·넉넉한 여백의 모던 프리미엄 디자인",
    aspectRatio: "aspect-[4/3]",
    objectFit: "contain",
    enableZoom: true,
    badgeText: "디자인 콘셉트 예시",
    subLabel: "모던 프리미엄",
  },
  conceptFantasy: {
    id: "concept-fantasy",
    src: null,
    alt: "밤하늘과 달빛, 은은한 금빛 포인트를 활용한 신비로운 동양 판타지 콘셉트 예시",
    caption: "밤하늘·달빛·은은한 금빛 포인트의 신비로운 동양 판타지 디자인",
    aspectRatio: "aspect-[4/3]",
    objectFit: "contain",
    enableZoom: true,
    badgeText: "디자인 콘셉트 예시",
    subLabel: "신비로운 동양 판타지",
  },
  // 핵심 차별점 3단계 시각 화면
  diffStepInput: {
    id: "diff-step-input",
    src: null,
    alt: "생년월일과 출생시간을 입력하는 화면",
    caption: "01. 생년월일과 출생시간 입력 화면",
    aspectRatio: "aspect-[4/3]",
    objectFit: "contain",
    enableZoom: true,
    badgeText: "핵심 구조 01",
    subLabel: "입력 화면",
  },
  diffStepCalc: {
    id: "diff-step-calc",
    src: null,
    alt: "만세력 오픈소스로 계산된 사주 명식과 오행 정보 화면",
    caption: "02. 만세력 오픈소스로 계산된 사주 정보",
    aspectRatio: "aspect-[4/3]",
    objectFit: "contain",
    enableZoom: true,
    badgeText: "핵심 구조 02",
    subLabel: "계산된 사주 정보",
  },
  diffStepResult: {
    id: "diff-step-result",
    src: null,
    alt: "계산된 항목에 맞춰 준비된 해석이 자동으로 연결된 결과 화면",
    caption: "03. 계산 항목과 연결된 기본 풀이 결과",
    aspectRatio: "aspect-[4/3]",
    objectFit: "contain",
    enableZoom: true,
    badgeText: "핵심 구조 03",
    subLabel: "연결된 풀이 결과",
  },
  // 실제 제작 사례 4종
  realCaseInput: {
    id: "real-case-input",
    src: null,
    alt: "생년월일과 출생시간을 입력하는 웹 화면",
    caption: "생년월일·출생시간 입력 화면 구성",
    aspectRatio: "aspect-[9/12]",
    objectFit: "contain",
    enableZoom: true,
    badgeText: "수업 결과물 예시",
    subLabel: "01. 생년월일·출생시간 입력 화면",
  },
  realCaseCompare: {
    id: "real-case-compare",
    src: null,
    alt: "만세력 계산 결과를 확인하고 참고 기준과 비교 점검하는 화면",
    caption: "만세력 계산 결과와 참고 기준 비교 화면",
    aspectRatio: "aspect-[9/12]",
    objectFit: "contain",
    enableZoom: true,
    badgeText: "수업 결과물 예시",
    subLabel: "02. 만세력 계산 결과 비교 화면",
  },
  realCaseResult: {
    id: "real-case-result",
    src: null,
    alt: "계산된 항목에 맞춰 기본 해석이 자동으로 펼쳐지는 결과 화면",
    caption: "기본 해석 데이터가 자동 표시되는 결과 화면",
    aspectRatio: "aspect-[9/12]",
    objectFit: "contain",
    enableZoom: true,
    badgeText: "수업 결과물 예시",
    subLabel: "03. 기본 해석이 자동으로 표시되는 화면",
  },
  realCaseMobile: {
    id: "real-case-mobile",
    src: null,
    alt: "모바일 스마트폰 브라우저에서 실행되는 완성된 사주사이트 화면",
    caption: "모바일에서 깔끔하게 실행되는 완성 사이트",
    aspectRatio: "aspect-[9/12]",
    objectFit: "contain",
    enableZoom: true,
    badgeText: "수업 결과물 예시",
    subLabel: "04. 모바일에서 실행되는 완성 사이트",
  },
};

// ─────────────────────────────────────────────────────────────
// 2. 강의 기본 설정 및 운영 메타데이터
// ─────────────────────────────────────────────────────────────
export interface SajuClassConfig {
  id: string;
  routePath: string;
  categoryLabel: string;
  subBadge: string;
  templateBadge?: string;
  heroHookText?: string;
  courseTitle: string;
  courseSubtitle: string;
  heroTitleLine1: string;
  heroTitleLine2: string;
  heroSubTitle: string;
  heroDescription: string;
  heroHighlight: string;
  heroBadges: string[];
  heroKeyBenefits?: string[];
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

export const SAJU_CLASS_CONFIG: SajuClassConfig = {
  id: "ai-saju-tarot-service",
  routePath: "/saju",
  categoryLabel: "AI SAJU SERVICE · ONE DAY CLASS",
  subBadge: "자명스쿨 원데이 실전 마스터",
  templateBadge: "🎁 검증된 만세력 계산 웹 템플릿 제공",
  heroHookText: "“AI로 사주 사이트를 만드는 것보다 중요한 것은, 정확하게 작동하는 만세력입니다.”",
  courseTitle: "AI 사주 서비스 제작",
  courseSubtitle: "검증된 만세력 템플릿부터 AI 해석 서비스까지",
  heroTitleLine1: "검증된 만세력 템플릿으로 시작하는",
  heroTitleLine2: "나만의 AI 사주 서비스 만들기",
  heroSubTitle: "복잡한 만세력 계산 코드를 처음부터 개발할 필요 없이!",
  heroDescription:
    "만세력 계산 로직이 탑재된 실전 웹 템플릿을 활용해, 나만의 브랜드와 AI 해석 프롬프트를 결합한 사주 서비스를 직접 만들어 봅니다.",
  heroHighlight: "아이디어로만 생각했던 사주서비스를, 검증된 템플릿으로 직접 작동하는 사이트로.",
  heroBadges: [
    "사주·코딩 초보 참여 가능",
    "검증된 만세력 템플릿 제공",
    "결과페이지 자동화",
    "해석 API 호출 없는 기본 구조",
  ],
  heroKeyBenefits: [
    "만세력 계산 웹 템플릿 제공",
    "내 브랜드에 맞는 AI 사주 해석 서비스 제작",
    "실제 웹사이트 구현 및 서비스 운영 구조 실습",
  ],
  tags: ["AI사주", "만세력", "사주사이트", "웹템플릿제공", "서비스제작"],
  status: "scheduled",
  format: "Zoom 실시간 온라인 실습",
  duration: "하루 3~4시간",
  schedule: "개강 일정 준비 중",
  price: "오픈 예정",
  difficulty: "사주·코딩 사전 지식 없이 참여 가능",
  goalSummary: "입력·만세력 계산·AI 해석·결과 표시가 작동하는 사이트 첫 버전",
  materialsSummary:
    "만세력 계산 웹 템플릿·바이브코딩 PDF·디자인 레퍼런스·Notion 프롬프트",
  preparationSummary:
    "PC·크롬 브라우저·수업에서 안내하는 제작 도구 계정",
  preClassNotice:
    "원활한 실습을 위해 수업 전 안내되는 계정과 제작 환경을 준비해주세요. 만세력 계산 템플릿과 예제 데이터를 활용해 함께 진행합니다.",
  replayPolicy: null,
  questionSupportPolicy: null,
  communityInviteText:
    "함께 배우는 분들과 결과물을 나누고, 자명스쿨의 다음 수업 소식을 받아볼 수 있는 커뮤니티로 초대합니다.",
  applicationUrl: null,
  notificationUrl: "https://pf.kakao.com/_IxguMn",
  ctaOpenText: "사주 클래스 신청하기",
  ctaScheduledText: "개강 알림 신청",
  termsUrl: "/terms",
  onedayListUrl: "/oneday",
};

// ─────────────────────────────────────────────────────────────
// 3. 섹션별 상세 데이터
// ─────────────────────────────────────────────────────────────

// [신규 섹션: 왜 만세력 계산이 중요할까요?]
export const SAJU_WHY_CALCULATION = {
  badge: "WHY CALCULATION MATTERS",
  titleLine1: "예쁜 사주 사이트는 AI가 만들어 줍니다.",
  titleLine2: "하지만 정확한 만세력 계산은 다릅니다.",
  description: [
    "AI에게 \"사주 사이트를 만들어 줘\"라고 요청하면 멋진 웹페이지는 비교적 쉽게 만들 수 있습니다.",
    "하지만 실제 생년월일과 출생 시간을 입력했을 때 월주나 일주가 잘못 계산된다면 어떨까요?",
    "사주 서비스의 출발점은 화려한 디자인이 아니라 신뢰할 수 있는 기초 데이터입니다.",
    "이번 클래스에서는 복잡한 계산 로직을 처음부터 개발하지 않고, 사전에 검증한 만세력 계산 템플릿을 활용해 실제 서비스 제작에 집중합니다.",
  ],
  generalAi: {
    title: "일반적인 AI 사주 사이트 제작",
    points: [
      "AI가 생성한 계산 코드의 오류 가능성",
      "만세력 계산 방법을 직접 조사해야 하는 부담",
      "절기 및 출생 시간 처리 검증 필요",
      "오류 수정에 많은 시간 소요",
    ],
  },
  jamyeongTemplate: {
    title: "자명스쿨 실전 템플릿 활용",
    points: [
      "사전 검증된 만세력 계산 로직 제공",
      "복잡한 계산 엔진 개발 과정 단축",
      "브랜드 디자인과 해석 콘텐츠 제작에 집중",
      "실제 서비스로 확장 가능한 기초 구조 확보",
    ],
  },
};

// [신규 섹션: 핵심 혜택 — 검증된 만세력 계산 웹 템플릿 제공]
export const SAJU_CORE_BENEFITS = {
  badge: "SPECIAL BENEFIT",
  titleSub: "이번 클래스의 가장 특별한 혜택",
  titleMain: "검증된 만세력 계산 웹 템플릿 제공",
  description:
    "사주 서비스를 만들 때 가장 막막한 부분은 만세력 계산입니다. 이번 클래스에서는 만세력 계산 기능이 구현된 웹 템플릿을 제공해, 수강생이 직접 브랜드와 해석 방식을 변경하며 자신만의 서비스를 제작할 수 있도록 돕습니다.",
  notice:
    "※ 검증 범위와 제공 파일 구성은 실제 배포 템플릿 기준으로 표시합니다. 유료 운영 기능은 수업에서 구현하는 범위와 향후 확장 가능한 기능을 구분합니다.",
  cards: [
    {
      num: "01",
      title: "만세력 계산 엔진",
      desc: "생년월일과 출생 시간을 바탕으로 사주 기초 데이터를 계산하는 기능이 탑재된 템플릿",
      tag: "핵심 로직 탑재",
    },
    {
      num: "02",
      title: "브랜드 맞춤 제작",
      desc: "서비스 이름, 컬러, 이미지, 문구를 수정하여 나만의 브랜드로 구성",
      tag: "100% 커스텀 가능",
    },
    {
      num: "03",
      title: "AI 해석 프롬프트 연결",
      desc: "연애, 재물, 성격, 관계 등 원하는 주제에 맞게 AI 해석 콘텐츠 구성",
      tag: "프롬프트 자유 확장",
    },
    {
      num: "04",
      title: "웹서비스 확장 기반",
      desc: "향후 회원 기능, 결제, 유료 리포트 등으로 확장할 수 있는 웹서비스 제작 기반",
      tag: "유료 서비스 확장성",
    },
  ],
};

// [신규 섹션: 자동화 구조 시각화]
export const SAJU_AUTOMATION_STEPS = {
  badge: "AUTOMATION PIPELINE",
  title: "생년월일 입력부터 AI 사주 해석까지, 하나의 흐름으로!",
  highlightNotice:
    "“만세력 계산부터 AI 해석까지 연결되는 서비스 구조를 직접 경험해 보세요.”",
  subNotice:
    "※ 위 구조는 수업에서 실제 연동되는 범위에 맞게 표시합니다. 미구현 기능을 완성 기능으로 안내하지 않습니다.",
  steps: [
    {
      step: "STEP 01",
      title: "고객 정보 입력",
      desc: "생년월일 및 출생 시간 입력",
      icon: "📅",
    },
    {
      step: "STEP 02",
      title: "만세력 자동 계산",
      desc: "탑재된 계산 로직을 통한 사주 기초 데이터 생성",
      icon: "⚙️",
    },
    {
      step: "STEP 03",
      title: "AI 해석 연결",
      desc: "계산된 데이터를 설정한 AI 프롬프트에 전달",
      icon: "✨",
    },
    {
      step: "STEP 04",
      title: "결과 화면 출력",
      desc: "나만의 브랜드로 사주 해석 결과 제공",
      icon: "📱",
    },
  ],
};

// [신규 섹션: 수강 혜택 강조 배너]
export const SAJU_TEMPLATE_OFFER_BANNER = {
  topLabel: "원데이 클래스 수강생 제공 혜택",
  mainTitle: "검증된 만세력 계산 웹 템플릿을 드립니다.",
  subTitle:
    "처음부터 개발하지 마세요.\n이미 구현된 계산 구조 위에 나만의 브랜드와 AI 해석 콘텐츠를 더해 보세요.",
};

// [4. 고민 공감 — WHY SAJU SERVICE?]
export const SAJU_PROBLEM_CARDS = [
  {
    number: "고민 01",
    title: "사주를 몰라서 망설임",
    description: "전문적인 명리 지식이 없으면 시작할 수 없을 것 같습니다.",
  },
  {
    number: "고민 02",
    title: "계산 기능의 막막함",
    description: "생년월일과 시간을 어떻게 사주 정보로 바꾸는지 모르겠습니다.",
  },
  {
    number: "고민 03",
    title: "결과 자동화와 비용 부담",
    description: "입력값마다 결과를 연결하는 방법과 AI 사용 비용이 걱정됩니다.",
  },
];

// [5. 수강 전후 변화 — TRANSFORMATION]
export const SAJU_BEFORE_AFTER = [
  {
    before: "사주 지식이 없어 시작을 미룸",
    after: "제공되는 구조와 예제 해석으로 기본 서비스 제작",
  },
  {
    before: "생년월일 계산을 AI에게 막연히 요청",
    after: "만세력 오픈소스를 연결하고 계산 결과 비교",
  },
  {
    before: "모든 결과를 직접 작성해야 할 것 같음",
    after: "계산 항목과 해석 데이터를 연결해 자동 표시",
  },
  {
    before: "사주사이트에 어울리는 디자인이 막막함",
    after: "레퍼런스로 색감·폰트·결과 화면 구체화",
  },
  {
    before: "외부 AI 호출 비용이 부담",
    after: "준비된 해석을 연결하는 기본 구조 구현",
  },
];

// [6. 하루 완성 결과물 — ONE DAY RESULT]
export const SAJU_ONE_DAY_RESULTS = [
  {
    step: "01 · INPUT SCREEN",
    title: "생년월일 입력 화면",
    description: "날짜와 시간을 입력하고 결과를 확인하는 기본 화면을 만듭니다.",
    tag: "#생년월일입력 #출생시간 #입력화면",
  },
  {
    step: "02 · CALCULATION",
    title: "만세력 계산 기능 연결",
    description:
      "오픈소스를 활용해 사주 정보를 계산하고, 참고 결과와 비교하는 방법을 익힙니다.",
    tag: "#만세력오픈소스 #사주명식계산 #결과비교",
  },
  {
    step: "03 · AUTOMATION",
    title: "자동으로 표시되는 해석 결과",
    description:
      "계산된 항목에 맞는 기본 해석을 연결해 결과페이지에 보여줍니다.",
    tag: "#해석자동연결 #결과페이지 #기본풀이",
  },
  {
    step: "04 · CUSTOM DESIGN",
    title: "내 취향을 담은 사주사이트",
    description:
      "색감·폰트·배경·결과 카드 디자인을 수정해 나만의 분위기를 만듭니다.",
    tag: "#디자인커스텀 #사주브랜딩 #화면완성",
  },
];

// [7. 수업 구성 요약 — PACKAGE INCLUDED]
export const SAJU_PACKAGE_SUMMARY = [
  {
    number: "01",
    title: "기획",
    description: "어떤 사주서비스를 만들지 정하기",
  },
  {
    number: "02",
    title: "계산",
    description: "만세력 오픈소스와 입력값 연결하기",
  },
  {
    number: "03",
    title: "자동화",
    description: "계산 항목에 맞는 해석 결과 표시하기",
  },
  {
    number: "04",
    title: "디자인",
    description: "사주에 어울리는 나만의 화면 완성하기",
  },
];

// [8. 디자인 예시 — 디자인 콘셉트 4종]
export interface SajuConceptExample {
  id: string;
  icon: string;
  title: string;
  description: string;
  imageSlotKey:
  | "conceptTraditional"
  | "conceptMindful"
  | "conceptModern"
  | "conceptFantasy";
}

export const SAJU_CONCEPT_EXAMPLES: SajuConceptExample[] = [
  {
    id: "traditional-saju",
    icon: "📜",
    title: "한국적 감성",
    description: "한지 질감·먹색·절제된 전통 문양",
    imageSlotKey: "conceptTraditional",
  },
  {
    id: "mindful-saju",
    icon: "🌿",
    title: "따뜻한 마음돌봄",
    description: "크림색·부드러운 문장·차분한 결과 카드",
    imageSlotKey: "conceptMindful",
  },
  {
    id: "modern-saju",
    icon: "✨",
    title: "모던 프리미엄",
    description: "정돈된 타이포그래피·깊이 있는 색감·넉넉한 여백",
    imageSlotKey: "conceptModern",
  },
  {
    id: "fantasy-saju",
    icon: "🌕",
    title: "신비로운 동양 판타지",
    description: "밤하늘·달빛·은은한 금빛 포인트",
    imageSlotKey: "conceptFantasy",
  },
];

// [10. 제작 과정 — HOW IT WORKS (8단계 + 시간 구성안)]
export const SAJU_CURRICULUM_STEPS = [
  {
    step: "STEP 01",
    title: "서비스 기획 및 주제 선정",
    output: "나만의 사주 서비스 콘셉트 & 타깃 설정",
  },
  {
    step: "STEP 02",
    title: "만세력 계산 템플릿 기본 구조 이해",
    output: "제공된 만세력 웹 템플릿 구조 파악 및 레퍼런스 탐색",
  },
  {
    step: "STEP 03",
    title: "실전 템플릿 실행 및 테스트",
    output: "로컬 환경 실행 및 기본 만세력 계산 작동 확인",
  },
  {
    step: "STEP 04",
    title: "내 브랜드명·컬러·이미지 변경",
    output: "생년월일 입력 화면 및 브랜드 맞춤 UI 디자인",
  },
  {
    step: "STEP 05",
    title: "만세력 계산 엔진 연동 점검",
    output: "사주 기초 데이터(년·월·일·시주) 자동 생성 검증",
  },
  {
    step: "STEP 06",
    title: "AI 사주 해석 프롬프트 수정",
    output: "연애·재물·성격 등 맞춤형 AI 해석 콘텐츠 연결",
  },
  {
    step: "STEP 07",
    title: "고객 입력부터 결과 출력까지 작동 확인",
    output: "입력 → 만세력 계산 → 결과페이지 완벽 연동",
  },
  {
    step: "STEP 08",
    title: "웹사이트 배포 및 유료 서비스 확장 이해",
    output: "실제 웹 배포 완료 & 향후 유료 리포트 확장 로드맵",
  },
];

export const SAJU_TIME_SCHEDULE = [
  { phase: "서비스 기획·디자인 방향", duration: "20분" },
  { phase: "템플릿 실행·입력 화면 수정", duration: "35분" },
  { phase: "만세력 계산 연결·결과 비교", duration: "45분" },
  { phase: "휴식", duration: "10분" },
  { phase: "해석 연결·결과페이지 자동화", duration: "50분" },
  { phase: "디자인 수정", duration: "35분" },
  { phase: "실행 점검·오류 수정", duration: "30분" },
  { phase: "정리·후속 활용 안내", duration: "15분" },
];

// [12. 혜택 자료 — CLASS KIT 4종]
export const SAJU_CLASS_KITS = [
  {
    code: "KIT 01",
    title: "사주서비스 기본 템플릿",
    description:
      "입력·계산·결과 표시 구조를 바탕으로 빠르게 제작하는 기본 파일",
  },
  {
    code: "KIT 02",
    title: "바이브코딩 기초 PDF",
    description:
      "AI에게 제작을 요청하고 실행·수정하는 기본 흐름",
  },
  {
    code: "KIT 03",
    title: "사이트 디자인 레퍼런스 모음",
    description:
      "색감·레이아웃·폰트·결과 카드 디자인을 참고할 사이트",
  },
  {
    code: "KIT 04",
    title: "프롬프트 정리 Notion 자료",
    description:
      "서비스 기획·기능 연결·디자인 수정·오류 점검에 활용할 프롬프트",
  },
];

// [13. 실제 제작 사례 — REAL EXPERIENCE 4종]
export interface SajuRealCaseItem {
  number: string;
  title: string;
  description: string;
  imageSlotKey:
  | "realCaseInput"
  | "realCaseCompare"
  | "realCaseResult"
  | "realCaseMobile";
}

export const SAJU_REAL_CASES: SajuRealCaseItem[] = [
  {
    number: "01",
    title: "생년월일·출생시간 입력 화면",
    description:
      "사용자가 생년월일과 시간을 정확하고 간편하게 입력하도록 만든 화면입니다.",
    imageSlotKey: "realCaseInput",
  },
  {
    number: "02",
    title: "만세력 계산 결과 비교 화면",
    description:
      "오픈소스로 계산된 사주 정보를 같은 기준의 참고 결과와 비교 점검하는 과정입니다.",
    imageSlotKey: "realCaseCompare",
  },
  {
    number: "03",
    title: "기본 해석이 자동으로 표시되는 화면",
    description:
      "계산된 사주 항목에 따라 준비된 기본 해석 데이터가 결과 카드에 출력되는 화면입니다.",
    imageSlotKey: "realCaseResult",
  },
  {
    number: "04",
    title: "모바일에서 실행되는 완성 사이트",
    description:
      "스마트폰 화면 크기에 맞춰 반응형으로 완성되어 누구나 쉽게 이용하는 모바일 화면입니다.",
    imageSlotKey: "realCaseMobile",
  },
];

// [14. 후속 확장 — FIRST RELEASE]
export const SAJU_EXPANSION_POINTS = [
  "기본 성향 설명 보강",
  "결과 카드 디자인 변경",
  "주제별 콘텐츠 연결",
  "브랜드 소개·블로그 연결",
];

// [15. 추천 대상 — RECOMMENDED FOR]
export const SAJU_RECOMMENDED_FOR = [
  "사주를 몰라도 나만의 사주사이트를 만들어보고 싶은 분",
  "코딩보다 실제 결과물을 만들며 배우고 싶은 분",
  "만세력 오픈소스를 서비스에 활용하는 과정이 궁금한 분",
  "입력에 따라 결과가 달라지는 사이트를 만들고 싶은 분",
  "사주·타로·상담 콘텐츠에 자신의 브랜드를 담고 싶은 분",
  "개인 홈페이지에 방문자 참여 콘텐츠를 연결하고 싶은 분",
];

// [16. 활용 방향 — BUSINESS EXPANSION]
export const SAJU_EXPANSION_IDEAS = [
  {
    number: "01",
    title: "SNS에서 소개하는 참여형 콘텐츠",
    description: "인스타그램·스레드·블로그 등에서 팔로워와 소통하는 사주 풀이 링크",
  },
  {
    number: "02",
    title: "블로그·홈페이지의 무료 체험 서비스",
    description: "홈페이지 방문자가 직접 생년월일을 넣고 머무는 인터랙티브 코너",
  },
  {
    number: "03",
    title: "사주·타로 브랜드를 소개하는 콘텐츠",
    description: "나만의 브랜드 톤과 메시지를 미리 경험해보는 사주 풀이 서비스",
  },
  {
    number: "04",
    title: "전자책·강의와 연결하는 서비스",
    description: "클래스나 도서의 핵심 키워드를 사주 분석 결과와 연결하여 제공",
  },
  {
    number: "05",
    title: "커뮤니티에서 함께 경험하는 자기이해 콘텐츠",
    description: "모임 멤버들이 각자의 사주 명식을 확인하고 소통하는 자기이해 도구",
  },
];

// [18. 자주 묻는 질문 — FAQ]
export interface SajuFaqItem {
  id: string;
  question: string;
  answer: string;
}

export const SAJU_FAQS: SajuFaqItem[] = [
  {
    id: "saju-faq-01",
    question: "코딩을 잘 몰라도 참여할 수 있나요?",
    answer:
      "AI 코딩 도구와 제공 템플릿을 활용하는 실습 중심 수업입니다. 복잡한 만세력 계산 코드를 처음부터 작성하지 않고, 단계별로 사이트를 수정하고 실행하는 방법을 배웁니다.",
  },
  {
    id: "saju-faq-02",
    question: "만세력 계산 템플릿을 제공하나요?",
    answer:
      "네. 수업 실습에 활용하는 만세력 계산 웹 템플릿을 제공합니다. 제공 범위와 사용 조건은 클래스 안내를 따릅니다.",
  },
  {
    id: "saju-faq-03",
    question: "내 브랜드로 수정할 수 있나요?",
    answer:
      "네. 브랜드명, 디자인, 이미지, 해석 프롬프트 등 지정된 영역을 변경해 자신만의 서비스로 구성할 수 있습니다.",
  },
  {
    id: "saju-faq-04",
    question: "완성한 사이트를 유료 서비스로 운영할 수 있나요?",
    answer:
      "수업에서 제작한 웹서비스를 기반으로 유료 서비스로 확장할 수 있습니다. 실제 유료 운영을 위해서는 별도의 결제 연동, API 사용료 관리, 개인정보 보호, 오류 검증 및 운영 준비가 필요할 수 있습니다.",
  },
  {
    id: "saju-faq-05",
    question: "사주를 전혀 몰라도 만들 수 있나요?",
    answer:
      "네. 제공 템플릿과 예제 해석을 활용해 서비스 제작 흐름을 익힙니다. 전문적인 사주 감정 교육과는 구분되며, 기본 구조를 이해하고 수정하는 실습에 집중합니다.",
  },
  {
    id: "saju-faq-06",
    question: "만세력 계산이 제대로 되는지도 확인하나요?",
    answer:
      "네. 입력 조건과 계산 기준을 확인하고, 같은 기준의 참고 결과와 비교하는 방법을 배웁니다. 지원 범위와 계산 기준은 수업용 템플릿에 안내합니다.",
  },
  {
    id: "saju-faq-07",
    question: "API 요금 없이 해석을 어떻게 보여주나요?",
    answer:
      "계산된 사주 항목에 미리 준비한 해석을 연결합니다. 결과를 볼 때마다 외부 AI에 해석을 요청하지 않는 효율적인 구조를 만듭니다.",
  },
  {
    id: "saju-faq-08",
    question: "양력·음력과 해외 출생도 모두 지원하나요?",
    answer:
      "수업용 템플릿과 만세력 오픈소스의 지원 범위에 따라 달라집니다. 지원하는 입력 조건을 안내하고 그 범위 안에서 실습합니다.",
  },
  {
    id: "saju-faq-09",
    question: "앱인토스 등록도 포함되나요?",
    answer:
      "이 수업은 웹 사주서비스 제작에 집중합니다. 앱인토스용 변환과 등록은 별도 미니앱 클래스에서 다룹니다.",
  },
];

// [19. 마지막 신청 영역 요약 4종]
export const SAJU_FINAL_COMPLETION_ITEMS = [
  "생년월일 입력과 만세력 계산이 연결된 사이트",
  "기본 해석이 자동으로 표시되는 결과페이지",
  "내 취향으로 수정한 서비스 디자인",
  "다시 활용할 기본 템플릿과 제작 자료",
];

