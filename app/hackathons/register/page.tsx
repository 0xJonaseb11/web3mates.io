"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaUniversity,
  FaUsers,
  FaCode,
  FaShieldAlt,
  FaCheckCircle,
  FaExclamationTriangle,
  FaTimes,
} from "react-icons/fa";

// Toast Component
interface ToastProps {
  message: string;
  type: "success" | "error" | "warning";
  onClose: () => void;
  isVisible: boolean;
}

const Toast = ({ message, type, onClose, isVisible }: ToastProps) => {
  const icons = {
    success: <FaCheckCircle className="w-5 h-5" />,
    error: <FaExclamationTriangle className="w-5 h-5" />,
    warning: <FaExclamationTriangle className="w-5 h-5" />,
  };

  const colors = {
    success: "bg-blue-500 border-blue-700",
    error: "bg-red-500 border-red-600",
    warning: "bg-yellow-500 border-yellow-600",
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -50, scale: 0.9 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className={`fixed top-24 right-6 z-50 ${colors[type]} text-white p-4 rounded-2xl shadow-2xl border-2 backdrop-blur-sm max-w-sm min-w-80`}
        >
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 mt-0.5">{icons[type]}</div>
            <div className="flex-1">
              <p className="font-semibold text-sm">{message}</p>
            </div>
            <button
              onClick={onClose}
              className="flex-shrink-0 hover:bg-white/20 rounded-full p-1 transition-colors"
            >
              <FaTimes className="w-4 h-4" />
            </button>
          </div>
          {/* Progress Bar */}
          <motion.div
            className="h-1 bg-white/30 rounded-full mt-3 overflow-hidden"
            initial={{ width: "100%" }}
            animate={{ width: "0%" }}
            transition={{ duration: 5, ease: "linear" }}
            onAnimationComplete={onClose}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default function HackathonRegistration() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    country: "",
    city: "",
    university: "",
    experience: "",
    team: "",
    track: "",
    referral: "",
    agreeToTerms: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<{
    message: string;
    type: "success" | "error" | "warning";
    isVisible: boolean;
  }>({
    message: "",
    type: "success",
    isVisible: false,
  });

  const showToast = (
    message: string,
    type: "success" | "error" | "warning" = "success"
  ) => {
    setToast({ message, type, isVisible: true });
  };

  const hideToast = () => {
    setToast((prev) => ({ ...prev, isVisible: false }));
  };

  // Auto-hide toast after 5 seconds
  useEffect(() => {
    if (toast.isVisible) {
      const timer = setTimeout(hideToast, 5000);
      return () => clearTimeout(timer);
    }
  }, [toast.isVisible]);

  const marqueeVariants = {
    animate: {
      x: [0, -1030],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop" as const,
          duration: 25,
          ease: "linear" as const,
        },
      },
    },
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = "Name should be at least 2 characters";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.phone) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\+?[\d\s-()]{10,}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }

    if (!formData.country.trim()) {
      newErrors.country = "Country is required";
    }

    if (!formData.city.trim()) {
      newErrors.city = "City is required";
    }

    if (!formData.experience) {
      newErrors.experience = "Please select your experience level";
    }

    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = "You must agree to the terms and conditions";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      showToast(
        "Please fix the errors in the form before submitting.",
        "warning"
      );
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    showToast("Submitting your registration...", "success");

    try {
      const response = await fetch(
        process.env.NEXT_PUBLIC_FORMSPREE_ETH_RWANDA_HACK_URL!,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...formData,
            _subject: `ETH Rwanda Hackathon Registration - ${formData.fullName}`,
            _replyto: formData.email,
          }),
        }
      );

      if (response.ok) {
        showToast("🎉 Registration successful! Redirecting...", "success");
        setTimeout(() => {
          window.location.href = "/hackathons/register/success";
        }, 2000);
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      showToast(
        "❌ There was an error submitting your registration. Please try again or contact support.",
        "error"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    });

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const experienceLevels = [
    {
      value: "beginner",
      label: "Beginner",
      description: "New to Web3, excited to learn",
    },
    {
      value: "intermediate",
      label: "Intermediate",
      description: "Some experience with blockchain",
    },
    {
      value: "advanced",
      label: "Advanced",
      description: "Comfortable with Web3 development",
    },
    {
      value: "expert",
      label: "Expert",
      description: "Professional Web3 developer",
    },
  ];

  const tracks = [
    { value: "defi", label: "DeFi for Africa", emoji: "" },
    { value: "identity", label: "Digital Identity", emoji: "" },
    { value: "climate", label: "Climate Tech", emoji: "" },
    { value: "payments", label: "Cross-border Payments", emoji: "" },
    { value: "supplychain", label: "Supply Chain", emoji: "" },
    { value: "not-sure", label: "Not sure yet", emoji: "" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 pt-20">
      {/* Toast Notification */}
      <Toast
        message={toast.message}
        type={toast.type}
        onClose={hideToast}
        isVisible={toast.isVisible}
      />

      {/* Hackathon Marquee Banner */}
      <motion.div
        className="fixed top-0 left-0 right-0 z-40 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 py-3 overflow-hidden shadow-lg border-b border-white/20 mt-20"
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.div
          className="flex whitespace-nowrap"
          variants={marqueeVariants}
          animate="animate"
        >
          {[...Array(3)].map((_, setIndex) => (
            <div key={setIndex} className="flex items-center gap-8 px-4">
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 10, -10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="text-2xl"
              >
                🚀
              </motion.div>

              <Link
                href="/hackathons/eth-rwanda-hackathon-2026"
                className="flex items-center gap-4 group"
              >
                <span className="text-white font-bold text-lg sm:text-xl bg-black/20 px-4 py-1 rounded-full border border-white/30">
                  🔥 HOT EVENT
                </span>
                <span className="text-white font-semibold text-lg sm:text-xl">
                  ETH Rwanda Hackathon 2026
                </span>
                <span className="text-yellow-300 font-bold text-lg sm:text-xl animate-pulse">
                  $3,000+ PRIZES
                </span>
                <span className="text-white/90 text-lg">
                  Dec 2024 - Jan 2025
                </span>
              </Link>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/hackathons/register?"
                  className="bg-yellow-400 text-blue-900 px-6 py-2 rounded-full font-bold text-sm sm:text-base hover:bg-yellow-300 transition-colors duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
                >
                  🎯 Register Now
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    →
                  </motion.span>
                </Link>
              </motion.div>

              <div className="flex items-center gap-6 text-white/80 text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-green-400">⏱️</span>
                  <span>48-Hour Sprint</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-purple-400">🌍</span>
                  <span>10+ Countries</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-red-400">👥</span>
                  <span>500+ Builders</span>
                </div>
              </div>

              <motion.div
                animate={{
                  scale: [1, 1.3, 1],
                  rotate: [0, -15, 15, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="text-2xl"
              >
                ⚡
              </motion.div>
            </div>
          ))}
        </motion.div>

        <motion.div
          className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-yellow-400 to-orange-500"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </motion.div>

      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <Link
            href="/hackathons/eth-rwanda-hackathon-2026"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-blue-200 hover:border-blue-300 transition-all duration-300 mb-8 group"
          >
            <svg
              className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Hackathon Details
          </Link>

          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full mb-6 shadow-lg ml-10"
          >
            <span className="text-sm font-semibold">
              JOIN THE REVOLUTION
            </span>
          </motion.div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold  mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
            Register for <span className="text-blue-700">ETH Rwanda Hackathon 2026</span>
          </h1>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join{" "}
            <span className="font-semibold text-blue-600">500+ innovators</span>{" "}
            across Africa building the decentralized future. Your journey to
            becoming a Web3 pioneer starts here.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Main Registration Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 p-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                  <FaUser className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    Your Information
                  </h2>
                  <p className="text-gray-500">Tell us about yourself</p>
                </div>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {/* Full Name */}
                  <div className="space-y-2">
                    <label
                      htmlFor="fullName"
                      className="flex items-center gap-2 text-sm font-medium text-gray-700"
                    >
                      <FaUser className="w-4 h-4 text-blue-500" />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 ${
                        errors.fullName
                          ? "border-red-300 bg-red-50"
                          : "border-gray-200 hover:border-blue-300"
                      }`}
                      placeholder="Enter your full name"
                    />
                    {errors.fullName && (
                      <p className="text-red-500 text-sm flex items-center gap-1">
                        ⚠️ {errors.fullName}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="flex items-center gap-2 text-sm font-medium text-gray-700"
                    >
                      <FaEnvelope className="w-4 h-4 text-blue-500" />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 ${
                        errors.email
                          ? "border-red-300 bg-red-50"
                          : "border-gray-200 hover:border-blue-300"
                      }`}
                      placeholder="your.email@example.com"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm flex items-center gap-1">
                        ⚠️ {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <label
                      htmlFor="phone"
                      className="flex items-center gap-2 text-sm font-medium text-gray-700"
                    >
                      <FaPhone className="w-4 h-4 text-blue-500" />
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 ${
                        errors.phone
                          ? "border-red-300 bg-red-50"
                          : "border-gray-200 hover:border-blue-300"
                      }`}
                      placeholder="+1234567890"
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm flex items-center gap-1">
                        ⚠️ {errors.phone}
                      </p>
                    )}
                  </div>

                  {/* Country */}
                  <div className="space-y-2">
                    <label
                      htmlFor="country"
                      className="flex items-center gap-2 text-sm font-medium text-gray-700"
                    >
                      <FaMapMarkerAlt className="w-4 h-4 text-blue-500" />
                      Country *
                    </label>
                    <input
                      type="text"
                      id="country"
                      name="country"
                      required
                      value={formData.country}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 ${
                        errors.country
                          ? "border-red-300 bg-red-50"
                          : "border-gray-200 hover:border-blue-300"
                      }`}
                      placeholder="Your country"
                    />
                    {errors.country && (
                      <p className="text-red-500 text-sm flex items-center gap-1">
                        ⚠️ {errors.country}
                      </p>
                    )}
                  </div>

                  {/* City */}
                  <div className="space-y-2">
                    <label
                      htmlFor="city"
                      className="flex items-center gap-2 text-sm font-medium text-gray-700"
                    >
                      <FaMapMarkerAlt className="w-4 h-4 text-blue-500" />
                      City *
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      required
                      value={formData.city}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 ${
                        errors.city
                          ? "border-red-300 bg-red-50"
                          : "border-gray-200 hover:border-blue-300"
                      }`}
                      placeholder="Your city"
                    />
                    {errors.city && (
                      <p className="text-red-500 text-sm flex items-center gap-1">
                        ⚠️ {errors.city}
                      </p>
                    )}
                  </div>

                  {/* University/Organization */}
                  <div className="space-y-2">
                    <label
                      htmlFor="university"
                      className="flex items-center gap-2 text-sm font-medium text-gray-700"
                    >
                      <FaUniversity className="w-4 h-4 text-blue-500" />
                      University / Organization
                    </label>
                    <input
                      type="text"
                      id="university"
                      name="university"
                      value={formData.university}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:border-blue-300"
                      placeholder="Your university or company"
                    />
                  </div>
                </div>

                {/* Experience Level */}
                <div className="mb-8">
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-4">
                    <FaCode className="w-4 h-4 text-blue-500" />
                    Web3 Experience Level *
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {experienceLevels.map((level) => (
                      <label
                        key={level.value}
                        className={`flex items-start gap-3 p-4 border-2 rounded-xl cursor-pointer transition-all duration-300 ${
                          formData.experience === level.value
                            ? "border-blue-500 bg-blue-50 shadow-md"
                            : "border-gray-200 hover:border-blue-300 hover:bg-blue-25"
                        }`}
                      >
                        <input
                          type="radio"
                          name="experience"
                          value={level.value}
                          checked={formData.experience === level.value}
                          onChange={handleChange}
                          className="mt-1 text-blue-600 focus:ring-blue-500"
                        />
                        <div>
                          <div className="font-medium text-gray-900">
                            {level.label}
                          </div>
                          <div className="text-sm text-gray-500 mt-1">
                            {level.description}
                          </div>
                        </div>
                      </label>
                    ))}
                  </div>
                  {errors.experience && (
                    <p className="text-red-500 text-sm flex items-center gap-1 mt-2">
                      ⚠️ {errors.experience}
                    </p>
                  )}
                </div>

                {/* Preferred Track */}
                <div className="mb-8">
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-4">
                    🎯 Preferred Track (Optional)
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {tracks.map((track) => (
                      <label
                        key={track.value}
                        className={`flex items-center gap-2 p-3 border-2 rounded-xl cursor-pointer transition-all duration-300 ${
                          formData.track === track.value
                            ? "border-purple-500 bg-purple-50 shadow-md"
                            : "border-gray-200 hover:border-purple-300 hover:bg-purple-25"
                        }`}
                      >
                        <input
                          type="radio"
                          name="track"
                          value={track.value}
                          checked={formData.track === track.value}
                          onChange={handleChange}
                          className="text-purple-600 focus:ring-purple-500"
                        />
                        <span className="text-sm font-medium">
                          {track.label}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Team Information */}
                <div className="mb-8">
                  <label
                    htmlFor="team"
                    className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2"
                  >
                    <FaUsers className="w-4 h-4 text-blue-500" />
                    Team Information
                  </label>
                  <textarea
                    id="team"
                    name="team"
                    rows={3}
                    value={formData.team}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:border-blue-300 resize-none"
                    placeholder="Do you have a team? If yes, please list your team members. If not, we'll help you find one during the event!"
                  />
                </div>

                {/* Terms and Conditions */}
                <div className="mb-8">
                  <label className="flex items-start gap-3 p-4 bg-blue-50 rounded-xl border border-blue-200">
                    <input
                      type="checkbox"
                      name="agreeToTerms"
                      checked={formData.agreeToTerms}
                      onChange={handleChange}
                      className="mt-1 text-blue-600 focus:ring-blue-500"
                    />
                    <div>
                      <span className="text-sm font-medium text-gray-900">
                        I agree to the{" "}
                        <Link
                          href="/terms"
                          className="text-blue-600 hover:text-blue-700 underline"
                        >
                          Terms and Conditions
                        </Link>{" "}
                        and{" "}
                        <Link
                          href="/privacy"
                          className="text-blue-600 hover:text-blue-700 underline"
                        >
                          Privacy Policy
                        </Link>
                      </span>
                      {errors.agreeToTerms && (
                        <p className="text-red-500 text-sm flex items-center gap-1 mt-1">
                          ⚠️ {errors.agreeToTerms}
                        </p>
                      )}
                    </div>
                  </label>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-bold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-lg shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Processing...
                    </>
                  ) : (
                    <>
                      Secure My Spot
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Sidebar - Benefits & Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Event Highlights */}
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl p-6 text-white shadow-2xl">
              <h3 className="text-xl font-bold mb-4">
                Why Join ETH Rwanda Hackathon?
              </h3>
              <div className="space-y-3">
                {[
                  "$3,000+ in prizes & incubation opportunities",
                  "Connect with 100+ industry mentors",
                  "Build solutions for real African challenges",
                  "Career opportunities with top Web3 companies",
                  "Learn from workshops & technical sessions",
                  "Potential to launch your own startup",
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    {benefit}
                  </div>
                ))}
              </div>
            </div>

            {/* Stats Card */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-white/20">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                Hackathon Stats
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 bg-purple-50 rounded-xl">
                  <div className="text-2xl font-bold text-blue-600">500+</div>
                  <div className="text-xs text-gray-600">Participants</div>
                </div>
                <div className="text-center p-3 bg-purple-50 rounded-xl">
                  <div className="text-2xl font-bold text-blue-600">100+</div>
                  <div className="text-xs text-gray-600">Mentors</div>
                </div>
                <div className="text-center p-3 bg-purple-50 rounded-xl">
                  <div className="text-2xl font-bold text-blue-600">48</div>
                  <div className="text-xs text-gray-600">Hours</div>
                </div>
                <div className="text-center p-3 bg-purple-50 rounded-xl">
                  <div className="text-2xl font-bold text-blue-600">10+</div>
                  <div className="text-xs text-gray-600">Countries</div>
                </div>
              </div>
            </div>

            {/* Next Steps */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-white/20">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                What Happens Next?
              </h3>
              <div className="space-y-3">
                {[
                  { step: "1", text: "Confirmation email within 24 hours" },
                  { step: "2", text: "Pre-hackathon workshops access" },
                  { step: "3", text: "Team formation support" },
                  { step: "4", text: "Final details 2 weeks before event" },
                ].map((item) => (
                  <div key={item.step} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-bold">
                      {item.step}
                    </div>
                    <span className="text-sm text-gray-600">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Support Card */}
            <div className="bg-gradient-to-br from-blue-400 to-blue-500 rounded-3xl p-6 text-white shadow-2xl">
              <div className="flex items-center gap-3 mb-3">
                <FaShieldAlt className="w-6 h-6" />
                <h3 className="text-lg font-bold">Need Help?</h3>
              </div>
              <p className="text-green-100 text-sm mb-4">
                Our support team is here to help you with any questions about
                registration.
              </p>
              <Link
                href="mailto:support@web3mates.com"
                className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg text-sm font-medium hover:bg-white/30 transition-colors"
              >
                ✉️ Contact Support
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
