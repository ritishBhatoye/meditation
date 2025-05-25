"use client";

import {
  Mail,
  Instagram,
  Youtube,
  Facebook,
  Phone,
  MapPin,
  MessageCircle,
} from "lucide-react";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
    setTimeout(() => setSubscribed(false), 3000);
    setEmail("");
  };

  return (
    <footer className="bg-gradient-to-br from-black via-[#0c1425] to-[#0c133a] text-white pt-12 pb-4 px-4 md:px-12 font-serif">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-white/10">
        {/* About Us */}
        <div>
          <h3 className="text-lg font-bold mb-3 text-teal-400">About Us</h3>
          <p className="mb-3 text-sm text-gray-300">
            Guiding souls toward inner peace, emotional healing, and spiritual
            balance through traditional and modern wellness practices.
          </p>
          <a
            href="/about"
            className="text-teal-300 hover:underline text-sm font-medium"
          >
            Read more &rarr;
          </a>
        </div>
        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold mb-3 text-teal-400">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/" className="hover:text-teal-300 transition">
                Home
              </a>
            </li>
            <li>
              <a href="/retreats" className="hover:text-teal-300 transition">
                Retreats
              </a>
            </li>
            <li>
              <a href="/meditation" className="hover:text-teal-300 transition">
                Meditation Programs
              </a>
            </li>
            <li>
              <a href="/book" className="hover:text-teal-300 transition">
                Book a Session
              </a>
            </li>
            <li>
              <a
                href="/testimonials"
                className="hover:text-teal-300 transition"
              >
                Testimonials
              </a>
            </li>
            <li>
              <a href="/blog" className="hover:text-teal-300 transition">
                Blog / Journal
              </a>
            </li>
            <li>
              <a href="/faq" className="hover:text-teal-300 transition">
                FAQ
              </a>
            </li>
          </ul>
        </div>
        {/* Get Involved */}
        <div>
          <h3 className="text-lg font-bold mb-3 text-teal-400">Get Involved</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="/retreats#join"
                className="hover:text-teal-300 transition"
              >
                Join a Retreat
              </a>
            </li>
            <li>
              <a href="/volunteer" className="hover:text-teal-300 transition">
                Become a Volunteer
              </a>
            </li>
            <li>
              <a href="/partners" className="hover:text-teal-300 transition">
                Partner With Us
              </a>
            </li>
            <li>
              <a href="/refer" className="hover:text-teal-300 transition">
                Refer a Friend
              </a>
            </li>
          </ul>
        </div>
        {/* Newsletter Signup */}
        <div>
          <h3 className="text-lg font-bold mb-3 text-teal-400">
            Newsletter Signup
          </h3>
          <p className="text-sm text-gray-300 mb-2">
            Receive mindful content, upcoming retreat details, and healing
            inspiration directly to your inbox.
          </p>
          {!subscribed ? (
            <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Your email address"
                  className="w-full pl-10 pr-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none transition"
                />
              </div>
              <button
                type="submit"
                className="bg-gradient-to-r from-teal-500 to-teal-600 text-white py-2 rounded-lg font-semibold hover:from-teal-600 hover:to-teal-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
          ) : (
            <div className="text-teal-300 text-sm font-medium py-2">
              Thank you for subscribing!
            </div>
          )}
        </div>
      </div>
      {/* Contact, Social, Quote, Policies */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 py-8">
        {/* Contact Info */}
        <div className="flex flex-col gap-2 text-sm">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-teal-400" /> Healing Horizon Retreat
            Center, Rishikesh, India
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-teal-400" /> +91-XXXX-XXXXXX
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-teal-400" />{" "}
            <a
              href="mailto:hello@healinghorizon.org"
              className="hover:underline"
            >
              hello@healinghorizon.org
            </a>
          </div>
        </div>
        {/* Social Icons */}
        <div className="flex items-center gap-4 mt-4 md:mt-0">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener"
            aria-label="Instagram"
            className="hover:scale-110 transition-transform"
          >
            <Instagram className="w-6 h-6 text-teal-400 hover:text-teal-300" />
          </a>
          <a
            href="https://wa.me/"
            target="_blank"
            rel="noopener"
            aria-label="WhatsApp"
            className="hover:scale-110 transition-transform"
          >
            <MessageCircle className="w-6 h-6 text-teal-400 hover:text-teal-300" />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener"
            aria-label="YouTube"
            className="hover:scale-110 transition-transform"
          >
            <Youtube className="w-6 h-6 text-teal-400 hover:text-teal-300" />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener"
            aria-label="Facebook"
            className="hover:scale-110 transition-transform"
          >
            <Facebook className="w-6 h-6 text-teal-400 hover:text-teal-300" />
          </a>
        </div>
        {/* Inspirational Quote */}
        <div className="col-span-1 md:col-span-2 flex flex-col justify-center items-start md:items-center">
          <blockquote className="italic text-gray-300 text-base border-l-4 border-teal-500 pl-4">
            “You cannot always control what goes on outside, but you can always
            control what goes on inside.”
            <br />
            <span className="block mt-2 text-xs text-teal-400">
              – Wayne Dyer
            </span>
          </blockquote>
        </div>
      </div>
      {/* Policies & CTA */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 py-4 border-t border-white/10 mt-4">
        <div className="flex flex-wrap gap-4 text-xs text-gray-300">
          <a href="/terms" className="hover:underline">
            Terms & Conditions
          </a>
          <a href="/privacy" className="hover:underline">
            Privacy Policy
          </a>
          <a href="/accessibility" className="hover:underline">
            Accessibility Support
          </a>
          <a href="/mental-health-disclaimer" className="hover:underline">
            Mental Health Disclaimer
          </a>
        </div>
        <a
          href="/book"
          className="mt-2 md:mt-0 bg-gradient-to-r from-teal-500 to-teal-600 text-white px-6 py-2 rounded-lg font-semibold shadow hover:from-teal-600 hover:to-teal-700 transition-colors"
        >
          Start Your Journey
        </a>
      </div>
    </footer>
  );
}
