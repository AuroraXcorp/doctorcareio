import { Heart, Building2, Stethoscope, Activity, Cross, Shield } from "lucide-react";

const Partners = () => {
  const partners = [
    { name: "Santa Rita", subtitle: "HOSPITAL", icon: Cross },
    { name: "Hospital Belo Horizonte", subtitle: "", icon: Building2 },
    { name: "beep!", subtitle: "", icon: Activity },
    { name: "PROSAÚDE", subtitle: "SERVIÇO INTEGRADO EM MEDICINA", icon: Shield },
    { name: "Clínica Vida", subtitle: "CENTRO MÉDICO", icon: Heart },
    { name: "MedCenter", subtitle: "SAÚDE & BEM-ESTAR", icon: Stethoscope },
    { name: "Hospital São Lucas", subtitle: "", icon: Building2 },
    { name: "CardioCare", subtitle: "CLÍNICA ESPECIALIZADA", icon: Activity },
  ];

  return (
    <section className="py-16 md:py-20 bg-secondary overflow-hidden">
      <div className="container mx-auto px-4 mb-10">
        <h2 className="font-heading text-2xl md:text-3xl text-center text-foreground">
          Parceiros do <span className="text-gradient">DoctorCare</span>
        </h2>
      </div>

      {/* Marquee Container */}
      <div className="relative">
        {/* Gradient Fade Left */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-secondary to-transparent z-10" />
        
        {/* Gradient Fade Right */}
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-secondary to-transparent z-10" />

        {/* Scrolling Partners */}
        <div className="flex animate-marquee">
          {[...partners, ...partners].map((partner, index) => (
            <div
              key={index}
              className="flex items-center gap-3 mx-12 shrink-0"
            >
              <partner.icon className="w-8 h-8 text-muted-foreground/60" />
              <div className="flex flex-col">
                <span className="text-lg md:text-xl font-semibold text-muted-foreground/70 whitespace-nowrap">
                  {partner.name}
                </span>
                {partner.subtitle && (
                  <span className="text-[10px] tracking-wider text-muted-foreground/50 uppercase">
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
