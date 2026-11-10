export type OnedayStatus = "open" | "scheduled" | "closed";

export interface OnedayClassItem {
  id: string;
  category: string; // 영문 카테고리 (예: DIGITAL START)
  title: string;
  subtitle?: string; // 부제 (예: "단 하루 만에 완성하는 내 첫 종이책")
  description: string;
  tags: string[];
  status: OnedayStatus;
  date?: string; // 예: "4월 20일 (토) 14:00"
  duration?: string; // 예: "3시간"
  price?: string; // 예: "50,000원"
  applicationUrl?: string | null; // 신청 링크 (구글폼, 네이버예약, 결제페이지 등)
  detailUrl?: string | null; // 상세페이지 링크 (예: "/aidrama")
  icon?: string;
}

export const ONEDAY_CLASSES: OnedayClassItem[] = [
  {
    id: "blog-notion-starter",
    category: "BLOG WEBSITE",
    title: "나만의 블로그 홈페이지 제작",
    description: "내 소개와 이야기, 콘텐츠를 한곳에 담는 나만의 블로그형 홈페이지를 만듭니다. AI와 함께 디자인과 메뉴를 구성하고, 글을 쌓으며 나의 브랜드를 알릴 온라인 공간을 완성합니다.",
    tags: ["블로그홈페이지", "퍼스널브랜딩", "AI홈페이지", "콘텐츠제작"],
    status: "scheduled",
    applicationUrl: null,
    detailUrl: "/blog-website",
  },
  {
    id: "ai-brand-page",
    category: "AI BRAND PAGE",
    title: "AI로 브랜드 소개 페이지 제작",
    description: "강사, 작가, 상담가, 프리랜서, 1인사업자를 위한 나만의 브랜드 소개 페이지. AI와 대화하며 소개, 경력, 서비스, SNS 링크를 한 페이지에 담아 직접 완성합니다.",
    tags: ["브랜드페이지", "바이브코딩", "AI웹제작", "1인브랜드"],
    status: "scheduled",
    applicationUrl: null,
    detailUrl: "/brand-page",
  },
  {
    id: "ai-picture-book",
    category: "AI PUBLISHING",
    title: "AI 그림책 출판",
    description: "AI를 활용해 이야기 기획부터 이미지 제작, 편집과 출판 과정까지 경험하며 나만의 그림책 결과물을 만들어봅니다.",
    tags: ["AI그림책", "출판", "AI이미지", "전자책"],
    status: "scheduled",
    applicationUrl: null,
    detailUrl: "/picturebook",
  },
  {
    id: "chatgpt-codex-automation",
    category: "AI AUTOMATION",
    title: "ChatGPT & Codex 업무자동화",
    description: "ChatGPT와 Codex를 활용해 반복 업무를 줄이고 실제 업무에 활용할 수 있는 나만의 AI 업무 시스템을 만들어봅니다.",
    tags: ["ChatGPT", "Codex", "업무자동화", "AI활용"],
    status: "scheduled",
    applicationUrl: null,
  },
  {
    id: "ai-paper-book",
    category: "AI PUBLISHING",
    title: "AI 감성 종이책 출판",
    subtitle: "단 하루 만에 완성하는 내 첫 종이책",
    description: "에세이, 필사책, 시화집, 컬러링북 등 부담 없이 시작할 수 있는 콘텐츠를 활용해 기획부터 편집, 표지, POD 출판까지 내 이름의 첫 종이책을 만들어봅니다.",
    tags: ["종이책출판", "POD출판", "1인출판", "작가브랜딩"],
    status: "scheduled",
    applicationUrl: null,
    detailUrl: "/paperbook",
  },
  {
    id: "app-in-toss-miniapp",
    category: "MINI APP",
    title: "앱인토스 미니앱 제작",
    description: "아이디어를 실제 서비스 형태로 구현하며 간단한 테스트형·콘텐츠형 미니앱을 직접 기획하고 제작해봅니다.",
    tags: ["미니앱", "앱인토스", "서비스제작", "AI개발"],
    status: "scheduled",
    applicationUrl: null,
    detailUrl: "/miniapp",
  },
  {
    id: "ai-saju-tarot-service",
    category: "AI SAJU SERVICE",
    title: "AI 사주 서비스 제작",
    description: "만세력 오픈소스를 활용해 생년월일과 태어난 시간을 입력하면 사주 정보와 풀이 결과를 확인할 수 있는 나만의 사주사이트를 만듭니다. 입력 화면부터 결과 페이지까지 AI와 함께 제작합니다.",
    tags: ["AI사주", "만세력", "사주사이트", "서비스제작"],
    status: "scheduled",
    applicationUrl: null,
    detailUrl: "/saju",
  },
  {
    id: "ai-tarot-card-design",
    category: "AI TAROT CREATIVE",
    title: "AI 타로서비스 · 타로카드 제작",
    description: "나만의 타로카드를 만들고, 직접 사용하는 타로서비스로 연결합니다. AI로 카드의 콘셉트와 이미지를 제작한 뒤, 카드를 선택하고 해석을 확인하는 나만의 타로사이트를 완성해봅니다.",
    tags: ["AI타로", "타로사이트", "타로카드", "오라클카드"],
    status: "scheduled",
    applicationUrl: null,
    detailUrl: "/tarot",
  },
  {
    id: "ai-brand-short-drama",
    category: "AI VIDEO",
    title: "AI 브랜드 숏드라마 제작",
    description: "AI를 활용해 짧은 이야기를 기획하고 이미지·영상·음성을 조합해 1~2분 분량의 브랜드 숏드라마 한 편을 직접 제작합니다.",
    tags: ["AI영상", "숏드라마", "브랜드콘텐츠", "스토리텔링"],
    status: "scheduled",
    applicationUrl: null,
    detailUrl: "/aidrama",
  },
];
