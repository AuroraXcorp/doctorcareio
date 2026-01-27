import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Features from "@/components/Features";
import FeaturesShowcase from "@/components/FeaturesShowcase";
import Comparison from "@/components/Comparison";
import FormSection from "@/components/FormSection";
import Testimonials from "@/components/Testimonials";
import TestimonialsCards from "@/components/TestimonialsCards";
import Security from "@/components/Security";
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
      <FeaturesShowcase />
      <TestimonialsCards />
      <Comparison />
      <FormSection />
      <Testimonials />
      <Security />
      <FAQ />
      <CTA />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
