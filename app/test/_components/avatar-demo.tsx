import { Avatar } from "@/components/ui/avatar";
import { DemoSection } from "./demo-section";

export function AvatarDemo() {
  return (
    <DemoSection
      title="Avatar"
      description="사용자 프로필 이미지와 인증 배지를 표시하는 컴포넌트"
    >
      <div className="space-y-6">
        {/* Sizes */}
        <div>
          <h4 className="text-sm font-semibold mb-3">Sizes</h4>
          <div className="flex flex-wrap items-end gap-4">
            <Avatar size="sm" fallback="SM" />
            <Avatar size="md" fallback="MD" />
            <Avatar size="lg" fallback="LG" />
            <Avatar size="xl" fallback="XL" />
            <Avatar size="2xl" fallback="2XL" />
            <Avatar size="3xl" fallback="3XL" />
          </div>
        </div>

        {/* With Images */}
        <div>
          <h4 className="text-sm font-semibold mb-3">With Images</h4>
          <div className="flex flex-wrap gap-4">
            <Avatar
              size="xl"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop"
              alt="User 1"
            />
            <Avatar
              size="xl"
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop"
              alt="User 2"
            />
            <Avatar
              size="xl"
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop"
              alt="User 3"
            />
          </div>
        </div>

        {/* With Fallback */}
        <div>
          <h4 className="text-sm font-semibold mb-3">With Fallback Text</h4>
          <div className="flex flex-wrap gap-4">
            <Avatar size="xl" fallback="김" />
            <Avatar size="xl" fallback="이" />
            <Avatar size="xl" fallback="박" />
            <Avatar size="xl" fallback="최" />
          </div>
        </div>

        {/* With Verification Badges */}
        <div>
          <h4 className="text-sm font-semibold mb-3">인증 배지</h4>
          <div className="flex flex-wrap gap-6">
            <div className="text-center">
              <Avatar
                size="2xl"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop"
                phoneVerified={true}
              />
              <p className="text-xs text-muted-foreground mt-2">본인인증</p>
            </div>
            <div className="text-center">
              <Avatar
                size="2xl"
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop"
                locationVerified={true}
              />
              <p className="text-xs text-muted-foreground mt-2">동네인증</p>
            </div>
            <div className="text-center">
              <Avatar
                size="2xl"
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop"
                phoneVerified={true}
                locationVerified={true}
              />
              <p className="text-xs text-muted-foreground mt-2">
                본인+동네인증
              </p>
            </div>
          </div>
        </div>

        {/* User Card Example */}
        <div>
          <h4 className="text-sm font-semibold mb-3">사용 예시 - 프로필 카드</h4>
          <div className="flex items-center gap-4 p-4 rounded-lg border">
            <Avatar
              size="xl"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop"
              phoneVerified={true}
              locationVerified={true}
            />
            <div className="flex-1">
              <h5 className="font-semibold">김민수</h5>
              <p className="text-sm text-muted-foreground">28세 · 서울 강남구</p>
              <div className="flex gap-1 mt-2">
                <span className="text-xs bg-match-peer/10 text-match-peer px-2 py-0.5 rounded-full">
                  또래 친구
                </span>
                <span className="text-xs bg-trust-gold/20 text-trust-gold px-2 py-0.5 rounded-full">
                  골드
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DemoSection>
  );
}

