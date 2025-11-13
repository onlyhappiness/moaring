import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DemoSection } from "./demo-section";

export function CardDemo() {
  return (
    <DemoSection title="Card" description="다양한 콘텐츠를 담는 카드 컴포넌트">
      <div className="space-y-6">
        {/* Variants */}
        <div>
          <h4 className="text-sm font-semibold mb-3">Variants</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card variant="default">
              <CardHeader>
                <CardTitle>Default Card</CardTitle>
                <CardDescription>기본 카드 스타일</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm">콘텐츠 영역입니다.</p>
              </CardContent>
            </Card>

            <Card variant="elevated">
              <CardHeader>
                <CardTitle>Elevated Card</CardTitle>
                <CardDescription>그림자가 있는 카드</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm">Hover 시 그림자가 커집니다.</p>
              </CardContent>
            </Card>

            <Card variant="outline">
              <CardHeader>
                <CardTitle>Outline Card</CardTitle>
                <CardDescription>아웃라인 스타일</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm">테두리가 강조된 카드입니다.</p>
              </CardContent>
            </Card>

            <Card variant="interactive">
              <CardHeader>
                <CardTitle>Interactive Card</CardTitle>
                <CardDescription>클릭 가능한 카드</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm">Hover 시 효과가 있습니다.</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Profile Card Example */}
        <div>
          <h4 className="text-sm font-semibold mb-3">프로필 카드 예시</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card variant="elevated">
              <CardContent className="pt-6">
                <div className="gap-4">
                  <div className="flex items-start justify-center">
                    <Avatar
                      size="2xl"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400"
                      phoneVerified={true}
                      locationVerified={true}
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-semibold">김민수</h4>
                        <p className="text-sm text-muted-foreground">
                          28세 · 서울 강남구
                        </p>
                      </div>
                      <Badge variant="gold">골드</Badge>
                    </div>
                    <p className="text-sm mt-3">
                      운동과 카페 투어를 좋아합니다! 같이 즐길 친구 찾아요 😊
                    </p>
                    <div className="flex flex-wrap gap-1 mt-3">
                      <Badge size="sm" variant="outline">
                        러닝
                      </Badge>
                      <Badge size="sm" variant="outline">
                        카페
                      </Badge>
                      <Badge size="sm" variant="outline">
                        영화
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="gap-2">
                <Button variant="outline" className="flex-1">
                  Pass
                </Button>
                <Button variant="peer" className="flex-1">
                  Like
                </Button>
              </CardFooter>
            </Card>

            <Card variant="elevated">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <Avatar
                    size="xl"
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400"
                    phoneVerified={true}
                    locationVerified={true}
                  />
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-semibold">이지은</h4>
                        <p className="text-sm text-muted-foreground">
                          26세 · 서울 서초구
                        </p>
                      </div>
                      <Badge variant="silver">실버</Badge>
                    </div>
                    <p className="text-sm mt-3">
                      요가와 베이킹에 관심이 많아요. 동네 친구 만들고 싶어요!
                    </p>
                    <div className="flex flex-wrap gap-1 mt-3">
                      <Badge size="sm" variant="outline">
                        요가
                      </Badge>
                      <Badge size="sm" variant="outline">
                        베이킹
                      </Badge>
                      <Badge size="sm" variant="outline">
                        독서
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="gap-2">
                <Button variant="outline" className="flex-1">
                  Pass
                </Button>
                <Button variant="romance" className="flex-1">
                  Like
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>

        {/* Post Card Example */}
        <div>
          <h4 className="text-sm font-semibold mb-3">포스트 카드 예시</h4>
          <Card variant="default">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Avatar size="md" fallback="김" />
                <div className="flex-1">
                  <p className="font-medium text-sm">김민수</p>
                  <p className="text-xs text-muted-foreground">
                    강남구 · 1시간 전
                  </p>
                </div>
                <Badge variant="local" size="sm">
                  동네 이야기
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm mb-4">
                주말에 같이 러닝하실 분 계실까요? 올림픽공원 코스 추천합니다!
              </p>
              <div className="rounded-lg bg-muted h-48 flex items-center justify-center text-muted-foreground text-sm">
                이미지 영역
              </div>
            </CardContent>
            <CardFooter className="justify-between">
              <div className="flex gap-4 text-sm text-muted-foreground">
                <button className="flex items-center gap-1 hover:text-foreground">
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                  <span>12</span>
                </button>
                <button className="flex items-center gap-1 hover:text-foreground">
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                  <span>5</span>
                </button>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </DemoSection>
  );
}
