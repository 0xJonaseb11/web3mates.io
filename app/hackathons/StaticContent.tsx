"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const HackathonsPage = () => {
  const upcomingHackathons = [
    {
      id: "eth-rwanda-hackathon-2026",
      title: "ETH Rwanda Hackathon 2026",
      description:
        "Join Africa's brightest minds in a groundbreaking 48-hour blockchain innovation sprint. Build decentralized solutions that tackle real challenges across the continent.",
      date: "May 2026",
      location: "Multiple Locations Across Africa",
      themes: [
        "DeFi for Africa",
        "Digital Identity",
        "Climate Tech",
        "Cross-border Payments",
        "Supply Chain",
      ],
      prize: "$3000+ in prizes & grants",
      partners: [
        "University of Rwanda",
        "Multiple African Universities",
        "Leading Web3 Protocols",
        "VC Partners",
      ],
      status: "Registration Open Soon",
      image: "/e1.svg",
      registrationLink: "/hackathons/register",
      deadline: "TBD",
      featured: true,
      duration: "48-Hour Sprint",
      participants: "500+ Expected",
    },
    {
      id: "kigali-web3-hackathon-2025",
      title: "Kigali Web3 Hackathon 2025",
      description:
        "Join Rwanda's premier Web3 development competition in partnership with University of Rwanda. Build decentralized solutions for Africa's challenges.",
      date: "May 15-17, 2026",
      location: "University of Rwanda, Kigali Campus",
      themes: ["DeFi for Africa", "Digital Identity", "Climate Tech"],
      prize: "$1,000 in prizes",
      partners: [
        "University of Rwanda",
        "Rwanda ICT Chamber",
        "Africa Blockchain Institute",
      ],
      status: "Registration Opening Soon",
      image: "/past.jpeg",
      registrationLink: "#register",
      deadline: "TBD",
    },
    {
      id: "east-africa-blockchain-challenge-2026",
      title: "East Africa Blockchain Challenge 2026",
      description:
        "Regional hackathon bringing together developers from across East Africa to build interoperable blockchain solutions.",
      date: "March 2026 (TBD)",
      location: "University of Rwanda, Nyarugenge Campus",
      themes: ["Cross-border Payments", "Supply Chain", "Healthcare"],
      prize: "TBD",
      partners: ["University of Rwanda", "EAC Secretariat"],
      status: "Registration Coming Soon",
      image: "/ai_ethic.jpeg",
      registrationLink: "#",
      deadline: "TBD",
    },
  ];

  const pastHackathons = [
    {
      id: "rwanda-digital-innovation-hackathon-2024",
      title: "Rwanda Digital Innovation Hackathon 2024",
      description:
        "Pilot event that laid the foundation for our Web3 hackathon series in Rwanda.",
      date: "August 2024",
      location: "Kigali Innovation City",
      themes: ["Financial Inclusion", "E-Government"],
      winners: [
        "Team Umuganda (Digital ID solution)",
        "Team Irembo (Land registry prototype)",
      ],
      image: "/roundtables.jpeg",
      recapLink: "#",
    },
  ];

  const hackathonBenefits = [
    {
      title: "Build Real Solutions",
      description:
        "Work on meaningful projects that address Africa's unique challenges",
      icon: (
        <svg
          className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z" />
        </svg>
      ),
    },
    {
      title: "Learn from Experts",
      description: "Access workshops and mentorship from industry leaders",
      icon: (
        <svg
          className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 14l9-5-9-5-9 5 9 5z" />
          <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
          />
        </svg>
      ),
    },
    {
      title: "Win Prizes",
      description:
        "Compete for cash prizes, grants, and incubation opportunities",
      icon: (
        <svg
          className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ),
    },
    {
      title: "Grow Your Network",
      description:
        "Connect with developers, entrepreneurs, and potential employers",
      icon: (
        <svg
          className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      title: "Career Opportunities",
      description:
        "Get noticed by top tech companies and investors in the region",
      icon: (
        <svg
          className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z" />
        </svg>
      ),
    },
    {
      title: "University Credits",
      description:
        "Participating students may earn academic credits (varies by institution)",
      icon: (
        <svg
          className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 14l9-5-9-5-9 5 9 5z" />
          <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-24 pt-20 sm:pt-24">
      {/* Hero Section */}
      <div className="text-center mb-12 sm:mb-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6"
        >
          Web3 <span className="text-blue-700">Hackathons</span> Across Africa
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-gray-600 max-w-3xl mx-auto text-base sm:text-lg"
        >
          Join our groundbreaking hackathon series to build the future of Web3
          in Africa. Collaborate, innovate, and shape the decentralized future
          of the continent.
        </motion.p>
      </div>

      {/* Featured Hackathon Banner */}
      <motion.section
        className="mb-16 sm:mb-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-2xl p-6 sm:p-8 lg:p-10 text-white relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full -translate-y-32 translate-x-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full translate-y-24 -translate-x-24"></div>
          </div>

          {/* Hot Badge */}
          <div className="absolute top-4 right-4">
            <div className="relative flex h-3 w-3">
              <div className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></div>
              <div className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></div>
            </div>
          </div>

          <div className="relative z-10">
            {/* Featured Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-4 sm:mb-6">
              <span className="text-xs sm:text-sm font-semibold text-white">
                🔥 FEATURED HACKATHON
              </span>
            </div>

            {/* Main Title */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
              ETH Rwanda <span className="text-yellow-300">Hackathon</span>{" "}
              2026
            </h2>

            {/* Key Info */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6 sm:mb-8">
              <div className="flex items-center gap-2 bg-black/30 px-4 py-2 rounded-lg">
                <span className="text-sm sm:text-base">May 2026</span>
              </div>
              <div className="flex items-center gap-2 bg-black/30 px-4 py-2 rounded-lg">
                <span className="text-sm sm:text-base">⏱️ 48-Hour Sprint</span>
              </div>
              <div className="flex items-center gap-2 bg-black/30 px-4 py-2 rounded-lg">
                <span className="text-sm sm:text-base">
                  Multiple Locations
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto mb-6 sm:mb-8 text-blue-100 leading-relaxed">
              Join Africa&apos;s brightest minds in a groundbreaking 48-hour
              blockchain innovation sprint. Build, collaborate, and shape the
              future of Web3 across the continent.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6 sm:mb-8 text-center">
              <div className="flex flex-col items-center">
                <span className="font-bold text-yellow-300 text-xl sm:text-2xl">
                  $3K+
                </span>
                <span className="text-blue-100 text-sm">In Prizes</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-bold text-yellow-300 text-xl sm:text-2xl">
                  100+
                </span>
                <span className="text-blue-100 text-sm">Mentors</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-bold text-yellow-300 text-xl sm:text-2xl">
                  10+
                </span>
                <span className="text-blue-100 text-sm">African Nations</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-bold text-yellow-300 text-xl sm:text-2xl">
                  500+
                </span>
                <span className="text-blue-100 text-sm">Participants</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/hackathons/register"
                className="bg-yellow-400 text-blue-900 px-8 py-3 rounded-lg font-bold text-sm sm:text-base hover:bg-yellow-300 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-center"
              >
                Get Early Access
              </Link>
              <Link
                href="/hackathons/eth-rwanda-hackathon-2026"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold text-sm sm:text-base hover:bg-white/10 transition-colors duration-300 text-center"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Upcoming Hackathons */}
      <section className="mb-16 sm:mb-20">
        <motion.h2
          className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-6 sm:mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Upcoming Hackathons
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
          {upcomingHackathons.map((hackathon, index) => (
            <motion.div
              key={hackathon.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-white rounded-xl border overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 ${
                hackathon.featured
                  ? "ring-2 ring-yellow-400 ring-offset-2 border-yellow-400 transform hover:scale-105"
                  : "border-gray-200 hover:shadow-lg"
              }`}
            >
              {/* Featured Badge */}
              {hackathon.featured && (
                <div className="absolute top-4 left-4 z-10">
                  {/* <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                    🔥 FEATURED
                  </div> */}
                </div>
              )}

              <div className="relative h-40 sm:h-48 w-full bg-gray-100">
                <Image
                  src={hackathon.image}
                  alt={hackathon.title}
                  fill
                  className="object-cover"
                />
                <div
                  className={`absolute top-3 sm:top-4 right-3 sm:right-4 backdrop-blur px-2 sm:px-3 py-1 rounded-full text-xs font-medium ${
                    hackathon.featured
                      ? "bg-yellow-500/90 text-yellow-900"
                      : "bg-white/90 text-slate-500"
                  }`}
                >
                  {hackathon.status}
                </div>
              </div>

              <div className="p-4 sm:p-6">
                <h3
                  className={`text-lg sm:text-xl font-bold mb-2 ${
                    hackathon.featured ? "text-blue-800" : "text-gray-900"
                  }`}
                >
                  {hackathon.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm sm:text-base">
                  {hackathon.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div>
                    <h4 className="text-xs sm:text-sm font-medium text-gray-500 mb-1">
                      Date
                    </h4>
                    <p className="text-slate-400 text-sm sm:text-base">
                      {hackathon.date}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-medium text-gray-500 mb-1">
                      Location
                    </h4>
                    <p className="text-slate-400 text-sm sm:text-base">
                      {hackathon.location}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-medium text-gray-500 mb-1">
                      Prize Pool
                    </h4>
                    <p className="text-slate-400 text-sm sm:text-base">
                      {hackathon.prize}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-medium text-gray-500 mb-1">
                      Registration Deadline
                    </h4>
                    <p className="text-slate-400 text-sm sm:text-base">
                      {hackathon.deadline}
                    </p>
                  </div>
                </div>

                <div className="mb-4 sm:mb-6">
                  <h4 className="text-xs sm:text-sm font-medium text-gray-500 mb-2">
                    Themes/Tracks
                  </h4>
                  <div className="flex flex-wrap gap-1 sm:gap-2">
                    {hackathon.themes.map((theme) => (
                      <span
                        key={theme}
                        className="bg-blue-50 text-blue-700 px-2 sm:px-3 py-1 rounded-full text-xs"
                      >
                        {theme}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  {hackathon.featured ? (
                    <Link
                      href="/hackathons/register"
                      className="bg-blue-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors text-center text-sm sm:text-base"
                    >
                      Register Now
                    </Link>
                  ) : (
                    <button
                      disabled
                      className="bg-blue-400 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-all text-center text-sm sm:text-base cursor-not-allowed opacity-60 hover:opacity-80 relative group"
                      title="Registration coming soon"
                    >
                      <span className="relative z-10">Register Now</span>
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-800 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                        Registration coming soon
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
                      </div>
                    </button>
                  )}
                  <Link
                    href={`/hackathons/${hackathon.id}`}
                    className={`border text-center px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-colors text-sm sm:text-base ${
                      hackathon.featured
                        ? "border-blue-600 text-blue-600 hover:bg-blue-50"
                        : "border-gray-300 text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Participate Section */}
      <section className="mb-16 sm:mb-20">
        <motion.h2
          className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-6 sm:mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Why Participate?
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {hackathonBenefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="bg-white p-4 sm:p-6 rounded-xl border border-gray-200 hover:border-blue-300 transition-colors"
            >
              <div className="mb-3 sm:mb-4 p-3 rounded-lg bg-blue-50 flex items-center justify-center">
                {benefit.icon}
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-center text-gray-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Past Hackathons */}
      {pastHackathons.length > 0 && (
        <section className="mb-12 sm:mb-16">
          <motion.h2
            className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-6 sm:mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Past Hackathons
          </motion.h2>

          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 sm:p-8 text-center">
            <svg
              className="mx-auto h-10 w-10 sm:h-12 sm:w-12 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
              />
            </svg>
            <h3 className="mt-4 text-base sm:text-lg font-medium text-gray-900">
              No past hackathons
            </h3>
            <p className="mt-2 text-gray-500 text-sm sm:text-base">
              We haven&apos;t hosted any hackathons yet. Stay tuned for our upcoming
              events!
            </p>
          </div>
        </section>
      )}

      {/* Final CTA Section */}
      <motion.section
        className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-xl p-6 sm:p-8 lg:p-12 text-center mb-12 sm:mb-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4">
          Ready to Build Africa&apos;s Web3 Future?
        </h2>
        <p className="text-blue-50 max-w-2xl mx-auto mb-6 sm:mb-8 text-base sm:text-lg">
          Join hundreds of developers, designers, and entrepreneurs shaping the
          decentralized future of Africa.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/hackathons/register"
            className="bg-yellow-400 text-blue-900 px-6 sm:px-8 py-3 rounded-lg font-bold text-sm sm:text-base hover:bg-yellow-300 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-center"
          >
            Register for ETH Rwanda Hackathon
          </Link>
          <Link
            href="/partnership"
            className="bg-transparent border border-white text-white px-6 sm:px-8 py-3 rounded-lg hover:bg-white/10 font-medium transition-all text-sm sm:text-base text-center"
          >
            Partner With Us
          </Link>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <section>
        <motion.h2
          className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-6 sm:mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="space-y-3 sm:space-y-4">
          <motion.div
            className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
              Who can participate in the ETH Rwanda Hackathon?
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">
              The ETH Rwanda Hackathon 2026 is open to developers, designers,
              entrepreneurs, and students from across Africa and beyond. Teams
              of 2-5 participants are welcome. If you don&apos;t have a team, we&apos;ll
              help you find one during the event!
            </p>
          </motion.div>

          <motion.div
            className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
              Do I need blockchain experience to join?
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">
              Not at all! We welcome beginners and will provide comprehensive
              workshops, mentorship, and resources throughout the event. About
              40% of participants in our previous events were new to blockchain
              technology.
            </p>
          </motion.div>

          <motion.div
            className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
              Is this an in-person or virtual event?
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">
              The ETH Rwanda  Hackathon will be a hybrid event with physical
              hubs in multiple African cities and virtual participation options.
              This allows us to reach builders across the continent while
              maintaining the energy of in-person collaboration.
            </p>
          </motion.div>

          <motion.div
            className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
              What kind of support will be provided during the hackathon?
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">
              Participants will have access to technical mentors, industry
              experts, workshops on Web3 technologies, design thinking sessions,
              and dedicated support channels. We&apos;ll also provide API access to
              various blockchain platforms and tools.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HackathonsPage;
