"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useToast, ToastContainer } from "@/hooks/use-toast";
import { validateForm, validateField } from "@/utils/validation";
import PhoneInput from "@/components/PhoneInput";
import {
  FaRocket,
  FaUsers,
  FaGraduationCap,
  FaCheckCircle,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaCode,
  FaChartLine,
  FaBullseye,
  FaClock,
  FaGlobe,
  FaFileAlt,
  FaHandshake,
  FaArrowRight,
  FaExclamationTriangle,
  FaInfoCircle,
} from "react-icons/fa";

const MentorshipApplyForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    track: "",
    experience: "",
    goals: "",
    timezone: "",
    availability: "",
  });
  const [countryCode, setCountryCode] = useState("+1");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const { toast, toasts } = useToast();
  const [applicationsClosed] = useState(false); // Set to true to disable applications

  const requiredFields = [
    "name",
    "email",
    "phone",
    "track",
    "experience",
    "goals",
    "timezone",
    "availability",
  ];

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleBlur = (field: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const error = validateField(
      field,
      formData[field as keyof typeof formData],
      true
    );
    if (error) {
      setErrors((prev) => ({ ...prev, [field]: error.message }));
    } else {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const handlePhoneChange = (value: string) => {
    setFormData((prev) => ({ ...prev, phone: value }));
    if (errors.phone) {
      setErrors((prev) => ({ ...prev, phone: "" }));
    }
  };

  const handleCountryCodeChange = (code: string) => {
    setCountryCode(code);
  };

  const url = process.env.NEXT_PUBLIC_FORMSPREE_MENTORSHIP_URL;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (applicationsClosed) {
      toast({
        title: "Applications Currently Closed",
        description:
          "Stay tuned for announcements about future cohorts!",
        variant: "destructive",
      });
      return;
    }

    const validation = validateForm(formData, requiredFields);

    if (!validation.isValid) {
      const newErrors: Record<string, string> = {};
      validation.errors.forEach((error) => {
        newErrors[error.field] = error.message;
      });
      setErrors(newErrors);

      toast({
        title: "Validation Error",
        description: "Please fix the errors in the form before submitting.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Submitting application...",
      description: "Please wait while your application is being sent.",
    });

    try {
      const data = new FormData();
      data.append("form_type", "mentorship");
      data.append("name", formData.name);
      data.append("email", formData.email);
      data.append("phone", `${countryCode}${formData.phone}`);
      data.append("track", formData.track);
      data.append("experience", formData.experience);
      data.append("goals", formData.goals);
      data.append("timezone", formData.timezone);
      data.append("availability", formData.availability);

      const response = await fetch(
        url || "https://formspree.io/f/YOUR_MENTORSHIP_FORM_ID",
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
          title: "Application Sent!",
          description:
            "Your mentorship application has been sent successfully. We'll be in touch soon!",
          variant: "success",
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          track: "",
          experience: "",
          goals: "",
          timezone: "",
          availability: "",
        });
        setErrors({});
        setTouched({});
      } else {
        const result = await response.json();
        toast({
          title: "Submission Failed",
          description: result.errors
            ? result.errors
                .map((err: { message: string }) => err.message)
                .join(", ")
            : "There was an issue sending your application. Please try again.",
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <ToastContainer toasts={toasts} />

        {applicationsClosed && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-amber-100 border-l-4 border-amber-500 text-amber-700 p-4 mb-8 rounded-lg flex items-start gap-3"
            role="alert"
          >
            <FaInfoCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-bold">Applications Currently Closed</p>
              <p>
                Applications for Cohort 2 have now closed. Stay tuned for
                future announcements!
              </p>
            </div>
          </motion.div>
        )}

        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-6"
          >
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-full text-sm font-medium mb-4 flex items-center gap-2">
              <FaRocket className="w-4 h-4" />
              Start Your Web3 Journey
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 lg:mb-8 leading-tight"
          >
            Apply for{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Cohort 2 Mentorship
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600 max-w-3xl mx-auto text-lg sm:text-xl px-4 leading-relaxed"
          >
            Cohort 2 is open — apply now to master advanced concepts in
            Blockchain, Web3, and Smart Contracts with Africa&apos;s top mentors.
            Limited slots available.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center items-center gap-6 mt-8 text-sm text-gray-500"
          >
            <div className="flex items-center gap-2">
              <FaUsers className="w-4 h-4 text-green-500" />
              <span>100+ Mentees Helped</span>
            </div>
            <div className="flex items-center gap-2">
              <FaGraduationCap className="w-4 h-4 text-blue-500" />
              <span>Expert Mentors</span>
            </div>
            <div className="flex items-center gap-2">
              <FaChartLine className="w-4 h-4 text-purple-500" />
              <span>Personalized Learning</span>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 sm:p-8 lg:p-10 xl:p-12 max-w-4xl mx-auto relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full -translate-y-16 translate-x-16 opacity-50"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-purple-100 to-pink-100 rounded-full translate-y-12 -translate-x-12 opacity-50"></div>

          <div className="relative z-10">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                Application Form
              </h2>
              <p className="text-gray-600">
                Tell us about yourself and your Web3 goals
              </p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="flex text-sm font-semibold text-gray-700 mb-2 items-center gap-2"
                  >
                    <FaUser className="w-4 h-4 text-blue-500" />
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={() => handleBlur("name")}
                    required
                    className={`w-full px-4 py-3 rounded-xl border-2 focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all text-black outline-none bg-gray-50 hover:bg-white ${
                      errors.name
                        ? "border-red-400 bg-red-50"
                        : "border-gray-200"
                    }`}
                    placeholder="Your full name"
                  />
                  {errors.name && touched.name && (
                    <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                      <span>⚠️</span> {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="flex text-sm font-semibold text-gray-700 mb-2 items-center gap-2"
                  >
                    <FaEnvelope className="w-4 h-4 text-green-500" />
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={() => handleBlur("email")}
                    required
                    className={`w-full px-4 py-3 rounded-xl border-2 focus:ring-4 focus:ring-green-100 focus:border-green-500 transition-all text-black outline-none bg-gray-50 hover:bg-white ${
                      errors.email
                        ? "border-red-400 bg-red-50"
                        : "border-gray-200"
                    }`}
                    placeholder="your@email.com"
                  />
                  {errors.email && touched.email && (
                    <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                      <span>⚠️</span> {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="flex text-sm font-semibold text-gray-700 mb-2 items-center gap-2"
                >
                  <FaPhone className="w-4 h-4 text-purple-500" />
                  Phone Number *
                </label>
                <PhoneInput
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  onCountryCodeChange={handleCountryCodeChange}
                  countryCode={countryCode}
                  placeholder="Enter your phone number"
                  required
                  error={
                    errors.phone && touched.phone ? errors.phone : undefined
                  }
                />
              </div>

              <div>
                <label
                  htmlFor="track"
                  className="flex text-sm font-semibold text-gray-700 mb-2 items-center gap-2"
                >
                  <FaCode className="w-4 h-4 text-orange-500" />
                  Preferred Mentorship Track *
                </label>
                <select
                  id="track"
                  name="track"
                  value={formData.track}
                  onChange={handleChange}
                  onBlur={() => handleBlur("track")}
                  required
                  className={`w-full px-4 py-3 rounded-xl border-2 focus:ring-4 focus:ring-orange-100 focus:border-orange-500 transition-all text-black outline-none bg-gray-50 hover:bg-white ${
                    errors.track
                      ? "border-red-400 bg-red-50"
                      : "border-gray-200"
                  }`}
                >
                  <option value="">Select a Cohort 2 track</option>
                  <option value="Web3 Fundamentals & Architecture">
                    Web3 Fundamentals &amp; Architecture — Blockchain, wallets &amp; core concepts (Beginner)
                  </option>
                  <option value="Smart Contract Development & Security">
                    Smart Contract Development &amp; Security — Solidity, testing &amp; auditing (Intermediate)
                  </option>
                  <option value="DeFi Protocol Engineering">
                    DeFi Protocol Engineering — AMMs, lending &amp; yield strategies (Advanced)
                  </option>
                  <option value="Full-Stack dApp Development">
                    Full-Stack dApp Development — Web3 frontends, Ethers.js &amp; mainnet deployment (Intermediate)
                  </option>
                  <option value="Web3 Entrepreneurship & Tokenomics">
                    Web3 Entrepreneurship &amp; Tokenomics — Token models, DAOs &amp; go-to-market (All levels)
                  </option>
                </select>
                {errors.track && touched.track && (
                  <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                    <FaExclamationTriangle className="w-3 h-3" /> {errors.track}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="experience"
                  className="flex text-sm font-semibold text-gray-700 mb-3 items-center gap-2"
                >
                  <FaChartLine className="w-4 h-4 text-indigo-500" />
                  Current Web3 Experience Level *
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    {
                      level: "Beginner",
                      icon: FaUser,
                      desc: "New to Web3",
                      color: "text-green-500",
                    },
                    {
                      level: "Intermediate",
                      icon: FaGraduationCap,
                      desc: "Some experience",
                      color: "text-blue-500",
                    },
                    {
                      level: "Advanced",
                      icon: FaCode,
                      desc: "Experienced developer",
                      color: "text-purple-500",
                    },
                  ].map(({ level, icon: IconComponent, desc, color }) => (
                    <div key={level} className="relative">
                      <input
                        id={`experience-${level.toLowerCase()}`}
                        name="experience"
                        type="radio"
                        value={level}
                        checked={formData.experience === level}
                        onChange={handleChange}
                        onBlur={() => handleBlur("experience")}
                        className="sr-only"
                      />
                      <label
                        htmlFor={`experience-${level.toLowerCase()}`}
                        className={`block p-4 rounded-xl border-2 cursor-pointer transition-all hover:shadow-md ${
                          formData.experience === level
                            ? "border-indigo-500 bg-indigo-50 text-indigo-700"
                            : "border-gray-200 bg-white hover:border-indigo-300"
                        }`}
                      >
                        <div className="text-center">
                          <div className={`text-2xl mb-2 flex justify-center`}>
                            <IconComponent className={`w-8 h-8 ${color}`} />
                          </div>
                          <div className="font-semibold text-sm">{level}</div>
                          <div className="text-xs text-gray-500 mt-1">
                            {desc}
                          </div>
                        </div>
                      </label>
                    </div>
                  ))}
                </div>
                {errors.experience && touched.experience && (
                  <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                    <FaExclamationTriangle className="w-3 h-3" />{" "}
                    {errors.experience}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="goals"
                  className="flex text-sm font-semibold text-gray-700 mb-2 items-center gap-2"
                >
                  <FaBullseye className="w-4 h-4 text-pink-500" />
                  Your Learning Goals *
                </label>
                <textarea
                  id="goals"
                  name="goals"
                  value={formData.goals}
                  onChange={handleChange}
                  onBlur={() => handleBlur("goals")}
                  required
                  rows={5}
                  maxLength={500}
                  className={`w-full px-4 py-3 rounded-xl border-2 focus:ring-4 focus:ring-pink-100 focus:border-pink-500 transition-all text-black outline-none bg-gray-50 hover:bg-white resize-none ${
                    errors.goals
                      ? "border-red-400 bg-red-50"
                      : "border-gray-200"
                  }`}
                  placeholder="What do you hope to achieve through this mentorship?"
                />
                <div className="mt-2 text-xs text-gray-500">
                  {formData.goals.length}/500 characters
                </div>
                {errors.goals && touched.goals && (
                  <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                    <FaExclamationTriangle className="w-3 h-3" /> {errors.goals}
                  </p>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="timezone"
                    className="flex text-sm font-semibold text-gray-700 mb-2 items-center gap-2"
                  >
                    <FaGlobe className="w-4 h-4 text-teal-500" />
                    Timezone *
                  </label>
                  <input
                    type="text"
                    id="timezone"
                    name="timezone"
                    value={formData.timezone}
                    onChange={handleChange}
                    onBlur={() => handleBlur("timezone")}
                    required
                    className={`w-full px-4 py-3 rounded-xl border-2 focus:ring-4 focus:ring-teal-100 focus:border-teal-500 transition-all text-black outline-none bg-gray-50 hover:bg-white ${
                      errors.timezone
                        ? "border-red-400 bg-red-50"
                        : "border-gray-200"
                    }`}
                    placeholder="e.g. GMT+1, EST, etc."
                  />
                  {errors.timezone && touched.timezone && (
                    <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                      <FaExclamationTriangle className="w-3 h-3" />{" "}
                      {errors.timezone}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="availability"
                    className="flex text-sm font-semibold text-gray-700 mb-2 items-center gap-2"
                  >
                    <FaClock className="w-4 h-4 text-amber-500" />
                    Weekly Availability (Hours) *
                  </label>
                  <input
                    type="number"
                    id="availability"
                    name="availability"
                    value={formData.availability}
                    onChange={handleChange}
                    onBlur={() => handleBlur("availability")}
                    required
                    min="1"
                    max="168"
                    className={`w-full px-4 py-3 rounded-xl border-2 focus:ring-4 focus:ring-amber-100 focus:border-amber-500 transition-all text-black outline-none bg-gray-50 hover:bg-white ${
                      errors.availability
                        ? "border-red-400 bg-red-50"
                        : "border-gray-200"
                    }`}
                    placeholder="Hours per week"
                  />
                  {errors.availability && touched.availability && (
                    <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                      <FaExclamationTriangle className="w-3 h-3" />{" "}
                      {errors.availability}
                    </p>
                  )}
                </div>
              </div>

              <div className="pt-6">
                <button
                  type="submit"
                  disabled={applicationsClosed}
                  className={`w-full text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform flex items-center justify-center gap-2 ${
                    applicationsClosed
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 hover:scale-[1.02] hover:shadow-lg"
                  }`}
                >
                  {applicationsClosed ? (
                    <span>Applications Closed</span>
                  ) : (
                    <>
                      <FaRocket className="w-4 h-4" />
                      Submit Application
                      <FaArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </motion.div>

        <motion.section
          className="mt-16 sm:mt-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-2xl p-8 sm:p-12 lg:p-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="relative z-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-2">
              What Happens Next? <FaCheckCircle className="w-8 h-8 text-blue-600" />
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mt-12">
              {[
                {
                  icon: FaFileAlt,
                  title: "Review",
                  description: "We review your application.",
                },
                {
                  icon: FaHandshake,
                  title: "Match",
                  description: "We match you with a mentor.",
                },
                {
                  icon: FaRocket,
                  title: "Start",
                  description: "You begin your journey.",
                },
              ].map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-2xl shadow-lg">
                  <item.icon className="w-12 h-12 mx-auto mb-4 text-gray-700" />
                  <h3 className="font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default MentorshipApplyForm;
