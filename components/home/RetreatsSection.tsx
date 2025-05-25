"use client";

import React, { useState } from "react";
import { retreats, Retreat } from "@/utils/dummyData/retreats";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

function getCountdown(startDate: string) {
  const now = new Date();
  const start = new Date(startDate);
  const diff = start.getTime() - now.getTime();
  if (diff <= 0) return null;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  return `${days}d ${hours}h ${minutes}m`;
}

const categories = [
  "All",
  ...Array.from(new Set(retreats.map((r) => r.category))),
];

const availabilityColors: Record<Retreat["availability"], string> = {
  Available: "bg-teal-600 text-white",
  "Few Spots Left": "bg-yellow-500 text-white animate-pulse",
  "Fully Booked": "bg-red-600 text-white opacity-60",
  "Early Bird Discount": "bg-purple-600 text-white",
};

const RetreatsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredRetreats =
    selectedCategory === "All"
      ? retreats
      : retreats.filter((r) => r.category === selectedCategory);

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0c1425] to-[#0c133a] -z-10"></div>
      <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-teal-500/5 -z-5 blur-3xl"></div>
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-purple-500/5 -z-5 blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-14">
          <motion.p
            className="text-teal-400 mb-3"
            style={{ fontFamily: "'Homemade Apple', cursive" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Upcoming Retreat Dates
          </motion.p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Discover Our Curated Wellness Retreats
          </h2>
          <motion.p
            className="text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Carefully curated wellness retreats designed to promote healing,
            inner peace, and mental clarity.
          </motion.p>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-purple-500 mx-auto mt-6"></div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`relative px-7 py-3 cursor-pointer transition-all duration-300 rounded-xl font-medium text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500/50
                ${
                  selectedCategory === cat
                    ? "bg-gradient-to-r from-teal-700 to-teal-900 text-white shadow-lg border border-teal-600/50"
                    : "bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10"
                }
              `}
              whileHover={{
                y: -5,
                boxShadow: "0 10px 15px -3px rgba(0,0,0,0.1)",
              }}
              whileTap={{ y: 0, scale: 0.98 }}
            >
              {selectedCategory === cat && (
                <motion.span
                  layoutId="activePillRetreats"
                  className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-600/30 to-teal-800/30 backdrop-blur-sm -z-10"
                  initial={false}
                  transition={{ type: "spring", duration: 0.5 }}
                />
              )}
              <span className="relative z-10">{cat}</span>
            </motion.button>
          ))}
        </div>

        {/* Retreats List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredRetreats.map((retreat) => {
            const countdown = getCountdown(retreat.startDate);
            return (
              <motion.div
                key={retreat.id}
                className="relative bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 shadow-xl overflow-hidden flex flex-col"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="relative h-56 w-full">
                  <img
                    src={retreat.image}
                    alt={retreat.title}
                    className="object-cover w-full h-full rounded-t-2xl"
                  />
                  <span
                    className={`absolute top-4 left-4 px-4 py-1 rounded-full text-xs font-semibold ${
                      availabilityColors[retreat.availability]
                    }`}
                  >
                    {retreat.availability}
                  </span>
                  {countdown && (
                    <span className="absolute top-4 right-4 px-4 py-1 rounded-full bg-black/70 text-white text-xs font-semibold">
                      Starts in {countdown}
                    </span>
                  )}
                </div>
                <div className="flex-1 flex flex-col p-6 gap-3">
                  <h3 className="text-2xl font-bold text-white mb-1">
                    {retreat.title}
                  </h3>
                  <p className="text-teal-300 text-sm font-medium mb-1">
                    {retreat.location} &bull; {retreat.duration}
                  </p>
                  <p className="text-gray-300 text-base mb-2">
                    {retreat.description}
                  </p>
                  <ul className="flex flex-wrap gap-2 mb-2">
                    {retreat.highlights.map((h, i) => (
                      <li
                        key={i}
                        className="bg-teal-700/20 text-teal-200 px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {h}
                      </li>
                    ))}
                  </ul>
                  <div className="flex gap-3 mt-auto">
                    <Button
                      className="bg-teal-600 hover:bg-teal-700 text-white font-semibold flex-1"
                      onClick={() => alert("Booking form coming soon!")}
                    >
                      Book Now
                    </Button>
                    <Button
                      variant="outline"
                      className="border-teal-600 text-teal-300 hover:bg-teal-900/20 flex-1"
                      onClick={() => alert("More info coming soon!")}
                    >
                      More Info
                    </Button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Calendar Sync & Consultation */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-16">
          <Button
            className="bg-gradient-to-r from-teal-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg"
            onClick={() => alert("Calendar sync coming soon!")}
          >
            Add Retreats to Calendar
          </Button>
          <Button
            variant="outline"
            className="border-teal-600 text-teal-300 hover:bg-teal-900/20 px-8 py-4 rounded-xl font-semibold"
            onClick={() => alert("Consultation form coming soon!")}
          >
            Schedule Free Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RetreatsSection;
