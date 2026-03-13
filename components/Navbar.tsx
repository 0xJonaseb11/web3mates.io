"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  };

  if (!mounted) return <div className="h-20" />; // Placeholder for the nav height

  return (
    <>
      <nav className="bg-white/80 backdrop-blur-sm border-b border-white/20 fixed w-full top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-1 sm:space-x-2 lg:space-x-1">
                <Image
                  src="/logo.svg"
                  alt="Web3 Mates Logo"
                  width={35}
                  height={35}
                  priority
                  className="object-contain w-12 h-12 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-16 lg:h-16 rounded-sm"
                />
                <div className="flex flex-col">
                  <span className="text-2xl sm:text-2xl font-bold text-blue-900">
                    Web3 Mates
                  </span>
                  <span className="text-xs sm:text-sm text-[#0066FF]">
                    Blockchain Catalyst
                  </span>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6 xl:space-x-8 2xl:space-x-10">
              <Link
                href="/"
                className={`text-sm xl:text-base font-medium transition-colors duration-200 ${
                  isActive("/") ? "text-[#0066FF]" : "text-gray-700 hover:text-gray-900"
                }`}
              >
                Home
              </Link>
              <Link
                href="/services"
                className={`text-sm xl:text-base font-medium transition-colors duration-200 ${
                  isActive("/services") ? "text-[#0066FF]" : "text-gray-700 hover:text-gray-900"
                }`}
              >
                Services
              </Link>
              <Link
                href="/about"
                className={`text-sm xl:text-base font-medium transition-colors duration-200 ${
                  isActive("/about") ? "text-[#0066FF]" : "text-gray-700 hover:text-gray-900"
                }`}
              >
                About us
              </Link>
              <Link
                href="/collaboration"
                className={`text-sm xl:text-base font-medium transition-colors duration-200 ${
                  isActive("/collaboration") ? "text-[#0066FF]" : "text-gray-700 hover:text-gray-900"
                }`}
              >
                Collaborations
              </Link>
              <Link
                href="/events"
                className={`text-sm xl:text-base font-medium transition-colors duration-200 ${
                  isActive("/events") ? "text-[#0066FF]" : "text-gray-700 hover:text-gray-900"
                }`}
              >
                Events and News
              </Link>
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link
                href="/contact"
                className="bg-[#0066FF] text-white px-6 py-2.5 rounded-full text-sm xl:text-base font-medium shadow-md shadow-[#0066FF]/20 transition-all duration-200 hover:bg-[#0066FF]/90 hover:scale-[1.02]"
              >
                Contact Us
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                aria-label="Toggle menu"
              >
                <div className="w-6 h-5 flex flex-col justify-between items-center">
                  <span
                    className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
                      isOpen ? "rotate-45 translate-y-2" : ""
                    }`}
                  ></span>
                  <span
                    className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
                      isOpen ? "opacity-0" : ""
                    }`}
                  ></span>
                  <span
                    className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
                      isOpen ? "-rotate-45 -translate-y-2.5" : ""
                    }`}
                  ></span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="fixed right-0 top-0 bottom-0 w-[280px] sm:w-[320px] bg-white shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 border-b border-gray-100 flex justify-between items-center">
              <Image src="/logo.svg" alt="Logo" width={30} height={30} />
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-lg text-gray-500 hover:bg-gray-100 transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="flex-1 overflow-y-auto py-6 space-y-2">
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-4 text-lg sm:text-xl font-medium rounded-lg transition-colors duration-200 ${
                  isActive("/") ? "text-[#0066FF] bg-blue-50" : "text-gray-700 hover:text-gray-900 hover:bg-gray-200"
                }`}
              >
                Home
              </Link>
              <Link
                href="/services"
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-4 text-lg sm:text-xl font-medium rounded-lg transition-colors duration-200 ${
                  isActive("/services") ? "text-[#0066FF] bg-blue-50" : "text-gray-700 hover:text-gray-900 hover:bg-gray-200"
                }`}
              >
                Services
              </Link>
              <Link
                href="/about"
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-4 text-lg sm:text-xl font-medium rounded-lg transition-colors duration-200 ${
                  isActive("/about") ? "text-[#0066FF] bg-blue-50" : "text-gray-700 hover:text-gray-900 hover:bg-gray-200"
                }`}
              >
                About us
              </Link>
              <Link
                href="/collaboration"
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-4 text-lg sm:text-xl font-medium rounded-lg transition-colors duration-200 ${
                  isActive("/collaboration") ? "text-[#0066FF] bg-blue-50" : "text-gray-700 hover:text-gray-900 hover:bg-gray-200"
                }`}
              >
                Collaborations
              </Link>
              <Link
                href="/events"
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-4 text-lg sm:text-xl font-medium rounded-lg transition-colors duration-200 ${
                  isActive("/events") ? "text-[#0066FF] bg-blue-50" : "text-gray-700 hover:text-gray-900 hover:bg-gray-200"
                }`}
              >
                Events and News
              </Link>
            </div>


            <div className="p-4 sm:p-6 border-t border-gray-300 bg-white">
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="bg-[#0066FF] text-white block w-full px-4 py-4 rounded-full text-lg sm:text-xl font-medium text-center shadow-lg shadow-[#0066FF]/25 transition-all duration-200 hover:bg-[#0066FF]/90"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
