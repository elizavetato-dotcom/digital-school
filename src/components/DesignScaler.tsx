"use client";

import { useEffect } from "react";

const DESIGN_WIDTH = 1440;

/** Keeps --design-scale in sync with the viewport so the 1440 canvas
 *  scales proportionally. Initial value is set by an inline script in
 *  the layout to avoid a flash before hydration. */
export function DesignScaler() {
  useEffect(() => {
    const root = document.documentElement;
    const apply = () => {
      root.style.setProperty(
        "--design-scale",
        String(root.clientWidth / DESIGN_WIDTH),
      );
    };
    apply();
    window.addEventListener("resize", apply);
    return () => window.removeEventListener("resize", apply);
  }, []);

  return null;
}
