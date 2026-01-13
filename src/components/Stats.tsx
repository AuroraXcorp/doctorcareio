const Stats = () => {
  const stats = [
    {
      value: "10K+",
      label: "Médicos Cadastrados",
      description: "Profissionais que confiam na plataforma",
    },
    {
      value: "12+",
      label: "Ferramentas Únicas",
      description: "Soluções completas para sua clínica",
    },
    {
      value: "8K+",
      label: "Usuários Ativos",
      description: "Usando diariamente o sistema",
    },
    {
      value: "98%",
      label: "Satisfação",
      description: "Taxa de aprovação dos clientes",
    },
  ];

  return (
    <section className="py-16 bg-secondary border-y border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <p className="font-heading text-4xl md:text-5xl font-bold text-accent mb-2">
                {stat.value}
              </p>
              <p className="font-heading font-semibold text-foreground mb-1">
                {stat.label}
              </p>
              <p className="text-sm text-muted-foreground">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
