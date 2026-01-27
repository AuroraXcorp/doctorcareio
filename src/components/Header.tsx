import { Button } from "@/components/ui/button";
import { Menu, X, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import logoImg from "@/assets/logo-doctorcare.png";
import { scrollToFormAndFocus } from "@/lib/scrollToForm";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Início", href: "#" },
    { label: "Funcionalidades", href: "#features" },
    { label: "Planos", href: "#pricing" },
    { label: "Blog", href: "#blog" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-[#0a0a12]/95 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/20" 
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Mobile: Logo image only */}
          <a href="#" className="md:hidden">
            <img src={logoImg} alt="Doctor Care" className="w-9 h-9 object-contain" />
          </a>

          {/* Desktop: Full logo with text */}
          <a href="#" className="hidden md:flex items-center gap-2.5">
            <img src={logoImg} alt="Doctor Care" className="w-10 h-10 object-contain" />
            <span className="font-heading font-bold text-xl text-white">
              Doctor<span className="text-accent">care</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-white/70 hover:text-white rounded-lg hover:bg-white/5 transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-white/80 hover:text-white hover:bg-white/10 font-medium"
              asChild
            >
              <a href="https://mediconobolso.app" target="_blank" rel="noopener noreferrer">
                Entrar
              </a>
            </Button>
            <Button 
              size="sm" 
              className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white border-0 font-semibold shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300"
              onClick={scrollToFormAndFocus}
            >
              Comece agora
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </div>

          {/* Mobile: CTA Buttons + Menu button */}
          <div className="md:hidden flex items-center gap-2">
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-white/80 hover:text-white hover:bg-white/10 text-xs px-2.5 h-8 font-medium" 
              asChild
            >
              <a href="https://mediconobolso.app" target="_blank" rel="noopener noreferrer">
                Entrar
              </a>
            </Button>
            <Button 
              size="sm" 
              className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-xs px-3 h-8 font-semibold shadow-lg shadow-blue-500/25"
              onClick={scrollToFormAndFocus}
            >
              Começar
            </Button>
            <button
              className="p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10 animate-fade-in">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-white/70 hover:text-white hover:bg-white/5 transition-all font-medium py-3 px-3 rounded-lg"
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
