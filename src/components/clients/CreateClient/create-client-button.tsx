import { PlusCircle } from "lucide-react";
import { DialogTemplate } from "../../ui/dialog/_index";
import { CreateClientForm } from "./components/create-client-form";

export function CreateClientButton() {
  return (
    <DialogTemplate.Root>
      <DialogTemplate.Trigger className="border-primary hover:bg-muted text-primary flex w-full cursor-pointer items-center gap-1 rounded border bg-transparent px-6 py-3 text-sm font-bold">
        <PlusCircle className="size-[18px] font-bold" />
        Criar cliente
      </DialogTemplate.Trigger>
      <DialogTemplate.Content className="max-w-[400px] p-4">
        <DialogTemplate.Header>
          <h3 className="text-lg font-semibold">Criar cliente:</h3>
        </DialogTemplate.Header>
        <CreateClientForm />
      </DialogTemplate.Content>
    </DialogTemplate.Root>
  );
}
