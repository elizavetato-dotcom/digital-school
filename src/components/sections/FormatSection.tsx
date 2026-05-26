import type { ReactNode } from "react";
import { GradientText } from "@/components/ui/GradientText";
import { GridOverlay } from "@/components/ui/GridOverlay";
import { tn } from "@/lib/typography";

// ---------------------------------------------------------------------------
// FormatCard — один из трёх информационных блоков раздела
// Следует правилу CLAUDE.md: внешний border-2 без overflow-clip,
// внутренний стекло-слой (overflow-clip), glow-линии по контуру (inset:-2px).
// ---------------------------------------------------------------------------
interface FormatCardProps {
  /** px от левого края секции */
  left: number;
  /** px от верхнего края секции */
  top: number;
  width: number;
  height: number;
  /** Цветной заголовок (green→blue gradient) */
  title: ReactNode;
  /** px от top карточки, отступ сверху до заголовка */
  titleTop?: number;
  /** Ширина контейнера заголовка (Figma: точная ширина текстового блока) */
  titleWidth: number;
  /** Описание (white gradient) */
  description: string;
  /** px от top карточки, отступ до описания */
  descriptionTop: number;
  /** Ширина контейнера описания */
  descriptionWidth: number;
  /** SVG-файл glow-линий, viewBox = {width}×{height} */
  glowSrc: string;
  children?: ReactNode; // внутренние эллипсы-декорации
}

function FormatCard({
  left,
  top,
  width,
  height,
  title,
  titleTop = 18,
  titleWidth,
  description,
  descriptionTop,
  descriptionWidth,
  glowSrc,
  children,
}: FormatCardProps) {
  return (
    <div
      className="absolute border-2 border-white/10 rounded-[25px]"
      style={{ left, top, width, height }}
    >
      {/* ── Стекло + декорации + текст (всё обрезается overflow-clip) ── */}
      <div
        className="absolute overflow-clip rounded-[25px] backdrop-blur-[75px] bg-black/50"
        style={{ inset: "-2px" }}
      >
        {/* Декоративные эллипсы */}
        {children}

        {/* Заголовок */}
        <div
          className="absolute text-t24 text-gradient-main"
          style={{ left: 23, top: titleTop, width: titleWidth }}
        >
          {title}
        </div>

        {/* Описание */}
        <p
          className="absolute text-t20 text-gradient-white"
          style={{ left: 23, top: descriptionTop, width: descriptionWidth }}
        >
          {description}
        </p>
      </div>

      {/* ── Glow-линии по контуру ── */}
      <div className="pointer-events-none absolute" style={{ inset: "-2px" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={glowSrc}
          alt=""
          aria-hidden
          className="block h-full w-full"
        />
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// FormatSection — «Формат обучения» (Block 4, Figma node 58:361)
// ---------------------------------------------------------------------------
export function FormatSection() {
  return (
    <section
      id="format"
      className="relative isolate w-full overflow-hidden"
      style={{ height: 948 }}
    >
      {/* ══════════════════════════════════════════════════════════════════
          ФОНОВЫЕ ГРАДИЕНТЫ (gradient_block 4, Figma 58:454)
          Каждый слой горизонтально зеркалён (-scale-y-100 + rotate-180
          = scaleX(-1)). SVG-элемент выходит за границы контейнера
          через отрицательные inset-проценты.
          ══════════════════════════════════════════════════════════════════ */}

      {/* Слой 1 — vector7191 (основной, без режима наложения) */}
      <div
        className="pointer-events-none absolute"
        style={{ left: -33.51, top: 264.5, width: 1479, height: 692.5 }}
      >
        <div
          className="flex-none"
          style={{ width: 1479, height: 692.5, transform: "scaleX(-1)" }}
        >
          <div className="relative size-full">
            <div className="absolute" style={{ inset: "-54.3% -25.42%" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt=""
                className="block max-w-none size-full"
                src="/assets/vector7191.svg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Слой 2 — vector7190 (mix-blend-lighten) */}
      <div
        className="pointer-events-none absolute mix-blend-lighten"
        style={{ left: -43, top: 667.3, width: 1484.9, height: 261.1 }}
      >
        <div
          className="flex-none"
          style={{ width: 1484.9, height: 261.1, transform: "scaleX(-1)" }}
        >
          <div className="relative size-full">
            <div
              className="absolute"
              style={{ inset: "-57.6% -10.13% -57.38% -10.13%" }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt=""
                className="block max-w-none size-full"
                src="/assets/vector7190.svg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Слой 3 — vector7203 (mix-blend-multiply) */}
      <div
        className="pointer-events-none absolute mix-blend-multiply"
        style={{ left: -36.09, top: 539.56, width: 1520, height: 498.4 }}
      >
        <div
          className="flex-none"
          style={{ width: 1520, height: 498.4, transform: "scaleX(-1)" }}
        >
          <div className="relative size-full">
            <div className="absolute" style={{ inset: "-31.62% -10.37%" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt=""
                className="block max-w-none size-full"
                src="/assets/vector7203.svg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ── Сетка (Grid overlay) ── */}
      <GridOverlay opacity={0.07} blendMode="overlay" />

      {/* ══════════════════════════════════════════════════════════════════
          КОНТЕНТ (Block 4 (Format), Figma 58:459)
          Все абсолютные координаты — в пикселях от левого-верхнего угла
          секции (1440px широкий холст).
          ══════════════════════════════════════════════════════════════════ */}

      {/* ── Стеклянная подложка за женщиной ── */}
      <div
        className="absolute border-2 border-white/20 rounded-[25px]"
        style={{ left: 481.5, top: 230, width: 455, height: 378 }}
      >
        {/* Стекло-слой */}
        <div
          className="absolute overflow-clip rounded-[25px] backdrop-blur-[30px] bg-black/30"
          style={{ inset: "-2px" }}
        >
          {/* Эллипс-свечение снизу */}
          <div
            className="pointer-events-none absolute h-[600px]"
            style={{ bottom: -138, left: 49, right: 19 }}
          >
            <div className="absolute" style={{ inset: "-16.67% -26.11%" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt=""
                className="block max-w-none size-full"
                src="/assets/ellipse-down.svg"
              />
            </div>
          </div>
        </div>

        {/* Glow-линии по контуру подложки — встроенный SVG (455×378) */}
        <div className="pointer-events-none absolute" style={{ inset: "-2px" }}>
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 455 378"
            fill="none"
            overflow="visible"
            preserveAspectRatio="none"
            style={{ display: "block" }}
          >
            {/* Нижняя линия — зелёная */}
            <line
              x1="90"
              y1="377.5"
              x2="365"
              y2="377.5"
              stroke="url(#fmt-glow-bot)"
            />
            {/* Верхняя линия — синяя */}
            <line
              x1="90"
              y1="0.5"
              x2="365"
              y2="0.5"
              stroke="url(#fmt-glow-top)"
            />
            {/* Левая линия — зелёная */}
            <line
              x1="0.5"
              y1="300"
              x2="0.5"
              y2="120"
              stroke="url(#fmt-glow-left)"
            />
            {/* Правая линия — синяя */}
            <line
              x1="454.5"
              y1="240"
              x2="454.5"
              y2="60"
              stroke="url(#fmt-glow-right)"
            />
            <defs>
              <linearGradient
                id="fmt-glow-bot"
                x1="90"
                y1="378"
                x2="365"
                y2="378"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#56FF71" stopOpacity="0" />
                <stop offset="0.5" stopColor="#56FF71" stopOpacity="0.4" />
                <stop offset="1" stopColor="#56FF71" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="fmt-glow-top"
                x1="90"
                y1="0"
                x2="365"
                y2="0"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#62ECFF" stopOpacity="0" />
                <stop offset="0.5" stopColor="#62ECFF" stopOpacity="0.6" />
                <stop offset="1" stopColor="#62ECFF" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="fmt-glow-left"
                x1="0"
                y1="300"
                x2="0"
                y2="120"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#56FF71" stopOpacity="0" />
                <stop offset="0.5" stopColor="#56FF71" stopOpacity="0.4" />
                <stop offset="1" stopColor="#56FF71" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="fmt-glow-right"
                x1="455"
                y1="240"
                x2="455"
                y2="60"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#62ECFF" stopOpacity="0" />
                <stop offset="0.5" stopColor="#62ECFF" stopOpacity="0.6" />
                <stop offset="1" stopColor="#62ECFF" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/* ── Карточка 2: «Практико-ориентированный подход» (правый столбец, сверху) ── */}
      <FormatCard
        left={816.5}
        top={178}
        width={455}
        height={214}
        title={
          <>
            {tn("Практико-ориентированный")}
            <br />
            {tn("подход")}
          </>
        }
        titleWidth={389}
        description={tn(
          "Каждый трек заканчивается созданием конкретного результата — модуля курса, кейса, прототипа ИИ‑решения или архитектуры",
        )}
        descriptionTop={91}
        descriptionWidth={399}
        glowSrc="/assets/glow-on-the-sides3.svg"
      >
        {/* Эллипс 7 — нижнее свечение */}
        <div
          className="pointer-events-none absolute h-[75px]"
          style={{ bottom: -21, left: 190, right: -2 }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt=""
            className="absolute inset-0 block max-w-none size-full"
            src="/assets/ellipse7.svg"
          />
        </div>
        {/* Эллипс 10 — верхнее свечение */}
        <div
          className="pointer-events-none absolute h-[45px]"
          style={{ left: -12, right: 93, top: -5 }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt=""
            className="absolute inset-0 block max-w-none size-full"
            src="/assets/ellipse10.svg"
          />
        </div>
        {/* Эллипс 8 — левая полоса */}
        <div
          className="pointer-events-none absolute h-[97px] w-[45px]"
          style={{ left: -21, top: -2 }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt=""
            className="absolute inset-0 block max-w-none size-full"
            src="/assets/ellipse8.svg"
          />
        </div>
      </FormatCard>

      {/* ── Карточка 3: «Гибкий формат по времени» (правый столбец, снизу) ── */}
      <FormatCard
        left={816.5}
        top={687}
        width={455}
        height={161}
        title={tn("Гибкий формат по времени")}
        titleWidth={316}
        description={tn(
          "Занятия распределены по сезонам чтобы их можно было совмещать с учебной нагрузкой и сессией",
        )}
        descriptionTop={62}
        descriptionWidth={336}
        glowSrc="/assets/glow-on-the-sides2.svg"
      >
        {/* Эллипс 6 — нижнее свечение */}
        <div
          className="pointer-events-none absolute h-[56px]"
          style={{ bottom: -2, left: 186, right: -2 }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt=""
            className="absolute inset-0 block max-w-none size-full"
            src="/assets/ellipse6.svg"
          />
        </div>
        {/* Эллипс 9 — верхнее свечение */}
        <div
          className="pointer-events-none absolute h-[38px]"
          style={{ left: -2, right: 94, top: -5 }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt=""
            className="absolute inset-0 block max-w-none size-full"
            src="/assets/ellipse9.svg"
          />
        </div>
        {/* Эллипс 8 — левая полоса */}
        <div
          className="pointer-events-none absolute h-[97px] w-[45px]"
          style={{ left: -21, top: -2 }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt=""
            className="absolute inset-0 block max-w-none size-full"
            src="/assets/ellipse8.svg"
          />
        </div>
      </FormatCard>

      {/* ── Карточка 1: «Полностью онлайн» (левый столбец, середина) ── */}
      <FormatCard
        left={151.5}
        top={391}
        width={360}
        height={161}
        title={tn("Полностью онлайн")}
        titleWidth={231}
        description={tn(
          "Вебинары с практиками, электронные курсы, домашние задания и итоговая аттестация",
        )}
        descriptionTop={62}
        descriptionWidth={310}
        glowSrc="/assets/glow-on-the-sides4.svg"
      >
        {/* Эллипс 11 — нижнее свечение */}
        <div
          className="pointer-events-none absolute h-[76px]"
          style={{ bottom: -22, left: 85, right: -2 }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt=""
            className="absolute inset-0 block max-w-none size-full"
            src="/assets/ellipse11.svg"
          />
        </div>
        {/* Эллипс 12 — верхнее свечение */}
        <div
          className="pointer-events-none absolute h-[50px]"
          style={{ left: -12, right: 93, top: -10 }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt=""
            className="absolute inset-0 block max-w-none size-full"
            src="/assets/ellipse12.svg"
          />
        </div>
        {/* Эллипс 8 — левая полоса */}
        <div
          className="pointer-events-none absolute h-[97px] w-[45px]"
          style={{ left: -21, top: -2 }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt=""
            className="absolute inset-0 block max-w-none size-full"
            src="/assets/ellipse8.svg"
          />
        </div>
      </FormatCard>

      {/* ── Фотография женщины (передний план, перекрывает карточки) ── */}
      <div
        className="pointer-events-none absolute"
        style={{ left: 356.5, top: 217, width: 653, height: 678 }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/woman.webp"
          alt=""
          className="absolute inset-0 block max-w-none size-full object-cover object-bottom"
        />
      </div>

      {/* ── Заголовок «Формат обучения» ── */}
      <h2
        className="absolute text-h2 leading-none"
        style={{ left: 151.5, top: 173, width: 285 }}
      >
        <GradientText className="block">{tn("Формат")}</GradientText>
        <GradientText variant="white" className="block">
          {tn("обучения")}
        </GradientText>
      </h2>
    </section>
  );
}
