"use client";

import dynamic from "next/dynamic";

const LoadingContent = dynamic(() => import("./loading-content"), {
  ssr: false,
  loading: () => null,
});

export default function Loading() {
  return <LoadingContent />;
}
