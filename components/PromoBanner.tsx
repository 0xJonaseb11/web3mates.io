"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface PromoBannerProps {
  cohortLabel?: string;
  title: string;
  subtext: string;
  ctaText: string;
  ctaHref: string;
}

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

const PromoBanner = ({
  cohortLabel = "COHORT 2",
  title,
  subtext,
  ctaText,
  ctaHref,
}: PromoBannerProps) => {
  return (
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
              {cohortLabel}
            </span>
            <span className="text-yellow-300 font-bold text-lg sm:text-xl uppercase">
              {title}
            </span>
            <span className="text-white/90 text-sm sm:text-lg font-medium">
              {subtext}
            </span>
          </div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href={ctaHref}
              className="bg-white text-[#0066FF] px-6 py-2 rounded-full font-bold text-sm sm:text-base hover:bg-blue-50 transition-colors duration-300 shadow-lg flex items-center gap-2"
            >
              {ctaText}
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
              <span className="text-amber-400">✨</span>
              <span>1:1 Mentorship</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-amber-400">✨</span>
              <span>Advanced Curriculum</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-amber-400">✨</span>
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
  );
};

export default PromoBanner;
