import { Plus, Pencil, Trash2 } from "lucide-react";
import { ClientItemProps } from "../../../pages/auth/clients";
import { Button } from "../../ui/button";
import { TooltipTemplate } from "../../ui/tooltip/_index";

interface ClientCardProps {
  client: ClientItemProps;
}

export function ClientCard({ client }: ClientCardProps) {
  return (
    <div className="border-border flex flex-col items-center justify-center gap-2 rounded border p-4">
      <div className="pb-0.5">
        <h3 className="text-base font-bold">{client.name}</h3>
      </div>
      <div className="flex flex-col items-center justify-center gap-1">
        <span className="text-sm">Salário: {client.balance}</span>
        <span className="text-sm">Empresa: {client.companyId}</span>
      </div>
      <ClientsCardFooter />
    </div>
  );
}

function ClientsCardFooter() {
  return (
    <div className="flex w-full items-center justify-between">
      <TooltipTemplate.Root>
        <TooltipTemplate.Trigger>
          <Button
            className="size-7 cursor-pointer rounded-full p-1"
            variant={"ghost"}
          >
            <Plus className="size-5" />
          </Button>
        </TooltipTemplate.Trigger>
        <TooltipTemplate.Content text="Novo cliente" />
      </TooltipTemplate.Root>
      <TooltipTemplate.Root>
        <TooltipTemplate.Trigger>
          <Button
            className="size-7 cursor-pointer rounded-full p-1"
            variant={"ghost"}
          >
            <Pencil className="size-5" />
          </Button>
        </TooltipTemplate.Trigger>
        <TooltipTemplate.Content text="Novo cliente" />
      </TooltipTemplate.Root>
      <TooltipTemplate.Root>
        <TooltipTemplate.Trigger>
          <Button
            className="group size-7 cursor-pointer rounded-full p-1 hover:bg-red-600"
            variant={"ghost"}
          >
            <Trash2 className="size-5 text-red-600 transition-all group-hover:text-white" />
          </Button>
        </TooltipTemplate.Trigger>
        <TooltipTemplate.Content text="Novo cliente" />
      </TooltipTemplate.Root>
    </div>
  );
}
