import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type TagProps = {
  children: ReactNode;
  tone?: "green" | "light-green" | "white";
  font?: "display" | "mono";
  className?: string;
};

const tones = {
  green: "border-bright-green text-bright-green",
  "light-green": "border-light-green text-light-green",
  white: "border-white text-white",
};

export function Tag({
  children,
  tone = "green",
  font = "display",
  className,
}: TagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center rounded-pill border",
        "px-[20px] py-[15px] text-t16 leading-none whitespace-nowrap",
        font === "mono" && "font-mono",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
