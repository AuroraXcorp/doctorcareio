import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const FAQ = () => {
  const faqs = [
    {
      question: "Como funciona o reconhecimento de voz?",
      answer:
        "Nossa IA utiliza modelos avançados de processamento de linguagem natural, treinados especificamente com terminologia médica em português brasileiro. Basta falar naturalmente como se estivesse ditando para um assistente. A transcrição acontece em tempo real com precisão de 99.2%.",
    },
    {
      question: "Preciso de equipamento especial?",
      answer:
        "Não! O microfone do seu computador, tablet ou celular é suficiente. Recomendamos um ambiente com pouco ruído para melhor precisão, mas a IA é treinada para filtrar ruídos de fundo comuns em consultórios.",
    },
    {
      question: "A IA entende termos médicos e abreviações?",
      answer:
        "Sim! Nossa IA foi treinada com milhões de prontuários e documentos médicos. Ela entende CID, nomenclatura anatômica, nomes de medicamentos, abreviações comuns (EV, VO, bid, tid, qid) e terminologia de todas as especialidades.",
    },
    {
      question: "Meus dados de voz são armazenados?",
      answer:
        "Não. As gravações de áudio são processadas em tempo real e imediatamente descartadas. Apenas o texto transcrito é salvo (se você permitir). Não mantemos nenhum registro de áudio dos usuários.",
    },
    {
      question: "Posso usar offline?",
      answer:
        "O processamento de IA requer conexão com a internet para garantir a máxima precisão. Porém, você pode ditar offline e a transcrição será processada automaticamente quando a conexão for restabelecida.",
    },
    {
      question: "Funciona para todas as especialidades médicas?",
      answer:
        "Sim! Temos templates e vocabulário específico para mais de 50 especialidades, incluindo Cardiologia, Pediatria, Ginecologia, Ortopedia, Psiquiatria, Dermatologia, e muitas outras. A IA se adapta ao seu contexto.",
    },
    {
      question: "E se a IA transcrever algo errado?",
      answer:
        "Você sempre tem controle total. Antes de salvar qualquer documento, você pode revisar e editar. Além disso, a IA aprende com suas correções e se torna mais precisa ao longo do tempo para o seu estilo específico.",
    },
    {
      question: "Posso cancelar a qualquer momento?",
      answer:
        "Sim! Não há fidelidade ou multa. Você pode cancelar sua assinatura a qualquer momento pelo painel. Oferecemos garantia de 30 dias: se não ficar satisfeito, devolvemos 100% do valor.",
    },
  ];

  return (
    <section id="faq" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <HelpCircle className="w-4 h-4" />
            FAQ
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            Perguntas <span className="text-gradient">Frequentes</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Tire suas dúvidas sobre o assistente de voz com IA.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-muted/30 hover:bg-muted/50 border-none rounded-2xl px-6 transition-colors"
              >
                <AccordionTrigger className="text-left font-heading font-semibold text-foreground hover:text-primary py-6 hover:no-underline">
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