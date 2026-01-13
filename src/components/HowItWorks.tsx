import { Mic, Brain, FileText, CheckCircle, ArrowRight } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      icon: Mic,
      title: "Fale ou Escreva",
      description: "Dite informações do paciente, sintomas, diagnósticos ou qualquer dado clínico. A IA entende linguagem natural em português.",
      color: "from-blue-500 to-cyan-400",
    },
    {
      number: "02",
      icon: Brain,
      title: "A IA Processa",
      description: "Nossa inteligência artificial especializada em medicina interpreta, organiza e estrutura as informações automaticamente.",
      color: "from-cyan-400 to-teal-400",
    },
    {
      number: "03",
      icon: FileText,
      title: "Documentos Prontos",
      description: "Prontuários, receitas, atestados e laudos são preenchidos instantaneamente. Você só revisa e confirma.",
      color: "from-teal-400 to-green-400",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-32 bg-muted/30 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-accent/5 to-transparent rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Mic className="w-4 h-4" />
            Como Funciona
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            Simples como{" "}
            <span className="text-gradient">conversar</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Fale naturalmente como se estivesse ditando para um assistente. 
            A IA faz todo o trabalho de documentação para você.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-20 left-full w-full h-0.5 bg-gradient-to-r from-border to-transparent z-0">
                  <ArrowRight className="absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-8 text-muted-foreground/30" />
                </div>
              )}

              <div className="bg-white rounded-3xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 group-hover:-translate-y-2 relative z-10 h-full">
                {/* Step Number */}
                <span className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center text-white font-heading font-bold text-lg shadow-lg">
                  {step.number}
                </span>

                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-6 shadow-lg`}>
                  <step.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Demo Box */}
        <div className="mt-16 md:mt-20 max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-primary to-accent rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-white/5" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1 text-center md:text-left">
                <h3 className="font-heading text-2xl md:text-3xl font-bold mb-4">
                  Veja na prática
                </h3>
                <p className="text-white/80 text-lg mb-6">
                  "Paciente masculino, 45 anos, queixa de dor torácica há 3 dias..."
                </p>
                <div className="flex items-center gap-4 justify-center md:justify-start">
                  <div className="flex items-center gap-2 bg-white/20 rounded-full px-4 py-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">IA processando...</span>
                  </div>
                  <CheckCircle className="w-6 h-6 text-green-300" />
                  <span className="text-white/80">Prontuário preenchido!</span>
                </div>
              </div>
              
              <div className="relative">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-white/20 flex items-center justify-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white flex items-center justify-center voice-pulse">
                    <Mic className="w-8 h-8 md:w-10 md:h-10 text-primary" />
                  </div>
                </div>
                {/* Pulse Rings */}
                <div className="absolute inset-0 rounded-full border-2 border-white/30 voice-ring" />
                <div className="absolute inset-0 rounded-full border-2 border-white/20 voice-ring" style={{ animationDelay: '0.5s' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;