"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Check } from "lucide-react";

interface Interest {
  id: string;
  label: string;
}

const interests: Interest[] = [
  { id: "yoga", label: "Yoga" },
  { id: "meditation", label: "Meditation" },
  { id: "therapy", label: "Emotional Therapy" },
];

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement newsletter subscription logic
    // For now, just simulate success
    setIsSubscribed(true);
    setTimeout(() => setIsSubscribed(false), 3000);
  };

  const toggleInterest = (interestId: string) => {
    setSelectedInterests((prev) =>
      prev.includes(interestId)
        ? prev.filter((id) => id !== interestId)
        : [...prev, interestId]
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative overflow-hidden  p-8"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0c1425] to-[#0c133a] -z-10"></div>
      {/* Decorative backgrounds */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-teal-500/5 -z-5 blur-3xl"></div>
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-purple-500/5 -z-5 blur-3xl"></div>

      <div className="w-11/12 px-6 mx-auto relative z-10 flex flex-col md:flex-row gap-10 items-center justify-between">
        {/* Left: Content */}
        <div className="flex-1 space-y-6">
          <motion.p
            className="text-teal-400 mb-3 text-lg"
            style={{ fontFamily: "'Homemade Apple', cursive" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Stay Connected
          </motion.p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Join Our Healing Community
          </h2>
          <p className="text-gray-300 mb-4 text-lg">
            Get updates on new retreats, healing tips, and exclusive wellness
            content. Be the first to know about special offers and events!
          </p>
          <ul className="list-disc list-inside text-teal-300 mb-4 space-y-1 pl-2">
            <li>Exclusive wellness tips & resources</li>
            <li>Early access to retreats & workshops</li>
            <li>Special subscriber-only offers</li>
            <li>Monthly inspiration for your journey</li>
          </ul>
          <div className="bg-white/10 rounded-xl p-4 border border-white/10 shadow-lg max-w-md">
            <p className="text-white text-base italic mb-2">
              “The monthly emails are always so uplifting and full of practical
              advice. I love being part of this community!”
            </p>
            <span className="text-teal-300 text-sm font-medium">
              — Priya S., Subscriber
            </span>
          </div>
        </div>
        {/* Right: Form */}
        <div className="flex-1 w-full max-w-md">
          {!isSubscribed ? (
            <form
              onSubmit={handleSubmit}
              className="space-y-4 bg-white/5 p-6 rounded-xl border border-white/10 shadow-xl"
            >
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all duration-200"
                />
              </div>
              <div className="space-y-2">
                <p className="text-sm text-gray-300">Select your interests:</p>
                <div className="flex flex-wrap gap-2">
                  {interests.map((interest) => (
                    <button
                      key={interest.id}
                      type="button"
                      onClick={() => toggleInterest(interest.id)}
                      className={`px-4 py-2 rounded-full text-sm transition-all duration-200 ${
                        selectedInterests.includes(interest.id)
                          ? "bg-teal-500/20 text-teal-400 border-2 border-teal-500/30 shadow"
                          : "bg-white/10 text-gray-300 border-2 border-white/20 hover:border-teal-500/30"
                      }`}
                    >
                      {interest.label}
                    </button>
                  ))}
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-gradient-to-r from-teal-500 to-teal-600 text-white py-3 rounded-lg font-semibold text-lg shadow-lg hover:from-teal-600 hover:to-teal-700 transition-colors duration-200"
              >
                Subscribe to Newsletter
              </motion.button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-8 bg-white/10 rounded-xl border border-white/10 shadow-xl"
            >
              <Check className="w-12 h-12 text-teal-400 mx-auto mb-3" />
              <p className="text-lg text-gray-200 font-medium">
                You're now part of our healing community!
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
