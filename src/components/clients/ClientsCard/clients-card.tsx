import { Plus, Pencil, Trash2, TriangleAlert } from "lucide-react";
import { ClientItemProps } from "../../../pages/auth/clients";
import { Button } from "../../ui/button";
import { TooltipTemplate } from "../../ui/tooltip/_index";
import { DialogTemplate } from "../../ui/dialog/_index";
import { EditClientForm } from "./components/edit-client-form";

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
      <SelectClientButton />
      <EditClientButton />
      <DeleteClientButton />
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

function EditClientButton() {
  return (
    <TooltipTemplate.Root>
      <TooltipTemplate.Trigger>
        <DialogTemplate.Root>
          <DialogTemplate.Trigger className="group hover:bg-muted size-7 cursor-pointer rounded-full border-none bg-transparent p-1.5">
            <Pencil className="text-foreground size-5" />
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

function DeleteClientButton() {
  return (
    <TooltipTemplate.Root>
      <TooltipTemplate.Trigger>
        <DialogTemplate.Root>
          <DialogTemplate.Trigger className="group size-7 cursor-pointer rounded-full border-none bg-transparent p-1.5 hover:bg-red-600">
            <Trash2 className="size-5 text-red-600 transition-all group-hover:text-white" />
          </DialogTemplate.Trigger>
          <DialogTemplate.Content className="max-w-[400px] p-4">
            <DialogTemplate.Header>
              <h3 className="text-lg font-semibold">Excluir cliente</h3>
            </DialogTemplate.Header>
            <div className="pt-2 pb-2">
              Você está prestes a excluir o cliente: Eduardo
            </div>
            <DialogTemplate.Footer>
              <div className="flex justify-end gap-2 pt-2">
                <DialogTemplate.Trigger className="border-border hover:bg-accent dark:text-foreground h-9 cursor-pointer border bg-transparent text-white transition-all">
                  Cancelar
                </DialogTemplate.Trigger>
                <Button className="cursor-pointer" variant="destructive">
                  <TriangleAlert className="size-4" />
                  Confirmar
                </Button>
              </div>
            </DialogTemplate.Footer>
          </DialogTemplate.Content>
        </DialogTemplate.Root>
      </TooltipTemplate.Trigger>
      <TooltipTemplate.Content text="Excluir cliente" />
    </TooltipTemplate.Root>
  );
}
