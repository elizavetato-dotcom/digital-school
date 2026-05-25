import type { ReactNode } from "react";
import { GlassCard } from "@/components/ui/GlassCard";
import { GridOverlay } from "@/components/ui/GridOverlay";
import { tn } from "@/lib/typography";

const QUOTE_LINE_1 = tn(
  "Мы готовы дать свои лучшие силы, чтобы вы могли получить максимально новые и современные знания о том, какие сегодня модели работают, как они обучаются, какие архитектуры используются,",
);
const QUOTE_LINE_2 = tn("что такое генеративный искусственный интеллект.");

/** Translucent tilted glass figure (AI / voice). Rotation is on the
 *  outer wrapper so the background-blur layer keeps a clean transform. */
function GlassFigure({
  left,
  top,
  size,
  rotate,
  border,
  children,
}: {
  left: number;
  top: number;
  size: number;
  rotate: number;
  border: number;
  children: ReactNode;
}) {
  return (
    <div
      className="absolute z-20"
      style={{
        left,
        top,
        width: size,
        height: size,
        transform: `rotate(${rotate}deg)`,
      }}
    >
      <div
        className="flex h-full w-full items-center justify-center rounded-[30px]"
        style={{
          border: `${border}px solid #adffc6`,
          background: "var(--gradient-card)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          boxShadow: "0 24px 50px rgba(0,0,0,0.5)",
        }}
      >
        {children}
      </div>
    </div>
  );
}

export function QuoteSection() {
  return (
    <section className="relative isolate h-[591px] w-full">
      {/* faint grid texture */}
      <GridOverlay
        opacity={0.1}
        fade="linear-gradient(180deg, transparent 0%, #000 50%, transparent 100%)"
      />

      {/* side glows — boxes stay inside the section, blur bleeds across
          the seams so blocks blend without hard edges */}
      <div
        className="pointer-events-none absolute left-0 top-[110px] h-[280px] w-[420px]"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(86,255,113,0.85) 0%, rgba(86,255,113,0) 76%)",
          filter: "blur(190px)",
        }}
      />


      {/* quote card */}
      <GlassCard className="absolute left-[255px] top-[174px] h-[248px] w-[835px]">
        <p className="absolute left-[40px] top-[35px] w-[751px] text-[28px] leading-[1.2] tracking-[-0.28px] text-gradient-white">
          {QUOTE_LINE_1}
          <br />
          {QUOTE_LINE_2}
        </p>
      </GlassCard>

      {/* glass figure — AI */}
      <GlassFigure left={1002} top={387} size={155} rotate={-13.76} border={3}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/ai.svg"
          alt=""
          className="h-[67px] w-[87px]"
          style={{ mixBlendMode: "lighten" }}
        />
      </GlassFigure>

      {/* glass figure — voice */}
      <GlassFigure left={1160} top={251} size={114} rotate={19.09} border={2}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/vector.svg"
          alt=""
          className="h-[52px] w-[60px]"
          style={{ mixBlendMode: "lighten" }}
        />
      </GlassFigure>

      {/* Gref avatar — foreground */}
      <div className="absolute z-30 left-[160px] top-[33px] h-[176px] w-[174px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/gref-avatar.webp"
          alt="Герман Греф"
          className="h-full w-full"
        />
      </div>

      {/* name + role */}
      <p className="absolute z-30 left-[359px] top-[64px] text-h5 leading-[1] text-gradient-main">
        Герман Греф
      </p>
      <p className="absolute z-30 left-[361px] top-[101px] w-[360px] font-mono text-cap20 leading-[1.4] text-white/65">
        {tn("Президент, Председатель Правления ПАО «Сбербанк»")}
      </p>

      {/* quote marks — foreground, above the text */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/assets/quotes.svg"
        alt=""
        className="absolute z-30 left-[986px] top-[127px] h-[72px] w-[83px] rotate-180"
      />
    </section>
  );
}
