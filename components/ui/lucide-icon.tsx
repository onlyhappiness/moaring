// components/ui/icon.tsx
"use client";

import { cn } from "@/lib/utils";
import { DynamicIcon, IconName } from "lucide-react/dynamic";

interface IconProps {
  name: string;
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
}

export function LucideIcon({
  name,
  size = 20,
  color = "currentColor",
  strokeWidth = 1,
  className,
}: IconProps) {
  return (
    <DynamicIcon
      name={name as IconName}
      size={size}
      color={color}
      strokeWidth={strokeWidth}
      className={cn(className)}
    />
  );
}
