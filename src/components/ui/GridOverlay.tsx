import { cn } from "@/lib/utils";

type GridOverlayProps = {
  className?: string;
  opacity?: number;
  /** CSS mask to fade the grid in/out (e.g. a radial/linear gradient). */
  fade?: string;
};

/** Faint 39.5px grid texture — recurs across the landing, fading in and out. */
export function GridOverlay({ className, opacity = 0.7, fade }: GridOverlayProps) {
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
      }}
    />
  );
}
