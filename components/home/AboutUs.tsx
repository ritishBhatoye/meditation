"use client";

import React, { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import InfoCard from "@/components/elements/InfoCard";
import { MeditationHomeAboutUsData } from "@/utils/dummyData/aboutUs";

const HomeAboutUs = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  useEffect(() => {}, [isInView]);

  return (
    <div
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-10 sm:py-14 md:py-20"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#1a1a2e] to-[#0c133a] z-0"></div>

      {/* Animated gradient overlay */}
      <div className="about-gradient-overlay absolute inset-0 bg-gradient-to-tl from-[#4C1D95]/30 to-[#0d9488]/20 z-10"></div>

      {/* Decorative elements */}
      <motion.div
        className="absolute top-10 left-4 sm:top-20 sm:left-20 w-32 h-32 sm:w-64 sm:h-64 rounded-full bg-teal-900/10 z-10 hidden md:block"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          repeat: Infinity,
          duration: 15,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-10 right-4 sm:bottom-20 sm:right-20 w-40 h-40 sm:w-80 sm:h-80 rounded-full bg-purple-900/10 z-10 hidden md:block"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.1, 0.2],
        }}
        transition={{
          repeat: Infinity,
          duration: 18,
          ease: "easeInOut",
        }}
      />

      {/* SVG lotus decoration */}
      <motion.div
        className="absolute top-1/4 right-2 sm:right-10 text-teal-500/10 z-10 hidden lg:block"
        animate={{ rotate: [0, 360] }}
        transition={{ repeat: Infinity, duration: 120, ease: "linear" }}
      >
        <svg width="120" height="120" viewBox="0 0 100 100" fill="currentColor">
          <path d="M50,0 C60,30 80,50 100,50 C80,50 60,70 50,100 C40,70 20,50 0,50 C20,50 40,30 50,0 Z" />
        </svg>
      </motion.div>

      {/* Content */}
      <div className="container max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8 z-20">
        <div className="text-center mb-10 sm:mb-16">
          <h4
            className="text-teal-400 mb-2 sm:mb-3 tracking-wide text-base sm:text-lg md:text-xl"
            style={{ fontFamily: "&apos;Homemade Apple&apos;, cursive" }}
          >
            Journey With Us
          </h4>
          <h2
            ref={headingRef}
            className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6"
          >
            Discover Your Inner Balance
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-teal-500 to-purple-500 mx-auto"></div>
        </div>

        <div className="space-y-16 sm:space-y-24">
          {MeditationHomeAboutUsData.map((aboutUs, index) => (
            <motion.div
              key={aboutUs.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <InfoCard
                title={aboutUs.title}
                subTitle={aboutUs.subTitle}
                description={aboutUs.description}
                imgSrc={aboutUs.imgSrc}
                className="p-4 sm:p-6 md:p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 shadow-xl"
                containerWithImageClassName={`grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full items-center justify-between`}
                dir={`${aboutUs.id % 2 === 0 ? "rtl" : "ltr"}`}
                ctaLabel={aboutUs.id !== 2 ? aboutUs.ctaLabel : ""}
                sectionClassName="items-start text-white space-y-2 sm:space-y-4"
                ctaClassName={
                  aboutUs.id !== 2
                    ? "px-6 sm:px-8 py-3 sm:py-4 bg-teal-600 hover:bg-teal-700 text-white rounded-xl transition-colors shadow-lg text-base sm:text-lg"
                    : "bg"
                }
              />

              {/* Decorative line after each section except the last */}
              {index < MeditationHomeAboutUsData.length - 1 && (
                <div className="w-full flex justify-center mt-8 sm:mt-12">
                  <motion.div
                    className="w-1/3 sm:w-1/2 h-px bg-white/10"
                    initial={{ width: 0 }}
                    whileInView={{ width: "50%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                  />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Additional meditation benefits section */}
        <motion.div
          className="mt-16 sm:mt-24 p-4 sm:p-8 rounded-2xl bg-gradient-to-r from-black/50 to-purple-900/20 backdrop-blur-sm border border-white/10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="text-center p-4 sm:p-6">
              <motion.div
                className="w-12 sm:w-16 h-12 sm:h-16 mx-auto mb-3 sm:mb-4 text-teal-400"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                  <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                </svg>
              </motion.div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-white">
                Mindful Awareness
              </h3>
              <p className="text-gray-300 text-sm sm:text-base">
                Develop a deeper connection to the present moment through guided
                meditation practices.
              </p>
            </div>

            <div className="text-center p-4 sm:p-6">
              <motion.div
                className="w-12 sm:w-16 h-12 sm:h-16 mx-auto mb-3 sm:mb-4 text-teal-400"
                whileHover={{ scale: 1.1, rotate: -5 }}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4.93 19.07A10 10 0 0 1 2 12C2 6.48 6.48 2 12 2s10 4.48 10 10c0 4.12-2.5 7.67-6.07 9.2"></path>
                  <path d="M10 12a2 2 0 1 0 4 0 2 2 0 0 0-4 0z"></path>
                  <path d="M14 18a4 4 0 0 0 0-8"></path>
                </svg>
              </motion.div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-white">
                Stress Reduction
              </h3>
              <p className="text-gray-300 text-sm sm:text-base">
                Learn techniques that have been proven to lower cortisol levels
                and reduce daily stress.
              </p>
            </div>

            <div className="text-center p-4 sm:p-6">
              <motion.div
                className="w-12 sm:w-16 h-12 sm:h-16 mx-auto mb-3 sm:mb-4 text-teal-400"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 8v8"></path>
                  <path d="M8 12h8"></path>
                </svg>
              </motion.div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-white">
                Self-Healing
              </h3>
              <p className="text-gray-300 text-sm sm:text-base">
                Activate your body's natural healing abilities through
                specialized breathing and meditation.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HomeAboutUs;
