import { cn } from "@/lib/utils";
import * as React from "react";

interface AppContainerProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * 모바일 웹앱의 최상위 컨테이너
 * - 데스크톱에서 max-w-lg (512px)로 제한
 * - 중앙 정렬
 * - Safe area 지원
 */
export function AppContainer({ children, className }: AppContainerProps) {
  return (
    <div className="bg-background h-dvh">
      {/* 모바일 앱 영역 */}
      <div
        className={cn(
          "w-full max-w-lg relative bg-background mx-auto h-full overflow-y-auto",
          "shadow-xl scrollbar-hide", // 데스크톱에서 앱처럼 보이도록
          className
        )}
      >
        {children}
      </div>
    </div>
  );
}
