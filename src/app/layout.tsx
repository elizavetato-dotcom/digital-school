import type { Metadata } from "next";
import { sbSansDisplay, sbSansCondMono } from "@/lib/fonts";
import { DesignScaler } from "@/components/DesignScaler";
import "./globals.css";

export const metadata: Metadata = {
  title: "Цифровая школа Сбера 2026",
  description:
    "Всесезонная программа повышения квалификации преподавателей вузов и колледжей с фокусом на цифровые технологии, ИИ и развитие мягких навыков.",
};

const initScale =
  "document.documentElement.style.setProperty('--design-scale',document.documentElement.clientWidth/1440)";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      suppressHydrationWarning
      className={`${sbSansDisplay.variable} ${sbSansCondMono.variable} antialiased`}
    >
      <body>
        <script dangerouslySetInnerHTML={{ __html: initScale }} />
        <DesignScaler />
        {children}
      </body>
    </html>
  );
}
