import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { scrollToFormAndFocus } from "@/lib/scrollToForm";

const CTA = () => {
  return (
    <section className="py-20 md:py-32 section-dark relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 dot-pattern opacity-10" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-medium mb-8">
            <Sparkles className="w-4 h-4" />
            Transforme sua prática médica
          </div>

          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-white mb-6 leading-tight">
            Pronto para transformar sua{" "}
            <span className="text-primary">prática médica?</span>
          </h2>

          <p className="text-white/70 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Junte-se a mais de 10.000 médicos que já economizam horas por semana 
            com o Doctorcare. Entre em contato hoje mesmo.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="xl" className="group bg-gradient-primary hover:opacity-90" onClick={scrollToFormAndFocus}>
              Fale Conosco Hoje
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="xl" className="border-white/50 bg-white/10 text-white hover:bg-white/20" onClick={scrollToFormAndFocus}>
              Agendar Demonstração
            </Button>
          </div>

          <p className="text-white/50 text-sm mt-6">
            ✓ Atendimento personalizado • ✓ Setup em 5 minutos • ✓ Suporte dedicado
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
