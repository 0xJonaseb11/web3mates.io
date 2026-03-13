"use client";

import dynamic from "next/dynamic";
import NProgressProvider from "@/components/NProgressProvider";

const Navbar = dynamic(() => import("@/components/Navbar"), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <NProgressProvider>
      <Navbar />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </NProgressProvider>
  );
}
