"use client";

import Link from "next/link";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("./Map"), { ssr: false });

export default function LocationMap() {
  return (
    <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
  
          <div className="h-48 sm:h-64 md:h-[400px] rounded-lg overflow-hidden shadow-lg">
            <Map />
          </div>

  
          <div className="space-y-6 sm:space-y-8">
            <div>
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2 sm:mb-4">
                Visit Our Innovation Hub
              </h2>
              <p className="text-gray-600 mb-2 sm:mb-4 text-sm sm:text-base">
                Find us at the heart of Kigali&apos;s tech ecosystem—open for
                collaboration, training, and innovation.
              </p>
              <Link
                href="/events/blog"
                className="text-blue-600 hover:text-blue-700 inline-flex items-center text-sm sm:text-base"
              >
                Read more →
              </Link>
            </div>

            <div>
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mb-2 sm:mb-4">
                Address
              </h3>
              <div className="space-y-1 sm:space-y-2">
                <p className="font-medium text-gray-900 text-sm sm:text-base">Web3 Mates (WM)</p>
                <p className="text-gray-600 text-sm sm:text-base">
                  Bumbogo Innovation & Technology Hub
                </p>
                <p className="text-gray-600 text-sm sm:text-base">KG 690 Street, Kigali, Rwanda</p>
              </div>
            </div>

            <div>
              <Link
                href="https://maps.google.com/?q=-1.9441,30.0619"
                target="_blank"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 text-sm sm:text-base"
              >
                Get directions →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
