import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const avatarVariants = cva(
  "relative inline-flex shrink-0 overflow-hidden rounded-full bg-muted",
  {
    variants: {
      size: {
        sm: "h-8 w-8",
        md: "h-10 w-10",
        lg: "h-12 w-12",
        xl: "h-16 w-16",
        "2xl": "h-24 w-24",
        "3xl": "h-32 w-32",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

export interface AvatarProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof avatarVariants> {
  src?: string;
  alt?: string;
  fallback?: string;
  phoneVerified?: boolean;
  locationVerified?: boolean;
}

const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  (
    {
      className,
      size,
      src,
      alt,
      fallback,
      phoneVerified,
      locationVerified,
      ...props
    },
    ref
  ) => {
    const [imageError, setImageError] = React.useState(false);

    const showImage = src && !imageError;
    const showFallback = !showImage;

    return (
      <div className="relative inline-block">
        <div
          ref={ref}
          className={cn(avatarVariants({ size }), className)}
          {...props}
        >
          {showImage && (
            <img
              src={src}
              alt={alt || "Avatar"}
              className="h-full w-full object-cover"
              onError={() => setImageError(true)}
            />
          )}
          {showFallback && (
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary/20 to-accent/20 text-foreground font-semibold">
              {fallback ? (
                <span
                  className={cn(
                    size === "sm" && "text-xs",
                    size === "md" && "text-sm",
                    size === "lg" && "text-base",
                    size === "xl" && "text-xl",
                    size === "2xl" && "text-2xl",
                    size === "3xl" && "text-4xl"
                  )}
                >
                  {fallback}
                </span>
              ) : (
                <svg
                  className={cn(
                    "text-muted-foreground",
                    size === "sm" && "h-4 w-4",
                    size === "md" && "h-5 w-5",
                    size === "lg" && "h-6 w-6",
                    size === "xl" && "h-8 w-8",
                    size === "2xl" && "h-12 w-12",
                    size === "3xl" && "h-16 w-16"
                  )}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </div>
          )}
        </div>

        {/* Verification Badges */}
        {(phoneVerified || locationVerified) && (
          <div
            className={cn(
              "absolute flex gap-0.5",
              size === "sm" && "bottom-0 right-0",
              (size === "md" || size === "lg") && "bottom-0 right-0",
              (size === "xl" || size === "2xl" || size === "3xl") &&
                "bottom-1 right-1"
            )}
          >
            {phoneVerified && (
              <div
                className={cn(
                  "rounded-full bg-blue-500 border-2 border-background flex items-center justify-center",
                  size === "sm" && "h-4 w-4",
                  size === "md" && "h-5 w-5",
                  size === "lg" && "h-6 w-6",
                  (size === "xl" || size === "2xl" || size === "3xl") &&
                    "h-7 w-7"
                )}
                title="본인인증"
              >
                <svg
                  className={cn(
                    "text-white",
                    size === "sm" && "h-2.5 w-2.5",
                    size === "md" && "h-3 w-3",
                    size === "lg" && "h-3.5 w-3.5",
                    (size === "xl" || size === "2xl" || size === "3xl") &&
                      "h-4 w-4"
                  )}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            )}
            {locationVerified && (
              <div
                className={cn(
                  "rounded-full bg-green-500 border-2 border-background flex items-center justify-center",
                  size === "sm" && "h-4 w-4",
                  size === "md" && "h-5 w-5",
                  size === "lg" && "h-6 w-6",
                  (size === "xl" || size === "2xl" || size === "3xl") &&
                    "h-7 w-7"
                )}
                title="동네인증"
              >
                <svg
                  className={cn(
                    "text-white",
                    size === "sm" && "h-2.5 w-2.5",
                    size === "md" && "h-3 w-3",
                    size === "lg" && "h-3.5 w-3.5",
                    (size === "xl" || size === "2xl" || size === "3xl") &&
                      "h-4 w-4"
                  )}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
);

Avatar.displayName = "Avatar";

export { Avatar, avatarVariants };

