import { Shield, Lock, Server, Headphones, Award, Eye } from "lucide-react";

const Security = () => {
  const features = [
    {
      icon: Shield,
      title: "Conformidade LGPD",
      description:
        "100% adaptado à Lei Geral de Proteção de Dados. Seus dados e dos pacientes estão juridicamente protegidos.",
    },
    {
      icon: Lock,
      title: "Criptografia AES-256",
      description:
        "O mesmo padrão de segurança usado por bancos. Dados criptografados em trânsito e em repouso.",
    },
    {
      icon: Server,
      title: "Servidores no Brasil",
      description:
        "Dados armazenados em data centers brasileiros com redundância e backup automático diário.",
    },
    {
      icon: Eye,
      title: "Privacidade Total",
      description:
        "Suas gravações de voz são processadas e descartadas. Não armazenamos áudio, apenas texto.",
    },
    {
      icon: Award,
      title: "Certificações",
      description:
        "ISO 27001, SOC 2 Type II. Auditado por empresas independentes de segurança.",
    },
    {
      icon: Headphones,
      title: "Suporte Especializado",
      description:
        "Equipe de suporte com conhecimento médico disponível por chat, telefone e videochamada.",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-primary via-primary to-accent relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 dot-pattern opacity-10" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 bg-white/15 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-white/20">
            <Shield className="w-4 h-4" />
            Segurança e Privacidade
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-white mb-6">
            Seus dados protegidos com{" "}
            <span className="text-white/90">máxima segurança</span>
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Investimos milhões em infraestrutura de segurança para que você 
            possa focar apenas na medicina.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-heading font-bold text-xl text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-white/70 leading-relaxed">
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