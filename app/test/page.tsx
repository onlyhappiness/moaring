"use client";

import { ToastProvider } from "@/components/ui/toast";
import { AvatarDemo } from "./_components/avatar-demo";
import { BadgeDemo } from "./_components/badge-demo";
import { ButtonDemo } from "./_components/button-demo";
import { CardDemo } from "./_components/card-demo";
import { ChipDemo } from "./_components/chip-demo";
import { DemoSection } from "./_components/demo-section";
import { FormControlsDemo } from "./_components/form-controls-demo";
import { InputDemo } from "./_components/input-demo";
import { ModalDemo } from "./_components/modal-demo";
import { SkeletonDemo } from "./_components/skeleton-demo";
import { SliderDemo } from "./_components/slider-demo";
import { ToastDemo } from "./_components/toast-demo";

export default function TestPage() {
  return (
    <ToastProvider>
      <div className="min-h-screen bg-background">
        {/* Header */}
        <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="flex h-16 items-center px-4">
            <h1 className="text-2xl font-bold">🎨 UI 컴포넌트 데모</h1>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-lg mx-auto px-4 py-8">
          <div className="space-y-8">
            {/* Introduction */}
            <div className="rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 p-6 border border-border">
              <h2 className="text-xl font-semibold mb-2">
                Moaring Design System
              </h2>
              <p className="text-muted-foreground">
                소셜 매칭 애플리케이션을 위한 재사용 가능한 UI 컴포넌트
                라이브러리입니다.
                <br />
                매칭 타입별 색상 시스템 (또래/동네/이성), 신뢰 레벨, 인증 배지를
                포함합니다.
              </p>
            </div>

            {/* Color System */}
            <DemoSection
              title="컬러 시스템"
              description="매칭 타입과 신뢰 레벨에 따른 색상 팔레트"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* 매칭 타입 */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-sm">매칭 타입</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-lg bg-match-peer" />
                      <div>
                        <p className="font-medium text-sm">또래 친구</p>
                        <p className="text-xs text-muted-foreground">Peer</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-lg bg-match-local" />
                      <div>
                        <p className="font-medium text-sm">동네 친구</p>
                        <p className="text-xs text-muted-foreground">Local</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-lg bg-match-romance" />
                      <div>
                        <p className="font-medium text-sm">이성 친구</p>
                        <p className="text-xs text-muted-foreground">Romance</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 신뢰 레벨 */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-sm">신뢰 레벨</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-lg bg-trust-bronze" />
                      <div>
                        <p className="font-medium text-sm">브론즈</p>
                        <p className="text-xs text-muted-foreground">0-99점</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-lg bg-trust-silver" />
                      <div>
                        <p className="font-medium text-sm">실버</p>
                        <p className="text-xs text-muted-foreground">
                          100-499점
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-lg bg-trust-gold" />
                      <div>
                        <p className="font-medium text-sm">골드</p>
                        <p className="text-xs text-muted-foreground">500점+</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 상태 */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-sm">상태 색상</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-lg bg-success" />
                      <div>
                        <p className="font-medium text-sm">Success</p>
                        <p className="text-xs text-muted-foreground">성공</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-lg bg-warning" />
                      <div>
                        <p className="font-medium text-sm">Warning</p>
                        <p className="text-xs text-muted-foreground">경고</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-lg bg-destructive" />
                      <div>
                        <p className="font-medium text-sm">Destructive</p>
                        <p className="text-xs text-muted-foreground">위험</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </DemoSection>

            {/* Buttons */}
            <ButtonDemo />

            {/* Badges */}
            <BadgeDemo />

            {/* Avatars */}
            <AvatarDemo />

            {/* Cards */}
            <CardDemo />

            {/* Inputs */}
            <InputDemo />

            {/* Form Controls */}
            <FormControlsDemo />

            {/* Slider */}
            <SliderDemo />

            {/* Chips */}
            <ChipDemo />

            {/* Skeleton */}
            <SkeletonDemo />

            {/* Modal */}
            <ModalDemo />

            {/* Toast */}
            <ToastDemo />
          </div>
        </main>

        {/* Footer */}
        <footer className="border-t border-gray-200 py-8 mt-16">
          <div className="max-w-lg mx-auto px-4 text-center text-sm text-muted-foreground">
            <p>Moaring Design System © 2025</p>
          </div>
        </footer>
      </div>
    </ToastProvider>
  );
}
