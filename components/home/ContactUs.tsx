"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, MapPin, Instagram, MessageCircle, Youtube } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  inquiryType: string;
  preferredTime: string;
}

const inquiryTypes = [
  "General Inquiry",
  "Appointment Booking",
  "Therapy Consultation",
  "Feedback",
];

export default function ContactUs() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    inquiryType: "",
    preferredTime: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission logic
    // For now, just simulate success
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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

      <div className="w-full mx-auto relative z-10 flex flex-col md:flex-row gap-16 items-start justify-between px-4 md:px-12 lg:px-24 py-8">
        {/* Left: Contact Form */}
        <div className="flex-1 w-full max-w-lg">
          <motion.p
            className="text-teal-400 mb-3 text-lg"
            style={{ fontFamily: "'Homemade Apple', cursive" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Get in Touch
          </motion.p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Contact Us
          </h2>
          <p className="text-gray-300 mb-6 text-lg">
            We're here to support your wellness journey. Reach out to us anytime
            for personalized guidance, appointments, or just to say hello!
          </p>
          {!isSubmitted ? (
            <form
              onSubmit={handleSubmit}
              className="space-y-4 bg-white/5 p-6 rounded-xl border border-white/10 shadow-xl"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all duration-200"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all duration-200"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    Phone (optional)
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all duration-200"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    Preferred Contact Time
                  </label>
                  <input
                    type="time"
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all duration-200"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Inquiry Type *
                </label>
                <select
                  name="inquiryType"
                  value={formData.inquiryType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all duration-200"
                >
                  <option value="" className="bg-[#0c1425]">
                    Select an inquiry type
                  </option>
                  {inquiryTypes.map((type) => (
                    <option key={type} value={type} className="bg-[#0c1425]">
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all duration-200"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all duration-200"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-gradient-to-r from-teal-500 to-teal-600 text-white py-3 rounded-lg font-medium hover:from-teal-600 hover:to-teal-700 transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send Message
              </motion.button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-8 bg-white/10 rounded-xl border border-white/10 shadow-xl"
            >
              <Send className="w-12 h-12 text-teal-400 mx-auto mb-3" />
              <p className="text-lg text-gray-200 font-medium">
                Thank you for reaching out — we'll be in touch shortly.
              </p>
            </motion.div>
          )}
        </div>
        {/* Right: Info, Testimonial, FAQ */}
        <div className="flex-1 w-full max-w-lg space-y-8">
          <div className="bg-white/10 rounded-xl p-6 border border-white/10 shadow-lg">
            <h3 className="text-teal-300 text-xl font-semibold mb-2">
              Why Contact Us?
            </h3>
            <ul className="list-disc list-inside text-gray-200 space-y-1 pl-2">
              <li>Personalized wellness guidance</li>
              <li>Book therapy or retreat sessions</li>
              <li>Ask about our programs & events</li>
              <li>Share your feedback or suggestions</li>
            </ul>
          </div>
          <div className="bg-white/10 rounded-xl p-4 border border-white/10 shadow-lg">
            <p className="text-white text-base italic mb-2">
              "The team was so responsive and caring. They helped me find the
              perfect retreat for my needs!"
            </p>
            <span className="text-teal-300 text-sm font-medium">
              — Rahul M., Client
            </span>
          </div>
          <div className="bg-white/10 rounded-xl p-6 border border-white/10 shadow-lg">
            <h3 className="text-teal-300 text-lg font-semibold mb-2">
              Frequently Asked Questions
            </h3>
            <div className="space-y-2">
              <div>
                <p className="text-white font-medium">
                  How soon will I get a response?
                </p>
                <p className="text-gray-300 text-sm">
                  We aim to reply within 24 hours on weekdays.
                </p>
              </div>
              <div>
                <p className="text-white font-medium">
                  Can I book a session online?
                </p>
                <p className="text-gray-300 text-sm">
                  Yes! Use the form or mention your interest, and we'll guide
                  you through the process.
                </p>
              </div>
              <div>
                <p className="text-white font-medium">
                  Is my information confidential?
                </p>
                <p className="text-gray-300 text-sm">
                  Absolutely. Your privacy and trust are our top priorities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 pt-8 border-t border-white/10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-gray-300">
            <MapPin className="w-5 h-5" />
            <span>123 Wellness Street, Peaceful City</span>
          </div>
          <div className="flex gap-4">
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-teal-400 transition-colors"
            >
              <Instagram className="w-6 h-6" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="https://wa.me/your-number"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-teal-400 transition-colors"
            >
              <MessageCircle className="w-6 h-6" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-teal-400 transition-colors"
            >
              <Youtube className="w-6 h-6" />
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
