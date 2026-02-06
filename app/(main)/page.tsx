import { Hero } from "@/components/home/hero";
import { PhasesSection } from "@/components/home/phases-section";
import { JudgesCarousel } from "@/components/home/judges-carousel";
import { PrizesSection } from "@/components/home/prizes-section";
import { About } from "@/components/home/about";
import { Gallery } from "@/components/home/gallery";
import { SponsorsSection } from "@/components/home/sponsors-section";

export default function HomePage() {
  return (
    <>
      <Hero />
      <PhasesSection />
      <JudgesCarousel />
      <PrizesSection />
      <SponsorsSection />
      <Gallery />
      <About />
    </>
  );
}
