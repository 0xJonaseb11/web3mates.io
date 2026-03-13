"use client";

import dynamic from "next/dynamic";
import React from "react";

const CollaborationHero = dynamic(() => import("@/components/CollaborationHero"), { ssr: false });
const TopCollaborator = dynamic(() => import("@/components/TopCollaborator"), { ssr: false });
const MiddleDecoration = dynamic(() => import("@/components/MiddleDecoration"), { ssr: false });
const CollaborationStories = dynamic(() => import("@/components/CollaborationStories"), { ssr: false });
const ContactSection = dynamic(() => import("@/components/ContactSection"), { ssr: false });
const PartnersShowcase = dynamic(() => import("@/components/PartnersShowcase"), { ssr: false });

export default function Collaboration() {
  return (
    <div>
      <CollaborationHero />
      <TopCollaborator />
      <MiddleDecoration />

      <CollaborationStories />
      <ContactSection />
      <PartnersShowcase />
    </div>
  );
}
