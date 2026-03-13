"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import {
  FaShieldAlt,
  FaUser,
  FaCode,
  FaBalanceScale,
  FaExclamationTriangle,
  FaGlobe,
} from "react-icons/fa";

export default function TermsAndConditions() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const sections = [
    { id: "acceptance", title: "Acceptance of Terms" },
    { id: "services", title: "Services Description" },
    { id: "eligibility", title: "Eligibility" },
    { id: "user-responsibilities", title: "User Responsibilities" },
    { id: "intellectual-property", title: "Intellectual Property" },
    { id: "blockchain-risks", title: "Blockchain & Web3 Risks" },
    { id: "limitation-liability", title: "Limitation of Liability" },
    { id: "termination", title: "Termination" },
    { id: "governing-law", title: "Governing Law" },
    { id: "changes", title: "Changes to Terms" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 pt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-2xl border border-blue-200 shadow-lg mb-6">
            <FaBalanceScale className="w-6 h-6 text-blue-600" />
            <span className="text-sm font-semibold text-gray-700">
              LEGAL DOCUMENTS
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Terms & <span className="text-blue-600">Conditions</span>
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
                <FaShieldAlt className="w-4 h-4 text-blue-500" />
                Contents
              </h3>
              <nav className="space-y-2">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-all duration-200 ${
                      activeSection === section.id
                        ? "bg-blue-50 text-blue-700 border border-blue-200"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                    }`}
                  >
                    {section.title}
                  </button>
                ))}
              </nav>

              <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                <div className="flex items-start gap-2">
                  <FaExclamationTriangle className="w-4 h-4 text-yellow-600 mt-0.5" />
                  <p className="text-sm text-yellow-800">
                    Please read these terms carefully before using our services.
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
              {/* Introduction */}
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-gray-600 mb-8">
                  Welcome to Web3Mates.com ("we," "our," or "us"). These Terms
                  and Conditions govern your use of our platform, services, and
                  participation in our events, including hackathons, workshops,
                  and community activities.
                </p>

                {/* Acceptance of Terms */}
                <section id="acceptance" className="scroll-mt-24">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                      <span className="text-blue-600 font-semibold">1</span>
                    </div>
                    Acceptance of Terms
                  </h2>
                  <div className="space-y-4 text-gray-600">
                    <p>
                      By accessing or using Web3Mates.com, you acknowledge that
                      you have read, understood, and agree to be bound by these
                      Terms and Conditions. If you disagree with any part of
                      these terms, you may not access our services.
                    </p>
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                      <p className="text-blue-800 text-sm">
                        <strong>Note:</strong> These terms include important
                        provisions about blockchain technology risks,
                        intellectual property rights, and limitation of
                        liability.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Services Description */}
                <section id="services" className="scroll-mt-24 mt-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                      <span className="text-green-600 font-semibold">2</span>
                    </div>
                    Services Description
                  </h2>
                  <div className="space-y-4 text-gray-600">
                    <p>
                      Web3Mates provides a platform for Web3 education,
                      community building, and innovation through:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>
                          Organizing hackathons and coding competitions
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>
                          Providing educational resources and workshops
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>
                          Facilitating community discussions and networking
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>
                          Connecting developers with opportunities in the Web3
                          space
                        </span>
                      </li>
                    </ul>
                  </div>
                </section>

                {/* Eligibility */}
                <section id="eligibility" className="scroll-mt-24 mt-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                      <span className="text-purple-600 font-semibold">3</span>
                    </div>
                    Eligibility
                  </h2>
                  <div className="space-y-4 text-gray-600">
                    <p>To use our services, you must:</p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-3">
                        <FaUser className="w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0" />
                        <span>
                          Be at least 18 years old, or have parental consent if
                          between 13-17 years old
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <FaGlobe className="w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0" />
                        <span>
                          Reside in a jurisdiction where our services are
                          legally permitted
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <FaCode className="w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0" />
                        <span>
                          Have the technical capability to participate in Web3
                          activities
                        </span>
                      </li>
                    </ul>
                    <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                      <p className="text-red-800 text-sm">
                        <strong>Restricted Locations:</strong> Some services may
                        not be available in certain jurisdictions due to legal
                        restrictions. Users are responsible for compliance with
                        local laws.
                      </p>
                    </div>
                  </div>
                </section>

                {/* User Responsibilities */}
                <section
                  id="user-responsibilities"
                  className="scroll-mt-24 mt-12"
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                      <span className="text-orange-600 font-semibold">4</span>
                    </div>
                    User Responsibilities
                  </h2>
                  <div className="space-y-4 text-gray-600">
                    <p>As a user of Web3Mates, you agree to:</p>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>
                          Provide accurate and complete registration information
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>
                          Maintain the security of your account credentials
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>
                          Use our services in compliance with all applicable
                          laws
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>
                          Respect other community members and maintain
                          professional conduct
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>
                          Not engage in malicious activities, hacking, or
                          disruption of services
                        </span>
                      </li>
                    </ul>
                  </div>
                </section>

                {/* Intellectual Property */}
                <section
                  id="intellectual-property"
                  className="scroll-mt-24 mt-12"
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center">
                      <span className="text-indigo-600 font-semibold">5</span>
                    </div>
                    Intellectual Property
                  </h2>
                  <div className="space-y-4 text-gray-600">
                    <p>
                      <strong>Platform Content:</strong> All content on
                      Web3Mates.com, including text, graphics, logos, and
                      software, is our property or licensed to us.
                    </p>
                    <p>
                      <strong>User Content:</strong> You retain ownership of
                      projects, code, and content you create during hackathons
                      and events.
                    </p>
                    <p>
                      <strong>License Grant:</strong> By submitting content to
                      our platform, you grant us a worldwide, non-exclusive
                      license to display, distribute, and promote your content
                      in connection with our services.
                    </p>
                    <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-200">
                      <p className="text-indigo-800 text-sm">
                        <strong>Hackathon Projects:</strong> Participants retain
                        IP rights to their hackathon projects. We may request
                        permission to showcase winning projects.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Blockchain & Web3 Risks */}
                <section id="blockchain-risks" className="scroll-mt-24 mt-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                      <span className="text-red-600 font-semibold">6</span>
                    </div>
                    Blockchain & Web3 Risks
                  </h2>
                  <div className="space-y-4 text-gray-600">
                    <p>
                      Participation in Web3 activities involves inherent risks:
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>
                          <strong>Technical Risks:</strong> Smart contract
                          vulnerabilities, network congestion, and protocol
                          changes
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>
                          <strong>Market Risks:</strong> Cryptocurrency
                          volatility and economic factors
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>
                          <strong>Regulatory Risks:</strong> Changing legal
                          landscapes across jurisdictions
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>
                          <strong>Security Risks:</strong> Private key
                          management and wallet security
                        </span>
                      </li>
                    </ul>
                    <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                      <p className="text-yellow-800 text-sm">
                        <strong>Important:</strong> Web3Mates provides
                        educational resources but does not constitute financial,
                        legal, or investment advice. Always conduct your own
                        research.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Limitation of Liability */}
                <section
                  id="limitation-liability"
                  className="scroll-mt-24 mt-12"
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                      <span className="text-gray-600 font-semibold">7</span>
                    </div>
                    Limitation of Liability
                  </h2>
                  <div className="space-y-4 text-gray-600">
                    <p>
                      To the fullest extent permitted by law, Web3Mates shall
                      not be liable for:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-gray-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>
                          Any indirect, incidental, or consequential damages
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-gray-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>
                          Loss of data, profits, or business opportunities
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-gray-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>
                          Damages arising from third-party services or
                          blockchain networks
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-gray-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>
                          User errors in managing cryptocurrencies or digital
                          assets
                        </span>
                      </li>
                    </ul>
                  </div>
                </section>

                {/* Contact Information */}
                <div className="mt-12 p-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl text-white">
                  <h3 className="text-xl font-bold mb-3">
                    Questions About These Terms?
                  </h3>
                  <p className="mb-4 opacity-90">
                    If you have any questions about these Terms and Conditions,
                    please contact us:
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href="mailto:legal@web3mates.com"
                      className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg hover:bg-white/30 transition-colors"
                    >
                      ✉️ legal@web3mates.com
                    </Link>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg hover:bg-white/30 transition-colors"
                    >
                      💬 Contact Form
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
