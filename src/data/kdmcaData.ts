export interface Qualification {
  id: string;
  name: string;
  level: string;
  registrationNumber: string;
  type: string;
  issuer: string;
  shortDescription: string;
  description: string;
  completionCriteria: string;
  managementPolicy: string[];
}

export interface AssociationInfo {
  name: string;
  englishName: string;
  shortName: string;
  representative: string;
  address: string;
  tel: string;
  email: string;
  homepage: string;
}

export const KDMCA_INFO: AssociationInfo = {
  name: "한국디지털마인드코칭협회",
  englishName: "Korea Digital Mind Coaching Association",
  shortName: "KDMCA",
  representative: "백진선",
  address: "부산광역시 해운대구 반송로 621(석대동), 203호",
  tel: "010-2339-1033",
  email: "buzasun@naver.com",
  homepage: "https://www.jmschool.kr/kdmca",
};

export const QUALIFICATIONS_DATA: Qualification[] = [
  {
    id: "canva-master",
    name: "캔바콘텐츠마스터강사 1급",
    level: "1급",
    registrationNumber: "제2026-006558호",
    type: "민간자격",
    issuer: "한국디지털마인드코칭협회",
    shortDescription: "캔바(Canva) 플랫폼을 활용하여 디지털 콘텐츠 기획·제작 및 온라인 브랜딩 실무 교육을 지도하는 전문가",
    description:
      "캔바콘텐츠마스터강사는 캔바(Canva) 디자인 플랫폼을 활용하여 카드뉴스, SNS 콘텐츠, 강의자료, 홍보이미지 등 다양한 디지털 콘텐츠를 기획·제작하고 온라인 브랜딩 및 마케팅에 활용되는 콘텐츠 제작 방법을 교육하고 지도할 수 있는 전문가이며, 실습과 과제를 통해 캔바 과정을 교육하고 실무 지도를 수행한다.",
    completionCriteria: "자격검정은 필기시험과 과제심사 방식으로 실시한다.",
    managementPolicy: [
      "시험 및 자격검정 과정에서 부정행위를 한 경우",
      "자격 취득을 위하여 허위 서류를 제출한 경우",
      "발급된 자격증을 부정한 목적으로 사용한 경우",
      "자격관리기관의 명예와 신뢰를 훼손하는 행위를 한 경우",
    ],
  },
  {
    id: "publishing-instructor",
    name: "감성출판지도사 1급",
    level: "1급",
    registrationNumber: "제2026-006348호",
    type: "민간자격",
    issuer: "한국디지털마인드코칭협회",
    shortDescription: "글쓰기와 디지털 출판을 이해하고 전자책 등 출판 콘텐츠 기획·제작을 교육하고 지도하는 전문가",
    description:
      "감성출판지도사는 글쓰기와 디지털 콘텐츠 제작 및 출판 과정을 이해하고, 개인의 경험과 지식, 감성 콘텐츠를 전자책과 다양한 출판 콘텐츠로 기획·제작할 수 있도록 교육하고 지도하는 전문가이다. AI 및 디지털 도구를 활용한 콘텐츠 기획, 글쓰기, 편집, 디자인, 전자책 제작과 출판 실습 등을 교육하고 지도할 수 있는 역량을 갖추는 것을 목표로 한다.",
    completionCriteria: "자격검정은 필기시험과 과제심사 방식으로 실시한다.",
    managementPolicy: [
      "시험 및 자격검정 과정에서 부정행위를 한 경우",
      "자격 취득을 위하여 허위 서류를 제출한 경우",
      "발급된 자격증을 부정한 목적으로 사용한 경우",
      "자격관리기관의 명예와 신뢰를 훼손하는 행위를 한 경우",
    ],
  },
  {
    id: "ai-art-instructor",
    name: "AI감성아트지도사 1급",
    level: "1급",
    registrationNumber: "제2026-006347호",
    type: "민간자격",
    issuer: "한국디지털마인드코칭협회",
    shortDescription: "생성형 AI와 디지털 아트를 융합하여 이미지 및 감성 콘텐츠를 예술과 교육 활동으로 지도하는 전문가",
    description:
      "AI감성아트지도사는 생성형 AI와 다양한 디지털 아트 도구를 활용하여 이미지와 감성 콘텐츠를 기획·제작하고, 이를 예술 및 교육활동에 활용할 수 있도록 지도하는 전문가이다. AI 이미지 제작과 감성 표현, 디지털 아트 콘텐츠 기획 및 실습 등을 바탕으로 다양한 연령과 대상에게 AI 기반 감성예술 활동을 교육하고 지도할 수 있는 역량을 갖추는 것을 목표로 한다.",
    completionCriteria: "자격검정은 필기시험과 과제심사 방식으로 실시한다.",
    managementPolicy: [
      "시험 및 자격검정 과정에서 부정행위를 한 경우",
      "자격 취득을 위하여 허위 서류를 제출한 경우",
      "발급된 자격증을 부정한 목적으로 사용한 경우",
      "자격관리기관의 명예와 신뢰를 훼손하는 행위를 한 경우",
    ],
  },
  {
    id: "ai-branding-master",
    name: "AI브랜딩마스터 강사 1급",
    level: "1급",
    registrationNumber: "제2026-006016호",
    type: "민간자격",
    issuer: "한국디지털마인드코칭협회",
    shortDescription: "생성형 AI와 디지털 도구를 활용하여 브랜드 기획 및 온라인 브랜딩 방법을 교육하고 지도하는 전문가",
    description:
      "AI브랜딩마스터 강사는 생성형 AI와 다양한 디지털 도구를 활용하여 개인 또는 기업의 브랜드를 기획하고, 브랜드 콘텐츠를 제작하며, AI 기반 브랜딩 방법을 교육하고 지도할 수 있는 전문가이다. AI 활용, 퍼스널브랜딩, 콘텐츠 기획, 디지털 콘텐츠 제작 및 온라인 브랜딩 실습 등을 통해 AI 시대에 필요한 브랜드 구축 방법을 교육하고 지도할 수 있는 역량을 갖추는 것을 목표로 한다.",
    completionCriteria: "자격검정은 필기시험과 과제심사 방식으로 실시한다.",
    managementPolicy: [
      "시험 및 자격검정 과정에서 부정행위를 한 경우",
      "자격 취득을 위하여 허위 서류를 제출한 경우",
      "발급된 자격증을 부정한 목적으로 사용한 경우",
      "자격관리기관의 명예와 신뢰를 훼손하는 행위를 한 경우",
    ],
  },
];

export const CERT_PROCESS_STEPS = [
  {
    step: "STEP 01",
    title: "교육과정 신청",
    description: "협회 지정 교육과정을 신청합니다.",
  },
  {
    step: "STEP 02",
    title: "교육과정 이수",
    description: "해당 자격과정의 이론 및 실습 교육을 이수합니다.",
  },
  {
    step: "STEP 03",
    title: "자격검정",
    description: "필기시험과 과제심사 방식으로 자격검정을 실시합니다.",
  },
  {
    step: "STEP 04",
    title: "합격심사",
    description: "자격기준에 따라 평가 및 최종 심사를 진행합니다.",
  },
  {
    step: "STEP 05",
    title: "자격증 발급",
    description: "최종 합격자에게 한국디지털마인드코칭협회 명의의 자격증을 발급합니다.",
  },
];
