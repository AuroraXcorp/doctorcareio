import { Heart, Building2, Stethoscope, Activity, Cross, Shield, Plus, Pill } from "lucide-react";

const Partners = () => {
  const partners = [
    { name: "Clínica Aurora", subtitle: "SAÚDE INTEGRAL", icon: Heart },
    { name: "Hospital Vitale", subtitle: "", icon: Building2 },
    { name: "MedPlus", subtitle: "DIAGNÓSTICOS", icon: Activity },
    { name: "Saúde Prime", subtitle: "CENTRO MÉDICO", icon: Shield },
    { name: "Instituto Cura", subtitle: "", icon: Cross },
    { name: "VidaCare", subtitle: "MEDICINA AVANÇADA", icon: Stethoscope },
    { name: "Clínica Bem Estar", subtitle: "", icon: Plus },
    { name: "HealthPoint", subtitle: "ESPECIALIDADES", icon: Pill },
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
      <div className="relative py-8">
        {/* Gradient Fade Left */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-background to-transparent z-10" />
        
        {/* Gradient Fade Right */}
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-background to-transparent z-10" />

        {/* Scrolling Partners */}
        <div className="flex animate-marquee">
          {[...partners, ...partners, ...partners].map((partner, index) => (
            <div
              key={index}
              className="flex items-center gap-4 md:gap-5 mx-10 md:mx-16 shrink-0"
            >
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-secondary flex items-center justify-center border border-border/50">
                <partner.icon className="w-7 h-7 md:w-8 md:h-8 text-primary/70" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl md:text-2xl lg:text-3xl font-semibold text-foreground/80 whitespace-nowrap">
                  {partner.name}
                </span>
                {partner.subtitle && (
                  <span className="text-[10px] md:text-xs tracking-widest text-muted-foreground/60 uppercase">
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
