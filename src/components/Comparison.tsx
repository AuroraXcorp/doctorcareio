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
          <div className="flex flex-col md:flex-row gap-6 lg:gap-10 pt-4 md:pt-24 items-stretch justify-center">
            {/* Option 1 - Without Doctorcare (Light card) */}
            <div className="relative flex-1 max-w-sm">
              <div className="bg-muted/50 rounded-xl p-6 lg:p-8 h-full border border-border/50 flex flex-col">
                {/* Label */}
                <div className="mb-4">
                  <span className="text-muted-foreground tracking-[0.2em] uppercase text-xs font-medium">
                    Sem DoctorCare
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Estresse
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                  Continue com processos manuais, horas perdidas com papelada, agenda desorganizada e sem controle financeiro real.
                </p>

                {/* Button */}
                <Button 
                  variant="outline" 
                  size="default" 
                  className="w-full bg-foreground text-background hover:bg-foreground/90 border-0 font-semibold"
                >
                  Continuar Assim
                </Button>
              </div>
            </div>

            {/* VS Circle - Center */}
            <div className="flex items-center justify-center py-4 md:py-0">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-primary bg-background flex items-center justify-center shadow-md">
                <span className="text-primary font-medium text-sm md:text-base">vs</span>
              </div>
            </div>

            {/* Option 2 - With Doctorcare (Dark card) */}
            <div className="relative flex-1 max-w-sm">
              <div className="bg-primary rounded-xl p-6 lg:p-8 h-full shadow-2xl flex flex-col">
                {/* Label */}
                <div className="mb-4">
                  <span className="text-primary-foreground/70 tracking-[0.2em] uppercase text-xs font-medium">
                    Com DoctorCare
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-heading text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
                  Liberdade
                </h3>

                {/* Description */}
                <p className="text-primary-foreground/80 text-sm leading-relaxed mb-6 flex-grow">
                  Acesse tecnologia de ponta com IA, prontuários em segundos, agenda inteligente e dashboards financeiros.
                </p>

                {/* Button */}
                <a href="#cta" className="block">
                  <Button 
                    variant="outline" 
                    size="default" 
                    className="w-full bg-background text-primary hover:bg-background/90 border-0 font-semibold group"
                  >
                    Começar Agora
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
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
