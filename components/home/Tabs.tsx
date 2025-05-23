"use client";

import {
  MeditationYogaTabScreenData,
  MeditationYogaTabsData,
} from "@/utils/dummyData/tabs";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useRef, useEffect } from "react";
import TabScreen from "../elements/TabScreen";

const MeditationYoga = (): React.JSX.Element => {
  const [activeTab, setActiveTab] = useState(MeditationYogaTabsData[0].value);
  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const tabsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {}, []);

  const handleTabChange = (tabValue: string) => {
    setActiveTab(tabValue);
  };

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen py-24 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0c1425] to-[#0c133a] -z-10"></div>

      {/* Animated gradient overlay for flash effect */}
      <div className="tab-flash-overlay absolute inset-0 bg-teal-500/0 pointer-events-none z-0"></div>

      {/* Decorative elements */}
      <div className="tabs-bg-element absolute top-[15%] left-[5%] w-64 h-64 rounded-full bg-teal-800/10 -z-5 blur-xl"></div>
      <div className="tabs-bg-element absolute bottom-[15%] right-[5%] w-80 h-80 rounded-full bg-purple-800/10 -z-5 blur-xl"></div>

      {/* Rotating mandala decoration */}
      <motion.div
        className="absolute right-[5%] top-[10%] text-teal-500/5 hidden lg:block -z-5"
        animate={{ rotate: 360 }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
      >
        <svg width="400" height="400" viewBox="0 0 100 100" fill="currentColor">
          <g>
            <path d="M50,0 C60,30 80,50 100,50 C80,50 60,70 50,100 C40,70 20,50 0,50 C20,50 40,30 50,0 Z" />
            <path d="M50,20 C56,40 70,56 90,60 C70,64 56,80 50,100 C44,80 30,64 10,60 C30,56 44,40 50,20 Z" />
            <path d="M50,30 C54,45 65,58 80,62 C65,66 54,80 50,95 C46,80 35,66 20,62 C35,58 46,45 50,30 Z" />
          </g>
        </svg>
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.p
            className="text-teal-400 mb-3"
            style={{ fontFamily: "'Homemade Apple', cursive" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Discover Our Practices
          </motion.p>
          <h2
            ref={headingRef}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Holistic Wellness Journey
          </h2>
          <motion.p
            className="text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Explore our complete suite of services designed to nurture mind,
            body, and spirit connection.
          </motion.p>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-purple-500 mx-auto mt-6"></div>
        </div>

        {/* Tabs Container */}
        <div
          ref={tabsRef}
          className="flex flex-wrap justify-center gap-4 mb-10"
        >
          {MeditationYogaTabsData.map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => handleTabChange(tab.value)}
              className={`tab-button relative px-7 py-4 cursor-pointer transition-all duration-300 rounded-xl ${
                activeTab === tab.value
                  ? "bg-gradient-to-r from-teal-700 to-teal-900 text-white shadow-lg border border-teal-600/50"
                  : "bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10"
              }`}
              whileHover={{
                y: -5,
                boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
              }}
              whileTap={{ y: 0, scale: 0.98 }}
            >
              {activeTab === tab.value && (
                <motion.span
                  layoutId="activePill"
                  className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-600/30 to-teal-800/30 backdrop-blur-sm -z-10"
                  initial={false}
                  transition={{ type: "spring", duration: 0.5 }}
                />
              )}
              <span className="relative z-10 font-medium">{tab.label}</span>
            </motion.button>
          ))}
        </div>

        <div className="relative bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 shadow-xl">
          <AnimatePresence mode="wait">
            {MeditationYogaTabScreenData.map((tabData) => {
              if (tabData.id.toString() === activeTab) {
                return (
                  <motion.div
                    key={tabData.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                  >
                    <TabScreen TabScreenData={tabData} />
                  </motion.div>
                );
              }
              return null;
            })}
          </AnimatePresence>

          {/* Decorative corner accents */}
          <div className="absolute top-0 left-0 w-20 h-20 border-l-2 border-t-2 border-teal-500/30 rounded-tl-2xl -m-1"></div>
          <div className="absolute bottom-0 right-0 w-20 h-20 border-r-2 border-b-2 border-teal-500/30 rounded-br-2xl -m-1"></div>
        </div>

        {/* Additional info section */}
        <motion.div
          className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="w-12 h-12 bg-teal-800/50 rounded-full flex items-center justify-center mb-4 text-teal-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-white text-xl font-semibold mb-2">
              Flexible Scheduling
            </h3>
            <p className="text-gray-300">
              Choose from morning, afternoon, and evening sessions to fit your
              lifestyle.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="w-12 h-12 bg-teal-800/50 rounded-full flex items-center justify-center mb-4 text-teal-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                />
              </svg>
            </div>
            <h3 className="text-white text-xl font-semibold mb-2">
              Expert Instructors
            </h3>
            <p className="text-gray-300">
              Learn from certified professionals with years of experience in
              mindfulness practices.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="w-12 h-12 bg-teal-800/50 rounded-full flex items-center justify-center mb-4 text-teal-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                />
              </svg>
            </div>
            <h3 className="text-white text-xl font-semibold mb-2">
              Quality Assurance
            </h3>
            <p className="text-gray-300">
              All our programs undergo rigorous quality checks to ensure optimal
              outcomes.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="w-12 h-12 bg-teal-800/50 rounded-full flex items-center justify-center mb-4 text-teal-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                />
              </svg>
            </div>
            <h3 className="text-white text-xl font-semibold mb-2">
              Personalized Experience
            </h3>
            <p className="text-gray-300">
              Custom programs that adapt to your specific needs and wellness
              goals.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MeditationYoga;
