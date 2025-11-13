import { cn } from "@/lib/utils";
import * as React from "react";

export interface SliderProps {
  min?: number;
  max?: number;
  step?: number;
  value?: number[];
  defaultValue?: number[];
  onValueChange?: (value: number[]) => void;
  label?: string;
  showValues?: boolean;
  formatValue?: (value: number) => string;
  disabled?: boolean;
  className?: string;
}

const Slider = React.forwardRef<HTMLDivElement, SliderProps>(
  (
    {
      min = 0,
      max = 100,
      step = 1,
      value: controlledValue,
      defaultValue = [min, max],
      onValueChange,
      label,
      showValues = true,
      formatValue = (v) => v.toString(),
      disabled = false,
      className,
    },
    ref
  ) => {
    const [internalValue, setInternalValue] = React.useState(defaultValue);
    const value = controlledValue ?? internalValue;

    const minValue = Math.min(value[0] || min, value[1] || max);
    const maxValue = Math.max(value[0] || min, value[1] || max);

    const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newMin = Number(e.target.value);
      const newValue = [Math.min(newMin, maxValue), maxValue];
      setInternalValue(newValue);
      onValueChange?.(newValue);
    };

    const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newMax = Number(e.target.value);
      const newValue = [minValue, Math.max(newMax, minValue)];
      setInternalValue(newValue);
      onValueChange?.(newValue);
    };

    const minPercent = ((minValue - min) / (max - min)) * 100;
    const maxPercent = ((maxValue - min) / (max - min)) * 100;

    return (
      <div ref={ref} className={cn("w-full", className)}>
        {label && (
          <label className="block text-sm font-medium text-foreground mb-3">
            {label}
          </label>
        )}

        {showValues && (
          <div className="flex justify-between items-center mb-4 w-fit gap-1">
            <span className="text-sm font-medium text-foreground">
              {formatValue(minValue)}
            </span>
            <span className="text-sm text-muted-foreground">~</span>
            <span className="text-sm font-medium text-foreground">
              {formatValue(maxValue)}
            </span>
          </div>
        )}

        <div className="relative h-2">
          {/* Background track */}
          <div className="absolute w-full h-2 rounded-full bg-secondary" />

          {/* Active track */}
          <div
            className="absolute h-2 rounded-full bg-primary"
            style={{
              left: `${minPercent}%`,
              right: `${100 - maxPercent}%`,
            }}
          />

          {/* Min thumb */}
          <input
            type="range"
            min={min}
            max={max}
            step={step}
            value={minValue}
            onChange={handleMinChange}
            disabled={disabled}
            className={cn(
              "slider-thumb absolute w-full h-2 appearance-none bg-transparent pointer-events-none",
              "[&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-background [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-primary [&::-webkit-slider-thumb]:shadow-md [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:transition-transform [&::-webkit-slider-thumb]:hover:scale-110",
              "[&::-moz-range-thumb]:pointer-events-auto [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-background [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-primary [&::-moz-range-thumb]:shadow-md [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:transition-transform [&::-moz-range-thumb]:hover:scale-110",
              disabled && "opacity-50 cursor-not-allowed"
            )}
          />

          {/* Max thumb */}
          <input
            type="range"
            min={min}
            max={max}
            step={step}
            value={maxValue}
            onChange={handleMaxChange}
            disabled={disabled}
            className={cn(
              "slider-thumb absolute w-full h-2 appearance-none bg-transparent pointer-events-none",
              "[&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-background [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-primary [&::-webkit-slider-thumb]:shadow-md [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:transition-transform [&::-webkit-slider-thumb]:hover:scale-110",
              "[&::-moz-range-thumb]:pointer-events-auto [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-background [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-primary [&::-moz-range-thumb]:shadow-md [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:transition-transform [&::-moz-range-thumb]:hover:scale-110",
              disabled && "opacity-50 cursor-not-allowed"
            )}
          />
        </div>
      </div>
    );
  }
);

Slider.displayName = "Slider";

export { Slider };
