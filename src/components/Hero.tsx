import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mic, MicOff, Sparkles, ArrowRight, User, Mail, Phone, CheckCircle, Play } from "lucide-react";
import { useState } from "react";

const Hero = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section className="relative min-h-screen overflow-hidden pt-20">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-hero" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-3xl" />
      </div>

      {/* Wave Pattern */}
      <div className="absolute bottom-0 left-0 right-0 h-32 wave-pattern opacity-30" />

      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-8 border border-white/20">
              <Sparkles className="w-4 h-4 text-yellow-300" />
              Powered by IA Generativa
            </div>

            {/* Main Headline */}
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1] mb-6">
              Seu Assistente de Voz{" "}
              <span className="relative inline-block">
                <span className="relative z-10">Inteligente</span>
                <span className="absolute inset-0 bg-white/20 blur-xl rounded-full" />
              </span>
              <br />
              <span className="text-white/90">para a Medicina</span>
            </h1>

            {/* Subtitle */}
            <p className="text-white/80 text-lg md:text-xl mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Fale ou escreva. A IA entende, transcreve e preenche prontuários, 
              receitas e documentos automaticamente. Como ter um{" "}
              <strong className="text-white">ChatGPT especializado</strong> trabalhando ao seu lado.
            </p>

            {/* Voice Demo Button */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button variant="secondary" size="xl" className="group gap-3 bg-white text-primary hover:bg-white/90">
                <div className="relative">
                  <Mic className="w-5 h-5" />
                  <span className="absolute inset-0 bg-primary/20 rounded-full animate-ping" />
                </div>
                Ver Demonstração
                <Play className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start text-white/70 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-300" />
                <span>Sem necessidade de digitar</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-300" />
                <span>Funciona em português</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-300" />
                <span>100% LGPD</span>
              </div>
            </div>
          </div>

          {/* Contact Form Card */}
          <div className="relative">
            {/* Glow Effect */}
            <div className="absolute -inset-4 bg-white/20 rounded-3xl blur-2xl" />
            
            <div className="relative bg-white rounded-3xl p-8 md:p-10 shadow-2xl">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Mic className="w-8 h-8 text-white" />
                </div>
                <h2 className="font-heading text-2xl md:text-3xl text-foreground mb-2">
                  Experimente Grátis
                </h2>
                <p className="text-muted-foreground">
                  7 dias para testar todas as funcionalidades
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    type="text"
                    name="name"
                    placeholder="Seu nome completo"
                    value={formData.name}
                    onChange={handleChange}
                    className="pl-12 h-14 bg-muted/50 border-transparent focus:border-primary rounded-xl text-base"
                    required
                  />
                </div>

                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    type="email"
                    name="email"
                    placeholder="Seu melhor e-mail"
                    value={formData.email}
                    onChange={handleChange}
                    className="pl-12 h-14 bg-muted/50 border-transparent focus:border-primary rounded-xl text-base"
                    required
                  />
                </div>

                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    type="tel"
                    name="phone"
                    placeholder="Telefone com DDD"
                    value={formData.phone}
                    onChange={handleChange}
                    className="pl-12 h-14 bg-muted/50 border-transparent focus:border-primary rounded-xl text-base"
                    required
                  />
                </div>

                <Button type="submit" variant="hero" size="xl" className="w-full group text-lg">
                  Quero Testar Agora
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>

              <p className="text-center text-muted-foreground text-sm mt-6 flex items-center justify-center gap-2">
                <span className="text-green-500">🔒</span>
                Seus dados estão seguros e protegidos
              </p>
            </div>

            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl animate-float hidden md:flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center text-white">
                <Mic className="w-6 h-6" />
              </div>
              <div>
                <p className="font-heading font-bold text-foreground text-lg">+2M</p>
                <p className="text-sm text-muted-foreground">Comandos de voz</p>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-xl animate-float hidden md:flex items-center gap-3" style={{ animationDelay: '1s' }}>
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                <span className="text-2xl">⚡</span>
              </div>
              <div>
                <p className="font-heading font-bold text-foreground text-lg">-70%</p>
                <p className="text-sm text-muted-foreground">Tempo digitando</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;