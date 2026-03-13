"use client";

import dynamic from "next/dynamic";

const ContactHero = dynamic(() => import("@/components/ContactHero"), { ssr: false });
const LocationMap = dynamic(() => import("@/components/LocationMap"), { ssr: false });
const UpcomingEvents = dynamic(() => import("@/components/UpcomingEvents"), { ssr: false });

export default function Contact() {
  return (
    <main>
      <ContactHero />
      <LocationMap />
      <UpcomingEvents />
    </main>
  );
}
