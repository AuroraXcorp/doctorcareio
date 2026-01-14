import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="relative">
      {/* Main Footer Content */}
      <div className="bg-background py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-xl">
            {/* Disclaimer */}
            <p className="text-foreground mb-6">
              Doctor Care é uma plataforma exclusivamente para fins profissionais.
              Cada médico é responsável pela implementação e uso das ferramentas.
            </p>
            <p className="text-foreground mb-8">
              A equipe do Doctor Care não garante o aumento de lucros ou sucesso financeiro do médico.
            </p>

            {/* Links */}
            <div className="flex items-center gap-6 mb-8">
              <a href="#" className="text-foreground font-medium underline hover:text-accent transition-colors">
                Termos & Condições
              </a>
              <a href="#" className="text-foreground font-medium underline hover:text-accent transition-colors">
                Política de Privacidade
              </a>
            </div>

            {/* Suporte */}
            <div className="mb-6">
              <h4 className="font-heading font-semibold text-foreground mb-3">
                Suporte
              </h4>
              <a
                href="mailto:suporte@doctorcare.app"
                className="text-foreground hover:text-accent transition-colors block mb-2"
              >
                suporte@doctorcare.app
              </a>
              <a
                href="tel:+5549999013143"
                className="text-foreground hover:text-accent transition-colors block"
              >
                +55 49 99901-3143
              </a>
            </div>

            {/* Button */}
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-12 py-6 text-base">
              Entrar
            </Button>
          </div>
        </div>
      </div>

      {/* Logo Section - Centered between sections */}
      <div className="relative bg-background pb-16">
        <div className="flex justify-center">
          <div className="relative z-10 bg-background p-4 border-4 border-primary rounded-xl shadow-lg">
            <div className="w-16 h-16 rounded-lg bg-accent flex items-center justify-center">
              <span className="text-accent-foreground font-heading font-bold text-3xl">D</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-primary py-6">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <p className="text-primary-foreground/70 text-sm">
              © {new Date().getFullYear()} Doctor Care. Todos os direitos reservados.
            </p>
            <Button 
              variant="outline" 
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary rounded-none px-8"
            >
              Comece Agora
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
