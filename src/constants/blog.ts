export const blogCategories = [
  {
    name: "마음 구조",
    slug: "mind-structure",
    description: "자기이해, 무의식 패턴, 반복되는 삶의 구조를 해석하는 글",
    color: "#8B5E3C"
  },
  {
    name: "마음 표현",
    slug: "mind-expression",
    description: "감정과 내면을 콘텐츠, 이미지, 스토리로 표현하는 영역",
    color: "#FF6B6B"
  },
  {
    name: "지식 & 콘텐츠",
    slug: "knowledge-content",
    description: "지식을 구조화하고 콘텐츠 및 강의로 만드는 방법",
    color: "#C0C0C0"
  },
  {
    name: "수익화 & 시스템",
    slug: "monetization-system",
    description: "콘텐츠를 수익과 자동화 시스템으로 연결하는 구조",
    color: "#4FC3F7"
  },
  {
    name: "풍요 & 확장",
    slug: "abundance-expansion",
    description: "풍요의식, 에너지, 리더십과 삶의 확장에 대한 철학",
    color: "#D4AF37"
  }
];

export type BlogCategory = typeof blogCategories[number];
