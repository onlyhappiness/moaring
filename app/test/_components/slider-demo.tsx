"use client";

import * as React from "react";
import { Slider } from "@/components/ui/slider";
import { DemoSection } from "./demo-section";

export function SliderDemo() {
  const [ageRange, setAgeRange] = React.useState([25, 35]);
  const [distanceRange, setDistanceRange] = React.useState([1, 5]);
  const [priceRange, setPriceRange] = React.useState([10000, 50000]);

  return (
    <DemoSection
      title="Range Slider"
      description="범위를 선택하는 듀얼 핸들 슬라이더 컴포넌트"
    >
      <div className="space-y-8 max-w-2xl">
        {/* Age Range */}
        <div>
          <h4 className="text-sm font-semibold mb-3">나이 범위 선택</h4>
          <Slider
            min={19}
            max={60}
            step={1}
            value={ageRange}
            onValueChange={setAgeRange}
            label="선호 나이대"
            formatValue={(v) => `${v}세`}
          />
        </div>

        {/* Distance Range */}
        <div>
          <h4 className="text-sm font-semibold mb-3">거리 범위 선택</h4>
          <Slider
            min={1}
            max={50}
            step={1}
            value={distanceRange}
            onValueChange={setDistanceRange}
            label="최대 거리"
            formatValue={(v) => `${v}km`}
          />
        </div>

        {/* Price Range */}
        <div>
          <h4 className="text-sm font-semibold mb-3">가격 범위 선택</h4>
          <Slider
            min={0}
            max={100000}
            step={5000}
            value={priceRange}
            onValueChange={setPriceRange}
            label="예산"
            formatValue={(v) => `${(v / 10000).toFixed(1)}만원`}
          />
        </div>

        {/* Without Values */}
        <div>
          <h4 className="text-sm font-semibold mb-3">값 표시 없이</h4>
          <Slider
            min={0}
            max={100}
            defaultValue={[30, 70]}
            label="비율"
            showValues={false}
          />
        </div>

        {/* Disabled */}
        <div>
          <h4 className="text-sm font-semibold mb-3">비활성화</h4>
          <Slider
            min={0}
            max={100}
            defaultValue={[20, 80]}
            label="비활성화 상태"
            disabled
          />
        </div>

        {/* Filter Card Example */}
        <div>
          <h4 className="text-sm font-semibold mb-3">사용 예시 - 필터 카드</h4>
          <div className="rounded-lg border p-6 space-y-6 bg-card">
            <div>
              <h5 className="font-semibold mb-4">매칭 필터 설정</h5>
            </div>
            <Slider
              min={19}
              max={60}
              value={ageRange}
              onValueChange={setAgeRange}
              label="나이"
              formatValue={(v) => `${v}세`}
            />
            <Slider
              min={1}
              max={50}
              value={distanceRange}
              onValueChange={setDistanceRange}
              label="거리"
              formatValue={(v) => `${v}km`}
            />
            <div className="pt-4 border-t">
              <p className="text-sm text-muted-foreground">
                {ageRange[0]}세 ~ {ageRange[1]}세, 최대 {distanceRange[1]}km 이내의
                친구를 찾습니다
              </p>
            </div>
          </div>
        </div>
      </div>
    </DemoSection>
  );
}

