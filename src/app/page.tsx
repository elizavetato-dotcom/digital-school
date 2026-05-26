import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { QuoteSection } from "@/components/sections/QuoteSection";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { ThreeSeasonsSection } from "@/components/sections/ThreeSeasonsSection";
import { FormatSection } from "@/components/sections/FormatSection";

export default function Home() {
  return (
    <main className="design-root relative">
      <Header />
      <Hero />
      {/* pull Quote 100px closer to Hero; Benefits/Seasons follow automatically */}
      <div className="-mt-[100px]">
        <QuoteSection />
        <BenefitsSection />
        <ThreeSeasonsSection />
        <FormatSection />
      </div>
    </main>
  );
}
