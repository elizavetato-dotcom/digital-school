import { chromium } from "playwright";

// usage: node _design/shot.mjs [width] [out] [selector]
// with selector → screenshots that element; without → full page
const [, , wArg, out = ".shot.png", selector] = process.argv;
const width = Number(wArg) || 1440;

const browser = await chromium.launch();
const page = await browser.newPage({
  viewport: { width, height: 1000 },
  deviceScaleFactor: 1,
});
await page.goto("http://localhost:3000", { waitUntil: "networkidle" });

// widen viewport by the scrollbar so clientWidth === width (zoom is exact)
const sb = await page.evaluate(
  () => window.innerWidth - document.documentElement.clientWidth,
);
if (sb > 0) await page.setViewportSize({ width: width + sb, height: 1000 });
await page.waitForTimeout(500);

if (selector) {
  await page.locator(selector).first().screenshot({ path: out });
} else {
  await page.screenshot({ path: out, fullPage: true });
}

await browser.close();
console.log("saved", out, `${width}px`);
