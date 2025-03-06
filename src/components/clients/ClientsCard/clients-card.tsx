import { Plus, Pencil } from "lucide-react";
import { Button } from "../../ui/button";
import { TooltipTemplate } from "../../ui/tooltip/_index";
import { DialogTemplate } from "../../ui/dialog/_index";
import { EditClientForm } from "./components/edit-client-form";
import { ClientProps } from "../../../hooks/clients/useClientsGET";
import { formatMoney } from "../../../utils/formatMoney";
import { useClientContext } from "./context/clientContext";
import { DeleteClientButton } from "./components/delete-client-buttons";

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
      <SelectClientButton />
      <EditClientButton client={client} />
      <DeleteClientButton client={client} />
    </div>
  );
}

function SelectClientButton() {
  return (
    <TooltipTemplate.Root>
      <TooltipTemplate.Trigger>
        <Button
          className="size-7 cursor-pointer rounded-full p-1.5"
          variant={"ghost"}
        >
          <Plus className="size-5" />
        </Button>
      </TooltipTemplate.Trigger>
      <TooltipTemplate.Content text="Selecionar cliente" />
    </TooltipTemplate.Root>
  );
}

function EditClientButton({ client }: { client: ClientProps }) {
  const { setSelectedClient } = useClientContext();

  return (
    <TooltipTemplate.Root>
      <TooltipTemplate.Trigger>
        <DialogTemplate.Root>
          <DialogTemplate.Trigger className="group hover:bg-muted size-7 cursor-pointer rounded-full border-none bg-transparent p-0">
            <div
              className="flex h-7 items-center justify-center p-1.5"
              onClick={() => setSelectedClient(client)}
            >
              <Pencil className="text-foreground size-[18px]" />
            </div>
          </DialogTemplate.Trigger>
          <DialogTemplate.Content className="max-w-[400px] p-4">
            <DialogTemplate.Header>
              <h3 className="text-lg font-semibold">Editar cliente:</h3>
            </DialogTemplate.Header>
            <EditClientForm />
          </DialogTemplate.Content>
        </DialogTemplate.Root>
      </TooltipTemplate.Trigger>
      <TooltipTemplate.Content text="Editar cliente" />
    </TooltipTemplate.Root>
  );
}
