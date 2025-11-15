import * as React from "react";
import { cn } from "@/lib/utils";

interface PageWrapperProps {
  children: React.ReactNode;
  className?: string;
  maxWidth?: "sm" | "md" | "lg" | "xl" | "full";
  padding?: "none" | "sm" | "md" | "lg";
}

/**
 * 페이지 콘텐츠 래퍼
 * - 일관된 패딩과 최대 너비 제공
 * - 페이지별로 커스터마이징 가능
 */
export function PageWrapper({
  children,
  className,
  maxWidth = "full",
  padding = "md",
}: PageWrapperProps) {
  return (
    <div
      className={cn(
        "w-full mx-auto",
        // Max width
        maxWidth === "sm" && "max-w-sm",
        maxWidth === "md" && "max-w-md",
        maxWidth === "lg" && "max-w-lg",
        maxWidth === "xl" && "max-w-xl",
        maxWidth === "full" && "max-w-full",
        // Padding
        padding === "none" && "p-0",
        padding === "sm" && "p-3",
        padding === "md" && "p-4",
        padding === "lg" && "p-6",
        className
      )}
    >
      {children}
    </div>
  );
}

