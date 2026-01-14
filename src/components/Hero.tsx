import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle, ArrowRight, User, Mail, Phone } from "lucide-react";
import { useState } from "react";

const Hero = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section className="relative min-h-screen bg-hero overflow-hidden pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 dot-pattern opacity-30" />
      
      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">

            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-primary-foreground leading-tight mb-6">
              Médicos e IA impulsionam o{" "}
              <span className="relative">
                atendimento ao paciente
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  height="8"
                  viewBox="0 0 200 8"
                  fill="none"
                >
                  <path
                    d="M1 5.5C47.6667 2.16667 141 -2.4 199 5.5"
                    stroke="hsl(168 80% 42%)"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            <p className="text-primary-foreground/80 text-lg md:text-xl mb-8 max-w-xl mx-auto lg:mx-0">
              Cadastre pacientes, salve fichas, receitas, exames, agendamento e financeiro. 
              Tudo Online. Peça ajuda para a nossa <strong className="text-accent">Inteligência Artificial</strong>.
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start text-primary-foreground/70 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-accent" />
                <span>Atendimento personalizado</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-accent" />
                <span>Suporte 24/7</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-accent" />
                <span>IA integrada</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="relative">
            <div className="bg-card rounded-2xl p-8 shadow-card border border-border">
              <div className="text-center mb-6">
                <h2 className="font-heading text-2xl md:text-3xl text-foreground mb-2">
                  Fale Conosco Hoje
                </h2>
                <p className="text-muted-foreground">
                  Preencha seus dados e entraremos em contato
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    type="text"
                    name="name"
                    placeholder="Seu nome completo"
                    value={formData.name}
                    onChange={handleChange}
                    className="pl-11 h-12 bg-background border-input"
                    required
                  />
                </div>

                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    type="email"
                    name="email"
                    placeholder="Seu melhor e-mail"
                    value={formData.email}
                    onChange={handleChange}
                    className="pl-11 h-12 bg-background border-input"
                    required
                  />
                </div>

                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    type="tel"
                    name="phone"
                    placeholder="Telefone com DDD"
                    value={formData.phone}
                    onChange={handleChange}
                    className="pl-11 h-12 bg-background border-input"
                    required
                  />
                </div>

                <Button type="submit" variant="hero" size="xl" className="w-full group">
                  Fale Conosco Hoje
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>

              <p className="text-center text-muted-foreground text-sm mt-4">
                🔒 Seus dados estão seguros e protegidos pela LGPD
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
