import { cn } from "@/lib/utils";
import type { CSSProperties } from "react";

type GridOverlayProps = {
  className?: string;
  opacity?: number;
  /** CSS mask to fade the grid in/out (e.g. a radial/linear gradient). */
  fade?: string;
  /** mix-blend-mode for the grid layer (e.g. "overlay"). */
  blendMode?: CSSProperties["mixBlendMode"];
};

/** Faint 39.5px grid texture — recurs across the landing, fading in and out. */
export function GridOverlay({ className, opacity = 0.7, fade, blendMode }: GridOverlayProps) {
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0", className)}
      style={{
        backgroundImage: "url(/assets/grid-tile.png)",
        backgroundSize: "39.5px 39.5px",
        opacity,
        maskImage: fade,
        WebkitMaskImage: fade,
        mixBlendMode: blendMode,
      }}
    />
  );
}
