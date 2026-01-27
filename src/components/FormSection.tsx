import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Shield } from "lucide-react";
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
    <section id="form-section" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="font-heading text-2xl md:text-3xl text-foreground">
              Agende uma demonstração
            </h2>
          </div>

          {/* Form Card */}
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-border/30">
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                id="form-name-input"
                type="text"
                name="name"
                placeholder="Seu nome completo"
                value={formData.name}
                onChange={handleChange}
                className="h-12 bg-gray-50 border-gray-200 text-foreground placeholder:text-muted-foreground"
                required
              />

              <Input
                type="email"
                name="email"
                placeholder="Seu melhor e-mail"
                value={formData.email}
                onChange={handleChange}
                className="h-12 bg-gray-50 border-gray-200 text-foreground placeholder:text-muted-foreground"
                required
              />

              <Input
                type="tel"
                name="phone"
                placeholder="Telefone com DDD"
                value={formData.phone}
                onChange={handleChange}
                className="h-12 bg-gray-50 border-gray-200 text-foreground placeholder:text-muted-foreground"
                required
              />

              <Button 
                type="submit" 
                size="lg" 
                className="w-full group bg-gradient-primary hover:opacity-90 h-12 text-base font-semibold"
              >
                Agendar demonstração
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>

            <div className="flex items-center justify-center gap-2 mt-5 text-muted-foreground text-xs">
              <Shield className="w-3 h-3" />
              <span>Dados protegidos pela LGPD</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormSection;
