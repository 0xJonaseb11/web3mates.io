"use client";

import { motion } from "framer-motion";
import Link from "next/link";

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

const HackathonBanner = () => {
  return (
    <motion.div
      className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 py-3 overflow-hidden shadow-lg border-t border-white/20"
      initial={{ y: 50 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Hackathon Content (Commented out for Cohort 2 Intake)
      <motion.div
        className="flex whitespace-nowrap"
        variants={marqueeVariants}
        animate="animate"
      >
        {[...Array(3)].map((_, setIndex) => (
          <div key={setIndex} className="flex items-center gap-8 px-4">
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
      */}

      {/* Cohort 2 Intake Content */}
      <motion.div
        className="flex whitespace-nowrap"
        variants={marqueeVariants}
        animate="animate"
      >
        {[...Array(3)].map((_, setIndex) => (
          <div key={setIndex} className="flex items-center gap-8 px-4">
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="text-2xl"
            >
              🚀
            </motion.div>

            <div className="flex items-center gap-4">
              <span className="text-white font-bold text-lg sm:text-xl bg-white/10 px-4 py-1 rounded-full border border-white/30 tracking-wide">
                COHORT 2
              </span>
              <span className="text-yellow-300 font-bold text-lg sm:text-xl">
                APPLICATIONS NOW OPEN!
              </span>
              <span className="text-white/90 text-sm sm:text-lg font-medium">
                Learn advanced concepts of Blockchain, Web3 & Smart Contracts
              </span>
            </div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/mentorship/apply"
                className="bg-white text-[#0066FF] px-6 py-2 rounded-full font-bold text-sm sm:text-base hover:bg-blue-50 transition-colors duration-300 shadow-lg flex items-center gap-2"
              >
                Apply Now
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  →
                </motion.span>
              </Link>
            </motion.div>

            <div className="flex items-center gap-6 text-white/80 text-sm font-medium">
              <div className="flex items-center gap-2">
                <span className="text-gold-400">✨</span>
                <span>1:1 Mentorship</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gold-400">✨</span>
                <span>Advanced Curriculum</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gold-400">✨</span>
                <span>Limited Slots</span>
              </div>
            </div>

            <motion.div
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
              className="text-2xl"
            >
              💎
            </motion.div>
          </div>
        ))}
      </motion.div>

      <motion.div
        className="h-1 bg-gradient-to-r from-yellow-400 to-orange-500"
        initial={{ width: "0%" }}
        animate={{ width: "100%" }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </motion.div>
  );
};

export default HackathonBanner;
