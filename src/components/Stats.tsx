const Stats = () => {
  const stats = [
    {
      value: "10k+",
      label: "Histórias de Sucesso",
    },
    {
      value: "12+",
      label: "Ferramentas Únicas",
    },
    {
      value: "800+",
      label: "Usuários Ativos",
    },
    {
      value: "98%",
      label: "Satisfação",
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
              <p className="font-heading font-semibold text-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
