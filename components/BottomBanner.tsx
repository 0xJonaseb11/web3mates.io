"use client";

import { motion } from "framer-motion";
import PromoBanner from "./PromoBanner";

const BottomBanner = () => {
  return (
    <motion.div
      className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 py-3 overflow-hidden shadow-lg border-t border-white/20"
      initial={{ y: 50 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <PromoBanner 
        title="Applications Now Open!"
        subtext="Learn advanced concepts of Blockchain, Web3 & Smart Contracts"
        ctaText="Apply Now"
        ctaHref="/mentorship/apply"
      />

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

export default BottomBanner;
