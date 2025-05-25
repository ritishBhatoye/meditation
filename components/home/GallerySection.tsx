// GallerySection.tsx
"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import "keen-slider/keen-slider.min.css";

const GALLERY_IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    caption: "Peaceful Lake - Event",
    category: "Events",
  },
  {
    src: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80",
    caption: "Yoga Workshop - Workshop",
    category: "Workshops",
  },
  {
    src: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80",
    caption: "Studio Session - Studio",
    category: "Studio",
  },
  {
    src: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=80",
    caption: "Testimonial Moment - Testimonials",
    category: "Testimonials",
  },
  {
    src: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=800&q=80",
    caption: "Outdoor Meditation - Events",
    category: "Events",
  },
  {
    src: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80",
    caption: "Group Workshop - Workshop",
    category: "Workshops",
  },
  {
    src: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80",
    caption: "Studio Practice - Studio",
    category: "Studio",
  },
  {
    src: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=80",
    caption: "Happy Client - Testimonials",
    category: "Testimonials",
  },
];

const CATEGORIES = [
  "All",
  "Events",
  "Workshops",
  "Studio",
  "Treatment",
  "Testimonials",
];

const gridVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.08, duration: 0.7 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
};

const GallerySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [modalOpen, setModalOpen] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);
  const filteredImages =
    selectedCategory === "All"
      ? GALLERY_IMAGES
      : GALLERY_IMAGES.filter((img) => img.category === selectedCategory);

  // Keen Slider for modal
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: modalIndex,
    loop: true,
    slideChanged(s) {
      setModalIndex(s.track.details.rel);
    },
  });

  // Open modal at index
  const openModal = (idx: number) => {
    setModalIndex(idx);
    setModalOpen(true);
  };

  // Modal close
  const closeModal = () => setModalOpen(false);

  return (
    <section className="relative  overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0c1425] to-[#0c133a] -z-10"></div>
      {/* Decorative backgrounds */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-teal-500/5 -z-5 blur-3xl"></div>
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-purple-500/5 -z-5 blur-3xl"></div>

      <div className="container mx-auto px-2 sm:px-4 lg:px-8 relative z-10">
        <div className="text-center mb-8 sm:mb-12 md:mb-14">
          <motion.p
            className="text-teal-400 mb-2 sm:mb-3 text-base sm:text-lg"
            style={{ fontFamily: "'Homemade Apple', cursive" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Gallery
          </motion.p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
            Featured Moments
          </h2>
          <motion.p
            className="text-gray-300 max-w-2xl mx-auto text-base sm:text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Explore our curated gallery of events, workshops, and studio
            moments.
          </motion.p>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-teal-500 to-purple-500 mx-auto mt-4 sm:mt-6"></div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-6 sm:mb-10">
          {CATEGORIES.map((cat) => (
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
                  layoutId="activePillGallery"
                  className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-600/30 to-teal-800/30 backdrop-blur-sm -z-10"
                  initial={false}
                  transition={{ type: "spring", duration: 0.5 }}
                />
              )}
              <span className="relative z-10">{cat}</span>
            </motion.button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-6"
          variants={gridVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredImages.slice(0, 8).map((img, idx) => (
            <motion.div
              key={img.src + idx}
              className="relative group overflow-hidden rounded-2xl shadow-lg border border-white/10 bg-white/5 backdrop-blur-sm cursor-pointer"
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              onClick={() => openModal(idx)}
            >
              <Image
                src={img.src}
                alt={img.caption}
                width={400}
                height={300}
                className="object-cover w-full h-48 sm:h-56 md:h-60 transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
                style={{ borderRadius: "1rem" }}
              />
              <motion.div
                className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-3 text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              >
                {img.caption}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* See More & View More Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 pt-12 justify-center">
          <Button
            onClick={() => openModal(0)}
            className="bg-teal-600 text-white px-8 py-4 rounded-xl font-medium shadow-lg hover:bg-teal-700 transition"
          >
            See More
          </Button>
          <Button
            variant="outline"
            className="border-2 border-white/50 text-white px-8 py-4 rounded-xl font-medium hover:border-white hover:bg-white/10 transition"
            // onClick={() => router.push("/gallery")}
          >
            View More
          </Button>
        </div>
      </div>

      {/* Modal/Lightbox */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="relative w-full max-w-3xl mx-auto p-4">
              <div
                className="absolute top-4 right-4 z-10 cursor-pointer text-white bg-black/40 rounded-full p-2 hover:bg-black/70 transition"
                onClick={closeModal}
                aria-label="Close Gallery Modal"
              >
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </div>
              <div
                ref={sliderRef}
                className="keen-slider rounded-2xl overflow-hidden"
              >
                {filteredImages.map((img, idx) => (
                  <div
                    key={img.src + idx}
                    className="keen-slider__slide flex flex-col items-center justify-center"
                  >
                    <Image
                      src={img.src}
                      alt={img.caption}
                      width={800}
                      height={600}
                      className="object-contain max-h-[70vh] w-auto mx-auto rounded-2xl"
                      loading="lazy"
                    />
                    <div className="mt-4 text-white text-center text-base font-medium">
                      {img.caption}
                    </div>
                  </div>
                ))}
              </div>
              {/* Modal navigation */}
              <div className="flex justify-between mt-6">
                <Button
                  variant="outline"
                  className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-teal-700 transition-colors"
                  onClick={() => instanceRef.current?.prev()}
                  aria-label="Previous image"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 19.5L8.25 12l7.5-7.5"
                    />
                  </svg>
                </Button>
                <Button
                  variant="outline"
                  className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-teal-700 transition-colors"
                  onClick={() => instanceRef.current?.next()}
                  aria-label="Next image"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;
