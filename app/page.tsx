import HomeAboutUs from "@/components/home/AboutUs";
import { ClientTestimonials } from "@/components/home/ClientTestimonials";
import Faq from "@/components/home/FAQ";
import GallerySection from "@/components/home/GallerySection";
import HeroSection from "@/components/home/HeroSection";
import MetricsDisplay from "@/components/home/MetricDisplay";
import Tabs from "@/components/home/Tabs";
import RetreatsSection from "@/components/home/RetreatsSection";
import ContactUs from "@/components/home/ContactUs";
import Newsletter from "@/components/home/Newsletter";
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <RetreatsSection />
      <Tabs />
      <MetricsDisplay />
      <HomeAboutUs />
      <GallerySection />
      <ClientTestimonials />
      <Newsletter />
      <ContactUs />
      <Faq />
      <Footer />
    </div>
  );
}
