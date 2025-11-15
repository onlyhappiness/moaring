"use client";

import { AppLayout, PageWrapper } from "@/components/layout";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ShellDemoPage() {
  return (
    <AppLayout
      headerTitle="Moaring"
      showHeader
      showBottomNav
      showSearch
      showNotification
      notificationCount={3}
      onSearchClick={() => console.log("검색 클릭")}
      onNotificationClick={() => console.log("알림 클릭")}
    >
      <PageWrapper>
        <div className="space-y-6">
          {/* 헤더 설명 */}
          <Card>
            <CardHeader>
              <CardTitle>Application Shell</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <div>
                <strong className="block mb-1">✅ 고정 헤더</strong>
                <p className="text-muted-foreground">
                  상단에 고정되어 스크롤해도 항상 보입니다.
                  <br />- 로고/앱 이름
                  <br />- 검색 버튼
                  <br />- 알림 버튼 (배지 포함)
                </p>
              </div>
              <div>
                <strong className="block mb-1">✅ 하단 네비게이션</strong>
                <p className="text-muted-foreground">
                  하단에 고정된 5개 탭 네비게이션
                  <br />- 홈, 매칭, 채팅, 피드, 프로필
                  <br />- lucide-react 아이콘
                  <br />- 활성 상태 표시
                  <br />- 배지 지원
                </p>
              </div>
              <div>
                <strong className="block mb-1">✅ 반응형</strong>
                <p className="text-muted-foreground">
                  max-w-lg (512px) 제한으로 모바일 웹앱처럼 동작합니다.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* 네비게이션 테스트 */}
          <Card>
            <CardHeader>
              <CardTitle>네비게이션 테스트</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-muted-foreground">
                하단 네비게이션을 클릭하여 페이지 이동을 테스트하세요.
              </p>
              <div className="grid grid-cols-2 gap-2">
                <Button variant="outline" size="sm">
                  <a href="/">홈으로</a>
                </Button>
                <Button variant="outline" size="sm">
                  <a href="/matching">매칭으로</a>
                </Button>
                <Button variant="outline" size="sm">
                  <a href="/chat">채팅으로</a>
                </Button>
                <Button variant="outline" size="sm">
                  <a href="/feed">피드로</a>
                </Button>
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
                아래로 스크롤하여 헤더와 네비게이션이 고정되는지 확인하세요.
              </p>
              {Array.from({ length: 8 }).map((_, i) => (
                <div
                  key={i}
                  className="p-4 mb-3 rounded-lg border bg-card flex items-center gap-3"
                >
                  <Avatar size="md" fallback={`${i + 1}`} />
                  <div className="flex-1">
                    <h4 className="font-semibold mb-1">카드 {i + 1}</h4>
                    <p className="text-sm text-muted-foreground">
                      스크롤 테스트를 위한 더미 콘텐츠입니다.
                    </p>
                  </div>
                  <Badge variant="peer">또래</Badge>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* 컴포넌트 사용법 */}
          <Card>
            <CardHeader>
              <CardTitle>컴포넌트 사용법</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2 text-sm">
                  1. AppLayout (올인원)
                </h4>
                <pre className="text-xs bg-muted p-3 rounded-lg overflow-x-auto">
                  {`<AppLayout
  headerTitle="Moaring"
  showHeader
  showBottomNav
  notificationCount={3}
>
  {/* 페이지 콘텐츠 */}
</AppLayout>`}
                </pre>
              </div>

              <div>
                <h4 className="font-semibold mb-2 text-sm">
                  2. 개별 컴포넌트 조합
                </h4>
                <pre className="text-xs bg-muted p-3 rounded-lg overflow-x-auto">
                  {`<AppContainer>
  <AppHeader title="Moaring" />
  <MainContent>
    {/* 콘텐츠 */}
  </MainContent>
  <BottomNavigation />
</AppContainer>`}
                </pre>
              </div>

              <div>
                <h4 className="font-semibold mb-2 text-sm">3. 헤더 없이</h4>
                <pre className="text-xs bg-muted p-3 rounded-lg overflow-x-auto">
                  {`<AppLayout
  showHeader={false}
  showBottomNav
>
  {/* 콘텐츠 */}
</AppLayout>`}
                </pre>
              </div>
            </CardContent>
          </Card>

          {/* 주요 기능 */}
          <Card>
            <CardHeader>
              <CardTitle>주요 기능</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-primary">✓</span>
                  <span>
                    <strong>활성 상태 관리:</strong> Next.js usePathname()으로
                    현재 경로 자동 감지
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">✓</span>
                  <span>
                    <strong>배지 지원:</strong> 알림, 채팅 개수 표시
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">✓</span>
                  <span>
                    <strong>터치 친화적:</strong> 44px 이상 터치 타겟
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">✓</span>
                  <span>
                    <strong>접근성:</strong> ARIA 라벨, 키보드 네비게이션 지원
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">✓</span>
                  <span>
                    <strong>Safe Area:</strong> iOS/Android 노치 대응
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">✓</span>
                  <span>
                    <strong>반응형:</strong> 모바일 퍼스트, max-w-lg 제한
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </PageWrapper>
    </AppLayout>
  );
}
