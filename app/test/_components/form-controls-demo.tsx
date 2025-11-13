"use client";

import * as React from "react";
import { Select } from "@/components/ui/select";
import { Toggle } from "@/components/ui/toggle";
import { Checkbox } from "@/components/ui/checkbox";
import { DemoSection } from "./demo-section";

export function FormControlsDemo() {
  const [toggle1, setToggle1] = React.useState(false);
  const [toggle2, setToggle2] = React.useState(true);
  const [toggle3, setToggle3] = React.useState(false);

  return (
    <DemoSection
      title="Form Controls"
      description="Select, Toggle, Checkbox 등의 폼 컨트롤 컴포넌트"
    >
      <div className="space-y-8 max-w-2xl">
        {/* Select */}
        <div>
          <h4 className="text-sm font-semibold mb-3">Select</h4>
          <div className="space-y-3">
            <Select
              label="매칭 타입 선택"
              placeholder="매칭 타입을 선택하세요"
              options={[
                { value: "peer", label: "또래 친구" },
                { value: "local", label: "동네 친구" },
                { value: "romance", label: "이성 친구" },
              ]}
            />
            <Select
              label="나이대"
              options={[
                { value: "20s", label: "20-29세" },
                { value: "30s", label: "30-39세" },
                { value: "40s", label: "40-49세" },
                { value: "50s", label: "50세 이상" },
              ]}
              defaultValue="20s"
            />
            <Select
              label="에러 상태"
              error="옵션을 선택해주세요"
              options={[
                { value: "1", label: "옵션 1" },
                { value: "2", label: "옵션 2" },
              ]}
            />
          </div>
        </div>

        {/* Toggle */}
        <div>
          <h4 className="text-sm font-semibold mb-3">Toggle (Switch)</h4>
          <div className="space-y-4">
            <Toggle
              checked={toggle1}
              onCheckedChange={setToggle1}
              label="푸시 알림 받기"
              description="새로운 매칭과 메시지 알림을 받습니다"
            />
            <Toggle
              checked={toggle2}
              onCheckedChange={setToggle2}
              label="위치 정보 사용"
              description="주변 친구를 찾기 위해 위치 정보를 사용합니다"
            />
            <Toggle
              checked={toggle3}
              onCheckedChange={setToggle3}
              label="마케팅 정보 수신"
              description="이벤트 및 프로모션 소식을 받습니다"
            />
            <Toggle
              checked={false}
              disabled
              label="비활성화 상태"
              description="이 기능은 현재 사용할 수 없습니다"
            />
          </div>
        </div>

        {/* Checkbox */}
        <div>
          <h4 className="text-sm font-semibold mb-3">Checkbox</h4>
          <div className="space-y-4">
            <Checkbox label="전체 동의" />
            <div className="ml-6 space-y-3">
              <Checkbox
                label="(필수) 서비스 이용약관 동의"
                description="서비스 이용을 위해 필수로 동의해야 합니다"
              />
              <Checkbox
                label="(필수) 개인정보 처리방침 동의"
                description="개인정보 수집 및 이용에 동의합니다"
              />
              <Checkbox
                label="(선택) 마케팅 정보 수신 동의"
                description="이벤트, 프로모션 등의 마케팅 정보를 받습니다"
              />
            </div>
            <Checkbox
              label="에러 상태"
              error="필수 항목에 동의해주세요"
            />
          </div>
        </div>

        {/* Interest Selection Example */}
        <div>
          <h4 className="text-sm font-semibold mb-3">사용 예시 - 관심사 선택</h4>
          <div className="space-y-3">
            <p className="text-sm text-muted-foreground">
              관심 있는 활동을 선택해주세요 (최소 3개)
            </p>
            <div className="grid grid-cols-2 gap-3">
              <Checkbox label="러닝" />
              <Checkbox label="헬스" />
              <Checkbox label="요가" />
              <Checkbox label="등산" />
              <Checkbox label="카페 투어" />
              <Checkbox label="영화 감상" />
              <Checkbox label="독서" />
              <Checkbox label="요리" />
            </div>
          </div>
        </div>
      </div>
    </DemoSection>
  );
}

