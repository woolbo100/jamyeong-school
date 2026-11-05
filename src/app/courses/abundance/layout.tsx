import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "마음을 빛내다 | Abundance - 자명스쿨",
  description: "리더십 & 마인드 코치 & 협회 강사 양성 - 풍요 마인드 · Abundance Code",
};

export default function AbundanceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

