import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column - Disclaimer */}
          <div>
            <p className="text-foreground text-sm mb-4">
              Doctor Care é uma plataforma exclusivamente para fins profissionais.
              Cada médico é responsável pela implementação e uso das ferramentas.
            </p>
            <p className="text-foreground text-sm mb-6">
              A equipe do Doctor Care não garante o aumento de lucros ou sucesso financeiro do médico.
            </p>

            {/* Links */}
            <div className="flex items-center gap-6">
              <a href="#" className="text-foreground text-sm font-medium underline hover:text-accent transition-colors">
                Termos & Condições
              </a>
              <a href="#" className="text-foreground text-sm font-medium underline hover:text-accent transition-colors">
                Política de Privacidade
              </a>
            </div>
          </div>

          {/* Right Column - Suporte */}
          <div>
            <h4 className="font-heading font-semibold text-foreground text-sm mb-2">
              Suporte
            </h4>
            <a
              href="mailto:suporte@doctorcare.app"
              className="text-foreground text-sm hover:text-accent transition-colors block mb-1"
            >
              suporte@doctorcare.app
            </a>
            <a
              href="tel:+5549999013143"
              className="text-foreground text-sm hover:text-accent transition-colors block mb-4"
            >
              +55 49 99901-3143
            </a>

            {/* Button */}
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8" asChild>
              <a href="https://mediconobolso.app" target="_blank" rel="noopener noreferrer">
                Entrar
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-primary">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <p className="text-primary-foreground/70 text-xs">
            © {new Date().getFullYear()} Doctor Care. Todos os direitos reservados.
          </p>
          <Button 
            variant="outline" 
            size="sm"
            className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary rounded-none px-6 text-xs h-8"
            asChild
          >
            <a href="#hero">
              Comece Agora
            </a>
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
