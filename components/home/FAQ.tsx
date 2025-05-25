"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqData = [
  {
    category: "Meditation",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6c0 6-6 6-6 12h12c0-6-6-6-6-12z"
        />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v2" />
        <circle cx="12" cy="14" r="4" />
      </svg>
    ),
    questions: [
      {
        question: "What type of meditation is best for beginners?",
        answer:
          "Mindfulness meditation is a great start. It focuses on breathing and awareness of the present moment, making it accessible for beginners. We recommend starting with our guided mindfulness sessions, which provide step-by-step instructions in a supportive environment.",
      },
      {
        question: "How long should I meditate daily?",
        answer:
          "Start with 5–10 minutes daily and gradually increase as you become comfortable. Consistency is more important than duration—practicing briefly every day is more beneficial than a single long session once a week. Our app offers timer settings to help you keep track of your practice time.",
      },
      {
        question: "Can I meditate at any time of day?",
        answer:
          "Yes, meditation can be practiced at any time. However, many practitioners find early morning or evening sessions most effective, as these times often offer quieter environments with fewer distractions. Experiment to find what works best for your schedule and energy levels.",
      },
    ],
  },
  {
    category: "Yoga",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6.5 12c.94 0 1.75-.46 2.28-1.18.43.72 1.24 1.18 2.22 1.18s1.79-.46 2.22-1.18c.53.72 1.34 1.18 2.28 1.18s1.75-.46 2.28-1.18c.43.72 1.24 1.18 2.22 1.18V9c-.98 0-1.79.46-2.22 1.18-.53-.72-1.34-1.18-2.28-1.18s-1.75.46-2.28 1.18C11.79 9.46 10.98 9 10 9s-1.79.46-2.22 1.18C7.25 9.46 6.44 9 5.5 9v3z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5 22c0-4.5 5.5-5 5.5-8.5C10.5 10 9 9 7 9c-2.5 0-4 3-4 5 0 4.5 5.5 5 5.5 8.5-2.5 0-5.5-2.5-5.5-5"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19 22c0-4.5-5.5-5-5.5-8.5 0-3.5 1.5-4.5 3.5-4.5 2.5 0 4 3 4 5 0 4.5-5.5 5-5.5 8.5 2.5 0 5.5-2.5 5.5-5"
        />
      </svg>
    ),
    questions: [
      {
        question: "Do I need to be flexible to do yoga?",
        answer:
          "Not at all. Yoga improves flexibility over time. Just start where you are. Our classes accommodate all levels with modifications for every pose. Remember, yoga is about your personal journey, not comparing yourself to others. You'll gradually notice increased flexibility as you continue your practice.",
      },
      {
        question: "Which yoga style is suitable for stress relief?",
        answer:
          "Hatha and restorative yoga are excellent for reducing stress and calming the mind. Yin yoga is also wonderful for deep relaxation. These gentle practices focus on longer-held poses and deep breathing, which activate your parasympathetic nervous system—your body's natural relaxation response.",
      },
      {
        question: "How often should I practice yoga for best results?",
        answer:
          "For noticeable benefits, aim for 2-3 sessions per week. However, even one consistent session weekly can bring positive changes. Listen to your body and adjust accordingly. Many of our members find that shorter, more frequent sessions (20-30 minutes, 4-5 times weekly) work best for integrating yoga into busy lifestyles.",
      },
    ],
  },
  {
    category: "Therapy",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 12a4 4 0 100-8 4 4 0 000 8z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16 8v5a3 3 0 01-6 0v-1M8 9v1a3 3 0 006 0v-5"
        />
      </svg>
    ),
    questions: [
      {
        question: "Can I book a virtual therapy session?",
        answer:
          "Yes, we offer both in-person and virtual therapy sessions to suit your comfort. Our secure platform ensures confidentiality and provides a seamless experience. Virtual sessions offer flexibility with the same quality of care, making therapy accessible regardless of your location or scheduling constraints.",
      },
      {
        question: "How do I choose the right therapist?",
        answer:
          "You can view profiles, specialties, and book free intro calls to find your ideal match. We recommend trying intro sessions with 2-3 therapists to find the best connection. Our therapists specialize in various approaches including mindfulness-based cognitive therapy, somatic experiencing, and traditional talk therapy.",
      },
      {
        question: "How does yoga therapy differ from regular therapy?",
        answer:
          "Yoga therapy integrates traditional therapeutic approaches with yogic practices, addressing both mental and physical aspects of wellbeing. It combines breathwork, gentle movement, meditation, and psychological techniques to create a holistic healing experience. This mind-body approach can be particularly effective for stress, anxiety, and trauma recovery.",
      },
    ],
  },
];

const Faq = () => {
  const [active, setActive] = useState(faqData[0].category);
  const [open, setOpen] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {}, []);

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden py-24 px-4 sm:px-6 lg:px-8"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#1a1a2e] to-[#0c133a] -z-10"></div>

      {/* Decorative elements */}
      <div className="faq-bg-element absolute top-20 left-[5%] w-64 h-64 rounded-full bg-teal-800/10 -z-10"></div>
      <div className="faq-bg-element absolute bottom-20 right-[5%] w-80 h-80 rounded-full bg-purple-800/10 -z-10"></div>

      {/* Animated circular path */}
      <motion.div
        className="absolute right-[15%] top-[20%] opacity-5 -z-10 hidden lg:block"
        animate={{ rotate: 360 }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <svg width="300" height="300" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="currentColor"
            strokeWidth="0.5"
            fill="none"
          />
        </svg>
      </motion.div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-12 md:mb-14">
          <motion.p
            className="text-teal-400 mb-2 sm:mb-3 text-base sm:text-lg"
            style={{ fontFamily: "&apos;Homemade Apple&apos;, cursive" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Find Your Answers
          </motion.p>
          <h2
            ref={headingRef}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6"
          >
            Frequently Asked Questions
          </h2>
          <motion.p
            className="text-gray-300 max-w-2xl mx-auto text-base sm:text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            Explore our comprehensive guide to common questions about yoga,
            meditation, and therapeutic practices.
          </motion.p>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-teal-500 to-purple-500 mx-auto mt-4 sm:mt-6"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 md:gap-8">
          {/* Categories */}
          <div className="lg:col-span-1">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-white/10 shadow-xl">
              {faqData.map(({ category, icon }, i) => (
                <motion.div
                  key={i}
                  onClick={() => setActive(category)}
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.98 }}
                  className={`cursor-pointer py-4 px-3 flex items-center gap-3 rounded-xl mb-2 transition-all ${
                    active === category
                      ? "bg-gradient-to-r from-teal-900/50 to-teal-800/30 text-white"
                      : "text-gray-400 hover:bg-white/5"
                  }`}
                >
                  <span
                    className={
                      active === category ? "text-teal-400" : "text-gray-500"
                    }
                  >
                    {icon}
                  </span>
                  <span className="font-medium">{category}</span>
                  <motion.span
                    className="ml-auto text-lg"
                    animate={{ rotate: active === category ? 90 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {active === category ? "→" : "↗"}
                  </motion.span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Questions and Answers */}
          <div className="lg:col-span-3">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/10 shadow-xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-2xl font-semibold text-white mb-6 flex items-center">
                    <span className="text-teal-400 mr-3">
                      {faqData.find((f) => f.category === active)?.icon}
                    </span>
                    {active} Questions
                  </h3>

                  <div className="space-y-4">
                    {faqData
                      .find((f) => f.category === active)
                      ?.questions.map(({ question, answer }, i) => (
                        <motion.div
                          key={question}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ delay: i * 0.1 }}
                          className="overflow-hidden"
                        >
                          <motion.div
                            onClick={() =>
                              setOpen(open === question ? null : question)
                            }
                            className="cursor-pointer border-b border-white/10 py-4 flex justify-between items-center"
                            whileHover={{
                              backgroundColor: "rgba(255,255,255,0.03)",
                            }}
                          >
                            <span className="font-medium text-white">
                              {question}
                            </span>
                            <motion.div
                              animate={{ rotate: open === question ? 45 : 0 }}
                              transition={{ duration: 0.3 }}
                              className={`h-6 w-6 flex items-center justify-center rounded-full ${
                                open === question
                                  ? "bg-teal-700 text-white"
                                  : "bg-white/10 text-teal-400"
                              }`}
                            >
                              {open === question ? "×" : "+"}
                            </motion.div>
                          </motion.div>

                          <AnimatePresence>
                            {open === question && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{
                                  height: "auto",
                                  opacity: 1,
                                  transition: {
                                    height: { duration: 0.3 },
                                    opacity: { duration: 0.3, delay: 0.1 },
                                  },
                                }}
                                exit={{
                                  height: 0,
                                  opacity: 0,
                                  transition: {
                                    height: { duration: 0.3 },
                                    opacity: { duration: 0.1 },
                                  },
                                }}
                                className="overflow-hidden"
                              >
                                <div className="py-4 px-4 text-gray-300 bg-white/5 rounded-lg mt-2 leading-relaxed">
                                  {answer}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </motion.div>
                      ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Contact prompt */}
        <motion.div
          className="mt-10 sm:mt-14 md:mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-gray-300 mb-3 sm:mb-4 text-base sm:text-lg">
            Still have questions? We're here to help.
          </p>
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "#0f766e" }}
            whileTap={{ scale: 0.98 }}
            className="px-6 sm:px-8 py-2 sm:py-3 bg-teal-700 text-white rounded-xl shadow-lg text-base sm:text-lg"
          >
            Contact Our Support Team
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Faq;
