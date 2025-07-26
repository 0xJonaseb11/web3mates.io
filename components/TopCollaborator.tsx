"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const TopCollaborator = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
            Featured Partner
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0B1C39] mb-4">
            Our <span className="text-[#0066FF]">Top Collaborator</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-base sm:text-lg">
            Meet Genesys - the premier Web3 education platform that's revolutionizing how developers learn and build in the blockchain space.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Left Side - Genesys Info */}
          <motion.div
            className="space-y-6 sm:space-y-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center">
                <span className="text-white text-2xl font-bold">G</span>
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#0B1C39]">Genesys</h3>
                <p className="text-gray-600">One-Stop Web3 Education Platform</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-[#0B1C39] mb-1">Comprehensive Web3 Training</h4>
                  <p className="text-gray-600 text-sm">From blockchain fundamentals to advanced DeFi protocols, Genesys provides complete education pathways for Web3 builders.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-[#0B1C39] mb-1">Hands-On Learning Experience</h4>
                  <p className="text-gray-600 text-sm">Interactive tutorials, real-world projects, and mentorship programs that accelerate skill development.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-[#0B1C39] mb-1">Community-Driven Growth</h4>
                  <p className="text-gray-600 text-sm">Building a global network of Web3 developers through collaborative learning and shared resources.</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="https://www.genesysapp.xyz/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0066FF] text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium text-center"
              >
                Visit Genesys
              </Link>
              <Link
                href="#contact"
                className="border border-[#0066FF] text-[#0066FF] px-6 py-3 rounded-lg hover:bg-[#0066FF] hover:text-white transition-colors font-medium text-center"
              >
                Partner With Us
              </Link>
            </div>
          </motion.div>

          {/* Right Side - Embedded Genesys */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
              <div className="p-4 bg-gradient-to-r from-purple-500 to-blue-600">
                <h4 className="text-white font-semibold text-center">Experience Genesys Platform</h4>
              </div>
              <div className="relative h-96 sm:h-[500px]">
                <iframe
                  src="https://www.genesysapp.xyz/"
                  className="w-full h-full border-0"
                  title="Genesys Web3 Education Platform"
                  loading="lazy"
                />
              </div>
              <div className="p-4 bg-gray-50 border-t">
                <p className="text-sm text-gray-600 text-center">
                  Explore the Genesys platform to see how we're revolutionizing Web3 education
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Partnership Stats */}
        <motion.div
          className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-200">
            <div className="text-2xl sm:text-3xl font-bold text-[#0066FF] mb-2">1000+</div>
            <div className="text-gray-600 text-sm">Developers Trained</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-200">
            <div className="text-2xl sm:text-3xl font-bold text-[#0066FF] mb-2">20+</div>
            <div className="text-gray-600 text-sm">Countries Reached</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-200">
            <div className="text-2xl sm:text-3xl font-bold text-[#0066FF] mb-2">95%</div>
            <div className="text-gray-600 text-sm">Success Rate</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TopCollaborator; 