import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors",
  {
    variants: {
      variant: {
        default: "bg-primary/10 text-primary border border-primary/20",
        secondary: "bg-secondary text-secondary-foreground",
        outline: "text-foreground border border-border",
        destructive: "bg-destructive/10 text-destructive border border-destructive/20",
        // Match type variants
        peer: "bg-match-peer/10 text-match-peer border border-match-peer/20",
        local: "bg-match-local/10 text-match-local border border-match-local/20",
        romance: "bg-match-romance/10 text-match-romance border border-match-romance/20",
        // Trust level variants
        bronze: "bg-trust-bronze text-trust-bronze-foreground",
        silver: "bg-trust-silver text-trust-silver-foreground",
        gold: "bg-trust-gold text-trust-gold-foreground",
        // Status variants
        success: "bg-success/10 text-success border border-success/20",
        warning: "bg-warning/10 text-warning border border-warning/20",
        info: "bg-info/10 text-info border border-info/20",
        // Verification variants
        verified: "bg-blue-500/10 text-blue-600 border border-blue-500/20",
      },
      size: {
        sm: "text-[10px] px-2 py-0.5",
        md: "text-xs px-2.5 py-0.5",
        lg: "text-sm px-3 py-1",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  icon?: React.ReactNode;
  onRemove?: () => void;
}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant, size, icon, onRemove, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(badgeVariants({ variant, size }), className)}
        {...props}
      >
        {icon && <span className="shrink-0">{icon}</span>}
        <span>{children}</span>
        {onRemove && (
          <button
            type="button"
            onClick={onRemove}
            className="ml-0.5 shrink-0 rounded-full hover:bg-black/10 focus:outline-none focus:ring-1 focus:ring-current p-0.5"
            aria-label="제거"
          >
            <svg
              className="h-3 w-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        )}
      </div>
    );
  }
);

Badge.displayName = "Badge";

export { Badge, badgeVariants };

