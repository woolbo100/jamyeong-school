import type { OnedayStatus } from "./onedayClasses";

// ─────────────────────────────────────────────────────────────
// 1. 이미지 슬롯 정의 (6. 이미지 교체 구조)
// 이미지마다 경로, 대체 텍스트, 캡션, 표시 비율, objectFit, 확대 보기 여부를 분리 관리합니다.
// 실제 이미지가 준비되면 src에 경로만 입력하면 즉시 실제 이미지로 렌더링됩니다.
// ─────────────────────────────────────────────────────────────
export interface PicturebookImageSlot {
  id: string;
  src: string | null; // 실제 이미지 경로 (예: "/images/oneday/picturebook/cover.png") - 미등록 시 null
  alt: string;
  caption: string;
  aspectRatio: string; // Tailwind aspect ratio 클래스 (예: "aspect-[4/3]", "aspect-[3/4]", "aspect-[16/10]")
  objectFit: "contain" | "cover";
  enableZoom?: boolean;
  categoryLabel?: string; // 예: "강사 제작 자료" | "실습 화면 예시" | "출판 등록 안내 화면"
  statusBadge?: string; // 예: "출판 등록 준비" | "표지·내지 편집"
}

export const PICTUREBOOK_IMAGES: Record<
  | "heroBookMockup"
  | "bookCover"
  | "spreadPages"
  | "consistentCharacterScenes"
  | "coloringBookSample"
  | "canvaEditingScreen"
  | "classKitPreview"
  | "publishingRegistrationCase",
  PicturebookImageSlot
> = {
  // 1. 메인 그림책 북 목업
  heroBookMockup: {
    id: "hero-book-mockup",
    src: null,
    alt: "내 이야기로 만든 첫 그림책 표지와 펼친 내지 북 목업",
    caption: "중심 표지와 양쪽으로 이어지는 펼친 내지 구성 예시",
    aspectRatio: "aspect-[4/3]",
    objectFit: "contain",
    enableZoom: true,
    categoryLabel: "그림책 북 목업",
    statusBadge: "내 이야기로 만든 첫 그림책",
  },
  // 2. 그림책 표지
  bookCover: {
    id: "book-cover",
    src: null,
    alt: "그림책 앞표지·책등·뒤표지 디자인 구성",
    caption: "그림책 표지와 펼친 내지 구성 화면",
    aspectRatio: "aspect-[4/3]",
    objectFit: "contain",
    enableZoom: true,
    categoryLabel: "제작 사례 01",
    statusBadge: "표지·펼친 내지 구성",
  },
  // 3. 양쪽으로 이어지는 펼친 내지
  spreadPages: {
    id: "spread-pages",
    src: null,
    alt: "양쪽으로 자연스럽게 이어지는 그림책 펼친 내지 편집 예시",
    caption: "양면 펼침 구성과 글·그림 배치 예시",
    aspectRatio: "aspect-[16/10]",
    objectFit: "contain",
    enableZoom: true,
    categoryLabel: "펼친 내지 구성",
    statusBadge: "양면 연결 레이아웃",
  },
  // 4. 동일 캐릭터의 연속 장면
  consistentCharacterScenes: {
    id: "consistent-character-scenes",
    src: null,
    alt: "같은 캐릭터가 여러 장면에 일관되게 등장하는 연속 장면 이미지",
    caption: "기준 캐릭터와 공통 화풍을 유지한 연속 장면 제작 화면",
    aspectRatio: "aspect-[4/3]",
    objectFit: "contain",
    enableZoom: true,
    categoryLabel: "제작 사례 02",
    statusBadge: "캐릭터 일관성 유지",
  },
  // 5. 컬러링북 이미지
  coloringBookSample: {
    id: "coloring-book-sample",
    src: null,
    alt: "그림책 장면을 바탕으로 변환한 컬러링북용 선화 이미지",
    caption: "완성한 장면을 바탕으로 제작한 컬러링북 선화 예시",
    aspectRatio: "aspect-[4/3]",
    objectFit: "contain",
    enableZoom: true,
    categoryLabel: "컬러링북 확장",
    statusBadge: "선화 이미지 변환",
  },
  // 6. Canva 내지·표지 편집 화면
  canvaEditingScreen: {
    id: "canva-editing-screen",
    src: null,
    alt: "Canva에서 그림책 순서 템플릿으로 내지와 표지를 편집하는 화면",
    caption: "순서 템플릿을 활용한 Canva 내지·표지 편집 화면",
    aspectRatio: "aspect-[4/3]",
    objectFit: "contain",
    enableZoom: true,
    categoryLabel: "제작 사례 03",
    statusBadge: "Canva 편집 화면",
  },
  // 7. 제공 스킬·템플릿·도구 화면
  classKitPreview: {
    id: "class-kit-preview",
    src: null,
    alt: "그림책 기획 스킬, 순서 템플릿, 클릭형 자동 생성 도구 및 안내 자료 구성",
    caption: "기획 스킬 · 순서 템플릿 · 자동 생성 도구 · 출판 안내 자료 화면",
    aspectRatio: "aspect-[16/9]",
    objectFit: "contain",
    enableZoom: true,
    categoryLabel: "CLASS KIT 구성 자료",
    statusBadge: "수강생 제공 6종 키트",
  },
  // 8. 유페이퍼·부크크 실제 등록 사례
  publishingRegistrationCase: {
    id: "publishing-registration-case",
    src: null,
    alt: "유페이퍼 전자책 및 부크크 POD 종이책 출판 등록 화면과 준비 자료",
    caption: "유페이퍼 전자책 · 부크크 POD 종이책 등록 흐름과 제출 준비 화면",
    aspectRatio: "aspect-[4/3]",
    objectFit: "contain",
    enableZoom: true,
    categoryLabel: "제작 사례 04",
    statusBadge: "전자책·종이책 등록 안내",
  },
};

// ─────────────────────────────────────────────────────────────
// 2. 강의 핵심 설정 및 운영 메타데이터 (8. 콘텐츠 관리·모바일·검색 설정)
// 상단·중간·하단·모바일 고정 바에서 모두 동일한 데이터를 참조합니다.
// ─────────────────────────────────────────────────────────────
export interface PicturebookClassConfig {
  id: string;
  routePath: string;
  categoryLabel: string;
  subBadge: string;
  courseTitle: string;
  courseSubtitle: string;
  heroMainTitleLine1: string;
  heroMainTitleLine2: string;
  heroHighlightTitle: string;
  heroDescription: string;
  heroHookText: string;
  heroBadges: string[];
  tags: string[];
  status: OnedayStatus; // "open" | "scheduled" | "closed"
  format: string; // 진행 방식
  duration: string; // 수업 시간
  price: string; // 수강료
  schedule: string; // 개강 일정
  difficulty: string; // 수강 난이도
  prePublishSupport: string; // 출판 전 지원
  replayAndQuestionPolicy: string | null; // 확정된 다시보기·일반 질문 정책이 있을 때만 표시 (미확정 시 null)
  applicationUrl: string | null; // 모집 중일 때 결제/신청 링크
  notificationUrl: string; // 일정 미정일 때 개강 알림/문의 연결 (자명스쿨 공식 카카오 채널)
  ctaOpenText: string;
  ctaScheduledText: string;
  termsUrl: string;
  onedayListUrl: string;
}

export const PICTUREBOOK_CLASS_CONFIG: PicturebookClassConfig = {
  id: "ai-picture-book",
  routePath: "/picturebook",
  categoryLabel: "AI PICTURE BOOK · ONE DAY CLASS",
  subBadge: "자명스쿨 원데이 실전 마스터",
  courseTitle: "AI 그림책 출판 원데이",
  courseSubtitle: "내 이야기로 시작하는 작가 브랜딩의 첫걸음",
  heroMainTitleLine1: "내 이야기가 책이 되고,",
  heroMainTitleLine2: "나의 이름이 브랜드가 됩니다.",
  heroHighlightTitle: "단 하루 3~4시간, 나의 스토리가 담긴 첫 그림책 만들기",
  heroDescription:
    "제목과 줄거리 기획부터 캐릭터 설정, AI 이미지 생성, Canva 편집, 전자책·POD 종이책 출판 등록 방법까지. 전용 스킬과 제작 도구로 첫 그림책의 시작을 함께합니다.",
  heroHookText: "그림책 한 권으로 시작하는, 작가 브랜딩의 첫걸음.",
  heroBadges: [
    "원스톱 기획 스킬 제공",
    "캐릭터 일관성 이미지 제작",
    "전자책·종이책 출판 안내",
    "출판 등록 전 1:1 컨설팅",
  ],
  tags: ["AI그림책", "그림책출판", "작가브랜딩", "Canva", "유페이퍼", "부크크"],
  status: "scheduled",
  format: "실시간 실습 클래스 (개강 안내 시 상세 공지)",
  duration: "3~4시간 집중 원데이",
  price: "개강 안내 시 공개",
  schedule: "개강 일정 준비 중",
  difficulty: "기본적인 PC 사용과 파일 저장·업로드가 가능한 초보자",
  prePublishSupport: "출판 등록 전 1:1 컨설팅 제공",
  replayAndQuestionPolicy: null, // 미확정 운영 약속 임의 추가 방지 (확정 시 문자열 입력)
  applicationUrl: null,
  notificationUrl: "https://pf.kakao.com/_IxguMn",
  ctaOpenText: "그림책 출판 원데이 신청하기",
  ctaScheduledText: "개강 알림 신청하기",
  termsUrl: "/terms",
  onedayListUrl: "/oneday",
};

// ─────────────────────────────────────────────────────────────
// 3. 섹션별 콘텐츠 데이터
// ─────────────────────────────────────────────────────────────

// [03. 공감과 시작의 장벽]
export const BARRIER_CARDS = [
  {
    number: "01",
    title: "기획의 막막함",
    quote: "“어떤 제목으로, 어떤 이야기를 써야 할까요?”",
    description:
      "줄거리와 등장인물, 장면 구성까지 혼자 정리하려면 첫 페이지를 시작하기도 어렵습니다.",
  },
  {
    number: "02",
    title: "그림과 편집의 어려움",
    quote: "“장면마다 주인공이 달라지고, 책처럼 배치하기도 어려워요.”",
    description:
      "캐릭터 일관성과 장면 연결, 펼친 내지와 표지 제작까지 함께 익힙니다.",
  },
  {
    number: "03",
    title: "출판 등록의 복잡함",
    quote: "“파일을 만들었는데, 어디에 어떻게 등록하죠?”",
    description:
      "전자책과 종이책의 차이부터 등록 전 확인해야 할 항목까지 순서대로 안내합니다.",
  },
];

// [04. Before / After]
export const BEFORE_AFTER_ITEMS = [
  {
    step: "① 기획",
    before: "막연하게 떠오르는 아이디어",
    after: "제목·줄거리·캐릭터·장면별 대본이 정리된 그림책 기획",
  },
  {
    step: "② 이미지",
    before: "장면마다 달라지는 캐릭터와 제각각인 그림",
    after: "기준 캐릭터와 공통 화풍을 적용해 연결감을 높인 장면 이미지",
  },
  {
    step: "③ 편집",
    before: "이미지만 모아둔 폴더",
    after: "내지와 표지가 갖춰진 그림책 편집 파일",
  },
  {
    step: "④ 출판",
    before: "만들고도 어디에 쓸지 모르는 결과물",
    after: "전자책·POD 종이책 등록으로 이어갈 수 있는 첫 출판 프로젝트",
  },
];

// [05. 하루 수업의 4가지 결과]
export const ONE_DAY_RESULTS = [
  {
    number: "01",
    code: "STORY",
    title: "내 이야기가 담긴 그림책 기획",
    description:
      "제목, 줄거리, 캐릭터 설정, 장면별 대본과 이미지 프롬프트를 정리합니다.",
    tag: "#원스톱기획 #장면별대본",
  },
  {
    number: "02",
    code: "IMAGE",
    title: "한 권의 분위기로 연결되는 장면 이미지",
    description:
      "캐릭터의 특징과 화풍을 유지하는 방법을 배우고, 에이전트를 활용해 장면 이미지를 순서대로 제작합니다.",
    tag: "#캐릭터일관성 #에이전트활용",
  },
  {
    number: "03",
    code: "DESIGN",
    title: "Canva로 편집한 첫 그림책",
    description:
      "양쪽으로 이어지는 내지와 종이책 표지의 기본 구조를 배웁니다.",
    tag: "#Canva편집 #내지표지구성",
  },
  {
    number: "04",
    code: "PUBLISH",
    title: "전자책·종이책 출판 등록 준비",
    description:
      "유페이퍼와 부크크의 등록 흐름을 익히고, 제출 전 확인할 파일과 정보를 정리합니다.",
    tag: "#유페이퍼 #부크크POD",
  },
];

// [06. 수업 구성 요약]
export const PACKAGE_SUMMARY_CARDS = [
  {
    number: "01",
    title: "기획",
    summary: "스킬로 제목부터 장면별 프롬프트까지",
  },
  {
    number: "02",
    title: "이미지",
    summary: "캐릭터 일관성·에이전트 활용·컬러링북 확장",
  },
  {
    number: "03",
    title: "편집",
    summary: "Canva 내지 구성·펼침면·종이책 표지 제작",
  },
  {
    number: "04",
    title: "출판",
    summary: "유페이퍼·부크크 등록 안내와 등록 전 1:1 점검",
  },
];

// [07. 제작 가능한 그림책 예시]
export const BOOK_EXAMPLES = [
  {
    number: "01",
    icon: "🌿",
    title: "나의 경험을 담은 그림책",
    description: "지나온 시간과 삶에서 얻은 메시지를 이야기로 표현합니다.",
  },
  {
    number: "02",
    icon: "🏡",
    title: "아이·가족·반려동물 그림책",
    description: "소중한 존재와 함께한 기억을 한 권의 책으로 남깁니다.",
  },
  {
    number: "03",
    icon: "✨",
    title: "마음과 성장을 담은 그림책",
    description: "위로, 용기, 관계, 자기이해의 메시지를 전합니다.",
  },
  {
    number: "04",
    icon: "📖",
    title: "브랜드 메시지를 담은 그림책",
    description: "내 수업과 활동, 사업의 철학을 이야기로 풀어냅니다.",
  },
];

// [08. 8단계 제작·출판 과정]
export interface CurriculumStepItem {
  step: string;
  title: string;
  description: string;
  output: string;
}

export const CURRICULUM_STEPS: CurriculumStepItem[] = [
  {
    step: "STEP 01",
    title: "나의 이야기와 메시지 정하기",
    description:
      "누구에게 어떤 이야기를 전할지 정하고, 첫 그림책의 주제와 분위기를 잡습니다.",
    output: "독자·주제·핵심 메시지",
  },
  {
    step: "STEP 02",
    title: "스킬로 그림책 기획하기",
    description:
      "제목과 줄거리, 캐릭터 설정, 장면별 대본과 이미지 프롬프트를 전용 스킬로 한 번에 구성합니다.",
    output: "그림책 기획안·장면별 제작안",
  },
  {
    step: "STEP 03",
    title: "기준 캐릭터와 화풍 정하기",
    description:
      "주인공의 외형과 특징을 정리하고, 장면마다 참고할 기준 이미지와 공통 화풍을 만듭니다.",
    output: "기준 캐릭터·공통 스타일",
  },
  {
    step: "STEP 04",
    title: "에이전트로 장면 이미지 만들기",
    description:
      "장면별 이미지 프롬프트를 활용해 에이전트로 이미지를 순서대로 생성하고 점검합니다. 캐릭터의 연결감을 높이는 방법과 컬러링북용 선화 제작도 함께 배웁니다.",
    output: "장면별 이미지·컬러링북용 이미지",
  },
  {
    step: "STEP 05",
    title: "Canva로 그림책 내지 편집하기",
    description:
      "제공되는 순서 템플릿을 활용해 글과 그림을 배치하고 책의 흐름을 만듭니다. 양쪽으로 이어지는 이미지와 제본부에 중요한 요소가 걸리지 않도록 배치하는 방법도 배웁니다.",
    output: "그림책 내지 편집 파일",
  },
  {
    step: "STEP 06",
    title: "종이책 표지와 출판용 파일 준비하기",
    description:
      "전자책과 종이책에 필요한 파일을 구분하고, 종이책의 앞표지·책등·뒤표지 구성을 익힙니다. 선택한 판형과 페이지 수, 플랫폼 안내에 맞춰 표지 규격을 확인하는 방법을 배웁니다.",
    output: "표지 디자인·제출용 파일 초안",
  },
  {
    step: "STEP 07",
    title: "유페이퍼·부크크 등록 과정 배우기",
    description:
      "유페이퍼 전자책과 부크크 POD 종이책의 등록 흐름과 입력 정보를 살펴봅니다. 책 소개, 저자 소개, 표지, 본문 파일 등 출판 준비 자료를 정리합니다.",
    output: "등록 정보·제출 준비 체크리스트",
  },
  {
    step: "STEP 08",
    title: "출판 전 점검과 작가 프로필 준비",
    description:
      "등록 전 1:1 컨설팅으로 준비 상태를 점검하고, 출간 이후 활용할 저자 소개와 작가 프로필을 정리합니다. 네이버 인물정보 등록 준비 방향도 안내합니다.",
    output: "수정 항목·작가 소개·후속 실행 목록",
  },
];

// [10. 수강생 혜택 6종]
export interface ClassKitItem {
  code: string;
  title: string;
  description: string;
  note?: string;
}

export const CLASS_KITS: ClassKitItem[] = [
  {
    code: "KIT 01",
    title: "그림책 기획 스킬",
    description:
      "제목·줄거리·캐릭터 설정·캐릭터 프롬프트·장면별 대본·이미지 프롬프트까지. 첫 기획을 한 번에 정리하는 전용 스킬을 제공합니다.",
  },
  {
    code: "KIT 02",
    title: "그림책 순서 템플릿",
    description:
      "책의 시작부터 마무리까지, 페이지 흐름을 따라 편집할 수 있는 그림책 순서 템플릿을 제공합니다.",
  },
  {
    code: "KIT 03",
    title: "클릭형 그림책 자동 생성 도구",
    description:
      "그림책 제작을 간편하게 시작할 수 있도록 클릭형 자동 생성 도구와 사용 방법을 제공합니다.",
    note: "세부 자동화 범위는 실제 도구 기능에 맞게 안내하며, Canva 편집과 출판 플랫폼 등록은 직접 확인하며 진행합니다.",
  },
  {
    code: "KIT 04",
    title: "1인 출판사 등록 안내 전자책",
    description:
      "향후 자신의 출판 브랜드를 운영하고 싶은 분들을 위해 1인 출판사 등록 과정을 살펴볼 수 있는 전자책을 제공합니다.",
    note: "첫 그림책 제작을 위해 출판사를 먼저 등록할 필요는 없습니다.",
  },
  {
    code: "KIT 05",
    title: "출판 등록 전 1:1 컨설팅",
    description:
      "완성한 책을 등록하기 전, 파일과 등록 준비 상태를 함께 살펴보고 보완할 부분을 안내합니다.",
  },
  {
    code: "KIT 06",
    title: "부크크 종이책 등록 실전 노하우 정리집",
    description:
      "표지와 내지, 파일 구성 등 등록 과정에서 자주 놓치는 항목과 반려 사유를 줄이기 위한 점검 내용을 제공합니다.",
  },
];

// [11. 실제 그림책·출판 사례 카드 4개]
export interface RealExperienceCaseItem {
  number: string;
  title: string;
  description: string;
  sourceType: string; // 강사 사례 / 실습 화면 구분
  statusType: string; // 출판·등록 준비 단계 구분
  imageSlotKey:
    | "bookCover"
    | "consistentCharacterScenes"
    | "canvaEditingScreen"
    | "publishingRegistrationCase";
}

export const REAL_EXPERIENCE_CASES: RealExperienceCaseItem[] = [
  {
    number: "01",
    title: "그림책 표지와 펼친 내지",
    description:
      "앞표지·책등·뒤표지 구조와 양쪽으로 자연스럽게 이어지는 펼친 내지 구성을 실제 제작 예시로 살펴봅니다.",
    sourceType: "강사 제작 자료",
    statusType: "표지·내지 완성본 구성",
    imageSlotKey: "bookCover",
  },
  {
    number: "02",
    title: "같은 캐릭터가 등장하는 연속 장면",
    description:
      "기준 캐릭터와 공통 화풍을 설정해 여러 장면에서 주인공의 특징과 분위기를 일관되게 연결한 제작 화면입니다.",
    sourceType: "강사 제작 자료",
    statusType: "연속 장면 이미지 제작",
    imageSlotKey: "consistentCharacterScenes",
  },
  {
    number: "03",
    title: "Canva 내지·표지 편집 화면",
    description:
      "제공되는 그림책 순서 템플릿 위에 장면 이미지와 본문 텍스트를 배치하고 인쇄 여백을 점검하는 편집 화면입니다.",
    sourceType: "실습 화면 가이드",
    statusType: "내지·표지 편집 단계",
    imageSlotKey: "canvaEditingScreen",
  },
  {
    number: "04",
    title: "전자책·종이책 등록 사례",
    description:
      "유페이퍼 전자책과 부크크 POD 종이책 등록 화면에서 파일 규격, 서지 정보, 소개글을 준비하는 실제 흐름을 확인합니다.",
    sourceType: "출판 등록 안내 자료",
    statusType: "플랫폼 등록 준비·절차 안내",
    imageSlotKey: "publishingRegistrationCase",
  },
];

// [13. 추천 대상 체크리스트]
export const RECOMMENDED_FOR_LIST = [
  "내 이름이 들어간 책을 한 번 만들어보고 싶은 분",
  "작가 활동을 개인 브랜딩의 시작으로 삼고 싶은 분",
  "강의·상담·코칭의 메시지를 그림책으로 표현하고 싶은 분",
  "아이·가족·반려동물과의 이야기를 책으로 남기고 싶은 분",
  "AI 이미지를 실제 출판 결과물로 연결하고 싶은 분",
  "Canva를 활용해 그림책 내지와 표지를 만들어보고 싶은 분",
  "전자책과 POD 종이책 등록 과정이 막막했던 분",
  "첫 출판을 바탕으로 작가 프로필과 커리어를 확장하고 싶은 분",
];

// [14. 작가 브랜딩·커리어 확장 카드 3개]
export const AUTHOR_BRANDING_CARDS = [
  {
    number: "01",
    title: "나를 설명하는 작가 프로필",
    description:
      "어떤 이야기를 전하는 사람인지 저자 소개와 활동 방향을 정리합니다.",
  },
  {
    number: "02",
    title: "기존 활동과 연결",
    description:
      "강의·코칭·상담·브랜드 콘텐츠에 그림책의 메시지를 연결합니다.",
  },
  {
    number: "03",
    title: "네이버 인물정보 등록 준비",
    description:
      "출판 이력과 활동 자료를 바탕으로 인물정보 신청에 필요한 준비 방향을 살펴봅니다.",
  },
];

// [15. 클래스 안내와 사전 준비]
export const PREPARATION_ITEMS = [
  "인터넷 사용이 가능한 노트북 또는 PC",
  "Canva 계정",
  "수업에서 안내하는 AI 도구 계정",
  "책으로 만들어보고 싶은 이야기나 주제 한 가지",
];

export const PRE_CLASS_NOTICES = [
  "그림이나 완성된 원고를 미리 준비하지 않아도 됩니다.",
  "사용할 도구와 계정 준비 방법은 수업 전에 안내합니다.",
  "도구의 무료·유료 이용 범위와 별도 비용은 실제 수업 환경을 확인해 사전 안내합니다.",
  "출판 플랫폼 계정 및 등록에 필요한 자료는 사전 안내에 따라 준비합니다.",
];

// [16. FAQ (13문항)]
export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  hasTermsLink?: boolean;
}

export const PICTUREBOOK_FAQS: FaqItem[] = [
  {
    id: "faq-1",
    question: "글이나 그림에 자신이 없어도 가능한가요?",
    answer:
      "네. 전용 스킬로 이야기의 구조를 잡고, AI로 장면 이미지를 만든 뒤 Canva로 편집하는 과정을 배웁니다. 중요한 것은 표현하고 싶은 이야기와 메시지입니다.",
  },
  {
    id: "faq-2",
    question: "정말 하루 3~4시간 만에 그림책을 만들 수 있나요?",
    answer:
      "짧은 그림책 한 권을 목표로 기획·이미지·편집의 흐름을 실습합니다. 완성도와 분량, 개인별 실습 속도에 따라 수업 후 추가 편집이 필요할 수 있습니다. 출판 승인까지 당일 완료되는 수업은 아닙니다.",
  },
  {
    id: "faq-3",
    question: "장면마다 주인공이 달라지는 문제도 배우나요?",
    answer:
      "네. 기준 캐릭터와 공통 화풍을 정하고, 참조 이미지와 프롬프트를 활용해 일관성을 높이는 방법을 배웁니다. 생성 결과에 따라 재생성이나 부분 수정이 필요할 수 있습니다.",
  },
  {
    id: "faq-4",
    question: "컬러링북 이미지도 만들 수 있나요?",
    answer:
      "네. 그림책 장면을 바탕으로 컬러링북에 적합한 선화 이미지를 생성하는 방법도 다룹니다.",
  },
  {
    id: "faq-5",
    question: "Canva를 잘 못해도 따라갈 수 있나요?",
    answer:
      "그림책 순서 템플릿을 활용해 이미지와 글 배치부터 내지·표지 구성까지 안내합니다. 기본적인 PC 사용과 파일 업로드는 가능해야 합니다.",
  },
  {
    id: "faq-6",
    question: "전자책과 종이책 출판을 모두 배우나요?",
    answer:
      "네. 유페이퍼 전자책과 부크크 POD 종이책의 등록 흐름과 준비 항목을 안내합니다. 각 플랫폼에 맞는 파일을 구분하는 방법도 배웁니다.",
  },
  {
    id: "faq-7",
    question: "종이책 표지 사이즈는 어떻게 맞추나요?",
    answer:
      "선택한 판형과 페이지 수, 플랫폼의 제작 안내를 기준으로 앞표지·책등·뒤표지를 구성하는 방법을 배웁니다. 제출 전에는 최신 규격을 확인합니다.",
  },
  {
    id: "faq-8",
    question: "출판 등록 전 1:1 컨설팅은 어떤 지원인가요?",
    answer:
      "등록하기 전 파일과 준비 상태를 살펴보고, 보완해야 할 부분을 안내하는 지원입니다. 진행 방식은 수강 안내를 통해 공지합니다.",
  },
  {
    id: "faq-9",
    question: "1인 출판사를 먼저 등록해야 하나요?",
    answer:
      "수업 참여를 위해 미리 등록할 필요는 없습니다. 이후 자신의 출판 브랜드를 운영하고 싶은 분들을 위해 별도의 1인 출판사 등록 안내 전자책을 제공합니다.",
  },
  {
    id: "faq-10",
    question: "네이버 인물정보에도 등록할 수 있나요?",
    answer:
      "출판 이력과 활동 자료를 바탕으로 등록을 준비하는 방향을 안내합니다. 실제 등록 여부는 신청 당시 기준과 제출 자료에 대한 검토에 따라 결정됩니다.",
  },
  {
    id: "faq-11",
    question: "제공받은 자료로 다음 책도 만들 수 있나요?",
    answer:
      "기획 스킬과 템플릿, 도구의 제공 범위 안에서 다음 작품 제작에도 활용할 수 있습니다. 자료의 재배포·재판매와 도구 이용 조건은 제공 안내에 따릅니다.",
  },
  {
    id: "faq-12",
    question: "AI 도구나 출판에 추가 비용이 드나요?",
    answer:
      "선택한 AI 도구의 요금제와 이용량, 인쇄·배송 등 선택 항목에 따라 비용이 발생할 수 있습니다. 실습에 필요한 도구와 비용 범위는 수업 전에 안내합니다.",
  },
  {
    id: "faq-13",
    question: "취소·환불 기준은 어떻게 되나요?",
    answer: "자명스쿨 공통 취소·환불 규정에 따릅니다.",
    hasTermsLink: true,
  },
];

// [17. 최종 신청 영역 요약]
export const FINAL_CTA_RESULTS = [
  "나의 메시지가 담긴 그림책 기획안",
  "기준 캐릭터와 장면별 이미지",
  "Canva 내지·표지 편집 파일",
  "전자책·종이책 출판 등록 준비 자료",
];

