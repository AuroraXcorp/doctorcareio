import { Shield, Lock, Server, Headphones } from "lucide-react";

const Security = () => {
  const features = [
    {
      icon: Shield,
      title: "Conformidade LGPD",
      description:
        "Totalmente adaptado à Lei Geral de Proteção de Dados. Seus dados e os de seus pacientes estão protegidos.",
    },
    {
      icon: Lock,
      title: "Criptografia de Ponta",
      description:
        "Dados criptografados em trânsito e em repouso com os mais altos padrões de segurança do mercado.",
    },
    {
      icon: Server,
      title: "Backup Automático",
      description:
        "Seus dados são salvos automaticamente em servidores redundantes. Nunca perca uma informação.",
    },
    {
      icon: Headphones,
      title: "Suporte Dedicado",
      description:
        "Equipe de suporte disponível por chat, telefone e videochamada para resolver qualquer dúvida.",
    },
  ];

  return (
    <section className="py-20 md:py-32 section-dark relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 dot-pattern opacity-10" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-white mb-6">
            Seus dados protegidos com{" "}
            <span className="text-accent">máxima segurança</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Utilizamos as mesmas tecnologias de segurança dos maiores bancos do mundo.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center group"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/30 transition-colors">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-xl text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-white/60 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Security;
