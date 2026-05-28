@AGENTS.md

# Цифровая школа Сбера 2026 — лендинг

Пиксель-в-пиксель верстка лендинга из Figma. Десктоп 1440px, тёмная тема.

## Стек
- Next.js 16 (App Router) + React 19 + TypeScript
- Tailwind CSS v4 (CSS-конфиг в `src/app/globals.css`, токены в `@theme`)
- Шрифты: SB Sans Display + SB Sans Cond Mono (`public/fonts`, подключены в `src/lib/fonts.ts`)

## Источник дизайна (Figma)
- Основной файл: `ephnL5uzFLoLwYJ166Zz0g`, фрейм лендинга `node-id 1:49` (1440×9667)
- Дополнительный файл (стеклянные объекты): `2IBOoRHzHZR4u7MbDZdGao`
- Перед версткой/правкой секции — брать данные через Figma MCP (`get_design_context` по node-id)
- `_design/figma-reference.png` — полный скриншот макета, `_design/figma-export.tsx` — референс-код

## Архитектура
- `src/app/page.tsx` — собирает секции
- `.design-root` — холст фиксированной ширины 1440px, масштабируется под вьюпорт через `zoom: var(--design-scale)` (пропорциональное масштабирование). Начальный масштаб ставит инлайн-скрипт в `layout.tsx`, обновляет `DesignScaler`
- `src/components/sections/` — секции, `src/components/ui/` — переиспользуемые компоненты
- `src/lib/typography.ts` — `tn()` приклеивает короткие предлоги/союзы неразрывным пробелом. **Оборачивать ВЕСЬ русский текст в `tn()`**

## ПРАВИЛА ДИЗАЙНА (соблюдать всегда)
1. **Контуры — 2px.** Все обводки плашек и карточек — ровно 2px. Все glow-линии — тоже 2px и лежат СТРОГО на контуре (совпадают с границей), не вылезают за пределы и не смещены внутрь. Из-за `overflow: clip` линии нельзя положить на границу изнутри — карточка строится слоями: внешний слой (контур, без обрезки) + внутренний стекло-фон (обрезан) + glow-линии на контуре. Эталон карточки — Figma `1:396`.
2. **Без швов между блоками.** Чётких линий на стыках секций быть не должно — фон выглядит как одно сплошное полотно с плавными невидимыми переходами. Секции прозрачные (фон даёт `body`), свечения перетекают через границы за счёт блюра, без `overflow`-обрезки на стыках. Заблюренные эллипсы-свечения на фоне ставятся точечно — позиции согласовываются с заказчиком.
3. **Текст в кнопках — оптически по центру.** Круглые/pill-кнопки: текст визуально по центру. Использовать `text-box-trim: trim-both; text-box-edge: cap alphabetic` (обрезка лайн-бокса до cap-height/baseline) — реализовано в `src/components/ui/Button.tsx`.

## Типографика (Figma letterSpacing = проценты → em)
12 стилей в `globals.css @theme`: hero 144, numeral 88, h2 64, h3 48, h4 40, h5 32, t24/t20/t16, track 20, cap20/cap16 (Cond Mono).

## QA-воркфлоу
- Dev-сервер: `npm run dev` (порт 3000)
- Скриншоты: `node _design/shot.mjs <width> <out> [selector]` — Playwright, подгоняет вьюпорт чтобы `clientWidth == width` (zoom точный). Без селектора — вся страница.
- Сверять каждую секцию с `_design/figma-reference.png`

## Прогресс верстки (Фаза 4 — секции, 6 из 11 готовы)
- ✅ Header — `Header.tsx`
- ✅ Hero — `Hero.tsx` (фон `hero-background.webp`, мужчина на переднем плане)
- ✅ Цитата Грефа — `QuoteSection.tsx`
- ✅ Что получает преподаватель — `BenefitsSection.tsx` (сетка 6 карточек, свечения `glow-cards-back/front`)
- ✅ Три сезона — `ThreeSeasonsSection.tsx` (3 папки, Figma-arrow ellipse16+v9+v10, 4-layer gradient bg, border-2 + glow-on-border rule)
- ✅ Формат обучения — `FormatSection.tsx` (Figma 58:361, 3 карточки + женщина, абсолютная сетка 1440px, glow-on-the-sides2/3/4)
- ⬜ Осталось: Условия участия → Stats «7 лет» → FAQ → CTA → Footer
- Дальше: Фаза 5 (адаптив — мобилка) и Фаза 6 (интерактив, QA)

## ThreeSeasonsSection — детали реализации
- **SeasonArrow**: ellipse16.svg + vector9.svg + vector10.svg, `containerType:"size"`, `hypot()` CSS для размера, rotate -45°
- **Градиент фона**: 4 слоя (vector7199/7202/7200/7201), позиции в px относительно section top (page y=2855), blend: color-dodge / lighten на слоях 3/4
- **Синий эллипс**: `ellipse-blue-block3.svg` at `left: calc(100%-122px), top: 97px`, expand `inset-[-138.89%_-203.05%]`
- **Папка**: outer `border-2 border-white/20` (NO overflow-clip) + inner `overflow-clip rounded-[48px] backdrop-blur-[25px]` + glow `left:-2px top:-2px width:1120 height:folderH` → линии SVG падают строго на контур 2px
- **Подложка фото**: `border-2 border-white/20` на blackout substrate div
