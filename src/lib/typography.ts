// Russian typography: glue short prepositions / conjunctions to the next
// word with a non-breaking space so they never dangle at a line end.

const NBSP = " ";

const GLUE_3 = [
  "для",
  "без",
  "над",
  "под",
  "при",
  "про",
  "что",
  "как",
  "или",
  "обо",
  "изо",
];

/** Replaces the space after short words with a non-breaking space. */
export function tn(text: string): string {
  let t = text;
  const short = /(^|[\s("«])([а-яёА-ЯЁ]{1,2})\s+/g;
  // run twice to catch consecutive short words ("и в облаках")
  t = t.replace(short, `$1$2${NBSP}`);
  t = t.replace(short, `$1$2${NBSP}`);
  const three = new RegExp(`(^|[\\s("«])(${GLUE_3.join("|")})\\s+`, "gi");
  t = t.replace(three, `$1$2${NBSP}`);
  return t;
}
