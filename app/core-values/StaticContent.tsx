"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { 
  FaGraduationCap, 
  FaUsers, 
  FaGlobe, 
  FaShieldAlt, 
  FaChartLine, 
  FaCheckCircle,
  FaRocket
} from 'react-icons/fa';

const CoreValues = () => {
  const values = [
    {
      title: "Empowerment Through Education",
      description:
        "We believe in equipping African developers with practical Web3 skills through hands-on learning and real-world projects.",
      icon: <FaGraduationCap className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-[#0066FF]" />,
      color: "bg-[#0066FF]/10",
    },
    {
      title: "Community First",
      description:
        "Our strength comes from collaborative learning, shared knowledge, and supporting each member's growth journey.",
      icon: <FaUsers className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-[#FFD700]" />,
      color: "bg-[#FFD700]/10",
    },
    {
      title: "Innovation Without Borders",
      description:
        "We break down geographical and technological barriers to foster groundbreaking Web3 solutions for Africa.",
      icon: <FaGlobe className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-[#00C781]" />,
      color: "bg-[#00C781]/10",
    },
    {
      title: "Integrity in Blockchain",
      description:
        "We uphold transparency, accountability, and ethical standards in all our Web3 initiatives and teachings.",
      icon: <FaShieldAlt className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-[#FF6B6B]" />,
      color: "bg-[#FF6B6B]/10",
    },
    {
      title: "Sustainable Growth",
      description:
        "We're committed to creating lasting impact through mentorship programs that continue beyond initial training.",
      icon: <FaChartLine className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-[#A162F7]" />,
      color: "bg-[#A162F7]/10",
    },
    {
      title: "African-Centric Solutions",
      description:
        "We focus on developing Web3 applications that solve real African challenges in finance, identity, and more.",
      icon: <FaCheckCircle className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-[#FF9F43]" />,
      color: "bg-[#FF9F43]/10",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-24 pt-20 sm:pt-24">
      <div className="text-center mb-10 sm:mb-12 lg:mb-16">
        <motion.h1
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B1C39] mb-4 sm:mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our <span className="text-[#0066FF]">Core Values</span>
        </motion.h1>
        <motion.p
          className="text-gray-600 max-w-3xl mx-auto text-sm sm:text-base lg:text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          These principles guide everything we do at Web3 Mates to empower
          Africa&apos;s blockchain revolution
        </motion.p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        {values.map((value, index) => (
          <motion.div
            key={index}
            className={`p-4 sm:p-6 lg:p-8 rounded-xl ${value.color} border border-transparent hover:border-[#0066FF]/30 transition-all`}
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
          >
            <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
              <div className={`flex-shrink-0 p-3 rounded-lg ${value.color.replace('/10', '')} bg-opacity-20 flex items-center justify-center`}>
                {value.icon}
              </div>
              <div>
                <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-[#0B1C39] mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm lg:text-base">
                  {value.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-12 sm:mt-16 lg:mt-20 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-[#0B1C39] mb-4">
          Ready to join our values-driven community?
        </h3>
        <Link
          href="/mentorship"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-[#0066FF] to-[#0047CC] text-white px-6 sm:px-8 py-3 rounded-full hover:shadow-lg transition-all duration-300 font-medium text-sm sm:text-base"
        >
          <FaRocket className="w-4 h-4" />
          Start Your Web3 Journey
        </Link>
      </motion.div>

      <motion.div
        className="mt-12 sm:mt-16 lg:mt-20 flex justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        <Image
          src="/team-values.png"
          alt="Team values illustration"
          width={600}
          height={400}
          className="w-full max-w-lg sm:max-w-xl lg:max-w-2xl h-auto"
        />
      </motion.div>
    </div>
  );
};

export default CoreValues;
