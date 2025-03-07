export default function ConnectedBanks() {
  return (
    <div className="bg-zinc-900 py-20">
      <div className="mx-auto max-w-7xl pb-16 text-center">
        <h3 className="text-4xl font-bold text-white">
          Mais de 70 Bancos e Fintechs Conectadas
        </h3>
        <p className="pt-3 font-bold text-zinc-400">
          O próximo pode ser o seu! Não perca essa chance.
        </p>
      </div>
      <BanksSlider />
    </div>
  );
}

const banks = [
  {
    src: "https://teddydigital.io/wp-content/uploads/2023/03/daycoval-1.png",
    name: "Daycoval",
  },
  {
    src: "https://teddydigital.io/wp-content/uploads/2023/03/creditas.png",
    name: "Creditas",
  },
  {
    src: "https://teddydigital.io/wp-content/uploads/2023/03/bradesco-seguros.png",
    name: "Bradesco Seguros",
  },
  {
    src: "https://teddydigital.io/wp-content/uploads/2023/03/wiz.png",
    name: "Bradesco seguros",
  },
  {
    src: "https://teddydigital.io/wp-content/uploads/2023/03/tokiomarine.png",
    name: "Tokio",
  },
  {
    src: "https://teddydigital.io/wp-content/uploads/2023/03/itau.png",
    name: "Itaú",
  },
  {
    src: "https://teddydigital.io/wp-content/uploads/2023/03/porto-seguro.png",
    name: "Porto seguro",
  },
  {
    src: "https://teddydigital.io/wp-content/uploads/2023/03/Prancheta-106.png",
    name: "Amil",
  },
  {
    src: "https://teddydigital.io/wp-content/uploads/2023/03/crefisa.png",
    name: "Crefisa",
  },
  {
    src: "https://teddydigital.io/wp-content/uploads/2023/03/bib.png",
    name: "Bib",
  },
  {
    src: "https://teddydigital.io/wp-content/uploads/2023/06/facta.png",
    name: "Facta",
  },
];

function BanksSlider() {
  return (
    <div className="mx-auto flex max-w-[1800px] overflow-hidden whitespace-nowrap">
      <div className="animate-slide flex min-w-full">
        {[...banks, ...banks].map((tech, index) => (
          <div
            key={index}
            className="mx-14 flex w-32 flex-col items-center justify-center"
          >
            <img
              src={tech.src}
              alt={tech.name}
              loading="lazy"
              className="h-20 w-[194px] max-w-none"
            />
            <p className="text-muted-foreground pt-4 text-xl font-bold">
              {tech.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
