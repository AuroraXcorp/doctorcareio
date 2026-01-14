import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logoImg from "@/assets/logo-doctorcare.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: "Funcionalidades", href: "#features" },
    { label: "Depoimentos", href: "#testimonials" },
    { label: "Segurança", href: "#security" },
    { label: "FAQ", href: "#faq" },
    { label: "Planos", href: "#pricing" },
    { label: "Blog", href: "#blog" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Mobile: Logo image only */}
          <a href="#" className="md:hidden">
            <img src={logoImg} alt="Doctor Care" className="w-10 h-10 object-contain" />
          </a>

          {/* Desktop: Full logo with text */}
          <a href="#" className="hidden md:flex items-center gap-2">
            <img src={logoImg} alt="Doctor Care" className="w-10 h-10 object-contain" />
            <span className="font-heading font-bold text-xl text-foreground">
              Doctor<span className="text-accent">care</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" size="sm">
              Entrar
            </Button>
            <Button variant="hero" size="default">
              Fale Conosco
            </Button>
          </div>

          {/* Mobile: CTA Buttons + Menu button */}
          <div className="md:hidden flex items-center gap-2">
            <Button variant="ghost" size="sm" className="text-sm px-3">
              Entrar
            </Button>
            <Button variant="hero" size="sm" className="text-sm px-3">
              Fale Conosco
            </Button>
            <button
              className="p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-foreground" />
              ) : (
                <Menu className="w-6 h-6 text-foreground" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
