import { Plus } from "lucide-react";
import { Button } from "../../components/ui/button";

const client = {
  name: "Eduardo",
  balance: "R$3.500,00",
  companyId: "58120.100.00",
};

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
      <div className="mt-5 grid grid-cols-3 gap-8">
        {Array.from({ length: 10 }).map((_, index) => (
          <ClientCard client={client} key={index} />
        ))}
      </div>
    </main>
  );
}

interface ClientCardProps {
  client: ClientItemProps;
}

function ClientCard({ client }: ClientCardProps) {
  return (
    <div className="border-border flex items-center gap-4 rounded border p-4 hover:shadow">
      <Button size={"icon"} className="rounded-full" variant={"secondary"}>
        <Plus className="size-4" />
      </Button>
      <div className="flex flex-col gap-1">
        <span className="text-foreground text-lg font-medium">
          {client.name}
        </span>
        <div>
          <p className="text-muted-foreground text-sm">
            <span className="text-foreground font-medium">Saldo:</span>{" "}
            {client.balance}
          </p>
          <p className="text-muted-foreground text-sm">
            <span className="text-foreground font-medium">Empresa:</span>{" "}
            {client.companyId}
          </p>
        </div>
      </div>
    </div>
  );
}
