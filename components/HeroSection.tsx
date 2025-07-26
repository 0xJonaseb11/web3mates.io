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
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeInOut" 
      }
    }
  };

  const logoScrollVariants = {
    animate: {
      x: [-1000, 0],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear"
        }
      }
    }
  };

  const web3Elements = [
    { name: "Blockchain", icon: "🔗", position: "top-0 left-1/2 mt-2 -translate-x-1/2 -translate-y-1/2" },
    { name: "DeFi", icon: "💰", position: "top-1/4 right-8 -translate-y-1/2 translate-x-1/2" },
    { name: "NFTs", icon: "🖼️", position: "bottom-1/4 right-8 translate-y-1/2 translate-x-1/2" },
    { name: "DAOs", icon: "🏛️", position: "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2" },
    { name: "Smart Contracts", icon: "📜", position: "bottom-1/4 left-8 translate-y-1/2 -translate-x-1/2" },
    { name: "dApps", icon: "📱", position: "top-1/4 left-8 -translate-y-1/2 -translate-x-1/2" },
    // { name: "Web3 Mates", icon: "", position: "centre-0 right-70 top-50 translate-y-1/2 translate-x-1/2"},
  ];

  return (
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 overflow-hidden">
      <div className="absolute -top-32 -right-32 w-64 h-64 md:w-96 md:h-96 bg-[#0066FF]/10 rounded-full filter blur-3xl opacity-70"></div>
      <div className="absolute -bottom-32 -left-32 w-64 h-64 md:w-96 md:h-96 bg-[#0066FF]/10 rounded-full filter blur-3xl opacity-70"></div>
      
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Left Content */}
        <div>
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-[#0B1C39] mb-6 leading-tight"
            variants={itemVariants}
          >
            Empowering <span className="text-[#0066FF]">Africa</span> Through <span className="text-[#0066FF]">Web3</span>
          </motion.h1>
          
          <motion.p 
            className="text-gray-600 text-xl mb-8 leading-relaxed max-w-lg"
            variants={itemVariants}
          >
            <b>Web3 Mates</b> is a Web3 education and innovation hub dedicated to
            training, connecting, and empowering African developers and
            entrepreneurs in the blockchain revolution.
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap gap-4"
            variants={itemVariants}
          >
            <Link
              href="/mentorship/apply"
              className="relative bg-gradient-to-r from-[#0066FF] to-[#0047CC] text-white px-8 py-4 rounded-full hover:shadow-lg transition-all duration-300 font-medium group overflow-hidden"
            >
              <span className="relative z-10">Join The Course</span>
              <span className="absolute inset-0 bg-gradient-to-r from-[#0047CC] to-[#0066FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </Link>
            <Link
              href="/contact"
              className="bg-white text-[#0066FF] px-8 py-4 rounded-full border-2 border-[#0066FF] hover:bg-[#0066FF]/5 hover:shadow-md transition-all duration-300 font-medium"
            >
              Contact Us
            </Link>
          </motion.div>

          <motion.div 
            className="mt-16"
            variants={itemVariants}
          >
            <p className="text-gray-500 mb-4 text-sm uppercase tracking-wider">Trusted by leading organizations</p>
            <div className="overflow-hidden">
              <motion.div 
                className="flex gap-8"
                variants={logoScrollVariants}
                animate="animate"
              >
                {[ 
                  { src: "/logo-color.svg", alt: "BuidlGuidl Logo", width: 100 },
                  { src: "/AyaHQ-blue.png", alt: "AyaHQ company logo", width: 120 },
                  { src: "/web3bridge.png", alt: "Web3Bridge company logo", width: 120 },
                  { src: "/genesys.png", alt: "Genesys company logo", width: 120 },
                  { src: "/AyaHQ-blue.png", alt: "AyaHQ company logo", width: 100 },
                  { src: "/logo-color.svg", alt: "BuidlGuidl Logo", width: 100 },
                  { src: "/web3bridge.png", alt: "Web3Bridge company logo", width: 100 },
                  { src: "/genesys.png", alt: "Genesys company logo", width: 120 },
                  { src: "/AyaHQ-blue.png", alt: "AyaHQ company logo", width: 120 },
                  { src: "/logo-color.svg", alt: "BuidlGuidl Logo", width: 100 },
                  { src: "/web3bridge.png", alt: "Web3Bridge company logo", width: 120 },
                  { src: "/genesys.png", alt: "Genesys company logo", width: 120 },
                  { src: "/AyaHQ-blue.png", alt: "AyaHQ company logo", width: 100 },
                  { src: "/logo-color.svg", alt: "BuidlGuidl Logo", width: 100 },
                  { src: "/web3bridge.png", alt: "Web3Bridge company logo", width: 100 },
                  { src: "/genesys.png", alt: "Genesys company logo", width: 120 },
                  { src: "/AyaHQ-blue.png", alt: "AyaHQ company logo", width: 100 },
                  { src: "/logo-color.svg", alt: "BuidlGuidl Logo", width: 100 },
                  { src: "/web3bridge.png", alt: "Web3Bridge company logo", width: 100 },
                  { src: "/genesys.png", alt: "Genesys company logo", width: 120 },
                  { src: "/AyaHQ-blue.png", alt: "AyaHQ company logo", width: 100 },
                  { src: "/logo-color.svg", alt: "BuidlGuidl Logo", width: 100 },
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
                className={`absolute ${element.position} z-10 bg-blue-500 rounded-sm text-center` }
                animate={{
                  rotate: 360,
                  transition: {
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }
                }}
              >
                <div className="bg-white/90 backdrop-blur-sm text-[#0066FF] rounded-full p-2 shadow-lg flex flex-col items-center justify-center w-16 h-16">
                  <span className="text-2xl">{element.icon}</span>
                  <span className="text-xs font-medium mt-1">{element.name}</span>
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
                  ease: "linear"
                }
              }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 }
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
  );
};

export default HeroSection;