"use client";

import { AppLayout, PageWrapper } from "@/components/layout";
import { Card, CardContent } from "@/components/ui/card";

export default function ChatPage() {
  return (
    <AppLayout headerTitle="채팅">
      <PageWrapper>
        <Card>
          <CardContent className="p-12 text-center">
            <div className="text-6xl mb-4">💬</div>
            <h2 className="text-xl font-bold mb-2">채팅 페이지</h2>
            <p className="text-muted-foreground">준비 중입니다</p>
          </CardContent>
        </Card>
      </PageWrapper>
    </AppLayout>
  );
}

