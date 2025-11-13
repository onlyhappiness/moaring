import * as React from "react";
import { cn } from "@/lib/utils";

export interface ToggleProps {
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  label?: string;
  description?: string;
  disabled?: boolean;
  id?: string;
  className?: string;
}

const Toggle = React.forwardRef<HTMLButtonElement, ToggleProps>(
  (
    { checked, onCheckedChange, label, description, disabled, id, className },
    ref
  ) => {
    const toggleId = id || React.useId();

    const handleClick = () => {
      if (!disabled && onCheckedChange) {
        onCheckedChange(!checked);
      }
    };

    return (
      <div className={cn("flex items-center justify-between", className)}>
        <div className="flex-1">
          {label && (
            <label
              htmlFor={toggleId}
              className={cn(
                "block text-sm font-medium text-foreground",
                disabled && "opacity-50 cursor-not-allowed"
              )}
            >
              {label}
            </label>
          )}
          {description && (
            <p className="text-sm text-muted-foreground mt-0.5">
              {description}
            </p>
          )}
        </div>
        <button
          ref={ref}
          type="button"
          role="switch"
          aria-checked={checked}
          id={toggleId}
          disabled={disabled}
          onClick={handleClick}
          className={cn(
            "relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            checked ? "bg-primary" : "bg-input"
          )}
        >
          <span
            className={cn(
              "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-background shadow-lg ring-0 transition duration-200 ease-in-out",
              checked ? "translate-x-5" : "translate-x-0"
            )}
          />
        </button>
      </div>
    );
  }
);
Toggle.displayName = "Toggle";

export { Toggle };

