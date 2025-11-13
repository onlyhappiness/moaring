import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const skeletonVariants = cva("skeleton", {
  variants: {
    variant: {
      default: "",
      circular: "rounded-full",
      rectangular: "rounded-lg",
      text: "rounded h-4",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export interface SkeletonProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof skeletonVariants> {
  width?: string | number;
  height?: string | number;
}

const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
  ({ className, variant, width, height, style, ...props }, ref) => {
    const inlineStyle = {
      ...style,
      ...(width && {
        width: typeof width === "number" ? `${width}px` : width,
      }),
      ...(height && {
        height: typeof height === "number" ? `${height}px` : height,
      }),
    };

    return (
      <div
        ref={ref}
        className={cn(skeletonVariants({ variant }), className)}
        style={inlineStyle}
        {...props}
      />
    );
  }
);

Skeleton.displayName = "Skeleton";

// Common skeleton patterns
const SkeletonCard = ({ className }: { className?: string }) => (
  <div className={cn("space-y-3", className)}>
    <Skeleton variant="rectangular" className="h-48 w-full" />
    <div className="space-y-2">
      <Skeleton variant="text" className="h-4 w-3/4" />
      <Skeleton variant="text" className="h-4 w-1/2" />
    </div>
  </div>
);

const SkeletonProfileCard = ({ className }: { className?: string }) => (
  <div className={cn("flex items-start gap-4", className)}>
    <Skeleton variant="circular" className="h-12 w-12" />
    <div className="flex-1 space-y-2">
      <Skeleton variant="text" className="h-4 w-32" />
      <Skeleton variant="text" className="h-3 w-48" />
    </div>
  </div>
);

const SkeletonList = ({
  count = 3,
  className,
}: {
  count?: number;
  className?: string;
}) => (
  <div className={cn("space-y-4", className)}>
    {Array.from({ length: count }).map((_, i) => (
      <SkeletonProfileCard key={i} />
    ))}
  </div>
);

export { Skeleton, SkeletonCard, SkeletonProfileCard, SkeletonList };

