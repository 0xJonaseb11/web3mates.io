"use client";

import dynamic from "next/dynamic";

const HeroSection = dynamic(() => import("@/components/HeroSection"), { ssr: false, loading: () => null });
const ImpactSection = dynamic(() => import("@/components/ImpactSection"), { ssr: false, loading: () => null });
const EmpowerSection = dynamic(() => import("@/components/EmpowerSection"), { ssr: false, loading: () => null });
const InnovateSection = dynamic(() => import("@/components/InnovateSection"), { ssr: false, loading: () => null });
const NewsletterSection = dynamic(() => import("@/components/NewsletterSection"), { ssr: false, loading: () => null });
const CarouselSection = dynamic(() => import("@/components/CarouselSection"), { ssr: false, loading: () => null });
const PartnersShowcase = dynamic(() => import("@/components/PartnersShowcase"), { ssr: false, loading: () => null });

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ImpactSection />
      <EmpowerSection />
      <InnovateSection />
      <CarouselSection />
      <NewsletterSection />
      <PartnersShowcase />
    </div>
  );
}
