import { Badge } from "@/components/ui/badge";
import { DemoSection } from "./demo-section";

export function BadgeDemo() {
  return (
    <DemoSection
      title="Badge"
      description="매칭 타입, 신뢰 레벨, 상태를 나타내는 배지 컴포넌트"
    >
      <div className="space-y-6">
        {/* Basic Variants */}
        <div>
          <h4 className="text-sm font-semibold mb-3">Basic Variants</h4>
          <div className="flex flex-wrap gap-2">
            <Badge variant="default">Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="outline">Outline</Badge>
            <Badge variant="destructive">Destructive</Badge>
          </div>
        </div>

        {/* Match Types */}
        <div>
          <h4 className="text-sm font-semibold mb-3">매칭 타입</h4>
          <div className="flex flex-wrap gap-2">
            <Badge variant="peer">또래 친구</Badge>
            <Badge variant="local">동네 친구</Badge>
            <Badge variant="romance">이성 친구</Badge>
          </div>
        </div>

        {/* Trust Levels */}
        <div>
          <h4 className="text-sm font-semibold mb-3">신뢰 레벨</h4>
          <div className="flex flex-wrap gap-2">
            <Badge variant="bronze">브론즈</Badge>
            <Badge variant="silver">실버</Badge>
            <Badge variant="gold">골드</Badge>
          </div>
        </div>

        {/* Status */}
        <div>
          <h4 className="text-sm font-semibold mb-3">상태</h4>
          <div className="flex flex-wrap gap-2">
            <Badge variant="success">성공</Badge>
            <Badge variant="warning">경고</Badge>
            <Badge variant="info">정보</Badge>
            <Badge variant="verified">인증완료</Badge>
          </div>
        </div>

        {/* With Icons */}
        <div>
          <h4 className="text-sm font-semibold mb-3">With Icons</h4>
          <div className="flex flex-wrap gap-2">
            <Badge
              variant="peer"
              icon={
                <svg
                  className="h-3 w-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>
              }
            >
              25-30세
            </Badge>
            <Badge
              variant="local"
              icon={
                <svg
                  className="h-3 w-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
              }
            >
              2km 이내
            </Badge>
          </div>
        </div>

        {/* Removable */}
        <div>
          <h4 className="text-sm font-semibold mb-3">Removable</h4>
          <div className="flex flex-wrap gap-2">
            <Badge onRemove={() => alert("러닝 제거됨")}>러닝</Badge>
            <Badge variant="peer" onRemove={() => alert("헬스 제거됨")}>
              헬스
            </Badge>
            <Badge variant="local" onRemove={() => alert("카페 제거됨")}>
              카페
            </Badge>
          </div>
        </div>

        {/* Sizes */}
        <div>
          <h4 className="text-sm font-semibold mb-3">Sizes</h4>
          <div className="flex flex-wrap items-center gap-2">
            <Badge size="sm">Small</Badge>
            <Badge size="md">Medium</Badge>
            <Badge size="lg">Large</Badge>
          </div>
        </div>
      </div>
    </DemoSection>
  );
}

