"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const OurStory = () => {
  const milestones = [
    {
      year: "2023",
      title: "The Spark",
      description:
        "Joab Niwagaba, while working on blockchain projects, recognized Africa's potential to leapfrog traditional systems through Web3.",
      image: "/the-spark.jpeg",

      icon: "",
    },
    {
      year: "2024",
      title: "First Assemblies",
      description:
        "Joab brought together Jonas, Jabo, and Laurent - forming the core team with complementary skills in development, operations, and community.",
      image: "/assembly.jpeg",
      icon: "",
    },
    {
      year: "Q1 2025",
      title: "First Bootcamp",
      description:
        "Launched our pilot program in Kigali, training 25 developers despite having no funding - proving the demand for Web3 education.",
      image: "/img6.jpg",
      icon: "",
    },
    {
      year: "Q3 2025",
      title: "Continent-Wide Reach",
      description:
        "Expanded to 6 African countries through partnerships with local tech hubs and blockchain projects.",
      image: "/africa1.jpeg",
      icon: "",
    },
    {
      year: "late 2025",
      title: "Enterprise Recognition",
      description:
        "Started working with companies like AyaHQ, Web3Bridge and BuidlGuidl to bridge the talent gap, validating our training model.",
      image: "/web3bridge.png",
      icon: "",
    },
  ];

  const coreValues = [
    {
      title: "African Solutions",
      description:
        "We build curriculum solving Africa-specific challenges in finance, identity, and governance.",
      icon: "",
    },
    {
      title: "Learning by Building",
      description:
        "No theoretical fluff - only hands-on projects that create real portfolio pieces.",
      icon: "",
    },
    {
      title: "Community First",
      description:
        "Our alumni network supports each other's growth long after programs end.",
      icon: "",
    },
    {
      title: "Abundance Mindset",
      description:
        "We believe Africa's tech potential is limitless when knowledge is shared openly.",
      icon: "♾️",
    },
  ];

  return (
    <>
      {/* Hero Section - Full Width */}
      <div className="relative w-screen -ml-[calc(50vw-50%)] pt-20 sm:pt-24 lg:py-24">
        <div className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
          <div className="relative h-[50vh] sm:h-[60vh] min-h-[400px] sm:min-h-[500px] flex items-center justify-center overflow-hidden">
            <Image
              src="/assembly.jpeg"
              alt="Web3 Mates team assembly and collaboration"
              fill
              className="object-cover absolute z-0"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/70 z-1"></div>
            <motion.div
              className="relative z-10 text-center px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 drop-shadow-lg px-2 sm:px-0">
                From <span className="text-[#0066FF] drop-shadow-lg">Vision</span> to Movement
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-white/95 max-w-3xl mx-auto font-medium px-2 sm:px-0">
                How passionate Africans came together to build Web3 Mates
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Founder Spotlight */}
        <section className="py-12 sm:py-16 lg:py-20">
        <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 items-center">
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative h-64 sm:h-80 lg:h-96 w-full rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/img2.jpg"
                alt="Joab Niwagaba speaking"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 sm:p-6">
                <p className="text-white text-xs sm:text-sm">
                  Joab Niwagaba, Founder & CEO
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#0B1C39] mb-4">
              &quot;Africa&apos;s future won&apos;t be built by outsiders&quot;
            </h2>
            <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
              In 2023, Joab saw two realities: Africa&apos;s youth were hungry
              for tech opportunities, while global Web3 projects lacked African
              perspectives. He envisioned a homegrown solution - training
              Africans to build for African contexts.
            </p>
            <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
              What started as WhatsApp groups sharing Solidity tutorials became
              structured programs when Jonas (Technical lead), Jabo
              (operations), and Laurent (community) joined the mission.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link
                href="/team"
                className="bg-[#0066FF] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-[#0047CC] transition-colors text-center text-sm sm:text-base"
              >
                Meet The Team
              </Link>
              <Link
                href="#"
                className="flex items-center justify-center gap-2 text-[#0066FF] hover:underline text-sm sm:text-base"
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm6.564 12.568-6 4A1 1 0 0 1 11 16V8a1 1 0 0 1 1.564-.832l6 4a1 1 0 0 1 0 1.664z" />
                </svg>
                Watch Founder&apos;s Story
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Interactive Timeline */}
      <section className="py-10 sm:py-12 lg:py-16 bg-[#F8FAFF] rounded-2xl">
        <div className="max-w-4xl mx-auto text-center mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#0B1C39] mb-4">
            Our Journey
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">
            From humble beginnings to continental impact
          </p>
        </div>
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-1/2 w-0.5 h-full bg-[#0066FF]/30 transform -translate-x-1/2 hidden sm:block"></div>
          {/* Milestones */}
          <div className="space-y-8 sm:space-y-12">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                className={`relative flex flex-col sm:flex-row ${index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"} items-center`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Date */}
                <div
                  className={`w-full sm:w-1/2 px-4 ${index % 2 === 0 ? "sm:text-right" : "sm:text-left"} text-center sm:text-left`}
                >
                  <p className="text-xs sm:text-sm font-medium text-[#0066FF] mb-2 sm:mb-0">
                    {milestone.year}
                  </p>
                </div>
                {/* Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 sm:w-6 sm:h-6 rounded-full bg-[#0066FF] items-center justify-center text-white z-10 hidden sm:flex">
                  {milestone.icon}
                </div>
                {/* Card */}
                <div className="w-full sm:w-1/2 px-4">
                  <div
                    className={`p-4 sm:p-6 bg-white rounded-lg shadow-sm border border-gray-100 ${index % 2 === 0 ? "sm:ml-6" : "sm:mr-6"}`}
                  >
                    <h3 className="text-base sm:text-lg font-bold text-[#0B1C39] mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">
                      {milestone.description}
                    </p>
                    <div className="relative h-32 sm:h-40 rounded-md overflow-hidden">
                      <Image
                        src={milestone.image}
                        alt={milestone.title}
                        fill
                        className="object-cover w-full"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto text-center mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#0B1C39] mb-4">
            What Makes Us Different
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">
            The principles that guide every decision we make
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {coreValues.map((value, index) => (
            <motion.div
              key={index}
              className="bg-white p-4 sm:p-6 rounded-xl border border-gray-100 hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="text-2xl sm:text-3xl mb-3 sm:mb-4">
                {value.icon}
              </div>
              <h3 className="text-base sm:text-lg lg:text-xl font-bold text-[#0B1C39] mb-2">
                {value.title}
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm lg:text-base">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-r from-[#0066FF] to-[#0047CC] rounded-xl sm:rounded-2xl mb-8 sm:mb-12 md:mb-16 text-center mx-4 sm:mx-6 lg:mx-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="px-4 sm:px-6 lg:px-8"
        >
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4">
            Be Part of Our Story
          </h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-4 sm:mb-6 md:mb-8 text-xs sm:text-sm md:text-base lg:text-lg px-2">
            Whether you&apos;re a developer, entrepreneur, or company - join us
            in building Africa&apos;s Web3 future.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <Link
              href="/mentorship"
              className="bg-white text-[#0066FF] px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 rounded-full hover:shadow-lg transition-all duration-300 font-medium text-xs sm:text-sm md:text-base hover:bg-blue-50"
            >
              Start Learning
            </Link>
            <Link
              href="/contact"
              className="bg-transparent border-2 border-white text-white px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 rounded-full hover:bg-white hover:text-[#0066FF] transition-all duration-300 font-medium text-xs sm:text-sm md:text-base"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </section>
      </div>
    </>
  );
};

export default OurStory;
