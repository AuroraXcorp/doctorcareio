import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Comparison = () => {
  return (
    <section className="py-20 md:py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-6">
          <span className="inline-block text-muted-foreground tracking-[0.3em] uppercase text-sm font-medium mb-4">
            Duas Opções
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground">
            Você decide o seu caminho
          </h2>
        </div>

        {/* Main Container with Arrows */}
        <div className="relative max-w-5xl mx-auto">
          {/* SVG Arrows - Hidden on mobile */}
          <svg 
            className="hidden md:block absolute top-0 left-0 w-full h-28 z-0" 
            viewBox="0 0 100 100" 
            fill="none" 
            preserveAspectRatio="none"
          >
            {/* Left path - horizontal then vertical */}
            <path 
              d="M50 0 L50 25 L23 25 L23 85" 
              stroke="hsl(var(--foreground))" 
              strokeWidth="0.4" 
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Left arrow head */}
            <polygon 
              points="23,100 20,88 26,88" 
              fill="hsl(var(--foreground))"
            />
            
            {/* Center arrow pointing up */}
            <polygon 
              points="50,0 47,12 53,12" 
              fill="hsl(var(--primary))"
            />
            
            {/* Right path - horizontal then vertical */}
            <path 
              d="M50 0 L50 25 L77 25 L77 85" 
              stroke="hsl(var(--primary))" 
              strokeWidth="0.4" 
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Right arrow head */}
            <polygon 
              points="77,100 74,88 80,88" 
              fill="hsl(var(--primary))"
            />
          </svg>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-[1fr_60px_1fr] gap-6 md:gap-0 pt-0 md:pt-28 items-stretch">
            {/* Option 1 - Without Doctorcare (Light card) */}
            <div className="relative flex px-0 md:px-3">
              <div className="bg-muted/40 rounded-xl p-6 md:p-8 lg:p-10 flex flex-col justify-between w-full min-h-[380px] md:min-h-[420px]">
                {/* Content */}
                <div>
                  <div className="text-center mb-6">
                    <span className="text-muted-foreground tracking-[0.15em] uppercase text-xs font-medium">
                      Sem DoctorCare
                    </span>
                    <div className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3">
                      Estresse
                    </div>
                  </div>

                  <p className="text-muted-foreground text-center text-sm md:text-base leading-relaxed">
                    Continue com processos manuais, horas perdidas com papelada, agenda desorganizada e sem controle financeiro real. O caminho difícil que consome seu tempo e energia.
                  </p>
                </div>

                {/* Button */}
                <div className="mt-8">
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="w-full bg-foreground text-background hover:bg-foreground/90 border-0 font-semibold py-6"
                  >
                    Continuar Assim
                  </Button>
                </div>
              </div>
            </div>

            {/* VS Circle - Center */}
            <div className="hidden md:flex items-center justify-center">
              <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-full border-2 border-primary bg-background flex items-center justify-center shadow-sm">
                <span className="text-primary font-medium text-base lg:text-lg">vs</span>
              </div>
            </div>

            {/* Mobile VS */}
            <div className="flex md:hidden items-center justify-center py-2">
              <div className="w-12 h-12 rounded-full border-2 border-primary bg-background flex items-center justify-center">
                <span className="text-primary font-medium">vs</span>
              </div>
            </div>

            {/* Option 2 - With Doctorcare (Dark card) */}
            <div className="relative flex px-0 md:px-3">
              <div className="bg-primary rounded-xl p-6 md:p-8 lg:p-10 flex flex-col justify-between w-full min-h-[380px] md:min-h-[420px] shadow-2xl">
                {/* Content */}
                <div>
                  <div className="text-center mb-6">
                    <span className="text-primary-foreground/70 tracking-[0.15em] uppercase text-xs font-medium">
                      Com DoctorCare
                    </span>
                    <div className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mt-3">
                      Liberdade
                    </div>
                  </div>

                  <p className="text-primary-foreground/80 text-center text-sm md:text-base leading-relaxed">
                    Acesse tecnologia de ponta com IA, prontuários em segundos, agenda inteligente e dashboards financeiros. O caminho inteligente que multiplica seu tempo e resultados.
                  </p>
                </div>

                {/* Button */}
                <div className="mt-8">
                  <a href="#cta" className="block">
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="w-full bg-background text-primary hover:bg-background/90 border-0 font-semibold py-6 group"
                    >
                      Começar Agora
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Message */}
        <div className="text-center mt-12 md:mt-16">
          <p className="text-muted-foreground text-base md:text-lg px-4">
            A escolha é sua. Mas lembre-se:{" "}
            <span className="text-foreground font-semibold">tempo é o recurso mais precioso que você tem.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
