import { Button } from "@/components/ui/button";
import { Menu, X, Mic } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo-medico-no-bolso.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: "Como Funciona", href: "#how-it-works" },
    { label: "Funcionalidades", href: "#features" },
    { label: "Depoimentos", href: "#testimonials" },
    { label: "Preços", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <img 
              src={logo} 
              alt="Médico no Bolso" 
              className="w-10 h-10 md:w-12 md:h-12 object-contain"
            />
            <div className="flex flex-col">
              <span className="font-heading font-bold text-lg md:text-xl text-foreground leading-tight">
                Médico no Bolso
              </span>
              <span className="text-xs text-primary font-medium hidden sm:block">
                Assistente de Voz com IA
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors font-medium text-sm"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" size="sm" className="text-muted-foreground">
              Entrar
            </Button>
            <Button variant="hero" size="default" className="gap-2">
              <Mic className="w-4 h-4" />
              Testar Grátis
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-fade-in">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground hover:bg-muted transition-colors font-medium py-3 px-4 rounded-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="flex flex-col gap-2 pt-4 border-t border-border mt-2">
                <Button variant="ghost" size="lg" className="w-full justify-center">
                  Entrar
                </Button>
                <Button variant="hero" size="lg" className="w-full justify-center gap-2">
                  <Mic className="w-4 h-4" />
                  Testar Grátis
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;