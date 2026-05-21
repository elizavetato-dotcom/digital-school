import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "solid" | "outline";
  className?: string;
  onClick?: () => void;
};

const variants = {
  solid: "bg-black text-white hover:bg-[#1c1c1c]",
  outline: "border-2 border-white text-white hover:bg-white/10",
};

export function Button({
  children,
  href,
  variant = "solid",
  className,
  onClick,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center rounded-pill text-t24",
    "px-[30px] py-[20px] whitespace-nowrap cursor-pointer",
    "transition-colors duration-200",
    variants[variant],
    className,
  );

  // Optically centred label — trims the line-box to the cap height and
  // alphabetic baseline so flex centring lands on the visual middle.
  const label = (
    <span className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both]">
      {children}
    </span>
  );

  if (href) {
    return (
      <a href={href} className={classes}>
        {label}
      </a>
    );
  }

  return (
    <button type="button" className={classes} onClick={onClick}>
      {label}
    </button>
  );
}
