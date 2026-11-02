import type { OnedayStatus } from "./onedayClasses";

// ─────────────────────────────────────────────────────────────
// 1. 교체형 이미지 슬롯 정의
// 모든 예시 이미지와 실제 서비스 화면은 src에 이미지 경로를 넣으면 즉시 교체됩니다.
// ─────────────────────────────────────────────────────────────
export interface TarotImageSlot {
  id: string;
  src: string | null; // 실제 이미지 경로 (예: "/images/oneday/tarot/hero-mockup.png") - 미등록 시 null
  alt: string;
  caption: string;
  aspectRatio: string;
  objectFit: "contain" | "cover";
  enableZoom?: boolean;
  badgeText?: string;
  subLabel?: string;
}

export const TAROT_IMAGES: Record<
  | "heroMobileMockup"
  | "conceptKorean"
  | "conceptRomance"
  | "conceptFantasy"
  | "conceptOracle"
  | "consistencyBefore"
  | "consistencyAfter"
  | "realCaseCardGen"
  | "realCaseFrame"
  | "realCaseWebsite"
  | "realCaseMobileResult",
  TarotImageSlot
> = {
  // 상단 히어로 모바일 목업
  heroMobileMockup: {
    id: "hero-mobile-mockup",
    src: null,
    alt: "직접 만든 타로카드 선택부터 해석 결과까지 이어지는 모바일 타로사이트 화면",
    caption: "직접 만든 카드 → 카드 선택 → 해석 결과 화면 예시",
    aspectRatio: "aspect-[9/16]",
    objectFit: "contain",
    enableZoom: true,
    badgeText: "수업 결과물 예시",
    subLabel: "모바일 타로사이트 화면",
  },
  // 제작 예시 4종 (디자인 콘셉트 예시)
  conceptKorean: {
    id: "concept-korean",
    src: null,
    alt: "한복·꽃·달빛·한지 질감으로 표현한 한국적 감성 타로 콘셉트 예시",
    caption: "한복·꽃·달빛·한지 질감의 차분한 카드와 사이트 분위기",
    aspectRatio: "aspect-[4/3]",
    objectFit: "contain",
    enableZoom: true,
    badgeText: "디자인 콘셉트 예시",
    subLabel: "한국적 감성 타로",
  },
  conceptRomance: {
    id: "concept-romance",
    src: null,
    alt: "사랑·설렘·관계의 메시지를 담은 로맨스 타로 콘셉트 예시",
    caption: "사랑·설렘·관계의 메시지를 담은 감성적인 카드 디자인",
    aspectRatio: "aspect-[4/3]",
    objectFit: "contain",
    enableZoom: true,
    badgeText: "디자인 콘셉트 예시",
    subLabel: "로맨스 타로",
  },
  conceptFantasy: {
    id: "concept-fantasy",
    src: null,
    alt: "별·달·숲·상징을 활용한 신비로운 판타지 타로 콘셉트 예시",
    caption: "별·달·숲·상징을 활용한 몽환적인 타로 카드 디자인",
    aspectRatio: "aspect-[4/3]",
    objectFit: "contain",
    enableZoom: true,
    badgeText: "디자인 콘셉트 예시",
    subLabel: "신비로운 판타지 타로",
  },
  conceptOracle: {
    id: "concept-oracle",
    src: null,
    alt: "위로·자기이해·하루의 질문을 전하는 마음돌봄 오라클 콘셉트 예시",
    caption: "위로·자기이해·하루의 질문을 전하는 메시지 오라클 카드",
    aspectRatio: "aspect-[4/3]",
    objectFit: "contain",
    enableZoom: true,
    badgeText: "디자인 콘셉트 예시",
    subLabel: "마음돌봄 오라클",
  },
  // 핵심 차별점: 카드 스타일 일관성 비교 (좌/우)
  consistencyBefore: {
    id: "consistency-before",
    src: null,
    alt: "카드마다 그림체와 테두리, 비율이 서로 달라 통일감이 부족한 카드 예시",
    caption: "기준 없이 개별 요청해 스타일·테두리·여백이 제각각인 상태",
    aspectRatio: "aspect-[4/3]",
    objectFit: "contain",
    enableZoom: true,
    badgeText: "비교 예시 · 기준 적용 전",
    subLabel: "스타일과 프레임이 서로 다른 카드",
  },
  consistencyAfter: {
    id: "consistency-after",
    src: null,
    alt: "공통 스타일 문장과 동일한 프레임·비율·제목 위치를 적용한 통일감 있는 카드 덱 예시",
    caption: "기준 이미지·공통 스타일·동일 프레임으로 하나의 덱처럼 정돈된 상태",
    aspectRatio: "aspect-[4/3]",
    objectFit: "contain",
    enableZoom: true,
    badgeText: "비교 예시 · 공통 기준 적용",
    subLabel: "공통 기준을 적용한 카드 덱",
  },
  // 실제 제작 사례 4종
  realCaseCardGen: {
    id: "real-case-card-gen",
    src: null,
    alt: "AI 도구로 콘셉트에 맞는 타로카드 이미지를 제작하는 화면",
    caption: "기준 이미지와 공통 스타일 프롬프트로 대표 카드 제작",
    aspectRatio: "aspect-[9/12]",
    objectFit: "contain",
    enableZoom: true,
    badgeText: "강사 제작 자료",
    subLabel: "01. 카드 이미지 제작 화면",
  },
  realCaseFrame: {
    id: "real-case-frame",
    src: null,
    alt: "공통 스타일과 테두리 프레임, 카드명 배치를 통일하는 화면",
    caption: "그림 영역과 공통 프레임을 분리해 비율·여백·제목 위치 통일",
    aspectRatio: "aspect-[9/12]",
    objectFit: "contain",
    enableZoom: true,
    badgeText: "강사 제작 자료",
    subLabel: "02. 공통 스타일과 프레임 적용 화면",
  },
  realCaseWebsite: {
    id: "real-case-website",
    src: null,
    alt: "직접 만든 타로카드가 적용된 웹 타로사이트 메인 화면",
    caption: "내 취향의 배경·폰트·버튼과 제작한 카드가 연결된 타로사이트",
    aspectRatio: "aspect-[9/12]",
    objectFit: "contain",
    enableZoom: true,
    badgeText: "강사 제작 자료",
    subLabel: "03. 직접 만든 카드가 적용된 사이트",
  },
  realCaseMobileResult: {
    id: "real-case-mobile-result",
    src: null,
    alt: "모바일에서 카드를 선택한 뒤 카드 이미지와 해석 결과가 표시되는 화면",
    caption: "카드 선택 후 준비된 카드별 해석 메시지가 펼쳐지는 모바일 화면",
    aspectRatio: "aspect-[9/12]",
    objectFit: "contain",
    enableZoom: true,
    badgeText: "강사 제작 자료",
    subLabel: "04. 카드 선택 후 해석이 표시되는 모바일 화면",
  },
};

// ─────────────────────────────────────────────────────────────
// 2. 강의 기본 설정 및 운영 메타데이터
// 미설정 항목(수강료·다시보기 기간·질문 지원 기간)은 다른 수업 조건을 임의로 확정 노출하지 않고
// 설정 시에만 노출되도록 관리합니다.
// ─────────────────────────────────────────────────────────────
export interface TarotClassConfig {
  id: string;
  routePath: string;
  categoryLabel: string;
  subBadge: string;
  courseTitle: string;
  courseSubtitle: string;
  heroTitleLine1: string;
  heroTitleLine2: string;
  heroDescription: string;
  heroHighlight: string;
  heroBadges: string[];
  tags: string[];
  status: OnedayStatus;
  format: string;
  duration: string;
  schedule: string;
  price: string; // 타로 클래스에 설정된 금액 사용. 미설정이면 '오픈 예정'
  difficulty: string;
  goalSummary: string;
  materialsSummary: string;
  preparationSummary: string;
  replayPolicy: string | null; // 관리자 확정 시 문자열 입력 (미설정 시 null)
  questionSupportPolicy: string | null; // 관리자 확정 시 문자열 입력 (미설정 시 null)
  communityInviteText: string;
  applicationUrl: string | null;
  notificationUrl: string;
  ctaOpenText: string;
  ctaScheduledText: string;
  termsUrl: string;
  onedayListUrl: string;
}

export const TAROT_CLASS_CONFIG: TarotClassConfig = {
  id: "ai-tarot-card-design",
  routePath: "/tarot",
  categoryLabel: "AI TAROT CREATIVE · ONE DAY CLASS",
  subBadge: "자명스쿨 원데이 실전 마스터",
  courseTitle: "AI 타로서비스·타로카드 제작",
  courseSubtitle: "나만의 카드 이미지부터 취향저격 타로사이트까지",
  heroTitleLine1: "나만의 타로카드로",
  heroTitleLine2: "취향저격 타로사이트 만들기",
  heroDescription:
    "AI로 내 취향의 타로카드를 만들고, 카드를 선택하면 해석이 펼쳐지는 나만의 사이트에 적용합니다. 이미지 제작부터 스타일 통일, 사이트 디자인과 실행까지 하루 3~4시간 동안 함께 완성하는 실전 클래스입니다.",
  heroHighlight: "예쁜 카드 한 장에서, 직접 사용하는 나만의 서비스로.",
  heroBadges: [
    "나만의 타로카드 제작",
    "카드 스타일 일관성",
    "해석 API 호출 없이 작동",
    "코딩 초보도 템플릿으로 실습",
  ],
  tags: ["AI타로", "타로사이트", "타로카드", "오라클카드"],
  status: "scheduled",
  format: "Zoom 실시간 온라인 실습",
  duration: "하루 3~4시간",
  schedule: "개강 일정 준비 중",
  price: "오픈 예정", // 설정된 금액이 없을 때 기본값 '오픈 예정'
  difficulty: "코딩 초보 참여 가능",
  goalSummary: "대표 카드 이미지·공통 스타일·작동하는 타로사이트 첫 버전",
  materialsSummary:
    "기본 템플릿·바이브코딩 PDF·디자인 레퍼런스·Notion 프롬프트",
  preparationSummary:
    "PC·크롬 브라우저·수업에서 안내하는 제작 도구 계정",
  replayPolicy: null, // 미설정 시 노출하지 않음 (관리자 확인 후 확정 시 입력)
  questionSupportPolicy: null, // 미설정 시 노출하지 않음 (관리자 확인 후 확정 시 입력)
  communityInviteText:
    "함께 배우는 분들과 결과물을 나누고, 자명스쿨의 다음 수업 소식을 받아볼 수 있는 커뮤니티로 초대합니다.",
  applicationUrl: null,
  notificationUrl: "https://pf.kakao.com/_IxguMn",
  ctaOpenText: "타로 클래스 신청하기",
  ctaScheduledText: "개강 알림 신청",
  termsUrl: "/terms",
  onedayListUrl: "/oneday",
};

// ─────────────────────────────────────────────────────────────
// 3. 섹션별 상세 데이터
// ─────────────────────────────────────────────────────────────

// [4. 고민 공감 — WHY TAROT CREATIVE?]
export const TAROT_PROBLEM_CARDS = [
  {
    number: "고민 01",
    title: "카드마다 달라지는 스타일",
    description:
      "그림체·색감·인물 표현이 달라져 하나의 덱으로 묶기 어렵습니다.",
  },
  {
    number: "고민 02",
    title: "제각각인 테두리와 배치",
    description:
      "프레임·여백·카드명 위치가 달라 완성도가 아쉽습니다.",
  },
  {
    number: "고민 03",
    title: "이미지에서 멈추는 활용",
    description:
      "카드 선택과 해석 기능까지 연결하려니 코딩과 비용이 부담스럽습니다.",
  },
];

// [5. 수강 전후 변화 — TRANSFORMATION]
export const TAROT_BEFORE_AFTER = [
  {
    before: "생성할 때마다 달라지는 그림체",
    after: "기준 이미지와 공통 스타일을 활용한 카드 제작",
  },
  {
    before: "카드마다 다른 테두리와 여백",
    after: "동일한 프레임과 규격으로 정리한 카드 디자인",
  },
  {
    before: "폴더에 쌓여 있는 카드 이미지",
    after: "사용자가 직접 선택하고 해석을 확인하는 사이트",
  },
  {
    before: "원하는 분위기를 설명하기 막막함",
    after: "레퍼런스로 정리한 취향과 구체적인 디자인 요청",
  },
  {
    before: "해석 기능의 구현과 비용이 부담",
    after: "카드별 해석 데이터를 연결한 API 호출 없는 기본 구조",
  },
];

// [6. 하루 완성 결과물 — ONE DAY RESULT]
export const TAROT_ONE_DAY_RESULTS = [
  {
    step: "01 · CARD IMAGE",
    title: "내 취향의 타로카드",
    description:
      "콘셉트와 색감, 그림체를 정하고 대표 카드 이미지를 제작합니다.",
    tag: "#콘셉트설계 #대표카드제작",
  },
  {
    step: "02 · DECK DESIGN",
    title: "하나의 덱처럼 보이는 디자인",
    description:
      "공통 프레임·비율·카드명 배치를 적용해 통일감을 만듭니다.",
    tag: "#공통프레임 #규격통일",
  },
  {
    step: "03 · TAROT SITE",
    title: "직접 작동하는 타로사이트",
    description:
      "카드 선택부터 이미지와 해석 결과 표시까지 연결합니다.",
    tag: "#카드선택 #해석결과연결",
  },
  {
    step: "04 · TEMPLATE",
    title: "다시 활용할 제작 원본",
    description:
      "카드 이미지와 해석, 디자인을 바꾸며 확장할 수 있는 기본 템플릿을 가져갑니다.",
    tag: "#제작원본 #덱확장활용",
  },
];

// [7. 수업 구성 요약 — PACKAGE INCLUDED]
export const TAROT_PACKAGE_SUMMARY = [
  {
    number: "01",
    title: "이미지 제작",
    description: "나만의 콘셉트와 공통 스타일 정하기",
  },
  {
    number: "02",
    title: "일관성 적용",
    description: "그림체·프레임·카드 규격 통일하기",
  },
  {
    number: "03",
    title: "서비스 제작",
    description: "기본 템플릿에 이미지와 해석 연결하기",
  },
  {
    number: "04",
    title: "디자인 완성",
    description: "색감·폰트·버튼·배경을 내 취향으로 바꾸기",
  },
];

// [8. 제작 예시 — 디자인 콘셉트 4종]
export interface TarotConceptExample {
  id: string;
  icon: string;
  title: string;
  description: string;
  imageSlotKey:
    | "conceptKorean"
    | "conceptRomance"
    | "conceptFantasy"
    | "conceptOracle";
}

export const TAROT_CONCEPT_EXAMPLES: TarotConceptExample[] = [
  {
    id: "korean-tarot",
    icon: "🌕",
    title: "한국적 감성 타로",
    description: "한복·꽃·달빛·한지 질감으로 표현하는 차분한 카드",
    imageSlotKey: "conceptKorean",
  },
  {
    id: "romance-tarot",
    icon: "💌",
    title: "로맨스 타로",
    description: "사랑·설렘·관계의 메시지를 담은 감성적인 카드",
    imageSlotKey: "conceptRomance",
  },
  {
    id: "fantasy-tarot",
    icon: "✨",
    title: "신비로운 판타지 타로",
    description: "별·달·숲·상징을 활용한 몽환적인 카드",
    imageSlotKey: "conceptFantasy",
  },
  {
    id: "mind-oracle",
    icon: "🌿",
    title: "마음돌봄 오라클",
    description: "위로·자기이해·하루의 질문을 전하는 메시지 카드",
    imageSlotKey: "conceptOracle",
  },
];

// [9. 핵심 차별점 — 카드 스타일 일관성 강조 항목]
export const CONSISTENCY_POINTS = [
  "기준 이미지와 공통 스타일 문장 정하기",
  "카드마다 달라질 장면과 유지할 요소 구분하기",
  "그림 영역과 공통 프레임을 분리해 적용하기",
  "카드 비율·여백·제목 위치 통일하기",
  "사이트 안에서도 같은 크기와 배치로 보여주기",
];

// [10. 제작 과정 — HOW IT WORKS (8단계 + 시간 구성안)]
export const TAROT_CURRICULUM_STEPS = [
  {
    step: "STEP 01",
    title: "서비스 주제와 대상 정하기",
    output: "콘셉트·서비스 이름·핵심 기능",
  },
  {
    step: "STEP 02",
    title: "레퍼런스로 취향 구체화하기",
    output: "색감·그림체·화면 디자인 기준",
  },
  {
    step: "STEP 03",
    title: "대표 타로카드 이미지 제작하기",
    output: "사이트에 적용할 카드 이미지",
  },
  {
    step: "STEP 04",
    title: "카드 스타일과 프레임 통일하기",
    output: "공통 프레임·규격·제목 배치",
  },
  {
    step: "STEP 05",
    title: "카드별 해석 준비하기",
    output: "카드 이름·키워드·해석 데이터",
  },
  {
    step: "STEP 06",
    title: "템플릿에 이미지와 해석 연결하기",
    output: "카드 선택과 결과 표시 기능",
  },
  {
    step: "STEP 07",
    title: "내 취향으로 사이트 디자인하기",
    output: "배경·폰트·버튼·결과 화면",
  },
  {
    step: "STEP 08",
    title: "PC·모바일에서 실행하고 점검하기",
    output: "작동하는 첫 버전·공유 준비",
  },
];

export const TAROT_TIME_SCHEDULE = [
  { phase: "콘셉트·레퍼런스 정리", duration: "20분" },
  { phase: "카드 이미지 제작·스타일 통일", duration: "60분" },
  { phase: "휴식", duration: "10분" },
  { phase: "해석 데이터·템플릿 적용", duration: "60분" },
  { phase: "사이트 디자인 수정", duration: "35분" },
  { phase: "실행 점검·오류 수정", duration: "35분" },
  { phase: "정리·후속 활용 안내", duration: "20분" },
];

// [12. 혜택 자료 — CLASS KIT 4종]
export const TAROT_CLASS_KITS = [
  {
    code: "KIT 01",
    title: "타로서비스 기본 템플릿",
    description:
      "이미지와 해석을 바꾸며 빠르게 제작할 수 있는 기본 구조",
  },
  {
    code: "KIT 02",
    title: "바이브코딩 기초 PDF",
    description:
      "제작 요청·실행·수정 등 처음 시작할 때 필요한 핵심 흐름",
  },
  {
    code: "KIT 03",
    title: "사이트 디자인 레퍼런스 모음",
    description:
      "색감·레이아웃·폰트·버튼 등 원하는 분위기를 찾는 참고 사이트",
  },
  {
    code: "KIT 04",
    title: "제작 프롬프트 정리 Notion 자료",
    description:
      "카드 콘셉트·공통 스타일·사이트 제작·디자인 수정에 활용하는 프롬프트",
  },
];

// [13. 실제 제작 사례 — REAL EXPERIENCE 4종]
export interface TarotRealCaseItem {
  number: string;
  title: string;
  description: string;
  imageSlotKey:
    | "realCaseCardGen"
    | "realCaseFrame"
    | "realCaseWebsite"
    | "realCaseMobileResult";
}

export const TAROT_REAL_CASES: TarotRealCaseItem[] = [
  {
    number: "01",
    title: "카드 이미지 제작 화면",
    description:
      "콘셉트와 공통 스타일 문장을 바탕으로 대표 타로카드 이미지를 생성하는 화면입니다.",
    imageSlotKey: "realCaseCardGen",
  },
  {
    number: "02",
    title: "공통 스타일과 프레임 적용 화면",
    description:
      "그림 영역과 테두리 프레임을 분리해 비율·여백·카드명 위치를 통일하는 과정입니다.",
    imageSlotKey: "realCaseFrame",
  },
  {
    number: "03",
    title: "직접 만든 카드가 적용된 사이트",
    description:
      "제작한 카드 이미지를 웹 템플릿에 연결하고 배경·폰트·버튼을 내 취향에 맞게 꾸민 화면입니다.",
    imageSlotKey: "realCaseWebsite",
  },
  {
    number: "04",
    title: "카드 선택 후 해석이 표시되는 모바일 화면",
    description:
      "사용자가 카드를 선택했을 때 해당 카드의 이미지와 미리 준비된 해석 메시지가 펼쳐지는 화면입니다.",
    imageSlotKey: "realCaseMobileResult",
  },
];

// [15. 추천 대상 — RECOMMENDED FOR]
export const TAROT_RECOMMENDED_FOR = [
  "나만의 타로·오라클 카드를 만들고 싶은 분",
  "AI 이미지의 그림체와 테두리가 계속 달라져 고민인 분",
  "만든 이미지를 실제 사용하는 콘텐츠로 연결하고 싶은 분",
  "코딩을 몰라도 작은 사이트를 직접 만들어보고 싶은 분",
  "타로·상담·마음공부 콘텐츠에 자신만의 색을 담고 싶은 분",
  "개인 브랜드의 방문자 참여 콘텐츠가 필요한 분",
];

// [16. 활용 방향 — BUSINESS EXPANSION]
export const TAROT_EXPANSION_IDEAS = [
  {
    number: "01",
    title: "SNS에서 공유하는 오늘의 카드",
    description: "인스타그램·스레드·블로그에서 팔로워가 참여하는 카드 콘텐츠",
  },
  {
    number: "02",
    title: "블로그·홈페이지 방문자를 위한 참여 콘텐츠",
    description: "방문자가 머물며 직접 카드를 뽑아보는 인터랙티브 코너",
  },
  {
    number: "03",
    title: "타로·상담 브랜드를 소개하는 체험 서비스",
    description: "나만의 상담 톤과 메시지를 미리 경험해보는 미니 리딩 사이트",
  },
  {
    number: "04",
    title: "전자책·강의와 연결하는 메시지 카드",
    description: "책이나 클래스의 핵심 문장을 카드 뽑기 형식으로 전달",
  },
  {
    number: "05",
    title: "커뮤니티에서 함께 사용하는 하루의 질문",
    description: "모임이나 챌린지 멤버들과 매일 한 장씩 나누는 성찰 질문 카드",
  },
];

// [18. 자주 묻는 질문 — FAQ 8문항]
export interface TarotFaqItem {
  id: string;
  question: string;
  answer: string;
}

export const TAROT_FAQS: TarotFaqItem[] = [
  {
    id: "tarot-faq-1",
    question: "코딩을 전혀 몰라도 가능한가요?",
    answer:
      "기본 템플릿과 제작 프롬프트를 활용해 실습합니다. 필요한 기능과 디자인을 AI에게 요청하고, 결과를 확인하며 수정하는 흐름을 배웁니다.",
  },
  {
    id: "tarot-faq-2",
    question: "타로 지식이 없어도 참여할 수 있나요?",
    answer:
      "기본 카드 의미와 예제 해석을 활용해 제작 흐름을 익힐 수 있습니다. 본 수업은 전문 타로 상담 교육보다 카드 이미지와 서비스 제작에 집중합니다.",
  },
  {
    id: "tarot-faq-3",
    question: "수업 시간에 78장을 모두 만드나요?",
    answer:
      "수업에서는 대표 카드 제작과 스타일 통일, 사이트 적용을 실습합니다. 전체 덱은 배운 제작 기준으로 수업 후 확장할 수 있습니다.",
  },
  {
    id: "tarot-faq-4",
    question: "카드마다 같은 스타일을 유지하는 방법도 배우나요?",
    answer:
      "네. 기준 이미지와 공통 스타일을 정하고, 프레임·비율·여백·카드명 배치를 통일하는 방법을 배웁니다.",
  },
  {
    id: "tarot-faq-5",
    question: "API 요금 없이 어떻게 해석을 보여주나요?",
    answer:
      "카드별 해석을 미리 준비해 선택한 카드와 연결합니다. 카드를 뽑을 때마다 외부 AI에 해석을 요청하지 않는 구조입니다.",
  },
  {
    id: "tarot-faq-6",
    question: "제가 가진 카드 이미지도 사용할 수 있나요?",
    answer:
      "사용 권한이 있는 이미지라면 적용할 수 있습니다. 이미지 크기와 파일 형식을 정리해 템플릿에 넣는 방법을 배웁니다.",
  },
  {
    id: "tarot-faq-7",
    question: "사이트 디자인도 바꿀 수 있나요?",
    answer:
      "네. 레퍼런스를 활용해 원하는 분위기를 정하고, 배경·색감·폰트·버튼·카드 배치를 수정합니다.",
  },
  {
    id: "tarot-faq-8",
    question: "앱인토스 등록도 포함되나요?",
    answer:
      "이 수업은 카드 이미지와 웹 타로서비스 제작에 집중합니다. 앱인토스용 변환과 등록은 별도 미니앱 클래스에서 다룹니다.",
  },
];

// [19. 마지막 신청 영역 요약 4종]
export const TAROT_FINAL_COMPLETION_ITEMS = [
  "직접 제작한 대표 카드 이미지",
  "카드 스타일과 공통 프레임 기준",
  "작동하는 타로사이트 첫 버전",
  "다시 활용할 템플릿과 제작 자료",
];

