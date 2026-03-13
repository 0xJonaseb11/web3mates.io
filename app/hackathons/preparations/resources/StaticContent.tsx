"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";
import { 
  FaBook, 
  FaVideo, 
  FaCode, 
  FaUniversity, 
  FaYoutube, 
  FaGithub, 
  FaDiscord,
  FaExternalLinkAlt,
  FaFilter,
  FaSearch,
  FaEthereum,
  FaShieldAlt,
  FaCoins,
  FaPalette,
  FaRocket
} from "react-icons/fa";

export default function ResourcesPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { id: "all", name: "All Resources", icon: FaBook, count: 0 },
    { id: "beginner", name: "Beginner Friendly", icon: FaUniversity, count: 0 },
    { id: "tutorials", name: "Video Tutorials", icon: FaVideo, count: 0 },
    { id: "docs", name: "Documentation", icon: FaCode, count: 0 },
    { id: "tools", name: "Development Tools", icon: FaGithub, count: 0 },
    { id: "security", name: "Security", icon: FaShieldAlt, count: 0 },
    { id: "defi", name: "DeFi, dApps & NFTs", icon: FaCoins, count: 0 },
  ];

  const resources = [
    // Beginner Resources
    {
      id: 1,
      title: "Ethereum.org Learn Portal",
      description: "Official Ethereum learning portal with interactive tutorials and beginner guides",
      url: "https://ethereum.org/en/learn/",
      category: "beginner",
      icon: FaEthereum,
      level: "Beginner",
      type: "Interactive Tutorials",
      featured: true
    },
    {
      id: 2,
      title: "CryptoZombies - Learn Solidity",
      description: "Interactive code school that teaches you to write smart contracts through building your own crypto-collectibles game",
      url: "https://cryptozombies.io/",
      category: "beginner",
      icon: FaCode,
      level: "Beginner",
      type: "Interactive Course"
    },
    {
      id: 3,
      title: "Web3 University - Free Courses",
      description: "Comprehensive collection of free Web3 courses, tutorials, and coding challenges",
      url: "https://www.web3.university/",
      category: "beginner",
      icon: FaUniversity,
      level: "Beginner",
      type: "Course Platform"
    },

    // Video Tutorials
    {
      id: 4,
      title: "Ethereum Developer Course - FreeCodeCamp",
      description: "16-hour comprehensive Ethereum development course covering everything from basics to advanced concepts",
      url: "https://youtu.be/gyMwXuJrbJQ",
      category: "tutorials",
      icon: FaYoutube,
      level: "All Levels",
      type: "Video Course",
      featured: true
    },
    {
      id: 5,
      title: "Smart Contract Programming - DApp University",
      description: "YouTube channel with practical Web3 development tutorials and project walkthroughs",
      url: "https://www.youtube.com/c/DappUniversity",
      category: "tutorials",
      icon: FaYoutube,
      level: "Intermediate",
      type: "Video Tutorials"
    },
    {
      id: 6,
      title: "Patrick Collins - Web3 Tutorials",
      description: "In-depth Web3 development tutorials covering Solidity, Hardhat, and full-stack dApp development",
      url: "https://www.youtube.com/c/PatrickCollins",
      category: "tutorials",
      icon: FaYoutube,
      level: "All Levels",
      type: "Video Tutorials"
    },

    // Documentation
    {
      id: 7,
      title: "Solidity Documentation",
      description: "Official Solidity programming language documentation with examples and best practices",
      url: "https://docs.soliditylang.org/",
      category: "docs",
      icon: FaCode,
      level: "Intermediate",
      type: "Official Docs"
    },
    {
      id: 8,
      title: "Hardhat Documentation",
      description: "Complete guide to Hardhat - Ethereum development environment for professionals",
      url: "https://hardhat.org/docs",
      category: "docs",
      icon: FaCode,
      level: "Intermediate",
      type: "Framework Docs"
    },
    {
      id: 9,
      title: "Ethers.js Documentation",
      description: "Complete library for interacting with the Ethereum Blockchain and its ecosystem",
      url: "https://docs.ethers.org/",
      category: "docs",
      icon: FaCode,
      level: "Intermediate",
      type: "Library Docs"
    },

    // Development Tools
    {
      id: 10,
      title: "Remix IDE",
      description: "Browser-based IDE for Solidity smart contract development, testing, and deployment",
      url: "https://remix.ethereum.org/",
      category: "tools",
      icon: FaGithub,
      level: "All Levels",
      type: "Development Tool",
      featured: true
    },
    {
      id: 11,
      title: "OpenZeppelin Contracts",
      description: "Library of secure, community-vetted smart contract components for Ethereum",
      url: "https://docs.openzeppelin.com/contracts/",
      category: "tools",
      icon: FaShieldAlt,
      level: "Intermediate",
      type: "Smart Contract Library"
    },
    {
      id: 12,
      title: "ThirdWeb SDK",
      description: "Complete Web3 development framework for building and deploying dApps quickly",
      url: "https://thirdweb.com/",
      category: "tools",
      icon: FaCode,
      level: "All Levels",
      type: "Development Framework"
    },

    // Security
    {
      id: 13,
      title: "Smart Contract Security Best Practices",
      description: "Comprehensive guide to writing secure smart contracts with common vulnerabilities and prevention",
      url: "https://consensys.github.io/smart-contract-best-practices/",
      category: "security",
      icon: FaShieldAlt,
      level: "Advanced",
      type: "Security Guide",
      featured: true
    },
    {
      id: 14,
      title: "Slither - Static Analysis Tool",
      description: "Solidity static analysis framework for finding vulnerabilities and code improvements",
      url: "https://github.com/crytic/slither",
      category: "security",
      icon: FaGithub,
      level: "Advanced",
      type: "Security Tool"
    },

    // DeFi & NFTs
    {
      id: 15,
      title: "DeFi Developer Roadmap",
      description: "Complete learning path for becoming a DeFi protocol developer with project ideas",
      url: "https://github.com/OffcierCia/DeFi-Developer-Road-Map",
      category: "defi",
      icon: FaCoins,
      level: "Intermediate",
      type: "Learning Path"
    },
    {
      id: 16,
      title: "Ethereum Dapp Development made easy",
      description: "Everything you need to build dApps on Ethereum. Ethereum dapp Monorepo ScaffoldETH",
      url: "https://scaffoldeth.io//",
      category: "defi",
      icon: FaPalette,
      level: "Intermediate",
      type: "Technical Guide"
    },
  ];

  // Calculate category counts
  categories.forEach(cat => {
    if (cat.id === "all") {
      cat.count = resources.length;
    } else {
      cat.count = resources.filter(resource => resource.category === cat.id).length;
    }
  });

  const filteredResources = resources.filter(resource => {
    const matchesCategory = activeCategory === "all" || resource.category === activeCategory;
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredResources = resources.filter(resource => resource.featured);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
        ease: "easeOut"
      }
    }
  } as const;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full mb-6"
          >
            <FaBook className="w-5 h-5" />
            <span className="font-semibold">LEARNING HUB</span>
          </motion.div>

          <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6">
            Web3 <span className="text-blue-600">Learning Resources</span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Everything you need to start your Web3 journey. From beginner tutorials to advanced development tools, 
            we&apos;ve curated the best resources to help you build the future of decentralized applications.
          </p>

          <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-2xl p-6 max-w-4xl mx-auto">
            <p className="text-yellow-800 text-lg font-medium">
              💡 <strong>Pro Tip:</strong> Don&apos;t forget to check out the resources shared in our past workshops! 
              Many include exclusive content and project templates you won&apos;t find elsewhere.
            </p>
          </div>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="max-w-2xl mx-auto mb-12"
        >
          <div className="relative">
            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search resources... (e.g., 'Solidity', 'Smart Contracts', 'DeFi')"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white/80 backdrop-blur-sm border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 placeholder-gray-500 text-lg"
            />
          </div>
        </motion.div>

        {/* Featured Resources */}
        {activeCategory === "all" && searchQuery === "" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm">
                Featured
              </span>
              Must-Have Resources
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredResources.map((resource) => (
                <motion.div
                  key={resource.id}
                  variants={itemVariants}
                  className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-6 text-white shadow-2xl hover:shadow-3xl transition-all duration-300 group"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <resource.icon className="w-8 h-8" />
                    <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium">
                      {resource.type}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 group-hover:text-yellow-300 transition-colors">
                    {resource.title}
                  </h3>
                  
                  <p className="text-blue-100 mb-4 leading-relaxed">
                    {resource.description}
                  </p>
                  
                  <a
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg font-medium transition-colors group"
                  >
                    Explore Resource
                    <FaExternalLinkAlt className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Categories & Resources Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Categories Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="lg:col-span-1"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-6 sticky top-24">
              <div className="flex items-center gap-2 mb-6">
                <FaFilter className="w-5 h-5 text-blue-600" />
                <h3 className="text-lg font-bold text-gray-900">Categories</h3>
              </div>
              
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`w-full flex items-center justify-between p-3 rounded-xl transition-all duration-300 ${
                      activeCategory === category.id
                        ? "bg-blue-500 text-white shadow-lg"
                        : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <category.icon className="w-4 h-4" />
                      <span className="font-medium">{category.name}</span>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      activeCategory === category.id
                        ? "bg-white/20 text-white"
                        : "bg-gray-300 text-gray-700"
                    }`}>
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>

              {/* Quick Links */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h4 className="font-bold text-gray-900 mb-4">Quick Links</h4>
                <div className="space-y-3">
                  <a
                    href="https://discord.gg/qzECSsvuxu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 bg-gray-100 hover:bg-gray-200 rounded-xl transition-colors group"
                  >
                    <FaDiscord className="w-5 h-5 text-[#5865F2]" />
                    <span className="font-medium text-gray-700">Join Discord Help</span>
                  </a>
                  <Link
                    href="/workshops"
                    className="flex items-center gap-3 p-3 bg-gray-100 hover:bg-gray-200 rounded-xl transition-colors group"
                  >
                    <FaVideo className="w-5 h-5 text-red-500" />
                    <span className="font-medium text-gray-700">Past Workshops</span>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Resources Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-3"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredResources.map((resource) => (
                <motion.div
                  key={resource.id}
                  variants={itemVariants}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-6 hover:shadow-2xl transition-all duration-300 group"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                        <resource.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-medium">
                          {resource.level}
                        </span>
                      </div>
                    </div>
                    <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs font-medium">
                      {resource.type}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {resource.title}
                  </h3>

                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {resource.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <a
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-medium transition-colors group/link"
                    >
                      Access Resource
                      <FaExternalLinkAlt className="w-3 h-3 group-hover/link:translate-x-1 transition-transform" />
                    </a>
                    
                    {resource.featured && (
                      <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-medium">
                        Featured
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Empty State */}
            {filteredResources.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaSearch className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  No resources found
                </h3>
                <p className="text-gray-600 max-w-md mx-auto">
                  Try adjusting your search terms or select a different category to find what you&apos;re looking for.
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white shadow-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Ready to Start Building?
            </h2>
            <p className="text-blue-100 text-lg mb-6 max-w-2xl mx-auto">
              Join our community of Web3 builders and get real-time help, feedback, and collaboration opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://discord.gg/qzECSsvuxu"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-blue-600 px-8 py-3 rounded-xl font-bold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
              >
                <FaDiscord className="w-5 h-5" />
                Join Discord Community
              </a>
              <Link
                href="/hackathons/register?"
                className="bg-yellow-400 text-blue-900 px-8 py-3 rounded-xl font-bold hover:bg-yellow-300 transition-colors flex items-center justify-center gap-2"
              >
                <FaRocket className="w-5 h-5" />
                Register for Hackathon
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}