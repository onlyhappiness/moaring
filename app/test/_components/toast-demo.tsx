"use client";

import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/toast";
import { DemoSection } from "./demo-section";

export function ToastDemo() {
  const { addToast } = useToast();

  return (
    <DemoSection
      title="Toast / Snackbar"
      description="일시적인 알림 메시지를 표시하는 토스트 컴포넌트"
    >
      <div className="space-y-6">
        {/* Variants */}
        <div>
          <h4 className="text-sm font-semibold mb-3">Variants</h4>
          <div className="flex flex-wrap gap-2">
            <Button
              variant="outline"
              onClick={() =>
                addToast({
                  title: "기본 알림",
                  description: "일반적인 알림 메시지입니다.",
                })
              }
            >
              Default
            </Button>
            <Button
              variant="success"
              onClick={() =>
                addToast({
                  variant: "success",
                  title: "매칭 성공!",
                  description: "새로운 친구와 연결되었습니다.",
                })
              }
            >
              Success
            </Button>
            <Button
              variant="destructive"
              onClick={() =>
                addToast({
                  variant: "error",
                  title: "오류 발생",
                  description: "네트워크 연결을 확인해주세요.",
                })
              }
            >
              Error
            </Button>
            <Button
              variant="outline"
              onClick={() =>
                addToast({
                  variant: "warning",
                  title: "주의",
                  description: "일일 좋아요 횟수가 5회 남았습니다.",
                })
              }
            >
              Warning
            </Button>
            <Button
              variant="outline"
              onClick={() =>
                addToast({
                  variant: "info",
                  title: "알림",
                  description: "새로운 메시지가 도착했습니다.",
                })
              }
            >
              Info
            </Button>
          </div>
        </div>

        {/* With Action */}
        <div>
          <h4 className="text-sm font-semibold mb-3">액션 버튼 포함</h4>
          <Button
            variant="peer"
            onClick={() =>
              addToast({
                variant: "success",
                title: "매칭 성공!",
                description: "김민수님과 매칭되었습니다.",
                action: {
                  label: "대화하기",
                  onClick: () => alert("채팅방으로 이동"),
                },
              })
            }
          >
            액션 토스트 표시
          </Button>
        </div>

        {/* Different Durations */}
        <div>
          <h4 className="text-sm font-semibold mb-3">표시 시간 설정</h4>
          <div className="flex flex-wrap gap-2">
            <Button
              size="sm"
              variant="outline"
              onClick={() =>
                addToast({
                  title: "빠른 알림",
                  description: "1초 후 사라집니다",
                  duration: 1000,
                })
              }
            >
              1초
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={() =>
                addToast({
                  title: "기본 알림",
                  description: "3초 후 사라집니다",
                  duration: 3000,
                })
              }
            >
              3초 (기본)
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={() =>
                addToast({
                  title: "긴 알림",
                  description: "10초 후 사라집니다",
                  duration: 10000,
                })
              }
            >
              10초
            </Button>
          </div>
        </div>

        {/* Multiple Toasts */}
        <div>
          <h4 className="text-sm font-semibold mb-3">여러 개 동시 표시</h4>
          <Button
            variant="local"
            onClick={() => {
              addToast({
                variant: "info",
                title: "첫 번째 알림",
              });
              setTimeout(() => {
                addToast({
                  variant: "success",
                  title: "두 번째 알림",
                });
              }, 500);
              setTimeout(() => {
                addToast({
                  variant: "warning",
                  title: "세 번째 알림",
                });
              }, 1000);
            }}
          >
            3개 연속 표시
          </Button>
        </div>

        {/* Real World Examples */}
        <div>
          <h4 className="text-sm font-semibold mb-3">실제 사용 예시</h4>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            <Button
              size="sm"
              variant="outline"
              onClick={() =>
                addToast({
                  variant: "success",
                  title: "좋아요 전송",
                  description: "상대방에게 좋아요를 보냈습니다.",
                })
              }
            >
              좋아요 보내기
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={() =>
                addToast({
                  variant: "success",
                  title: "프로필 저장",
                  description: "프로필이 성공적으로 업데이트되었습니다.",
                })
              }
            >
              프로필 저장
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={() =>
                addToast({
                  variant: "error",
                  title: "전송 실패",
                  description: "메시지 전송에 실패했습니다.",
                })
              }
            >
              메시지 전송 실패
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={() =>
                addToast({
                  variant: "warning",
                  title: "제한 도달",
                  description: "일일 좋아요 제한에 도달했습니다.",
                })
              }
            >
              좋아요 제한
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={() =>
                addToast({
                  variant: "info",
                  title: "새 메시지",
                  description: "이지은님이 메시지를 보냈습니다.",
                  action: {
                    label: "보기",
                    onClick: () => alert("메시지로 이동"),
                  },
                })
              }
            >
              새 메시지 알림
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={() =>
                addToast({
                  variant: "success",
                  title: "사용자 차단",
                  description: "해당 사용자를 차단했습니다.",
                })
              }
            >
              사용자 차단
            </Button>
          </div>
        </div>
      </div>
    </DemoSection>
  );
}

