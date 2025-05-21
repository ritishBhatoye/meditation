"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import gsap from "gsap";

const slides = [
  {
    title: "Awaken Your Inner Peace",
    description:
      "Immerse yourself in transformative yoga and meditation sessions that nurture your body, mind, and soul.",
    image:
      "https://images.unsplash.com/photo-1554347761-7520bdb7bc5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    tag: "Meditation & Balance",
    quote: "Yoga is the journey of the self, through the self, to the self.",
  },
  {
    title: "Breathe, Stretch, Transform",
    description:
      "Harness the ancient power of breath and movement to embrace calm, clarity, and inner strength.",
    image:
      "https://images.unsplash.com/photo-1598986641446-d1fdb9469a7d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    tag: "Holistic Wellness",
    quote:
      "The body benefits from movement, and the mind benefits from stillness.",
  },
  {
    title: "Personalized Healing Journey",
    description:
      "Our certified yoga therapists guide you through deeply personalized practices to restore your natural flow.",
    image:
      "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    tag: "Therapeutic Yoga",
    quote:
      "Yoga does not just change the way we see things, it transforms the person who sees.",
  },
];

const practices = [
  { name: "Hatha Yoga", count: "12+ Classes" },
  { name: "Meditation", count: "8+ Sessions" },
  { name: "Breathwork", count: "6+ Techniques" },
  { name: "Sound Healing", count: "4+ Experiences" },
];

// Background images for parallax effect
const bgImages = [
  "https://images.unsplash.com/photo-1588286840104-8957b019727f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80", // Serene nature
  "https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80", // Mountain vista
];

export default function HeroSection(): React.JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      slides: { perView: 1, spacing: 0 },
      dragSpeed: 0.7,
      slideChanged: () => animateText(),
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>;
        let mouseOver = false;

        function clearNextTimeout() {
          clearTimeout(timeout);
        }

        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => slider.next(), 7000);
        }

        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  const animateText = () => {
    if (textRef.current) {
      gsap.fromTo(
        textRef.current.querySelectorAll(".fadeInUp"),
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.8,
          ease: "power3.out",
        }
      );
    }
  };

  useEffect(() => {
    gsap.fromTo(
      ".bg-bubble",
      { scale: 0, opacity: 0 },
      {
        scale: 1,
        opacity: 0.4,
        stagger: 0.3,
        duration: 1.2,
        ease: "elastic.out(1, 0.5)",
      }
    );

    gsap.fromTo(
      ".floating-element",
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 1,
        ease: "back.out(1.7)",
      }
    );

    animateText();
    return () => instanceRef.current?.destroy();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden min-h-screen bg-gradient-to-br from-black to-lime-50 flex items-center"
    >
      <div className="absolute inset-0 -z-20 overflow-hidden">
        {bgImages.map((img, index) => (
          <div
            key={index}
            className={`bg-parallax absolute inset-0 w-full h-full transition-transform duration-500`}
            style={{
              zIndex: bgImages.length - index,
              backgroundImage: `url(${img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              transform: `translateZ(${-10 * index}px)`,
              filter: `blur(${index * 1}px)`,
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0 -z-10 bg-black/65"></div>

      <div className="absolute inset-0 -z-10">
        <motion.div
          className="bg-bubble absolute w-72 h-72 bg-emerald-100/10 rounded-full top-[10%] left-[5%]"
          animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
        />
        <motion.div
          className="bg-bubble absolute w-96 h-96 bg-yellow-100/10 rounded-full bottom-[15%] right-[10%]"
          animate={{ y: [0, 20, 0], x: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
        />
        <motion.div
          className="bg-bubble absolute w-36 h-36 bg-pink-100/10 rounded-full top-1/2 right-1/4"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        />
        <motion.div
          className="bg-bubble absolute w-24 h-24 bg-indigo-100/10 rounded-full bottom-1/3 left-1/4"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        />
        <motion.div
          className="bg-bubble absolute w-16 h-16 bg-teal-100/10 rounded-full top-1/4 left-1/3"
          animate={{ y: [0, -10, 0], x: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-20 right-20 opacity-10"
          animate={{ rotate: [0, 360] }}
          transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
        >
          <svg width="120" height="120" viewBox="0 0 100 100">
            <path
              d="M50 0 A50 50 0 0 1 50 100 A50 50 0 0 1 50 0"
              fill="none"
              stroke="#94a3b8"
              strokeWidth="1"
              strokeDasharray="2,2"
            />
          </svg>
        </motion.div>
        <motion.div
          className="absolute bottom-20 left-1/3 opacity-10"
          animate={{ rotate: [360, 0] }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
        >
          <svg width="160" height="160" viewBox="0 0 100 100">
            <path
              d="M50 10 A40 40 0 0 1 50 90 A40 40 0 0 1 50 10"
              fill="none"
              stroke="#0d9488"
              strokeWidth="1"
            />
          </svg>
        </motion.div>
      </div>

      <motion.div
        className="floating-element absolute top-[15%] right-[15%] text-teal-500/20 hidden md:block"
        animate={{ y: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
      >
        <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12,2C7.03,2,3,6.03,3,11c0,4.63,3.45,8.46,7.93,9.07l1.06-1.93c-3.61-0.64-6.35-3.81-6.35-7.14C5.64,7.5,8.5,4.64,12,4.64 s6.36,2.86,6.36,6.36c0,3.33-2.74,6.5-6.36,7.14l1.06,1.93C16.55,19.46,20,15.63,20,11C20,6.03,16.97,2,12,2z" />
          <path d="M12,5.5c-3.03,0-5.5,2.47-5.5,5.5c0,2.47,1.67,4.54,3.93,5.17l1.06-1.93c-1.27-0.35-2.17-1.51-2.17-2.74 c0-1.65,1.35-3,3-3s3,1.35,3,3c0,1.23-0.9,2.39-2.17,2.74l1.06,1.93c2.26-0.63,3.93-2.7,3.93-5.17C17.5,7.97,15.03,5.5,12,5.5z" />
          <circle cx="12" cy="11" r="1.5" />
        </svg>
      </motion.div>

      <motion.div
        className="floating-element absolute bottom-[20%] left-[10%] text-yellow-600/20 hidden md:block"
        animate={{ y: [0, 10, 0], rotate: [0, 5, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      >
        <svg width="50" height="50" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12,2L4.5,20.29L5.21,21L12,18l6.79,3l0.71-0.71L12,2z M12,15.5L7.46,17.33l4.54-13.8l4.54,13.8L12,15.5z" />
        </svg>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 lg:gap-24 items-center">
          <div
            ref={textRef}
            className="space-y-8 md:space-y-10 text-center md:text-left"
          >
            <span
              className="fadeInUp block text-xl font-semibold tracking-wide bg-gradient-to-r from-green-400 to-teal-400 text-transparent bg-clip-text"
              style={{ fontFamily: "'Homemade Apple', cursive" }}
            >
              Discover Serenity
            </span>
            <h1 className="fadeInUp text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
              {slides[instanceRef.current?.track.details.rel || 0].title}
            </h1>
            <p className="fadeInUp text-base sm:text-lg text-gray-200 max-w-xl mx-auto md:mx-0">
              {slides[instanceRef.current?.track.details.rel || 0].description}
            </p>

            <div className="fadeInUp pt-4 pb-3">
              <blockquote className="italic text-gray-300 border-l-4 border-teal-500 pl-4 max-w-xl mx-auto md:mx-0">
                <p
                  style={{ fontFamily: "'Homemade Apple', cursive" }}
                  className="text-sm"
                >
                  &ldquo;
                  {slides[instanceRef.current?.track.details.rel || 0].quote}
                  &rdquo;
                </p>
              </blockquote>
            </div>

            {/* Practice types with count */}
            <div className="fadeInUp grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-xl mx-auto md:mx-0">
              {practices.map((practice) => (
                <motion.div
                  key={practice.name}
                  className="bg-white/10 backdrop-blur-sm p-4 rounded-lg text-center shadow-sm border border-white/10 hover:bg-white/15 transition-colors"
                  whileHover={{
                    y: -5,
                    boxShadow: "0 10px 15px -3px rgba(0,0,0,0.1)",
                  }}
                >
                  <p className="font-semibold text-teal-300">{practice.name}</p>
                  <p className="text-sm text-gray-300">{practice.count}</p>
                </motion.div>
              ))}
            </div>

            <div className="fadeInUp flex flex-col sm:flex-row gap-6 pt-8 justify-center md:justify-start">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-teal-600 text-white px-8 py-4 sm:py-5 rounded-xl font-medium shadow-lg hover:bg-teal-700 transition"
              >
                Begin Your Journey
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white/50 text-white px-8 py-4 sm:py-5 rounded-xl font-medium hover:border-white hover:bg-white/10 transition"
              >
                Learn More
              </motion.button>
            </div>

            <motion.div
              className="fadeInUp hidden md:flex justify-center md:justify-start items-center space-x-2 pt-4 text-gray-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <div className="h-[1px] w-10 bg-gray-500"></div>
              <span
                style={{ fontFamily: "'Homemade Apple', cursive" }}
                className="text-xs text-gray-300"
              >
                scroll to explore
              </span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </motion.div>
            </motion.div>
          </div>

          {/* Image Slider */}
          <div className="w-full">
            <div
              ref={sliderRef}
              className="keen-slider rounded-3xl shadow-2xl overflow-hidden border border-white/20"
            >
              {slides.map((slide, idx) => (
                <div key={idx} className="keen-slider__slide">
                  <div className="relative w-full h-[400px] sm:h-[450px] md:h-[500px]">
                    <Image
                      src={slide.image}
                      alt={slide.tag}
                      fill
                      className="object-cover"
                      priority={idx === 0}
                    />
                    <div className="absolute bottom-6 left-6 bg-black/40 backdrop-blur-sm px-4 py-2 rounded-full font-medium text-sm text-white">
                      {slide.tag}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex justify-center space-x-3">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => instanceRef.current?.moveToIdx(idx)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    idx === (instanceRef.current?.track?.details?.rel || 0)
                      ? "bg-teal-400 scale-110"
                      : "bg-white/30 hover:bg-white/50"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
