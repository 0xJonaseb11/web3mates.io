"use client";

import ServicesHero from "@/components/ServicesHero";
import ServicesFeatures from "@/components/ServicesFeatures";
import ServicesOffer from "@/components/ServicesOffer";
import ContactSection from "@/components/ContactSection";
import LoadingSpinner from "@/components/LoadingSpinner";
import useLoading from "@/hooks/useLoading";

export default function Services() {
  const loading = useLoading();

  if (loading) {
    return <LoadingSpinner isLoading={loading} />;
  }

  return (
    <main>
      <ServicesHero />
      <ServicesFeatures />
      <ServicesOffer />
      <ContactSection />
    </main>
  );
}
