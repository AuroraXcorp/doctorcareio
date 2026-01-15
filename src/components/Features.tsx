import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { scrollToFormAndFocus } from "@/lib/scrollToForm";

const Features = () => {
  return (
    <section id="features" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            Tudo que você precisa em{" "}
            <span className="text-gradient">um só lugar</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A medicina evoluiu. Seu consultório também precisa evoluir. 
            Automatize tarefas repetitivas e foque no que realmente importa: seus pacientes.
          </p>
        </div>

        {/* Image */}
        <div className="relative max-w-5xl mx-auto mb-10">
          <div className="rounded-2xl overflow-hidden border border-border shadow-xl-custom">
            <img
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&h=600&fit=crop"
              alt="Doctor Care - Sistema de gestão médica"
              className="w-full aspect-[2/1] object-cover"
            />
          </div>
          {/* Decorative elements */}
          <div className="absolute -top-4 -right-4 w-32 h-32 bg-primary/20 rounded-full blur-3xl -z-10" />
          <div className="absolute -bottom-4 -left-4 w-40 h-40 bg-accent/15 rounded-full blur-3xl -z-10" />
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Button size="lg" className="group bg-gradient-primary hover:opacity-90" onClick={scrollToFormAndFocus}>
            Comece Agora
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Features;
