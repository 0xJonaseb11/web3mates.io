"use client";

import dynamic from "next/dynamic";
import LoadingSpinner from "@/components/LoadingSpinner";

const MentorshipApplyForm = dynamic(
  () => import("@/components/MentorshipApplyForm"),
  {
    ssr: false,
    loading: () => <LoadingSpinner isLoading={true} />,
  }
);

export default function ApplyPage() {
  return <MentorshipApplyForm />;
}
