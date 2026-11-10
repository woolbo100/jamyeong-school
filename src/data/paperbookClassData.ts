import type { OnedayStatus } from "./onedayClasses";

// ─────────────────────────────────────────────────────────────
// 1. 강의 핵심 설정 및 운영 메타데이터
// ─────────────────────────────────────────────────────────────
export interface PaperbookClassConfig {
  id: string;
  routePath: string;
  categoryLabel: string;
  subBadge: string;
  seriesBadge: string;
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
  applicationUrl: string | null;
  notificationUrl: string;
  ctaOpenText: string;
  ctaScheduledText: string;
  termsUrl: string;
  onedayListUrl: string;
}

export const PAPERBOOK_CLASS_CONFIG: PaperbookClassConfig = {
  id: "ai-paper-book",
  routePath: "/paperbook",
  categoryLabel: "PUBLISHER DIRECT · ONE DAY CLASS",
  subBadge: "출판사 대표 직강",
  seriesBadge: "AI PAPER BOOK · ONE DAY CLASS · 자명스쿨 원데이 실전 마스터",
  courseTitle: "AI 감성 종이책 출판",
  courseSubtitle: "단 하루 만에 완성하는 내 첫 종이책",
  heroMainTitleLine1: "AI 감성 종이책 출판",
  heroMainTitleLine2: "단 하루 만에 완성하는 내 첫 종이책",
  heroHighlightTitle: "단 하루 3~4시간, 내 손에 쥐어지는 첫 종이책 만들기",
  heroDescription:
    "책을 내고 싶지만 긴 원고를 쓰는 것부터 막막했다면, 에세이, 필사책, 디카시, 시화집, 컬러링 에세이처럼 부담 없이 시작할 수 있는 작은 책부터 시작해보세요. AI를 활용해 콘텐츠를 정리하고, Canva로 내지와 표지를 편집한 뒤 POD 방식으로 실제 종이책 출판까지 이어가는 첫 출판 실습 클래스입니다.",
  heroHookText: "✨ 책을 쓰는 법만 배우는 수업이 아닙니다. 내 이름이 들어간 실제 종이책을 만드는 수업입니다.",
  heroBadges: [
    "출판사 대표 직강",
    "POD 종이책 출판",
    "표지·내지 편집",
    "등록 반려 체크",
    "1인출판사 창업 정보",
  ],
  tags: ["종이책출판", "POD출판", "1인출판", "작가브랜딩"],
  status: "scheduled",
  format: "Zoom 실시간 온라인 실습",
  duration: "3~4시간 집중 원데이",
  price: "개강 안내 시 공개",
  schedule: "개강 일정 준비 중",
  difficulty: "초보자 참여 가능",
  prePublishSupport: "출판 등록 전 셀프 체크리스트 및 반려 방지 가이드 제공",
  applicationUrl: null,
  notificationUrl: "https://pf.kakao.com/_IxguMn",
  ctaOpenText: "수강 신청하기",
  ctaScheduledText: "개강 알림 신청하기",
  termsUrl: "/terms",
  onedayListUrl: "/oneday",
};

// ─────────────────────────────────────────────────────────────
// 2. 출판사 대표 직강 신뢰 영역 (절제된 톤)
// ─────────────────────────────────────────────────────────────
export const PUBLISHER_DIRECT_SECTION = {
  label: "PUBLISHER DIRECT CLASS",
  title: "책을 만들어본 사람이 아니라,\n출판을 실제로 해본 사람이 알려드립니다.",
  description:
    "이 수업은 단순한 AI 글쓰기 수업이 아닙니다. 실제 출판 경험을 바탕으로 기획부터 편집, POD 등록과 출판 과정에서 처음 시작하는 분들이 자주 막히는 지점을 실전 중심으로 안내합니다.",
  points: [
    {
      title: "실전 출판 프로세스",
      desc: "이론에 그치지 않고 실제 출판 플랫폼에 등록 가능한 표준 규격과 단계를 배웁니다.",
    },
    {
      title: "반려 원인 사전 차단",
      desc: "표지 책등 오차, 내지 여백, 폰트 저작권 등 초보자가 겪는 시행착오를 미리 방지합니다.",
    },
    {
      title: "개인 브랜딩과 확장",
      desc: "단순 취미 제작을 넘어 1인출판사와 작가 프로필로 이어지는 로드맵을 공유합니다.",
    },
  ],
};

// ─────────────────────────────────────────────────────────────
// 3. 첫 후킹 섹션 (YOUR FIRST PAPER BOOK)
// ─────────────────────────────────────────────────────────────
export const FIRST_HOOK_SECTION = {
  english: "YOUR FIRST PAPER BOOK",
  title: "“언젠가 책 한 권 내보고 싶다”는 생각,\n이번에는 실제 책으로 만들어보세요.",
  descriptionParagraphs: [
    "처음부터 200페이지짜리 자기계발서를 쓸 필요는 없습니다.",
    "짧은 에세이, 좋아하는 문장을 담은 필사책, 사진과 글을 엮은 디카시집, 그림과 문장을 담은 시화집, 컬러링과 기록을 결합한 감성책처럼 작은 콘텐츠도 충분히 한 권의 종이책이 될 수 있습니다.",
  ],
  highlightQuote:
    "첫 책은 거창할 필요가 없습니다. 중요한 것은 '내 이름으로 책 한 권을 실제로 출간해본 경험'입니다.",
};

// ─────────────────────────────────────────────────────────────
// 4. WHY PAPER BOOK? (01~04)
// ─────────────────────────────────────────────────────────────
export interface WhyPaperBookItem {
  number: string;
  title: string;
  description: string;
  tag: string;
}

export const WHY_PAPER_BOOK_ITEMS: WhyPaperBookItem[] = [
  {
    number: "01",
    title: "콘텐츠가 '이력'이 됩니다",
    description: "SNS 글은 흘러가지만 책은 나의 생각과 경험을 하나의 결과물로 남깁니다.",
    tag: "#영구적인콘텐츠",
  },
  {
    number: "02",
    title: "개인 브랜드의 신뢰를 높입니다",
    description: "강사, 작가, 상담가, 코치, 1인사업자에게 종이책은 나를 설명하는 강력한 콘텐츠가 됩니다.",
    tag: "#작가브랜딩",
  },
  {
    number: "03",
    title: "재고 부담 없이 시작할 수 있습니다",
    description: "POD 방식은 주문이 들어왔을 때 책을 제작하는 방식이라 처음부터 많은 책을 인쇄해 둘 필요가 없습니다.",
    tag: "#재고부담ZERO",
  },
  {
    number: "04",
    title: "한 번 익히면 다음 책도 만들 수 있습니다",
    description: "기획, 편집, 표지, 출판 등록 흐름을 한 번 익혀두면 다음 책부터 훨씬 쉽게 시작할 수 있습니다.",
    tag: "#출판스킬내재화",
  },
];

// ─────────────────────────────────────────────────────────────
// 5. '0원 출판' 후킹 영역
// ─────────────────────────────────────────────────────────────
export const ZERO_COST_SECTION = {
  title: "종이책 출판, 꼭 큰돈이 필요한 것은 아닙니다.",
  highlightBadge: "0원으로 종이책 출판하기",
  description:
    "대량 인쇄와 재고를 먼저 준비하는 방식이 아니라 POD 플랫폼을 활용하면 초기 인쇄비와 재고 부담 없이 종이책 출판을 시작할 수 있습니다. 수업에서는 실제 POD 플랫폼의 등록 구조와 출판 준비 과정을 함께 살펴봅니다.",
  caution:
    "※ 플랫폼 정책, ISBN 발급 방식, 선택 서비스 및 부가 작업에 따라 별도 비용이 발생할 수 있습니다.",
};

// ─────────────────────────────────────────────────────────────
// 6. 어떤 책을 만들 수 있나요? (YOUR BOOK STYLE 6개 카드)
// ─────────────────────────────────────────────────────────────
export interface BookStyleItem {
  number: string;
  title: string;
  description: string;
  icon: string;
  exampleTag: string;
}

export const BOOK_STYLE_ITEMS: BookStyleItem[] = [
  {
    number: "01",
    title: "짧은 에세이북",
    description: "나의 경험, 생각, 일상의 기록을 짧은 글로 엮은 책",
    icon: "✍️",
    exampleTag: "#일상에세이 #사색기록",
  },
  {
    number: "02",
    title: "필사책",
    description: "좋아하는 문장과 나만의 질문·기록 공간을 함께 구성한 책",
    icon: "✒️",
    exampleTag: "#명언필사 #질문노트",
  },
  {
    number: "03",
    title: "디카시집",
    description: "직접 찍은 사진과 짧은 시, 문장을 엮은 감성 종이책",
    icon: "📸",
    exampleTag: "#포토에세이 #디카시",
  },
  {
    number: "04",
    title: "시화집",
    description: "시와 그림, AI 이미지 등을 함께 구성한 감성 작품집",
    icon: "🎨",
    exampleTag: "#시와그림 #감성작품집",
  },
  {
    number: "05",
    title: "컬러링 에세이북",
    description: "짧은 글과 컬러링 이미지를 결합해 읽고 기록하고 색칠하는 책",
    icon: "🖍️",
    exampleTag: "#컬러링북 #힐링아트",
  },
  {
    number: "06",
    title: "감성 워크북",
    description: "질문, 체크리스트, 기록 페이지 등을 활용한 실용형 자기계발·마인드 워크북",
    icon: "📓",
    exampleTag: "#자기성찰 #마인드워크북",
  },
];

export const BOOK_STYLE_FOOTER =
  "어떤 형식이든 '내 콘텐츠를 책의 형태로 완성하는 것'이 수업의 핵심입니다.";

// ─────────────────────────────────────────────────────────────
// 7. 출판 반려 방지 영역 (PUBLISHING CHECK)
// ─────────────────────────────────────────────────────────────
export const PUBLISHING_CHECK_SECTION = {
  english: "PUBLISHING CHECK",
  title: "책을 다 만들고도 등록 단계에서 막히지 않도록",
  description:
    "첫 출판에서 가장 당황하는 순간은 파일을 다 만든 뒤 등록 과정에서 수정 요청이나 반려를 받는 경우입니다. 수업에서는 출판 등록 전에 확인해야 할 항목을 미리 점검합니다.",
  checklist: [
    { title: "판형과 페이지 규격", desc: "A5, B6 등 선택한 판형에 정확한 내지 여백 설정" },
    { title: "표지 사이즈와 책등", desc: "페이지 수에 따른 책등(두께) 계산 공식 적용" },
    { title: "안전 여백과 재단 영역", desc: "인쇄 재단 시 잘려나가지 않는 안전선 확보" },
    { title: "내지 PDF 설정", desc: "단면/양면 순서 및 고품질 인쇄용 PDF 내보내기" },
    { title: "이미지 해상도", desc: "흐릿하지 않은 300DPI 이상 인쇄 해상도 유지" },
    { title: "폰트·저작권 확인", desc: "출판·상업적 이용 가능한 라이선스 폰트 점검" },
    { title: "서지정보 입력", desc: "ISBN, 판권지, 정가, 카테고리 기재 요령" },
    { title: "책 소개·저자 소개 작성", desc: "온라인 서점에 노출될 매력적인 소개글 구성" },
    { title: "표지와 본문 파일 구성", desc: "플랫폼별 업로드 요구 파일 형식 완벽 매칭" },
    { title: "자주 발생하는 반려 사유", desc: "선배 저자들의 단골 반려 사례와 해결책 확인" },
  ],
  highlight: "완성보다 중요한 것은 '등록 가능한 파일'을 만드는 것입니다.",
};

// ─────────────────────────────────────────────────────────────
// 8. ONE DAY RESULT (하루 3~4시간 5가지 결과)
// ─────────────────────────────────────────────────────────────
export interface OneDayResultItem {
  code: string;
  stepName: string;
  title: string;
  description: string;
  tags: string[];
}

export const ONE_DAY_RESULTS: OneDayResultItem[] = [
  {
    code: "01",
    stepName: "PLAN",
    title: "어떤 책을 만들지 결정",
    description: "주제, 독자, 책 유형, 제목과 목차를 정리합니다.",
    tags: ["#책기획", "#첫출판"],
  },
  {
    code: "02",
    stepName: "CONTENT",
    title: "AI와 함께 콘텐츠 구성",
    description: "기존 글과 자료를 정리하거나 AI를 활용해 문장과 구성을 다듬습니다.",
    tags: ["#AI글쓰기", "#콘텐츠정리"],
  },
  {
    code: "03",
    stepName: "DESIGN",
    title: "Canva로 내지 편집",
    description: "책의 판형을 정하고 본문, 이미지, 페이지 번호, 여백 등을 배치합니다.",
    tags: ["#Canva", "#내지편집"],
  },
  {
    code: "04",
    stepName: "COVER",
    title: "종이책 표지 제작",
    description: "앞표지·책등·뒤표지 구조를 이해하고 출판용 표지를 만듭니다.",
    tags: ["#책표지", "#POD"],
  },
  {
    code: "05",
    stepName: "PUBLISH",
    title: "POD 출판 등록 준비",
    description: "등록 정보와 출판 파일을 준비하고 실제 출판 플랫폼 등록 과정을 살펴봅니다.",
    tags: ["#POD출판", "#출판등록"],
  },
];

// ─────────────────────────────────────────────────────────────
// 9. TRANSFORMATION (BEFORE / AFTER 5개)
// ─────────────────────────────────────────────────────────────
export interface TransformationItem {
  step: string;
  before: string;
  after: string;
}

export const TRANSFORMATION_ITEMS: TransformationItem[] = [
  {
    step: "01. 기획과 구조",
    before: "글은 있지만 어떻게 묶을지 모름",
    after: "책의 제목·목차·구조 완성",
  },
  {
    step: "02. 디자인과 편집",
    before: "책 편집은 전문가만 할 수 있다고 생각",
    after: "Canva로 직접 내지와 표지를 편집",
  },
  {
    step: "03. 출판 비용",
    before: "출판에는 많은 돈이 필요하다고 생각",
    after: "POD 방식으로 재고 부담 없이 시작",
  },
  {
    step: "04. 등록과 절차",
    before: "등록 절차가 복잡해 보여 미룸",
    after: "등록 과정과 체크리스트 확보",
  },
  {
    step: "05. 브랜드 결과물",
    before: "내 콘텐츠가 SNS에 흩어져 있음",
    after: "나의 이름이 들어간 한 권의 결과물",
  },
];

// ─────────────────────────────────────────────────────────────
// 10. HOW IT WORKS (아이디어에서 등록 준비까지 8단계)
// ─────────────────────────────────────────────────────────────
export interface CurriculumStepItem {
  step: string;
  title: string;
  description: string;
  output: string;
}

export const CURRICULUM_STEPS: CurriculumStepItem[] = [
  {
    step: "STEP 01",
    title: "책의 목적과 독자 정하기",
    description: "내가 만들 책의 방향성과 독자 타깃을 정의합니다.",
    output: "책의 주제·타깃",
  },
  {
    step: "STEP 02",
    title: "책 형태 선택하기",
    description: "에세이 / 필사 / 디카시 / 시화집 / 컬러링 / 워크북 중 알맞은 형태를 선택합니다.",
    output: "출판 형태",
  },
  {
    step: "STEP 03",
    title: "제목과 목차 만들기",
    description: "AI를 활용해 매력적인 책 제목과 책의 전체 챕터 순서를 정리합니다.",
    output: "제목·목차",
  },
  {
    step: "STEP 04",
    title: "본문 콘텐츠 구성",
    description: "기존 글을 정리하거나 AI와 함께 초안을 작성하고 감성적으로 다듬습니다.",
    output: "본문 초안",
  },
  {
    step: "STEP 05",
    title: "Canva 내지 편집",
    description: "인쇄 표준 판형, 안전 여백, 글자 크기, 페이지 번호 구성을 실습합니다.",
    output: "내지 파일",
  },
  {
    step: "STEP 06",
    title: "앞표지·책등·뒤표지 제작",
    description: "페이지 수와 판형 규격에 맞춰 종이책 표지 전개도 구조를 제작합니다.",
    output: "출판용 표지",
  },
  {
    step: "STEP 07",
    title: "POD 출판 등록 준비",
    description: "ISBN, 책 소개글, 저자 프로필, 파일 업로드 기준을 꼼꼼히 확인합니다.",
    output: "출판 등록 자료",
  },
  {
    step: "STEP 08",
    title: "반려 체크 & 출간 준비",
    description: "자주 발생하는 수정 요청 사유를 점검하고 최종 제출 전 점검을 완료합니다.",
    output: "출판 체크리스트",
  },
];

// ─────────────────────────────────────────────────────────────
// 11. TIME SCHEDULE (총 3~4시간 실습)
// ─────────────────────────────────────────────────────────────
export interface TimeScheduleItem {
  time: string;
  title: string;
  detail: string;
  isBreak?: boolean;
}

export const TIME_SCHEDULE_ITEMS: TimeScheduleItem[] = [
  { time: "20분", title: "책 주제·형태 정하기", detail: "나의 이야기 발견 & 6가지 종이책 형태 중 선택" },
  { time: "30분", title: "제목·목차·콘텐츠 구성", detail: "AI 기획 스킬로 목차 구조화 & 본문 구성안 확정" },
  { time: "20분", title: "POD 출판 구조 이해", detail: "재고 없는 주문 제작 인쇄 방식과 플랫폼 프로세스 이해" },
  { time: "45분", title: "내지 제작 실습", detail: "Canva 템플릿 기반 판형 맞춤 본문·간지·여백 편집" },
  { time: "10분", title: "휴식 & 개별 진행 점검", detail: "숨 고르기 및 편집 상태 중간 확인", isBreak: true },
  { time: "35분", title: "표지 제작 실습", detail: "앞표지·책등 두께·뒤표지 일체형 표지 전개도 완성" },
  { time: "30분", title: "출판 등록 과정", detail: "서지정보, 책 소개, 카테고리 설정 및 업로드 절차 학습" },
  { time: "20분", title: "반려 방지 체크", detail: "인쇄 규격, 해상도, 저작권, 서지정보 필수 10대 항목 점검" },
  { time: "20분", title: "1인출판사·작가 브랜딩 안내", detail: "출판 브랜드 설립 기본 구조 및 향후 시리즈 확장 전략" },
];

export const TIME_SCHEDULE_NOTICE =
  "수업자의 실습 속도와 선택한 책의 분량에 따라 수업 후 추가 편집이 필요할 수 있습니다.";

// ─────────────────────────────────────────────────────────────
// 12. CLASS KIT (수강생 실전 자료 7종)
// ─────────────────────────────────────────────────────────────
export interface ClassKitItem {
  code: string;
  title: string;
  description: string;
}

export const CLASS_KITS: ClassKitItem[] = [
  {
    code: "KIT 01",
    title: "감성 종이책 기획 스킬",
    description: "책 유형, 제목, 독자, 목차와 콘텐츠 아이디어를 체계적으로 정리하는 AI 프롬프트 스킬",
  },
  {
    code: "KIT 02",
    title: "종이책 내지 Canva 템플릿",
    description: "에세이·필사·시화집 등에서 바로 활용할 수 있는 규격화된 본문 내지 디자인 템플릿",
  },
  {
    code: "KIT 03",
    title: "POD 표지 제작 가이드",
    description: "앞표지·책등(스파인)·뒤표지 구조와 페이지 수에 따른 규격 자동 계산 방법",
  },
  {
    code: "KIT 04",
    title: "출판 등록 체크리스트",
    description: "등록 단계에서 놓치기 쉬운 파일 포맷, 서지정보, 소개글 필수 점검표",
  },
  {
    code: "KIT 05",
    title: "출판 반려 방지 가이드",
    description: "초보 저자가 가장 많이 겪는 반려·수정 사유 10가지와 사전 예방 솔루션",
  },
  {
    code: "KIT 06",
    title: "1인출판사 창업 안내서",
    description: "지자체 출판사 신고, 사업자등록, ISBN 발급 구조와 출판 브랜드 운영 전체 흐름 자료",
  },
  {
    code: "KIT 07",
    title: "출판 등록 전 점검 자료",
    description: "첫 책을 플랫폼에 최종 제출하기 전 스스로 자가 진단할 수 있는 파이널 체크리스트",
  },
];

// ─────────────────────────────────────────────────────────────
// 13. 1인출판사 영역 (BEYOND THE FIRST BOOK)
// ─────────────────────────────────────────────────────────────
export const SELF_PUBLISHING_SECTION = {
  english: "BEYOND THE FIRST BOOK",
  title: "한 권에서 끝내지 않고,\n나만의 출판 브랜드로 확장하고 싶다면",
  paragraphs: [
    "첫 책을 경험한 뒤 계속 책을 만들고 싶다면 1인출판사를 운영하는 방법도 있습니다.",
    "수업에서는 출판사를 반드시 만들어야 한다고 권하지 않습니다. 다만 향후 자신만의 출판 브랜드를 운영하고 싶은 분을 위해 1인출판사의 기본 구조와 준비 과정을 안내합니다.",
  ],
  topics: [
    "1인출판사란 무엇인가",
    "출판사 신고의 기본 흐름",
    "출판사 이름 정하기",
    "ISBN과 출판사의 관계",
    "직접 출판과 POD 플랫폼 활용의 차이",
    "향후 여러 권의 책으로 확장하는 방법",
  ],
  disclaimer: "※ 실제 신고·등록 절차와 제도는 수업 시점의 최신 기준을 확인하여 안내합니다.",
};

// ─────────────────────────────────────────────────────────────
// 14. AUTHOR BRANDING (종이책과 퍼스널 브랜딩)
// ─────────────────────────────────────────────────────────────
export const AUTHOR_BRANDING_SECTION = {
  title: "종이책 한 권은\n나를 소개하는 가장 오래 남는 콘텐츠가 됩니다.",
  description:
    "강사, 상담가, 작가, 1인사업자, 크리에이터에게 책은 단순한 판매상품을 넘어 자신의 경험과 전문성을 보여주는 브랜드 자산이 될 수 있습니다.",
  usages: [
    "강의 프로필",
    "작가 소개",
    "SNS 콘텐츠",
    "유튜브 소개",
    "상담·코칭 브랜드",
    "인터뷰·언론 활동",
    "전문가 프로필",
    "개인 브랜드 사이트",
  ],
  quote:
    "내 브랜드를 설명할 때 “저는 이런 사람입니다”라고 말하는 것보다 내 이름이 적힌 책 한 권이 더 많은 것을 보여줄 때가 있습니다.",
};

// ─────────────────────────────────────────────────────────────
// 15. 이런 분이라면 함께하세요 (RECOMMENDED FOR 10개)
// ─────────────────────────────────────────────────────────────
export const RECOMMENDED_FOR_LIST: string[] = [
  "내 이름으로 종이책을 한 번 출간해보고 싶은 분",
  "긴 글보다 짧은 에세이·필사·시화집부터 시작하고 싶은 분",
  "강사·코치·상담가로 자신의 콘텐츠를 책으로 만들고 싶은 분",
  "SNS에 쌓아둔 글을 한 권으로 정리하고 싶은 분",
  "AI를 활용해 글과 출판 작업을 쉽게 시작하고 싶은 분",
  "책 편집과 표지 디자인이 어려웠던 분",
  "POD 출판 등록 과정이 막막했던 분",
  "출판 반려나 수정 요청을 줄이고 싶은 분",
  "개인 브랜딩을 위한 작가 이력을 만들고 싶은 분",
  "향후 1인출판사 운영에도 관심이 있는 분",
];

// ─────────────────────────────────────────────────────────────
// 16. FAQ (자주 묻는 질문 7종)
// ─────────────────────────────────────────────────────────────
export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  hasTermsLink?: boolean;
}

export const PAPERBOOK_FAQS: FaqItem[] = [
  {
    id: "faq-1",
    question: "글을 잘 쓰지 못해도 가능한가요?",
    answer:
      "가능합니다. 긴 원고를 완성하는 수업이 아니라, 짧은 콘텐츠를 책의 형태로 구성하는 방법부터 시작하며 AI를 활용해 문장을 정리하고 다듬는 방법도 함께 배웁니다.",
  },
  {
    id: "faq-2",
    question: "정말 하루 만에 책 한 권이 완성되나요?",
    answer:
      "수업에서는 짧은 책을 기준으로 책의 기획, 콘텐츠 구성, 내지, 표지, 출판 등록 준비까지 전체 과정을 경험합니다. 책의 분량과 실습 속도에 따라 수업 이후 추가 편집이 필요할 수 있습니다.",
  },
  {
    id: "faq-3",
    question: "종이책을 만드는 데 많은 돈이 필요한가요?",
    answer:
      "POD 방식을 활용하면 대량 인쇄와 재고를 먼저 준비하지 않고 출판을 시작할 수 있습니다. 선택하는 플랫폼이나 부가 서비스에 따라 비용이 발생할 수 있습니다.",
  },
  {
    id: "faq-4",
    question: "출판사가 없어도 책을 낼 수 있나요?",
    answer:
      "POD 플랫폼 등을 활용하면 개인이 출판을 시작할 수 있는 방법이 있습니다. 수업에서 선택 가능한 방법과 차이를 안내합니다.",
  },
  {
    id: "faq-5",
    question: "1인출판사 창업도 배우나요?",
    answer:
      "첫 책 출간에 반드시 필요한 과정은 아니지만, 계속 출판 활동을 하고 싶은 분을 위해 1인출판사 운영의 기본 구조와 준비 방법을 별도 자료로 제공합니다.",
  },
  {
    id: "faq-6",
    question: "어떤 책을 만들 수 있나요?",
    answer:
      "짧은 에세이, 필사책, 디카시집, 시화집, 컬러링 에세이, 감성 워크북 등 원데이에서 부담 없이 시작할 수 있는 형태를 추천합니다.",
  },
  {
    id: "faq-7",
    question: "Canva 초보도 가능한가요?",
    answer:
      "기본적인 텍스트와 이미지 편집부터 출판용 내지와 표지를 만드는 흐름을 순서대로 실습하므로 컴퓨터 기초 조작이 가능하시다면 충분히 따라오실 수 있습니다.",
  },
];

// ─────────────────────────────────────────────────────────────
// 17. 최종 CTA 영역
// ─────────────────────────────────────────────────────────────
export const FINAL_CTA_SECTION = {
  headerBadge: "AI PAPER BOOK · ONE DAY CLASS",
  mainTitle: "언젠가 내고 싶었던 책,\n이번에는 진짜 한 권으로 만들어보세요.",
  subText:
    "에세이도, 필사책도, 시화집도, 컬러링북도 좋습니다.\n거창한 첫 책보다 끝까지 완성해본 첫 책이 다음 시작을 만들어줍니다.",
  highlightText: "출판사 대표와 함께 기획부터 편집, 표지, POD 출판 등록까지.",
  ctaButtonText: "개강 알림 신청하기",
  footerMeta: "단 하루 3~4시간 · Zoom 실시간 실습 · 초보자 참여 가능",
  results: [
    "나만의 종이책 기획안 & 목차 구조 완성",
    "AI 문장 다듬기 및 본문 원고 초안 구성",
    "Canva로 직접 편집한 판형 규격 맞춤 내지 PDF",
    "앞표지·책등·뒤표지 규격 출판용 종이책 표지 파일",
  ],
};

// ─────────────────────────────────────────────────────────────
// 18. 준비물 & 사전 안내
// ─────────────────────────────────────────────────────────────
export const PREPARATION_ITEMS = [
  "데스크톱 PC 또는 노트북 (Chrome 브라우저 권장)",
  "Zoom 화상 회의 참여 환경 (마이크/이어폰)",
  "Canva 무료 또는 프로 계정",
  "담고 싶은 짧은 글, 메모, 사진, 아이디어 (없어도 수업 중 AI로 기획 가능)",
];

export const PRE_CLASS_NOTICES = [
  "실시간 Zoom 링크와 사전 실습 안내문은 개강 전 등록된 연락처로 발송됩니다.",
  "본 수업은 실습 중심이며, 개인별 실습 속도와 분량에 따라 수업 후 추가 작업이 있을 수 있습니다.",
  "출판 플랫폼 등록 및 최종 심사는 각 플랫폼 운영 정책에 따릅니다.",
];

