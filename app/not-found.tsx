"use client";

import dynamic from "next/dynamic";

const Content = dynamic(() => import("./NotFoundContent"), {
  ssr: false,
  loading: () => null,
});

export default function NotFound() {
  return <Content />;
}
