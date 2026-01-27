import { useCountUp } from "@/hooks/useCountUp";

interface StatItemProps {
  end: number;
  suffix: string;
  label: string;
  delay: number;
}

const StatItem = ({ end, suffix, label, delay }: StatItemProps) => {
  const { count, ref, displayValue } = useCountUp({ 
    end, 
    duration: 2000 + delay,
    suffix 
  });

  return (
    <div
      ref={ref}
      className="text-center group"
    >
      <p 
        className="text-4xl md:text-5xl font-bold text-primary mb-2 transition-transform duration-300 group-hover:scale-110 tracking-tight"
        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
      >
        {displayValue}
      </p>
      <p className="font-heading font-semibold text-foreground">
        {label}
      </p>
    </div>
  );
};

const Stats = () => {
  const stats = [
    {
      end: 10,
      suffix: "k+",
      label: "Histórias de Sucesso",
    },
    {
      end: 12,
      suffix: "+",
      label: "Ferramentas Únicas",
    },
    {
      end: 800,
      suffix: "+",
      label: "Usuários Ativos",
    },
    {
      end: 98,
      suffix: "%",
      label: "Satisfação",
    },
  ];

  return (
    <section className="py-16 bg-card border-y border-border/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatItem
              key={index}
              end={stat.end}
              suffix={stat.suffix}
              label={stat.label}
              delay={index * 200}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
