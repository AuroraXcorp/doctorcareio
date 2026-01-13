import { AlertTriangle, DollarSign, Bot, TrendingUp } from "lucide-react";

const GlosasSection = () => {
  return (
    <section className="py-20 md:py-32 bg-card relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-accent/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <span className="inline-flex items-center gap-2 bg-destructive/10 text-destructive px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <AlertTriangle className="w-4 h-4" />
              Recupere Seu Dinheiro
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 leading-tight">
              Evite Erros Comuns e{" "}
              <span className="text-gradient">Ganhe Dinheiro</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Com a IA checando as <strong className="text-foreground">Glosas do paciente automaticamente</strong>, 
              você evita perder dinheiro por conta do convênio. Nosso sistema roda em paralelo 
              para recuperar esse dinheiro que seria perdido.
            </p>
            
            {/* Stats */}
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-background rounded-xl border border-border">
                <DollarSign className="w-8 h-8 text-accent mx-auto mb-2" />
                <div className="font-heading text-2xl font-bold text-foreground">+35%</div>
                <div className="text-sm text-muted-foreground">Receita Recuperada</div>
              </div>
              <div className="text-center p-4 bg-background rounded-xl border border-border">
                <Bot className="w-8 h-8 text-accent mx-auto mb-2" />
                <div className="font-heading text-2xl font-bold text-foreground">24/7</div>
                <div className="text-sm text-muted-foreground">IA Trabalhando</div>
              </div>
              <div className="text-center p-4 bg-background rounded-xl border border-border">
                <TrendingUp className="w-8 h-8 text-accent mx-auto mb-2" />
                <div className="font-heading text-2xl font-bold text-foreground">-90%</div>
                <div className="text-sm text-muted-foreground">Glosas Rejeitadas</div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-accent/20 to-primary/20 rounded-3xl p-8 border border-accent/20">
              <div className="bg-background rounded-2xl p-6 shadow-lg mb-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-sm font-medium text-foreground">IA Analisando Glosas</span>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-green-500/10 rounded-lg border border-green-500/20">
                    <span className="text-sm text-foreground">Consulta #4521</span>
                    <span className="text-xs text-green-600 font-semibold">✓ Aprovada</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-yellow-500/10 rounded-lg border border-yellow-500/20">
                    <span className="text-sm text-foreground">Procedimento #892</span>
                    <span className="text-xs text-yellow-600 font-semibold">⚡ Corrigindo...</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-green-500/10 rounded-lg border border-green-500/20">
                    <span className="text-sm text-foreground">Exame #1203</span>
                    <span className="text-xs text-green-600 font-semibold">✓ R$ 1.250 recuperado</span>
                  </div>
                </div>
              </div>
              <div className="text-center text-sm text-muted-foreground">
                Sistema rodando em paralelo • Atualização em tempo real
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlosasSection;
