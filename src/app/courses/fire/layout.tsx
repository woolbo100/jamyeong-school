import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "마음을 그리다 | Fire - 자명스쿨",
  description: "AI 아트 & 영상 창작 과정 - 당신의 감성이 작품이 되는 순간, 6주 프로젝트",
};

export default function FireLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
