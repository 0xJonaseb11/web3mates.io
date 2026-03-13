"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const FeaturesPage = () => {
  const learningFeatures = [
    {
      title: "Project-Based Curriculum",
      description:
        "Learn by building real Web3 applications from day one - no theoretical fluff.",
      image: "/img1.jpg",
      highlights: [
        "Build 5+ portfolio projects",
        "Real-world case studies",
        "GitHub repository guidance",
      ],
    },
    {
      title: "African-Focused Content",
      description:
        "Case studies and projects tailored to African market needs and challenges.",
      image: "/img2.jpg",
      highlights: [
        "Local payment integrations",
        "Cross-border solutions",
        "Regulatory considerations",
      ],
    },
    {
      title: "Mentorship Network",
      description:
        "1:1 guidance from industry experts who've built successful Web3 projects in Africa.",
      image: "/img3.jpg",
      highlights: [
        "Weekly office hours",
        "Code reviews",
        "Career path guidance",
      ],
    },
  ];

  const programFeatures = [
    {
      title: "Flexible Learning Paths",
      description:
        "Choose between full-time intensive or part-time self-paced programs.",
      stats: [
        { value: "12-week", label: "Bootcamp" },
        { value: "6-month", label: "Part-time" },
        { value: "Self-paced", label: "Option" },
      ],
    },
    {
      title: "Job-Ready Outcomes",
      description:
        "Our graduates land roles at top African and global Web3 companies.",
      stats: [
        { value: "85%", label: "Placement rate" },
        { value: "3.5x", label: "Salary increase" },
        { value: "50+", label: "Hiring partners" },
      ],
    },
    {
      title: "Lifetime Community Access",
      description: "Join our growing network of 1000+ African Web3 builders.",
      stats: [
        { value: "Monthly", label: "Hackathons" },
        { value: "Private", label: "Job board" },
        { value: "VC", label: "Pitch days" },
      ],
    },
  ];

  const toolFeatures = [
    {
      title: "Interactive Learning Portal",
      description:
        "Our custom platform with coding exercises, video tutorials, and progress tracking.",
      image: "/img4.jpg",
    },
    {
      title: "Localized Development Kits",
      description:
        "Pre-configured environments with African blockchain node connections.",
      image: "/img5.jpg",
    },
    {
      title: "Career Dashboard",
      description:
        "Track your job search with our interview prep tools and employer connections.",
      image: "/img6.jpg",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-24 pt-20 sm:pt-24">
      <div className="text-center mb-12 sm:mb-16 lg:mb-20">
        <motion.h1
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B1C39] mb-4 sm:mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          How We <span className="text-[#0066FF]">Empower</span> African
          Builders
        </motion.h1>
        <motion.p
          className="text-gray-600 max-w-3xl mx-auto text-base sm:text-lg lg:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          A complete ecosystem designed to take you from Web3 curious to
          job-ready developer
        </motion.p>
      </div>

      <section className="mb-16 sm:mb-20">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#0B1C39] mb-6 sm:mb-8 text-center">
          Our Learning Approach
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {learningFeatures.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 * index }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="relative h-40 sm:h-48">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover"
                />
               
              </div>
              <div className="p-4 sm:p-6 lg:p-8">
                <h3 className="text-lg sm:text-xl font-bold text-[#0B1C39] mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm sm:text-base">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <svg
                        className="w-4 h-4 sm:w-5 sm:h-5 text-[#0066FF] mt-0.5 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-700 text-sm sm:text-base">
                        {highlight}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mb-16 sm:mb-20 bg-gradient-to-br from-[#0066FF]/5 to-white rounded-2xl p-6 sm:p-8 lg:p-12">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#0B1C39] mb-6 sm:mb-8 text-center">
          Program Features
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {programFeatures.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-xl p-4 sm:p-6 lg:p-8 border border-[#0066FF]/20 hover:border-[#0066FF]/40 transition-colors"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 * index }}
              viewport={{ once: true }}
            >
             
              <h3 className="text-lg sm:text-xl font-bold text-[#0B1C39] mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 mb-6 text-sm sm:text-base">
                {feature.description}
              </p>
              <div className="grid grid-cols-3 gap-2">
                {feature.stats.map((stat, i) => (
                  <div key={i} className="text-center">
                    <p className="text-base sm:text-lg lg:text-xl font-bold text-[#0066FF]">
                      {stat.value}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-600">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mb-16 sm:mb-20">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#0B1C39] mb-6 sm:mb-8 text-center">
          Our Learning Platform
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {toolFeatures.map((feature, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 * index }}
              viewport={{ once: true }}
            >
              <div className="relative h-48 sm:h-56 lg:h-64">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-4 sm:p-6">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-white/90 text-sm sm:text-base">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mb-16 sm:mb-20 bg-white shadow-2xl rounded-2xl p-6 sm:p-8 lg:p-12 border border-gray-100">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#0B1C39] mb-2 text-center">
          Why Web3 Mates <span className="text-blue-700">Stands Out</span>
        </h2>
        <p className="text-gray-600 mb-6 sm:mb-8 text-center max-w-2xl mx-auto text-sm sm:text-base">
          Traditional education vs. our industry-focused approach
        </p>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[600px]">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="pb-3 sm:pb-4 text-left text-sm sm:text-base"></th>
                <th className="pb-3 sm:pb-4 text-left font-semibold text-[#0B1C39] text-sm sm:text-base">
                  Traditional Programs
                </th>
                <th className="pb-3 sm:pb-4 text-left font-semibold text-[#0066FF] text-sm sm:text-base">
                  Web3 Mates
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {[
                ["Curriculum", "Theoretical concepts", "Project-based learning"],
                ["Content", "Global case studies", "African-focused examples"],
                ["Instructors", "Academic teachers", "Industry practitioners"],
                ["Outcome", "Certificate", "Job placement"],
                ["Support", "Office hours", "1:1 mentorship"],
                ["Cost", "$$$$", "FREE OF CHARGE"],
              ].map(([feature, traditional, web3mates], index) => (
                <tr key={index}>
                  <td className="py-3 sm:py-4 pr-6 sm:pr-8 font-medium text-[#0B1C39] text-sm sm:text-base">
                    {feature}
                  </td>
                  <td className="py-3 sm:py-4 pr-6 sm:pr-8 text-gray-600 text-sm sm:text-base">
                    {traditional}
                  </td>
                  <td className="py-3 sm:py-4 text-gray-600 font-medium text-sm sm:text-base">
                    {web3mates}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#0B1C39] mb-4">
            Ready to Transform Your Skills?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6 sm:mb-8 text-sm sm:text-base">
            Join our next cohort and start building Africa&apos;s Web3 future
            today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/mentorship"
              className="bg-gradient-to-r from-[#0066FF] to-[#0047CC] text-white px-6 sm:px-8 py-3 rounded-full hover:shadow-lg transition-all duration-300 font-medium text-sm sm:text-base"
            >
              View Programs
            </Link>
            <Link
              href="/contact"
              className="bg-white text-[#0066FF] px-6 sm:px-8 py-3 rounded-full border-2 border-[#0066FF] hover:bg-[#0066FF]/5 hover:shadow-md transition-all duration-300 font-medium text-sm sm:text-base"
            >
              Speak to Advisor
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default FeaturesPage;
