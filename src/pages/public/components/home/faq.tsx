import { Accordion, AccordionItem } from "../../../../components/ui/accordion";

export function Faq() {
  return (
    <section className="w-full py-20 md:py-32">
      <div className="px-4 md:px-6">
        <div className="mb-12 flex flex-col items-center justify-center space-y-4 text-center">
          <div className="bg-accent/20 border-border rounded-full border px-4 py-1.5 text-sm font-medium">
            FAQ
          </div>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Perguntas Frequentes
          </h2>
          <p className="text-muted-foreground max-w-[800px] md:text-lg">
            Encontre respostas para as dúvidas mais comuns sobre nossa
            plataforma.
          </p>
        </div>

        <div className="mx-auto max-w-3xl">
          <Accordion className="w-full">
            {[
              {
                question: "Como funciona a integração com bancos e fintechs?",
                answer:
                  "Nossa plataforma permite que você se conecte diretamente aos principais bancos e fintechs do país por meio de APIs seguras, garantindo acesso às melhores opções de crédito para seus clientes.",
              },
              {
                question:
                  "Quais tipos de crédito posso oferecer aos meus clientes?",
                answer:
                  "Você pode oferecer diversas modalidades, como crédito pessoal, consignado, financiamento de veículos, antecipação de recebíveis, entre outros, dependendo das parcerias disponíveis na plataforma.",
              },
              {
                question:
                  "A plataforma realiza análise de crédito dos clientes?",
                answer:
                  "Sim! Nossa solução conta com ferramentas que fazem análise de crédito baseada em dados financeiros, ajudando a garantir as melhores ofertas para seus clientes.",
              },
              {
                question: "É seguro utilizar a Teddy Digital?",
                answer:
                  "Sim! Utilizamos protocolos de segurança avançados, como criptografia de ponta a ponta e conformidade com a LGPD, garantindo a proteção dos dados dos seus clientes.",
              },
              {
                question: "Há custos para começar a usar a plataforma?",
                answer:
                  "Entre em contato com nossa equipe para conhecer os planos disponíveis. Oferecemos opções adaptáveis ao tamanho do seu negócio e às suas necessidades.",
              },
              {
                question:
                  "Como posso entrar em contato para suporte ou dúvidas?",
                answer:
                  "Nossa equipe de suporte está disponível por e-mail e chat para esclarecer qualquer dúvida e oferecer assistência personalizada.",
              },
            ].map((faq, i) => (
              <div key={i}>
                <AccordionItem title={faq.question}>{faq.answer}</AccordionItem>
              </div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
