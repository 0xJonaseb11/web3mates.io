"use client";

import dynamic from "next/dynamic";

const MentorsApplyForm = dynamic(() => import("./MentorsApplyForm"), {
  ssr: false,
  loading: () => null,
});

export default function Page() {
  return <MentorsApplyForm />;
}
