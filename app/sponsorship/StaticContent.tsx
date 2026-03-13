"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  FaUser,
  FaBuilding,
  FaEnvelope,
  FaRegLightbulb,
  FaHandshake,
  FaUsers,
  FaRocket,
  FaChartLine,
  FaGlobe,
  FaMedal,
  FaShieldAlt,
  FaMicrophone,
  FaClock,
} from "react-icons/fa";
import { MdCelebration, MdWorkspaces } from "react-icons/md";

const steps = [
  "Sponsor Details",
  "Motivation",
  "Sponsorship Type",
  "Additional Info",
  "Review & Submit",
];

const upcomingHackathons = [
  {
    id: "eth-rwanda-hackathon-2026",
    title: "ETH Rwanda Hackathon 2026",
    date: "May 2026",
    prize: "$3,000+",
    participants: "500+ Expected",
    status: "Coming Soon",
  },
];

const sponsorshipTiers = [
  {
    name: "Platinum Sponsor",
    investment: "$3,000+",
    description: "Premier visibility and maximum impact",
    color: "from-yellow-400 to-orange-500",
    textColor: "text-white",
    icon: FaMedal,
    benefits: [
      "Main Stage Branding",
      "15-min Keynote Speaking Slot",
      "Premium Recruitment Booth",
      "Featured in All Marketing Materials",
      "10+ Social Media Features",
      "2 Email Newsletter Features",
      "Prime Logo Placement",
      "Dedicated Mentorship Sessions",
      "Full Participant Database Access",
      "5 VIP Event Passes",
    ],
  },
  {
    name: "Gold Sponsor",
    investment: "$2,000+",
    description: "High visibility and engagement",
    color: "from-yellow-300 to-yellow-500",
    textColor: "text-gray-900",
    icon: FaShieldAlt,
    benefits: [
      "Workshop Hosting Rights",
      "Technical Mentorship Sessions",
      "High Brand Visibility",
      "Dedicated Networking Session",
      "6 Social Media Features",
      "1 Email Newsletter Feature",
      "Secondary Logo Placement",
      "Shared Mentorship Sessions",
      "Opt-in Participant Data",
      "3 VIP Event Passes",
    ],
  },
  {
    name: "Silver Sponsor",
    investment: "$1,000+",
    description: "Strong brand presence",
    color: "from-gray-300 to-gray-400",
    textColor: "text-gray-900",
    icon: FaMicrophone,
    benefits: [
      "Developer Tools Showcase",
      "1 Technical Workshop Session",
      "Medium Brand Recognition",
      "Community Engagement Opportunities",
      "3 Social Media Features",
      "Logo in Newsletter",
      "Tertiary Logo Placement",
      "Shared Mentorship Access",
      "Limited Participant Data",
      "2 VIP Event Passes",
    ],
  },
  {
    name: "Community Partner",
    investment: "In-kind / Strategic",
    description: "Ecosystem support and collaboration",
    color: "from-blue-400 to-blue-600",
    textColor: "text-white",
    icon: FaHandshake,
    benefits: [
      "Community Outreach Programs",
      "Local Ecosystem Support",
      "Co-branded Content Creation",
      "2 Social Media Features",
      "Partner Section Logo Placement",
      "Networking Opportunities",
      "Optional Mentorship Sessions",
      "2 General Event Passes",
    ],
  },
];

// Define all benefits for comparison table
const allBenefits = [
  {
    name: "Main Stage Branding",
    description: "Primary branding on main stage and event materials",
  },
  {
    name: "Keynote Speaking Slot",
    description: "Opportunity to deliver keynote presentation",
  },
  {
    name: "Recruitment Booth",
    description: "Space for recruitment and networking",
  },
  {
    name: "Marketing Features",
    description: "Inclusion in marketing campaigns",
  },
  {
    name: "Social Media Features",
    description: "Number of dedicated social media posts",
  },
  {
    name: "Email Newsletter",
    description: "Features in email newsletters",
  },
  {
    name: "Logo Placement",
    description: "Visibility of company logo",
  },
  {
    name: "Mentorship Sessions",
    description: "Access to participants for mentorship",
  },
  {
    name: "Participant Data Access",
    description: "Access to participant information",
  },
  {
    name: "Event Passes",
    description: "Number of VIP or general passes",
  },
  {
    name: "Workshop Hosting",
    description: "Ability to host workshops",
  },
  {
    name: "Networking Sessions",
    description: "Dedicated networking opportunities",
  },
  {
    name: "Community Engagement",
    description: "Direct community interaction",
  },
];

// Define which benefits each tier gets
const tierBenefits: Record<string, Record<string, string>> = {
  "Platinum Sponsor": {
    "Main Stage Branding": "Prime placement",
    "Keynote Speaking Slot": "15-minute slot",
    "Recruitment Booth": "Premium location",
    "Marketing Features": "All materials",
    "Social Media Features": "10+ posts",
    "Email Newsletter": "2 features",
    "Logo Placement": "Prime locations",
    "Mentorship Sessions": "Dedicated sessions",
    "Participant Data Access": "Full database",
    "Event Passes": "5 VIP passes",
    "Workshop Hosting": "Priority rights",
    "Networking Sessions": "Dedicated session",
    "Community Engagement": "Full access",
  },
  "Gold Sponsor": {
    "Main Stage Branding": "Secondary placement",
    "Keynote Speaking Slot": "Panel participation",
    "Recruitment Booth": "Standard location",
    "Marketing Features": "Select materials",
    "Social Media Features": "6 posts",
    "Email Newsletter": "1 feature",
    "Logo Placement": "Secondary locations",
    "Mentorship Sessions": "Shared sessions",
    "Participant Data Access": "Opt-in only",
    "Event Passes": "3 VIP passes",
    "Workshop Hosting": "Available",
    "Networking Sessions": "Dedicated session",
    "Community Engagement": "High access",
  },
  "Silver Sponsor": {
    "Main Stage Branding": "Not included",
    "Keynote Speaking Slot": "Not included",
    "Recruitment Booth": "Not included",
    "Marketing Features": "Limited materials",
    "Social Media Features": "3 posts",
    "Email Newsletter": "Logo only",
    "Logo Placement": "Tertiary locations",
    "Mentorship Sessions": "Shared access",
    "Participant Data Access": "Limited data",
    "Event Passes": "2 VIP passes",
    "Workshop Hosting": "1 session",
    "Networking Sessions": "General access",
    "Community Engagement": "Medium access",
  },
  "Community Partner": {
    "Main Stage Branding": "Not included",
    "Keynote Speaking Slot": "Not included",
    "Recruitment Booth": "Not included",
    "Marketing Features": "Co-branded only",
    "Social Media Features": "2 posts",
    "Email Newsletter": "Not included",
    "Logo Placement": "Partner section",
    "Mentorship Sessions": "Optional",
    "Participant Data Access": "Not included",
    "Event Passes": "2 general passes",
    "Workshop Hosting": "Not included",
    "Networking Sessions": "General access",
    "Community Engagement": "Full access",
  },
};

const eventStats = [
  { metric: "500+", description: "Expected Participants", icon: FaUsers },
  { metric: "100+", description: "Industry Mentors", icon: FaRocket },
  { metric: "15+", description: "African Countries", icon: FaGlobe },
  { metric: "48", description: "Hours of Innovation", icon: FaClock },
  { metric: "$3,000+", description: "Prize Pool", icon: FaChartLine },
  { metric: "50+", description: "Projects Expected", icon: MdWorkspaces },
];

export default function SponsorshipPage() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    motivation: "",
    type: [] as string[],
    additional: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [touched, setTouched] = useState({
    name: false,
    company: false,
    email: false,
    motivation: false,
    type: false,
  });

  const sponsorshipTypes = [
    "Community Events",
    "Hackathons",
    "Workshops",
    "Mentorship Programs",
    "Other",
  ];

  const nameCompanyPattern = /^[A-Za-z .,'-]{2,}$/;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const isSponsorDetailsValid =
    nameCompanyPattern.test(form.name.trim()) &&
    nameCompanyPattern.test(form.company.trim()) &&
    emailPattern.test(form.email.trim());
  const isMotivationValid = form.motivation.trim().length >= 10;
  const isTypeValid = form.type.length > 0;

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value } = e.target;
    const type = "type" in e.target ? (e.target as HTMLInputElement).type : undefined;
    
    if (e.target instanceof HTMLTextAreaElement) {
      const target = e.target as HTMLTextAreaElement;
      target.style.height = "auto";
      target.style.height = `${target.scrollHeight}px`;
    }

    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setForm((prev) => ({
        ...prev,
        type: checked
          ? [...prev.type, value]
          : prev.type.filter((t: string) => t !== value),
      }));
      setTouched((prev) => ({ ...prev, type: true }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  }

  function handleBlur(e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setTouched((prev) => ({ ...prev, [e.target.name]: true }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setSuccess(true);
    } catch (err: unknown) {
      console.error("Form submission error:", err);
      setError(
        "There was a problem submitting your sponsorship inquiry. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  }

  function next() {
    if (step === 0 && !isSponsorDetailsValid) {
      setTouched({
        name: true,
        company: true,
        email: true,
        motivation: true,
        type: true,
      });
      return;
    }
    if (step === 1 && !isMotivationValid) return;
    if (step === 2 && !isTypeValid) return;
    setStep((s) => Math.min(s + 1, steps.length - 1));
  }

  function prev() {
    setStep((s) => Math.max(s - 1, 0));
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="relative py-16 md:py-20 bg-gradient-to-br from-blue-600 to-purple-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6">
              Partner With <span className="text-yellow-300">Web3Mates</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-blue-100 mb-6 md:mb-8 max-w-4xl mx-auto px-4">
              Join us in building Africa&apos;s Web3 future. Sponsor the next
              generation of blockchain innovators and position your brand at the
              forefront of digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4">
              <button
                onClick={() => {
                  const el = document.getElementById("sponsorship-form");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="bg-yellow-400 text-blue-900 px-6 md:px-8 py-3 md:py-4 rounded-xl font-bold text-base md:text-lg hover:bg-yellow-300 transition-all duration-300 shadow-2xl hover:shadow-yellow-500/25"
              >
                Become a Sponsor
              </button>
              <button
                onClick={() => {
                  const el = document.getElementById("sponsorship-tiers");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="border-2 border-white text-white px-6 md:px-8 py-3 md:py-4 rounded-xl font-bold text-base md:text-lg hover:bg-white/10 transition-all duration-300"
              >
                View Opportunities
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Impact in Numbers
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Join a community that&apos;s making real impact across Africa&apos;s Web3
              ecosystem
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 lg:gap-8">
            {eventStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-2 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="text-white text-lg md:text-xl lg:text-2xl" />
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900">
                  {stat.metric}
                </div>
                <div className="text-xs md:text-sm text-gray-600 mt-1">
                  {stat.description}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsorship Tiers */}
      <section id="sponsorship-tiers" className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Sponsorship Opportunities
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Choose the partnership level that aligns with your goals and
              budget. Every sponsorship makes a meaningful impact.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12 md:mb-16">
            {sponsorshipTiers.map((tier, index) => {
              const IconComponent = tier.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl md:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                >
                  <div
                    className={`bg-gradient-to-r ${tier.color} ${tier.textColor} p-6 md:p-8 text-center relative overflow-hidden`}
                  >
                    <div className="absolute inset-0 bg-black/10"></div>
                    <div className="relative">
                      <IconComponent className="text-3xl md:text-4xl mx-auto mb-3 md:mb-4" />
                      <h3 className="text-lg md:text-xl font-bold mb-2">
                        {tier.name}
                      </h3>
                      <div className="text-xl md:text-2xl font-bold mb-2">
                        {tier.investment}
                      </div>
                      <p className="text-xs md:text-sm opacity-90">
                        {tier.description}
                      </p>
                    </div>
                  </div>
                  <div className="p-4 md:p-6">
                    <ul className="space-y-2 md:space-y-3">
                      {tier.benefits.map((benefit, benefitIndex) => (
                        <li
                          key={benefitIndex}
                          className="flex items-start text-xs md:text-sm text-gray-600"
                        >
                          <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-green-500 rounded-full mr-2 md:mr-3 mt-1.5 md:mt-2 flex-shrink-0"></span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                    <button
                      onClick={() => {
                        const el = document.getElementById("sponsorship-form");
                        if (el) el.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="w-full mt-4 md:mt-6 bg-blue-600 text-white py-2 md:py-3 rounded-lg md:rounded-xl font-semibold hover:bg-blue-700 transition-colors duration-300 text-sm md:text-base"
                    >
                      Choose {tier.name.split(" ")[0]}
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Benefits Comparison Table */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl md:rounded-2xl shadow-lg md:shadow-xl p-4 md:p-6 lg:p-8"
          >
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 md:mb-8 text-center">
              Detailed Benefits Comparison
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[800px]">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-3 md:py-4 font-semibold text-gray-900 text-sm md:text-base">
                      Benefit
                    </th>
                    {sponsorshipTiers.map((tier, index) => (
                      <th
                        key={index}
                        className="text-center py-3 md:py-4 font-semibold text-gray-900 text-sm md:text-base px-2"
                      >
                        {tier.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {allBenefits.map((benefit, benefitIndex) => (
                    <tr
                      key={benefitIndex}
                      className="border-b border-gray-100 hover:bg-gray-50"
                    >
                      <td className="py-3 md:py-4 font-medium text-gray-700 text-sm md:text-base">
                        <div>
                          <div className="font-semibold">{benefit.name}</div>
                          <div className="text-xs text-gray-500 mt-1">
                            {benefit.description}
                          </div>
                        </div>
                      </td>
                      {sponsorshipTiers.map((tier, tierIndex) => {
                        const tierBenefit =
                          tierBenefits[tier.name]?.[benefit.name];
                        return (
                          <td
                            key={tierIndex}
                            className="text-center py-3 md:py-4 px-2"
                          >
                            {tierBenefit && tierBenefit !== "Not included" ? (
                              <div className="flex flex-col items-center">
                                <span className="text-green-600 font-semibold text-lg">
                                  ✓
                                </span>
                                <span className="text-xs text-gray-600 mt-1 max-w-[120px] mx-auto">
                                  {tierBenefit}
                                </span>
                              </div>
                            ) : (
                              <div className="flex flex-col items-center">
                                <span className="text-red-500 font-semibold text-lg">
                                  ✕
                                </span>
                                <span className="text-xs text-gray-400 mt-1">
                                  Not included
                                </span>
                              </div>
                            )}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4 text-xs text-gray-500 text-center">
              Scroll horizontally to view all benefits on mobile devices
            </div>
          </motion.div>
        </div>
      </section>

      {/* Activities Links Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Explore Our Activities
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Discover how we&apos;re building Africa&apos;s Web3 community through
              various initiatives
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
            {/* Hackathons Link */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="group"
            >
              <Link href="/hackathons">
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl md:rounded-2xl p-6 md:p-8 text-white text-center h-full hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl">
                  <div className="bg-white/20 w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <FaRocket className="text-xl md:text-2xl" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">
                    Hackathons
                  </h3>
                  <p className="text-blue-100 mb-4 md:mb-6 text-sm md:text-base">
                    Join our innovation sprints where developers build
                    groundbreaking Web3 solutions
                  </p>
                  <div className="inline-flex items-center bg-white text-blue-600 px-4 md:px-6 py-2 rounded-lg md:rounded-xl font-semibold hover:bg-gray-100 transition-colors text-sm md:text-base">
                    View All Hackathons
                    <svg
                      className="w-3 h-3 md:w-4 md:h-4 ml-2"
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
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Events Link */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="group"
            >
              <Link href="/events">
                <div className="bg-gradient-to-br from-green-500 to-blue-600 rounded-xl md:rounded-2xl p-6 md:p-8 text-white text-center h-full hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl">
                  <div className="bg-white/20 w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <FaUsers className="text-xl md:text-2xl" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">
                    Community Events
                  </h3>
                  <p className="text-blue-100 mb-4 md:mb-6 text-sm md:text-base">
                    Explore our workshops, meetups, and networking events across
                    Africa
                  </p>
                  <div className="inline-flex items-center bg-white text-green-600 px-4 md:px-6 py-2 rounded-lg md:rounded-xl font-semibold hover:bg-gray-100 transition-colors text-sm md:text-base">
                    View All Events
                    <svg
                      className="w-3 h-3 md:w-4 md:h-4 ml-2"
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
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>

          {/* Upcoming Hackathons Preview */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 md:mt-16"
          >
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 md:mb-8 gap-4">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                Upcoming Hackathons
              </h3>
              <Link
                href="/hackathons"
                className="text-blue-600 hover:text-blue-700 font-semibold text-sm md:text-base"
              >
                View All Hackathons →
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {upcomingHackathons.map((hackathon, index) => (
                <motion.div
                  key={hackathon.id}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl md:rounded-2xl p-6 md:p-8 text-white relative overflow-hidden group hover:scale-105 transition-transform duration-300"
                >
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="relative">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2">
                      <h4 className="text-xl md:text-2xl font-bold">
                        {hackathon.title}
                      </h4>
                      <span className="bg-yellow-400 text-blue-900 px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-semibold whitespace-nowrap">
                        {hackathon.status}
                      </span>
                    </div>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm md:text-base">
                        <FaClock className="mr-2 md:mr-3 opacity-80 text-sm md:text-base" />
                        <span>{hackathon.date}</span>
                      </div>
                      <div className="flex items-center text-sm md:text-base">
                        <FaMedal className="mr-2 md:mr-3 opacity-80 text-sm md:text-base" />
                        <span>Prize Pool: {hackathon.prize}</span>
                      </div>
                      <div className="flex items-center text-sm md:text-base">
                        <FaUsers className="mr-2 md:mr-3 opacity-80 text-sm md:text-base" />
                        <span>{hackathon.participants}</span>
                      </div>
                    </div>
                    <Link
                      href={`/hackathons/${hackathon.id}`}
                      className="inline-flex items-center bg-white text-blue-600 px-4 md:px-6 py-2 rounded-lg md:rounded-xl font-semibold hover:bg-gray-100 transition-colors text-sm md:text-base"
                    >
                      Learn More
                      <svg
                        className="w-3 h-3 md:w-4 md:h-4 ml-2"
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
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sponsorship Form */}
      <section id="sponsorship-form" className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ready to back the future? Let&apos;s talk.
            </h2>
            <p className="text-lg md:text-xl text-gray-600 px-4">
              Fill out the form below and our team will get back to you within
              24 hours
            </p>
          </motion.div>

          {/* Glassmorphism Form Card */}
          <motion.div
            className="w-full rounded-2xl md:rounded-3xl shadow-xl md:shadow-2xl border border-blue-100 bg-white/70 backdrop-blur-lg px-4 sm:px-6 md:px-10 py-8 md:py-10 sm:py-14"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-center mb-2">
              <FaHandshake className="text-[#0066FF] text-4xl md:text-5xl drop-shadow-lg bg-white/70 rounded-full p-2 border border-blue-100" />
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center mb-2 text-[#0B1C39] tracking-tight">
              Become a <span className="text-blue-700">Sponsor</span>
            </h1>
            <p className="text-center text-gray-600 mb-6 md:mb-8 text-base md:text-lg max-w-2xl mx-auto">
              Support the Web3 Mates community and help us grow!
            </p>

            {/* Stepper */}
            <div className="flex items-center justify-center mb-8 md:mb-10 gap-1 sm:gap-2 md:gap-4 overflow-x-auto pb-2">
              {steps.map((label, i) => (
                <div key={label} className="flex items-center flex-shrink-0">
                  <motion.div
                    className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center font-bold text-white text-sm md:text-lg shadow-md border-2 transition-all duration-300 ${
                      i === step
                        ? "bg-gradient-to-br from-[#0066FF] to-[#0047CC] border-blue-400 scale-110"
                        : i < step
                          ? "bg-green-400 border-green-300"
                          : "bg-gray-300 border-gray-200"
                    }`}
                    animate={i === step ? { scale: 1.15 } : { scale: 1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {i + 1}
                  </motion.div>
                  {i < steps.length - 1 && (
                    <div
                      className={`w-4 sm:w-6 md:w-8 lg:w-12 h-1 ${
                        i < step ? "bg-green-400" : "bg-gray-200"
                      } rounded-full mx-1 sm:mx-2 transition-all duration-300`}
                    ></div>
                  )}
                </div>
              ))}
            </div>

            {/* Form */}
            <AnimatePresence mode="wait">
              {success ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center flex flex-col items-center justify-center min-h-[200px] md:min-h-[300px]"
                >
                  <MdCelebration className="text-green-500 text-4xl md:text-6xl mb-3 md:mb-4 animate-bounce" />
                  <h2 className="text-xl md:text-2xl font-bold text-green-600 mb-2">
                    Thank you!
                  </h2>
                  <p className="mb-2 text-gray-600 text-sm md:text-base">
                    Your sponsorship inquiry has been received.
                    <br />
                    We&apos;ll be in touch within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSuccess(false);
                      setStep(0);
                      setForm({
                        name: "",
                        company: "",
                        email: "",
                        motivation: "",
                        type: [],
                        additional: "",
                      });
                    }}
                    className="mt-3 md:mt-4 bg-blue-600 text-white px-4 md:px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm md:text-base"
                  >
                    Submit Another Inquiry
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  onSubmit={handleSubmit}
                  className="max-w-2xl mx-auto space-y-4 md:space-y-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {step === 0 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6"
                    >
                      <div className="relative">
                        <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-300 text-base md:text-lg pointer-events-none" />
                        <input
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          required
                          className={`w-full pl-10 pr-3 py-2 md:py-3 border rounded-lg bg-white/80 focus:outline-none focus:border-[#0066FF] text-black text-sm md:text-base ${
                            touched.name &&
                            !nameCompanyPattern.test(form.name.trim())
                              ? "border-red-500"
                              : ""
                          }`}
                          placeholder="Full Name"
                        />
                        {touched.name &&
                          !nameCompanyPattern.test(form.name.trim()) && (
                            <div className="text-red-500 text-xs mt-1">
                              Enter a valid name (letters, spaces, min 2 chars).
                            </div>
                          )}
                      </div>
                      <div className="relative">
                        <FaBuilding className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-300 text-base md:text-lg pointer-events-none" />
                        <input
                          name="company"
                          value={form.company}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          required
                          className={`w-full pl-10 pr-3 py-2 md:py-3 border rounded-lg bg-white/80 focus:outline-none focus:border-[#0066FF] text-black text-sm md:text-base ${
                            touched.company &&
                            !nameCompanyPattern.test(form.company.trim())
                              ? "border-red-500"
                              : ""
                          }`}
                          placeholder="Company/Organization"
                        />
                        {touched.company &&
                          !nameCompanyPattern.test(form.company.trim()) && (
                            <div className="text-red-500 text-xs mt-1">
                              Enter a valid company name (letters, spaces, min 2
                              chars).
                            </div>
                          )}
                      </div>
                      <div className="relative col-span-1 sm:col-span-2">
                        <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-300 text-base md:text-lg pointer-events-none" />
                        <input
                          name="email"
                          type="email"
                          value={form.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          required
                          className={`w-full pl-10 pr-3 py-2 md:py-3 border rounded-lg bg-white/80 focus:outline-none focus:border-[#0066FF] text-black text-sm md:text-base ${
                            touched.email &&
                            !emailPattern.test(form.email.trim())
                              ? "border-red-500"
                              : ""
                          }`}
                          placeholder="Email Address"
                        />
                        {touched.email &&
                          !emailPattern.test(form.email.trim()) && (
                            <div className="text-red-500 text-xs mt-1">
                              Enter a valid email address.
                            </div>
                          )}
                      </div>
                    </motion.div>
                  )}

                  {step === 1 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="relative"
                    >
                      <FaRegLightbulb className="absolute left-3 top-4 text-blue-300 text-base md:text-lg pointer-events-none" />
                      <textarea
                        name="motivation"
                        value={form.motivation}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                        rows={4}
                        className={`w-full pl-10 pr-3 py-2 md:py-3 border rounded-lg bg-white/80 focus:outline-none focus:border-[#0066FF] text-black text-sm md:text-base ${
                          touched.motivation &&
                          form.motivation.trim().length < 10
                            ? "border-red-500"
                            : ""
                        }`}
                        placeholder={form.type.includes("Individual") ? "I'm ready to support!" : "We're ready to partner!"}
                      />
                      {touched.motivation &&
                        form.motivation.trim().length < 10 && (
                          <div className="text-red-500 text-xs mt-1">
                            Please provide at least 10 characters.
                          </div>
                        )}
                    </motion.div>
                  )}

                  {step === 2 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      <label className="block mb-2 font-medium text-[#0B1C39] text-sm md:text-base">
                        What would you like to sponsor?
                      </label>
                      <div className="flex flex-wrap gap-2 md:gap-3 mb-4">
                        {sponsorshipTypes.map((type) => (
                          <label
                            key={type}
                            className={`flex items-center gap-2 px-3 py-1 md:px-4 md:py-2 rounded-full border cursor-pointer transition-all duration-200 text-xs md:text-sm ${
                              form.type.includes(type)
                                ? "bg-gradient-to-r from-[#0066FF] to-[#0047CC] text-white border-blue-400 shadow"
                                : "bg-white/80 border-gray-300 text-[#0B1C39] hover:border-blue-300"
                            }`}
                          >
                            <input
                              type="checkbox"
                              name="type"
                              value={type}
                              checked={form.type.includes(type)}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              className="accent-[#0066FF] hidden"
                            />
                            {type}
                          </label>
                        ))}
                      </div>
                      {touched.type && form.type.length === 0 && (
                        <div className="text-red-500 text-xs mb-2">
                          At least one sponsorship type is required.
                        </div>
                      )}
                    </motion.div>
                  )}

                  {step === 3 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="relative"
                    >
                      <textarea
                        name="additional"
                        value={form.additional}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        rows={3}
                        className="w-full pl-4 pr-3 py-2 md:py-3 border rounded-lg bg-white/80 focus:outline-none focus:border-[#0066FF] text-black text-sm md:text-base"
                        placeholder="Any additional information? (optional)"
                      />
                    </motion.div>
                  )}

                  {step === 4 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      <h3 className="font-bold mb-2 text-slate-600 text-sm md:text-base">
                        Review your submission:
                      </h3>
                      <ul className="mb-4 text-xs md:text-sm space-y-1 md:space-y-2">
                        <li className="text-slate-500">
                          <b>Name:</b> {form.name}
                        </li>
                        <li className="text-slate-500">
                          <b>Company:</b> {form.company}
                        </li>
                        <li className="text-slate-500">
                          <b>Email:</b> {form.email}
                        </li>
                        <li className="text-slate-500">
                          <b>Motivation:</b> {form.motivation}
                        </li>
                        <li className="text-slate-500">
                          <b>Sponsorship Type:</b> {form.type.join(", ")}
                        </li>
                        <li className="text-slate-500">
                          <b>Additional Info:</b> {form.additional || "None"}
                        </li>
                      </ul>
                    </motion.div>
                  )}

                  {error && (
                    <div className="text-red-600 mb-4 text-sm md:text-base">
                      {error}
                    </div>
                  )}

                  <div className="flex justify-between mt-6 md:mt-8 gap-3 md:gap-4">
                    {step > 0 && (
                      <button
                        type="button"
                        onClick={prev}
                        className="px-4 md:px-6 py-2 md:py-3 rounded-full bg-slate-400 hover:bg-gray-300 font-medium shadow text-sm md:text-base"
                      >
                        Back
                      </button>
                    )}
                    {step < steps.length - 1 && (
                      <button
                        type="button"
                        onClick={next}
                        className="ml-auto px-6 md:px-8 py-2 md:py-3 rounded-full bg-gradient-to-r from-[#0066FF] to-[#0047CC] text-white font-semibold shadow hover:scale-105 hover:shadow-lg transition-all duration-200 disabled:opacity-60 text-sm md:text-base"
                        disabled={
                          (step === 0 && !isSponsorDetailsValid) ||
                          (step === 1 && !isMotivationValid) ||
                          (step === 2 && !isTypeValid)
                        }
                      >
                        Next
                      </button>
                    )}
                    {step === steps.length - 1 && (
                      <button
                        type="submit"
                        disabled={submitting}
                        className="ml-auto px-6 md:px-8 py-2 md:py-3 rounded-full bg-blue-700 text-white font-semibold shadow hover:bg-blue-500 transition-all duration-200 disabled:opacity-60 flex items-center gap-2 text-sm md:text-base"
                      >
                        {submitting && (
                          <span className="animate-spin h-4 w-4 md:h-5 md:w-5 border-2 border-white border-t-transparent rounded-full"></span>
                        )}
                        {submitting ? "Submitting..." : "Submit"}
                      </button>
                    )}
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
