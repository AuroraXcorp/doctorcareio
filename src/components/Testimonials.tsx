import { Star, Quote, Mic } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Dr. Ricardo Mendes",
      role: "Cardiologista",
      location: "São Paulo, SP",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&h=150&fit=crop&crop=face",
      content:
        "O assistente de voz revolucionou minha rotina. Antes eu passava mais tempo digitando do que examinando. Agora dito tudo e o prontuário fica pronto. Ganho pelo menos 1 hora por dia!",
      rating: 5,
      highlight: "1h/dia economizada",
    },
    {
      name: "Dra. Camila Ferreira",
      role: "Ginecologista",
      location: "Rio de Janeiro, RJ",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face",
      content:
        "A precisão da IA é impressionante. Ela entende termos médicos, abreviações e até meu sotaque carioca! Minhas pacientes perceberam que agora olho mais para elas durante a consulta.",
      rating: 5,
      highlight: "99% precisão",
    },
    {
      name: "Dr. Paulo Santos",
      role: "Clínico Geral",
      location: "Belo Horizonte, MG",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=150&h=150&fit=crop&crop=face",
      content:
        "Como clínico geral, atendo muitos pacientes por dia. O ditado por voz me permite manter a qualidade da documentação mesmo com a agenda lotada. Recomendo fortemente!",
      rating: 5,
      highlight: "+30% produtividade",
    },
  ];

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Mic className="w-4 h-4" />
            Depoimentos
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            Médicos que{" "}
            <span className="text-gradient">transformaram sua rotina</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Veja o que profissionais de saúde estão dizendo sobre o assistente de voz.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-muted/30 hover:bg-white border border-transparent hover:border-primary/20 rounded-3xl p-8 relative group hover:shadow-card transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-12 h-12 text-primary" />
              </div>

              {/* Highlight Badge */}
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold mb-6">
                ⚡ {testimonial.highlight}
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground/80 leading-relaxed mb-8">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-primary/20"
                />
                <div>
                  <p className="font-heading font-bold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role} • {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;