"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  FaCheck,
  FaRocket,
  FaUsers,
  FaCalendar,
  FaTrophy,
  FaDiscord,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

export default function HackathonSuccess() {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Only the countdown logic is updated
  useEffect(() => {
    // Hackathon starts: May 1, 2026 00:00:00 UTC
    const hackathonDate = new Date("2026-05-01T00:00:00Z").getTime();

    const updateCountdown = () => {
      const now = Date.now();
      const distance = hackathonDate - now;

      if (distance <= 0) {
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setCountdown({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    };

    // Run immediately
    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);

    return () => clearInterval(timer);
  }, []);

  const confettiPieces = Array.from({ length: 150 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    animationDelay: Math.random() * 3,
    size: Math.random() * 10 + 5,
  }));

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Animated Confetti */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {confettiPieces.map((piece) => (
          <motion.div
            key={piece.id}
            className="absolute rounded-full"
            style={{
              left: `${piece.left}%`,
              width: piece.size,
              height: piece.size,
              background: `hsl(${Math.random() * 360}, 100%, 50%)`,
            }}
            animate={{
              y: [0, 1000],
              x: [0, (Math.random() - 0.5) * 100],
              rotate: [0, 360],
              opacity: [1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              ease: "easeOut",
              delay: piece.animationDelay,
            }}
          />
        ))}
      </div>

      {/* Floating Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-10 text-6xl"
          animate={{ y: [0, -20, 0], rotate: [0, 5, -5, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
           🚀
        </motion.div>
        <motion.div
          className="absolute top-1/3 right-20 text-4xl"
          animate={{ y: [0, 15, 0], rotate: [0, -10, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        >
          ✨
        </motion.div>
        <motion.div
          className="absolute bottom-1/4 left-1/4 text-5xl"
          animate={{ y: [0, -25, 0], rotate: [0, 15, -15, 0] }}
          transition={{ duration: 6, repeat: Infinity, delay: 2 }}
        >
          🌟
        </motion.div>
      </div>

      <div className="relative z-10 pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Success Header */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="text-center mb-12"
          >
            <motion.div
              className="w-32 h-32 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl mt-4"
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <FaCheck className="w-16 h-16 text-white" />
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-6xl font-bold text-white mb-6"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Welcome to the{" "}
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Revolution!
              </span>
            </motion.h1>

            <motion.p
              className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto leading-relaxed"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              You&apos;re officially registered for{" "}
              <strong>ETH Rwanda Hackathon 2026</strong>. Get ready to build the
              future of Web3 in Africa!
            </motion.p>
          </motion.div>

          {/* Countdown Timer */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 mb-12 border border-white/20 shadow-2xl"
          >
            <h2 className="text-2xl font-bold text-white text-center mb-8 flex items-center justify-center gap-3">
              <FaRocket className="text-yellow-400" />
              Hackathon Starts In
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto">
              {[
                {
                  value: countdown.days,
                  label: "Days",
                  color: "from-purple-500 to-pink-500",
                },
                {
                  value: countdown.hours,
                  label: "Hours",
                  color: "from-blue-500 to-cyan-500",
                },
                {
                  value: countdown.minutes,
                  label: "Minutes",
                  color: "from-green-500 to-emerald-500",
                },
                {
                  value: countdown.seconds,
                  label: "Seconds",
                  color: "from-orange-500 to-red-500",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  className="text-center"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                >
                  <div
                    className={`bg-gradient-to-r ${item.color} rounded-2xl p-4 shadow-lg`}
                  >
                    <div className="text-3xl sm:text-4xl font-bold text-white mb-2">
                      {item.value.toString().padStart(2, "0")}
                    </div>
                    <div className="text-white/80 text-sm font-medium">
                      {item.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Next Steps */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          >
            {[
              {
                icon: FaUsers,
                title: "Join Community",
                description:
                  "Connect with fellow builders in our Discord server",
                action: "Join Discord",
                href: "https://discord.gg/qzECSsvuxu",
                color: "from-purple-500 to-pink-500",
              },
              {
                icon: FaCalendar,
                title: "Pre-Hackathon Events",
                description:
                  "Attend workshops and meetups before the main event",
                action: "View Schedule",
                href: "/events",
                color: "from-blue-500 to-cyan-500",
              },
              {
                icon: FaTrophy,
                title: "Prepare & Learn",
                description: "Access resources to get hackathon-ready",
                action: "Get Resources",
                href: "/hackathons/preparations/resources",
                color: "from-green-500 to-emerald-500",
              },
            ].map((step, index) => (
              <motion.div
                key={step.title}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 group"
                whileHover={{ scale: 1.05 }}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1 + index * 0.1 }}
              >
                <div
                  className={`w-12 h-12 bg-gradient-to-r ${step.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <step.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-blue-200 mb-4 text-sm leading-relaxed">
                  {step.description}
                </p>
                <Link
                  href={step.href}
                  className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-white/30 transition-colors group"
                >
                  {step.action}
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Social Sharing */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="text-center"
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              Spread the Word! 🎉
            </h3>
            <p className="text-blue-200 mb-6 max-w-2xl mx-auto">
              Tell your friends you&apos;re joining Africa&apos;s biggest Web3 hackathon.
              The more builders, the better!
            </p>

            <div className="flex justify-center gap-4 mb-8">
              {[
                {
                  icon: FaTwitter,
                  label: "Share on Twitter",
                  href: "https://twitter.com/intent/tweet?text=I'm%20joining%20the%20ETH%20Rwanda%20Hackathon%202026%20to%20build%20the%20future%20of%20Web3%20in%20Africa%20with%20%40Web3Mates!%20%23ETHRwanda%20%23Web3Africa&url=https%3A%2F%2Fweb3mates.com",
                  color: "bg-blue-400 hover:bg-blue-500",
                },
                {
                  icon: FaLinkedin,
                  label: "Share on LinkedIn",
                  href: "https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fweb3mates.com&summary=I'm%20joining%20the%20ETH%20Rwanda%20Hackathon%202026!%20Rocket%20Building%20the%20future%20of%20Web3%20in%20Africa%20with%20%40Web3Mates%20%23ETHRwanda%20%23Web3Africa",
                  color: "bg-blue-600 hover:bg-blue-700",
                },
                {
                  icon: FaDiscord,
                  label: "Invite Friends",
                  href: "https://discord.gg/qzECSsvuxu",
                  color: "bg-purple-500 hover:bg-purple-600",
                },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${social.color} text-white px-6 py-3 rounded-xl font-medium flex items-center gap-2 transition-colors`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-5 h-5" />
                  {social.label}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Final CTA */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.4 }}
            className="text-center"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-blue-900 px-8 py-4 rounded-2xl font-bold text-lg hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 shadow-2xl hover:shadow-3xl"
            >
              Back to Home
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                
              </motion.span>
            </Link>

            <p className="text-blue-200 mt-4 text-sm">
              Need help?{" "}
              <a
                href="mailto:support@web3mates.com"
                className="text-yellow-400 hover:text-yellow-300 underline"
              >
                Contact our support team
              </a>
            </p>
          </motion.div>

          {/* Celebration Animation */}
          <motion.div
            className="fixed bottom-8 right-8 text-6xl"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 360],
            }}
            transition={{
              scale: { duration: 2, repeat: Infinity },
              rotate: { duration: 4, repeat: Infinity, ease: "linear" },
            }}
          >
             🎊
          </motion.div>
        </div>
      </div>
    </div>
  );
}
