import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "마음을 심다 | Earth - 자명스쿨",
  description: "나를 이해하고, 나의 이야기를 시작하는 첫 단계 - 아.그.작 6주 프로젝트",
};

export default function EarthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
