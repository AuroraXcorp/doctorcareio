import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Stats = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary border-y border-border">
      <div className="container mx-auto px-4">
        <div className="text-center">
          {/* Title */}
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground mb-12">
            Transforme sua prática médica
          </h2>

          {/* Image Placeholder */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="aspect-video bg-muted/50 rounded-2xl border border-border/50 flex items-center justify-center">
              <span className="text-muted-foreground">Imagem aqui</span>
            </div>
          </div>

          {/* Button */}
          <a href="#cta">
            <Button size="lg" className="group">
              Começar Agora
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Stats;
