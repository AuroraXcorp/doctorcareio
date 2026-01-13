import { 
  Mic, 
  FileText, 
  Calendar, 
  Pill, 
  Brain,
  MessageSquare,
  Shield,
  Smartphone,
  Zap,
  Stethoscope,
  FileCheck,
  Languages
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Mic,
      title: "Ditado por Voz",
      description: "Dite prontuários, anamneses e evoluções. A IA transcreve e formata automaticamente.",
      highlight: "Hands-free",
    },
    {
      icon: Brain,
      title: "IA Especializada",
      description: "Treinada com milhões de termos médicos. Entende abreviações, CID e nomenclatura clínica.",
      highlight: "GPT-4 Medical",
    },
    {
      icon: FileText,
      title: "Prontuário Inteligente",
      description: "Preenchimento automático baseado na sua fala. Sugere campos e complementa informações.",
      highlight: "-7 min/consulta",
    },
    {
      icon: Pill,
      title: "Receitas por Comando",
      description: "Diga o medicamento e a posologia. A receita é gerada pronta para assinatura digital.",
      highlight: "Assinatura Digital",
    },
    {
      icon: FileCheck,
      title: "Laudos e Atestados",
      description: "Gere documentos completos apenas ditando as informações principais.",
      highlight: "Templates IA",
    },
    {
      icon: Stethoscope,
      title: "Sugestões Clínicas",
      description: "A IA sugere diagnósticos diferenciais e exames baseados nos sintomas relatados.",
      highlight: "Apoio à Decisão",
    },
    {
      icon: Calendar,
      title: "Agenda por Voz",
      description: "Agende, remarque ou cancele consultas apenas falando. Integração com WhatsApp.",
      highlight: "-70% Faltas",
    },
    {
      icon: MessageSquare,
      title: "Chat Assistente",
      description: "Pergunte qualquer dúvida médica. A IA responde com referências atualizadas.",
      highlight: "24/7",
    },
    {
      icon: Languages,
      title: "Português Nativo",
      description: "Treinada especificamente para o português brasileiro e terminologia médica local.",
      highlight: "PT-BR",
    },
    {
      icon: Shield,
      title: "100% Seguro",
      description: "Criptografia de ponta a ponta. Dados em servidores no Brasil. Conformidade LGPD.",
      highlight: "LGPD",
    },
    {
      icon: Smartphone,
      title: "Multiplataforma",
      description: "Funciona no computador, tablet ou celular. Dite de qualquer lugar.",
      highlight: "iOS/Android",
    },
    {
      icon: Zap,
      title: "Resposta Instantânea",
      description: "Latência menor que 500ms. A IA responde quase em tempo real.",
      highlight: "< 0.5s",
    },
  ];

  return (
    <section id="features" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Zap className="w-4 h-4" />
            Funcionalidades
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            Tudo que você precisa,{" "}
            <span className="text-gradient">ativado por voz</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Um assistente completo que entende você. Automatize sua rotina 
            e dedique mais tempo ao que realmente importa: seus pacientes.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-muted/30 hover:bg-white border border-transparent hover:border-primary/20 rounded-2xl p-6 hover:shadow-card transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <span className="text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">
                  {feature.highlight}
                </span>
              </div>
              <h3 className="font-heading font-bold text-lg text-foreground mb-2">
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