'use client';

import React from "react";
import { usePathname } from "next/navigation";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import CosmicBackground from "@/components/CosmicBackground";

interface MainLayoutWrapperProps {
  children: React.ReactNode;
}

export default function MainLayoutWrapper({ children }: MainLayoutWrapperProps) {
  const pathname = usePathname();
  const isKdmca = pathname?.startsWith("/kdmca");

  // KDMCA 공식 페이지인 경우 기존 자명스쿨 헤더/푸터/배경 제외하고 독립 렌더링
  if (isKdmca) {
    return <main className="w-full min-h-screen">{children}</main>;
  }

  // 기존 자명스쿨의 모든 페이지는 원래 레이아웃 완벽 유지
  return (
    <>
      <CosmicBackground />
      <SiteHeader />
      <div className="pt-16">
        {children}
      </div>
      <SiteFooter />
    </>
  );
}
