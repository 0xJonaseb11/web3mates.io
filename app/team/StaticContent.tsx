"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaXTwitter } from "react-icons/fa6";

const team = [
  {
    image: "/joab.jpeg",
    name: "Joab Niwagaba",
    role: "Founder & Visionary Leader",
    description:
      "Drives the company's mission and strategic growth, inspiring innovation and fostering a culture of excellence.",
    socials: {
      twitter: "https://x.com/niwagaba_joab?s=21",
      linkedin: "https://www.linkedin.com/in/joab-niwagaba-0905161b3",
      telegram: "https://t.me/JoabP",
    },
  },
  {
    image: "/jabo.jpeg",
    name: "Jabo Prosper",
    role: "Community Manager / Operations Lead",
    description:
      "Ensures operational efficiency and seamless execution of projects, optimizing workflows to maximize impact.",
    socials: {
      linkedin: "https://www.linkedin.com/in/jabo-pro",
    },
  },
  {
    image: "/jonas.jpeg",
    name: "Jonas Sebera",
    role: "Senior Technical Support Engineer",
    description:
      "Leads technical support and blockchain development, ensuring robust, scalable solutions and expert troubleshooting.",
    socials: {
      twitter: "https://x.com/0xJonaseb11",
      instagram: "https://instagram.com/sebe_j_az99",
      linkedin: "https://linkedin.com/in/jonassebera",
      telegram: "https://t.me/OxJonaseb11",
      github: "https://github.com/0xJonaseb11",
    },
  },
  {
    image: "/laurent.jpg",
    name: "Nyumbayire Laurent",
    role: "Developer Relations Specialist",
    description:
      "Builds and nurtures the developer community through technical guidance and ecosystem collaboration.",
    socials: {
      twitter: "https://x.com/Lau_lanez",
      instagram: "https://www.instagram.com/laulan_6/",
      linkedin: "https://www.linkedin.com/in/nyumbayire-laurent-b11251299/",
      telegram: "https://t.me/laulanez",
      github: "https://github.com/NyLaurent",
    },
  },
];

const TeamPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-24 pt-20 sm:pt-24">
      {/* Hero Section */}
      <div className="text-center mb-10 sm:mb-12 lg:mb-16">
        <motion.h1
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B1C39] mb-4 sm:mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Meet Our <span className="text-[#0066FF]">Leadership Team</span>
        </motion.h1>
        <motion.p
          className="text-gray-600 max-w-3xl mx-auto text-sm sm:text-base lg:text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          The passionate individuals driving Web3 Mates&apos; mission to empower
          Africa&apos;s blockchain revolution
        </motion.p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
        {team.map((member, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            whileHover={{ y: -5 }}
          >
            <div className="flex flex-col sm:flex-row">
              {/* Member Photo */}
              <div className="w-full sm:w-2/5 lg:w-1/3 h-72 sm:h-auto relative">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              {/* Member Info */}
              <div className="w-full sm:w-3/5 lg:w-2/3 p-4 sm:p-6 lg:p-8">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-[#0B1C39] mb-1">
                  {member.name}
                </h3>
                <p className="text-[#0066FF] mb-3 text-xs sm:text-sm lg:text-base">
                  {member.role}
                </p>
                <p className="text-gray-600 mb-4 sm:mb-6 text-xs sm:text-sm lg:text-base leading-relaxed">
                  {member.description}
                </p>

                {/* Social Links */}
                <div className="flex space-x-2 sm:space-x-3">
                  {member.socials.twitter && (
                    <Link
                      href={member.socials.twitter}
                      target="_blank"
                      className="text-gray-400 hover:text-[#0066FF] transition-colors"
                    >
                      <FaXTwitter />
                    </Link>
                  )}
                  {member.socials.instagram && (
                    <Link
                      href={member.socials.instagram}
                      target="_blank"
                      className="text-gray-400 hover:text-[#0066FF] transition-colors"
                    >
                      <InstagramIcon />
                    </Link>
                  )}
                  {member.socials.linkedin && (
                    <Link
                      href={member.socials.linkedin}
                      target="_blank"
                      className="text-gray-400 hover:text-[#0066FF] transition-colors"
                    >
                      <LinkedInIcon />
                    </Link>
                  )}
                  {member.socials.telegram && (
                    <Link
                      href={member.socials.telegram}
                      target="_blank"
                      className="text-gray-400 hover:text-[#0066FF] transition-colors"
                    >
                      <TelegramIcon />
                    </Link>
                  )}
                  {member.socials.github && (
                    <Link
                      href={member.socials.github}
                      target="_blank"
                      className="text-gray-400 hover:text-[#0066FF] transition-colors"
                    >
                      <GitHubIcon />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Call to Action */}
      <motion.div
        className="mt-12 sm:mt-16 lg:mt-20 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-[#0B1C39] mb-4">
          Want to join our team or collaborate?
        </h3>
        <Link
          href="/contact"
          className="inline-block bg-gradient-to-r from-[#0066FF] to-[#0047CC] text-white px-6 sm:px-8 py-3 rounded-full hover:shadow-lg transition-all duration-300 font-medium text-sm sm:text-base"
        >
          Get In Touch
        </Link>
      </motion.div>
    </div>
  );
};

const InstagramIcon = () => (
  <svg
    className="w-4 h-4 sm:w-5 sm:h-5"
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-label="Instagram"
  >
    {/* Instagram Camera Icon - Simple and Clean */}
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg
    className="w-4 h-4 sm:w-5 sm:h-5"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
  </svg>
);

const TelegramIcon = () => (
  <svg
    className="w-4 h-4 sm:w-5 sm:h-5"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
  </svg>
);

const GitHubIcon = () => (
  <svg
    className="w-4 h-4 sm:w-5 sm:h-5"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.38 7.86 10.91.58.1.79-.25.79-.56v-2.18c-3.2.69-3.87-1.54-3.87-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.18.08 1.8 1.21 1.8 1.21 1.04 1.79 2.72 1.28 3.38.98.1-.76.4-1.28.73-1.57-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.2-3.1-.12-.29-.52-1.45.11-3.02 0 0 .97-.31 3.18 1.18a11.01 11.01 0 0 1 5.8 0c2.2-1.49 3.18-1.18 3.18-1.18.63 1.57.23 2.73.11 3.02.75.81 1.2 1.84 1.2 3.1 0 4.43-2.7 5.41-5.26 5.7.41.35.78 1.03.78 2.08v3.09c0 .31.21.67.8.56A10.996 10.996 0 0 0 23.5 12c0-6.27-5.23-11.5-11.5-11.5z" />
  </svg>
);

export default TeamPage;
