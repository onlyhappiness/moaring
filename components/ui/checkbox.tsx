import * as React from "react";
import { cn } from "@/lib/utils";

export interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;
  description?: string;
  error?: string;
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, description, error, id, ...props }, ref) => {
    const checkboxId = id || React.useId();
    const hasError = !!error;

    return (
      <div className="w-full">
        <div className="flex items-start gap-3">
          <div className="flex h-5 items-center">
            <input
              type="checkbox"
              id={checkboxId}
              ref={ref}
              className={cn(
                "h-4 w-4 rounded border-input bg-background text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
                hasError && "border-destructive",
                className
              )}
              aria-invalid={hasError}
              aria-describedby={hasError ? `${checkboxId}-error` : undefined}
              {...props}
            />
          </div>
          <div className="flex-1">
            {label && (
              <label
                htmlFor={checkboxId}
                className="block text-sm font-medium text-foreground leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
              >
                {label}
              </label>
            )}
            {description && (
              <p className="text-sm text-muted-foreground mt-1">
                {description}
              </p>
            )}
          </div>
        </div>
        {error && (
          <p
            id={`${checkboxId}-error`}
            className="mt-1.5 text-sm text-destructive ml-7"
            role="alert"
          >
            {error}
          </p>
        )}
      </div>
    );
  }
);
Checkbox.displayName = "Checkbox";

export { Checkbox };

