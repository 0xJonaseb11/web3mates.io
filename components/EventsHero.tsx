"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const EventsHero = () => {
  const marqueeVariants = {
    animate: {
      x: [0, -1030],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop" as const,
          duration: 25,
          ease: "linear" as const,
        },
      },
    },
  };

  return (
    <>
      {/* Hackathon Marquee Banner - Exact same as Home HeroSection */}
      <motion.div
        className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 py-3 overflow-hidden shadow-lg border-b border-white/20 mt-20"
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.div
          className="flex whitespace-nowrap"
          variants={marqueeVariants}
          animate="animate"
        >
          {[...Array(3)].map((_, setIndex) => (
            <div key={setIndex} className="flex items-center gap-8 px-4">
              {/* Animated Emoji */}
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 10, -10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="text-2xl"
              >
                
              </motion.div>

              {/* Main Text */}
              <Link
                href="/hackathons/eth-rwanda-hackathon-2026"
                className="flex items-center gap-4 group"
              >
                <span className="text-white font-bold text-lg sm:text-xl bg-black/20 px-4 py-1 rounded-full border border-white/30">
                  🔥 HOT EVENT
                </span>
                <span className="text-white font-semibold text-lg sm:text-xl">
                  ETH Rwanda Hackathon 2026
                </span>
                <span className="text-yellow-300 font-bold text-lg sm:text-xl animate-pulse">
                  $3,000+ PRIZES
                </span>
                <span className="text-white/90 text-lg">May 2026</span>
              </Link>

              {/* CTA Button */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/hackathons/register"
                  className="bg-yellow-400 text-blue-900 px-6 py-2 rounded-full font-bold text-sm sm:text-base hover:bg-yellow-300 transition-colors duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
                >
                  Register Now
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    →
                  </motion.span>
                </Link>
              </motion.div>

              {/* Stats */}
              <div className="flex items-center gap-6 text-white/80 text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-green-400"></span>
                  <span>48-Hour Sprint</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-purple-400"></span>
                  <span>10+ Countries</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-red-400"></span>
                  <span>500+ Builders</span>
                </div>
              </div>

              {/* Animated Emoji */}
              <motion.div
                animate={{
                  scale: [1, 1.3, 1],
                  rotate: [0, -15, 15, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="text-2xl"
              >
                ⚡
              </motion.div>
            </div>
          ))}
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-yellow-400 to-orange-500"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </motion.div>

      <section className="py-12 sm:py-16 lg:py-20 pt-20 sm:pt-24 px-4 sm:px-6 lg:px-8 mt-20">
        <div className="max-w-7xl mx-auto">
          {/* Hackathon Banner - Dominant Section */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-2xl p-6 sm:p-8 lg:p-10 mb-12 sm:mb-16 lg:mb-20 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full -translate-y-32 translate-x-32"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full translate-y-24 -translate-x-24"></div>
            </div>

            {/* Animated Pulse Effect */}
            <div className="absolute top-4 right-4">
              <div className="relative flex h-3 w-3">
                <div className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></div>
                <div className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></div>
              </div>
            </div>

            <div className="relative z-10">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-4 sm:mb-6">
                <span className="text-xs sm:text-sm font-semibold text-white">
                  🔥HOT TOPIC
                </span>
              </div>

              {/* Main Title */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
                ETH Rwanda <span className="text-yellow-300">Hackathon</span>{" "}
                2026
              </h1>

              {/* Date and Duration */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6 sm:mb-8">
                <div className="flex items-center gap-2 bg-black/30 px-4 py-2 rounded-lg">
                  <span className="text-sm sm:text-base">May 2026</span>
                </div>
                <div className="flex items-center gap-2 bg-black/30 px-4 py-2 rounded-lg">
                  <span className="text-sm sm:text-base">
                    48-Hour Sprint
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto mb-6 sm:mb-8 text-blue-100 leading-relaxed">
                Join Africa&apos;s brightest minds in a groundbreaking 48-hour
                blockchain innovation sprint. Build, collaborate, and shape the
                future of Web3 across the continent.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="bg-yellow-400 text-blue-900 px-8 py-3 rounded-lg font-bold text-sm sm:text-base hover:bg-yellow-300 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                  <Link href="/hackathons/register">Register Now - Early Access</Link>
                </button>
                <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold text-sm sm:text-base hover:bg-white/10 transition-colors duration-300">
                  <Link href="/hackathons/eth-rwanda-hackathon-2026">Learn 
                  More</Link>
                </button>
              </div>

              {/* Additional Info */}
              <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center text-sm text-blue-100">
                <div className="flex flex-col items-center">
                  <span className="font-bold text-white text-lg">$3K+</span>
                  <span>In Prizes</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="font-bold text-white text-lg">100+</span>
                  <span>Mentors</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="font-bold text-white text-lg">10+</span>
                  <span>African Nations</span>
                </div>
              </div>
            </div>
          </div>

          {/* Original Content */}
          <div className="text-center">
            <p className="text-[#0066FF] mb-3 sm:mb-4 text-sm sm:text-base">
              Where Africa&apos;s Web3 momentum comes to life.
            </p>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4 sm:mb-6">
              Events & News Hubs
            </h2>

            <p className="text-gray-600 max-w-2xl sm:max-w-3xl mx-auto text-sm sm:text-base lg:text-lg">
              Stay up to date with the latest happenings, community stories, and
              groundbreaking events shaping the Web3 ecosystem in Africa.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default EventsHero;
