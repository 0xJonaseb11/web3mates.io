"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeInOut" as const,
      },
    },
  };

  const logoScrollVariants = {
    animate: {
      x: [-1000, 0],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop" as const,
          duration: 20,
          ease: "linear" as const,
        },
      },
    },
  };

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

  const web3Elements = [
    {
      name: "Blockchain",
      icon: "🔗",
      position: "top-0 left-1/2 mt-2 -translate-x-1/2 -translate-y-1/2",
    },
    {
      name: "DeFi",
      icon: "💰",
      position: "top-1/4 right-8 -translate-y-1/2 translate-x-1/2",
    },
    {
      name: "NFTs",
      icon: "🖼️",
      position: "bottom-1/4 right-8 translate-y-1/2 translate-x-1/2",
    },
    {
      name: "DAOs",
      icon: "🏛️",
      position: "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2",
    },
    {
      name: "Smart Contracts",
      icon: "📜",
      position: "bottom-1/4 left-8 translate-y-1/2 -translate-x-1/2",
    },
    {
      name: "dApps",
      icon: "📱",
      position: "top-1/4 left-8 -translate-y-1/2 -translate-x-1/2",
    },
  ];

  return (
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden">
      {/* Hackathon Marquee Banner (Commented out for Cohort 2 Intake)
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
      */}

      {/* Cohort 2 Intake Marquee Banner */}
      <motion.div
        className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#0066FF] via-indigo-600 to-[#0066FF] py-3 overflow-hidden shadow-lg border-b border-white/20 mt-20"
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

              {/* Main Text */}
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

              {/* CTA Button */}
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

        {/* Progress Bar */}
        <motion.div
          className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-yellow-400 via-white to-yellow-400"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </motion.div>

      {/* Add padding to account for fixed banner */}
      <div className="pt-16">
        <div className="absolute -top-16 sm:-top-32 -right-16 sm:-right-32 w-32 h-32 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-[#0066FF]/10 rounded-full filter blur-3xl opacity-70"></div>
        <div className="absolute -bottom-16 sm:-bottom-32 -left-16 sm:-left-32 w-32 h-32 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-[#0066FF]/10 rounded-full filter blur-3xl opacity-70"></div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div>
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#0B1C39] mb-4 sm:mb-6 leading-tight"
              variants={itemVariants}
            >
              Empowering <span className="text-[#0066FF]">Africa</span> Through{" "}
              <span className="text-[#0066FF]">Web3 Innovation</span>
            </motion.h1>

            <motion.p
              className="text-gray-600 text-base sm:text-lg md:text-xl mb-6 sm:mb-8 leading-relaxed max-w-lg"
              variants={itemVariants}
            >
              <b>Web3 Mates</b> is a Web3 education and innovation hub dedicated
              to training, connecting, and empowering African developers and
              entrepreneurs in the blockchain revolution.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4"
              variants={itemVariants}
            >
              <Link
                href="/mentorship/apply"
                className="relative bg-gradient-to-r from-[#0066FF] to-[#0047CC] text-white px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-full hover:shadow-lg transition-all duration-300 font-medium group overflow-hidden text-sm sm:text-base text-center"
              >
                <span className="relative z-10">Join The Course</span>
                <span className="absolute inset-0 bg-gradient-to-r from-[#0047CC] to-[#0066FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </Link>
              <Link
                href="/join-community"
                className="bg-blue-600 text-white px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-full hover:shadow-lg transition-all duration-300 font-medium text-sm sm:text-base text-center group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                   Join Community
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </Link>
              <Link
                href="/contact"
                className="bg-white text-[#0066FF] px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-full border-2 border-[#0066FF] hover:bg-[#0066FF]/5 hover:shadow-md transition-all duration-300 font-medium text-sm sm:text-base text-center"
              >
                Contact Us
              </Link>
            </motion.div>

            <motion.div className="mt-12 sm:mt-16" variants={itemVariants}>
              <p className="text-gray-500 mb-4 text-sm uppercase tracking-wider">
                Trusted by leading organizations
              </p>
              <div className="overflow-hidden">
                <motion.div
                  className="flex gap-4 sm:gap-8"
                  variants={logoScrollVariants}
                  animate="animate"
                >
                  {[
                    {
                      src: "/logo-color.svg",
                      alt: "BuidlGuidl Logo",
                      width: 100,
                    },
                    {
                      src: "/AyaHQ-blue.png",
                      alt: "AyaHQ company logo",
                      width: 120,
                    },
                    {
                      src: "/digi.png",
                      alt: "Digital Transformation Center Rwanda Logo",
                      width: 120,
                    },
                    {
                      src: "/german.jpg",
                      alt: "German Cooperation Logo",
                      width: 120,
                    },
                    { src: "/giz1.png", alt: "GIZ Logo", width: 120 },
                    {
                      src: "/web3bridge.png",
                      alt: "Web3Bridge company logo",
                      width: 120,
                    },
                    {
                      src: "/genesys.png",
                      alt: "Genesys company logo",
                      width: 120,
                    },

                    {
                      src: "/AyaHQ-blue.png",
                      alt: "AyaHQ company logo",
                      width: 100,
                    },
                    {
                      src: "/logo-color.svg",
                      alt: "BuidlGuidl Logo",
                      width: 100,
                    },
                    {
                      src: "/web3bridge.png",
                      alt: "Web3Bridge company logo",
                      width: 100,
                    },
                    {
                      src: "/genesys.png",
                      alt: "Genesys company logo",
                      width: 120,
                    },
                    {
                      src: "/AyaHQ-blue.png",
                      alt: "AyaHQ company logo",
                      width: 120,
                    },
                    {
                      src: "/logo-color.svg",
                      alt: "BuidlGuidl Logo",
                      width: 100,
                    },
                    {
                      src: "/web3bridge.png",
                      alt: "Web3Bridge company logo",
                      width: 120,
                    },
                    {
                      src: "/genesys.png",
                      alt: "Genesys company logo",
                      width: 120,
                    },
                    {
                      src: "/AyaHQ-blue.png",
                      alt: "AyaHQ company logo",
                      width: 100,
                    },
                    {
                      src: "/logo-color.svg",
                      alt: "BuidlGuidl Logo",
                      width: 100,
                    },
                    {
                      src: "/web3bridge.png",
                      alt: "Web3Bridge company logo",
                      width: 100,
                    },
                    {
                      src: "/genesys.png",
                      alt: "Genesys company logo",
                      width: 120,
                    },
                    {
                      src: "/AyaHQ-blue.png",
                      alt: "AyaHQ company logo",
                      width: 100,
                    },
                    {
                      src: "/logo-color.svg",
                      alt: "BuidlGuidl Logo",
                      width: 100,
                    },
                    {
                      src: "/web3bridge.png",
                      alt: "Web3Bridge company logo",
                      width: 100,
                    },
                    {
                      src: "/genesys.png",
                      alt: "Genesys company logo",
                      width: 120,
                    },
                    {
                      src: "/AyaHQ-blue.png",
                      alt: "AyaHQ company logo",
                      width: 100,
                    },
                    {
                      src: "/logo-color.svg",
                      alt: "BuidlGuidl Logo",
                      width: 100,
                    },
                    // Newly added consecutive logos
                    {
                      src: "/digi.png",
                      alt: "Digital Transformation Center Rwanda Logo",
                      width: 120,
                    },
                    {
                      src: "/german.jpg",
                      alt: "German Cooperation Logo",
                      width: 120,
                    },
                    { src: "/giz1.png", alt: "GIZ Logo", width: 120 },
                    // Duplicated to appear twice consecutively
                  ].map((logo, index) => (
                    <div key={index} className="flex-shrink-0">
                      <Image
                        src={logo.src}
                        alt={logo.alt}
                        width={logo.width}
                        height={30}
                        className="object-contain opacity-80 hover:opacity-100 transition-opacity"
                      />
                    </div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="relative flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative w-[320px] h-[320px] sm:w-[350px] sm:h-[350px] md:w-[450px] md:h-[450px] lg:w-[550px] lg:h-[550px] flex items-center justify-center ">
              {web3Elements.map((element, index) => (
                <motion.div
                  key={index}
                  className={`absolute ${element.position} z-10 bg-blue-500 rounded-sm text-center hidden sm:block`}
                  animate={{
                    rotate: 360,
                    transition: {
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    },
                  }}
                >
                  <div className="bg-white/90 backdrop-blur-sm text-[#0066FF] rounded-full p-2 shadow-lg flex flex-col items-center justify-center w-12 h-12 sm:w-16 sm:h-16">
                    <span className="text-lg sm:text-2xl">{element.icon}</span>
                    <span className="text-xs font-medium mt-1 hidden sm:block">
                      {element.name}
                    </span>
                  </div>
                </motion.div>
              ))}

              <div className="absolute inset-0 rounded-full border-2 border-[#0066FF]"></div>

              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#0066FF]/10 to-[#0066FF]/30 blur-md"></div>

              <motion.div
                className="relative w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[320px] md:h-[320px] lg:w-[400px] lg:h-[400px]"
                animate={{
                  rotate: 360,
                  transition: {
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear",
                  },
                }}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.3 },
                }}
              >
                <Image
                  src="/africa-globe.webp"
                  alt="Africa Globe"
                  fill
                  className="object-contain drop-shadow-xl rounded-full border-0 "
                  priority
                />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
