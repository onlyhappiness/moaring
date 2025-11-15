"use client";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Heart, Home, MapPin, MessageCircle, User } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import * as React from "react";

interface NavItem {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  path: string;
  badge?: number;
}

interface BottomNavigationProps {
  className?: string;
}

const navItems: NavItem[] = [
  {
    id: "home",
    label: "홈",
    icon: Home,
    path: "/",
  },
  {
    id: "matching",
    label: "매칭",
    icon: Heart,
    path: "/matching",
  },
  {
    id: "chat",
    label: "채팅",
    icon: MessageCircle,
    path: "/chat",
    badge: 0, // 채팅 개수
  },
  {
    id: "feed",
    label: "피드",
    icon: MapPin,
    path: "/feed",
  },
  {
    id: "profile",
    label: "프로필",
    icon: User,
    path: "/profile",
  },
];

/**
 * 하단 탭 네비게이션
 * - 5개 탭: 홈, 매칭, 채팅, 피드, 프로필
 * - 활성 상태 표시
 * - 배지 지원
 */
export function BottomNavigation({ className }: BottomNavigationProps) {
  const pathname = usePathname();
  const router = useRouter();

  const handleNavClick = (path: string) => {
    router.push(path);
  };

  return (
    <nav
      className={cn(
        "fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-lg z-(--z-fixed)",
        "bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/80",
        "border-t border-border",
        "safe-area-inset-bottom",
        className
      )}
    >
      <div className="h-16 flex items-center justify-around px-2">
        {navItems.map((item) => {
          const isActive = pathname === item.path;
          const Icon = item.icon;

          return (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.path)}
              className={cn(
                "flex flex-col items-center justify-center gap-1 ",
                "flex-1 touch-target relative",
                "transition-colors duration-200",
                "focus:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-lg"
              )}
              aria-label={item.label}
              aria-current={isActive ? "page" : undefined}
            >
              {/* 아이콘 */}
              <div className="relative cursor-pointer">
                <Icon
                  className={cn(
                    "h-6 w-6 transition-colors",
                    isActive ? "text-primary" : "text-muted-foreground"
                  )}
                />
                {/* 배지 */}
                {item.badge !== undefined && item.badge > 0 && (
                  <Badge
                    variant="destructive"
                    className="absolute -top-2 -right-2 h-4 min-w-4 flex items-center justify-center p-0 text-[10px]"
                  >
                    {item.badge > 99 ? "99+" : item.badge}
                  </Badge>
                )}
              </div>

              {/* 라벨 */}
              <span
                className={cn(
                  "text-xs font-medium transition-colors",
                  isActive ? "text-primary" : "text-muted-foreground"
                )}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}

/**
 * 네비게이션 아이템 업데이트를 위한 컨텍스트 (선택적)
 */
export function useNavigationBadge() {
  // 채팅 개수 등을 업데이트하는 로직
  // 예: const updateChatBadge = (count: number) => { ... }
  return {
    updateChatBadge: (count: number) => {
      // 구현 예정
      console.log("Chat badge updated:", count);
    },
  };
}
