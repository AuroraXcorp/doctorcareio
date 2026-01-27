import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, User, Mail, Phone, Shield } from "lucide-react";
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
    <section id="form-section" className="py-20 md:py-32 bg-secondary relative overflow-hidden">
      {/* Subtle tech grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />
      
      {/* Subtle gradient orbs */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-lg mx-auto">
          {/* Section Header */}
          <div className="text-center mb-8">
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground mb-3">
              Comece agora mesmo
            </h2>
            <p className="text-muted-foreground text-base md:text-lg">
              Preencha seus dados e comece gratuitamente. Sem compromisso.
            </p>
          </div>

          {/* Form Card - Clean & Minimal */}
          <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-border/60 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative group">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                <Input
                  id="form-name-input"
                  type="text"
                  name="name"
                  placeholder="Seu nome completo"
                  value={formData.name}
                  onChange={handleChange}
                  className="pl-12 h-12 bg-background border-border/80 text-base focus:border-primary/50 focus:ring-primary/20 transition-all"
                  required
                />
              </div>

              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                <Input
                  type="email"
                  name="email"
                  placeholder="Seu melhor e-mail"
                  value={formData.email}
                  onChange={handleChange}
                  className="pl-12 h-12 bg-background border-border/80 text-base focus:border-primary/50 focus:ring-primary/20 transition-all"
                  required
                />
              </div>

              <div className="relative group">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                <Input
                  type="tel"
                  name="phone"
                  placeholder="Telefone com DDD"
                  value={formData.phone}
                  onChange={handleChange}
                  className="pl-12 h-12 bg-background border-border/80 text-base focus:border-primary/50 focus:ring-primary/20 transition-all"
                  required
                />
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full group bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-all h-12 text-base font-semibold shadow-md hover:shadow-lg"
              >
                Comece agora mesmo
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>

            {/* Security Badge - Minimal */}
            <div className="flex items-center justify-center gap-2 mt-5 pt-4 border-t border-border/40">
              <Shield className="w-4 h-4 text-primary/70" />
              <span className="text-xs text-muted-foreground">
                Dados protegidos pela LGPD
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormSection;
