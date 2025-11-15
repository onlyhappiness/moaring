"use client";

import { AppContainer, MainContent, PageWrapper } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function LayoutDemoPage() {
  return (
    <AppContainer>
      {/* 임시 헤더 */}
      <header className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-lg z-[var(--z-sticky)] bg-background/95 backdrop-blur border-b">
        <div className="h-16 px-4 flex items-center justify-between">
          <h1 className="text-xl font-bold">레이아웃 데모</h1>
          <Button size="icon-sm" variant="ghost">
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
          </Button>
        </div>
      </header>

      {/* 메인 콘텐츠 */}
      <MainContent withHeader withBottomNav>
        <PageWrapper>
          <div className="space-y-6">
            {/* 설명 */}
            <Card>
              <CardHeader>
                <CardTitle>모바일 웹앱 레이아웃</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div>
                  <strong className="block mb-1">✅ max-w-lg (512px)</strong>
                  <p className="text-muted-foreground">
                    데스크톱에서 최대 512px로 제한되어 중앙에 표시됩니다.
                  </p>
                </div>
                <div>
                  <strong className="block mb-1">✅ 중앙 정렬</strong>
                  <p className="text-muted-foreground">
                    큰 화면에서 앱이 중앙에 위치하며 양옆에 여백이 생깁니다.
                  </p>
                </div>
                <div>
                  <strong className="block mb-1">✅ 그림자 효과</strong>
                  <p className="text-muted-foreground">
                    데스크톱에서 앱처럼 보이도록 그림자가 추가됩니다.
                  </p>
                </div>
                <div>
                  <strong className="block mb-1">✅ Safe Area</strong>
                  <p className="text-muted-foreground">
                    iOS/Android 노치를 고려한 Safe Area Inset 지원
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* 스크롤 테스트 */}
            <Card>
              <CardHeader>
                <CardTitle>스크롤 테스트</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  아래로 스크롤하여 레이아웃 동작을 확인하세요.
                </p>
                {Array.from({ length: 10 }).map((_, i) => (
                  <div
                    key={i}
                    className="p-4 mb-3 rounded-lg border bg-card hover:bg-accent transition-colors"
                  >
                    <h4 className="font-semibold mb-1">카드 {i + 1}</h4>
                    <p className="text-sm text-muted-foreground">
                      스크롤 가능한 콘텐츠입니다. 헤더는 상단에 고정되고, 하단
                      네비게이션은 하단에 고정됩니다.
                    </p>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* 레이아웃 컴포넌트 설명 */}
            <Card>
              <CardHeader>
                <CardTitle>레이아웃 컴포넌트</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm">
                <div>
                  <code className="text-xs bg-muted px-2 py-1 rounded">
                    AppContainer
                  </code>
                  <p className="text-muted-foreground mt-1">
                    최상위 컨테이너. max-w-lg 제한과 중앙 정렬을 담당합니다.
                  </p>
                </div>
                <div>
                  <code className="text-xs bg-muted px-2 py-1 rounded">
                    MainContent
                  </code>
                  <p className="text-muted-foreground mt-1">
                    메인 콘텐츠 영역. 헤더와 하단 네비게이션 사이의 스크롤
                    가능한 영역입니다.
                  </p>
                </div>
                <div>
                  <code className="text-xs bg-muted px-2 py-1 rounded">
                    PageWrapper
                  </code>
                  <p className="text-muted-foreground mt-1">
                    페이지 콘텐츠 래퍼. 일관된 패딩과 최대 너비를 제공합니다.
                  </p>
                </div>
                <div>
                  <code className="text-xs bg-muted px-2 py-1 rounded">
                    ScrollArea
                  </code>
                  <p className="text-muted-foreground mt-1">
                    스크롤 가능한 영역. 스크롤바 숨김 옵션을 제공합니다.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* 반응형 테스트 */}
            <Card>
              <CardHeader>
                <CardTitle>반응형 테스트</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground">
                  브라우저 창 크기를 조절하여 반응형 동작을 확인하세요:
                </p>
                <ul className="text-sm space-y-2 list-disc list-inside text-muted-foreground">
                  <li>
                    <strong>모바일 (~ 512px)</strong>: 전체 너비 사용
                  </li>
                  <li>
                    <strong>태블릿/데스크톱 (512px ~)</strong>: 512px로 제한되어
                    중앙 정렬
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </PageWrapper>
      </MainContent>

      {/* 임시 하단 네비게이션 */}
      <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-lg z-[var(--z-fixed)] bg-background border-t">
        <div className="h-16 flex items-center justify-around px-4">
          {["홈", "매칭", "채팅", "피드", "프로필"].map((label) => (
            <button
              key={label}
              className="flex flex-col items-center gap-1 flex-1 touch-target"
            >
              <div className="size-8 rounded-full bg-muted" />
              <span className="text-xs text-muted-foreground">{label}</span>
            </button>
          ))}
        </div>
      </nav>
    </AppContainer>
  );
}
