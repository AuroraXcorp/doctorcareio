import { Button } from "@/components/ui/button";
import { X, Check, ArrowRight, Clock, TrendingDown, AlertTriangle, Zap, Shield, Heart } from "lucide-react";

const Comparison = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-secondary via-secondary to-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-destructive/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Zap className="w-4 h-4" />
            Duas Opções
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Você decide o{" "}
            <span className="text-gradient">seu caminho</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Compare e veja a diferença que a tecnologia certa pode fazer na sua prática médica.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-10 max-w-6xl mx-auto">
          {/* Option 1 - Without Doctorcare */}
          <div className="group relative">
            {/* Card glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-destructive/20 to-transparent rounded-3xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
            
            <div className="relative bg-card border-2 border-destructive/20 rounded-3xl p-8 lg:p-10 h-full hover:border-destructive/40 transition-colors duration-300">
              {/* Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-destructive/20 to-destructive/5 flex items-center justify-center border border-destructive/20">
                  <X className="w-8 h-8 text-destructive" />
                </div>
                <div>
                  <h3 className="font-heading text-2xl font-bold text-foreground">
                    Sem Doctorcare
                  </h3>
                  <p className="text-sm text-destructive font-medium">O caminho difícil</p>
                </div>
              </div>

              {/* Problems summary */}
              <div className="grid grid-cols-3 gap-3 mb-8">
                <div className="text-center p-3 bg-destructive/5 rounded-xl border border-destructive/10">
                  <Clock className="w-5 h-5 text-destructive mx-auto mb-1" />
                  <div className="text-xs text-muted-foreground">+3h/dia</div>
                </div>
                <div className="text-center p-3 bg-destructive/5 rounded-xl border border-destructive/10">
                  <TrendingDown className="w-5 h-5 text-destructive mx-auto mb-1" />
                  <div className="text-xs text-muted-foreground">-30% receita</div>
                </div>
                <div className="text-center p-3 bg-destructive/5 rounded-xl border border-destructive/10">
                  <AlertTriangle className="w-5 h-5 text-destructive mx-auto mb-1" />
                  <div className="text-xs text-muted-foreground">Alto risco</div>
                </div>
              </div>

              {/* List */}
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
                  <li key={index} className="flex items-start gap-3 group/item">
                    <div className="w-6 h-6 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:bg-destructive/20 transition-colors">
                      <X className="w-3.5 h-3.5 text-destructive" />
                    </div>
                    <span className="text-muted-foreground group-hover/item:text-foreground transition-colors">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Footer */}
              <div className="p-4 bg-destructive/5 rounded-xl border border-destructive/10">
                <p className="text-sm text-muted-foreground text-center italic">
                  😓 Continue perdendo tempo e dinheiro com processos ultrapassados...
                </p>
              </div>
            </div>
          </div>

          {/* Option 2 - With Doctorcare */}
          <div className="group relative">
            {/* Card glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/30 to-primary/20 rounded-3xl blur-xl opacity-50 group-hover:opacity-80 transition-opacity duration-500" />
            
            {/* Popular badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
              <div className="bg-accent text-accent-foreground px-6 py-2 rounded-full text-sm font-bold shadow-lg flex items-center gap-2">
                <Zap className="w-4 h-4" />
                Recomendado
              </div>
            </div>
            
            <div className="relative bg-gradient-to-br from-primary via-primary to-primary/90 border-2 border-accent/30 rounded-3xl p-8 lg:p-10 h-full hover:border-accent/50 transition-colors duration-300 shadow-2xl">
              {/* Header */}
              <div className="flex items-center gap-4 mb-8 mt-2">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-accent/70 flex items-center justify-center shadow-lg">
                  <Check className="w-8 h-8 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="font-heading text-2xl font-bold text-primary-foreground">
                    Com Doctorcare
                  </h3>
                  <p className="text-sm text-accent font-medium">O caminho inteligente</p>
                </div>
              </div>

              {/* Benefits summary */}
              <div className="grid grid-cols-3 gap-3 mb-8">
                <div className="text-center p-3 bg-accent/10 rounded-xl border border-accent/20">
                  <Clock className="w-5 h-5 text-accent mx-auto mb-1" />
                  <div className="text-xs text-primary-foreground/80">-7min/consulta</div>
                </div>
                <div className="text-center p-3 bg-accent/10 rounded-xl border border-accent/20">
                  <Shield className="w-5 h-5 text-accent mx-auto mb-1" />
                  <div className="text-xs text-primary-foreground/80">100% LGPD</div>
                </div>
                <div className="text-center p-3 bg-accent/10 rounded-xl border border-accent/20">
                  <Heart className="w-5 h-5 text-accent mx-auto mb-1" />
                  <div className="text-xs text-primary-foreground/80">Mais vida</div>
                </div>
              </div>

              {/* List */}
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
                  <li key={index} className="flex items-start gap-3 group/item">
                    <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                      <Check className="w-3.5 h-3.5 text-accent-foreground" />
                    </div>
                    <span className="text-primary-foreground/90 group-hover/item:text-primary-foreground transition-colors">{item}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button variant="hero" size="lg" className="w-full group shadow-lg">
                Fale Conosco Hoje
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              {/* Footer */}
              <p className="text-center text-sm text-primary-foreground/60 mt-4">
                ✨ Junte-se a +10.000 médicos satisfeitos
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
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
