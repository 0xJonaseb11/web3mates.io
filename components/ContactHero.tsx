"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaXTwitter } from "react-icons/fa6";
import { useToast } from "@/hooks/use-toast";
import { validateForm, validateField } from "@/utils/validation";
import PhoneInput from "@/components/PhoneInput";

export default function ContactHero() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    contactMethod: "",
    message: "",
  });
  const [countryCode, setCountryCode] = useState("+1");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const url = process.env.NEXT_PUBLIC_FORMSPREE_CONTACT_URL;
  const { toast, ToastContainer } = useToast();

  const requiredFields = ["firstName", "lastName", "email", "contactMethod", "message"];

  // Validate phone if contact method is phone
  const shouldValidatePhone = formData.contactMethod === "phone" && formData.phone;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }

    // If contact method changes to phone, validate phone field
    if (name === "contactMethod" && value === "phone" && formData.phone) {
      const phoneError = validateField("phone", formData.phone, true);
      if (phoneError) {
        setErrors(prev => ({ ...prev, phone: phoneError.message }));
      }
    }
  };

  const handleBlur = (field: string) => {
    setTouched(prev => ({ ...prev, [field]: true }));
    
    // Validate field on blur
    const error = validateField(field, formData[field as keyof typeof formData], true);
    if (error) {
      setErrors(prev => ({ ...prev, [field]: error.message }));
    } else {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  const handlePhoneChange = (value: string) => {
    setFormData(prev => ({ ...prev, phone: value }));
    
    // Clear error when user starts typing
    if (errors.phone) {
      setErrors(prev => ({ ...prev, phone: "" }));
    }

    // Validate phone if contact method is phone
    if (formData.contactMethod === "phone" && value) {
      const phoneError = validateField("phone", value, true);
      if (phoneError) {
        setErrors(prev => ({ ...prev, phone: phoneError.message }));
      }
    }
  };

  const handleCountryCodeChange = (code: string) => {
    setCountryCode(code);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Mark all fields as touched to show errors
    const allTouched: Record<string, boolean> = {};
    requiredFields.forEach(field => {
      allTouched[field] = true;
    });
    setTouched(allTouched);

    // Validate all fields
    const validation = validateForm(formData, requiredFields);
    
    // Additional validation for phone if contact method is phone
    if (shouldValidatePhone) {
      const phoneError = validateField("phone", formData.phone, true);
      if (phoneError) {
        validation.errors.push(phoneError);
      }
    }
    
    if (!validation.isValid) {
      const newErrors: Record<string, string> = {};
      validation.errors.forEach(error => {
        newErrors[error.field] = error.message;
      });
      setErrors(newErrors);
      
      toast({
        title: "Please fix the form errors",
        description: "Check the highlighted fields below and correct any errors.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Submitting message...",
      description: "Please wait while your message is being sent.",
    });

    try {
      // Create FormData with all the form data from state
      const data = new FormData();
      data.append("form_type", "contact");
      data.append("firstName", formData.firstName);
      data.append("lastName", formData.lastName);
      data.append("email", formData.email);
      if (formData.phone) {
        data.append("phone", `${countryCode}${formData.phone}`);
      }
      data.append("contactMethod", formData.contactMethod);
      data.append("message", formData.message);

      const response = await fetch(url || "", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        toast({
          title: "Message Sent!",
          description:
            "Your message has been sent successfully. We'll get back to you soon!",
          variant: "success",
        });
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          contactMethod: "",
          message: "",
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
            : "There was an issue sending your message. Please try again.",
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
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 pt-16 sm:pt-20 lg:pt-24">
      <div className="text-center mb-8 sm:mb-12">
        <motion.h1
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Contact Us
        </motion.h1>
        <motion.p
          className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto px-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Ready to build the future of Web3? Let&apos;s connect.
        </motion.p>
      </div>
      
      <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white rounded-2xl shadow-lg border border-gray-100 p-4 sm:p-6 lg:p-8"
        >
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Send us a message</h2>
          <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
              <div>
                <label className="block text-gray-700 mb-2 text-sm sm:text-base">
                  First Name *
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  onBlur={() => handleBlur("firstName")}
                  placeholder="Your first name"
                  className={`w-full px-3 sm:px-4 py-2 sm:py-3 text-black rounded-lg sm:rounded-xl border-2 transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                    errors.firstName ? 'border-red-500 bg-red-50' : 'border-gray-200 bg-white hover:border-gray-300'
                  }`}
                  required
                />
                {errors.firstName && touched.firstName && (
                  <p className="mt-1 text-sm text-red-600">{errors.firstName}</p>
                )}
              </div>
              <div>
                <label className="block text-gray-700 mb-2 text-sm sm:text-base">
                  Last Name *
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  onBlur={() => handleBlur("lastName")}
                  placeholder="Your last name"
                  className={`w-full px-3 sm:px-4 py-2 sm:py-3 text-black rounded-lg sm:rounded-xl border-2 transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                    errors.lastName ? 'border-red-500 bg-red-50' : 'border-gray-200 bg-white hover:border-gray-300'
                  }`}
                  required
                />
                {errors.lastName && touched.lastName && (
                  <p className="mt-1 text-sm text-red-600">{errors.lastName}</p>
                )}
              </div>
            </div>
            <div>
              <label className="block text-gray-700 mb-2 text-sm sm:text-base">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={() => handleBlur("email")}
                placeholder="your@email.com"
                className={`w-full px-3 sm:px-4 py-2 sm:py-3 text-black rounded-lg sm:rounded-xl border-2 transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                  errors.email ? 'border-red-500 bg-red-50' : 'border-gray-200 bg-white hover:border-gray-300'
                }`}
                required
              />
              {errors.email && touched.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email}</p>
              )}
            </div>
            <div>
              <label className="block text-gray-700 mb-2 text-sm sm:text-base">
                Phone Number {formData.contactMethod === "phone" && <span className="text-red-500">*</span>}
              </label>
              <PhoneInput
                value={formData.phone}
                onChange={handlePhoneChange}
                onCountryCodeChange={handleCountryCodeChange}
                countryCode={countryCode}
                placeholder="Enter your phone number"
                error={errors.phone && touched.phone ? errors.phone : undefined}
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2 text-sm sm:text-base">
                Contact method *
              </label>
              <select
                name="contactMethod"
                value={formData.contactMethod}
                onChange={handleChange}
                onBlur={() => handleBlur("contactMethod")}
                className={`w-full px-3 sm:px-4 py-2 sm:py-3 text-black rounded-lg sm:rounded-xl border-2 transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                  errors.contactMethod ? 'border-red-500 bg-red-50' : 'border-gray-200 bg-white hover:border-gray-300'
                }`}
                required
              >
                <option value="">Choose method</option>
                <option value="email">Email</option>
                <option value="phone">Phone</option>
                <option value="whatsapp">WhatsApp</option>
              </select>
              {errors.contactMethod && touched.contactMethod && (
                <p className="mt-1 text-sm text-red-600">{errors.contactMethod}</p>
              )}
            </div>
            <div>
              <label className="block text-gray-700 mb-2 text-sm sm:text-base">
                Message *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                onBlur={() => handleBlur("message")}
                rows={4}
                placeholder="Enter your message... (Minimum 5 characters)"
                className={`w-full px-3 sm:px-4 py-2 sm:py-3 text-black rounded-lg sm:rounded-xl border-2 transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                  errors.message ? 'border-red-500 bg-red-50' : 'border-gray-200 bg-white hover:border-gray-300'
                }`}
                required
              />
              {errors.message && touched.message && (
                <p className="mt-1 text-sm text-red-600">{errors.message}</p>
              )}
            </div>
            <div className="flex items-start">
              <input
                type="checkbox"
                name="privacyPolicy"
                id="privacyPolicy"
                className="h-4 w-4 text-blue-600 rounded border-gray-300 mt-1 outline-none"
                required
              />
              <label
                htmlFor="privacyPolicy"
                className="ml-2 text-xs sm:text-sm text-gray-600"
              >
                I agree with Web3 Mates Privacy Policy
              </label>
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold py-3 sm:py-4 px-4 sm:px-6 rounded-lg sm:rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                Send Message
              </button>
            </div>
          </form>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-6 sm:space-y-8"
        >
          <div className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Get in touch</h2>
            
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm sm:text-base">Address</h3>
                  <p className="text-gray-600 mt-1 text-xs sm:text-sm">Web3 Mates Hub — Kigali, Rwanda</p>
                  <p className="text-gray-500 text-xs sm:text-sm">Bumbogo Innovation Center, KG 690 St</p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-600 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm sm:text-base">Phone</h3>
                  <a href="tel:+256789649671" className="text-blue-600 hover:text-blue-700 font-medium text-xs sm:text-sm">
                    +256 789 649671
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-purple-600 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm sm:text-base">Follow us</h3>
                  <div className="flex gap-2 sm:gap-3 mt-2">
                    <a href="https://x.com/Web3Mates" className="text-gray-600 hover:text-blue-600 transition-colors" target="_blank" rel="noopener noreferrer">
                      <FaXTwitter className="w-4 h-4 sm:w-5 sm:h-5" />
                    </a>
                    <a href="https://www.linkedin.com/company/web3mates" className="text-gray-600 hover:text-blue-600 transition-colors" target="_blank" rel="noopener noreferrer">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <ToastContainer />
    </div>
  );
}
