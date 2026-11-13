// 자명스쿨 감성출판지도사 VOD 자격과정 상세페이지 데이터
// 향후 가격, 커리큘럼, 일정, 자격정보 등을 쉽게 수정할 수 있도록 분리 관리합니다.

export interface QualificationSpec {
  name: string;
  level: string;
  registrationNumber: string; // 한국직업능력연구원 등록번호
  issuer: string; // 발급기관 법적 명칭
  type: string; // 민간자격
  examMethod: string; // 검정 방식
  passingCriteria: string; // 합격 기준
  retakePolicy: string; // 재응시 기준
  notice: string; // 법적 고지사항
}

export interface BookTypeItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  mockupTag: string;
}

export interface CurriculumModule {
  moduleNumber: string;
  title: string;
  summary: string;
  lessons: string[];
  result: string;
}

export interface BenefitItem {
  id: string;
  number: string;
  title: string;
  description: string;
  status: "provided" | "scheduled";
}

export interface StudentWorkCase {
  id: string;
  title: string;
  authorNote: string;
  bookType: string;
  resultStatus: string;
  review: string;
  tag: string;
}

export interface CareerExpansionCard {
  id: string;
  number: string;
  title: string;
  description: string;
  iconType: "certificate" | "lecture" | "portfolio" | "expansion";
}

export interface CareerExpansionSectionData {
  badge: string;
  titleMain: string;
  titleSub: string;
  description: string[];
  cards: CareerExpansionCard[];
  highlight: string;
  subHighlight: string;
  disclaimer: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

// ─────────────────────────────────────────────────────────────
// [1. 과정 기본 설정 데이터]
// ─────────────────────────────────────────────────────────────
export const EMOTIONAL_PUBLISHING_CONFIG = {
  id: "emotional-publishing",
  category: "JAMYUNG SCHOOL · VOD CERTIFICATION COURSE",
  titleMain: "내 이야기가 한 권의 책이 되고,",
  titleSub: "배움은 하나의 자격이 됩니다.",
  titleAccent: "AI 감성출판 실전 VOD 자격과정",
  description:
    "그림책부터 에세이, 자서전, 필사책, 시화집, 디카시까지. AI와 캔바를 활용해 나만의 콘텐츠를 한 권의 종이책으로 완성하고, 작품 평가를 통해 감성출판지도사 자격 취득에 도전하는 실전 교육과정입니다.",
  price: {
    amount: "99,000원",
    rawAmount: 99000,
    subNotice: "VOD 교육 · 실습 자료 · 작품 평가 · 합격 시 자격증 발급 포함 (기획안)",
    note: "※ 최종 운영 조건 및 오픈 일정 확정 시 변경될 수 있습니다.",
  },
  badges: [
    "온라인 VOD 자기주도 학습",
    "원하는 책 유형 선택 (8종 중 택1)",
    "종이책 출판 실습",
    "작품 제출 및 평가",
    "합격 시 민간자격증 발급",
  ],
  ctaText: "과정 신청 준비중",
  ctaSubText: "정식 오픈 일정 확정 시 가장 먼저 알림을 보내드립니다.",
  notificationUrl: "https://pf.kakao.com/_IxguMn",
};

// ─────────────────────────────────────────────────────────────
// [2. 공감 및 문제 제기]
// ─────────────────────────────────────────────────────────────
export const EMPATHY_POINTS = [
  {
    number: "01",
    question: "글을 잘 써야만 책을 낼 수 있다고 생각했습니다.",
    solution: "완벽한 문장보다 중요한 것은 진솔한 경험과 나만의 시선입니다.",
  },
  {
    number: "02",
    question: "내 이야기가 책이 될 만큼 특별한지 자신이 없었습니다.",
    solution: "누군가에게는 당신의 일상과 기억이 깊은 공감과 치유가 됩니다.",
  },
  {
    number: "03",
    question: "표지와 내지 편집, 출판 규격이 막막하고 복잡했습니다.",
    solution: "검증된 캔바 템플릿과 POD 출판 가이드로 단계별로 완성합니다.",
  },
  {
    number: "04",
    question: "AI를 배워도 실제 결과물로 연결하기 어려웠습니다.",
    solution: "배움에 그치지 않고 실제 출판 원고와 자격 포트폴리오로 연결합니다.",
  },
];

// ─────────────────────────────────────────────────────────────
// [3. 과정의 3가지 핵심 성취]
// ─────────────────────────────────────────────────────────────
export const CORE_ACHIEVEMENTS = [
  {
    number: "01",
    title: "나만의 책 한 권",
    sub: "선택형 완성 출판 원고",
    description:
      "그림책, 에세이, 자서전 등 내가 선택한 형식으로 인쇄 가능한 내지 PDF와 앞·뒤·책등 표지 파일을 완성합니다.",
    points: ["선택한 형식의 완성 원고 1권", "인쇄용 규격 내지 PDF & 표지 파일"],
  },
  {
    number: "02",
    title: "실제 출판 역량",
    sub: "AI·캔바·POD 실무 완성",
    description:
      "AI 글쓰기 보조와 감성 일러스트 생성, 캔바 편집, POD 출판 플랫폼 등록까지 스스로 해내는 실무 역량을 갖춥니다.",
    points: ["AI 이미지 & 글쓰기 파이프라인", "POD 플랫폼 출판 등록 실무 이해"],
  },
  {
    number: "03",
    title: "자격 취득 기회",
    sub: "감성출판지도사 1급",
    description:
      "실전 출판 역량을 익히고, 정해진 자격 검정에 합격하면 감성출판지도사 민간자격증을 취득할 수 있습니다. 관련 자격 이력과 완성 작품을 향후 교육 활동 준비에 활용해보세요.",
    points: ["실습 결과물 기준 작품 평가", "합격 기준 충족 시 민간자격증 발급"],
    badge: "수강만으로 자동 발급되지 않으며, 평가 통과 필수",
  },
];

// ─────────────────────────────────────────────────────────────
// [4. 내가 만들 수 있는 책 8종 (선택형)]
// ─────────────────────────────────────────────────────────────
export const BOOK_TYPES: BookTypeItem[] = [
  {
    id: "picture-book",
    number: "01",
    title: "AI 그림책",
    subtitle: "동화 & 일러스트 북",
    description: "따뜻한 동화 스토리와 AI 감성 일러스트를 결합하여 나만의 세계관을 담은 그림책을 만듭니다.",
    tags: ["스토리텔링", "AI일러스트", "어린이·어른동화"],
    mockupTag: "PICTURE BOOK",
  },
  {
    id: "essay",
    number: "02",
    title: "감성 에세이",
    subtitle: "일상 & 마음 기록집",
    description: "계절의 변화, 삶의 단상, 따뜻한 마음을 짧은 글과 일러스트 이미지로 엮은 에세이북입니다.",
    tags: ["일상기록", "마음치유", "공감글귀"],
    mockupTag: "ESSAY BOOK",
  },
  {
    id: "autobiography",
    number: "03",
    title: "자서전 · 인생기록집",
    subtitle: "내 삶의 회고록",
    description: "살아온 20년, 40년의 소중한 여정과 기억, 사진을 엮어 후대와 나 자신에게 남기는 소중한 인생책입니다.",
    tags: ["인생여정", "가족사", "퇴직·시니어"],
    mockupTag: "AUTOBIOGRAPHY",
  },
  {
    id: "handwriting-book",
    number: "04",
    title: "감성 필사책",
    subtitle: "글귀 & 기록의 여백",
    description: "마음에 울림을 주는 문장과 독자가 직접 손글씨를 적을 수 있는 기록 공간을 조화롭게 배치한 책입니다.",
    tags: ["필사노트", "명문장", "자기성찰"],
    mockupTag: "HANDWRITING BOOK",
  },
  {
    id: "poetry-art",
    number: "05",
    title: "시화집 (詩畵集)",
    subtitle: "시와 그림의 어울림",
    description: "자작시나 마음에 품은 짧은 시 구절에 어울리는 감성 일러스트를 한 폭의 그림처럼 결합합니다.",
    tags: ["감성시집", "시화작품", "서정예술"],
    mockupTag: "POETRY & ART",
  },
  {
    id: "photo-essay",
    number: "06",
    title: "디카시 · 포토에세이",
    subtitle: "사진 한 장, 문장 하나",
    description: "스마트폰으로 직접 촬영한 일상 사진 한 장에 순간의 시적 영감을 담은 짧은 디카시 에세이집입니다.",
    tags: ["스마트폰사진", "순간포착", "디카시"],
    mockupTag: "PHOTO ESSAY",
  },
  {
    id: "coloring-essay",
    number: "07",
    title: "컬러링 에세이",
    subtitle: "글과 채색의 힐링",
    description: "마음을 차분하게 해주는 감성 글과 함께 독자가 직접 색을 채울 수 있는 라인아트 도안을 담습니다.",
    tags: ["컬러링북", "아트테라피", "힐링체험"],
    mockupTag: "COLORING BOOK",
  },
  {
    id: "workbook",
    number: "08",
    title: "감성 워크북",
    subtitle: "질문과 실습의 책",
    description: "자기이해 질문, 마음 돌봄 체크리스트, 실천 가이드를 담아 독자와 함께 호흡하는 참여형 도서입니다.",
    tags: ["질문노트", "코칭워크북", "실천가이드"],
    mockupTag: "WORKBOOK",
  },
];

// ─────────────────────────────────────────────────────────────
// [5. 기존 출판 교육 수강생 작품 소개 (초안 분리 데이터)]
// ─────────────────────────────────────────────────────────────
export const STUDENT_WORKS: StudentWorkCase[] = [
  {
    id: "work-1",
    title: "어느 봄날의 마음정원",
    authorNote: "시니어 수강생 작품 (기존 출판 실습 과정)",
    bookType: "감성 에세이 & 시화집",
    resultStatus: "POD 출판 등록 완료",
    review: "글재주가 없어 망설였는데, AI와 캔바로 내 지난 시간이 정말 한 권의 종이책이 되어 감격스러웠습니다.",
    tag: "에세이",
  },
  {
    id: "work-2",
    title: "별을 낚는 아이 루카",
    authorNote: "강사 수강생 작품 (기존 출판 실습 과정)",
    bookType: "AI 감성 그림책",
    resultStatus: "종이책 인쇄 및 유통 완료",
    review: "아이에게 줄 그림책을 만들며 시작했는데, 지금은 출판 지도사로서 수강생들에게 과정을 가르치고 있습니다.",
    tag: "그림책",
  },
  {
    id: "work-3",
    title: "30년 교직을 마치며",
    authorNote: "퇴직 교원 수강생 작품 (기존 출판 실습 과정)",
    bookType: "자서전 · 회고록",
    resultStatus: "소장용 POD 종이책 제작",
    review: "책 한 권 만드는 규격과 판형, 표지 책등 계산까지 혼자서도 척척 해낼 수 있게 되었습니다.",
    tag: "자서전",
  },
];

// ─────────────────────────────────────────────────────────────
// [6. 6개 핵심 커리큘럼 모듈]
// ─────────────────────────────────────────────────────────────
export const CURRICULUM_MODULES: CurriculumModule[] = [
  {
    moduleNumber: "MODULE 01",
    title: "나만의 출판 주제 발견과 기획",
    summary: "내 삶의 기억과 경험에서 책의 씨앗을 찾고, 8개 유형 중 한 가지를 선택해 출판 기획서를 완성합니다.",
    lessons: [
      "출판의 기본 이해와 자격과정 로드맵",
      "내 이야기 발굴하기: 추억, 전문성, 감정 메모 정리",
      "8가지 도서 유형 분석 및 나에게 맞는 형식 선택",
      "도서 콘셉트, 타깃 독자, 가제목 및 목차(Table of Contents) 기획",
    ],
    result: "최종 출판 기획서 (도서 유형·목차·콘셉트)",
  },
  {
    moduleNumber: "MODULE 02",
    title: "AI와 함께하는 감성 글쓰기 & 원고 편집",
    summary: "AI를 단순한 대필이 아닌 창작 파트너로 활용하여 내 목소리가 살아있는 본문 원고를 집필합니다.",
    lessons: [
      "감성 글쓰기를 위한 AI 프롬프트 엔지니어링 기초",
      "에세이·자서전·동화·시 등 유형별 원고 생성 및 문장 다듬기",
      "AI의 기계적인 어투를 덜어내고 나의 진솔한 감정 불어넣기",
      "원고 맞춤법 검사, 문단 구조화, 최종 원고 분량 점검",
    ],
    result: "선택 도서 1권의 본문 텍스트 원고 전체",
  },
  {
    moduleNumber: "MODULE 03",
    title: "감성 일러스트 및 이미지 제작",
    summary: "책의 무드와 어울리는 고해상도 이미지를 생성하고, 저작권 규정과 출판 해상도를 확보합니다.",
    lessons: [
      "도서 콘셉트에 맞는 비주얼 스타일(수채화, 오일파스텔, 라인아트 등) 정의",
      "AI 이미지 생성 도구를 활용한 일관된 캐릭터 및 배경 연출",
      "직접 찍은 사진 보정 및 텍스트와의 배치 감각 익히기",
      "출판 인쇄에 적합한 300DPI 해상도 확보 및 이미지 이용 권리 점검",
    ],
    result: "본문 삽화 및 표지용 고해상도 그래픽 에셋",
  },
  {
    moduleNumber: "MODULE 04",
    title: "Canva 종이책 내지 & 표지 편집 실습",
    summary: "종이책 출판 규격에 맞추어 판형을 설정하고, 앞표지·책등·뒤표지 일체형 표지와 내지를 편집합니다.",
    lessons: [
      "도서 판형(A5, B6, 신국판 등) 선택과 여백(재단선·도련) 설정",
      "페이지 수에 따른 책등(Spine) 두께 정밀 계산법",
      "Canva 무료 템플릿을 활용한 가독성 높은 내지 조판",
      "인쇄 품질 저하 없는 PDF 인쇄용 내보내기 규격 준수",
    ],
    result: "출판용 인쇄 내지 PDF 파일 & 일체형 표지 파일",
  },
  {
    moduleNumber: "MODULE 05",
    title: "POD 플랫폼 종이책 출판 등록 실무",
    summary: "부크크(Bookk) 등 국내 주요 무자본 POD 출판 플랫폼의 원리를 이해하고 실제 출판 등록을 진행합니다.",
    lessons: [
      "POD(주문제작 인쇄) 출판의 구조와 유통 플랫폼의 이해",
      "도서 기본정보(카테고리, 저자소개, 책소개, 목차) 작성법",
      "내지 및 표지 파일 업로드와 규격 오류 점검",
      "주요 반려 사유 분석 및 재승인 수정 요령",
    ],
    result: "POD 플랫폼 도서 등록 신청 완료 또는 등록 포트폴리오",
  },
  {
    moduleNumber: "MODULE 06",
    title: "작품 완성 및 감성출판지도사 자격 평가",
    summary: "제작한 출판 원고와 파일을 최종 점검하여 포트폴리오를 구성하고, 자격 검정에 제출합니다.",
    lessons: [
      "출판물 완성도 자체 체크리스트(저작권, 규격, 구성) 점검",
      "지도사로서의 콘텐츠 기획 역량 및 실무 설명서 작성",
      "자격 검정 과제 제출 양식 및 포트폴리오 업로드 안내",
      "합격 후 자격증 발급 절차 및 향후 출판 강사·지도자 활동 가이드",
    ],
    result: "감성출판지도사 1급 최종 검정 제출 포트폴리오",
  },
];

// ─────────────────────────────────────────────────────────────
// [7. 자격증 세부 규격 (KDMCA 등록정보 기반)]
// ─────────────────────────────────────────────────────────────
export const QUALIFICATION_SPEC: QualificationSpec = {
  name: "감성출판지도사",
  level: "1급",
  registrationNumber: "제2026-006348호",
  issuer: "한국디지털마인드코칭협회 (KDMCA)",
  type: "등록 민간자격 (자격기본법 제17조)",
  examMethod: "작품 심사 및 출판 포트폴리오 서류 검정",
  passingCriteria: "출판 기획서, 내지 PDF, 표지 파일, 저작권 점검표 종합 평가 70점 이상 합격",
  retakePolicy: "불합격 시 1회 보완 제출 및 재심사 기회 부여 (세부 일정 별도 안내)",
  notice:
    "본 자격은 자격기본법 규정에 따라 등록된 민간자격으로, 국가가 공인한 국가공인자격이 아닙니다. 민간자격 등록 및 공인 제도에 대한 상세 내용은 민간자격정보서비스(pqi.or.kr)에서 확인하실 수 있습니다.",
};

// ─────────────────────────────────────────────────────────────
// [7-1. 커리어 및 교육 활동 확장 데이터 (신규 섹션 - 재사용 가능 구조)]
// ─────────────────────────────────────────────────────────────
export const CAREER_EXPANSION_DATA: CareerExpansionSectionData = {
  badge: "배움에서 끝나지 않는 새로운 가능성",
  titleMain: "나만의 책을 완성하고,",
  titleSub: "새로운 교육 활동의 기회까지 준비하세요.",
  description: [
    "감성출판지도사 과정은 단순히 책 한 권을 만드는 교육에서 끝나지 않습니다. AI와 디지털 도구를 활용한 출판 실무를 익히고, 자신만의 작품을 완성하며, 자격 검정을 통해 관련 민간자격 취득에도 도전할 수 있습니다.",
    "완성한 책과 자격 이력은 향후 강사 프로필, 교육 프로그램 기획, 오프라인 클래스 제안 등에 활용할 수 있는 소중한 자산이 됩니다.",
  ],
  cards: [
    {
      id: "career-1",
      number: "CARD 01",
      title: "강사 프로필과 자격 이력",
      description: "관련 민간자격을 취득하여 강사 이력서와 프로필에 기재할 수 있는 자격 이력을 준비합니다.",
      iconType: "certificate",
    },
    {
      id: "career-2",
      number: "CARD 02",
      title: "오프라인 강의 활동 준비",
      description: "문화센터, 평생교육기관, 지역 교육 프로그램 등에서 활용할 수 있는 출판 교육 콘텐츠와 강의 주제를 구상합니다.",
      iconType: "lecture",
    },
    {
      id: "career-3",
      number: "CARD 03",
      title: "나만의 교육 콘텐츠 확보",
      description: "직접 완성한 그림책, 에세이, 자서전, 시화집 등을 실제 작품 사례이자 강의 포트폴리오로 활용할 수 있습니다.",
      iconType: "portfolio",
    },
    {
      id: "career-4",
      number: "CARD 04",
      title: "커리어 및 활동 분야 확장",
      description: "기존 강의 분야에 AI 출판 교육을 접목하거나, 나만의 원데이 클래스와 소규모 출판 워크숍을 기획하는 기반을 마련합니다.",
      iconType: "expansion",
    },
  ],
  highlight: "작품은 나의 실력을 보여주고, 자격은 배운 역량을 설명하는 또 하나의 이력이 됩니다.",
  subHighlight: "책 한 권의 완성을 넘어, 내가 배운 것을 다른 사람에게 전달하는 다음 단계까지 준비해보세요.",
  disclaimer: "※ 민간자격 취득이 강사 채용·출강 또는 수익을 보장하지는 않습니다. 기관별 강사 선발 및 자격 요건은 다를 수 있습니다.",
};

// ─────────────────────────────────────────────────────────────
// [8. 수강 혜택 6종]
// ─────────────────────────────────────────────────────────────
export const COURSE_BENEFITS: BenefitItem[] = [
  {
    id: "benefit-1",
    number: "01",
    title: "책 유형별 출판 기획 워크시트",
    description: "8개 도서 형식별 질문지와 목차 구조가 정리된 맞춤형 기획 서식 제공",
    status: "provided",
  },
  {
    id: "benefit-2",
    number: "02",
    title: "AI 감성 글쓰기 프롬프트 키트",
    description: "어투 교정, 감성 문장 확장, 맞춤법 다듬기에 특화된 실전 프롬프트 모음",
    status: "provided",
  },
  {
    id: "benefit-3",
    number: "03",
    title: "Canva 종이책 내지 디자인 템플릿",
    description: "A5/B6/신국판 규격에 맞추어 여백과 폰트가 세팅된 캔바 조판 템플릿",
    status: "provided",
  },
  {
    id: "benefit-4",
    number: "04",
    title: "종이책 표지 제작 가이드 & 책등 계산기",
    description: "페이지 수와 용지 두께에 따른 책등 치수를 한눈에 계산하는 표지 템플릿",
    status: "provided",
  },
  {
    id: "benefit-5",
    number: "05",
    title: "POD 출판 등록 실무 체크리스트",
    description: "플랫폼 등록 전 반려를 예방하는 인쇄 규격 및 저작권 자가 점검표",
    status: "provided",
  },
  {
    id: "benefit-6",
    number: "06",
    title: "자격 검정 작품 제출 가이드북",
    description: "감성출판지도사 1급 심사 기준과 포트폴리오 패키징 양식 상세 안내",
    status: "provided",
  },
];

// ─────────────────────────────────────────────────────────────
// [9. 추천 수강생 대상]
// ─────────────────────────────────────────────────────────────
export const TARGET_AUDIENCE = [
  {
    title: "내 이름으로 된 첫 종이책을 출판하고 싶은 분",
    desc: "글재주가 없어도 내 삶의 이야기나 작은 영감을 실물 책으로 간직하고 싶은 분",
  },
  {
    title: "삶의 소중한 기억을 자서전·에세이로 남기고 싶은 40~60대",
    desc: "가족, 일터, 지나온 세월을 차분하게 정리하여 하나의 유형으로 엮어보고 싶은 성인 학습자",
  },
  {
    title: "그림책과 감성 일러스트 창작에 관심 있는 분",
    desc: "AI 이미지 도구를 활용해 동화책, 시화집 등 예술성 있는 감성 도서를 만들고 싶은 분",
  },
  {
    title: "문화센터·평생교육기관 등에서 강사 활동을 준비하는 분",
    desc: "출판 교육 기획안과 자격증을 기반으로 지자체 및 평생교육기관 강의 출강을 계획하는 분",
  },
  {
    title: "기존 강의에 AI 출판·그림책·감성 글쓰기를 추가하고 싶은 현직 강사",
    desc: "자신의 기존 교육 커리큘럼에 실물 책 제작 실습을 접목하여 강의 경쟁력을 강화하고 싶은 강사",
  },
  {
    title: "강의 제안에 활용할 작품 포트폴리오와 자격 이력을 준비하고 싶은 분",
    desc: "단순 수료증이 아닌 실제 출판물 포트폴리오와 공인된 민간자격 이력으로 공신력을 갖추고 싶은 분",
  },
  {
    title: "강사 · 코치 · 상담가로서 지식 브랜딩이 필요한 분",
    desc: "자신만의 전문 영역과 메시지를 담은 책을 완성하여 교육 활동의 전문성을 더하고 싶은 분",
  },
  {
    title: "AI와 캔바를 배워 실전 출판 결과물로 연결하고 싶은 분",
    desc: "도구 사용법에서 그치지 않고 실제 POD 유통 가능한 완성 파일까지 제작하고 싶은 분",
  },
  {
    title: "감성출판지도사 공인 민간자격 취득에 도전하고 싶은 분",
    desc: "책 한 권의 완성 과정을 검증받고 출판 지도 및 콘텐츠 코칭 자격을 갖추고 싶은 분",
  },
];

// ─────────────────────────────────────────────────────────────
// [10. 원데이 클래스와 VOD 자격과정 비교]
// ─────────────────────────────────────────────────────────────
export const COMPARISON_TABLE = [
  {
    feature: "교육 형태",
    oneday: "Zoom 실시간 온라인 라이브 실습",
    vod: "온라인 VOD 자기주도 학습 (언제든 반복 수강)",
  },
  {
    feature: "소요 시간 / 기간",
    oneday: "단 하루 (3~4시간 집중 완성)",
    vod: "총 6개 모듈 단계별 자기 페이스 학습",
  },
  {
    feature: "주요 목표",
    oneday: "출판 프로세스 체험 및 빠른 등록 준비",
    vod: "책 1권의 완성도 높은 원고·표지 제작 & 자격 취득",
  },
  {
    feature: "결과물 범위",
    oneday: "기초 편집본 및 출판 등록 체험",
    vod: "출판용 인쇄 내지 PDF, 표지 일체, 종합 포트폴리오",
  },
  {
    feature: "자격증 발급",
    oneday: "별도 자격증 미포함 (실습 중심)",
    vod: "작품 심사 통과 시 감성출판지도사 1급 자격증 발급",
  },
  {
    feature: "적합한 분",
    oneday: "짧은 시간 안에 출판 감각을 먼저 익히고 싶은 분",
    vod: "자신만의 책을 깊이 있게 완성하고 자격까지 취득할 분",
  },
];

// ─────────────────────────────────────────────────────────────
// [11. 자주 묻는 질문 (FAQ)]
// ─────────────────────────────────────────────────────────────
export const FAQS: FaqItem[] = [
  {
    question: "그림책이 아니어도 다른 종류의 책을 만들 수 있나요?",
    answer:
      "네, 가능합니다. 본 과정은 그림책뿐 아니라 감성 에세이, 자서전, 필사책, 시화집, 디카시·포토에세이, 컬러링북, 감성 워크북 등 총 8가지 형식 중 수강생이 원하는 도서 유형 1가지를 선택하여 집중적으로 완성할 수 있도록 구성되어 있습니다.",
  },
  {
    question: "글쓰기나 디자인을 전혀 해본 적 없는 초보자도 가능한가요?",
    answer:
      "네, 가능합니다. 복잡한 코딩이나 전문 그래픽 프로그램이 필요하지 않으며, AI가 아이디어 구상과 문장 다듬기를 도와주고 캔바(Canva) 무료 템플릿을 통해 디자인과 배치를 진행합니다. 초보자도 따라 할 수 있도록 화면 시연 중심으로 단계별 강의가 진행됩니다.",
  },
  {
    question: "8가지 책 종류를 모두 만들어야 자격증이 나오나요?",
    answer:
      "아닙니다. 수강생은 8가지 유형을 모두 만들 필요가 없습니다. 본인이 가장 만들고 싶고 이야기가 풍부한 '1가지 책 유형'을 선택하여 최종 인쇄용 내지와 표지 파일을 완성한 후, 이를 바탕으로 자격 검정을 신청하시면 됩니다.",
  },
  {
    question: "강의를 들으면 실제 서점에 유통되는 종이책 출판까지 가능한가요?",
    answer:
      "네. 교보문고, 알라딘, 예스24 등에 연계 유통되는 무자본 POD(부크크 등) 플랫폼 등록 실무를 배웁니다. 본 과정을 통해 플랫폼 심사 규격을 충족하는 인쇄 파일을 완성할 수 있으며, 실제 최종 유통 승인은 해당 플랫폼의 출판 심사 기준에 따릅니다.",
  },
  {
    question: "수강만 하면 자격증이 자동으로 발급되나요?",
    answer:
      "아닙니다. 감성출판지도사 자격증은 단순 출석만으로 발급되지 않습니다. 강의를 수강하며 완성한 '출판 기획서, 최종 내지 PDF, 표지 파일, 저작권 점검표'를 종합 포트폴리오로 제출하셔야 하며, 전문 심사위원의 기준 평가(70점 이상)를 통과하셔야 한국디지털마인드코칭협회(KDMCA) 공인 자격증이 발급됩니다.",
  },
  {
    question: "수강료 99,000원에 실물 종이책 인쇄 비용도 포함되어 있나요?",
    answer:
      "포함되어 있지 않습니다. 수강료에는 'VOD 강의 시청, 편집 템플릿 및 프롬프트 자료, 과제 검정 심사료, 합격 시 자격증 발급비'가 포함되어 있으며, 본인이 직접 실물로 받아보실 종이책의 인쇄·구매·배송비는 POD 플랫폼에 본인이 주문하는 권수만큼 별도로 결제하시게 됩니다.",
  },
  {
    question: "기존의 'AI 감성 종이책 출판 원데이 클래스'와 무엇이 다른가요?",
    answer:
      "원데이 클래스(/paperbook)는 실시간 Zoom으로 3~4시간 동안 출판의 전체 흐름을 압축 체험하는 단기 집중 실습입니다. 반면 본 VOD 자격과정은 시간에 구애받지 않고 VOD를 보며 한 권의 책을 스스로 완성도 높게 완성하고, 공식 포트폴리오 평가를 통해 감성출판지도사 민간자격을 취득하는 종합 전문가 입문 과정입니다.",
  },
];

