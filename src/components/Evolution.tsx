import { Bot, Calendar, FileText, Smartphone } from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "IA Assistente",
    description: "Inteligência artificial que auxilia no diagnóstico, sugere tratamentos e automatiza tarefas repetitivas. Seu consultório funcionando de forma inteligente 24 horas por dia.",
    gradient: "from-violet-500 to-purple-600",
  },
  {
    icon: Calendar,
    title: "Agenda Otimizada",
    description: "Sistema inteligente que organiza seus horários, reduz faltas com lembretes automáticos e maximiza sua produtividade. Nunca mais perca tempo com agendamentos manuais.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: FileText,
    title: "Fichas Online",
    description: "Prontuários digitais seguros e acessíveis de qualquer lugar. Histórico completo do paciente na palma da sua mão, com backup automático na nuvem.",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    icon: Smartphone,
    title: "App para Paciente",
    description: "Aplicativo exclusivo onde seus pacientes agendam consultas, acessam resultados e se comunicam diretamente com você. Experiência premium que fideliza.",
    gradient: "from-orange-500 to-pink-500",
  },
];

const Evolution = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-background via-muted/30 to-background overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Inovação Médica
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            A medicina está{" "}
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              evoluindo!
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Conheça as tecnologias que estão transformando a forma como você cuida dos seus pacientes
          </p>
        </div>

        {/* Features alternating layout */}
        <div className="space-y-20 md:space-y-32">
          {features.map((feature, index) => {
            const isEven = index % 2 === 0;
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className={`flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-8 md:gap-16`}
              >
                {/* Text Content */}
                <div className="flex-1 space-y-6">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} shadow-lg`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl md:text-4xl font-bold text-foreground">
                    {feature.title}
                  </h3>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>

                  <div className="flex items-center gap-2 text-primary font-medium">
                    <span className="w-8 h-0.5 bg-primary rounded-full"></span>
                    Saiba mais
                  </div>
                </div>

                {/* Image/Visual */}
                <div className="flex-1 w-full">
                  <div className={`relative aspect-[4/3] rounded-3xl bg-gradient-to-br ${feature.gradient} p-1 shadow-2xl`}>
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-3xl"></div>
                    <div className="relative h-full rounded-[22px] bg-card/95 backdrop-blur-sm flex items-center justify-center overflow-hidden">
                      {/* Decorative elements */}
                      <div className="absolute inset-0 opacity-10">
                        <div className={`absolute top-4 left-4 w-32 h-32 bg-gradient-to-br ${feature.gradient} rounded-full blur-3xl`}></div>
                        <div className={`absolute bottom-4 right-4 w-24 h-24 bg-gradient-to-br ${feature.gradient} rounded-full blur-2xl`}></div>
                      </div>
                      
                      {/* Main icon display */}
                      <div className="relative z-10 text-center p-8">
                        <div className={`inline-flex items-center justify-center w-24 h-24 md:w-32 md:h-32 rounded-3xl bg-gradient-to-br ${feature.gradient} shadow-xl mb-6`}>
                          <Icon className="w-12 h-12 md:w-16 md:h-16 text-white" />
                        </div>
                        <div className="flex items-center justify-center gap-2">
                          {[...Array(3)].map((_, i) => (
                            <div
                              key={i}
                              className={`w-2 h-2 rounded-full bg-gradient-to-r ${feature.gradient} opacity-${100 - i * 30}`}
                            ></div>
                          ))}
                        </div>
                      </div>

                      {/* Floating badges */}
                      <div className="absolute top-6 right-6 px-3 py-1.5 bg-background/80 backdrop-blur-sm rounded-full text-xs font-medium text-foreground shadow-lg">
                        ✨ Novo
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Evolution;
