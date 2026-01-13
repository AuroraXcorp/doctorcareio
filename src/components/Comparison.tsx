import { Button } from "@/components/ui/button";
import { X, Check, ArrowRight } from "lucide-react";

const Comparison = () => {
  return (
    <section className="py-20 md:py-32 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            Duas Opções
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            Você decide o seu caminho
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Option 1 - Without Doctorcare */}
          <div className="bg-card border border-border rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-destructive/5 rounded-full blur-3xl" />
            
            <div className="relative">
              <div className="w-16 h-16 rounded-2xl bg-destructive/10 flex items-center justify-center mb-6">
                <X className="w-8 h-8 text-destructive" />
              </div>

              <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
                Sem Doctorcare
              </h3>

              <ul className="space-y-4 mb-8">
                {[
                  "Horas perdidas com papelada",
                  "Agenda desorganizada e faltas frequentes",
                  "Prontuários espalhados e difíceis de encontrar",
                  "Receitas manuais sujeitas a erros",
                  "Sem controle financeiro real",
                  "Dados vulneráveis e sem backup",
                  "Estresse e sobrecarga diária",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <X className="w-3 h-3 text-destructive" />
                    </div>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>

              <p className="text-sm text-muted-foreground italic">
                Continue perdendo tempo e dinheiro com processos ultrapassados...
              </p>
            </div>
          </div>

          {/* Option 2 - With Doctorcare */}
          <div className="bg-primary border border-primary rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-full blur-3xl" />
            
            <div className="relative">
              <div className="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center mb-6">
                <Check className="w-8 h-8 text-accent" />
              </div>

              <h3 className="font-heading text-2xl font-bold text-primary-foreground mb-4">
                Com Doctorcare
              </h3>

              <ul className="space-y-4 mb-8">
                {[
                  "Prontuário preenchido em segundos com IA",
                  "Agenda inteligente com confirmação automática",
                  "Todos os dados centralizados e acessíveis",
                  "Receitas digitais com assinatura eletrônica",
                  "Dashboards financeiros em tempo real",
                  "Dados criptografados e backup automático",
                  "Mais tempo para você e seus pacientes",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-accent-foreground" />
                    </div>
                    <span className="text-primary-foreground/90">{item}</span>
                  </li>
                ))}
              </ul>

              <Button variant="hero" size="lg" className="w-full group">
                Começar Agora — É Grátis
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
