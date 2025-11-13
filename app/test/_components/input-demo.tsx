import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { DemoSection } from "./demo-section";

export function InputDemo() {
  return (
    <DemoSection
      title="Input & Textarea"
      description="텍스트 입력을 위한 폼 컴포넌트"
    >
      <div className="space-y-6 max-w-2xl">
        {/* Basic Input */}
        <div>
          <h4 className="text-sm font-semibold mb-3">Basic Input</h4>
          <div className="space-y-3">
            <Input placeholder="닉네임을 입력하세요" />
            <Input label="이메일" type="email" placeholder="example@email.com" />
            <Input
              label="비밀번호"
              type="password"
              placeholder="••••••••"
              helperText="8자 이상 입력해주세요"
            />
          </div>
        </div>

        {/* With Icons */}
        <div>
          <h4 className="text-sm font-semibold mb-3">With Icons</h4>
          <div className="space-y-3">
            <Input
              placeholder="검색"
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
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              }
            />
            <Input
              placeholder="위치"
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
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              }
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
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              }
            />
          </div>
        </div>

        {/* Sizes */}
        <div>
          <h4 className="text-sm font-semibold mb-3">Sizes</h4>
          <div className="space-y-3">
            <Input inputSize="sm" placeholder="Small" />
            <Input inputSize="md" placeholder="Medium (default)" />
            <Input inputSize="lg" placeholder="Large" />
          </div>
        </div>

        {/* States */}
        <div>
          <h4 className="text-sm font-semibold mb-3">States</h4>
          <div className="space-y-3">
            <Input
              label="에러 상태"
              error="닉네임은 2자 이상이어야 합니다"
              defaultValue="김"
            />
            <Input variant="success" label="성공 상태" defaultValue="김민수" />
            <Input label="비활성화" disabled defaultValue="Disabled input" />
          </div>
        </div>

        {/* Textarea */}
        <div>
          <h4 className="text-sm font-semibold mb-3">Textarea</h4>
          <div className="space-y-3">
            <Textarea
              label="자기소개"
              placeholder="자기소개를 입력하세요..."
              rows={4}
            />
            <Textarea
              label="포스트 작성"
              placeholder="동네 이웃과 소통해보세요"
              showCount
              maxCount={500}
              defaultValue="안녕하세요! 주말에 같이 운동하실 분 계실까요?"
              rows={3}
            />
            <Textarea
              label="에러 상태"
              error="최소 10자 이상 입력해주세요"
              defaultValue="짧은 글"
              rows={3}
            />
          </div>
        </div>
      </div>
    </DemoSection>
  );
}

