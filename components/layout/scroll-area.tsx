import * as React from "react";
import { cn } from "@/lib/utils";

interface ScrollAreaProps {
  children: React.ReactNode;
  className?: string;
  hideScrollbar?: boolean;
}

/**
 * 스크롤 가능한 영역
 * - 스크롤바 숨김 옵션
 * - 부드러운 스크롤
 */
export function ScrollArea({
  children,
  className,
  hideScrollbar = false,
}: ScrollAreaProps) {
  return (
    <div
      className={cn(
        "overflow-y-auto overflow-x-hidden",
        hideScrollbar && "hide-scrollbar",
        className
      )}
    >
      {children}
    </div>
  );
}

