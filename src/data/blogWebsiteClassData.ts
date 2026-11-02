import type { OnedayStatus } from "./onedayClasses";

// ─────────────────────────────────────────────────────────────
// 1. 교체형 이미지 슬롯 정의
// 모든 예시 이미지와 실제 제작 화면은 src에 이미지 경로를 넣으면 즉시 교체됩니다.
// ─────────────────────────────────────────────────────────────
export interface BlogWebsiteImageSlot {
  id: string;
  src: string | null; // 실제 이미지 경로 (예: "/images/oneday/blog-website/hero-laptop.png") - 미등록 시 null
  alt: string;
  caption: string;
  aspectRatio: string;
  objectFit: "contain" | "cover";
  enableZoom?: boolean;
  badgeText?: string;
  subLabel?: string;
}

export const BLOG_WEBSITE_IMAGES: Record<
  | "heroPcMockup"
  | "beforeAfterBefore"
  | "beforeAfterAfter"
  | "conceptInstructor"
  | "conceptConsulting"
  | "conceptWorkshop"
  | "conceptSoloService"
  | "realCaseOverview"
  | "realCaseBanners"
  | "realCaseNavigation"
  | "realCaseEditing",
  BlogWebsiteImageSlot
> = {
  // 상단 히어로 PC/노트북 브라우저 목업
  heroPcMockup: {
    id: "hero-pc-mockup",
    src: null,
    alt: "브랜드 소개 메인 이미지와 연결 배너가 정돈된 네이버 블로그 PC 홈페이지형 메인 화면 목업",
    caption: "브랜드 메인 이미지 + 소개·서비스·후기·문의 연결 배너 구성 예시",
    aspectRatio: "aspect-[16/10]",
    objectFit: "contain",
    enableZoom: true,
    badgeText: "수업 결과물 예시",
    subLabel: "네이버 블로그 PC 홈페이지형 메인",
  },
  // 전후 비교 (같은 가상 브랜드의 전/후 비교)
  beforeAfterBefore: {
    id: "before-after-before",
    src: null,
    alt: "브랜드 소개와 메뉴가 정리되지 않은 기본 블로그 메인 화면",
    caption: "기본 블로그: 메인이 밋밋하고 서비스와 문의가 글 사이에 흩어진 상태",
    aspectRatio: "aspect-[16/10]",
    objectFit: "contain",
    enableZoom: true,
    badgeText: "디자인 변화 예시 · 수강 전",
    subLabel: "기본 블로그 첫 화면",
  },
  beforeAfterAfter: {
    id: "before-after-after",
    src: null,
    alt: "전문성 높은 메인 이미지와 정돈된 연결 배너가 적용된 블로그 홈페이지 메인",
    caption: "홈페이지형 블로그: 메인 비주얼과 소개·서비스·후기 배너가 완성된 상태",
    aspectRatio: "aspect-[16/10]",
    objectFit: "contain",
    enableZoom: true,
    badgeText: "디자인 변화 예시 · 수강 후",
    subLabel: "완성된 블로그 홈페이지",
  },
  // 비즈니스 유형별 4종 예시
  conceptInstructor: {
    id: "concept-instructor",
    src: null,
    alt: "강사 소개, 강의 안내, 수강 후기, 신청 배너로 구성된 교육 브랜드 블로그 홈페이지 예시",
    caption: "강사 소개·강의 안내·수강 후기·신청 배너 중심의 교육 브랜드 레이아웃",
    aspectRatio: "aspect-[16/10]",
    objectFit: "contain",
    enableZoom: true,
    badgeText: "디자인 콘셉트 예시",
    subLabel: "강사·교육 브랜드",
  },
  conceptConsulting: {
    id: "concept-consulting",
    src: null,
    alt: "상담 소개, 프로그램, 이용 안내, 문의 배너로 구성된 상담·코칭 브랜드 블로그 홈페이지 예시",
    caption: "상담 소개·프로그램·이용 안내·문의 배너 중심의 코칭 브랜드 레이아웃",
    aspectRatio: "aspect-[16/10]",
    objectFit: "contain",
    enableZoom: true,
    badgeText: "디자인 콘셉트 예시",
    subLabel: "상담·코칭 브랜드",
  },
  conceptWorkshop: {
    id: "concept-workshop",
    src: null,
    alt: "작품 소개, 클래스, 제작 이야기, 예약 배너로 구성된 공방·작가 브랜드 블로그 홈페이지 예시",
    caption: "작품 소개·클래스·제작 이야기·예약 배너 중심의 아틀리에 레이아웃",
    aspectRatio: "aspect-[16/10]",
    objectFit: "contain",
    enableZoom: true,
    badgeText: "디자인 콘셉트 예시",
    subLabel: "공방·작가 브랜드",
  },
  conceptSoloService: {
    id: "concept-solo-service",
    src: null,
    alt: "서비스 소개, 포트폴리오, 고객 후기, 문의 배너로 구성된 1인 서비스 브랜드 블로그 홈페이지 예시",
    caption: "서비스 소개·포트폴리오·고객 후기·문의 배너 중심의 전문 서비스 레이아웃",
    aspectRatio: "aspect-[16/10]",
    objectFit: "contain",
    enableZoom: true,
    badgeText: "디자인 콘셉트 예시",
    subLabel: "1인 서비스 브랜드",
  },
  // 실제 제작 사례 4종
  realCaseOverview: {
    id: "real-case-overview",
    src: null,
    alt: "브랜드 소개와 핵심 문구가 정돈된 PC 전체 메인 화면",
    caption: "01. 브랜드 소개가 보이는 전체 메인 화면",
    aspectRatio: "aspect-[16/10]",
    objectFit: "contain",
    enableZoom: true,
    badgeText: "강사 제작 사례",
    subLabel: "전체 메인 화면",
  },
  realCaseBanners: {
    id: "real-case-banners",
    src: null,
    alt: "메인 이미지와 세부 메뉴 연결 배너의 확대 화면",
    caption: "02. 메인 이미지와 연결 배너 확대 화면",
    aspectRatio: "aspect-[16/10]",
    objectFit: "contain",
    enableZoom: true,
    badgeText: "강사 제작 사례",
    subLabel: "배너 확대 화면",
  },
  realCaseNavigation: {
    id: "real-case-navigation",
    src: null,
    alt: "배너 클릭 시 소개·수업·문의 페이지로 자연스럽게 이동하는 화면",
    caption: "03. 배너 클릭 후 소개·수업·문의로 이동하는 화면",
    aspectRatio: "aspect-[16/10]",
    objectFit: "contain",
    enableZoom: true,
    badgeText: "강사 제작 사례",
    subLabel: "페이지 이동 화면",
  },
  realCaseEditing: {
    id: "real-case-editing",
    src: null,
    alt: "디자인 템플릿의 사진과 문구를 직접 수정하는 편집 화면",
    caption: "04. 템플릿의 사진과 문구를 직접 수정하는 화면",
    aspectRatio: "aspect-[16/10]",
    objectFit: "contain",
    enableZoom: true,
    badgeText: "강사 제작 사례",
    subLabel: "템플릿 수정 화면",
  },
};

// ─────────────────────────────────────────────────────────────
// 2. 강의 기본 설정 및 운영 메타데이터
// ─────────────────────────────────────────────────────────────
export interface BlogWebsiteClassConfig {
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
  curriculumStructure: string;
  schedule: string;
  price: string;
  difficulty: string;
  practiceTarget: string;
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

export const BLOG_WEBSITE_CLASS_CONFIG: BlogWebsiteClassConfig = {
  id: "blog-notion-starter",
  routePath: "/blog-website",
  categoryLabel: "BLOG WEBSITE · ONE DAY CLASS",
  subBadge: "자명스쿨 원데이 실전 마스터",
  courseTitle: "나만의 블로그 홈페이지 제작",
  courseSubtitle: "내 비즈니스의 첫인상을 만드는 메인 이미지와 연결 배너",
  heroTitleLine1: "내 비즈니스의 첫인상,",
  heroTitleLine2: "나만의 블로그 홈페이지로 완성하세요",
  heroSubTitle: "하루 3~4시간, 메인 이미지부터 연결 배너까지.",
  heroDescription:
    "전문성이 돋보이는 메인 이미지와 소개·상품·수업·문의로 이어지는 배너. 제공되는 디자인 템플릿과 AI를 활용해 내 브랜드에 어울리는 블로그 홈페이지를 직접 만듭니다.",
  heroHighlight: "내 비즈니스에 어울리는 온라인 공간, 이제 직접 꾸며보세요.",
  heroBadges: [
    "디자인 초보 참여 가능",
    "기본·심화 단계별 실습",
    "디자인 템플릿 제공",
    "투명 위젯 코드 제공",
  ],
  tags: ["블로그홈페이지", "퍼스널브랜딩", "AI홈페이지", "콘텐츠제작"],
  status: "scheduled",
  format: "Zoom 실시간 온라인 실습",
  duration: "하루 3~4시간",
  curriculumStructure: "기본 버전 → 심화 버전 단계별 실습",
  schedule: "개강 일정 준비 중",
  price: "오픈 예정",
  difficulty: "디자인·코딩 초보 참여 가능",
  practiceTarget: "네이버 블로그 PC 메인 꾸미기",
  goalSummary: "메인 이미지·연결 배너·위젯 적용·편집 원본",
  materialsSummary: "디자인 템플릿·사이즈별 투명 위젯 코드·Notion 프롬프트",
  preparationSummary: "PC·본인 블로그 계정·디자인 도구 계정",
  preClassNotice:
    "블로그에 사용할 이름과 간단한 소개 문구, 대표 사진이나 로고가 있다면 준비해주세요. 자료가 없는 분은 제공 예시로 제작 흐름을 익힌 뒤 교체할 수 있습니다.",
  replayPolicy: null,
  questionSupportPolicy: null,
  communityInviteText:
    "함께 배우는 분들과 결과물을 나누고, 자명스쿨의 다음 수업 소식을 받아볼 수 있는 커뮤니티로 초대합니다.",
  applicationUrl: null,
  notificationUrl: "https://pf.kakao.com/_IxguMn",
  ctaOpenText: "블로그 클래스 신청하기",
  ctaScheduledText: "개강 알림 신청",
  termsUrl: "/terms",
  onedayListUrl: "/oneday",
};

// ─────────────────────────────────────────────────────────────
// 3. 섹션별 상세 데이터
// ─────────────────────────────────────────────────────────────

// [4. 고민 공감 — WHY BLOG WEBSITE?]
export const BLOG_PROBLEM_CARDS = [
  {
    number: "고민 01",
    title: "내 브랜드가 보이지 않는 첫 화면",
    description:
      "무엇을 하는 사람인지, 어떤 서비스를 제공하는지 바로 전달하기 어렵습니다.",
  },
  {
    number: "고민 02",
    title: "따로 노는 이미지와 배너",
    description:
      "색상과 글꼴, 이미지 분위기가 달라 전체적인 통일감이 부족합니다.",
  },
  {
    number: "고민 03",
    title: "수정할 때마다 생기는 부담",
    description:
      "문구나 배너를 바꾸고 싶어도 어디서 수정해야 할지 몰라 미루게 됩니다.",
  },
];

// [5. 수강 전후 변화 — TRANSFORMATION]
export const BLOG_BEFORE_AFTER = [
  {
    before: "브랜드의 특징이 드러나지 않는 첫 화면",
    after: "이름·전문 분야·핵심 메시지가 보이는 메인",
  },
  {
    before: "제각각인 색감과 이미지",
    after: "메인과 배너가 어우러지는 통일된 디자인",
  },
  {
    before: "여러 글에 흩어진 서비스 정보",
    after: "소개·상품·수업·후기로 이어지는 메뉴",
  },
  {
    before: "찾기 어려운 신청·문의 경로",
    after: "필요한 페이지로 연결되는 배너",
  },
  {
    before: "작은 수정도 막막한 상태",
    after: "원본 템플릿으로 직접 수정하는 운영 방식",
  },
];

// [6. 하루 완성 결과물 — ONE DAY RESULT]
export const BLOG_ONE_DAY_RESULTS = [
  {
    step: "01 · MAIN VISUAL",
    title: "전문성이 보이는 메인 이미지",
    description:
      "브랜드명·소개 문구·대표 이미지를 배치해 첫인상을 정리합니다.",
    tag: "#브랜드명 #대표소개 #메인비주얼",
  },
  {
    step: "02 · LINK BANNERS",
    title: "필요한 곳으로 연결되는 배너",
    description:
      "소개·서비스·후기·신청·문의 등 내 비즈니스에 필요한 메뉴를 만듭니다.",
    tag: "#서비스메뉴 #동선설계 #클릭배너",
  },
  {
    step: "03 · WIDGET SETUP",
    title: "디자인과 연결을 완성하는 위젯 적용",
    description:
      "제공되는 코드를 활용해 이미지와 클릭 영역을 맞추고 링크를 연결합니다.",
    tag: "#투명위젯 #좌표매칭 #링크연동",
  },
  {
    step: "04 · TEMPLATE ASSET",
    title: "직접 수정할 수 있는 디자인 원본",
    description:
      "문구·사진·배너를 바꾸며 계속 활용할 수 있는 편집 원본을 가져갑니다.",
    tag: "#편집원본 #자체수정 #운영유지",
  },
];

// [7. 수업 구성 요약 — PACKAGE INCLUDED]
export const BLOG_PACKAGE_SUMMARY = [
  {
    number: "01",
    title: "브랜드 정리",
    description: "내 전문 분야와 핵심 소개 문구 정하기",
  },
  {
    number: "02",
    title: "디자인 제작",
    description: "메인 이미지와 연결 배너 만들기",
  },
  {
    number: "03",
    title: "블로그 적용",
    description: "레이아웃과 위젯 설정하기",
  },
  {
    number: "04",
    title: "운영 활용",
    description: "문구·이미지·링크를 직접 바꾸는 방법 익히기",
  },
];

// [8. 제작 예시 — 비즈니스 유형별 4종]
export interface BlogConceptExample {
  id: string;
  icon: string;
  title: string;
  menuExample: string;
  imageSlotKey:
    | "conceptInstructor"
    | "conceptConsulting"
    | "conceptWorkshop"
    | "conceptSoloService";
}

export const BLOG_CONCEPT_EXAMPLES: BlogConceptExample[] = [
  {
    id: "type-instructor",
    icon: "🎓",
    title: "강사·교육 브랜드",
    menuExample: "강사 소개 · 강의 안내 · 수강 후기 · 클래스 신청",
    imageSlotKey: "conceptInstructor",
  },
  {
    id: "type-consulting",
    icon: "🤝",
    title: "상담·코칭 브랜드",
    menuExample: "상담 소개 · 코칭 프로그램 · 이용 안내 · 1:1 문의",
    imageSlotKey: "conceptConsulting",
  },
  {
    id: "type-workshop",
    icon: "🎨",
    title: "공방·작가 브랜드",
    menuExample: "작품 갤러리 · 원데이 클래스 · 제작 스토리 · 예약 안내",
    imageSlotKey: "conceptWorkshop",
  },
  {
    id: "type-solo-service",
    icon: "💼",
    title: "1인 서비스 브랜드",
    menuExample: "서비스 안내 · 포트폴리오 · 고객 후기 · 상담 문의",
    imageSlotKey: "conceptSoloService",
  },
];

// [9. 핵심 차별점 — 강조 항목 5개]
export const BLOG_DIFFERENTIATOR_POINTS = [
  {
    number: "01",
    title: "내가 누구인지 전달하는 메인 문구",
    description: "첫 화면에서 나의 전문 분야와 가치를 즉시 이해시킵니다.",
  },
  {
    number: "02",
    title: "전문 분야가 드러나는 대표 이미지",
    description: "신뢰감을 주는 분위기와 고화질 비주얼로 시선을 사로잡습니다.",
  },
  {
    number: "03",
    title: "브랜드에 어울리는 색상과 글꼴",
    description: "톤앤매너를 일치시켜 조잡하지 않고 프로다운 인상을 만듭니다.",
  },
  {
    number: "04",
    title: "필요한 정보를 찾기 쉬운 메뉴",
    description: "방문자가 원하는 상품, 강의, 후기 정보를 한눈에 보여줍니다.",
  },
  {
    number: "05",
    title: "서비스 소개에서 문의까지 이어지는 연결",
    description: "복잡한 탐색 없이 배너 클릭 한 번으로 신청과 상담으로 이어집니다.",
  },
];

// [10. 커리큘럼 — 기본 버전 / 심화 버전 8단계 + 시간표]
export interface BlogCurriculumStep {
  step: string;
  track: "BASIC" | "ADVANCED";
  title: string;
  output: string;
}

export const BLOG_CURRICULUM_STEPS: BlogCurriculumStep[] = [
  // BASIC · 기본 버전
  {
    step: "STEP 01",
    track: "BASIC",
    title: "블로그 목적과 브랜드 소개 정리",
    output: "핵심 문구·메뉴 구성",
  },
  {
    step: "STEP 02",
    track: "BASIC",
    title: "디자인 템플릿 선택·수정",
    output: "내 색상과 사진을 적용한 디자인",
  },
  {
    step: "STEP 03",
    track: "BASIC",
    title: "메인 이미지와 기본 배너 제작",
    output: "적용할 이미지 파일",
  },
  {
    step: "STEP 04",
    track: "BASIC",
    title: "블로그 적용·기본 링크 연결",
    output: "홈페이지형 블로그 메인",
  },
  // ADVANCED · 심화 버전
  {
    step: "STEP 05",
    track: "ADVANCED",
    title: "메인과 배너를 하나의 분위기로 구성",
    output: "통일감 있는 전체 화면",
  },
  {
    step: "STEP 06",
    track: "ADVANCED",
    title: "크기별 투명 위젯 코드 활용",
    output: "디자인에 맞춘 클릭 영역",
  },
  {
    step: "STEP 07",
    track: "ADVANCED",
    title: "소개·후기·신청·문의 페이지 연결",
    output: "비즈니스용 메뉴 동선",
  },
  {
    step: "STEP 08",
    track: "ADVANCED",
    title: "표시 상태·링크 점검과 수정법 익히기",
    output: "점검한 메인 화면·편집 원본",
  },
];

export const BLOG_TIME_SCHEDULE = [
  { phase: "브랜드 문구·메뉴 기획", duration: "20분" },
  { phase: "기본 템플릿 수정·메인 이미지 제작", duration: "50분" },
  { phase: "기본 배너 제작·블로그 적용", duration: "40분" },
  { phase: "휴식", duration: "10분" },
  { phase: "심화 디자인·투명 위젯 활용", duration: "45분" },
  { phase: "서비스·문의 링크 연결", duration: "30분" },
  { phase: "표시 상태 점검·오류 수정", duration: "30분" },
  { phase: "원본 활용·정리", duration: "15분" },
];

// [12. 혜택 자료 — CLASS KIT 3종]
export const BLOG_CLASS_KITS = [
  {
    code: "KIT 01",
    title: "블로그 홈페이지 디자인 템플릿",
    description:
      "메인 이미지와 배너를 내 브랜드에 맞게 수정하는 편집용 템플릿",
  },
  {
    code: "KIT 02",
    title: "여러 사이즈의 투명 위젯 코드",
    description:
      "제작한 레이아웃에 맞춰 선택하고 링크를 연결할 수 있는 코드와 적용 안내",
  },
  {
    code: "KIT 03",
    title: "프롬프트 정리 Notion 자료",
    description:
      "브랜드 소개 문구·메뉴 이름·이미지 콘셉트·디자인 구상에 활용할 프롬프트",
  },
];

// [13. 실제 제작 사례 — REAL EXPERIENCE 4종]
export interface BlogRealCaseItem {
  number: string;
  title: string;
  description: string;
  imageSlotKey:
    | "realCaseOverview"
    | "realCaseBanners"
    | "realCaseNavigation"
    | "realCaseEditing";
}

export const BLOG_REAL_CASES: BlogRealCaseItem[] = [
  {
    number: "01",
    title: "브랜드 소개가 보이는 전체 메인 화면",
    description:
      "방문자가 접속하자마자 전문성과 정체성을 한눈에 파악할 수 있는 메인 레이아웃입니다.",
    imageSlotKey: "realCaseOverview",
  },
  {
    number: "02",
    title: "메인 이미지와 연결 배너 확대 화면",
    description:
      "컬러 톤과 서체를 통일하고 시선이 자연스럽게 이동하도록 정렬된 배너 디테일입니다.",
    imageSlotKey: "realCaseBanners",
  },
  {
    number: "03",
    title: "배너 클릭 후 소개·수업·문의로 이동하는 화면",
    description:
      "투명 위젯 링크를 통해 원하는 안내 글, 카테고리, 예약 폼으로 즉시 연결되는 동선입니다.",
    imageSlotKey: "realCaseNavigation",
  },
  {
    number: "04",
    title: "템플릿의 사진과 문구를 직접 수정하는 화면",
    description:
      "디자인 프로그램을 몰라도 템플릿에서 글자와 사진만 교체해 쉽게 유지보수하는 방식입니다.",
    imageSlotKey: "realCaseEditing",
  },
];

// [15. 추천 대상 — RECOMMENDED FOR 7개]
export const BLOG_RECOMMENDED_FOR = [
  "블로그를 내 비즈니스의 홍보 공간으로 활용하고 싶은 분",
  "강의·상담·공방·서비스를 전문적으로 소개하고 싶은 분",
  "홈페이지처럼 정돈된 블로그 메인을 만들고 싶은 분",
  "이미지와 배너의 색감·분위기를 통일하고 싶은 분",
  "투명 위젯과 링크 연결이 막막했던 분",
  "디자인을 맡긴 뒤 작은 수정도 어려웠던 분",
  "템플릿으로 직접 만들고 관리하는 방법을 배우고 싶은 분",
];

// [16. 비즈니스 활용 — BUSINESS EXPANSION 방문자 동선 4단계]
export const BLOG_EXPANSION_STEPS = [
  {
    step: "01",
    question: "어떤 일을 하는 사람인가요?",
    answer: "메인 이미지 · 핵심 소개 문구",
    guide: "신뢰감 있는 첫인상으로 나의 전문 분야를 즉시 전달합니다.",
  },
  {
    step: "02",
    question: "어떤 서비스를 제공하나요?",
    answer: "서비스 · 강의 · 상품 배너",
    guide: "고객이 찾는 핵심 프로그램과 상품 목록을 명확히 보여줍니다.",
  },
  {
    step: "03",
    question: "실제 사례를 볼 수 있나요?",
    answer: "후기 · 포트폴리오",
    guide: "실제 고객 만족 후기와 작업 결과물로 구매 결정을 돕습니다.",
  },
  {
    step: "04",
    question: "어떻게 신청하거나 문의하나요?",
    answer: "신청 · 예약 · 문의 링크",
    guide: "카카오 채널, 네이버 예약, 구글폼으로 바로 이어지는 연결 동선.",
  },
];

// [18. 자주 묻는 질문 — FAQ 8문항]
export interface BlogFaqItem {
  id: string;
  question: string;
  answer: string;
}

export const BLOG_FAQS: BlogFaqItem[] = [
  {
    id: "blog-faq-1",
    question: "디자인을 전혀 몰라도 가능한가요?",
    answer:
      "제공되는 템플릿에 사진·문구·색상을 바꾸며 시작합니다. 기본 구성을 완성한 뒤 내 브랜드에 맞게 다듬는 방법을 배웁니다.",
  },
  {
    id: "blog-faq-2",
    question: "코딩도 배워야 하나요?",
    answer:
      "코드를 처음부터 작성하는 수업은 아닙니다. 제공되는 투명 위젯 코드의 필요한 부분을 수정하고 적용하는 방법을 안내합니다.",
  },
  {
    id: "blog-faq-3",
    question: "기본 버전과 심화 버전은 어떻게 다른가요?",
    answer:
      "기본에서는 메인 이미지와 배너를 만들고 블로그에 적용합니다. 심화에서는 디자인을 더 세밀하게 조정하고, 위젯과 서비스 연결 구조를 다듬습니다.",
  },
  {
    id: "blog-faq-4",
    question: "기존에 운영하던 블로그에도 적용할 수 있나요?",
    answer:
      "기존 블로그를 활용해 실습할 수 있습니다. 적용 전 현재 설정과 이미지를 기록해두고 진행합니다.",
  },
  {
    id: "blog-faq-5",
    question: "스마트폰에서도 PC와 똑같이 보이나요?",
    answer:
      "이 수업은 PC 메인의 홈페이지형 디자인을 중심으로 합니다. 모바일은 표시 방식이 다르므로 별도로 확인하고, 프로필과 주요 정보도 점검합니다.",
  },
  {
    id: "blog-faq-6",
    question: "배너는 어디로 연결할 수 있나요?",
    answer:
      "소개 글·카테고리·서비스 안내·신청·문의 등 연결하려는 페이지를 정하고, 실제 적용 가능한 링크를 확인하며 구성합니다.",
  },
  {
    id: "blog-faq-7",
    question: "수업 후에도 직접 수정할 수 있나요?",
    answer:
      "편집 원본을 활용해 사진·문구·배너를 바꾸고, 연결 주소를 수정하는 방법까지 배웁니다.",
  },
  {
    id: "blog-faq-8",
    question: "별도 홈페이지도 함께 만드는 수업인가요?",
    answer:
      "이 수업은 네이버 블로그를 홈페이지형으로 꾸미는 과정입니다. 독립 홈페이지 개발과는 구분됩니다.",
  },
];

// [19. 마지막 신청 영역 요약 4종]
export const BLOG_FINAL_COMPLETION_ITEMS = [
  "내 브랜드를 담은 메인 이미지",
  "소개·서비스·문의로 연결되는 배너",
  "위젯과 링크를 적용한 블로그 메인",
  "직접 수정할 수 있는 디자인 원본과 제작 자료",
];

