"use client";

import React, { useState } from "react";
import { retreats, Retreat } from "@/utils/dummyData/retreats";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

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

const coreExperiences = [
  {
    title: "Healing Yoga",
    image:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80",
    description:
      "Experience the transformative power of yoga in serene natural settings, guided by expert instructors to help you reconnect with your body and mind.",
    link: "#",
  },
  {
    title: "Silent Meditation",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    description:
      "Immerse yourself in silence and mindfulness, cultivating inner peace and clarity through guided and self-led meditation sessions.",
    link: "#",
  },
  {
    title: "Emotional Therapy",
    image:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=80",
    description:
      "Heal emotional wounds and foster resilience with therapeutic workshops and compassionate support in a nurturing environment.",
    link: "#",
  },
  {
    title: "Spiritual Detox",
    image:
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80",
    description:
      "Cleanse your spirit and rejuvenate your soul with holistic practices, ancient rituals, and mindful living experiences.",
    link: "#",
  },
];

const testimonials = [
  {
    quote:
      "This retreat was a life-changing experience. I found peace, clarity, and a renewed sense of purpose.",
    author: "Priya S.",
  },
  {
    quote:
      "The instructors and the environment were simply magical. I can't wait to come back!",
    author: "Rahul M.",
  },
  {
    quote:
      "Every moment was filled with learning, healing, and joy. Highly recommended for anyone seeking transformation.",
    author: "Anjali K.",
  },
];

const RetreatsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [carouselIdx, setCarouselIdx] = useState(0);
  const [carouselDir, setCarouselDir] = useState(0); // -1 for left, 1 for right
  const [testimonialIdx, setTestimonialIdx] = useState(0);

  const filteredRetreats =
    selectedCategory === "All"
      ? retreats
      : retreats.filter((r) => r.category === selectedCategory);

  // Carousel handlers
  const handlePrev = () => {
    setCarouselDir(-1);
    setCarouselIdx((prev) =>
      prev === 0 ? coreExperiences.length - 1 : prev - 1
    );
  };
  const handleNext = () => {
    setCarouselDir(1);
    setCarouselIdx((prev) =>
      prev === coreExperiences.length - 1 ? 0 : prev + 1
    );
  };

  // Testimonial handlers
  const handleTestimonialPrev = () => {
    setTestimonialIdx((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };
  const handleTestimonialNext = () => {
    setTestimonialIdx((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <motion.section
      className="relative py-24 overflow-hidden"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0c1425] to-[#0c133a] -z-10"></div>
      <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-teal-500/5 -z-5 blur-3xl"></div>
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-purple-500/5 -z-5 blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Mission Statement */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.7 }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4 tracking-tight">
            Journey Inward, Emerge Renewed
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Our retreats are sanctuaries for self-discovery, healing, and
            holistic growth. Whether you seek tranquility, transformation, or
            community, we offer immersive experiences to nurture your mind,
            body, and soul.
          </p>
        </motion.div>

        {/* Section Heading */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
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
            inner peace, and mental clarity. Join us to experience a blend of
            ancient wisdom and modern practices, all set in breathtaking
            locations.
          </motion.p>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-purple-500 mx-auto mt-6"></div>
        </motion.div>

        {/* Retreat Experiences Carousel */}
        <div className="text-center mb-4">
          <div className="inline-block bg-teal-900/40 text-teal-200 rounded-full px-5 py-2 text-sm font-semibold mb-2">
            <span role="img" aria-label="healing">
              💚
            </span>{" "}
            Each experience is designed to nurture your mind, ease anxiety, and
            support emotional healing in a peaceful, supportive environment.
          </div>
          <p className="text-gray-300 text-base max-w-xl mx-auto mt-2">
            Whether you're seeking relief from stress, depression, or simply
            want to reconnect with yourself, our core retreat experiences offer
            proven pathways to inner peace and transformation.
          </p>
        </div>
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-2">
            <span role="img" aria-label="yoga">
              🧘
            </span>{" "}
            Retreat Experiences
          </h3>
          <div className="relative max-w-2xl mx-auto">
            <div className="flex items-center justify-between">
              <button
                aria-label="Previous Experience"
                className="p-2 rounded-full bg-black/30 hover:bg-teal-700/60 text-white transition"
                onClick={handlePrev}
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <motion.div
                key={carouselIdx}
                className="flex-1 mx-4"
                initial={{
                  x: carouselDir === 1 ? 200 : -200,
                  opacity: 0,
                  scale: 0.95,
                }}
                animate={{ x: 0, opacity: 1, scale: 1 }}
                exit={{
                  x: carouselDir === 1 ? -200 : 200,
                  opacity: 0,
                  scale: 0.95,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <div className="relative group aspect-[3/2] w-full h-full block focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 transition-all duration-200 rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src={coreExperiences[carouselIdx].image}
                    alt={coreExperiences[carouselIdx].title}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                    draggable={false}
                  />
                  <div className="absolute top-4 left-4 bg-teal-700/80 text-white text-xs font-semibold px-4 py-1 rounded-full shadow-lg flex items-center gap-2 z-10">
                    <span role="img" aria-label="mind">
                      🧠
                    </span>
                    Mental Wellness Focus
                  </div>
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300 flex flex-col items-center justify-center">
                    <div className="backdrop-blur-sm bg-black/30 rounded-xl px-4 py-2 mb-3 text-lg md:text-xl font-semibold text-white shadow-lg">
                      {coreExperiences[carouselIdx].title}
                    </div>
                    <p className="text-gray-200 text-center px-6 mb-4 text-base md:text-lg max-w-md">
                      {coreExperiences[carouselIdx].description}
                    </p>
                    <Button
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-teal-600 hover:bg-teal-700 text-white font-semibold px-6 py-2 rounded-lg shadow-lg"
                      onClick={(e) => {
                        e.preventDefault();
                        alert(
                          `Booking for ${coreExperiences[carouselIdx].title} coming soon!`
                        );
                      }}
                    >
                      Book
                    </Button>
                  </div>
                </div>
              </motion.div>
              <button
                aria-label="Next Experience"
                className="p-2 rounded-full bg-black/30 hover:bg-teal-700/60 text-white transition"
                onClick={handleNext}
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
            {/* Dots */}
            <div className="flex justify-center gap-2 mt-4">
              {coreExperiences.map((_, idx) => (
                <button
                  key={idx}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    idx === carouselIdx
                      ? "bg-teal-500 scale-125 shadow-lg"
                      : "bg-gray-500/40"
                  }`}
                  onClick={() => {
                    setCarouselDir(idx > carouselIdx ? 1 : -1);
                    setCarouselIdx(idx);
                  }}
                  aria-label={`Go to experience ${idx + 1}`}
                />
              ))}
            </div>
          </div>
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
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {filteredRetreats.map((retreat, idx) => {
            const countdown = getCountdown(retreat.startDate);
            return (
              <motion.div
                key={retreat.id}
                className="relative bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 shadow-xl overflow-hidden flex flex-col"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
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
                    {retreat.description}{" "}
                    <span className="text-teal-400 font-semibold">
                      Learn more about our unique approach to wellness and
                      personal growth.
                    </span>
                  </p>
                  {/* Mental Health Statement */}
                  <div className="bg-teal-900/30 text-teal-200 rounded-lg px-4 py-2 mb-2 text-sm font-semibold flex items-center gap-2">
                    <span role="img" aria-label="healing">
                      💚
                    </span>
                    <span>
                      Find peace, support, and transformation. Our retreats are
                      designed for those seeking relief from stress, depression,
                      or anxiety—offering a safe space for healing and renewal
                      through mindfulness, yoga, and compassionate community.
                    </span>
                  </div>
                  {/* Retreat Experiences */}
                  <div className="mb-2">
                    <div className="font-semibold text-teal-300 text-xs mb-1 flex items-center gap-2">
                      <span role="img" aria-label="lotus">
                        🪷
                      </span>{" "}
                      Retreat Experiences
                    </div>
                    <ul className="flex flex-wrap gap-2">
                      <li className="flex items-center gap-1 bg-teal-700/20 text-teal-100 px-2 py-1 rounded-full text-xs font-medium">
                        <span role="img" aria-label="meditation">
                          🧘‍♂️
                        </span>{" "}
                        Meditation
                      </li>
                      <li className="flex items-center gap-1 bg-teal-700/20 text-teal-100 px-2 py-1 rounded-full text-xs font-medium">
                        <span role="img" aria-label="yoga">
                          🧘‍♀️
                        </span>{" "}
                        Yoga
                      </li>
                      <li className="flex items-center gap-1 bg-teal-700/20 text-teal-100 px-2 py-1 rounded-full text-xs font-medium">
                        <span role="img" aria-label="nature">
                          🌲
                        </span>{" "}
                        Nature Therapy
                      </li>
                      <li className="flex items-center gap-1 bg-teal-700/20 text-teal-100 px-2 py-1 rounded-full text-xs font-medium">
                        <span role="img" aria-label="group">
                          🤝
                        </span>{" "}
                        Group Support
                      </li>
                      <li className="flex items-center gap-1 bg-teal-700/20 text-teal-100 px-2 py-1 rounded-full text-xs font-medium">
                        <span role="img" aria-label="mindfulness">
                          🧠
                        </span>{" "}
                        Mindfulness
                      </li>
                    </ul>
                  </div>
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
        </motion.div>

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

        {/* Testimonials Section */}
        <motion.div
          className="mt-24 max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <h4 className="text-2xl md:text-3xl font-bold text-white mb-6">
            What Our Guests Say
          </h4>
          <div className="relative bg-white/5 rounded-2xl p-8 shadow-lg border border-white/10">
            <motion.blockquote
              key={testimonialIdx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-lg md:text-xl text-gray-200 mb-4"
            >
              “{testimonials[testimonialIdx].quote}”
            </motion.blockquote>
            <div className="text-teal-400 font-semibold mb-2">
              {testimonials[testimonialIdx].author}
            </div>
            <div className="flex justify-center gap-3 mt-2">
              <button
                aria-label="Previous Testimonial"
                className="p-2 rounded-full bg-black/30 hover:bg-teal-700/60 text-white transition"
                onClick={handleTestimonialPrev}
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                aria-label="Next Testimonial"
                className="p-2 rounded-full bg-black/30 hover:bg-teal-700/60 text-white transition"
                onClick={handleTestimonialNext}
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default RetreatsSection;
