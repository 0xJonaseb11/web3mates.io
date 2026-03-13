"use client";

import dynamic from "next/dynamic";

const MentorshipContent = dynamic(
  () => import("@/components/MentorshipContent"),
  {
    ssr: false,
    loading: () => null,
  }
);

export default function MentorshipPage() {
  return <MentorshipContent />;
}
