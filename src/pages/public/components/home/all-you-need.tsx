import {
  DollarSign,
  Grid,
  Headphones,
  Rocket,
  Shield,
  TrendingUp,
} from "lucide-react";

export function AllYouNeed() {
  const items = [
    {
      icon: <TrendingUp className="size-6" />,
      text: "Potencial de ganho ilimitado",
    },
    {
      icon: <DollarSign className="size-6" />,
      text: "Acesso às melhores taxas do mercado",
    },
    {
      icon: <Shield className="size-6" />,
      text: "Processo 100% digital e seguro",
    },
    {
      icon: <Grid className="size-6" />,
      text: "Diversificação de produtos financeiros",
    },
    {
      icon: <Headphones className="size-6" />,
      text: "Suporte especializado para parceiros",
    },
    {
      icon: <Rocket className="size-6" />,
      text: "Plataforma intuitiva e fácil de usar",
    },
  ];

  return (
    <div className="mx-auto grid max-w-7xl grid-cols-2 items-end gap-8 pb-12">
      <img
        src="https://teddydigital.io/wp-content/uploads/2024/05/Group-20-1.png"
        alt="Celular com o sistema Teddy"
      />
      <div className="flex flex-col">
        <h3 className="text-primary text-3xl font-semibold">
          A SOLUÇÃO PERFEITA PARA
        </h3>
        <div className="mt-4 grid grid-cols-3 gap-5 pb-2">
          {items.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col items-center justify-center gap-1 rounded border p-5 ${
                index % 2 === 0
                  ? "bg-primary border-transparent text-white"
                  : "bg-background border-primary text-primary"
              }`}
            >
              {item.icon}
              <span className="text-center text-sm font-medium">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
