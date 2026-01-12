import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Features from "@/components/Features";
import Comparison from "@/components/Comparison";
import Testimonials from "@/components/Testimonials";
import Security from "@/components/Security";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Stats />
      <Features />
      <Comparison />
      <Testimonials />
      <Security />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
