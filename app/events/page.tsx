"use client";

import dynamic from "next/dynamic";

const EventsHero = dynamic(() => import("@/components/EventsHero"), { ssr: false });
const UpcomingEvents = dynamic(() => import("@/components/UpcomingEvents"), { ssr: false });
const LatestBlogPosts = dynamic(() => import("@/components/LatestBlogPosts"), { ssr: false });

export default function Events() {
  return (
    <main>
      <EventsHero />
      <LatestBlogPosts />
      <UpcomingEvents />
    </main>
  );
}
