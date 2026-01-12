import { Mail, Phone, MapPin, Instagram, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  const links = {
    produto: [
      { label: "Funcionalidades", href: "#features" },
      { label: "Preços", href: "#pricing" },
      { label: "Integrações", href: "#" },
      { label: "Atualizações", href: "#" },
    ],
    suporte: [
      { label: "Central de Ajuda", href: "#" },
      { label: "Contato", href: "#" },
      { label: "Status do Sistema", href: "#" },
      { label: "Documentação API", href: "#" },
    ],
    empresa: [
      { label: "Sobre Nós", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Carreiras", href: "#" },
      { label: "Imprensa", href: "#" },
    ],
    legal: [
      { label: "Termos de Uso", href: "#" },
      { label: "Privacidade", href: "#" },
      { label: "LGPD", href: "#" },
      { label: "Cookies", href: "#" },
    ],
  };

  return (
    <footer className="bg-primary pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center">
                <span className="text-accent-foreground font-heading font-bold text-xl">D</span>
              </div>
              <span className="font-heading font-bold text-xl text-primary-foreground">
                Doctor<span className="text-accent">care</span>
              </span>
            </a>
            <p className="text-primary-foreground/70 mb-6 max-w-sm">
              Software de Gestão Médica completo. Simplifique sua rotina e foque no que realmente importa: seus pacientes.
            </p>
            <div className="space-y-3">
              <a
                href="mailto:contato@doctorcare.com.br"
                className="flex items-center gap-3 text-primary-foreground/70 hover:text-accent transition-colors"
              >
                <Mail className="w-5 h-5" />
                contato@doctorcare.com.br
              </a>
              <a
                href="tel:+5511999999999"
                className="flex items-center gap-3 text-primary-foreground/70 hover:text-accent transition-colors"
              >
                <Phone className="w-5 h-5" />
                (11) 99999-9999
              </a>
              <div className="flex items-center gap-3 text-primary-foreground/70">
                <MapPin className="w-5 h-5" />
                São Paulo, Brasil
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-heading font-semibold text-primary-foreground mb-4">
              Produto
            </h4>
            <ul className="space-y-3">
              {links.produto.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-primary-foreground mb-4">
              Suporte
            </h4>
            <ul className="space-y-3">
              {links.suporte.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-primary-foreground mb-4">
              Empresa
            </h4>
            <ul className="space-y-3">
              {links.empresa.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-primary-foreground mb-4">
              Legal
            </h4>
            <ul className="space-y-3">
              {links.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} Doctorcare. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground/70 hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground/70 hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground/70 hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              <Youtube className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
