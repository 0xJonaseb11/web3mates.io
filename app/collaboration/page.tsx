"use client";

import CollaborationHero from "@/components/CollaborationHero";
import MiddleDecoration from "@/components/MiddleDecoration";
import CollaborationStories from "@/components/CollaborationStories";
import React from "react";
import ContactSection from "@/components/ContactSection";
import LoadingSpinner from "@/components/LoadingSpinner";
import useLoading from "@/hooks/useLoading";
import TopCollaborator from "@/components/TopCollaborator";
import PartnersShowcase from "@/components/PartnersShowcase";

const Collaboration = () => {
  const loading = useLoading();

  if (loading) {
    return <LoadingSpinner isLoading={loading} />;
  }

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
};

export default Collaboration;
