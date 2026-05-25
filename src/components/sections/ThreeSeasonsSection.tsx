import { GradientText } from "@/components/ui/GradientText";
import { tn } from "@/lib/typography";
import type { CSSProperties } from "react";

// ---------------------------------------------------------------------------
// Season data
// ---------------------------------------------------------------------------
interface Season {
  id: string;
  /** Badge text ("март-апрель 2026") */
  date: string;
  /** Season label (white gradient) — "Весенний сезон:" */
  titleLabel: string;
  /** Season theme (green-blue gradient) — "ИИ в образовании…" */
  titleTheme: string;
  description: string;
  photo: string;
  /** SVG glow overlay (lines exactly on the folder contour) */
  glow: string;
  /** Total outer height of the folder (px, border-box) */
  folderH: number;
  /** Visible photo zone height (px) */
  photoH: number;
  /** Left & top inset for the photo zone and blackout (px) */
  photoInset: number;
  /** Width of the title+description block (px) */
  contentW: number;
  /** Left offset for title+description block (px) */
  contentLeft: number;
  /** Top offset for title+description block (px) */
  contentTop: number;
  /** Left offset for the date badge (px) */
  dateLeft: number;
  /** Right offset for the arrow (px) */
  arrowRight: number;
  /** Top offset for both date badge and arrow (px) */
  arrowTop: number;
}

const SEASONS: Season[] = [
  {
    id: "spring",
    date: "март-апрель 2026",
    titleLabel: "Весенний сезон:",
    titleTheme: "ИИ в образовании и управлении",
    description:
      "Весенний сезон посвящён тому, как ИИ меняет образование и бизнес. Здесь вы освоите ИИ‑инструменты для уроков и оценки, научитесь создавать и внедрять ИИ, а также получите современные подходы к управлению цифровыми проектами и процессами.",
    photo: "/assets/spring1.webp",
    glow: "/assets/glow-on-the-sides5.svg",
    folderH: 443,
    photoH: 403,
    photoInset: 20,
    contentW: 912,
    contentLeft: 60,
    contentTop: 145,
    dateLeft: 60,
    arrowRight: 60,
    arrowTop: 60,
  },
  {
    id: "summer",
    date: "лето 2026",
    titleLabel: "Летний сезон:",
    titleTheme: "отрасли, данные и риски",
    description:
      "Летний сезон сохраняет лучший опыт прежней Летней цифровой школы и добавляет акцент на данные для ИИ и отраслевые кейсы.",
    photo: "/assets/summer1.webp",
    glow: "/assets/glow-on-the-sides6.svg",
    folderH: 384,
    photoH: 344,
    photoInset: 19,
    contentW: 823,
    contentLeft: 59,
    contentTop: 143,
    dateLeft: 59,
    arrowRight: 59,
    arrowTop: 59,
  },
  {
    id: "autumn",
    date: "осень 2026",
    titleLabel: "Осенний сезон:",
    titleTheme: "управление и устойчивое развитие с ИИ",
    description:
      "Осенний сезон посвящён управлению в цифровом мире и устойчивому развитию. Здесь вы разберётесь, как строить программы изменений на основе данных и ИИ, включать ESG‑повестку в обучение и управлять цифровыми продуктами и командами.",
    photo: "/assets/autumn1.webp",
    glow: "/assets/glow-on-the-sides7.svg",
    folderH: 442,
    photoH: 402,
    photoInset: 19,
    contentW: 912,
    contentLeft: 59,
    contentTop: 143,
    dateLeft: 59,
    arrowRight: 59,
    arrowTop: 59,
  },
];

// ---------------------------------------------------------------------------
// SeasonArrow — Figma-accurate arrow (ellipse16 + vector9 + vector10)
// The arrow uses container-query units so it scales correctly inside any size.
// ---------------------------------------------------------------------------
function SeasonArrow({
  className,
  style,
}: {
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <div className={className ?? "relative aspect-square w-[45px]"} style={style}>
      {/* Ring — ellipse16 */}
      <div className="-translate-y-1/2 absolute left-0 right-0 top-1/2 aspect-square">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt=""
          className="absolute inset-0 block max-w-none size-full"
          src="/assets/ellipse16.svg"
        />
      </div>

      {/* Arrow shaft — vector9 (rotated −45°) */}
      <div
        className="absolute flex inset-[26.94%_25.83%_27.55%_28.67%] items-center justify-center"
        style={{ containerType: "size" }}
      >
        <div
          className="-rotate-45 flex-none"
          style={{ height: "hypot(50cqw, 50cqh)", width: "hypot(50cqw, -50cqh)" }}
        >
          <div className="relative size-full">
            <div className="absolute inset-[-6.91%]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt=""
                className="block max-w-none size-full"
                src="/assets/vector9.svg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Arrow tip — vector10 (rotated −45°) */}
      <div
        className="-translate-y-1/2 absolute flex items-center justify-center left-[25.56%] right-[25.83%] top-[calc(50%-0.14px)]"
        style={{ containerType: "size", aspectRatio: "21.87 / 21.87" }}
      >
        <div
          className="-rotate-45 flex-none"
          style={{ height: "hypot(50cqw, 50cqh)", width: "hypot(50cqw, -50cqh)" }}
        >
          <div className="relative size-full">
            <div className="absolute inset-[-6.47%]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt=""
                className="block max-w-none size-full"
                src="/assets/vector10.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// SeasonFolder — one "closed" folder card
//
// Border rule: outer wrapper has border-2 (NO overflow-clip so glow can
// sit on the border); inner glass div is overflow-clip.
// Glow SVG is positioned at left:-2px top:-2px at the outer folder's 1120×folderH
// dimensions — its stroke lines (at y=0.5 / x=0.5 etc.) land on the 2px contour.
// ---------------------------------------------------------------------------
function SeasonFolder({
  date,
  titleLabel,
  titleTheme,
  description,
  photo,
  glow,
  folderH,
  photoH,
  photoInset,
  contentW,
  contentLeft,
  contentTop,
  dateLeft,
  arrowRight,
  arrowTop,
}: Season) {
  return (
    <div
      className="relative w-full rounded-[50px]"
      style={{ height: folderH, border: "2px solid rgba(255,255,255,0.2)" }}
    >
      {/* ── Frosted glass fill (clipped to inner rounded rect) ── */}
      <div className="absolute inset-0 overflow-clip rounded-[48px] backdrop-blur-[25px] bg-black/20" />

      {/* ── Photo zone ── */}
      <div
        className="absolute overflow-hidden rounded-[30px]"
        style={{ left: photoInset, top: photoInset, width: 1080, height: photoH }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={photo}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        {/* Blackout gradient: transparent → semi-dark → near-opaque */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.65) 46%, rgba(0,0,0,0.9) 100%)",
          }}
        />
      </div>

      {/* ── Blackout substrate border (2px contour over the photo zone) ── */}
      <div
        className="pointer-events-none absolute rounded-[30px]"
        style={{
          left: photoInset,
          top: photoInset,
          width: 1080,
          height: photoH,
          border: "2px solid rgba(255,255,255,0.2)",
        }}
      />

      {/* ── Glow SVG ──
           A non-replaced <div> wrapper with inset:-2px derives its size as
           (content_width + 2 + 2) inside the same coordinate system — no mixed-unit
           issues from calc(). The SVG img fills the wrapper 100%×100%. */}
      <div
        className="pointer-events-none absolute"
        style={{ inset: "-2px" }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={glow}
          alt=""
          aria-hidden
          className="block h-full w-full"
        />
      </div>

      {/* ── Date badge ── */}
      <div
        className="absolute inline-flex items-center justify-center overflow-hidden rounded-full border-2 border-light-green px-[25px] py-[13px]"
        style={{ left: dateLeft, top: arrowTop }}
      >
        <span className="whitespace-nowrap font-mono text-cap16 text-light-green">
          {date}
        </span>
      </div>

      {/* ── Arrow (Figma-accurate) ── */}
      <SeasonArrow
        className="absolute size-[45px]"
        style={{ right: arrowRight, top: arrowTop }}
      />

      {/* ── Title + description ── */}
      <div
        className="absolute flex flex-col gap-[40px]"
        style={{ left: contentLeft, top: contentTop, width: contentW }}
      >
        <p className="text-h3 leading-none [text-box-edge:cap_alphabetic] [text-box-trim:trim-both]">
          <GradientText variant="white">{titleLabel}</GradientText>
          <br />
          <GradientText>{tn(titleTheme)}</GradientText>
        </p>
        <p className="text-t24 text-gradient-white">{tn(description)}</p>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// ThreeSeasonsSection — public export
// ---------------------------------------------------------------------------
export function ThreeSeasonsSection() {
  return (
    <section
      id="seasons"
      className="relative isolate w-full pb-[160px] pt-[120px]"
    >
      {/* ══════════════════════════════════════════════════════════════════
          BACKGROUND — exact 4-layer gradient from Figma (gradient_block 3).
          Layers are positioned in section-relative pixels derived from the
          page-level % insets in figma-export.tsx (page 9667px, section top 2855px).
          Each layer uses containerType:"size" so its h-[100cqh]/w-[100cqw] child
          fills the container, then the inner SVG extends further via inset-[…].
          ══════════════════════════════════════════════════════════════════ */}

      {/* Layer 1 — vector7199 (main, no blend) */}
      <div
        className="pointer-events-none absolute flex items-center justify-center"
        style={{ containerType: "size", top: 445, left: -196, width: 1867, height: 1104 }}
      >
        <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
          <div className="relative size-full">
            <div className="absolute inset-[-54.33%_-32.11%]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt=""
                className="block max-w-none size-full"
                src="/assets/vector7199.svg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Layer 2 — vector7202 (no blend) */}
      <div
        className="pointer-events-none absolute flex items-center justify-center"
        style={{ containerType: "size", top: 683, left: 54, width: 1373, height: 692 }}
      >
        <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
          <div className="relative size-full">
            <div className="absolute inset-[-62.9%_-31.74%]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt=""
                className="block max-w-none size-full"
                src="/assets/vector7202.svg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Layer 3 — vector7200 (mix-blend-mode: color-dodge) */}
      <div
        className="pointer-events-none absolute flex items-center justify-center mix-blend-color-dodge"
        style={{ containerType: "size", top: 622, left: -29, width: 1229, height: 870 }}
      >
        <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
          <div className="relative size-full">
            <div className="absolute inset-[-25.13%_-17.73%]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt=""
                className="block max-w-none size-full"
                src="/assets/vector7200.svg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Layer 4 — vector7201 (mix-blend-mode: lighten) */}
      <div
        className="pointer-events-none absolute flex items-center justify-center mix-blend-lighten"
        style={{ containerType: "size", top: 644, left: 6, width: 847, height: 364 }}
      >
        <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
          <div className="relative size-full">
            <div className="absolute inset-[-44.93%_-19.31%]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt=""
                className="block max-w-none size-full"
                src="/assets/vector7201.svg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ── Blue ellipse glow (right edge sweep, matches Block 2 style) ──
           Wide horizontal ellipse (rx=410 ry=182) creates a diffuse sweep
           from the right edge rather than a concentrated spot.
           Container center at ~1500px (60px off-screen), inset expands SVG
           to full 2420×1964px so the blur sweeps in from the right. */}
      <div
        className="pointer-events-none absolute"
        style={{ left: "calc(83.33% - 110px)", top: 97, width: 820, height: 364 }}
      >
        <div className="absolute inset-[-219.78%_-97.56%]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt=""
            className="block max-w-none size-full"
            src="/assets/ellipse-sky-blue-block2.svg"
          />
        </div>
      </div>

      {/* ── Section title ── */}
      <div className="relative text-center">
        <h2 className="text-h2 leading-none">
          <GradientText className="block">{tn("Три сезона")}</GradientText>
          <GradientText variant="white" className="block">
            {tn("Цифровой школы Сбера")}
          </GradientText>
        </h2>

        <p className="relative mx-auto mt-[30px] max-w-[740px] text-t24 text-gradient-white">
          {tn(
            "Выберите сезон и трек, который подходит вашей дисциплине. Часть треков повторяется в нескольких сезонах",
          )}
        </p>
      </div>

      {/* ── Warning banner ── */}
      <div className="container-page relative mt-[30px]">
        <div className="flex w-full items-center justify-center gap-[10px] overflow-hidden rounded-full border-2 border-bright-green px-[20px] py-[12px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/24-stroke-ds-ic24-exclamation1.svg"
            alt=""
            aria-hidden
            className="size-[24px] shrink-0"
          />
          <p className="font-mono text-cap16 text-bright-green">
            {tn("Пройти обучение в школе можно только ")}
            <strong className="font-normal">по 1 треку 1 раз за год</strong>
            {tn(
              ". Внимательно отнеситесь к выбору образовательной траектории",
            )}
          </p>
        </div>
      </div>

      {/* ── Season folder cards ── */}
      <div className="container-page relative mt-[60px] flex flex-col gap-[20px]">
        {SEASONS.map((season) => (
          <SeasonFolder key={season.id} {...season} />
        ))}
      </div>
    </section>
  );
}
