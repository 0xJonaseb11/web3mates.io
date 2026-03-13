"use client";

import dynamic from "next/dynamic";

const AboutHero = dynamic(() => import("@/components/AboutHero"), { ssr: false });
const FeaturesSection = dynamic(() => import("@/components/FeaturesSection"), { ssr: false });
const TeamSection = dynamic(() => import("@/components/TeamSection"), { ssr: false });
const ContactSection = dynamic(() => import("@/components/ContactSection"), { ssr: false });

export default function About() {
  return (
    <main>
      <AboutHero />
      <FeaturesSection />
      <TeamSection />
      <ContactSection />
    </main>
  );
}
