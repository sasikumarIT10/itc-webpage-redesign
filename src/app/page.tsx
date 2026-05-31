import { Hero } from "@/components/Hero";
import { BrandMarquee } from "@/components/BrandMarquee";
import { StatsSection } from "@/components/StatsSection";
import { Businesses } from "@/components/Businesses";
import { NewsSection } from "@/components/NewsSection";
import { SustainabilitySection } from "@/components/SustainabilitySection";
import { InvestorStrip } from "@/components/InvestorStrip";
import { LeadershipSection } from "@/components/LeadershipSection";
import { ResourcesSection } from "@/components/ResourcesSection";

export default function Home() {
  return (
    <>
      <Hero />
      <BrandMarquee />
      <StatsSection />
      <Businesses />
      <NewsSection />
      <SustainabilitySection />
      <InvestorStrip />
      <LeadershipSection />
      <ResourcesSection />
    </>
  );
}
