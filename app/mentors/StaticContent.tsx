"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

interface Mentor {
  name: string;
  role: string;
  company: string;
  expertise: string;
  image: string;
  bio: string;
  track: string;
}

const MentorsPage = () => {
  const mentors: Mentor[] = [
    {
      name: "Petar Popovic",
      role: "Smart Contract Engineer && Founder @EthBelgrade",
      company: "ETH BELGRADE",
      expertise: "Solidity, Security Audits, EVM Chains",
      image: "/white.jpeg",
      bio: "Former Ethereum core contributor with 5+ years experience in smart contract development and security audits. Specializes in building secure, gas-optimized smart contracts and conducting comprehensive security audits for DeFi protocols.",
      track: "Smart Contract Development",
    },
    {
      name: "Awosika Israel Ayodeji",
      role: "Founder & Web3 Educator",
      company: "Web3Bridge",
      expertise: "Blockchain Education, Developer Training, Ecosystem Building",
      image: "/new_mentor.jpg",
      bio: "Awosika Israel Ayodeji is a passionate entrepreneur and the founder of Web3Bridge, a pioneering initiative that bridges the gap between African Web2 developers and the global Web3 ecosystem. Originally launched as 500NigeriaDevs4ETH, Web3Bridge is focused on building a sustainable Web3 economy in Africa by providing high-quality, accessible blockchain education through both remote and onsite training. The program supports developer growth, startup acceleration, and broader ecosystem development by lowering barriers to entry and building deep technical capacity across the continent. Web3Bridge runs two main programs: a 12-week remote beginner course covering HTML, CSS, and JavaScript, and an intensive 16-week in-house cohort designed to transition experienced Web2 developers into blockchain developers—often at little or no cost. To date, the program has generated over $4 million in salaries, grants, and token allocations for African developers. Alumni of the program are now working with leading protocols, holding technical and non-technical roles across the ecosystem, and even launching their own developer training initiatives to multiply impact. Beyond Web3Bridge, Ayodeji is a committed contributor to the growth of blockchain adoption across Nigeria and Africa. He believes in the power of decentralization and open infrastructure to unlock economic opportunity and drive inclusive, long-term development on the continent.",
      track: "Web3 Fundamentals, Smart Contract Development",
    },
    {
      name: "Michael Lawal",
      role: "Conscious Capitalism Advocate",
      company: "Open Source",
      expertise: "DeFi Protocols, Tokenomics, DAOs",
      image: "/mentor2.jpg",
      bio: "Pioneering tech for good initiatives and economic inclusion through blockchain technology. Advocates for sustainable development goals (SDGs) and builds solutions that bridge traditional finance with decentralized systems.",
      track: "DeFi & dApp Building",
    },
    {
      name: "Crypto Mastery",
      role: "Blockchain Educator",
      company: "The Graph",
      expertise: "Onboarding, Technical Writing, Community Building",
      image: "/kevin-jones.jpeg",
      bio: "Longtime contributor to the Ethereum ecosystem and founder of Crypto Mastery. Co-founded BuidlGuidl and has onboarded 1000+ developers to Web3 through immersive programs and curriculum development. Passionate about making blockchain education accessible to everyone.",
      track: "Web3 Fundamentals, Solidity and smart contract development",
    },
  ];

  const [filters, setFilters] = useState({
    track: "",
    search: "",
  });

  const [expandedBios, setExpandedBios] = useState<{ [key: number]: boolean }>(
    {}
  );

  const [selectedMentor, setSelectedMentor] = useState<Mentor | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredMentors = mentors.filter((mentor) => {
    return (
      (filters.track === "" || mentor.track === filters.track) &&
      (filters.search === "" ||
        mentor.name.toLowerCase().includes(filters.search.toLowerCase()) ||
        mentor.expertise.toLowerCase().includes(filters.search.toLowerCase()))
    );
  });



  const toggleBioExpansion = (index: number) => {
    setExpandedBios((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const openModal = (mentor: Mentor) => {
    setSelectedMentor(mentor);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMentor(null);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">

      <div className="text-center mb-12">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6"
        >
          Meet Our <span className="text-blue-600">Web3 Mentors</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-gray-600 max-w-3xl mx-auto text-lg"
        >
          Learn directly from Africa&apos;s top blockchain builders,
          researchers, and educators in our free community.
        </motion.p>
      </div>


      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-12"
      >
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label
              htmlFor="search"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Search Mentors
            </label>
            <input
              type="text"
              id="search"
              name="search"
              value={filters.search}
              onChange={handleFilterChange}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              placeholder="Name or expertise"
            />
          </div>

          <div>
            <label
              htmlFor="track"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Track
            </label>
            <select
              id="track"
              name="track"
              value={filters.track}
              onChange={handleFilterChange}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
            >
              <option value="">All Tracks</option>
              <option value="Web3 Fundamentals">Web3 Fundamentals</option>
              <option value="Smart Contract Development">
                Smart Contract Development
              </option>
              <option value="DeFi & dApp Building">DeFi & dApp Building</option>
              <option value="Advanced Topics">Advanced Topics</option>
            </select>
          </div>

          <div className="flex items-end">
            <button
              onClick={() =>
                setFilters({
                  track: "",
                  search: "",
                })
              }
              className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-lg transition-colors"
            >
              Clear Filters
            </button>
          </div>
        </div> */}
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredMentors.map((mentor, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="relative flex items-center justify-center w-full py-4">
              <div className="relative w-56 h-56">
                <Image
                  src={mentor.image}
                  alt={mentor.name}
                  fill
                  className="object-cover object-center rounded-full border-4 border-white shadow-md"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 rounded-b-xl">
                <h3 className="text-xl font-bold text-white">{mentor.name}</h3>
                <p className="text-blue-300 font-medium">{mentor.role}</p>
              </div>
            </div>

            <div className="p-6">
              <div className="mb-4">
                <p className="text-sm text-gray-600">{mentor.company}</p>
              </div>

              <div className="mb-4">
                <h4 className="text-sm font-medium text-gray-900 mb-1">
                  Expertise:
                </h4>
                <p className="text-sm text-gray-600">{mentor.expertise}</p>
              </div>

              <div className="mb-4">
                <h4 className="text-sm font-medium text-gray-900 mb-1">
                  Track:
                </h4>
                <span className="inline-block bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs">
                  {mentor.track}
                </span>
              </div>

              <div className="mb-6">
                <p className="text-sm text-gray-600">
                  {expandedBios[index]
                    ? mentor.bio
                    : mentor.bio.length > 120
                      ? `${mentor.bio.substring(0, 120)}...`
                      : mentor.bio}
                </p>
                {mentor.bio.length > 120 && (
                  <button
                    onClick={() => toggleBioExpansion(index)}
                    className="text-blue-600 hover:text-blue-800 text-sm font-medium mt-2"
                  >
                    {expandedBios[index] ? "Read Less" : "Read More"}
                  </button>
                )}
              </div>

              <div className="flex space-x-3">
                <button
                  onClick={() => openModal(mentor)}
                  className="flex-1 text-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors text-sm"
                >
                  View Profile
                </button>
                <Link
                  href="/mentorship/apply"
                  className="flex-1 text-center bg-white border border-blue-600 text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-lg font-medium transition-colors text-sm"
                >
                  Apply Now
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {filteredMentors.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-16"
        >
          <div className="mx-auto w-24 h-24 text-gray-300 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-1">
            No mentors found
          </h3>
          <p className="text-gray-500 max-w-md mx-auto">
            Try adjusting your filters or check back later as we onboard new
            mentors regularly.
          </p>
          <button
            onClick={() =>
              setFilters({
                track: "",
                search: "",
              })
            }
            className="mt-4 text-blue-600 hover:text-blue-800 font-medium"
          >
            Clear all filters
          </button>
        </motion.div>
      )}

      {/* Mentor Profile Modal */}
      {isModalOpen && selectedMentor && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="relative">
              <div className="relative h-80 w-full">
                <Image
                  src={selectedMentor.image}
                  alt={selectedMentor.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <h2 className="text-2xl font-bold text-white">
                    {selectedMentor.name}
                  </h2>
                  <p className="text-blue-300 font-medium text-lg">
                    {selectedMentor.role}
                  </p>
                  <p className="text-gray-300">{selectedMentor.company}</p>
                </div>
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-70 transition-all"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <div className="p-6">
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    About
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {selectedMentor.bio}
                  </p>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Expertise
                  </h3>
                  <p className="text-gray-600">{selectedMentor.expertise}</p>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Track
                  </h3>
                  <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {selectedMentor.track}
                  </span>
                </div>

                <div className="flex space-x-4">
                  <Link
                    href="/mentorship/apply"
                    className="flex-1 text-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                  >
                    Apply for Mentorship
                  </Link>
                  <button
                    onClick={closeModal}
                    className="flex-1 text-center bg-gray-100 hover:bg-gray-200 text-gray-800 px-6 py-3 rounded-lg font-medium transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      <motion.section
        className="mt-16 bg-blue-600 rounded-xl p-8 sm:p-12 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
          Want to Become a Mentor?
        </h2>
        <p className="text-blue-50 max-w-2xl mx-auto mb-8 text-lg">
          Join our network of expert mentors and help shape the next generation
          of Web3 builders in Africa.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/mentors/apply"
            className="bg-white text-blue-600 px-6 py-3 rounded-lg hover:shadow-md font-medium transition-all"
          >
            Apply to Mentor
          </Link>
          <Link
            href="/mentorship"
            className="bg-transparent border border-white text-white px-6 py-3 rounded-lg hover:bg-white/10 font-medium transition-all"
          >
            Learn About Mentorship
          </Link>
        </div>
      </motion.section>
    </div>
  );
};

export default MentorsPage;
