const Evolution = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-background via-muted/30 to-background overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            A medicina está{" "}
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              evoluindo!
            </span>
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <p className="text-xl md:text-2xl font-semibold text-foreground leading-relaxed">
              O Doctor Care está constantemente atualizando e entregando novas funções todo dia.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Enquanto o mundo continua desenvolvendo novos Sistemas de Inteligência Artificial e Robótica, nós ensinamos nossos médicos a usarem eles, eventos, cursos gratuitos, e acesso a tecnologia de ponta, tudo isso você encontra aqui.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Nós estamos a frente da medicina moderna e queremos ajudar você a facilitar sua gestão médica, a ganhar tempo, dinheiro e qualidade de vida.
            </p>
            
            <p className="text-lg font-medium text-foreground leading-relaxed">
              Todos nossos clientes relatam que sua Gestão Profissional melhorou imediatamente após começarem usar o DoctorCare no seu dia a dia.
            </p>

            <a
              href="#cta"
              className="inline-flex items-center gap-2 px-6 py-3 mt-4 bg-primary text-primary-foreground font-semibold rounded-full hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl"
            >
              Comece Agora
            </a>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-3xl bg-gradient-to-br from-primary to-primary/60 p-1 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-3xl"></div>
              <div className="relative h-full rounded-[22px] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop"
                  alt="Médico usando tecnologia moderna"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Evolution;
