import * as React from "react";
import { cn } from "@/lib/utils";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
  showCount?: boolean;
  maxCount?: number;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      className,
      label,
      error,
      helperText,
      showCount,
      maxCount,
      id,
      value,
      ...props
    },
    ref
  ) => {
    const textareaId = id || React.useId();
    const hasError = !!error;
    const currentLength =
      typeof value === "string" ? value.length : (value as number) || 0;

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={textareaId}
            className="block text-sm font-medium text-foreground mb-1.5"
          >
            {label}
          </label>
        )}
        <div className="relative">
          <textarea
            id={textareaId}
            className={cn(
              "flex min-h-[80px] w-full rounded-lg border border-input bg-background px-3 py-2 text-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-y",
              hasError &&
                "border-destructive focus-visible:ring-destructive",
              className
            )}
            ref={ref}
            value={value}
            aria-invalid={hasError}
            aria-describedby={
              hasError
                ? `${textareaId}-error`
                : helperText
                ? `${textareaId}-helper`
                : undefined
            }
            {...props}
          />
          {showCount && maxCount && (
            <div className="absolute bottom-2 right-2 text-xs text-muted-foreground bg-background/80 px-1.5 py-0.5 rounded">
              {currentLength}/{maxCount}
            </div>
          )}
        </div>
        {error && (
          <p
            id={`${textareaId}-error`}
            className="mt-1.5 text-sm text-destructive"
            role="alert"
          >
            {error}
          </p>
        )}
        {helperText && !error && (
          <p
            id={`${textareaId}-helper`}
            className="mt-1.5 text-sm text-muted-foreground"
          >
            {helperText}
          </p>
        )}
      </div>
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };

