const Partners = () => {
  const partners = [
    { name: "Hospital Albert Einstein", subtitle: "" },
    { name: "Sírio-Libanês", subtitle: "HOSPITAL" },
    { name: "Fleury", subtitle: "MEDICINA E SAÚDE" },
    { name: "Dasa", subtitle: "DIAGNÓSTICOS" },
    { name: "Hapvida", subtitle: "SAÚDE" },
    { name: "Rede D'Or", subtitle: "SÃO LUIZ" },
    { name: "Unimed", subtitle: "" },
    { name: "Amil", subtitle: "SAÚDE" },
  ];

  return (
    <section className="py-20 md:py-28 bg-background overflow-hidden">
      <div className="container mx-auto px-4 mb-12 md:mb-16">
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-center text-foreground mb-4">
          Parceiros do <span className="text-gradient">DoctorCare</span>
        </h2>
        <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto">
          Mais de 10.000 profissionais já transformaram suas rotinas com o Doctorcare.
        </p>
      </div>

      {/* Marquee Container */}
      <div className="relative py-8 md:py-12">
        {/* Gradient Fade Left */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-background to-transparent z-10" />
        
        {/* Gradient Fade Right */}
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-background to-transparent z-10" />

        {/* Scrolling Partners - First Row */}
        <div className="flex animate-marquee mb-8 md:mb-12">
          {[...partners, ...partners, ...partners].map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center mx-6 md:mx-12 shrink-0 bg-secondary/50 rounded-xl px-6 md:px-10 py-4 md:py-6 border border-border/50 hover:border-primary/30 hover:shadow-md transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <span className="text-base md:text-xl lg:text-2xl font-semibold text-foreground/80 whitespace-nowrap">
                  {partner.name}
                </span>
                {partner.subtitle && (
                  <span className="text-[9px] md:text-[10px] tracking-widest text-muted-foreground/70 uppercase mt-1">
                    {partner.subtitle}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Scrolling Partners - Second Row (Reverse) */}
        <div className="flex animate-marquee-reverse">
          {[...partners.slice(4), ...partners.slice(0, 4), ...partners].map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center mx-6 md:mx-12 shrink-0 bg-secondary/50 rounded-xl px-6 md:px-10 py-4 md:py-6 border border-border/50 hover:border-primary/30 hover:shadow-md transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <span className="text-base md:text-xl lg:text-2xl font-semibold text-foreground/80 whitespace-nowrap">
                  {partner.name}
                </span>
                {partner.subtitle && (
                  <span className="text-[9px] md:text-[10px] tracking-widest text-muted-foreground/70 uppercase mt-1">
                    {partner.subtitle}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stats below */}
      <div className="container mx-auto px-4 mt-12 md:mt-16">
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-center">
          <div>
            <p className="text-3xl md:text-4xl font-bold text-primary">10.000+</p>
            <p className="text-sm text-muted-foreground mt-1">Profissionais ativos</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-bold text-primary">500+</p>
            <p className="text-sm text-muted-foreground mt-1">Clínicas parceiras</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-bold text-primary">98%</p>
            <p className="text-sm text-muted-foreground mt-1">Satisfação</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
