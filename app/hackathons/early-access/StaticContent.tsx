"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export default function EarlyAccess() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch(
        process.env.NEXT_PUBLIC_FORMSPREE_NEWSLETTER_URL!,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            _subject: `Early Access Request - ETH Rwanda Hackathon 2026`,
            _replyto: email,
            source: "Early Access Page",
          }),
        }
      );

      if (response.ok) {
        setSubmitted(true);
        setEmail("");
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setError(
        "There was an error submitting your request. Please try again or contact support."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-purple-700 pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center text-white"
        >
          <Link
            href="/hackathons/eth-rwanda-hackathon-2026"
            className="inline-flex items-center text-blue-100 hover:text-white mb-8 group"
          >
            <svg
              className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform"
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
            Back to Hackathon
          </Link>

          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-6 ml-4">
            <span className="text-sm font-semibold">GET EARLY ACCESS</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Be the First to Know
          </h1>

          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
            Get exclusive early access to registration, special workshops, and
            priority mentorship matching for the ETH Rwanda Hackathon 2026.
          </p>

          {!submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white text-slate-600 rounded-2xl p-8 max-w-md mx-auto shadow-2xl"
            >
              <form
                onSubmit={handleSubmit}
                action={process.env.NEXT_PUBLIC_FORMSPREE_NEWSLETTER_URL}
                method="POST"
              >
                {/* Formspree Hidden Fields */}
                <input
                  type="hidden"
                  name="_formsubmit_id"
                  value="early-access-newsletter"
                />
                <input
                  type="text"
                  name="_gotcha"
                  style={{ display: "none" }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="mb-6">
                  <label
                    htmlFor="email"
                    className="block text-slate-700 text-sm font-medium mb-2 text-left"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                {error && (
                  <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-600 text-sm flex items-center gap-2">
                      ⚠️ {error}
                    </p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 text-white px-6 py-4 rounded-lg font-bold hover:bg-blue-700 transition-colors duration-300 text-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Submitting...
                    </>
                  ) : (
                    <>Get Early Access Updates</>
                  )}
                </button>
              </form>

              <p className="text-gray-500 text-sm mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-2xl p-8 max-w-md mx-auto shadow-2xl"
            >
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"
                >
                  <svg
                    className="w-8 h-8 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  You&apos;re on the list!
                </h3>
                <p className="text-gray-600 mb-6">
                  Thank you for signing up for early access. We&apos;ll send you

                  exclusive updates about the ETH Rwanda Hackathon 2026.

                </p>
                <div className="space-y-3">
                  <Link
                    href="/hackathons"
                    className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Explore Other Hackathons
                  </Link>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="block w-full text-blue-600 hover:text-blue-700 font-medium text-sm"
                  >
                    Add another email
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16"
          >
            <div className="text-center">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <span className="text-white text-lg">🎯</span>
              </motion.div>
              <h4 className="font-semibold text-white mb-2">
                Priority Registration
              </h4>
              <p className="text-blue-100 text-sm">
                Be the first to register when spots open
              </p>
            </div>

            <div className="text-center">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <span className="text-white text-lg">💼</span>
              </motion.div>
              <h4 className="font-semibold text-white mb-2">
                Exclusive Workshops
              </h4>
              <p className="text-blue-100 text-sm">
                Access pre-hackathon training sessions
              </p>
            </div>

            <div className="text-center">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <span className="text-white text-lg">🤝</span>
              </motion.div>
              <h4 className="font-semibold text-white mb-2">Mentor Matching</h4>
              <p className="text-blue-100 text-sm">
                Get matched with expert mentors early
              </p>
            </div>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-12 bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto border border-white/20"
          >
            <h4 className="font-bold text-white mb-3 text-center">
              What to Expect
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-blue-100">
              <div className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                <span>Registration opening announcements</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                <span>Exclusive workshop invitations</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                <span>Mentor matching opportunities</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                <span>Early access to challenge details</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
