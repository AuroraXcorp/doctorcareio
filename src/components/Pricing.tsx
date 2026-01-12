import { Button } from "@/components/ui/button";
import { Check, ArrowRight, Sparkles } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Gratuito",
      description: "Para começar a explorar",
      price: "R$ 0",
      period: "/mês",
      features: [
        "Até 50 pacientes",
        "Prontuário básico",
        "Agenda simples",
        "Receitas digitais",
        "Suporte por email",
      ],
      cta: "Começar Grátis",
      popular: false,
    },
    {
      name: "Profissional",
      description: "Para médicos individuais",
      price: "R$ 127",
      period: "/mês",
      features: [
        "Pacientes ilimitados",
        "IA Assistente completa",
        "Agenda com WhatsApp",
        "Controle financeiro",
        "Telemedicina HD",
        "Relatórios avançados",
        "Suporte prioritário",
      ],
      cta: "Escolher Plano",
      popular: true,
    },
    {
      name: "Clínica",
      description: "Para equipes e clínicas",
      price: "R$ 297",
      period: "/mês",
      features: [
        "Tudo do Profissional",
        "Até 5 profissionais",
        "Gestão multi-agenda",
        "Relatórios consolidados",
        "API de integração",
        "Treinamento dedicado",
        "Suporte via videochamada",
      ],
      cta: "Falar com Vendas",
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 md:py-32 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            Preços
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            Planos que cabem no seu{" "}
            <span className="text-gradient">bolso</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comece grátis e evolua conforme suas necessidades. Sem surpresas, sem taxas escondidas.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-card rounded-2xl p-8 ${
                plan.popular
                  ? "border-2 border-accent shadow-accent"
                  : "border border-border"
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    <Sparkles className="w-4 h-4" />
                    Mais Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                  {plan.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
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
                    <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-accent" />
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
      </div>
    </section>
  );
};

export default Pricing;
