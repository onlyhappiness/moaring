"use client";

import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Bell, Menu, Search } from "lucide-react";

interface AppHeaderProps {
  title?: string;
  showSearch?: boolean;
  showNotification?: boolean;
  showMenu?: boolean;
  showAvatar?: boolean;
  notificationCount?: number;
  onSearchClick?: () => void;
  onNotificationClick?: () => void;
  onMenuClick?: () => void;
  onAvatarClick?: () => void;
  className?: string;
}

/**
 * 앱 상단 헤더
 * - 고정 위치 (sticky)
 * - 로고/제목
 * - 검색, 알림, 메뉴 등
 */
export function AppHeader({
  title = "Moaring",
  showSearch = true,
  showNotification = true,
  showMenu = false,
  showAvatar = false,
  notificationCount = 0,
  onSearchClick,
  onNotificationClick,
  onMenuClick,
  onAvatarClick,
  className,
}: AppHeaderProps) {
  return (
    <header
      className={cn(
        "fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-lg z-[var(--z-sticky)]",
        "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80",
        "border-b border-border",
        className
      )}
    >
      <div className="h-16 px-4 flex items-center justify-between gap-3">
        {/* 왼쪽: 메뉴 또는 로고 */}
        <div className="flex items-center gap-3">
          {showMenu && (
            <Button
              size="icon-sm"
              variant="ghost"
              onClick={onMenuClick}
              aria-label="메뉴"
            >
              <Menu className="h-5 w-5" />
            </Button>
          )}
          <h1 className="text-xl font-bold bg-linear-to-r from-primary to-primary/30 bg-clip-text text-transparent">
            {title}
          </h1>
        </div>

        {/* 오른쪽: 액션 버튼들 */}
        <div className="flex items-center gap-2">
          {/* 검색 */}
          {showSearch && (
            <Button
              size="icon-sm"
              variant="ghost"
              onClick={onSearchClick}
              aria-label="검색"
            >
              <Search className="h-5 w-5" />
            </Button>
          )}

          {/* 알림 */}
          {showNotification && (
            <div className="relative">
              <Button
                size="icon-sm"
                variant="ghost"
                onClick={onNotificationClick}
                aria-label="알림"
              >
                <Bell className="h-5 w-5" />
              </Button>
              {notificationCount > 0 && (
                <Badge
                  variant="destructive"
                  className="absolute -top-1 -right-1 h-5 min-w-5 flex items-center justify-center p-0 text-[10px]"
                >
                  {notificationCount > 99 ? "99+" : notificationCount}
                </Badge>
              )}
            </div>
          )}

          {/* 아바타 */}
          {showAvatar && (
            <button
              onClick={onAvatarClick}
              className="focus:outline-none focus:ring-2 focus:ring-ring rounded-full"
              aria-label="프로필"
            >
              <Avatar size="sm" fallback="U" />
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
