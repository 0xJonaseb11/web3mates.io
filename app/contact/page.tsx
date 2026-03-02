"use client";

import ContactHero from "@/components/ContactHero";
import LocationMap from "@/components/LocationMap";
import UpcomingEvents from "@/components/UpcomingEvents";
import LoadingSpinner from "@/components/LoadingSpinner";
import useLoading from "@/hooks/useLoading";

export default function Contact() {
  const loading = useLoading();

  if (loading) {
    return <LoadingSpinner isLoading={loading} />;
  }

  return (
    <main>
      <ContactHero />
      <LocationMap />
      <UpcomingEvents />
    </main>
  );
}
