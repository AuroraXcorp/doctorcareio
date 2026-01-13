import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 md:py-32 bg-hero relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 dot-pattern opacity-20" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-medium mb-8">
            <Sparkles className="w-4 h-4" />
            Oferta por tempo limitado
          </div>

          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-primary-foreground mb-6 leading-tight">
            Pronto para transformar sua{" "}
            <span className="text-accent">prática médica?</span>
          </h2>

          <p className="text-primary-foreground/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Junte-se a mais de 10.000 médicos que já economizam horas por semana 
            com o Doctorcare. Comece grátis hoje mesmo.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" className="group">
              Começar Agora — É Grátis
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="whiteOutline" size="xl">
              Agendar Demonstração
            </Button>
          </div>

          <p className="text-primary-foreground/60 text-sm mt-6">
            ✓ Sem cartão de crédito • ✓ Setup em 5 minutos • ✓ Cancele quando quiser
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
