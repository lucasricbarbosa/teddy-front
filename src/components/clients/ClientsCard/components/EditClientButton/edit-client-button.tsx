import { Pencil } from "lucide-react";
import { ClientProps } from "../../../../../hooks/clients/useClientsGET";
import { DialogTemplate } from "../../../../ui/dialog/_index";
import { TooltipTemplate } from "../../../../ui/tooltip/_index";
import { useClientContext } from "../../context/clientContext";
import { EditClientForm } from "./edit-client-form";

export function EditClientButton({ client }: { client: ClientProps }) {
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
