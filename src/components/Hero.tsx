import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { scrollToFormAndFocus } from "@/lib/scrollToForm";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-[85vh] overflow-hidden pt-20 flex items-center bg-[#0a0a12]">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-30">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Glowing Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px] animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-cyan-500/15 rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[150px]" />

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/40 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Gradient Lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Content */}
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white leading-tight mb-6 tracking-tight">
            Médicos e IA impulsionam o{" "}
            <span className="relative">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                atendimento ao paciente
              </span>
              <svg
                className="absolute -bottom-1 left-0 w-full"
                height="6"
                viewBox="0 0 200 8"
                fill="none"
              >
                <path
                  d="M1 5.5C47.6667 2.16667 141 -2.4 199 5.5"
                  stroke="url(#gradient-line)"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="gradient-line" x1="0" y1="0" x2="200" y2="0">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="50%" stopColor="#22d3ee" />
                    <stop offset="100%" stopColor="#3b82f6" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h1>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <Button 
              size="lg" 
              className="group bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white border-0 px-8 shadow-[0_0_30px_rgba(59,130,246,0.4)] hover:shadow-[0_0_40px_rgba(59,130,246,0.6)] transition-all duration-300"
              onClick={scrollToFormAndFocus}
            >
              Agende uma demo
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-white/20 bg-white/5 text-white hover:bg-white/10 hover:border-white/40 backdrop-blur-sm px-8 transition-all duration-300"
              onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Como funciona
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
