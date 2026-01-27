import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from "lucide-react";
import { scrollToFormAndFocus } from "@/lib/scrollToForm";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-[85vh] overflow-hidden pt-20 flex items-center" style={{
      background: 'linear-gradient(180deg, #FFFFFF 0%, #F0F7FF 40%, #D6EBFF 100%)'
    }}>
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 dot-pattern opacity-20" />
      
      {/* Decorative Gradient Orbs */}
      <div className="absolute top-20 left-0 w-[500px] h-[500px] bg-gradient-to-br from-primary/10 to-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tl from-accent/10 to-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Content */}
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight mb-5 tracking-tight">
            Médicos e IA impulsionam o{" "}
            <span className="relative text-gradient">
              atendimento ao paciente
              <svg
                className="absolute -bottom-1 left-0 w-full"
                height="6"
                viewBox="0 0 200 8"
                fill="none"
              >
                <path
                  d="M1 5.5C47.6667 2.16667 141 -2.4 199 5.5"
                  stroke="hsl(210 100% 50%)"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <Button 
              size="lg" 
              className="group bg-gradient-primary hover:opacity-90 transition-opacity px-8"
              onClick={scrollToFormAndFocus}
            >
              Agende uma demo
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 px-8"
              onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Como funciona
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
