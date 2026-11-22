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
    subtitle: "바이브코딩 첫걸음 · 입문 추천",
    description: "나의 경험과 강점을 발견하고, AI와 대화하며 나만의 브랜드 소개 페이지를 완성합니다. 바이브코딩의 기본 흐름을 배우는 첫 실습 과정으로 추천합니다.",
    tags: ["바이브코딩입문", "브랜드페이지", "AI웹제작", "1인브랜드"],
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
    id: "ai-emotional-motion",
    category: "AI EMOTIONAL MOTION",
    title: "마음을 움직이는 모션그래픽",
    subtitle: "바이브코딩으로 만드는 감성·위로·동기부여 숏폼",
    description: "Codex와 Remotion을 활용해 감성 힐링 영상과 성장·동기부여 모션그래픽을 제작합니다. 나만의 메시지를 움직이는 콘텐츠로 표현하는 실전 클래스입니다. (바이브코딩 기초 경험자 권장)",
    tags: ["모션그래픽", "바이브코딩", "감성숏폼", "Remotion"],
    status: "scheduled",
    applicationUrl: null,
    detailUrl: "/motion-graphics",
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
    category: "MINI APP · MINDFUL CREATION",
    title: "마음을 담은 AI 미니앱 만들기",
    subtitle: "앱인토스 활용 원데이 클래스",
    description: "나의 생각과 감성을 작은 디지털 서비스로 표현해 봅니다. 명상·긍정확언·감성일기·힐링 배경화면 등 일상에 따뜻함을 더하는 미니앱을 직접 기획하고 만들어 보는 시간입니다.",
    tags: ["앱인토스", "마음돌봄", "감성앱", "AI창작"],
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
  {
    id: "ai-healing-playlist",
    category: "AI HEALING PLAYLIST",
    title: "AI 명상·힐링 플레이리스트 제작",
    description: "AI로 명상·힐링 음악을 만들고, 감성 이미지와 영상을 결합해 나만의 플레이리스트를 완성합니다. 마음을 표현하는 창작부터 유튜브 콘텐츠 활용까지 경험하는 실전 클래스입니다.",
    tags: ["AI음악", "명상", "힐링", "플레이리스트", "유튜브"],
    status: "scheduled",
    applicationUrl: null,
    detailUrl: "/healing-playlist",
  },
  {
    id: "ai-sales-page-design",
    category: "AI SALES PAGE DESIGN",
    title: "AI 브랜드 상품 상세페이지 제작",
    description: "나의 상품과 서비스가 가진 가치를 발견하고, AI를 활용해 구매 설득력을 높이는 상세페이지를 제작합니다. 기획부터 카피라이팅, 이미지 구성과 디자인까지 실습합니다.",
    tags: ["AI상세페이지", "상품브랜딩", "카피라이팅", "디자인"],
    status: "scheduled",
    applicationUrl: null,
    detailUrl: "/sales-page",
  },
  {
    id: "ebook-sns-automation",
    category: "EBOOK & SNS AUTOMATION",
    title: "전자책 판매 퍼널·SNS 자동화 구축",
    description: "전자책을 중심으로 무료 콘텐츠부터 판매까지 이어지는 고객 동선을 설계합니다. AI로 하나의 콘텐츠를 여러 SNS 채널에 맞게 재가공하고, 홍보와 콘텐츠 발행의 자동화 흐름을 구축합니다.",
    tags: ["전자책판매", "마케팅퍼널", "콘텐츠멀티유즈", "SNS자동화"],
    status: "scheduled",
    applicationUrl: null,
    detailUrl: "/ebook-funnel",
  },
];
