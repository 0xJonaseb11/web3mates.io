
"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const MentorshipPage = () => {
  const mentorshipTracks = [
    {
      title: "Web3 Fundamentals",
      description:
        "Master blockchain basics, wallets, and core concepts before diving deeper",
      icon: (
        <svg className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 14l9-5-9-5-9 5 9 5z"/>
          <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"/>
        </svg>
      ),
      duration: "4 weeks",
      level: "Beginner",
      features: [
        "Blockchain architecture",
        "Crypto wallets & security",
        "Smart contract overview",
        "Decentralized applications",
      ],
    },
    {
      title: "Smart Contract Development",
      description:
        "Build and deploy production-ready smart contracts on Ethereum and other EVM chains",
      icon: (
        <svg className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/>
        </svg>
      ),
      duration: "8 weeks",
      level: "Intermediate",
      features: [
        "Solidity programming",
        "Testing & debugging",
        "Deployment strategies",
        "Security best practices",
      ],
    },
    {
      title: "DeFi & dApp Building",
      description:
        "Create full-stack decentralized applications with frontend integration",
      icon: (
        <svg className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H1c-.55 0-1 .45-1 1s.45 1 1 1h22c.55 0 1-.45 1-1s-.45-1-1-1h-3zM5 6h14v10H5V6z"/>
        </svg>
      ),
      duration: "12 weeks",
      level: "Advanced",
      features: [
        "DeFi protocols",
        "Web3.js/Ethers.js",
        "UI/UX for dApps",
        "Mainnet deployment",
      ],
    },
  ];

  const mentors = [
    {
      name: "Petar Popovic",
      role: "Founder & Smart Contract Engineer",
      company: "ETH Belgrade",
      expertise: "Fullstack Web3 Development, NFTs, DeFi, Community Building",
      image: "/white.jpeg",
    },
    {
      name: "Awosika Israel Ayodeji",
      role: "Founder & Web3 Educator",
      company: "Web3Bridge",
      expertise: "Blockchain Education, Developer Training, Ecosystem Building",
      image: "/new_mentor.jpg",
    },
    {
      name: "Michael Lawal",
      role: "Conscious Capitalism Advocate",
      company: "Open source",
      expertise: "Tech for Good, Economic Inclusion, SDGs Advocacy",
      image: "/mentor2.jpg",
    },
    {
      name: "Kevin Jones",
      role: "Blockchain Educator",
      company: "Crypto Mastery",
      expertise: "EVM, Solidity, Smart Contract Development",
      image: "/kevin-jones.jpeg",
    },
  ];

  const ArrowAnimation = () => (
    <motion.div
      animate={{ x: [-5, 5, -5] }}
      transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
      className="mx-2 hidden sm:block"
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        className="text-blue-600 sm:w-6 sm:h-6"
      >
        <path
          d="M8 12H16M16 12L12 8M16 12L12 16"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </motion.div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-24 pt-20 sm:pt-24">
      {/* Hero Section */}
      <div className="text-center mb-12 sm:mb-16 lg:mb-20">
        <div className="relative w-full h-48 sm:h-64 md:h-72 lg:h-80 mb-8 rounded-xl overflow-hidden">
          <Image
            src="/img10.jpg"
            alt="Web3 Mates Community Event"
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
          />
        </div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6"
        >
          Accelerate Your <span className="text-blue-600">Web3 Journey</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-gray-600 max-w-3xl mx-auto text-base sm:text-lg"
        >
          Personalized 1:1 mentorship from Africa&apos;s top blockchain
          developers and builders.
        </motion.p>
      </div>

      <motion.section
        className="mb-12 sm:mb-16 bg-blue-50 rounded-xl p-6 sm:p-8 lg:p-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
            Why Choose Web3 Mates Mentorship?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              {
                icon: "👨‍💻",
                title: "Industry Practitioners",
                description: "Learn from actively building professionals",
              },
              {
                icon: "🌍",
                title: "African Context",
                description: "Relevant examples and case studies",
              },
              {
                icon: "🎯",
                title: "Career Focused",
                description: "Build job-ready skills and portfolio",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-4 sm:p-6 rounded-lg shadow-sm"
              >
                <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">
                  {item.icon}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Mentorship Tracks */}
      <section className="mb-12 sm:mb-16">
        <div className="relative w-full h-40 sm:h-48 md:h-56 lg:h-64 mb-8 rounded-xl overflow-hidden">
          <Image
            src="/img12.jpg"
            alt="Learning Tracks Community"
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
          />
        </div>
        <motion.h2
          className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Structured Learning Tracks
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {mentorshipTracks.map((track, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="p-4 sm:p-6">
                <div className="mb-3 sm:mb-4 p-3 rounded-lg bg-blue-50 flex items-center justify-center">
                  {track.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                  {track.title}
                </h3>
                <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">
                  {track.description}
                </p>
                <div className="flex flex-wrap gap-2 sm:gap-4 mb-4 sm:mb-6">
                  <span className="text-xs sm:text-sm bg-blue-50 text-blue-600 px-2 sm:px-3 py-1 rounded-full">
                    {track.duration}
                  </span>
                  <span className="text-xs sm:text-sm bg-gray-100 text-gray-600 px-2 sm:px-3 py-1 rounded-full">
                    {track.level}
                  </span>
                </div>
                <ul className="space-y-2 mb-4 sm:mb-6">
                  {track.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <svg
                        className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0"
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
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                <Link
                  href="/mentorship/apply"
                  className="w-full block text-center bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-colors text-sm sm:text-base"
                >
                  Apply Now
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mb-12 sm:mb-16">
        <motion.div
          className="text-center mb-6 sm:mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
            Meet Your Mentors
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            Learn from The World&apos;s top Web3 builders and educators
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {mentors.map((mentor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative w-full h-56 sm:h-64 md:h-72 bg-gray-100 overflow-hidden">
                <Image
                  src={mentor.image || "/placeholder.svg"}
                  alt={mentor.name}
                  fill
                  className="object-cover object-top hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">
                  {mentor.name}
                </h3>
                <p className="text-blue-600 font-medium mb-2 text-sm sm:text-base">
                  {mentor.role}
                </p>
                <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4">
                  {mentor.company}
                </p>
                <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
                  <p className="text-xs sm:text-sm font-medium text-gray-900">
                    Expertise:
                  </p>
                  <p className="text-xs sm:text-sm text-gray-600">
                    {mentor.expertise}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="mb-12 sm:mb-16 bg-gray-50 rounded-xl p-6 sm:p-8 lg:p-12">
        <motion.h2
          className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          How Our Mentorship Works
        </motion.h2>
        <div className="max-w-4xl mx-auto">
          {[
            {
              step: "1",
              title: "Application & Matching",
              description:
                "Complete our application form and we'll match you with the ideal mentor based on your goals and skill level",
            },
            {
              step: "2",
              title: "Onboarding Session",
              description:
                "Kickoff with an introductory call to align on objectives and create your learning plan",
            },
            {
              step: "3",
              title: "Weekly Sessions",
              description:
                "Regular 1:1 meetings with hands-on guidance and project reviews",
            },
            {
              step: "4",
              title: "Project Building",
              description:
                "Apply your learning by building real-world projects with mentor support",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`flex flex-col sm:flex-row ${index !== 0 ? "mt-6 sm:mt-8" : ""}`}
            >
              <div className="flex flex-row sm:flex-col items-center sm:items-center mr-0 sm:mr-6 mb-4 sm:mb-0">
                <div className="bg-blue-600 text-white w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-bold text-sm sm:text-base mr-4 sm:mr-0">
                  {item.step}
                </div>
                {index !== 3 && (
                  <div className="hidden sm:block w-px h-full bg-gray-300 my-2"></div>
                )}
              </div>
              <div className="flex-1 pb-6 sm:pb-8">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <motion.section
        className="bg-blue-600 rounded-xl p-6 sm:p-8 lg:p-12 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4">
          Ready to Accelerate Your Web3 Career?
        </h2>
        <p className="text-blue-50 max-w-2xl mx-auto mb-6 sm:mb-8 text-base sm:text-lg">
          Join our next mentorship cohort and get personalized guidance from
          industry experts.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/mentorship/apply"
            className="bg-white text-blue-600 px-4 sm:px-6 py-3 rounded-lg hover:shadow-md font-medium transition-all text-sm sm:text-base"
          >
            Apply for Mentorship
          </Link>
          <Link
            href="/mentors"
            className="bg-transparent border border-white text-white px-4 sm:px-6 py-3 rounded-lg hover:bg-white/10 font-medium transition-all text-sm sm:text-base"
          >
            Meet All Mentors
          </Link>
        </div>
      </motion.section>
    </div>
  );
};

export default MentorshipPage;
