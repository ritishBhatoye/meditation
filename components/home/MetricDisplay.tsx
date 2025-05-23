"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const stats = [
  { number: 120, suffix: "+", label: "Retreats Conducted", icon: "🧘" },
  { number: 25, suffix: "K", label: "Happy Meditators Worldwide", icon: "🌍" },
  { number: 75, suffix: "+", label: "Certified Yoga Instructors", icon: "🌿" },
  { number: 15, suffix: "+", label: "Years of Mindful Practice", icon: "⏱️" },
  {
    number: 98,
    suffix: "%",
    label: "Positive Life Transformations",
    icon: "✨",
  },
  { number: 300, suffix: "+", label: "Guided Sessions Available", icon: "🎧" },
];

const AnimatedNumber = ({
  number,
  suffix,
}: {
  number: number;
  suffix: string;
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (inView) {
      const end = number;
      const duration = 1500;
      const stepTime = 30;
      const steps = Math.ceil(duration / stepTime);
      let step = 0;

      const counter = setInterval(() => {
        step++;
        const progress = Math.min(step / steps, 1);
        setDisplay(end * progress);
        if (progress === 1) clearInterval(counter);
      }, stepTime);
    }
  }, [inView, number]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-teal-500 mb-3"
    >
      {Math.round(display)}
      {suffix}
    </motion.div>
  );
};

const MetricsDisplay = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {}, []);

  return (
    <div className="relative w-full py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0c1425] to-[#0c133a] -z-10"></div>

      {/* Decorative backgrounds */}
      <div className="metrics-decoration absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-teal-500/5 -z-5 blur-3xl"></div>
      <div className="metrics-decoration absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-purple-500/5 -z-5 blur-3xl"></div>

      {/* Rotating circle decoration */}
      <motion.div
        className="absolute -bottom-24 -left-24 opacity-5 hidden lg:block"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      >
        <svg width="400" height="400" viewBox="0 0 100 100">
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

      <motion.div
        className="absolute -top-24 -right-24 opacity-5 hidden lg:block"
        animate={{ rotate: -360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
      >
        <svg width="300" height="300" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="currentColor"
            strokeWidth="0.5"
            fill="none"
            strokeDasharray="1,3"
          />
        </svg>
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h4
            className="text-teal-400 mb-3"
            style={{ fontFamily: "&apos;Homemade Apple&apos;, cursive" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Our Journey in Numbers
          </motion.h4>
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Transformative Results
          </motion.h2>
          <motion.p
            className="text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            We've guided thousands on their meditation and yoga journeys,
            creating moments of clarity and transformation.
          </motion.p>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-purple-500 mx-auto mt-6"></div>
        </div>

        <div
          ref={sectionRef}
          className="metrics-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-10"
        >
          {stats.map(({ number, suffix, label, icon }, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{
                y: -5,
                boxShadow: "0 10px 30px -10px rgba(0, 0, 0, 0.5)",
              }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center flex flex-col items-center justify-center shadow-xl"
            >
              <div className="text-4xl mb-4">{icon}</div>
              <AnimatedNumber number={number} suffix={suffix} />
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + idx * 0.1, duration: 0.6 }}
                className="text-gray-300 font-medium"
              >
                {label}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <p className="text-gray-300 mb-6">
            Begin your journey toward mindfulness and inner peace today.
          </p>
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "#0f766e" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-teal-700 text-white rounded-xl shadow-lg font-medium"
          >
            Start Your Practice
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default MetricsDisplay;
