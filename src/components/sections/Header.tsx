const navLinks = [
  { label: "Сезоны и треки", href: "#seasons" },
  { label: "Что получите", href: "#benefits" },
  { label: "FAQ", href: "#faq" },
];

export function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="container-page flex items-center justify-between pt-[40px]">
        <a
          href="#top"
          className="text-t24 text-gradient-main whitespace-nowrap"
        >
          Цифровая школа Сбера 2026
        </a>

        <nav className="flex items-center gap-[50px]">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-t16 text-white transition-colors duration-200 hover:text-bright-green"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
