import {
  Skeleton,
  SkeletonCard,
  SkeletonProfileCard,
  SkeletonList,
} from "@/components/ui/skeleton";
import { DemoSection } from "./demo-section";

export function SkeletonDemo() {
  return (
    <DemoSection
      title="Skeleton Loader"
      description="콘텐츠 로딩 중 표시되는 스켈레톤 컴포넌트"
    >
      <div className="space-y-6">
        {/* Basic Shapes */}
        <div>
          <h4 className="text-sm font-semibold mb-3">Basic Shapes</h4>
          <div className="space-y-3">
            <Skeleton variant="text" className="w-3/4" />
            <Skeleton variant="text" className="w-1/2" />
            <Skeleton variant="rectangular" className="w-full h-32" />
            <div className="flex gap-3">
              <Skeleton variant="circular" className="w-12 h-12" />
              <Skeleton variant="circular" className="w-12 h-12" />
              <Skeleton variant="circular" className="w-12 h-12" />
            </div>
          </div>
        </div>

        {/* Profile Card Loading */}
        <div>
          <h4 className="text-sm font-semibold mb-3">프로필 카드 로딩</h4>
          <SkeletonProfileCard />
        </div>

        {/* Card Loading */}
        <div>
          <h4 className="text-sm font-semibold mb-3">카드 로딩</h4>
          <SkeletonCard />
        </div>

        {/* List Loading */}
        <div>
          <h4 className="text-sm font-semibold mb-3">리스트 로딩</h4>
          <SkeletonList count={3} />
        </div>

        {/* Custom Pattern */}
        <div>
          <h4 className="text-sm font-semibold mb-3">커스텀 패턴 - 매칭 카드</h4>
          <div className="rounded-lg border p-6 space-y-4">
            <div className="flex items-start gap-4">
              <Skeleton variant="circular" className="w-16 h-16" />
              <div className="flex-1 space-y-2">
                <Skeleton variant="text" className="w-32 h-5" />
                <Skeleton variant="text" className="w-48 h-4" />
              </div>
            </div>
            <Skeleton variant="rectangular" className="w-full h-24" />
            <div className="flex gap-2">
              <Skeleton variant="rectangular" className="h-6 w-16" />
              <Skeleton variant="rectangular" className="h-6 w-16" />
              <Skeleton variant="rectangular" className="h-6 w-20" />
            </div>
            <div className="flex gap-2 pt-2">
              <Skeleton variant="rectangular" className="flex-1 h-11 rounded-lg" />
              <Skeleton variant="rectangular" className="flex-1 h-11 rounded-lg" />
            </div>
          </div>
        </div>

        {/* Chat List Loading */}
        <div>
          <h4 className="text-sm font-semibold mb-3">채팅 리스트 로딩</h4>
          <div className="space-y-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-start gap-3 p-3 rounded-lg border">
                <Skeleton variant="circular" className="w-12 h-12" />
                <div className="flex-1 space-y-2">
                  <div className="flex justify-between items-start">
                    <Skeleton variant="text" className="w-24 h-4" />
                    <Skeleton variant="text" className="w-16 h-3" />
                  </div>
                  <Skeleton variant="text" className="w-full h-3" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DemoSection>
  );
}

