const Footer = () => {
  return (
    <footer className="section-dark py-8">
      <div className="container mx-auto px-4 flex items-center justify-center">
        <div className="flex items-center gap-2 text-white/50 text-sm">
          <span>© {new Date().getFullYear()} Doctor Care</span>
          <span>•</span>
          <a href="#" className="hover:text-white/70 transition-colors">
            Termos
          </a>
          <span>•</span>
          <a href="#" className="hover:text-white/70 transition-colors">
            Privacidade
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
