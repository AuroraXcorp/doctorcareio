import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-background py-16">
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
            <a href="#" className="text-foreground hover:text-accent transition-colors">
              Termos & Condições
            </a>
            <a href="#" className="text-foreground hover:text-accent transition-colors">
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
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8">
            Entrar
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
