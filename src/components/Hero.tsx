import { Button } from "@/components/ui/button";
import { Play, CheckCircle, ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-hero overflow-hidden pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 dot-pattern opacity-30" />
      
      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-accent/20 text-accent-foreground px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              Software de Gestão Médica #1 do Brasil
            </div>

            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-primary-foreground leading-tight mb-6">
              Evite Erros Comuns e{" "}
              <span className="relative">
                Otimize Suas Tarefas
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  height="8"
                  viewBox="0 0 200 8"
                  fill="none"
                >
                  <path
                    d="M1 5.5C47.6667 2.16667 141 -2.4 199 5.5"
                    stroke="hsl(168 80% 42%)"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            <p className="text-primary-foreground/80 text-lg md:text-xl mb-8 max-w-xl mx-auto lg:mx-0">
              Cadastre pacientes, salve fichas, receitas, exames, agendamento e financeiro. 
              Tudo Online. Peça ajuda para a nossa <strong className="text-accent">Inteligência Artificial</strong>.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button variant="hero" size="xl" className="group">
                Começar Agora — É Grátis
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="whiteOutline" size="xl" className="group">
                <Play className="w-5 h-5" />
                Ver Demonstração
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start text-primary-foreground/70 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-accent" />
                <span>Sem cartão de crédito</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-accent" />
                <span>Teste por 7 dias</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-accent" />
                <span>Suporte 24/7</span>
              </div>
            </div>
          </div>

          {/* Video/Image Placeholder */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-primary-foreground/10 to-primary-foreground/5 rounded-2xl p-2 backdrop-blur-sm border border-primary-foreground/10">
              <div className="aspect-video bg-primary/50 rounded-xl flex items-center justify-center overflow-hidden relative">
                {/* Mockup Screen */}
                <div className="absolute inset-4 bg-gradient-to-br from-card to-secondary rounded-lg shadow-2xl p-4">
                  <div className="h-full flex flex-col">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-3 h-3 rounded-full bg-destructive/60" />
                      <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
                      <div className="w-3 h-3 rounded-full bg-success/60" />
                    </div>
                    <div className="flex-1 grid grid-cols-3 gap-3">
                      <div className="col-span-1 bg-muted rounded-lg p-3 space-y-2">
                        <div className="h-2 bg-primary/20 rounded w-3/4" />
                        <div className="h-2 bg-primary/10 rounded w-1/2" />
                        <div className="h-2 bg-primary/10 rounded w-2/3" />
                      </div>
                      <div className="col-span-2 bg-muted rounded-lg p-3 space-y-2">
                        <div className="h-4 bg-accent/30 rounded w-1/3" />
                        <div className="h-2 bg-primary/10 rounded w-full" />
                        <div className="h-2 bg-primary/10 rounded w-4/5" />
                        <div className="h-2 bg-primary/10 rounded w-3/4" />
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Play Button Overlay */}
                <button className="absolute inset-0 flex items-center justify-center group">
                  <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center shadow-accent group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 text-accent-foreground ml-1" fill="currentColor" />
                  </div>
                </button>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-card rounded-xl p-4 shadow-card animate-float">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🏆</span>
                </div>
                <div>
                  <p className="font-heading font-semibold text-foreground">+10.000</p>
                  <p className="text-sm text-muted-foreground">Médicos ativos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
