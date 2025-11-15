"use client";

import * as React from "react";
import { AppContainer } from "./app-container";
import { AppHeader } from "./app-header";
import { MainContent } from "./main-content";
import { BottomNavigation } from "./bottom-navigation";
import { cn } from "@/lib/utils";

interface AppLayoutProps {
  children: React.ReactNode;
  headerTitle?: string;
  showHeader?: boolean;
  showBottomNav?: boolean;
  showSearch?: boolean;
  showNotification?: boolean;
  notificationCount?: number;
  onSearchClick?: () => void;
  onNotificationClick?: () => void;
  className?: string;
}

/**
 * 전체 앱 레이아웃
 * - 헤더 + 메인 콘텐츠 + 하단 네비게이션
 * - 모바일 웹앱 구조
 */
export function AppLayout({
  children,
  headerTitle,
  showHeader = true,
  showBottomNav = true,
  showSearch = true,
  showNotification = true,
  notificationCount = 0,
  onSearchClick,
  onNotificationClick,
  className,
}: AppLayoutProps) {
  return (
    <AppContainer className={className}>
      {/* 헤더 */}
      {showHeader && (
        <AppHeader
          title={headerTitle}
          showSearch={showSearch}
          showNotification={showNotification}
          notificationCount={notificationCount}
          onSearchClick={onSearchClick}
          onNotificationClick={onNotificationClick}
        />
      )}

      {/* 메인 콘텐츠 */}
      <MainContent withHeader={showHeader} withBottomNav={showBottomNav}>
        {children}
      </MainContent>

      {/* 하단 네비게이션 */}
      {showBottomNav && <BottomNavigation />}
    </AppContainer>
  );
}

