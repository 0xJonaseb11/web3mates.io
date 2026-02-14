"use client";

import EventsHero from "@/components/EventsHero";
import UpcomingEvents from "@/components/UpcomingEvents";
import LatestBlogPosts from "@/components/LatestBlogPosts";
import LoadingSpinner from "@/components/LoadingSpinner";
import useLoading from "@/hooks/useLoading";

export default function Events() {
  const loading = useLoading();

  if (loading) {
    return <LoadingSpinner isLoading={loading} />;
  }

  return (
    <main>
      <EventsHero />

      <LatestBlogPosts />
      <UpcomingEvents />
    </main>
  );
}
