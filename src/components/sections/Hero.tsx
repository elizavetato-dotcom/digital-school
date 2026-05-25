import { Button } from "@/components/ui/Button";
import { tn } from "@/lib/typography";

export function Hero() {
  return (
    <section id="top" className="relative isolate w-full overflow-hidden bg-bg">
      <div className="relative mx-auto min-h-[1368px] w-full max-w-[1440px]">
        {/* composed background — gradients, glow, circles, binary code */}
        <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[1368px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/hero-background.webp"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>

        {/* binary code — from the very top (top:0), mix-blend-color-dodge.
            No hard-edge overlay inside — gradient top-fade is separate below. */}
        <div className="pointer-events-none absolute left-0 top-0 z-[1] h-[964px] w-[1444px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/binary-code-back.webp"
            alt=""
            className="h-full w-full object-cover"
            style={{ mixBlendMode: "color-dodge", opacity: 0.07 }}
          />
        </div>

        {/* top dark gradient — fades hero from near-black at top to transparent.
            Covers the full width, no hard edges, sits above binary code. */}
        <div
          className="pointer-events-none absolute inset-x-0 top-0 z-[2] h-[420px]"
          style={{
            background:
              "linear-gradient(180deg, rgba(10,10,10,0.92) 0%, rgba(10,10,10,0.55) 45%, rgba(10,10,10,0) 100%)",
          }}
        />

        {/* man with laptop — foreground, mirrored */}
        <div
          className="pointer-events-none absolute top-[224px] z-20 h-[993px] w-[1233px]"
          style={{ left: "calc(25% + 76px)" }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/man-in-main-screen.webp"
            alt=""
            className="h-full w-full -scale-x-100 object-cover"
          />
        </div>

        {/* dark shape on man — blurred black ellipse that dissolves the
            man's lower body. Exact Figma coords: top 1010px, left calc(33.33%+61px),
            1370×447px (node 1:359). Z-25 = above man (z-20), below full-section fade. */}
        <div
          className="pointer-events-none absolute z-[25] h-[447px] w-[1370px]"
          style={{ top: 1010, left: "calc(33.33% + 61px)" }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/dark-shape-on-man.svg"
            alt=""
            className="block h-full w-full"
          />
        </div>

        {/* dark fade — dissolves the section bottom edge into the background */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 z-30 h-[500px]"
          style={{
            background:
              "linear-gradient(180deg, rgba(10,10,10,0) 0%, rgba(10,10,10,0.9) 75%, rgba(10,10,10,1) 100%)",
          }}
        />

        {/* content */}
        <div className="relative z-10">
          <h1 className="absolute left-[160px] top-[171px] text-hero text-white">
            Цифровая школа
            <br />
            Сбера 2026
          </h1>

          <p
            className="absolute left-[160px] top-[479px] text-h4"
            style={{
              backgroundImage:
                "linear-gradient(90deg, #56FF71 0%, #62ECFF 55%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            {tn("для преподавателей вузов и колледжей")}
          </p>

          <p className="absolute left-[160px] top-[547px] w-[645px] text-[26px] leading-[1.2] tracking-[-0.01em] text-gradient-white">
            {tn(
              "Всесезонная программа повышения квалификации преподавателей в России с фокусом на цифровые технологии, ИИ и развитие мягких навыков",
            )}
          </p>

          <Button
            href="#apply"
            className="absolute left-[160px] top-[694px] h-[70px] w-[265px]"
          >
            Подать заявку
          </Button>
        </div>
      </div>
    </section>
  );
}
