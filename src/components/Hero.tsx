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
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-foreground leading-tight mb-6">
            Médicos e IA impulsionam o{" "}
            <span className="relative text-gradient">
              atendimento ao paciente
              <svg
                className="absolute -bottom-2 left-0 w-full"
                height="8"
                viewBox="0 0 200 8"
                fill="none"
              >
                <path
                  d="M1 5.5C47.6667 2.16667 141 -2.4 199 5.5"
                  stroke="hsl(210 100% 50%)"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>

          <p className="text-muted-foreground text-lg md:text-xl lg:text-2xl mb-10 max-w-3xl mx-auto">
            Cadastre pacientes, salve fichas, receitas, exames, agendamento e financeiro. 
            Tudo Online. Peça ajuda para a nossa <strong className="text-primary">Inteligência Artificial</strong>.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="xl" 
              className="group bg-gradient-primary hover:opacity-90 transition-opacity text-lg px-10 py-6 h-auto"
              onClick={scrollToFormAndFocus}
            >
              Agende uma demo
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="xl" 
              variant="outline"
              className="text-lg px-10 py-6 h-auto border-2"
              onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Como funciona
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap gap-6 justify-center text-muted-foreground text-sm md:text-base">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-primary" />
              <span>Atendimento personalizado</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-primary" />
              <span>Suporte 24/7</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-primary" />
              <span>IA integrada</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
