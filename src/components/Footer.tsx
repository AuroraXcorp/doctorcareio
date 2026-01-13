import { Mail, Phone, MapPin, Instagram, Linkedin, Youtube } from "lucide-react";
import logo from "@/assets/logo-medico-no-bolso.png";

const Footer = () => {
  const links = {
    produto: [
      { label: "Como Funciona", href: "#how-it-works" },
      { label: "Funcionalidades", href: "#features" },
      { label: "Preços", href: "#pricing" },
      { label: "Integrações", href: "#" },
    ],
    suporte: [
      { label: "Central de Ajuda", href: "#" },
      { label: "Tutoriais em Vídeo", href: "#" },
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
    <footer className="bg-foreground pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-3 mb-6">
              <img 
                src={logo} 
                alt="Médico no Bolso" 
                className="w-12 h-12 object-contain"
              />
              <div className="flex flex-col">
                <span className="font-heading font-bold text-xl text-white leading-tight">
                  Médico no Bolso
                </span>
                <span className="text-xs text-primary font-medium">
                  Assistente de Voz com IA
                </span>
              </div>
            </a>
            <p className="text-white/60 mb-6 max-w-sm">
              O assistente de voz inteligente que revoluciona a documentação médica. 
              Fale, e a IA faz o resto.
            </p>
            <div className="space-y-3">
              <a
                href="mailto:contato@mediconobolso.com"
                className="flex items-center gap-3 text-white/60 hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5" />
                contato@mediconobolso.com
              </a>
              <a
                href="tel:+5511999999999"
                className="flex items-center gap-3 text-white/60 hover:text-primary transition-colors"
              >
                <Phone className="w-5 h-5" />
                (11) 99999-9999
              </a>
              <div className="flex items-center gap-3 text-white/60">
                <MapPin className="w-5 h-5" />
                São Paulo, Brasil
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-4">
              Produto
            </h4>
            <ul className="space-y-3">
              {links.produto.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-white mb-4">
              Suporte
            </h4>
            <ul className="space-y-3">
              {links.suporte.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-white mb-4">
              Empresa
            </h4>
            <ul className="space-y-3">
              {links.empresa.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-white mb-4">
              Legal
            </h4>
            <ul className="space-y-3">
              {links.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} Médico no Bolso. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-primary hover:text-white transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-primary hover:text-white transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-primary hover:text-white transition-colors"
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