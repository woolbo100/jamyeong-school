import type { Metadata } from "next";
import KdmcaClientView from "@/components/kdmca/KdmcaClientView";

export const metadata: Metadata = {
  title: "한국디지털마인드코칭협회 | KDMCA",
  description:
    "한국디지털마인드코칭협회 공식 홈페이지입니다. AI, 디지털 콘텐츠, 출판, 디자인, 감성예술 및 코칭 분야의 교육과 등록 민간자격과정을 운영합니다.",
  alternates: {
    canonical: "https://www.jmschool.kr/kdmca",
  },
  openGraph: {
    title: "한국디지털마인드코칭협회 | KDMCA",
    description: "AI와 디지털 콘텐츠, 교육 및 코칭 역량을 연결하는 전문 교육·자격 운영기관",
    url: "https://www.jmschool.kr/kdmca",
    siteName: "한국디지털마인드코칭협회 (KDMCA)",
    locale: "ko_KR",
    type: "website",
  },
};

export default function KdmcaPage() {
  return <KdmcaClientView />;
}
