import { GradientText } from "@/components/ui/GradientText";
import { GridOverlay } from "@/components/ui/GridOverlay";
import { tn } from "@/lib/typography";

const BENEFITS = [
  {
    icon: "icon-passport",
    title: "Удостоверение о повышении квалификации",
    text: "С учётом академических часов по выбранным трекам",
  },
  {
    icon: "icon-box",
    title: "Методические материалы и конспекты для занятий",
    text: "Готовые материалы, которые можно сразу использовать на своих курсах",
  },
  {
    icon: "icon-case",
    title: "Набор бизнес-кейсов и практических задач",
    text: "Из реального опыта Сбера и партнёров",
  },
  {
    icon: "icon-paper-tray",
    title: "Презентации и шаблоны заданий",
    text: "Которые можно сразу использовать на своих курсах",
  },
  {
    icon: "icon-link",
    title: "Лицензии на цифровые платформы и ИИ-инструменты",
    text: "Доступ к лабораторным и студенческим лицензиям",
  },
  {
    icon: "icon-student-hat",
    title: "Сообщество преподавателей и экспертов",
    text: "Для обсуждения кейсов и обмена практиками",
  },
];

/** 2px glow lines sitting exactly on the card's 2px contour. */
function EdgeGlow() {
  const blue = "rgba(98,236,255,0.6)";
  const h = `linear-gradient(90deg, transparent, ${blue}, transparent)`;
  const v = `linear-gradient(180deg, transparent, ${blue}, transparent)`;
  return (
    <>
      <span
        className="pointer-events-none absolute -top-[2px] left-1/2 h-[2px] w-[275px] -translate-x-1/2"
        style={{ background: h }}
      />
      <span
        className="pointer-events-none absolute -bottom-[2px] left-1/2 h-[2px] w-[275px] -translate-x-1/2"
        style={{ background: h }}
      />
      <span
        className="pointer-events-none absolute -left-[2px] top-[94px] h-[80px] w-[2px]"
        style={{ background: v }}
      />
      <span
        className="pointer-events-none absolute -right-[2px] top-[35px] h-[80px] w-[2px]"
        style={{ background: v }}
      />
    </>
  );
}

function BenefitCard({
  icon,
  title,
  text,
}: {
  icon: string;
  title: string;
  text: string;
}) {
  return (
    <div
      className="relative h-[209px] rounded-[30px]"
      style={{ border: "2px solid rgba(255,255,255,0.2)" }}
    >
      {/* frosted glass body — clipped & rounded so the blur stays inside */}
      <div className="absolute inset-0 overflow-clip rounded-[28px] bg-black/50 backdrop-blur-[25px]" />
      {/* edge glow lines — exactly on the 2px contour */}
      <EdgeGlow />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`/assets/${icon}.svg`}
        alt=""
        className="absolute left-[23px] top-[23px] h-[38px] w-[38px]"
      />
      <div className="absolute bottom-[23px] left-[23px] flex w-[310px] flex-col gap-[15px]">
        <p className="text-t20 text-gradient-main">{tn(title)}</p>
        <p className="w-[295px] text-t16 text-gradient-white">{tn(text)}</p>
      </div>
    </div>
  );
}

export function BenefitsSection() {
  return (
    <section
      id="benefits"
      className="relative isolate w-full pb-[160px] pt-[120px]"
    >
      {/* faint grid texture */}
      <GridOverlay
        opacity={0.1}
        fade="linear-gradient(180deg, transparent 0%, #000 50%, transparent 100%)"
      />

      {/* diffuse blue glow — scattered between this block and the previous */}
      <div
        className="pointer-events-none absolute right-0 -top-[260px] h-[560px] w-[820px]"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(8,130,255,0.6) 0%, rgba(8,130,255,0) 78%)",
          filter: "blur(170px)",
        }}
      />

      <h2 className="relative text-center text-h2">
        <GradientText>{tn("Что получает ")}</GradientText>
        <GradientText variant="white">преподаватель</GradientText>
      </h2>
      <p className="relative mx-auto mt-[30px] max-w-[930px] text-center text-t24 text-gradient-white">
        {tn(
          "После прохождения трека вы сможете не только использовать ИИ и цифровые инструменты сами, но и встроить их в учебный процесс",
        )}
      </p>

      <div className="container-page relative isolate mt-[60px]">
        {/* light back — single layer behind the cards, centred between
            the four blocks; their backdrop-blur softens it. Animatable. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/glow-cards-back.webp"
          alt=""
          aria-hidden
          data-glow="cards-back"
          className="pointer-events-none absolute left-[134px] top-[-182px] -z-10 h-[804px] w-[792px]"
        />

        <div className="grid grid-cols-3 gap-[20px]">
          {BENEFITS.map((benefit) => (
            <BenefitCard key={benefit.title} {...benefit} />
          ))}
        </div>

        {/* light front — on top of the cards, same centre as light back */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/glow-cards-front.webp"
          alt=""
          aria-hidden
          data-glow="cards-front"
          className="pointer-events-none absolute left-[330px] top-[5px] h-[399px] w-[399px]"
        />
      </div>
    </section>
  );
}
