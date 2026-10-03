export type OnedayStatus = "open" | "scheduled" | "closed";

export interface OnedayClassItem {
  id: string;
  category: string; // 영문 카테고리 (예: DIGITAL START)
  title: string;
  description: string;
  tags: string[];
  status: OnedayStatus;
  date?: string; // 예: "4월 20일 (토) 14:00"
  duration?: string; // 예: "3시간"
  price?: string; // 예: "50,000원"
  applicationUrl?: string | null; // 신청 링크 (구글폼, 네이버예약, 결제페이지 등)
  icon?: string;
}

export const ONEDAY_CLASSES: OnedayClassItem[] = [
  {
    id: "blog-notion-starter",
    category: "DIGITAL START",
    title: "블로그 홈페이지 & 노션 기초",
    description: "블로그형 홈페이지와 노션의 기본 구조를 이해하고 나만의 정보와 콘텐츠를 정리할 수 있는 디지털 공간을 직접 만들어봅니다.",
    tags: ["홈페이지", "노션", "블로그", "디지털기초"],
    status: "scheduled",
    applicationUrl: null,
  },
  {
    id: "vibe-coding-starter",
    category: "VIBE CODING",
    title: "바이브코딩 기초",
    description: "복잡한 코딩 지식 없이 AI와 대화하며 웹페이지와 간단한 서비스를 직접 만들어보는 바이브코딩 입문 클래스입니다.",
    tags: ["바이브코딩", "AI코딩", "웹제작", "초보가능"],
    status: "scheduled",
    applicationUrl: null,
  },
  {
    id: "ai-picture-book",
    category: "AI PUBLISHING",
    title: "AI 그림책 출판",
    description: "AI를 활용해 이야기 기획부터 이미지 제작, 편집과 출판 과정까지 경험하며 나만의 그림책 결과물을 만들어봅니다.",
    tags: ["AI그림책", "출판", "AI이미지", "전자책"],
    status: "scheduled",
    applicationUrl: null,
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
    id: "google-ai-tools",
    category: "AI TOOL MAKING",
    title: "구글 AI 도구 제작소",
    description: "구글의 다양한 AI 도구를 활용해 업무와 콘텐츠 제작에 사용할 수 있는 나만의 실용적인 AI 도구를 직접 제작합니다.",
    tags: ["GoogleAI", "AI도구", "업무활용", "자동화"],
    status: "scheduled",
    applicationUrl: null,
  },
  {
    id: "app-in-toss-miniapp",
    category: "MINI APP",
    title: "앱인토스 미니앱 제작",
    description: "아이디어를 실제 서비스 형태로 구현하며 간단한 테스트형·콘텐츠형 미니앱을 직접 기획하고 제작해봅니다.",
    tags: ["미니앱", "앱인토스", "서비스제작", "AI개발"],
    status: "scheduled",
    applicationUrl: null,
  },
  {
    id: "ai-saju-tarot-service",
    category: "AI SERVICE",
    title: "AI 사주·타로 서비스 제작",
    description: "사주·타로·심리 콘텐츠와 AI를 결합해 테스트, 결과 페이지, 간단한 상담형 서비스 등 실제로 활용할 수 있는 디지털 서비스를 제작합니다.",
    tags: ["사주", "타로", "AI서비스", "콘텐츠서비스"],
    status: "scheduled",
    applicationUrl: null,
  },
  {
    id: "ai-tarot-card-design",
    category: "AI CREATIVE",
    title: "AI 타로카드 제작",
    description: "카드의 콘셉트와 세계관을 기획하고 AI 이미지 도구를 활용해 나만의 타로·오라클 카드 디자인을 제작합니다.",
    tags: ["타로카드", "오라클카드", "AI이미지", "콘텐츠제작"],
    status: "scheduled",
    applicationUrl: null,
  },
];
