import { Button } from "@/components/ui/button";
import { DemoSection } from "./demo-section";

export function ButtonDemo() {
  return (
    <DemoSection
      title="Button"
      description="다양한 variants와 sizes를 가진 버튼 컴포넌트"
    >
      <div className="space-y-6">
        {/* Variants */}
        <div>
          <h4 className="text-sm font-semibold mb-3">Variants</h4>
          <div className="flex flex-wrap gap-3">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="success">Success</Button>
            <Button variant="link">Link</Button>
          </div>
        </div>

        {/* Match Type Variants */}
        <div>
          <h4 className="text-sm font-semibold mb-3">매칭 타입</h4>
          <div className="flex flex-wrap gap-3">
            <Button variant="peer">또래 친구</Button>
            <Button variant="local">동네 친구</Button>
            <Button variant="romance">이성 친구</Button>
          </div>
        </div>

        {/* Sizes */}
        <div>
          <h4 className="text-sm font-semibold mb-3">Sizes</h4>
          <div className="flex flex-wrap items-center gap-3">
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
          </div>
        </div>

        {/* With Icons */}
        <div>
          <h4 className="text-sm font-semibold mb-3">With Icons</h4>
          <div className="flex flex-wrap gap-3">
            <Button
              leftIcon={
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
              }
            >
              좋아요
            </Button>
            <Button
              rightIcon={
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
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              }
            >
              다음
            </Button>
            <Button size="icon">
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
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </Button>
          </div>
        </div>

        {/* States */}
        <div>
          <h4 className="text-sm font-semibold mb-3">States</h4>
          <div className="flex flex-wrap gap-3">
            <Button isLoading>Loading...</Button>
            <Button disabled>Disabled</Button>
            <Button fullWidth>Full Width</Button>
          </div>
        </div>
      </div>
    </DemoSection>
  );
}

