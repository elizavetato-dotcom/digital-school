import localFont from "next/font/local";

export const sbSansDisplay = localFont({
  src: [
    { path: "../../public/fonts/SBSansDisplay-Thin.woff2", weight: "100", style: "normal" },
    { path: "../../public/fonts/SBSansDisplay-Light.woff2", weight: "300", style: "normal" },
    { path: "../../public/fonts/SBSansDisplay-Regular.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/SBSansDisplay-SemiBold.woff2", weight: "600", style: "normal" },
    { path: "../../public/fonts/SBSansDisplay-Bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--ff-display",
  display: "swap",
});

export const sbSansCondMono = localFont({
  src: [
    { path: "../../public/fonts/SBSansCondMono-Regular.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/SBSansCondMono-Bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--ff-mono",
  display: "swap",
});
