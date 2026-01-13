import { Mic, Users, Clock, Sparkles } from "lucide-react";

const Stats = () => {
  const stats = [
    {
      icon: Users,
      value: "10.000+",
      label: "Médicos Ativos",
      description: "Profissionais usando diariamente",
    },
    {
      icon: Mic,
      value: "2M+",
      label: "Comandos de Voz",
      description: "Processados por mês",
    },
    {
      icon: Clock,
      value: "70%",
      label: "Tempo Economizado",
      description: "Em documentação clínica",
    },
    {
      icon: Sparkles,
      value: "99.2%",
      label: "Precisão da IA",
      description: "Em transcrições médicas",
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-white border-y border-border/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="w-7 h-7 text-primary" />
              </div>
              <p className="font-heading text-3xl md:text-4xl font-bold text-gradient mb-1">
                {stat.value}
              </p>
              <p className="font-heading font-semibold text-foreground mb-1">
                {stat.label}
              </p>
              <p className="text-sm text-muted-foreground">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;