import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, User, Mail, Phone } from "lucide-react";
import { useState } from "react";

const FormSection = () => {
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
    <section id="form-section" className="py-20 md:py-32 bg-gradient-to-b from-background to-secondary relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-gradient-to-br from-primary/10 to-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tl from-accent/10 to-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-10">
            <span className="inline-block text-muted-foreground tracking-[0.3em] uppercase text-sm font-medium mb-4">
              Próximo Passo
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
              Fale Conosco Hoje
            </h2>
            <p className="text-muted-foreground text-lg">
              Preencha seus dados e entraremos em contato para uma demonstração personalizada
            </p>
          </div>

          {/* Form Card */}
          <div className="bg-card rounded-2xl p-8 md:p-10 shadow-xl-custom border border-border/50">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  id="form-name-input"
                  type="text"
                  name="name"
                  placeholder="Seu nome completo"
                  value={formData.name}
                  onChange={handleChange}
                  className="pl-11 h-14 bg-secondary/50 border-border text-base"
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
                  className="pl-11 h-14 bg-secondary/50 border-border text-base"
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
                  className="pl-11 h-14 bg-secondary/50 border-border text-base"
                  required
                />
              </div>

              <Button type="submit" size="xl" className="w-full group bg-gradient-primary hover:opacity-90 transition-opacity h-14 text-lg">
                Fale Conosco Hoje
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>

            <p className="text-center text-muted-foreground text-sm mt-6">
              🔒 Seus dados estão seguros e protegidos pela LGPD
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormSection;
