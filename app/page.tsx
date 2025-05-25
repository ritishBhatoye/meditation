import HomeAboutUs from "@/components/home/AboutUs";
import { ClientTestimonials } from "@/components/home/ClientTestimonials";
import Faq from "@/components/home/FAQ";
import GallerySection from "@/components/home/GallerySection";
import HeroSection from "@/components/home/HeroSection";
import MetricsDisplay from "@/components/home/MetricDisplay";
import Tabs from "@/components/home/Tabs";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Tabs />
      <MetricsDisplay />
      <HomeAboutUs />
      <GallerySection />
      <ClientTestimonials />
      <Faq />
    </div>
  );
}
