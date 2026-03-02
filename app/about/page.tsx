"use client";

import AboutHero from "@/components/AboutHero";
import FeaturesSection from "@/components/FeaturesSection";
import TeamSection from "@/components/TeamSection";
import ContactSection from "@/components/ContactSection";
import LoadingSpinner from "@/components/LoadingSpinner";
import useLoading from "@/hooks/useLoading";

export default function About() {
  const loading = useLoading();

  if (loading) {
    return <LoadingSpinner isLoading={loading} />;
  }

  return (
    <main>
      <AboutHero />
      <FeaturesSection />
      <TeamSection />
      <ContactSection />
    </main>
  );
}
