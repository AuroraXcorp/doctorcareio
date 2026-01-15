import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Comparison = () => {
  return (
    <section className="py-20 md:py-32 bg-secondary relative overflow-hidden">
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
          <div className="flex flex-col md:flex-row gap-8 lg:gap-12 pt-8 md:pt-28 items-stretch justify-center">
            {/* Option 1 - Without Doctorcare (Light card) */}
            <div className="relative flex-1 max-w-md">
              <div className="bg-card rounded-2xl p-8 lg:p-12 h-full border border-border shadow-card flex flex-col text-center hover:shadow-lg transition-shadow duration-300">
                {/* Label */}
                <div className="mb-6">
                  <span className="inline-block text-muted-foreground tracking-[0.3em] uppercase text-sm font-medium">
                    Sem DoctorCare
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                  Estresse
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-10 flex-grow">
                  Continue com processos manuais, horas perdidas com papelada, agenda desorganizada e sem controle financeiro real. O caminho difícil que consome seu tempo e energia.
                </p>

                {/* Button */}
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full bg-foreground text-background hover:bg-foreground/90 border-0 font-semibold py-6 text-base"
                >
                  Continuar Assim
                </Button>
              </div>
            </div>

            {/* VS Circle - Center */}
            <div className="flex items-center justify-center py-6 md:py-0">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-primary bg-card flex items-center justify-center shadow-xl">
                <span className="text-primary font-heading font-bold text-lg md:text-xl">vs</span>
              </div>
            </div>

            {/* Option 2 - With Doctorcare (Primary card) */}
            <div className="relative flex-1 max-w-md">
              <div className="bg-gradient-primary rounded-2xl p-8 lg:p-12 h-full shadow-accent flex flex-col text-center hover:shadow-2xl transition-shadow duration-300">
                {/* Label */}
                <div className="mb-6">
                  <span className="inline-block text-white/70 tracking-[0.3em] uppercase text-sm font-medium">
                    Com DoctorCare
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                  Liberdade
                </h3>

                {/* Description */}
                <p className="text-white/80 text-base md:text-lg leading-relaxed mb-10 flex-grow">
                  Acesse tecnologia de ponta com IA, prontuários em segundos, agenda inteligente e dashboards financeiros. O caminho inteligente que multiplica seu tempo e resultados.
                </p>

                {/* Button */}
                <a href="#cta" className="block">
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="w-full bg-white text-primary hover:bg-white/90 border-0 font-semibold py-6 text-base group"
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
