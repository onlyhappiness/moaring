import { cn } from "@/lib/utils";
import * as React from "react";

interface MainContentProps {
  children: React.ReactNode;
  className?: string;
  withBottomNav?: boolean;
  withHeader?: boolean;
}

/**
 * 메인 콘텐츠 영역
 * - 헤더와 하단 네비게이션 사이의 스크롤 가능한 영역
 * - Safe area inset 지원
 */
export function MainContent({
  children,
  className,
  withBottomNav = true,
  withHeader = true,
}: MainContentProps) {
  return (
    <main
      className={cn(
        "flex-1 overflow-y-auto",
        // 헤더 높이만큼 상단 패딩 (h-16 = 4rem = 64px)
        withHeader && "pt-16",
        // 하단 네비게이션 높이만큼 하단 패딩 (h-20 = 5rem = 80px)
        withBottomNav && "mb-28",
        // Safe area insets
        "safe-area-inset-bottom",
        className
      )}
    >
      {children}
    </main>
  );
}
