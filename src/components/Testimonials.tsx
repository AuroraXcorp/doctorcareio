import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Dr. Ricardo Mendes",
      role: "Cardiologista",
      location: "São Paulo, SP",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&h=150&fit=crop&crop=face",
      content:
        "O Doctorcare transformou minha rotina. Antes eu perdia horas organizando prontuários. Agora a IA faz a maior parte do trabalho e eu foco 100% nos meus pacientes. Recomendo para qualquer colega.",
      rating: 5,
    },
    {
      name: "Dra. Camila Ferreira",
      role: "Ortopedista",
      location: "Rio de Janeiro, RJ",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face",
      content:
        "A agenda inteligente reduziu minhas faltas em 70%! Os pacientes recebem lembretes automáticos e confirmam pelo WhatsApp. Isso mudou completamente a produtividade da minha clínica.",
      rating: 5,
    },
    {
      name: "Dr. Paulo Santos",
      role: "Dermatologista",
      location: "Belo Horizonte, MG",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=150&h=150&fit=crop&crop=face",
      content:
        "O controle financeiro é sensacional. Consigo ver em tempo real todas as receitas e despesas da clínica. Os relatórios automáticos me ajudam muito na tomada de decisões.",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            O que nossos <span className="text-gradient">médicos dizem</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Mais de 10.000 profissionais já transformaram suas rotinas com o Doctorcare.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-2xl p-8 relative group hover:shadow-card-hover hover:border-accent/30 transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-12 h-12 text-accent" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-6">
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
                  className="w-14 h-14 rounded-full object-cover border-2 border-accent/20"
                />
                <div>
                  <p className="font-heading font-semibold text-foreground">
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
