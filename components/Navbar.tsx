"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

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

  return (
    <>
      <nav className="bg-white/80 backdrop-blur-sm border-b border-white/20 fixed w-full top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">

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
              <Link
                href="/contact"
                className="bg-[#0066FF]/90 backdrop-blur-sm text-white px-4 xl:px-6 py-2.5 rounded-full hover:bg-[#0066FF] transition-all duration-200 text-sm xl:text-base font-medium flex items-center ml-4 shadow-lg shadow-[#0066FF]/25 border border-white/20"
              >
                Contact Us
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </Link>
            </div>


            <div className="lg:hidden flex items-center justify-end flex-shrink-0 ml-4">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="mobile-nav-button relative inline-flex items-center justify-center w-10 h-10 rounded-lg text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#0066FF] focus:ring-offset-2 transition-all duration-200 touch-manipulation"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6 transition-transform duration-200"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6 transition-transform duration-200"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {isOpen && (
        <div id="mobile-menu" className="mobile-menu-overlay lg:hidden">
          <div className="absolute inset-0 bg-white" style={{ backgroundColor: "#ffffff" }} />

          <div className="relative flex flex-col h-full w-full">
            <div className="flex justify-between items-center p-4 sm:p-6 border-b border-gray-300">
              <div className="flex items-center space-x-3">
                <Image
                  src="/logo.svg"
                  alt="Web3 Mates Logo"
                  width={32}
                  height={32}
                  className="object-contain w-8 h-8 sm:w-9 sm:h-9"
                />
                <div className="flex flex-col">
                  <span className="text-lg sm:text-xl font-bold text-gray-900 leading-tight">Web3 Mates</span>
                  <span className="text-sm sm:text-base text-[#0066FF] leading-tight">Blockchain Catalyst</span>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-200 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>


            <div className="flex-1 px-4 sm:px-6 py-6 space-y-1 bg-white">
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
