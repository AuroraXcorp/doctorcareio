import { Button } from "@/components/ui/button";
import { Check, ArrowRight, Sparkles, Mic } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      description: "Para conhecer a plataforma",
      price: "Grátis",
      period: "por 7 dias",
      features: [
        "100 comandos de voz/mês",
        "Prontuário inteligente",
        "1 usuário",
        "Suporte por email",
        "Templates básicos",
      ],
      cta: "Começar Grátis",
      popular: false,
    },
    {
      name: "Profissional",
      description: "Para médicos autônomos",
      price: "R$ 197",
      period: "/mês",
      features: [
        "Comandos de voz ilimitados",
        "IA Assistente completa",
        "Receitas e atestados por voz",
        "Sugestões clínicas com IA",
        "Integração WhatsApp",
        "Suporte prioritário 24/7",
        "50+ templates especializados",
      ],
      cta: "Escolher Profissional",
      popular: true,
    },
    {
      name: "Clínica",
      description: "Para equipes e clínicas",
      price: "R$ 497",
      period: "/mês",
      features: [
        "Tudo do Profissional",
        "Até 10 profissionais",
        "Painel administrativo",
        "Relatórios consolidados",
        "API de integração",
        "Treinamento dedicado",
        "Gerente de sucesso",
      ],
      cta: "Falar com Vendas",
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Mic className="w-4 h-4" />
            Preços
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            Planos que cabem no seu{" "}
            <span className="text-gradient">orçamento</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comece grátis e evolua conforme sua necessidade. ROI garantido: 
            o tempo economizado paga o investimento.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-3xl p-8 ${
                plan.popular
                  ? "border-2 border-primary shadow-accent ring-4 ring-primary/10"
                  : "border border-border"
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-accent text-white px-5 py-2 rounded-full text-sm font-bold shadow-lg">
                    <Sparkles className="w-4 h-4" />
                    Mais Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                  {plan.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-6">
                  {plan.description}
                </p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="font-heading text-4xl font-bold text-foreground">
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.popular ? "hero" : "outline"}
                size="lg"
                className="w-full group"
              >
                {plan.cta}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          ))}
        </div>

        {/* Guarantee */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            <span className="text-green-500">✓</span>
            Garantia de 30 dias. Se não gostar, devolvemos 100% do valor.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;