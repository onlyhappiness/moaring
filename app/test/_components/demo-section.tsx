import * as React from "react";
import { cn } from "@/lib/utils";

interface DemoSectionProps {
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
}

export function DemoSection({
  title,
  description,
  children,
  className,
}: DemoSectionProps) {
  return (
    <section className={cn("space-y-4", className)}>
      <div className="space-y-1">
        <h3 className="text-2xl font-bold">{title}</h3>
        {description && (
          <p className="text-muted-foreground text-sm">{description}</p>
        )}
      </div>
      <div className="rounded-xl border bg-card p-6">{children}</div>
    </section>
  );
}

