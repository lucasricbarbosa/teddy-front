import { ClientCard } from "../../components/clients/ClientsCard/clients-card";

const clients = [
  {
    name: "Eduardo",
    balance: "R$3.500,00",
    companyId: "58120.100.00",
  },
  {
    name: "Lucas Ricardo",
    balance: "R$3.500,00",
    companyId: "58120.100.00",
  },
  {
    name: "Mariana Souza",
    balance: "R$2.150,00",
    companyId: "58120.100.01",
  },
  {
    name: "Roberto Fernandes",
    balance: "R$5.800,00",
    companyId: "58120.100.02",
  },
  {
    name: "Carla Mendes",
    balance: "R$1.200,00",
    companyId: "58120.100.03",
  },
  {
    name: "Fernando Oliveira",
    balance: "R$7.400,00",
    companyId: "58120.100.04",
  },
  {
    name: "Tatiane Lima",
    balance: "R$3.000,00",
    companyId: "58120.100.05",
  },
  {
    name: "Gustavo Henrique",
    balance: "R$6.900,00",
    companyId: "58120.100.06",
  },
];

export interface ClientItemProps {
  name: string;
  balance: string;
  companyId: string;
}

export function Clients() {
  return (
    <main className="mx-auto min-h-[calc(100dvh-90px)] max-w-7xl p-5">
      <div className="flex items-center justify-between gap-5">
        <div className="flex items-center gap-1">
          <strong>16</strong>
          <p>clientes encontrados</p>
        </div>
        <div>
          <span>Clientes por página</span>
          <select>
            <option>10</option>
            <option>20</option>
            <option>30</option>
          </select>
        </div>
      </div>
      <div className="mt-5 grid grid-cols-1 gap-5 min-[464px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {clients.map((client, index) => (
          <ClientCard client={client} key={index} />
        ))}
      </div>
    </main>
  );
}
