"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import {
  FaShieldAlt,
  FaUser,
  FaDatabase,
  FaCookie,
  FaRocket,
  FaEye,
} from "react-icons/fa";

export default function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const sections = [
    { id: "introduction", title: "Introduction" },
    { id: "information-collection", title: "Information We Collect" },
    { id: "how-we-use", title: "How We Use Information" },
    { id: "data-sharing", title: "Data Sharing" },
    { id: "data-security", title: "Data Security" },
    { id: "user-rights", title: "Your Rights" },
    { id: "cookies", title: "Cookies & Tracking" },
    { id: "third-party", title: "Third-Party Services" },
    { id: "international", title: "International Transfers" },
    { id: "changes", title: "Policy Changes" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50 pt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-2xl border border-purple-200 shadow-lg mb-6">
            <FaShieldAlt className="w-6 h-6 text-purple-600" />
            <span className="text-sm font-semibold text-gray-700">
              PRIVACY & DATA PROTECTION
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Privacy <span className="text-purple-600">Policy</span>
          </h1>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Last updated:{" "}
            {new Date().toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-1"
          >
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 sticky top-24">
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <FaEye className="w-4 h-4 text-purple-500" />
                Contents
              </h3>
              <nav className="space-y-2">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-all duration-200 ${
                      activeSection === section.id
                        ? "bg-purple-50 text-purple-700 border border-purple-200"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                    }`}
                  >
                    {section.title}
                  </button>
                ))}
              </nav>

              <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-start gap-2">
                  <FaShieldAlt className="w-4 h-4 text-green-600 mt-0.5" />
                  <p className="text-sm text-green-800">
                    We are committed to protecting your privacy and being
                    transparent about our data practices.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-3"
          >
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
              <div className="prose prose-lg max-w-none">
                {/* Introduction */}
                <section id="introduction" className="scroll-mt-24">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                      <span className="text-purple-600 font-semibold">1</span>
                    </div>
                    Introduction
                  </h2>
                  <div className="space-y-4 text-gray-600">
                    <p>
                      At Web3Mates.com, we are committed to protecting your
                      privacy and being transparent about how we handle your
                      personal information. This Privacy Policy explains how we
                      collect, use, disclose, and safeguard your information
                      when you use our platform.
                    </p>
                    <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                      <p className="text-purple-800 text-sm">
                        <strong>Web3 Context:</strong> As a Web3 platform, we
                        prioritize decentralization principles while maintaining
                        responsible data practices.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Information We Collect */}
                <section
                  id="information-collection"
                  className="scroll-mt-24 mt-12"
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                      <span className="text-blue-600 font-semibold">2</span>
                    </div>
                    Information We Collect
                  </h2>
                  <div className="space-y-6 text-gray-600">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                        <FaUser className="w-4 h-4 text-blue-500" />
                        Personal Information
                      </h3>
                      <ul className="space-y-2 ml-6">
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>
                            Contact details (name, email, phone number)
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>
                            Professional information (university, skills,
                            experience)
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>
                            Event participation data and project submissions
                          </span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                        <FaDatabase className="w-4 h-4 text-green-500" />
                        Technical Information
                      </h3>
                      <ul className="space-y-2 ml-6">
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>
                            IP address, browser type, and device information
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>
                            Usage data and platform interaction metrics
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>
                            Blockchain wallet addresses (when voluntarily
                            provided)
                          </span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                      <p className="text-yellow-800 text-sm">
                        <strong>Note:</strong> We do not require or store
                        private keys, seed phrases, or other sensitive
                        blockchain credentials.
                      </p>
                    </div>
                  </div>
                </section>

                {/* How We Use Information */}
                <section id="how-we-use" className="scroll-mt-24 mt-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                      <span className="text-green-600 font-semibold">3</span>
                    </div>
                    How We Use Information
                  </h2>
                  <div className="space-y-4 text-gray-600">
                    <p>We use your information for the following purposes:</p>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <FaRocket className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>
                          <strong>Service Delivery:</strong> To provide and
                          maintain our platform, hackathons, and educational
                          services
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <FaUser className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>
                          <strong>Communication:</strong> To send updates about
                          events, workshops, and community activities
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <FaDatabase className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>
                          <strong>Improvement:</strong> To analyze usage
                          patterns and enhance user experience
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <FaShieldAlt className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>
                          <strong>Security:</strong> To protect against fraud
                          and maintain platform integrity
                        </span>
                      </li>
                    </ul>
                  </div>
                </section>

                {/* Data Sharing */}
                <section id="data-sharing" className="scroll-mt-24 mt-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                      <span className="text-orange-600 font-semibold">4</span>
                    </div>
                    Data Sharing
                  </h2>
                  <div className="space-y-4 text-gray-600">
                    <p>
                      We may share your information in the following
                      circumstances:
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>
                          <strong>Service Providers:</strong> With trusted
                          partners who help us operate our platform (e.g., cloud
                          hosting, email services)
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>
                          <strong>Event Partners:</strong> With hackathon
                          sponsors and partners for event coordination
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>
                          <strong>Legal Requirements:</strong> When required by
                          law or to protect our rights
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>
                          <strong>Business Transfers:</strong> In connection
                          with mergers, acquisitions, or asset sales
                        </span>
                      </li>
                    </ul>
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                      <p className="text-blue-800 text-sm">
                        <strong>Transparency:</strong> We require all third
                        parties to respect your privacy and handle your
                        information in accordance with applicable laws.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Data Security */}
                <section id="data-security" className="scroll-mt-24 mt-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                      <span className="text-red-600 font-semibold">5</span>
                    </div>
                    Data Security
                  </h2>
                  <div className="space-y-4 text-gray-600">
                    <p>
                      We implement appropriate technical and organizational
                      measures to protect your personal information:
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>
                          Encryption of sensitive data in transit and at rest
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>
                          Regular security assessments and vulnerability testing
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>
                          Access controls and authentication mechanisms
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>
                          Employee training on data protection practices
                        </span>
                      </li>
                    </ul>
                  </div>
                </section>

                {/* Your Rights */}
                <section id="user-rights" className="scroll-mt-24 mt-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center">
                      <span className="text-indigo-600 font-semibold">6</span>
                    </div>
                    Your Rights
                  </h2>
                  <div className="space-y-4 text-gray-600">
                    <p>
                      Depending on your location, you may have the following
                      rights regarding your personal information:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-200">
                        <h4 className="font-semibold text-indigo-900 mb-2">
                          Access & Correction
                        </h4>
                        <p className="text-indigo-800 text-sm">
                          Right to access and update your personal information
                        </p>
                      </div>
                      <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-200">
                        <h4 className="font-semibold text-indigo-900 mb-2">
                          Deletion
                        </h4>
                        <p className="text-indigo-800 text-sm">
                          Right to request deletion of your personal data
                        </p>
                      </div>
                      <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-200">
                        <h4 className="font-semibold text-indigo-900 mb-2">
                          Objection
                        </h4>
                        <p className="text-indigo-800 text-sm">
                          Right to object to certain processing activities
                        </p>
                      </div>
                      <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-200">
                        <h4 className="font-semibold text-indigo-900 mb-2">
                          Portability
                        </h4>
                        <p className="text-indigo-800 text-sm">
                          Right to receive your data in a portable format
                        </p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-500">
                      To exercise these rights, please contact us at{" "}
                      <Link
                        href="mailto:privacy@web3mates.com"
                        className="text-indigo-600 hover:text-indigo-700"
                      >
                        privacy@web3mates.com
                      </Link>
                      .
                    </p>
                  </div>
                </section>

                {/* Cookies */}
                <section id="cookies" className="scroll-mt-24 mt-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <div className="w-8 h-8 bg-pink-100 rounded-lg flex items-center justify-center">
                      <span className="text-pink-600 font-semibold">7</span>
                    </div>
                    Cookies & Tracking
                  </h2>
                  <div className="space-y-4 text-gray-600">
                    <p>We use cookies and similar technologies to:</p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-3">
                        <FaCookie className="w-4 h-4 text-pink-500 mt-0.5 flex-shrink-0" />
                        <span>Remember your preferences and settings</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <FaCookie className="w-4 h-4 text-pink-500 mt-0.5 flex-shrink-0" />
                        <span>
                          Analyze how users interact with our platform
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <FaCookie className="w-4 h-4 text-pink-500 mt-0.5 flex-shrink-0" />
                        <span>
                          Provide personalized content and recommendations
                        </span>
                      </li>
                    </ul>
                    <div className="bg-pink-50 p-4 rounded-lg border border-pink-200">
                      <p className="text-pink-800 text-sm">
                        You can control cookie settings through your browser.
                        However, disabling cookies may affect some platform
                        features.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Contact & Questions */}
                <div className="mt-12 p-6 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl text-white">
                  <h3 className="text-xl font-bold mb-3">Privacy Questions?</h3>
                  <p className="mb-4 opacity-90">
                    If you have any questions about this Privacy Policy or our
                    data practices, please contact our Data Protection Officer:
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href="mailto:privacy@web3mates.com"
                      className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg hover:bg-white/30 transition-colors"
                    >
                      ✉️ privacy@web3mates.com
                    </Link>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg hover:bg-white/30 transition-colors"
                    >
                      🛡️ Data Request Form
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
