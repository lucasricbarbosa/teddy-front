import { FocusCards } from "../../../../components/ui/focus-cards";
import teddyCard1 from "../../../../assets/teddy-card-1.png";
import teddyCard2 from "../../../../assets/teddy-card-2.png";
import teddyCard3 from "../../../../assets/teddy-card-3.png";
import teddyCard4 from "../../../../assets/teddy-card-4.png";
import teddyCard5 from "../../../../assets/teddy-card-5.png";
import teddyCard6 from "../../../../assets/teddy-card-6.png";

export function FocusCardsHome() {
  const cards = [
    {
      title: "Acompanhamento de Comissões",
      src: teddyCard1,
    },
    {
      title: "Gestão de Propostas",
      src: teddyCard2,
    },
    {
      title: "Organização de Leads",
      src: teddyCard3,
    },
    {
      title: "Gestão de Clientes",
      src: teddyCard4,
    },
    {
      title: "Simuladores de Crédito",
      src: teddyCard5,
    },
    {
      title: "Simuladores de Comissão",
      src: teddyCard6,
    },
  ];

  return (
    <div className="pt-32">
      <div className="mx-auto max-w-7xl pb-16 text-center">
        <h3 className="text-4xl font-bold text-white">
          Conheça nossos serviços
        </h3>
        <p className="pt-3 font-bold text-zinc-400">Passe pelas imagens</p>
      </div>
      <FocusCards cards={cards} />
    </div>
  );
}
