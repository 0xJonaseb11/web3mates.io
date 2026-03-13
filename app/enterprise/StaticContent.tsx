"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useToast, ToastContainer } from "@/hooks/use-toast";

const EnterprisePage = () => {
  const url = process.env.NEXT_PUBLIC_FORMSPREE_ENTERPRISE_URL;
  const partnershipOptions = [
    {
      title: "Talent Pipeline",
      description:
        "Get first access to our top graduates trained in blockchain development, smart contracts, and Web3 technologies.",
      icon: (
        <svg className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
        </svg>
      ),
      benefits: [
        "Pre-vetted candidates",
        "Custom training tracks",
        "90-day placement guarantee",
      ],
    },
    {
      title: "Team Upskilling",
      description:
        "Transform your existing team with customized Web3 training programs tailored to your business needs.",
      icon: (
        <svg className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 14l9-5-9-5-9 5 9 5z"/>
          <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"/>
        </svg>
      ),
      benefits: [
        "Personalized curriculum",
        "Project-based learning",
        "Certification programs",
      ],
    },
    {
      title: "Strategic R&D",
      description:
        "Collaborate on blockchain solutions with our developers and researchers to solve your business challenges.",
      icon: (
        <svg className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
        </svg>
      ),
      benefits: [
        "Dedicated innovation lab",
        "Proof-of-concept development",
        "White-label solutions",
      ],
    },
  ];

  const successMetrics = [
    { value: "3-6x", label: "Faster onboarding" },
    { value: "40%", label: "Cost reduction" },
    { value: "85%+", label: "Retention rate" },
    { value: "100%", label: "Certified teams" },
  ];

  const { toast, toasts } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const form = e.currentTarget as HTMLFormElement;
    const data = new FormData(form);

    toast({
      title: "Submitting inquiry...",
      description: "Please wait while your request is being sent.",
    });

    try {
      const response = await fetch(
        url || "https://formspree.io/f/YOUR_ENTERPRISE_FORM_ID",
        {
          method: "POST",
          body: data,
          headers: {
            Accept: "application/json",
          },
        }
      );

      if (response.ok) {
        toast({
          title: "Inquiry Sent!",
          description:
            "Your enterprise inquiry has been sent successfully. We'll contact you within 24 hours.",
          variant: "success",
        });
        form.reset();
      } else {
        const result = await response.json();
        toast({
          title: "Submission Failed",
          description: result.errors
            ? result.errors
                .map((err: { message: string }) => err.message)
                .join(", ")
            : "There was an issue sending your inquiry. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again later.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <div className="text-center mb-16 lg:mb-20">
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B1C39] mb-4 sm:mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Web3 Talent <span className="text-[#0066FF]">Solutions</span> for
          Enterprises
        </motion.h1>
        <motion.p
          className="text-gray-600 max-w-3xl mx-auto text-lg sm:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Bridge the blockchain skills gap and accelerate your Web3 initiatives
          with Africa&apos;s premier developer training hub
        </motion.p>
      </div>

      <section className="mb-20">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#0B1C39] mb-8 text-center">
          Partnership Models
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {partnershipOptions.map((option, index) => (
            <motion.div
              key={index}
              className="bg-white border border-gray-100 rounded-xl p-6 sm:p-8 hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 * index }}
              whileHover={{ y: -5 }}
            >
              <div className="mb-4 p-3 rounded-lg bg-blue-50 flex items-center justify-center">
                {option.icon}
              </div>
              <h3 className="text-xl font-bold text-[#0B1C39] mb-3">
                {option.title}
              </h3>
              <p className="text-gray-600 mb-4">{option.description}</p>
              <ul className="space-y-2">
                {option.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <svg
                      className="w-5 h-5 text-[#0066FF] mt-0.5 flex-shrink-0"
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
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-r from-[#0066FF]/5 to-[#0047CC]/5 rounded-2xl p-8 sm:p-12 mb-20">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#0B1C39] mb-8 text-center">
          Proven Enterprise Impact
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
          {successMetrics.map((metric, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg p-4 sm:p-6 text-center shadow-sm"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <p className="text-3xl sm:text-4xl font-bold text-[#0066FF] mb-2">
                {metric.value}
              </p>
              <p className="text-sm sm:text-base text-gray-600">
                {metric.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mb-20">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#0B1C39] mb-8 text-center">
          Enterprise Case Studies
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* AyaHQ */}
          <motion.div
            className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer group"
            whileHover={{ y: -5, scale: 1.02 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-4">
                <Image
                  src="/AyaHQ-blue.png"
                  alt="AyaHQ"
                  width={80}
                  height={40}
                  className="h-8 object-contain"
                />
                <span className="text-sm text-gray-500">
                  Web3 Community Platform
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#0B1C39] mb-3">
                Community Growth Partner
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                &quot;Web3 Mates has been a valuable partner in growing our
                African developer community and facilitating meaningful
                connections across the continent.&quot;
              </p>
              <div className="bg-blue-50 p-3 rounded-lg mb-4">
                <p className="font-medium text-[#0B1C39] text-sm">
                  Community Growth
                </p>
                <p className="text-xs text-gray-600">
                  Expanded reach across Africa
                </p>
              </div>
              <Link
                href="#contact"
                className="inline-block bg-[#0066FF] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#0047CC] transition-colors group-hover:shadow-md"
              >
                Partner With Us
              </Link>
            </div>
          </motion.div>

          {/* Web3Bridge */}
          <motion.div
            className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer group"
            whileHover={{ y: -5, scale: 1.02 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-4">
                <Image
                  src="/web3bridge.png"
                  alt="Web3Bridge"
                  width={80}
                  height={40}
                  className="h-8 object-contain"
                />
                <span className="text-sm text-gray-500">Web3 Education</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#0B1C39] mb-3">
                Expanding Blockchain Learning
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                &quot;The mentorship and collaboration with Web3 Mates helped us
                reach more learners and deliver hands-on blockchain education in
                Africa.&quot;
              </p>
              <div className="bg-blue-50 p-3 rounded-lg mb-4">
                <p className="font-medium text-[#0B1C39] text-sm">
                  Expanded Reach
                </p>
                <p className="text-xs text-gray-600">
                  More learners across Africa
                </p>
              </div>
              <Link
                href="#contact"
                className="inline-block bg-[#0066FF] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#0047CC] transition-colors group-hover:shadow-md"
              >
                Partner With Us
              </Link>
            </div>
          </motion.div>

          {/* BuidlGuidl */}
          <motion.div
            className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer group"
            whileHover={{ y: -5, scale: 1.02 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-4">
                <Image
                  src="/logo-color.svg"
                  alt="BuidlGuidl"
                  width={80}
                  height={40}
                  className="h-8 object-contain"
                />
                <span className="text-sm text-gray-500">
                  Ethereum Builders Guild
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#0B1C39] mb-3">
                Strengthening the Builder Network
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                &quot;Web3 Mates has contributed passionate developers and fresh
                perspectives to our builder community, strengthening our
                collective impact.&quot;
              </p>
              <div className="bg-blue-50 p-3 rounded-lg mb-4">
                <p className="font-medium text-[#0B1C39] text-sm">
                  Stronger Network
                </p>
                <p className="text-xs text-gray-600">
                  Enhanced builder community
                </p>
              </div>
              <Link
                href="#contact"
                className="inline-block bg-[#0066FF] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#0047CC] transition-colors group-hover:shadow-md"
              >
                Partner With Us
              </Link>
            </div>
          </motion.div>
        </div>
        <div className="bg-blue-50 text-center py-6 px-4 sm:px-8 border-t border-gray-100 mt-8 rounded-xl">
          <p className="text-gray-700 text-sm sm:text-base">
            More case studies and partnerships coming soon as Web3 Mates grows.
            Interested in collaborating?{" "}
            <Link href="#contact" className="text-[#0066FF] underline">
              Contact us
            </Link>
            .
          </p>
        </div>
      </section>

      <section
        id="contact"
        className="bg-white  text-slate-400 rounded-2xl p-8 sm:p-12 shadow-sm border border-gray-100"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-[#0B1C39] mb-2 text-center">
          Start Your Web3 Transformation
        </h2>
        <p className="text-gray-600 mb-8 text-center max-w-2xl mx-auto">
          Complete the form below and our enterprise team will contact you
          within 24 hours
        </p>

        <form onSubmit={handleSubmit} className="text-slate-400 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full text-slate-400 px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#0066FF] focus:border-[#0066FF]"
              placeholder="Your name"
              required
            />
          </div>
          <div>
            <label
              htmlFor="company"
              className="block text-slate-400 text-sm font-medium  mb-1"
            >
              Company
            </label>
            <input
              type="text"
              id="company"
              name="company"
              className="w-full text-slate-400 px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#0066FF] focus:border-[#0066FF]"
              placeholder="Company name"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block  text-slate-400 text-sm font-medium  mb-1"
            >
              Work Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#0066FF] focus:border-[#0066FF] text-black outline-none"
              placeholder="you@company.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block text-slate-400 text-sm font-medium  mb-1"
            >
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="w-full text-slate-400 px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#0066FF] focus:border-[#0066FF]"
              placeholder="+256 XXX XXX XXX"
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="needs"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              How can we help?
            </label>
            <select
              id="needs"
              name="partnershipInterest"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#0066FF] focus:border-[#0066FF] text-black outline-none"
              required
            >
              <option value="">Select partnership interest</option>
              <option value="hiring">Hire Developers</option>
              <option value="training">Team Training</option>
              <option value="consulting">Technical Consulting</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Additional Details
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#0066FF] focus:border-[#0066FF] text-black outline-none"
              placeholder="Tell us about your Web3 needs..."
            ></textarea>
          </div>
          <div className="sm:col-span-2 flex justify-center">
            <button
              type="submit"
              className="bg-gradient-to-r from-[#0066FF] to-[#0047CC] text-white px-8 py-3 rounded-full hover:shadow-lg transition-all duration-300 font-medium"
            >
              Request Consultation
            </button>
          </div>
        </form>
      </section>

      <ToastContainer toasts={toasts} />
    </div>
  );
};

export default EnterprisePage;
