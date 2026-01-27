import { Heart, Building2, Stethoscope, Activity, Cross, Shield, Plus, Pill } from "lucide-react";

const Partners = () => {
  const partners = [
    { name: "Santa Rita", subtitle: "HOSPITAL", icon: Cross },
    { name: "Hospital Belo Horizonte", subtitle: "", icon: Building2 },
    { name: "Beep Saúde", subtitle: "", icon: Activity },
    { name: "ProSaúde", subtitle: "SERVIÇO INTEGRADO", icon: Shield },
    { name: "Clínica Vida Nova", subtitle: "CENTRO MÉDICO", icon: Heart },
    { name: "MedCenter", subtitle: "SAÚDE & BEM-ESTAR", icon: Stethoscope },
    { name: "Hospital São Lucas", subtitle: "", icon: Plus },
    { name: "CardioVita", subtitle: "CLÍNICA ESPECIALIZADA", icon: Pill },
  ];

  return (
    <section className="py-16 md:py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4 mb-10 md:mb-14">
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-center text-foreground mb-4">
          Parceiros do <span className="text-gradient">DoctorCare</span>
        </h2>
        <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto">
          Mais de 10.000 profissionais já transformaram suas rotinas com o Doctorcare.
        </p>
      </div>

      {/* Marquee Container */}
      <div className="relative py-6">
        {/* Gradient Fade Left */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-background to-transparent z-10" />
        
        {/* Gradient Fade Right */}
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-background to-transparent z-10" />

        {/* Scrolling Partners */}
        <div className="flex animate-marquee">
          {[...partners, ...partners, ...partners].map((partner, index) => (
            <div
              key={index}
              className="flex items-center gap-3 md:gap-4 mx-8 md:mx-14 shrink-0"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-secondary flex items-center justify-center border border-border/50">
                <partner.icon className="w-5 h-5 md:w-6 md:h-6 text-muted-foreground/70" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg md:text-xl font-semibold text-muted-foreground/80 whitespace-nowrap">
                  {partner.name}
                </span>
                {partner.subtitle && (
                  <span className="text-[9px] md:text-[10px] tracking-widest text-muted-foreground/50 uppercase">
                    {partner.subtitle}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
