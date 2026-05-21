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

        {/* dark fade — dissolves the man's lower edge into the background */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 z-30 h-[460px]"
          style={{
            background:
              "linear-gradient(180deg, rgba(10,10,10,0) 0%, rgba(10,10,10,0.85) 78%, rgba(10,10,10,1) 100%)",
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
