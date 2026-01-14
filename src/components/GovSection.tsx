import { Eye, FileCheck, ShieldCheck, AlertCircle } from "lucide-react";

const GovSection = () => {
  return (
    <section className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Warning pattern background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-20 h-20 border-4 border-destructive rotate-45" />
        <div className="absolute bottom-20 right-20 w-16 h-16 border-4 border-destructive rotate-12" />
        <div className="absolute top-1/3 right-1/4 w-12 h-12 border-4 border-destructive -rotate-12" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Visual - Left side */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              {/* Main card */}
              <div className="bg-card rounded-3xl p-8 border border-border shadow-card">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center">
                    <FileCheck className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="font-heading font-semibold text-foreground">NFS-e Integrada</div>
                    <div className="text-sm text-muted-foreground">Conexão direta com GOV.BR</div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-4 bg-green-500/10 rounded-xl border border-green-500/20">
                    <ShieldCheck className="w-6 h-6 text-green-600" />
                    <div>
                      <div className="font-medium text-foreground text-sm">Emissão Automática</div>
                      <div className="text-xs text-muted-foreground">Notas fiscais em conformidade</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-green-500/10 rounded-xl border border-green-500/20">
                    <ShieldCheck className="w-6 h-6 text-green-600" />
                    <div>
                      <div className="font-medium text-foreground text-sm">Relatórios Fiscais</div>
                      <div className="text-xs text-muted-foreground">Documentação sempre em dia</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-green-500/10 rounded-xl border border-green-500/20">
                    <ShieldCheck className="w-6 h-6 text-green-600" />
                    <div>
                      <div className="font-medium text-foreground text-sm">Auditoria Facilitada</div>
                      <div className="text-xs text-muted-foreground">Histórico completo acessível</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                2026 Ready
              </div>
            </div>
          </div>

          {/* Content - Right side */}
          <div className="order-1 lg:order-2">
            <span className="inline-flex items-center gap-2 bg-destructive/10 text-destructive px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Eye className="w-4 h-4" />
              Atenção: Novas Regulamentações
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 leading-tight">
              O Governo está{" "}
              <span className="text-destructive">de olho em você</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              Agora em <strong className="text-foreground">2026</strong>, novas práticas de monitoramento 
              de pacientes vieram à tona. As sanções para quem não se adequar podem ser severas.
            </p>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              Com o nosso sistema de <strong className="text-foreground">NFS-e (Nota Fiscal Eletrônica)</strong> integrada 
              com o GOV, você se livra de problemas que possam vir por conta das novas sanções.
            </p>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Por dentro do sistema financeiro vai ter a opção de escolher se quer enviar a nota fiscal do serviço automaticamente ou não.
            </p>

            {/* Alert box */}
            <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <AlertCircle className="w-6 h-6 text-destructive flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-foreground mb-1">Não seja pego de surpresa</div>
                  <div className="text-sm text-muted-foreground">
                    Médicos que não emitirem NFS-e podem enfrentar multas de até R$ 50 mil reais. 
                    Automatize agora e fique tranquilo.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GovSection;
