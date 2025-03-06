import { Trash2, TriangleAlert } from "lucide-react";
import { toast } from "sonner";
import { useClientDELETE } from "../../../../hooks/clients/useClientDELETE";
import { ClientProps } from "../../../../hooks/clients/useClientsGET";
import { Button } from "../../../ui/button";
import { DialogTemplate } from "../../../ui/dialog/_index";
import { useDialog } from "../../../ui/dialog/dialog-root";
import { TooltipTemplate } from "../../../ui/tooltip/_index";
import { useClientContext } from "../context/clientContext";
import { useQueryClient } from "@tanstack/react-query";

export function DeleteClientButton({ client }: { client: ClientProps }) {
  const { setSelectedClient } = useClientContext();

  return (
    <TooltipTemplate.Root>
      <TooltipTemplate.Trigger>
        <DialogTemplate.Root>
          <DialogTemplate.Trigger className="group size-7 cursor-pointer rounded-full border-none bg-transparent p-0 hover:bg-red-600">
            <div
              className="flex h-7 items-center justify-center p-1.5"
              onClick={() => setSelectedClient(client)}
            >
              <Trash2 className="size-[18px] text-red-600 transition-all group-hover:text-white" />
            </div>
          </DialogTemplate.Trigger>
          <DeleteClientDialog client={client} />
        </DialogTemplate.Root>
      </TooltipTemplate.Trigger>
      <TooltipTemplate.Content text="Excluir cliente" />
    </TooltipTemplate.Root>
  );
}

function DeleteClientDialog({ client }: { client: ClientProps }) {
  const { mutate: deleteClient, isPending } = useClientDELETE();
  const { setOpen } = useDialog();
  const queryClient = useQueryClient();

  function handleDeleteClient() {
    deleteClient(client.id, {
      onSuccess: () => {
        setOpen(false);
        toast.warning("Cliente excluído!");
        queryClient.invalidateQueries({ queryKey: ["clients"] });
      },
      onError: () => {
        toast.error("Ocorreu um erro ao excluir esse cliente");
      },
    });
  }

  return (
    <DialogTemplate.Content className="max-w-[400px] p-4">
      <DialogTemplate.Header>
        <h3 className="text-lg font-semibold">Excluir cliente</h3>
      </DialogTemplate.Header>
      <div className="pt-2 pb-2">
        Você está prestes a excluir o cliente:{" "}
        <p className="font-medium">{client.name}</p>
      </div>
      <DialogTemplate.Footer>
        <div className="flex justify-end gap-2 pt-2">
          <DialogTemplate.Trigger className="border-border hover:bg-accent dark:text-foreground h-9 cursor-pointer border bg-transparent text-white transition-all">
            Cancelar
          </DialogTemplate.Trigger>
          <Button
            isloading={isPending}
            onClick={handleDeleteClient}
            className="cursor-pointer"
            variant="destructive"
          >
            <TriangleAlert className="size-4" />
            Confirmar
          </Button>
        </div>
      </DialogTemplate.Footer>
    </DialogTemplate.Content>
  );
}
