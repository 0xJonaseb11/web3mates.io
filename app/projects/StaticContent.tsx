"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const featuredProjects = [
  {
    id: 1,
    title: "StoneProof Labs",
    description:
      "We are building a trusted and transparent mineral traceability system that empowers the mining industry and secures its future",
    tags: ["E-commerce", "NFT", "DeFi", "RWA"],
    status: "Live",
    logo: "/stone_logo.svg",
    link: "/projects/1",
    team: [
      { name: "Jonas Sebera", role: "Founder & CEO" },
      { name: "Jonas S.", role: "Blockchain Developer" },
      { name: "Ashraf Tuyubahe", role: "Backend Developer" },
      { name: "Aimable Kwizera", role: "Frontend Developer" },
      { name: "Laurent N.", role: "UI / UX Developer" },
    ],
    tech: ["Solidity", "Next.js", "IPFS"],
  },
  {
    id: 2,
    title: "MedRecordChain",
    description:
      "We are building a trusted and transparent medical record system that empowers the medical industry and secures its future",
    tags: ["Medical services", "social good", "DeFi"],
    status: "Live",
    logo: "/medrecordchain.jpeg",
    link: "/projects/2",
    team: [
      { name: "Byiringiro Olivier", role: "Founder & CEO" },
      { name: "Byiringiro O.", role: "Blockchain Developer" },
      { name: "Gilbert M.", role: "UX Designer" },
      { name: "Musabe Kelvin Shebelle", role: "Frontend Developer" },
    ],
    tech: ["Solidity", "Next.js", "IPFS"],
  }
];

const upcomingProjects = [
  {
    id: 4,
    title: "YallaDeFi",
    description:
      "Arabic-language DeFi education platform with gamified learning",
    tags: ["Education", "DeFi", "Gamification"],
    status: "Prototype",
    logo: "https://avatars.dicebear.com/api/identicon/yalladefi.svg",
    link: "/projects/4",
    team: [
      { name: "Karim B.", role: "Founder" },
      { name: "Leila M.", role: "Content Lead" },
    ],
    tech: ["React", "Firebase", "Web3.js"],
  },
  {
    id: 5,
    title: "SAFUFund",
    description: "Decentralized emergency fund for African creators",
    tags: ["Social Impact", "Crowdfunding", "DAOs"],
    status: "Ideation",
    logo: "https://avatars.dicebear.com/api/identicon/safufund.svg",
    link: "/projects/5",
    team: [
      { name: "Wanjiru K.", role: "Community Lead" },
      { name: "Olumide B.", role: "Developer" },
    ],
    tech: ["Solidity", "Hardhat", "React"],
  },
];

const projectCategories = [
  "All Projects",
  "DeFi",
  "NFT",
  "DAOs",
  "Payments",
  "Education",
  "Social Impact",
];

const ProjectsPage = () => {
  const [activeFilter, setActiveFilter] = useState("All Projects");
  const allProjects = [...featuredProjects, ...upcomingProjects];

  const filteredProjects = allProjects.filter((project) => {
    if (activeFilter === "All Projects") return true;
    return project.tags.includes(activeFilter);
  });

  const filteredFeatured = filteredProjects.filter((project) =>
    featuredProjects.some((fp) => fp.id === project.id)
  );
  const filteredUpcoming = filteredProjects.filter((project) =>
    upcomingProjects.some((up) => up.id === project.id)
  );

  return (
    <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-24 pt-20 sm:pt-24">
      {/* Hero Section */}
      <div className="relative w-full h-56 sm:h-72 mb-8 rounded-xl overflow-hidden">
        <Image src="/img1.jpg" alt="Web3 Community Projects" fill className="object-cover" />
      </div>
      <div className="text-center mb-12 sm:mb-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6"
        >
          Web3 <span className="text-blue-600">Projects</span> from Africa
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-gray-600 max-w-3xl mx-auto text-base sm:text-lg"
        >
          Discover and contribute to innovative blockchain projects built by our
          community
        </motion.p>
      </div>

      <motion.div
        className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        {projectCategories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveFilter(category)}
            className={`px-3 sm:px-4 py-2 rounded-full font-medium text-xs sm:text-sm transition-colors ${
              activeFilter === category
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {category}
          </button>
        ))}
      </motion.div>

      {/* Featured Projects Section */}
      {filteredFeatured.length > 0 && (
        <section className="mb-12 sm:mb-16">
          <motion.h2
            className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-6 sm:mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Featured Projects
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {filteredFeatured.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative h-40 sm:h-48 w-full bg-gray-100">
                  <Image
                    src={project.logo || '/img2.jpg'}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-white/90 backdrop-blur px-2 sm:px-3 py-1 rounded-full text-xs font-medium">
                    {project.status}
                  </div>
                </div>

                <div className="p-4 sm:p-6">
                  <div className="flex justify-between items-start mb-3 sm:mb-4">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                      {project.title}
                    </h3>
                    <span className="bg-blue-50 text-blue-600 px-2 sm:px-3 py-1 rounded-full text-xs font-medium">
                      Featured
                    </span>
                  </div>

                  <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1 sm:gap-2 mb-4 sm:mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-gray-100 text-gray-700 px-2 sm:px-3 py-1 rounded-full text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
                    <div>
                      <h4 className="text-xs sm:text-sm font-medium text-gray-500 mb-2">
                        Team
                      </h4>
                      <div className="flex -space-x-1 sm:-space-x-2">
                        {project.team.slice(0, 3).map((member) => (
                          <div
                            key={member.name}
                            className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gray-300 border-2 border-white flex items-center justify-center text-xs font-medium"
                          >
                            {member.name.charAt(0)}
                          </div>
                        ))}
                        {project.team.length > 3 && (
                          <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center text-xs font-medium">
                            +{project.team.length - 3}
                          </div>
                        )}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-medium text-gray-500 mb-2">
                        Tech Stack
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {project.tech.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="bg-gray-50 text-gray-600 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.tech.length > 3 && (
                          <span className="bg-gray-50 text-gray-600 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded text-xs">
                            +{project.tech.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <Link
                    href={project.link}
                    className="w-full block text-center bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-colors text-sm sm:text-base"
                  >
                    View Project
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* Upcoming Projects Section */}
      {filteredUpcoming.length > 0 && (
        <section className="mb-12 sm:mb-16">
          <motion.h2
            className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-6 sm:mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Upcoming Projects
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {filteredUpcoming.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative h-32 sm:h-40 w-full bg-gray-100">
                  <Image
                    src={project.logo || '/img3.jpg'}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 sm:p-4">
                    <h3 className="text-base sm:text-lg font-bold text-white">
                      {project.title}
                    </h3>
                  </div>
                </div>

                <div className="p-4 sm:p-6">
                  <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4">
                    {project.description}
                  </p>

                  <div className="flex justify-between items-center">
                    <div className="flex flex-wrap gap-1">
                      {project.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="bg-gray-100 text-gray-700 px-2 py-0.5 rounded-full text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 2 && (
                        <span className="bg-gray-100 text-gray-700 px-2 py-0.5 rounded-full text-xs">
                          +{project.tags.length - 2}
                        </span>
                      )}
                    </div>
                    <span
                      className={`px-2 sm:px-3 py-1 rounded-full text-xs font-medium ${
                        project.status === "Prototype"
                          ? "bg-purple-100 text-purple-800"
                          : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {filteredProjects.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-8 sm:py-12"
        >
          <h3 className="text-lg sm:text-xl font-medium text-gray-700 mb-2">
            No projects match the selected filter
          </h3>
          <p className="text-gray-500 text-sm sm:text-base">
            Try selecting a different category or check back later for new
            projects.
          </p>
        </motion.div>
      )}

      {/* Call to Action Section */}
      <motion.section
        className="bg-blue-600 rounded-xl p-6 sm:p-8 lg:p-12 text-center relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="absolute inset-0 z-0">
          <Image src="/img4.jpg" alt="Community Collaboration" fill className="object-cover opacity-30" />
        </div>
        <div className="relative z-10">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4">
            Have a Web3 Project?
          </h2>
          <p className="text-blue-50 max-w-2xl mx-auto mb-6 sm:mb-8 text-base sm:text-lg">
            Get featured on our platform and connect with developers, investors,
            and mentors in our ecosystem.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/projects/submit"
              className="bg-white text-blue-600 px-4 sm:px-6 py-3 rounded-lg hover:shadow-md font-medium transition-all text-sm sm:text-base"
            >
              Submit Your Project
            </Link>
            <Link
              href="/mentors"
              className="bg-transparent border border-white text-white px-4 sm:px-6 py-3 rounded-lg hover:bg-white/10 font-medium transition-all text-sm sm:text-base"
            >
              Find Project Mentors
            </Link>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default ProjectsPage;
