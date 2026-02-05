import { Button } from "@/components/ui/button";
import { scrollToFormAndFocus } from "@/lib/scrollToForm";

const Footer = () => {
  return (
    <footer className="bg-background">
      {/* Suporte Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
            <span className="text-muted-foreground text-sm">Suporte:</span>
            <a
              href="mailto:suporte@doctorcare.app"
              className="text-foreground text-sm hover:text-accent transition-colors"
            >
              suporte@doctorcare.app
            </a>
            <a
              href="tel:+5549999013143"
              className="text-foreground text-sm hover:text-accent transition-colors"
            >
              +55 49 99901-3143
            </a>
          </div>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 w-fit" asChild>
            <a href="https://app.doctorcare.io" target="_blank" rel="noopener noreferrer">
              Entrar
            </a>
          </Button>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-primary">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-1">
            <p className="text-primary-foreground/50 text-[10px]">
              © {new Date().getFullYear()} Doctor Care.
            </p>
            <span className="text-primary-foreground/30 text-[10px]">·</span>
            <a href="#" className="text-primary-foreground/30 text-[10px] hover:text-primary-foreground/50 transition-colors">
              Termos
            </a>
            <span className="text-primary-foreground/30 text-[10px]">·</span>
            <a href="#" className="text-primary-foreground/30 text-[10px] hover:text-primary-foreground/50 transition-colors">
              Privacidade
            </a>
          </div>
          <Button 
            variant="outline" 
            size="sm"
            className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary rounded-none px-6 text-xs h-8"
            onClick={scrollToFormAndFocus}
          >
            Comece Agora
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
