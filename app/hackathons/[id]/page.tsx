"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { FaInbox, FaInfo } from "react-icons/fa6";

// Mock data - in a real app, this would come from an API or database
const hackathons = [
  {
    id: "eth-rwanda-hackathon-2026",
    title: "ETH Rwanda Hackathon 2026",
    description:
      "Join Africa's brightest minds in a groundbreaking 48-hour blockchain innovation sprint. Build decentralized solutions that tackle real challenges across the continent.",
    date: "May 2026",
    location: "Kigali, Rwanda",
    prizePool: "$3,000+ in grants",
    registrationDeadline: "TBD",
    themes: [
      "DeFi for Africa",
      "Digital Identity",
      "Climate Tech",
      "Cross-border Payments",
      "Supply Chain",
    ],
    partners: [
      "Web3 Bridge",
      "AyaHQ",
      "Genesis",
      "GIZ",
      "BuidlGuild",
      "Digital Transformation Rwanda",
    ],
    sponsors: [
      {
        name: "Your Company Here",
        logo: "/placeholder-sponsor-platinum.svg",
        package: "Platinum Sponsor",
        description: "Be the main event sponsor and get maximum visibility",
        contribution: "$3,000+",
        benefits: [
          "Main stage branding",
          "Keynote speaking slot",
          "Recruitment booth",
          "Featured in all marketing",
          "Prime logo placement",
        ],
      },
      {
        name: "Innovation Partner",
        logo: "/placeholder-sponsor-gold.svg",
        package: "Gold Sponsor",
        description: "Perfect for tech companies and infrastructure providers",
        contribution: "$2,000+",
        benefits: [
          "Workshop hosting rights",
          "Technical mentorship sessions",
          "Brand visibility",
          "Networking session",
          "Featured in press releases",
        ],
      },
      {
        name: "Community Champion",
        logo: "/placeholder-sponsor-silver.svg",
        package: "Silver Sponsor",
        description: "Ideal for growing Web3 projects and tools",
        contribution: "$1,000+",
        benefits: [
          "Developer tools showcase",
          "Technical workshops",
          "Brand recognition",
          "Community engagement",
          "Social media features",
        ],
      },
      {
        name: "GIZ",
        logo: "/giz1.png",
        package: "Community Partner",
        description: "Supporting digital transformation in Rwanda",
        contribution: "Strategic Partnership",
        benefits: [
          "Government liaison",
          "Community outreach",
          "Local ecosystem support",
          "Policy guidance",
        ],
      },
    ],
    image: "/e1.svg",
    longDescription:
      "The ETH Rwanda Hackathon 2026 is our flagship event designed to catalyze blockchain innovation across the continent. Over 48 intensive hours, participants will collaborate, learn, and build decentralized applications that address real-world challenges in finance, identity, supply chain, and more. This hybrid event features physical hubs in major African cities combined with virtual participation, ensuring broad accessibility while maintaining the energy of in-person collaboration. With over $3,000 in prizes, mentorship from industry leaders, and potential incubation opportunities, this is your chance to make a lasting impact on Africa's digital future.",
    schedule: [
      {
        day: "Phase 1: Registration",
        activities: [
          "Early Bird Registration",
          "Team Formation Support",
          "Pre-hackathon Workshops",
          "Technical Onboarding",
        ],
      },
      {
        day: "Phase 2: Hackathon Kickoff",
        activities: [
          "Opening Ceremony",
          "Challenge Announcements",
          "Mentor Matching",
          "Development Sprint Begins",
        ],
      },
      {
        day: "Phase 3: Building",
        activities: [
          "48-Hour Development",
          "Expert Mentor Sessions",
          "Technical Workshops",
          "Progress Check-ins",
        ],
      },
      {
        day: "Phase 4: Finale",
        activities: [
          "Project Submissions",
          "Demo Presentations",
          "Judging Panel",
          "Awards Ceremony",
        ],
      },
    ],
    prizes: [
      { place: "Grand Prize", prize: "$1,500 + Incubation Program" },
      { place: "2nd Place", prize: "$1,000 + Mentorship" },
      { place: "3rd Place", prize: "$500 + Workshop Access" },
      { place: "Best DeFi Solution", prize: "Custom" },
      { place: "Best Social Impact", prize: "Custom" },
      { place: "Audience Choice", prize: "Custom" },
    ],
    status: "🚀 Registration Open Soon",
    participants: "500+ Expected",
    mentors: "100+ Industry Experts",
    duration: "48-Hour Sprint",
    format: "Hybrid (Physical Hubs + Virtual)",
    eligibility: "Open to all African developers and students worldwide",
    teamSize: "2-5 members",
    registrationLink: "/hackathons/register",
  },
  // ... other hackathons remain the same
];

export default function HackathonDetail({
  params,
}: {
  params: { id: string };
}) {
  const hackathon = hackathons.find((h) => h.id === params.id);

  if (!hackathon) {
    notFound();
  }

  const isAfricaHackathon = hackathon.id === "eth-rwanda-hackathon-2026";
  const isRegistrationOpen = isAfricaHackathon;
  const hasSponsors = hackathon.sponsors && hackathon.sponsors.length > 0;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        className={`relative py-8 sm:py-12 lg:py-16 ${
          isAfricaHackathon
            ? "bg-gradient-to-br from-blue-600 to-purple-700"
            : "bg-gradient-to-br from-blue-600 to-blue-800"
        } text-white`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Link
              href="/hackathons"
              className="inline-flex items-center text-blue-100 hover:text-white mb-6 transition-colors"
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back to Hackathons
            </Link>

            {/* Featured Badge for Africa Hackathon */}
            {isAfricaHackathon && (
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-4 ml-10">
                <span className="text-sm font-semibold">
                  🔥 FEATURED HACKATHON
                </span>
              </div>
            )}

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              {hackathon.title}
            </h1>
            <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto mb-6 sm:mb-8">
              {hackathon.description}
            </p>

            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm sm:text-base">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
                📅 {hackathon.date}
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
                📍 {hackathon.location}
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
                🏆 {hackathon.prizePool}
              </div>
              {isAfricaHackathon && (
                <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
                  ⏱️ {hackathon.duration}
                </div>
              )}
            </div>

            {/* Additional Stats for Africa Hackathon */}
            {isAfricaHackathon && (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6 max-w-2xl mx-auto">
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-300">500+</div>
                  <div className="text-blue-100 text-sm">Participants</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-300">100+</div>
                  <div className="text-blue-100 text-sm">Mentors</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-300">10+</div>
                  <div className="text-blue-100 text-sm">Countries</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-300">
                    $3,000
                  </div>
                  <div className="text-blue-100 text-sm">Prizes</div>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative h-64 sm:h-80 rounded-xl overflow-hidden shadow-lg"
            >
              <Image
                src={hackathon.image}
                alt={hackathon.title}
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 sm:p-8 shadow-lg border border-gray-100"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                About This Hackathon
              </h2>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                {hackathon.longDescription}
              </p>
            </motion.div>

            {/* Schedule */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 sm:p-8 shadow-lg border border-gray-100"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                Event Schedule
              </h2>
              <div className="space-y-4">
                {hackathon.schedule.map((day, index) => (
                  <div key={index} className="border-l-4 border-blue-500 pl-4">
                    <h3 className="font-semibold text-lg text-gray-900 mb-2">
                      {day.day}
                    </h3>
                    <ul className="space-y-1">
                      {day.activities.map((activity, actIndex) => (
                        <li
                          key={actIndex}
                          className="text-gray-600 flex items-center"
                        >
                          <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                          {activity}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Prizes */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 sm:p-8 shadow-lg border border-gray-100"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                Prizes & Rewards
              </h2>
              <div
                className={`grid gap-4 ${
                  hackathon.prizes.length > 3
                    ? "grid-cols-1 sm:grid-cols-2"
                    : "grid-cols-1 sm:grid-cols-3"
                }`}
              >
                {hackathon.prizes.map((prize, index) => (
                  <div
                    key={index}
                    className="text-center p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-100"
                  >
                    <div className="text-2xl mb-2">
                      {index === 0
                        ? "🥇"
                        : index === 1
                          ? "🥈"
                          : index === 2
                            ? "🥉"
                            : "⭐"}
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {prize.place}
                    </h3>
                    <p className="text-gray-600 text-sm">{prize.prize}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Sponsors Section - NEW SECTION ADDED */}
            {hasSponsors && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 sm:p-8 shadow-lg border border-gray-100"
              >
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                    Sponsorship Opportunities
                  </h2>
                  <Link
                    href="/sponsorship"
                    className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300 text-sm font-medium"
                  >
                    🤝 Become a Sponsor
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </Link>
                </div>

                <p className="text-gray-600 mb-8 text-lg">
                  We're seeking visionary partners to join us in empowering
                  Africa's next generation of Web3 innovators. Your sponsorship
                  will make this groundbreaking event possible while giving you
                  exclusive access to top talent and brand visibility.
                </p>

                <div className="space-y-6">
                  {hackathon.sponsors.map((sponsor, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow duration-300"
                    >
                      <div className="flex flex-col md:flex-row gap-6">
                        {/* Sponsor Logo and Basic Info */}
                        <div className="flex-shrink-0 flex flex-col items-center text-center md:text-left md:items-start">
                          <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center mb-3 p-2 border-2 border-dashed border-blue-300">
                            {sponsor.logo.includes("placeholder") ? (
                              <div className="text-center">
                                <div className="text-2xl mb-1"></div>
                                <div className="text-xs text-blue-600 font-semibold">
                                  sponsor logo
                                </div>
                              </div>
                            ) : (
                              <Image
                                src={sponsor.logo}
                                alt={sponsor.name}
                                width={80}
                                height={80}
                                className="object-contain max-h-16"
                              />
                            )}
                          </div>
                          <div className="mb-2">
                            <span
                              className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${
                                sponsor.package === "Platinum Sponsor"
                                  ? "bg-gradient-to-r from-yellow-400 to-orange-500 text-white"
                                  : sponsor.package === "Gold Sponsor"
                                    ? "bg-gradient-to-r from-yellow-300 to-yellow-500 text-gray-900"
                                    : sponsor.package === "Silver Sponsor"
                                      ? "bg-gradient-to-r from-gray-300 to-gray-400 text-gray-900"
                                      : "bg-gradient-to-r from-blue-400 to-blue-600 text-white"
                              }`}
                            >
                              {sponsor.package}
                            </span>
                          </div>
                          <h3 className="font-bold text-lg text-gray-900">
                            {sponsor.name}
                          </h3>
                          <p className="text-gray-600 text-sm mt-1">
                            {sponsor.description}
                          </p>
                          <div className="mt-2 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                            Contribution: {sponsor.contribution}
                          </div>
                        </div>

                        {/* Sponsor Benefits */}
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                            Sponsor Benefits
                          </h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {sponsor.benefits.map((benefit, benefitIndex) => (
                              <div
                                key={benefitIndex}
                                className="flex items-center gap-2 text-sm text-gray-600"
                              >
                                <svg
                                  className="w-4 h-4 text-green-500 flex-shrink-0"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M5 13l4 4L19 7"
                                  />
                                </svg>
                                {benefit}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Sponsorship CTA */}
                <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-200 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Ready to Shape Africa's Web3 Future?
                  </h3>
                  <p className="text-gray-600 mb-4 max-w-2xl mx-auto">
                    Join us as a sponsor and get exclusive access to Africa's
                    brightest Web3 talent, unprecedented brand visibility, and
                    the opportunity to shape the future of blockchain innovation
                    on the continent.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                      href="/sponsorship"
                      className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      Lean More
                    </Link>
                    <Link
                      href="mailto:info@web3mates.com"
                      className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300"
                    >
                      Contact Our Team
                    </Link>
                  </div>
                </div>
              </motion.div>
            )}
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            {/* Quick Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Quick Info
              </h3>
              <div className="space-y-3">
                <div className="flex items-center text-gray-600">
                  <svg
                    className="w-5 h-5 mr-3 text-blue-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <div>
                    <div className="text-sm font-medium">
                      Registration Deadline
                    </div>
                    <div className="text-sm">
                      {hackathon.registrationDeadline}
                    </div>
                  </div>
                </div>
                <div className="flex items-center text-gray-600">
                  <svg
                    className="w-5 h-5 mr-3 text-blue-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <div>
                    <div className="text-sm font-medium">Location</div>
                    <div className="text-sm">{hackathon.location}</div>
                  </div>
                </div>
                {isAfricaHackathon && (
                  <>
                    <div className="flex items-center text-gray-600">
                      <svg
                        className="w-5 h-5 mr-3 text-blue-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <div>
                        <div className="text-sm font-medium">Duration</div>
                        <div className="text-sm">{hackathon.duration}</div>
                      </div>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <svg
                        className="w-5 h-5 mr-3 text-blue-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <div>
                        <div className="text-sm font-medium">Team Size</div>
                        <div className="text-sm">{hackathon.teamSize}</div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </motion.div>

            {/* Themes */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Themes & Tracks
              </h3>
              <div className="flex flex-wrap gap-2">
                {hackathon.themes.map((theme, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                  >
                    {theme}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Partners */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Partners & Sponsors
              </h3>
              <div className="space-y-2">
                {hackathon.partners.map((partner, index) => (
                  <div key={index} className="flex items-center text-gray-600">
                    <svg
                      className="w-4 h-4 mr-2 text-blue-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="text-sm">{partner}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`rounded-xl p-6 text-white text-center ${
                isAfricaHackathon
                  ? "bg-gradient-to-br from-blue-600 to-purple-700"
                  : "bg-gradient-to-br from-blue-600 to-blue-700"
              }`}
            >
              <h3 className="text-xl font-bold mb-3">
                {isAfricaHackathon
                  ? "Ready to Build Africa's Future?"
                  : "Ready to Build?"}
              </h3>
              <p className="text-blue-100 mb-4 text-sm">
                {isAfricaHackathon
                  ? "Join hundreds of developers shaping Web3 across Africa!"
                  : "Join us for an incredible learning and building experience!"}
              </p>
              {isRegistrationOpen ? (
                <Link
                  href={hackathon.registrationLink}
                  className="w-full bg-yellow-400 text-blue-900 px-6 py-3 rounded-lg font-bold hover:bg-yellow-300 transition-colors duration-300 block text-center"
                >
                  Register Now
                </Link>
              ) : (
                <button
                  disabled
                  className="w-full bg-white text-blue-600 px-6 py-3 rounded-lg font-medium transition-all cursor-not-allowed opacity-60"
                  title="Registration coming soon"
                >
                  Registration Coming Soon
                </button>
              )}
              {isAfricaHackathon && (
                <Link
                  href="/hackathons/early-access"
                  className="w-full bg-transparent border border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors duration-300 block text-center mt-3"
                >
                  Get Early Access Updates
                </Link>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
