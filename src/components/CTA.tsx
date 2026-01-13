import { Button } from "@/components/ui/button";
import { ArrowRight, Mic, Sparkles } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-primary via-accent to-primary relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 dot-pattern opacity-10" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/15 text-white px-5 py-2 rounded-full text-sm font-medium mb-8 border border-white/20">
            <Sparkles className="w-4 h-4 text-yellow-300" />
            Oferta Especial de Lançamento
          </div>

          {/* Voice Animation */}
          <div className="relative w-24 h-24 mx-auto mb-8">
            <div className="absolute inset-0 rounded-full bg-white/20 animate-pulse" />
            <div className="absolute inset-2 rounded-full bg-white/30 flex items-center justify-center">
              <Mic className="w-10 h-10 text-white" />
            </div>
            <div className="absolute inset-0 rounded-full border-2 border-white/30 voice-ring" />
            <div className="absolute inset-0 rounded-full border-2 border-white/20 voice-ring" style={{ animationDelay: '0.5s' }} />
          </div>

          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-white mb-6 leading-tight">
            Pronto para transformar sua{" "}
            <span className="text-white/90">rotina médica?</span>
          </h2>

          <p className="text-white/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Junte-se a mais de 10.000 médicos que já economizam horas por semana 
            com o assistente de voz inteligente. Teste grátis por 7 dias.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="xl" className="bg-white text-primary hover:bg-white/90 group text-lg px-8">
              <Mic className="w-5 h-5 mr-2" />
              Começar Agora — É Grátis
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="xl" className="border-white/30 text-white hover:bg-white/10 text-lg">
              Ver Demonstração
            </Button>
          </div>

          <p className="text-white/60 text-sm mt-8">
            ✓ Sem cartão de crédito • ✓ Setup em 2 minutos • ✓ Cancele quando quiser
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;