import { Button } from "@/components/ui/button";
import { X, Check, ArrowRight, Keyboard, Mic } from "lucide-react";

const Comparison = () => {
  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
            Comparativo
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            Digitação vs <span className="text-gradient">Voz com IA</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Without Voice AI */}
          <div className="bg-white border border-border rounded-3xl p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 rounded-full blur-3xl" />
            
            <div className="relative">
              <div className="w-16 h-16 rounded-2xl bg-red-100 flex items-center justify-center mb-6">
                <Keyboard className="w-8 h-8 text-red-500" />
              </div>

              <h3 className="font-heading text-2xl font-bold text-foreground mb-2">
                Digitação Manual
              </h3>
              <p className="text-muted-foreground mb-6">O método tradicional que consome seu tempo</p>

              <ul className="space-y-4 mb-8">
                {[
                  "20+ minutos digitando por consulta",
                  "Olhos no teclado, não no paciente",
                  "Erros de digitação frequentes",
                  "Fadiga e dores nas mãos",
                  "Templates rígidos e limitados",
                  "Informações incompletas",
                  "Retrabalho constante",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <X className="w-3 h-3 text-red-500" />
                    </div>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>

              <p className="text-sm text-muted-foreground italic border-t border-border pt-4">
                O tempo gasto com burocracia é tempo longe do paciente.
              </p>
            </div>
          </div>

          {/* With Voice AI */}
          <div className="bg-gradient-to-br from-primary to-accent rounded-3xl p-8 relative overflow-hidden text-white">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl" />
            
            <div className="relative">
              <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mb-6">
                <Mic className="w-8 h-8 text-white" />
              </div>

              <h3 className="font-heading text-2xl font-bold mb-2">
                Com Médico no Bolso
              </h3>
              <p className="text-white/80 mb-6">Fale e deixe a IA trabalhar por você</p>

              <ul className="space-y-4 mb-8">
                {[
                  "3 minutos ditando por consulta",
                  "Olhos no paciente, voz no sistema",
                  "Transcrição com 99% de precisão",
                  "Conforto e ergonomia total",
                  "IA adapta ao seu estilo",
                  "Documentação completa e rica",
                  "Primeira versão quase final",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-white/90">{item}</span>
                  </li>
                ))}
              </ul>

              <Button size="lg" className="w-full bg-white text-primary hover:bg-white/90 group">
                Experimentar Agora — É Grátis
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;