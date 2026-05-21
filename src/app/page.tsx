import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { QuoteSection } from "@/components/sections/QuoteSection";
import { BenefitsSection } from "@/components/sections/BenefitsSection";

export default function Home() {
  return (
    <main className="design-root relative">
      <Header />
      <Hero />
      <QuoteSection />
      <BenefitsSection />
    </main>
  );
}
