"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useKeenSlider } from "keen-slider/react";
import { Star } from "lucide-react";
import { gsap } from "gsap";
import Image from "next/image";
import "keen-slider/keen-slider.min.css";
import { reviews } from "@/utils/dummyData/reviews";

export function ClientTestimonials() {
  const [current, setCurrent] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const reviewsRef = useRef<HTMLDivElement>(null);

  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    drag: true,
    slides: { perView: 1, spacing: 15 },
    slideChanged: (s) => setCurrent(s.track.details.rel),
  });

  useEffect(() => {
    // Main title animation
    gsap.fromTo(
      titleRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    );

    // Animate background elements
    gsap.fromTo(
      ".testimonial-decoration",
      { scale: 0, opacity: 0 },
      {
        scale: 1,
        opacity: 0.15,
        stagger: 0.2,
        duration: 1.2,
        ease: "elastic.out(1, 0.5)",
      }
    );

    // Animate the slider container
    gsap.fromTo(
      reviewsRef.current,
      { opacity: 0, x: 50 },
      { opacity: 1, x: 0, duration: 1, delay: 0.3, ease: "power2.out" }
    );
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0c1425] to-[#0c133a] -z-10"></div>

      {/* Decorative backgrounds */}
      <div className="testimonial-decoration absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-teal-500/5 -z-5 blur-3xl"></div>
      <div className="testimonial-decoration absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-purple-500/5 -z-5 blur-3xl"></div>

      {/* Animated lotus flower */}
      <motion.div
        className="absolute top-[15%] right-[10%] text-teal-500/5 hidden lg:block"
        animate={{ rotate: [0, 10, -10, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
      >
        <svg width="150" height="150" viewBox="0 0 100 100" fill="currentColor">
          <path d="M50,0 C60,30 80,50 100,50 C80,50 60,70 50,100 C40,70 20,50 0,50 C20,50 40,30 50,0 Z" />
        </svg>
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <div className="md:w-1/2">
            <motion.h3
              className="text-teal-400 uppercase tracking-wide text-sm font-semibold mb-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Peaceful Reflections
            </motion.h3>
            <h2
              ref={titleRef}
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              What Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-teal-600">
                Clients Say
              </span>
            </h2>
            <motion.p
              className="text-gray-300 max-w-xl mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Our community has experienced transformative changes through our
              meditation and yoga practices. Here are some of their stories.
            </motion.p>

            {/* Quote icon */}
            <motion.div
              className="text-teal-600/30 mb-4 hidden md:block"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, type: "spring" }}
            >
              <svg
                width="60"
                height="60"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M11,7H7A2,2 0 0,0 5,9V17H7V13H11V17H13V9A2,2 0 0,0 11,7M7,9H11V11H7M17,7H15V17H17V7Z" />
              </svg>
            </motion.div>
          </div>

          <div ref={reviewsRef} className="md:w-1/2 w-full">
            <div
              ref={sliderRef}
              className="keen-slider bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 shadow-xl overflow-hidden"
            >
              <AnimatePresence initial={false}>
                {reviews.map((r, i) => (
                  <motion.div
                    key={r.id}
                    className="keen-slider__slide p-6 sm:p-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: current === i ? 1 : 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="space-y-6">
                      <div className="flex">
                        {[...Array(5)].map((_, j) => (
                          <Star
                            key={j}
                            className={`w-5 h-5 ${
                              j < r.rating ? "text-teal-400" : "text-gray-600"
                            }`}
                          />
                        ))}
                      </div>
                      <p className="italic text-gray-300 leading-relaxed">
                        &ldquo;{r.content}&rdquo;
                      </p>
                      <div className="flex items-center gap-4">
                        <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-teal-500/50">
                          <Image
                            src={r.image}
                            alt={r.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-semibold text-white">{r.name}</h4>
                          <p
                            className="text-xs text-teal-400"
                            style={{
                              fontFamily: "&apos;Homemade Apple&apos;, cursive",
                            }}
                          >
                            {r.location}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Navigation arrows */}
            <div className="flex justify-between mt-6">
              <motion.button
                onClick={() => {
                  const idx = (current - 1 + reviews.length) % reviews.length;
                  sliderRef.current?.moveToIdx(idx);
                }}
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-teal-700 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </motion.button>

              <motion.button
                onClick={() => {
                  const idx = (current + 1) % reviews.length;
                  sliderRef.current?.moveToIdx(idx);
                }}
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-teal-700 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Progress bar */}
        <div className="mt-10 w-full h-[2px] bg-gray-800 relative overflow-hidden rounded-full">
          <motion.div
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-teal-500 to-teal-300"
            initial={{ width: 0 }}
            animate={{
              width: `${((current + 1) / reviews.length) * 100}%`,
              transition: { ease: "easeOut", duration: 0.4 },
            }}
          />
        </div>

        {/* Dots navigation */}
        <div className="flex justify-center mt-6 gap-2">
          {reviews.map((_, i) => (
            <motion.button
              key={i}
              onClick={() => sliderRef.current?.moveToIdx(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                i === current
                  ? "bg-teal-500 scale-125"
                  : "bg-white/20 hover:bg-white/40"
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 1 }}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Join our community and experience the tranquility and wellness that
            our clients have discovered on their mindfulness journey.
          </p>
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "#0f766e" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-teal-700 text-white rounded-xl shadow-lg font-medium"
          >
            Begin Your Journey Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
