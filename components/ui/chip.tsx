import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const chipVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full font-medium transition-all",
  {
    variants: {
      variant: {
        default: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        primary: "bg-primary/10 text-primary hover:bg-primary/20",
        outline: "border border-border text-foreground hover:bg-accent",
        peer: "bg-match-peer/10 text-match-peer hover:bg-match-peer/20",
        local: "bg-match-local/10 text-match-local hover:bg-match-local/20",
        romance: "bg-match-romance/10 text-match-romance hover:bg-match-romance/20",
      },
      size: {
        sm: "text-xs px-2 py-1 h-6",
        md: "text-sm px-3 py-1.5 h-8",
        lg: "text-base px-4 py-2 h-10",
      },
      interactive: {
        true: "cursor-pointer",
        false: "",
      },
      selected: {
        true: "",
        false: "",
      },
    },
    compoundVariants: [
      {
        variant: "default",
        selected: true,
        className: "bg-primary text-primary-foreground",
      },
      {
        variant: "outline",
        selected: true,
        className: "border-primary bg-primary/10 text-primary",
      },
    ],
    defaultVariants: {
      variant: "default",
      size: "md",
      interactive: false,
      selected: false,
    },
  }
);

export interface ChipProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof chipVariants> {
  icon?: React.ReactNode;
  onRemove?: () => void;
}

const Chip = React.forwardRef<HTMLDivElement, ChipProps>(
  (
    {
      className,
      variant,
      size,
      interactive,
      selected,
      icon,
      onRemove,
      children,
      onClick,
      ...props
    },
    ref
  ) => {
    const isInteractive = interactive || !!onClick;

    return (
      <div
        ref={ref}
        role={isInteractive ? "button" : undefined}
        tabIndex={isInteractive ? 0 : undefined}
        className={cn(
          chipVariants({ variant, size, interactive: isInteractive, selected }),
          className
        )}
        onClick={onClick}
        onKeyDown={
          isInteractive
            ? (e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  onClick?.(e as any);
                }
              }
            : undefined
        }
        {...props}
      >
        {icon && <span className="shrink-0 flex items-center">{icon}</span>}
        <span className="truncate">{children}</span>
        {onRemove && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onRemove();
            }}
            className="ml-0.5 shrink-0 rounded-full hover:bg-black/10 focus:outline-none focus:ring-1 focus:ring-current p-0.5 transition-colors"
            aria-label="제거"
          >
            <svg
              className={cn(
                size === "sm" && "h-3 w-3",
                size === "md" && "h-3.5 w-3.5",
                size === "lg" && "h-4 w-4"
              )}
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

Chip.displayName = "Chip";

export { Chip, chipVariants };

