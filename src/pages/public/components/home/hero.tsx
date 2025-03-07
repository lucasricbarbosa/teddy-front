import { UserCheck2 } from "lucide-react";
import { Button } from "../../../../components/ui/button";
import { FlipWords } from "../../../../components/ui/flip-words";

export function Hero() {
  const words = [
    "ESCRITÓRIOS DE CRÉDITO",
    "VOCÊ",
    "CRÉDITO",
    "BANCÁRIOS",
    "ACESSORES DE INVESTIMENTO",
  ];
  return (
    <main className="mx-auto flex max-w-7xl flex-col items-center justify-center py-44">
      <h1 className="text-center text-2xl font-bold md:text-5xl">
        A SOLUÇÃO PERFEITA PARA
      </h1>
      <FlipWords
        className="py-5 text-xl font-medium md:text-4xl"
        words={words}
      />{" "}
      <br />
      <p className="max-w-5xl text-center text-lg md:text-[26px]">
        Conecte-se aos maiores Bancos e Fintechs do País e oferte as melhores
        opções de crédito do mercado aos seus clientes!
      </p>
      <div className="mt-4 mb-10 flex flex-col items-center gap-2">
        <Button className="h-fit cursor-pointer px-6 py-2.5 text-xl font-medium text-white transition-all duration-300 hover:scale-110">
          Seja um banker na Teddy! <UserCheck2 className="size-5" />
        </Button>
        <div className="mt-1 flex items-center pt-3 min-[470px]:pt-0">
          <span className="relative flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
            <span className="relative inline-flex h-3 w-3 rounded-full bg-green-600"></span>
          </span>
          <p className="ml-2 text-sm font-medium">Disponível agora</p>
        </div>
      </div>
      <div>
        <img
          src="https://teddydigital.io/wp-content/uploads/2024/05/Mock-teddy-novo-5-1-1024x675.png"
          alt="Notebook com o sistema da Teddy Open Finance"
        />
      </div>
    </main>
  );
}
