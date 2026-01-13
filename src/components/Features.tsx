import { 
  FileText, 
  Calendar, 
  Pill, 
  Clock, 
  Shield, 
  Brain,
  Wallet,
  Users,
  BarChart3,
  MessageSquare,
  Stethoscope,
  Smartphone
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: FileText,
      title: "Prontuário Inteligente",
      description: "Economize 7 minutos por consulta com preenchimento automático assistido por IA.",
      highlight: "-7 min/consulta",
    },
    {
      icon: Pill,
      title: "Receitas Express",
      description: "Emita receitas digitais em segundos com modelos personalizados e assinatura digital.",
      highlight: "Digital",
    },
    {
      icon: Calendar,
      title: "Agenda Otimizada",
      description: "Reduza faltas em até 70% com confirmação automática via WhatsApp.",
      highlight: "-70% faltas",
    },
    {
      icon: Brain,
      title: "IA Assistente",
      description: "Sugestões de diagnóstico, CID automático e resumo do prontuário com IA.",
      highlight: "GPT-4",
    },
    {
      icon: Wallet,
      title: "Controle Financeiro",
      description: "Acompanhe receitas, despesas e repasses. Relatórios completos em um clique.",
      highlight: "Completo",
    },
    {
      icon: Users,
      title: "Gestão de Pacientes",
      description: "Base de dados completa com histórico, anexos e comunicação integrada.",
      highlight: "Ilimitado",
    },
    {
      icon: Clock,
      title: "Telemedicina",
      description: "Consultas por vídeo integradas à plataforma com gravação opcional.",
      highlight: "HD",
    },
    {
      icon: BarChart3,
      title: "Relatórios Avançados",
      description: "Dashboards em tempo real para tomada de decisões estratégicas.",
      highlight: "Real-time",
    },
    {
      icon: MessageSquare,
      title: "Chat com Paciente",
      description: "Comunicação direta e segura com histórico salvo no prontuário.",
      highlight: "Criptografado",
    },
    {
      icon: Shield,
      title: "100% Seguro",
      description: "Dados criptografados e em conformidade total com a LGPD.",
      highlight: "LGPD",
    },
    {
      icon: Stethoscope,
      title: "Multi-Especialidade",
      description: "Templates específicos para cada especialidade médica.",
      highlight: "50+ áreas",
    },
    {
      icon: Smartphone,
      title: "Aplicativo Mobile",
      description: "Acesse de qualquer lugar com nosso app para iOS e Android.",
      highlight: "iOS/Android",
    },
  ];

  return (
    <section id="features" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            Funcionalidades
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            Tudo que você precisa em{" "}
            <span className="text-gradient">um só lugar</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A medicina evoluiu. Seu consultório também precisa evoluir. 
            Automatize tarefas repetitivas e foque no que realmente importa: seus pacientes.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-card border border-border rounded-2xl p-6 hover:shadow-card-hover hover:border-accent/30 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-accent" />
                </div>
                <span className="text-xs font-semibold text-accent bg-accent/10 px-2 py-1 rounded-full">
                  {feature.highlight}
                </span>
              </div>
              <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
