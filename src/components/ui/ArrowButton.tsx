import { cn } from "@/lib/utils";

type ArrowButtonProps = {
  size?: number;
  href?: string;
  className?: string;
  "aria-label"?: string;
};

export function ArrowButton({
  size = 56,
  href,
  className,
  "aria-label": ariaLabel = "Подробнее",
}: ArrowButtonProps) {
  const classes = cn(
    "group inline-flex shrink-0 items-center justify-center rounded-full",
    "border border-white/30 text-white",
    "transition-colors duration-200 hover:border-bright-green hover:text-bright-green",
    className,
  );

  const content = (
    <svg
      width={size * 0.4}
      height={size * 0.4}
      viewBox="0 0 24 24"
      fill="none"
      className="transition-transform duration-200 group-hover:translate-x-0.5"
    >
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const style = { width: size, height: size };

  if (href) {
    return (
      <a href={href} aria-label={ariaLabel} className={classes} style={style}>
        {content}
      </a>
    );
  }

  return (
    <button
      type="button"
      aria-label={ariaLabel}
      className={classes}
      style={style}
    >
      {content}
    </button>
  );
}
