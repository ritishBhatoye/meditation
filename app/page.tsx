import {
  HeroSection,
  RetreatsSection,
  Tabs,
  MetricDisplay,
  AboutUs,
  GallerySection,
  ClientTestimonials,
  Newsletter,
  ContactUs,
  Faq,
  Footer,
} from "@/components/home";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <RetreatsSection />
      <Tabs />
      <MetricDisplay />
      <AboutUs />
      <GallerySection />
      <ClientTestimonials />
      <Newsletter />
      <ContactUs />
      <Faq />
      <Footer />
    </div>
  );
}
