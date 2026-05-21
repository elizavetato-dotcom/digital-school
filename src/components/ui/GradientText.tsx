import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

type GradientTextProps = {
  children: ReactNode;
  as?: ElementType;
  variant?: "main" | "white";
  className?: string;
};

export function GradientText({
  children,
  as: Tag = "span",
  variant = "main",
  className,
}: GradientTextProps) {
  return (
    <Tag
      className={cn(
        variant === "main" ? "text-gradient-main" : "text-gradient-white",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
