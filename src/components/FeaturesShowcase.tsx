import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

const FeaturesShowcase = () => {
  return (
    <section className="py-20 md:py-32 bg-[#0a0a0a]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Funcionalidades
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Tudo que você precisa em um só lugar
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
            A medicina evoluiu. Seu consultório também precisa evoluir. Automatize tarefas repetitivas e foque no que realmente importa: seus pacientes.
          </p>
        </div>

        {/* Image */}
        <div className="relative max-w-4xl mx-auto mb-10">
          <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm">
            <img
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&h=600&fit=crop"
              alt="Doctor Care Platform"
              className="w-full aspect-video object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
        </div>

        {/* Button */}
        <div className="text-center">
          <Button variant="hero" size="lg" className="group">
            Conheça todas as funcionalidades
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesShowcase;
