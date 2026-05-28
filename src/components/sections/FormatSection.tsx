import type { CSSProperties } from "react";
import { GridOverlay } from "@/components/ui/GridOverlay";
import { tn } from "@/lib/typography";

/* ── background gradient vector ──────────────────────────────────────────── */
function BgVector({
  src,
  left,
  top,
  w,
  h,
  insetTB,
  insetLR,
  blend,
}: {
  src: string;
  left: number;
  top: number;
  w: number;
  h: number;
  insetTB: string;
  insetLR: string;
  blend?: CSSProperties["mixBlendMode"];
}) {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute"
      style={{ left, top, width: w, height: h, mixBlendMode: blend }}
    >
      {/* scaleY(-1) + rotate(180deg) = scaleX(-1) – horizontal mirror */}
      <div style={{ position: "relative", width: "100%", height: "100%", transform: "scaleX(-1)" }}>
        <div style={{ position: "absolute", inset: `${insetTB} ${insetLR}` }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt=""
            style={{ display: "block", width: "100%", height: "100%", maxWidth: "none" }}
          />
        </div>
      </div>
    </div>
  );
}

/* ── glow spans on card-under-woman contour ──────────────────────────────── */
function CardUnderWomanGlow() {
  const green = "rgba(86,255,113,0.6)";
  const blue = "rgba(98,236,255,0.6)";
  const hg = (c: string) => `linear-gradient(90deg,transparent,${c},transparent)`;
  const vg = (c: string) => `linear-gradient(180deg,transparent,${c},transparent)`;
  return (
    <>
      <span className="pointer-events-none absolute" style={{ top: -2, left: "calc(50% + 5px)", transform: "translateX(-50%)", width: 275, height: 2, background: hg(blue) }} />
      <span className="pointer-events-none absolute" style={{ bottom: -2, left: "calc(50% + 5px)", transform: "translateX(-50%)", width: 275, height: 2, background: hg(green) }} />
      <span className="pointer-events-none absolute" style={{ left: -2, top: 270, width: 2, height: 250, background: vg(green) }} />
      <span className="pointer-events-none absolute" style={{ right: -2, top: 35, width: 2, height: 250, background: vg(blue) }} />
    </>
  );
}

/* ── generic content card ────────────────────────────────────────────────── */
/*
  Layer order (back → front):
  1. glass body  – absolute inset-0, overflow-clip, blur, opacity 0.7
  2. texts       – absolute positioned
  3. glow SVG    – absolute (0,0), inner extends via negative inset → sits on contour
*/
function FormatCard({
  left,
  top,
  width,
  height,
  cardBg,
  titleText,
  titleGradient,
  titleWidth,
  bodyText,
  bodyTop,
  bodyWidth,
  glowSrc,
  glowW,
  glowH,
  glowInsetTop,
  glowInsetLeft,
}: {
  left: number;
  top: number;
  width: number;
  height: number;
  cardBg: string;
  titleText: string;
  titleGradient: string;
  titleWidth: number;
  bodyText: string;
  bodyTop: number;
  bodyWidth: number;
  glowSrc: string;
  glowW: number;
  glowH: number;
  glowInsetTop: string;
  glowInsetLeft: string;
}) {
  return (
    <div
      className="absolute z-30 rounded-[25px]"
      style={{ left, top, width, height, border: "2px solid rgba(255,255,255,0.1)" }}
    >
      {/* 1 – glass body (clipped so blur stays inside) */}
      <div
        className="absolute inset-0 overflow-clip rounded-[23px] backdrop-blur-[15px]"
        style={{ background: cardBg, opacity: 0.7 }}
      />

      {/* 2 – title */}
      <p
        className="absolute bg-clip-text text-transparent text-[24px] leading-[1.2] tracking-[-0.24px]"
        style={{ left: 23, top: 18, width: titleWidth, backgroundImage: titleGradient }}
      >
        {tn(titleText)}
      </p>

      {/* 2 – body text */}
      <p
        className="absolute text-[20px] leading-[1.2] text-white/90"
        style={{ left: 23, top: bodyTop, width: bodyWidth }}
      >
        {tn(bodyText)}
      </p>

      {/* 3 – glow SVG: container at (0,0), inner corrected → sits on contour */}
      <div className="pointer-events-none absolute" style={{ left: 0, top: 0, width: glowW, height: glowH }}>
        <div style={{ position: "absolute", inset: `${glowInsetTop} 0 0 ${glowInsetLeft}` }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={glowSrc} alt="" style={{ display: "block", width: "100%", height: "100%", maxWidth: "none" }} />
        </div>
      </div>
    </div>
  );
}

/* ── section ──────────────────────────────────────────────────────────────── */
export function FormatSection() {
  /* card bg presets – radial gradients per Figma 60:514 */
  /* Card 1 "Полностью онлайн": dark center at top-right corner, teal tinting toward edges */
  const bgCard1 = "radial-gradient(ellipse at 102% 7%, rgba(0,0,0,0.8) 0%, rgba(98,236,255,0.25) 100%), rgb(17,17,17)";
  /* Card 3 "Гибкий формат": subtle teal accent at top-right, dark everywhere else */
  const bgCard3 = "radial-gradient(ellipse at 102% 7%, rgba(98,236,255,0.25) 0%, rgba(0,0,0,0.8) 100%), rgb(17,17,17)";
  /* Card 2 "Практико" (tall): diagonal linear gradient, unchanged */
  const bgDiag = "linear-gradient(137.86deg, rgba(98,236,255,0.1) 23.5%, rgba(0,0,0,0) 56.6%, rgba(98,236,255,0.25) 93.7%), rgb(17,17,17)";

  return (
    <section id="format" className="relative isolate w-full" style={{ height: 960 }}>

      {/* grid texture */}
      <GridOverlay opacity={0.07} blendMode="overlay" />

      {/* ── background gradient (node 68:498) ─────────────────────────────── */}
      <BgVector src="/assets/format-bg-v1.svg" left={-86.64} top={237}
        w={1583.707} h={741.293} insetTB="-50.73%" insetLR="-23.74%" />
      <BgVector src="/assets/format-bg-v2.svg" left={-96.8} top={668.19}
        w={1590.049} h={279.526} insetTB="-53.81%" insetLR="-9.46%" blend="lighten" />
      <BgVector src="/assets/format-bg-v3.svg" left={-89.4} top={531.44}
        w={1627.603} h={533.565} insetTB="-29.54%" insetLR="-9.68%" blend="multiply" />

      {/* ── card under woman – z-10 ────────────────────────────────────────── */}
      <div
        className="absolute z-10 rounded-[25px]"
        style={{ left: 481, top: 340, width: 455, height: 558, border: "2px solid rgba(255,255,255,0.2)" }}
      >
        <div
          className="absolute inset-0 overflow-clip rounded-[23px] backdrop-blur-[30px]"
          style={{
            background:
              "linear-gradient(180deg,rgba(0,0,0,0) 0%,rgba(98,236,255,0.2) 100%)," +
              "linear-gradient(180deg,rgba(0,0,0,0.2) 0%,rgba(98,236,255,0.2) 100%)," +
              "linear-gradient(90deg,rgba(0,0,0,0.3) 0%,rgba(0,0,0,0.3) 100%)",
          }}
        />
        <CardUnderWomanGlow />
      </div>

      {/* ── woman photo – z-20 ────────────────────────────────────────────── */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/assets/woman.webp"
        alt=""
        aria-hidden
        className="absolute z-20 pointer-events-none object-bottom"
        style={{ left: 356.5, top: 217, width: 653, height: 678 }}
      />

      {/* ── Card 2: Практико-ориентированный подход – z-30, top-right ─────── */}
      <FormatCard
        left={816.5} top={178} width={455} height={214}
        cardBg={bgDiag}
        titleText="Практико-ориентированный подход"
        titleGradient="linear-gradient(53.29deg,rgb(86,255,113) 21.7%,rgb(98,236,255) 93.9%)"
        titleWidth={341}
        bodyText="Каждый трек заканчивается созданием конкретного результата — модуля курса, кейса, прототипа ИИ‑решения или архитектуры"
        bodyTop={91} bodyWidth={398}
        glowSrc="/assets/format-glow-card2.svg" glowW={453} glowH={212}
        glowInsetTop="-0.94%" glowInsetLeft="-0.44%"
      />

      {/* ── Card 1: Полностью онлайн – z-30, center-left ──────────────────── */}
      <FormatCard
        left={151.5} top={391} width={360} height={161}
        cardBg={bgCard1}
        titleText="Полностью онлайн"
        titleGradient="linear-gradient(44.71deg,rgb(86,255,113) 21.7%,rgb(98,236,255) 93.9%)"
        titleWidth={231}
        bodyText="Вебинары с практиками, электронные курсы, домашние задания и итоговая аттестация"
        bodyTop={62} bodyWidth={310}
        glowSrc="/assets/format-glow-card1.svg" glowW={358} glowH={159}
        glowInsetTop="-1.26%" glowInsetLeft="-0.56%"
      />

      {/* ── Card 3: Гибкий формат по времени – z-30, bottom-right ────────── */}
      <FormatCard
        left={816.5} top={687} width={455} height={161}
        cardBg={bgCard3}
        titleText="Гибкий формат по времени"
        titleGradient="linear-gradient(36.41deg,rgb(86,255,113) 21.7%,rgb(98,236,255) 93.9%)"
        titleWidth={316}
        bodyText="Занятия распределены по сезонам чтобы их можно было совмещать с учебной нагрузкой и сессией"
        bodyTop={62} bodyWidth={398}
        glowSrc="/assets/format-glow-card3.svg" glowW={453} glowH={159}
        glowInsetTop="-1.26%" glowInsetLeft="-0.44%"
      />

      {/* ── heading – z-40, top of stack ──────────────────────────────────── */}
      <h2
        className="absolute z-40 font-sans leading-none not-italic"
        style={{ left: 151.5, top: 173, fontSize: 64, letterSpacing: -1.92, lineHeight: 1 }}
      >
        <span
          className="bg-clip-text text-transparent"
          style={{ backgroundImage: "linear-gradient(74.23deg,rgb(86,255,113) 21.7%,rgb(98,236,255) 93.9%)" }}
        >
          Формат
        </span>
        <br />
        <span className="text-gradient-white">обучения</span>
      </h2>

    </section>
  );
}
