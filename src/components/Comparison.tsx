import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Comparison = () => {
  return (
    <section className="py-20 md:py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8">
          <span className="inline-block text-muted-foreground tracking-[0.3em] uppercase text-sm font-medium mb-4">
            Duas Opções
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground">
            Você decide o seu caminho
          </h2>
        </div>

        {/* Arrows Container */}
        <div className="relative max-w-5xl mx-auto">
          {/* Arrow Lines - Hidden on mobile */}
          <div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-20">
            {/* Horizontal line */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-foreground via-primary to-primary rounded-full" />
            
            {/* Left vertical line + arrow */}
            <div className="absolute top-0 left-0 w-[3px] h-16 bg-foreground rounded-full" />
            <div className="absolute top-14 left-0 -translate-x-[6px]">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-foreground">
                <path d="M8 0L16 10H0L8 0Z" fill="currentColor" transform="rotate(180 8 8)" />
              </svg>
            </div>
            
            {/* Center arrow pointing up */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-primary">
                <path d="M8 16L0 6H16L8 16Z" fill="currentColor" transform="rotate(180 8 8)" />
              </svg>
            </div>
            
            {/* Right vertical line + arrow */}
            <div className="absolute top-0 right-0 w-[3px] h-16 bg-primary rounded-full" />
            <div className="absolute top-14 right-0 translate-x-[6px]">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-primary">
                <path d="M8 0L16 10H0L8 0Z" fill="currentColor" transform="rotate(180 8 8)" />
              </svg>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 pt-4 md:pt-24 items-start">
            {/* Option 1 - Without Doctorcare (Light card) */}
            <div className="relative">
              <div className="bg-muted/50 rounded-2xl p-8 lg:p-10 h-full border border-border/50">
                {/* Price Label */}
                <div className="text-center mb-6">
                  <span className="text-muted-foreground tracking-[0.2em] uppercase text-xs font-medium">
                    Sem DoctorCare
                  </span>
                  <div className="font-heading text-4xl md:text-5xl font-bold text-foreground mt-2">
                    Estresse
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground text-center mb-8 leading-relaxed">
                  Continue com processos manuais, horas perdidas com papelada, agenda desorganizada e sem controle financeiro real. O caminho difícil que consome seu tempo e energia.
                </p>

                {/* Button */}
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full bg-foreground text-background hover:bg-foreground/90 border-0 font-semibold"
                >
                  Continuar Assim
                </Button>
              </div>
            </div>

            {/* VS Circle - Center */}
            <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="w-16 h-16 rounded-full border-2 border-primary bg-background flex items-center justify-center">
                <span className="text-primary font-medium text-lg">vs</span>
              </div>
            </div>

            {/* Option 2 - With Doctorcare (Dark card) */}
            <div className="relative">
              <div className="bg-primary rounded-2xl p-8 lg:p-10 h-full shadow-2xl">
                {/* Price Label */}
                <div className="text-center mb-6">
                  <span className="text-primary-foreground/70 tracking-[0.2em] uppercase text-xs font-medium">
                    Com DoctorCare
                  </span>
                  <div className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mt-2">
                    Liberdade
                  </div>
                </div>

                {/* Description */}
                <p className="text-primary-foreground/80 text-center mb-8 leading-relaxed">
                  Acesse tecnologia de ponta com IA, prontuários em segundos, agenda inteligente e dashboards financeiros. O caminho inteligente que multiplica seu tempo e resultados.
                </p>

                {/* Button */}
                <a href="#cta">
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="w-full bg-background text-primary hover:bg-background/90 border-0 font-semibold group"
                  >
                    Começar Agora
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Message */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground text-lg">
            A escolha é sua. Mas lembre-se:{" "}
            <span className="text-foreground font-semibold">tempo é o recurso mais precioso que você tem.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
