import { useState } from "react";
import { ArrowRight, Users, Bot, DollarSign, Calendar, FileText, Headphones } from "lucide-react";

const features = [
  {
    id: "gestao-pacientes",
    title: "Gestão de Pacientes",
    description: "Gerencie todos os seus pacientes em um só lugar com prontuário eletrônico completo e histórico detalhado.",
    icon: Users,
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop"
  },
  {
    id: "ia-assistente",
    title: "IA Assistente",
    description: "Assistente inteligente que ajuda no diagnóstico, prescrições e otimiza sua rotina clínica.",
    icon: Bot,
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop"
  },
  {
    id: "controle-financeiro",
    title: "Controle Financeiro e NFs-e",
    description: "Controle completo de faturamento, emissão de notas fiscais e relatórios financeiros automatizados.",
    icon: DollarSign,
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop"
  },
  {
    id: "agenda-crm",
    title: "Agenda e CRM",
    description: "Agenda inteligente com confirmação automática e CRM para fidelização dos seus pacientes.",
    icon: Calendar,
    image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=600&h=400&fit=crop"
  },
  {
    id: "receituario",
    title: "Receituário Integrado",
    description: "Prescrições digitais com assinatura eletrônica e integração com farmácias parceiras.",
    icon: FileText,
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=600&h=400&fit=crop"
  },
  {
    id: "suporte",
    title: "Suporte Humano",
    description: "Equipe de suporte dedicada disponível para ajudar você em todas as etapas.",
    icon: Headphones,
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop"
  }
];

const FeaturesShowcase = () => {
  const [activeFeature, setActiveFeature] = useState(features[0]);

  return (
    <section className="py-20 md:py-32 bg-[#0a0a0a]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Tudo que você precisa em um só lugar
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Descubra como cada funcionalidade pode transformar sua prática médica
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Left side - Feature list */}
          <div className="space-y-2">
            {features.map((feature) => {
              const isActive = activeFeature.id === feature.id;
              const Icon = feature.icon;
              
              return (
                <div key={feature.id}>
                  <button
                    onClick={() => setActiveFeature(feature)}
                    className={`w-full text-left p-6 rounded-2xl transition-all duration-300 group ${
                      isActive
                        ? "bg-white/5 border border-white/10"
                        : "hover:bg-white/[0.02] border border-transparent"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className={`p-2 rounded-lg transition-colors ${
                          isActive ? "bg-primary/20 text-primary" : "bg-white/5 text-gray-400 group-hover:text-white"
                        }`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className={`text-xl font-semibold transition-colors ${
                            isActive ? "text-white" : "text-gray-300 group-hover:text-white"
                          }`}>
                            {feature.title}
                          </h3>
                          {isActive && (
                            <p className="text-gray-400 mt-2 text-sm md:text-base animate-fade-in">
                              {feature.description}
                            </p>
                          )}
                        </div>
                      </div>
                      <div className={`p-2 rounded-lg transition-all ${
                        isActive 
                          ? "bg-white text-black" 
                          : "bg-transparent text-gray-500 group-hover:text-white"
                      }`}>
                        <ArrowRight className={`w-5 h-5 transition-transform ${
                          isActive ? "" : "group-hover:translate-x-1"
                        }`} />
                      </div>
                    </div>
                  </button>
                  
                  {/* Mobile: Image appears below active card */}
                  {isActive && (
                    <div className="lg:hidden mt-4 mb-4 animate-fade-in">
                      <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm">
                        <img
                          src={feature.image}
                          alt={feature.title}
                          className="w-full aspect-[4/3] object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                          <h4 className="text-lg font-bold text-white mb-1">{feature.title}</h4>
                          <p className="text-gray-300 text-sm">{feature.description}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right side - Feature image (desktop only) */}
          <div className="hidden lg:block relative lg:sticky lg:top-24">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm">
              <img
                key={activeFeature.id}
                src={activeFeature.image}
                alt={activeFeature.title}
                className="w-full aspect-[4/3] object-cover animate-fade-in"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h4 className="text-xl font-bold text-white mb-2">{activeFeature.title}</h4>
                <p className="text-gray-300 text-sm">{activeFeature.description}</p>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesShowcase;
