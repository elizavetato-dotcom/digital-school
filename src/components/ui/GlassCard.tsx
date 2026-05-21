import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type GlassCardProps = {
  children?: ReactNode;
  className?: string;
  /** Outer corner radius in px. */
  radius?: number;
};

const GREEN = "rgba(86,255,113,0.5)";
const BLUE = "rgba(98,236,255,0.5)";

/** Frosted glass card — 2px double contour, colored corner glows
 *  (green top-left / blue bottom-right) and 2px edge glow lines that
 *  sit exactly on the contour. */
export function GlassCard({ children, className, radius = 30 }: GlassCardProps) {
  const outerR = `${radius}px`;
  const innerR = `${radius - 2}px`;

  return (
    <div
      className={cn("relative border-2 border-white/10", className)}
      style={{ borderRadius: outerR }}
    >
      {/* clipped layer — colored glows diffused by the frosted body */}
      <div
        aria-hidden
        className="absolute inset-0 overflow-clip"
        style={{ borderRadius: innerR }}
      >
        <div
          className="pointer-events-none absolute -left-[90px] -top-[90px] h-[280px] w-[420px]"
          style={{
            background:
              "radial-gradient(50% 50% at 50% 50%, rgba(173,255,198,0.42) 0%, transparent 74%)",
          }}
        />
        <div
          className="pointer-events-none absolute -bottom-[120px] -right-[80px] h-[320px] w-[500px]"
          style={{
            background:
              "radial-gradient(50% 50% at 50% 50%, rgba(8,130,255,0.46) 0%, transparent 74%)",
          }}
        />
        <div
          className="absolute inset-0 border-2 border-white/20 bg-black/20 backdrop-blur-[75px]"
          style={{ borderRadius: innerR }}
        />
      </div>

      {/* edge glow lines — 2px, exactly on the 2px contour */}
      <span
        aria-hidden
        className="pointer-events-none absolute -top-[2px] left-1/2 h-[2px] w-[274px] -translate-x-1/2"
        style={{ background: `linear-gradient(90deg, transparent, ${GREEN}, transparent)` }}
      />
      <span
        aria-hidden
        className="pointer-events-none absolute -bottom-[2px] left-1/2 h-[2px] w-[274px] -translate-x-1/2"
        style={{ background: `linear-gradient(90deg, transparent, ${BLUE}, transparent)` }}
      />
      <span
        aria-hidden
        className="pointer-events-none absolute -left-[2px] top-[40px] h-[120px] w-[2px]"
        style={{ background: `linear-gradient(180deg, transparent, ${GREEN}, transparent)` }}
      />
      <span
        aria-hidden
        className="pointer-events-none absolute -right-[2px] top-[40px] h-[130px] w-[2px]"
        style={{ background: `linear-gradient(180deg, transparent, ${BLUE}, transparent)` }}
      />

      {/* content */}
      <div className="relative h-full">{children}</div>
    </div>
  );
}
