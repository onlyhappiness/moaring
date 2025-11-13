"use client";

import * as React from "react";
import { Chip } from "@/components/ui/chip";
import { DemoSection } from "./demo-section";

export function ChipDemo() {
  const [selectedInterests, setSelectedInterests] = React.useState<string[]>([
    "러닝",
    "카페",
  ]);

  const interests = [
    "러닝",
    "헬스",
    "요가",
    "카페",
    "영화",
    "독서",
    "요리",
    "여행",
  ];

  const toggleInterest = (interest: string) => {
    setSelectedInterests((prev) =>
      prev.includes(interest)
        ? prev.filter((i) => i !== interest)
        : [...prev, interest]
    );
  };

  return (
    <DemoSection
      title="Chip"
      description="태그와 필터를 표시하는 칩 컴포넌트"
    >
      <div className="space-y-6">
        {/* Variants */}
        <div>
          <h4 className="text-sm font-semibold mb-3">Variants</h4>
          <div className="flex flex-wrap gap-2">
            <Chip variant="default">Default</Chip>
            <Chip variant="primary">Primary</Chip>
            <Chip variant="outline">Outline</Chip>
            <Chip variant="peer">또래 친구</Chip>
            <Chip variant="local">동네 친구</Chip>
            <Chip variant="romance">이성 친구</Chip>
          </div>
        </div>

        {/* Sizes */}
        <div>
          <h4 className="text-sm font-semibold mb-3">Sizes</h4>
          <div className="flex flex-wrap items-center gap-2">
            <Chip size="sm">Small</Chip>
            <Chip size="md">Medium</Chip>
            <Chip size="lg">Large</Chip>
          </div>
        </div>

        {/* With Icons */}
        <div>
          <h4 className="text-sm font-semibold mb-3">With Icons</h4>
          <div className="flex flex-wrap gap-2">
            <Chip
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
              서울 강남구
            </Chip>
            <Chip
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
            </Chip>
          </div>
        </div>

        {/* Removable */}
        <div>
          <h4 className="text-sm font-semibold mb-3">Removable</h4>
          <div className="flex flex-wrap gap-2">
            <Chip onRemove={() => alert("제거됨")}>러닝</Chip>
            <Chip variant="peer" onRemove={() => alert("제거됨")}>
              헬스
            </Chip>
            <Chip variant="local" onRemove={() => alert("제거됨")}>
              카페
            </Chip>
          </div>
        </div>

        {/* Interactive (Selectable) */}
        <div>
          <h4 className="text-sm font-semibold mb-3">
            Interactive - 관심사 선택
          </h4>
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">
              관심 있는 활동을 선택하세요
            </p>
            <div className="flex flex-wrap gap-2">
              {interests.map((interest) => (
                <Chip
                  key={interest}
                  interactive
                  selected={selectedInterests.includes(interest)}
                  onClick={() => toggleInterest(interest)}
                >
                  {interest}
                </Chip>
              ))}
            </div>
            <p className="text-sm text-muted-foreground mt-3">
              선택된 관심사: {selectedInterests.join(", ") || "없음"}
            </p>
          </div>
        </div>

        {/* Profile Example */}
        <div>
          <h4 className="text-sm font-semibold mb-3">
            사용 예시 - 프로필 관심사
          </h4>
          <div className="rounded-lg border p-6 bg-card">
            <div className="space-y-4">
              <div>
                <h5 className="font-semibold mb-2">김민수</h5>
                <p className="text-sm text-muted-foreground mb-3">
                  28세 · 서울 강남구
                </p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-2">관심사</p>
                <div className="flex flex-wrap gap-1.5">
                  <Chip size="sm" variant="outline">
                    러닝
                  </Chip>
                  <Chip size="sm" variant="outline">
                    헬스
                  </Chip>
                  <Chip size="sm" variant="outline">
                    카페 투어
                  </Chip>
                  <Chip size="sm" variant="outline">
                    영화
                  </Chip>
                  <Chip size="sm" variant="outline">
                    독서
                  </Chip>
                </div>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-2">매칭 타입</p>
                <div className="flex flex-wrap gap-1.5">
                  <Chip size="sm" variant="peer">
                    또래 친구
                  </Chip>
                  <Chip size="sm" variant="local">
                    동네 친구
                  </Chip>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DemoSection>
  );
}

