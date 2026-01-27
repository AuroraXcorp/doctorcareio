import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, User, Mail, Phone, CheckCircle, Shield, Clock, Headphones } from "lucide-react";
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

  const benefits = [
    { icon: Clock, text: "Demo em 30 minutos" },
    { icon: Headphones, text: "Suporte dedicado" },
    { icon: Shield, text: "Dados protegidos" },
  ];

  return (
    <section id="form-section" className="py-20 md:py-32 bg-[#0a0a12] relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Glowing Orbs */}
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 right-0 w-[350px] h-[350px] bg-cyan-500/10 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center md:text-left">
              <span className="inline-block text-blue-400 tracking-[0.2em] uppercase text-sm font-medium mb-4">
                Próximo Passo
              </span>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-white mb-6 leading-tight">
                Agende uma{" "}
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  demonstração
                </span>
              </h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                Veja na prática como o Doctorcare pode transformar a gestão do seu consultório com inteligência artificial.
              </p>

              {/* Benefits */}
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3 justify-center md:justify-start">
                    <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                      <benefit.icon className="w-5 h-5 text-blue-400" />
                    </div>
                    <span className="text-gray-300">{benefit.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Form Card */}
            <div className="relative">
              {/* Card Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-3xl blur-xl" />
              
              <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl p-8 md:p-10 border border-white/10">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="relative group">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-blue-400 transition-colors" />
                    <Input
                      id="form-name-input"
                      type="text"
                      name="name"
                      placeholder="Seu nome completo"
                      value={formData.name}
                      onChange={handleChange}
                      className="pl-12 h-14 bg-white/5 border-white/10 text-white placeholder:text-gray-500 text-base rounded-xl focus:border-blue-500/50 focus:bg-white/10 transition-all"
                      required
                    />
                  </div>

                  <div className="relative group">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-blue-400 transition-colors" />
                    <Input
                      type="email"
                      name="email"
                      placeholder="Seu melhor e-mail"
                      value={formData.email}
                      onChange={handleChange}
                      className="pl-12 h-14 bg-white/5 border-white/10 text-white placeholder:text-gray-500 text-base rounded-xl focus:border-blue-500/50 focus:bg-white/10 transition-all"
                      required
                    />
                  </div>

                  <div className="relative group">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-blue-400 transition-colors" />
                    <Input
                      type="tel"
                      name="phone"
                      placeholder="Telefone com DDD"
                      value={formData.phone}
                      onChange={handleChange}
                      className="pl-12 h-14 bg-white/5 border-white/10 text-white placeholder:text-gray-500 text-base rounded-xl focus:border-blue-500/50 focus:bg-white/10 transition-all"
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full group bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white border-0 h-14 text-base font-semibold rounded-xl shadow-[0_0_30px_rgba(59,130,246,0.3)] hover:shadow-[0_0_40px_rgba(59,130,246,0.5)] transition-all duration-300"
                  >
                    Agendar demonstração
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>

                <div className="flex items-center justify-center gap-2 mt-6 text-gray-500 text-sm">
                  <Shield className="w-4 h-4" />
                  <span>Seus dados estão protegidos pela LGPD</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormSection;
