"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";
import { FaLinkedin, FaXTwitter, FaTelegram } from "react-icons/fa6";

const HackathonBanner = dynamic(() => import("./HackathonBanner"), {
  ssr: false,
});

const Footer = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <footer className="bg-white py-12 sm:py-16 lg:py-20 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
            <div className="col-span-1 sm:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-2 mb-4 sm:mb-6">
                <Image
                  src="/logo.svg"
                  alt="Web3 Mates Logo"
                  width={35}
                  height={35}
                  className="sm:w-20 sm:h-20"
                />
                <div>
                  <div className="font-semibold text-[#0B1C39] text-sm sm:text-base">
                    Web3 Mates
                  </div>
                  <div className="text-xs sm:text-sm text-[#0066FF]">
                    Blockchain Catalyst
                  </div>
                </div>
              </div>
              <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base lg:text-lg">
                Empowering Africa&apos;s Web3 Builders—One Line of Code at a
                Time.
              </p>
              <div className="flex gap-4 sm:gap-6 pt-2 sm:pt-4">
                <a
                  href="https://www.linkedin.com/company/web3mates"
                  className="hover:opacity-80 transition-opacity"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="w-5 h-5 sm:w-6 sm:h-6 text-[#0A66C2]" />
                </a>
                <a
                  href="https://x.com/Web3Mates"
                  className="hover:opacity-80 transition-opacity"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaXTwitter className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
                </a>
                <a
                  href="https://discord.gg/qzECSsvuxu"
                  className="hover:opacity-80 transition-opacity"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-[#5865F2]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.019 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1568 2.4189Z" />
                  </svg>
                </a>
                <a
                  href="https://t.me/+Gc9JJOqazxgxZmQ0"
                  className="hover:opacity-80 transition-opacity"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTelegram className="w-5 h-5 sm:w-6 sm:h-6 text-[#26A5E4]" />
                </a>
              </div>
            </div>

            <div className="col-span-1">
              <h3 className="font-semibold text-[#0B1C39] mb-3 sm:mb-4 text-sm sm:text-base">
                Services
              </h3>
              <ul className="space-y-2 sm:space-y-3">
                <li>
                  <Link
                    href="/features"
                    className="text-gray-600 hover:text-[#0066FF]"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    href="/solutions"
                    className="text-gray-600 hover:text-[#0066FF]"
                  >
                    Solutions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/mentorship"
                    className="text-gray-600 hover:text-[#0066FF]"
                  >
                    Mentorship
                  </Link>
                </li>
                <li>
                  <Link
                    href="/projects"
                    className="text-gray-600 hover:text-[#0066FF]"
                  >
                    Projects
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-span-1">
              <h3 className="font-semibold text-[#0B1C39] mb-3 sm:mb-4 text-sm sm:text-base">
                About us
              </h3>
              <ul className="space-y-2 sm:space-y-3">
                <li>
                  <Link
                    href="/core-values"
                    className="text-gray-600 hover:text-[#0066FF]"
                  >
                    Core Values
                  </Link>
                </li>
                <li>
                  <Link
                    href="/team"
                    className="text-gray-600 hover:text-[#0066FF]"
                  >
                    Team
                  </Link>
                </li>
                <li>
                  <Link
                    href="/testimonials"
                    className="text-gray-600 hover:text-[#0066FF]"
                  >
                    Testimonies
                  </Link>
                </li>
                <li>
                  <Link
                    href="/our-story"
                    className="text-gray-600 hover:text-[#0066FF]"
                  >
                    Our Story
                  </Link>
                </li>
                <li>
                  <Link
                    href="/join-community"
                    className="text-gray-600 hover:text-[#0066FF]"
                  >
                    Community
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-span-1">
              <h3 className="font-semibold text-[#0B1C39] mb-3 sm:mb-4 text-sm sm:text-base">
                Collaborations
              </h3>
              <ul className="space-y-2 sm:space-y-3">
                <li>
                  <Link
                    href="/channels"
                    className="text-gray-600 hover:text-[#0066FF]"
                  >
                    Channels
                  </Link>
                </li>
                <li>
                  <Link
                    href="/groups"
                    className="text-gray-600 hover:text-[#0066FF]"
                  >
                    Groups
                  </Link>
                </li>
                <li>
                  <Link
                    href="/workshops"
                    className="text-gray-600 hover:text-[#0066FF]"
                  >
                    Workshops
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-span-1">
              <h3 className="font-semibold text-[#0B1C39] mb-3 sm:mb-4 text-sm sm:text-base">
                Events and News
              </h3>
              <ul className="space-y-2 sm:space-y-3">
                <li>
                  <Link
                    href="/hackathons"
                    className="text-gray-600 hover:text-[#0066FF]"
                  >
                    Hackathons
                  </Link>
                </li>
                <li>
                  <Link
                    href="/announcements"
                    className="text-gray-600 hover:text-[#0066FF]"
                  >
                    Announcements
                  </Link>
                </li>
                <li>
                  <Link
                    href="/callups"
                    className="text-gray-600 hover:text-[#0066FF]"
                  >
                    Callups
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex justify-center mt-12 sm:mt-16 border-t pt-4 sm:pt-5">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="bg-[#EEF5FF] p-3 sm:p-4 rounded-full hover:bg-[#0066FF] hover:text-white transition-colors text-blue-300"
            >
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 10l7-7m0 0l7 7m-7-7v18"
                />
              </svg>
            </button>
          </div>

          <div className="text-center mt-6 sm:mt-8 text-gray-600">
            <p className="text-sm sm:text-base">
              © 2025 Web3 Mates - Blockchain Catalyst. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>

      <HackathonBanner />
    </>
  );
};

export default Footer;
