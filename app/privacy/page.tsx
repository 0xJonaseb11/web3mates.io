"use client";

import dynamic from "next/dynamic";

const Content = dynamic(() => import("./StaticContent"), {
  ssr: false,
  loading: () => null,
});

export default function PrivacyPage(props: any) {
  return <Content />;
}
