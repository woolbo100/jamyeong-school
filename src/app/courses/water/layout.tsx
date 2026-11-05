import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "마음을 채우다 | Water - 자명스쿨",
  description: "1인 비즈니스 창업 & 서비스 개발 - 바이브 코딩 & 감성 자동화",
};

export default function WaterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

