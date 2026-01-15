import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Como funciona o período de teste gratuito?",
      answer:
        "Você pode começar a usar o Doctorcare gratuitamente, sem precisar de cartão de crédito. O plano gratuito permite até 50 pacientes e acesso às funcionalidades básicas. Quando quiser mais recursos, é só fazer o upgrade.",
    },
    {
      question: "Posso migrar meus dados de outro sistema?",
      answer:
        "Sim! Nossa equipe oferece suporte completo para migração de dados de qualquer outro sistema. Importamos prontuários, agenda, dados de pacientes e histórico financeiro. O processo é rápido e seguro.",
    },
    {
      question: "Minha secretária pode ter acesso ao sistema?",
      answer:
        "Claro! Você pode criar acessos com diferentes níveis de permissão. Sua secretária pode gerenciar a agenda e cadastrar pacientes, enquanto apenas você tem acesso aos prontuários e informações sensíveis.",
    },
    {
      question: "O sistema funciona offline?",
      answer:
        "O Doctorcare é 100% online, o que garante que seus dados estejam sempre seguros e acessíveis de qualquer dispositivo. Recomendamos uma conexão estável à internet para melhor experiência.",
    },
    {
      question: "Como funciona o suporte?",
      answer:
        "Oferecemos suporte por email no plano gratuito, suporte prioritário por chat no plano Profissional, e suporte completo com videochamadas no plano Clínica. Nossa equipe é formada por profissionais que entendem a rotina médica.",
    },
    {
      question: "Posso cancelar a qualquer momento?",
      answer:
        "Sim, você pode cancelar sua assinatura a qualquer momento, sem multas ou taxas. Seus dados ficam disponíveis para exportação por 30 dias após o cancelamento.",
    },
  ];

  return (
    <section id="faq" className="py-20 md:py-32 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Dúvidas Frequentes
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            Perguntas e <span className="text-gradient">Respostas</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Tudo que você precisa saber sobre o Doctorcare.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-primary/30 transition-colors shadow-sm"
              >
                <AccordionTrigger className="text-left font-heading font-semibold text-foreground hover:text-primary py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
