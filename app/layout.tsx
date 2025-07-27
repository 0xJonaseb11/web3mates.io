import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NProgressProvider from "@/components/NProgressProvider";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Web3 Mates - Blockchain Catalyst",
  description: "Empowering Africa's Web3 Builders—One Line of Code at a Time.",
  icons: {
    icon: "/logo.jpeg", // Reference favicon in /public
  },
  // Note: viewport is handled manually in <head> below
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={montserrat.variable}>
      <head>
        {/* Manually add the viewport meta tag for mobile support */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
      </head>
      <body className={`${montserrat.className} bg-white`}>
        <NProgressProvider>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </NProgressProvider>
      </body>
    </html>
  );
}