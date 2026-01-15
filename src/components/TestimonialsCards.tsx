import { Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const TestimonialsCards = () => {
  const testimonials = [
    {
      name: "Dr. Rafael Costa",
      role: "Cardiologista",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&h=800&fit=crop&crop=face",
      content: "Minha produtividade aumentou 3x desde que comecei a usar o Doctorcare. A IA é simplesmente incrível!",
    },
    {
      name: "Dra. Marina Silva",
      role: "Dermatologista",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&h=800&fit=crop&crop=face",
      content: "Reduzi 70% das faltas com a agenda inteligente. Meus pacientes adoram os lembretes automáticos.",
    },
    {
      name: "Dr. André Oliveira",
      role: "Ortopedista",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=600&h=800&fit=crop&crop=face",
      content: "O controle financeiro me deu clareza total sobre minha clínica. Recomendo para todos os colegas!",
    },
    {
      name: "Dra. Juliana Santos",
      role: "Pediatra",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=600&h=800&fit=crop&crop=face",
      content: "A gestão de prontuários ficou muito mais fácil. Economizo horas todos os dias!",
    },
    {
      name: "Dr. Felipe Mendes",
      role: "Neurologista",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=600&h=800&fit=crop&crop=face",
      content: "O melhor sistema que já usei. A integração com WhatsApp mudou minha comunicação com pacientes.",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-secondary overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            Médicos que <span className="text-gradient">confiam</span> no Doctorcare
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Veja o que profissionais de saúde de todo Brasil estão dizendo sobre nossa plataforma.
          </p>
        </div>

        {/* Carousel */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent className="-ml-6">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="pl-6 basis-full sm:basis-1/2 lg:basis-1/3">
                <div className="relative rounded-3xl overflow-hidden group h-[480px]">
                  {/* Background Image */}
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Card Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <div className="backdrop-blur-md bg-white/10 rounded-2xl p-5 border border-white/20">
                      {/* Quote Icon */}
                      <div className="flex items-center gap-0.5 text-primary mb-3">
                        <Quote className="w-4 h-4 fill-primary" />
                        <Quote className="w-4 h-4 fill-primary" />
                      </div>
                      
                      {/* Name */}
                      <h3 className="font-heading font-bold text-white text-lg mb-1">
                        {testimonial.name}
                      </h3>
                      
                      {/* Content */}
                      <p className="text-white/90 text-sm leading-relaxed">
                        {testimonial.content}
                      </p>
                      
                      {/* Role Badge */}
                      <span className="inline-block mt-3 text-xs text-primary font-medium">
                        {testimonial.role}
                      </span>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <CarouselPrevious className="relative inset-auto translate-x-0 translate-y-0 bg-primary/10 border-primary/30 hover:bg-primary hover:text-white" />
            <CarouselNext className="relative inset-auto translate-x-0 translate-y-0 bg-primary/10 border-primary/30 hover:bg-primary hover:text-white" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialsCards;
