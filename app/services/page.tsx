"use client";

import dynamic from "next/dynamic";

const ServicesHero = dynamic(() => import("@/components/ServicesHero"), { ssr: false });
const ServicesFeatures = dynamic(() => import("@/components/ServicesFeatures"), { ssr: false });
const ServicesOffer = dynamic(() => import("@/components/ServicesOffer"), { ssr: false });
const ContactSection = dynamic(() => import("@/components/ContactSection"), { ssr: false });

export default function Services() {
  return (
    <main>
      <ServicesHero />
      <ServicesFeatures />
      <ServicesOffer />
      <ContactSection />
    </main>
  );
}
