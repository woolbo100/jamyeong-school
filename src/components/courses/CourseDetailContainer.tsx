import React from "react";

interface CourseDetailContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

/**
 * 자명스쿨 자격과정 상세페이지 공통 1280px 콘텐츠 컨테이너
 * 
 * - 데스크톱: 최대 너비 1280px 중앙 정렬 (w-full max-w-[1280px] mx-auto)
 * - 패딩: 모바일 좌우 20px (px-5), 태블릿/데스크톱 32px (md:px-8)
 * - 자격과정 4종(감성출판지도사, AI 감성아트 지도사, 캔바 콘텐츠 마스터, AI 브랜딩 마스터)의
 *   표준 레이아웃 기준 컴포넌트입니다.
 */
export default function CourseDetailContainer({
  children,
  className = "",
  as: Component = "div",
}: CourseDetailContainerProps) {
  return (
    <Component className={`w-full max-w-[1280px] mx-auto px-5 md:px-8 ${className}`}>
      {children}
    </Component>
  );
}

