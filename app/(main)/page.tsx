"use client";

import { AppLayout, PageWrapper } from "@/components/layout";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Chip } from "@/components/ui/chip";

export default function HomePage() {
  return (
    <AppLayout
      headerTitle="Moaring"
      notificationCount={5}
      onSearchClick={() => console.log("검색")}
      onNotificationClick={() => console.log("알림")}
    >
      <PageWrapper>
        <div className="space-y-6">
          {/* 환영 메시지 */}
          <Card variant="elevated">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-bold mb-2">안녕하세요! 👋</h2>
              <p className="text-muted-foreground">
                오늘도 새로운 친구를 만나보세요
              </p>
            </CardContent>
          </Card>

          {/* 매칭 타입 선택 */}
          <div>
            <h3 className="font-semibold mb-3">어떤 친구를 찾으시나요?</h3>
            <div className="grid grid-cols-3 gap-3">
              <Button
                variant="outline"
                className="h-20 flex-col gap-2 border-none shadow-2xl"
              >
                <span className="text-2xl">👥</span>
                <span className="text-sm">또래 친구</span>
              </Button>
              <Button
                variant="outline"
                className="h-20 flex-col gap-2 border-none shadow-2xl"
              >
                <span className="text-2xl">🏘️</span>
                <span className="text-sm">동네 친구</span>
              </Button>
              <Button
                variant="outline"
                className="h-20 flex-col gap-2 border-none shadow-2xl"
              >
                <span className="text-2xl">💕</span>
                <span className="text-sm">이성 친구</span>
              </Button>
            </div>
          </div>

          {/* 추천 친구 */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold">추천 친구</h3>
              <Button variant="ghost" size="sm">
                더보기
              </Button>
            </div>
            <div className="space-y-3">
              {[
                {
                  name: "김민수",
                  age: 28,
                  location: "강남구",
                  interests: ["러닝", "카페", "영화"],
                  trustLevel: "gold" as const,
                  matchType: "peer" as const,
                },
                {
                  name: "이지은",
                  age: 26,
                  location: "서초구",
                  interests: ["요가", "베이킹", "독서"],
                  trustLevel: "silver" as const,
                  matchType: "local" as const,
                },
                {
                  name: "박서준",
                  age: 30,
                  location: "송파구",
                  interests: ["헬스", "음악", "여행"],
                  trustLevel: "bronze" as const,
                  matchType: "romance" as const,
                },
              ].map((user, i) => (
                <Card key={i} variant="interactive">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <Avatar
                        size="lg"
                        fallback={user.name[0]}
                        phoneVerified={true}
                        locationVerified={true}
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2 mb-1">
                          <div>
                            <h4 className="font-semibold">{user.name}</h4>
                            <p className="text-sm text-muted-foreground">
                              {user.age}세 · {user.location}
                            </p>
                          </div>
                          <Badge variant={user.trustLevel} size="sm">
                            {user.trustLevel === "gold"
                              ? "골드"
                              : user.trustLevel === "silver"
                              ? "실버"
                              : "브론즈"}
                          </Badge>
                        </div>
                        <div className="flex flex-wrap gap-1 mb-3">
                          {user.interests.map((interest) => (
                            <Chip key={interest} size="sm" variant="outline">
                              {interest}
                            </Chip>
                          ))}
                        </div>
                        <div className="flex gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            className="flex-1"
                          >
                            Pass
                          </Button>
                          <Button
                            variant={user.matchType}
                            size="sm"
                            className="flex-1"
                          >
                            Like
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* 통계 */}
          <Card>
            <CardHeader>
              <CardTitle>내 활동</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary">12</div>
                  <div className="text-xs text-muted-foreground">매칭</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">5</div>
                  <div className="text-xs text-muted-foreground">채팅</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">3</div>
                  <div className="text-xs text-muted-foreground">모임</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </PageWrapper>
    </AppLayout>
  );
}
