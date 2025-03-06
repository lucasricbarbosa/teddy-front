import { ClientProps } from "../../../hooks/clients/useClientsGET";
import { formatMoney } from "../../../utils/formatMoney";
import { DeleteClientButton } from "./components/delete-client-buttons";
import { SelectClientButton } from "./components/select-client-button";
import { EditClientButton } from "./components/EditClientButton/edit-client-button";
import { DeselectClientButton } from "./components/unselect-button";

interface ClientCardProps {
  client: ClientProps;
}

export function ClientCard({ client }: ClientCardProps) {
  return (
    <div className="border-border flex flex-col items-center justify-center gap-2 rounded border p-4">
      <div className="pb-0.5">
        <h3 className="line-clamp-2 text-base font-bold">{client.name}</h3>
      </div>
      <div className="flex flex-col items-center justify-center gap-1">
        <span className="text-sm">Salário: {formatMoney(client.salary)}</span>
        <span className="text-sm">
          Empresa: {formatMoney(client.companyValue)}
        </span>
      </div>
      <ClientsCardFooter client={client} />
    </div>
  );
}

function ClientsCardFooter({ client }: { client: ClientProps }) {
  return (
    <div className="flex w-full items-center justify-between">
      {client.isSelected ? (
        <div className="flex w-full items-center justify-end">
          <DeselectClientButton client={client} />
        </div>
      ) : (
        <>
          <SelectClientButton client={client} />
          <EditClientButton client={client} />
          <DeleteClientButton client={client} />
        </>
      )}
    </div>
  );
}
