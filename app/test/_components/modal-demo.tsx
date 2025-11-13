"use client";

import * as React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalTitle,
  ModalDescription,
  ModalBody,
  ModalFooter,
} from "@/components/ui/modal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { DemoSection } from "./demo-section";

export function ModalDemo() {
  const [basicOpen, setBasicOpen] = React.useState(false);
  const [formOpen, setFormOpen] = React.useState(false);
  const [confirmOpen, setConfirmOpen] = React.useState(false);
  const [largeOpen, setLargeOpen] = React.useState(false);

  return (
    <DemoSection
      title="Modal / Dialog"
      description="오버레이 형태의 모달 다이얼로그 컴포넌트"
    >
      <div className="space-y-6">
        {/* Basic Modal */}
        <div>
          <h4 className="text-sm font-semibold mb-3">Basic Modal</h4>
          <Button onClick={() => setBasicOpen(true)}>모달 열기</Button>

          <Modal open={basicOpen} onOpenChange={setBasicOpen}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>
                <ModalTitle>모달 제목</ModalTitle>
                <ModalDescription>
                  모달의 설명 텍스트가 여기에 표시됩니다.
                </ModalDescription>
              </ModalHeader>
              <ModalBody>
                <p className="text-sm">
                  모달의 본문 내용입니다. 여기에 다양한 콘텐츠를 추가할 수
                  있습니다.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button variant="outline" onClick={() => setBasicOpen(false)}>
                  취소
                </Button>
                <Button onClick={() => setBasicOpen(false)}>확인</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </div>

        {/* Form Modal */}
        <div>
          <h4 className="text-sm font-semibold mb-3">폼이 있는 모달</h4>
          <Button variant="peer" onClick={() => setFormOpen(true)}>
            프로필 수정
          </Button>

          <Modal open={formOpen} onOpenChange={setFormOpen}>
            <ModalOverlay />
            <ModalContent size="lg">
              <ModalHeader>
                <ModalTitle>프로필 수정</ModalTitle>
                <ModalDescription>
                  프로필 정보를 수정할 수 있습니다.
                </ModalDescription>
              </ModalHeader>
              <ModalBody>
                <div className="space-y-4">
                  <Input label="닉네임" defaultValue="김민수" />
                  <Input label="나이" type="number" defaultValue="28" />
                  <Textarea
                    label="자기소개"
                    defaultValue="운동과 카페 투어를 좋아합니다!"
                    rows={4}
                  />
                </div>
              </ModalBody>
              <ModalFooter>
                <Button variant="outline" onClick={() => setFormOpen(false)}>
                  취소
                </Button>
                <Button onClick={() => setFormOpen(false)}>저장</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </div>

        {/* Confirm Modal */}
        <div>
          <h4 className="text-sm font-semibold mb-3">확인 모달</h4>
          <Button variant="destructive" onClick={() => setConfirmOpen(true)}>
            차단하기
          </Button>

          <Modal open={confirmOpen} onOpenChange={setConfirmOpen}>
            <ModalOverlay />
            <ModalContent size="sm">
              <ModalHeader>
                <ModalTitle>정말 차단하시겠습니까?</ModalTitle>
                <ModalDescription>
                  차단된 사용자는 회원님의 프로필을 볼 수 없으며, 메시지를 보낼
                  수 없습니다.
                </ModalDescription>
              </ModalHeader>
              <ModalFooter>
                <Button
                  variant="outline"
                  onClick={() => setConfirmOpen(false)}
                >
                  취소
                </Button>
                <Button
                  variant="destructive"
                  onClick={() => {
                    alert("차단되었습니다");
                    setConfirmOpen(false);
                  }}
                >
                  차단
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </div>

        {/* Large Modal */}
        <div>
          <h4 className="text-sm font-semibold mb-3">큰 모달</h4>
          <Button variant="local" onClick={() => setLargeOpen(true)}>
            이용약관 보기
          </Button>

          <Modal open={largeOpen} onOpenChange={setLargeOpen}>
            <ModalOverlay />
            <ModalContent size="xl">
              <ModalHeader>
                <ModalTitle>서비스 이용약관</ModalTitle>
              </ModalHeader>
              <ModalBody>
                <div className="prose prose-sm max-w-none space-y-4">
                  <h4 className="font-semibold">제1조 (목적)</h4>
                  <p className="text-sm text-muted-foreground">
                    이 약관은 회사가 제공하는 서비스의 이용과 관련하여 회사와
                    이용자 간의 권리, 의무 및 책임사항, 기타 필요한 사항을
                    규정함을 목적으로 합니다.
                  </p>

                  <h4 className="font-semibold">제2조 (정의)</h4>
                  <p className="text-sm text-muted-foreground">
                    이 약관에서 사용하는 용어의 정의는 다음과 같습니다.
                    <br />
                    1. "서비스"란 회사가 제공하는 소셜 매칭 플랫폼을 말합니다.
                    <br />
                    2. "이용자"란 본 약관에 따라 회사가 제공하는 서비스를 받는
                    자를 말합니다.
                  </p>

                  <h4 className="font-semibold">제3조 (약관의 효력 및 변경)</h4>
                  <p className="text-sm text-muted-foreground">
                    본 약관은 서비스를 이용하고자 하는 모든 이용자에 대하여
                    그 효력을 발생합니다.
                  </p>

                  {/* 더 많은 약관 내용... */}
                </div>
              </ModalBody>
              <ModalFooter>
                <Button fullWidth onClick={() => setLargeOpen(false)}>
                  확인
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </div>

        {/* Size Variants */}
        <div>
          <h4 className="text-sm font-semibold mb-3">모달 크기</h4>
          <div className="flex flex-wrap gap-2">
            <Button
              size="sm"
              variant="outline"
              onClick={() => setBasicOpen(true)}
            >
              Small
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={() => setFormOpen(true)}
            >
              Medium
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={() => setLargeOpen(true)}
            >
              Large / XL
            </Button>
          </div>
        </div>
      </div>
    </DemoSection>
  );
}

