import { toast } from "sonner";
import { useClientsBatchPATCH } from "../../../../hooks/clients/useClientsPATH";
import { useSelectedClientsGET } from "../../../../hooks/clients/useSelectedClientsGET";
import { Button } from "../../../ui/button";
import { DialogTemplate } from "../../../ui/dialog/_index";
import { useDialog } from "../../../ui/dialog/dialog-root";
import { Skeleton } from "../../../ui/skeleton";

export function UnselectAllClientsButton() {
  const { setOpen } = useDialog();
  const { data, isLoading, isSuccess } = useSelectedClientsGET({
    isSelected: true,
  });

  const { mutate: unselectClients } = useClientsBatchPATCH();
  function unselectAllClients() {
    unselectClients(
      {
        data: {
          isSelected: false,
        },
        ids: isSuccess ? data.clients.map((client) => client.id) : [],
      },
      {
        onSuccess: () => {
          toast.success("Os clientes foram desmarcados com sucesso");
          setOpen(false);
        },
        onError: () => {
          toast.success("Erro ao desmarcar os clientes");
        },
      },
    );
  }

  return (
    <DialogTemplate.Root>
      {isLoading && <Skeleton className="h-8 w-full rounded" />}
      {isSuccess && (
        <DialogTemplate.Trigger className="border-primary hover:bg-muted text-primary flex w-full cursor-pointer items-center gap-1 rounded border bg-transparent px-6 py-3 text-sm font-bold">
          Limpar clientes selecionados
        </DialogTemplate.Trigger>
      )}
      <DialogTemplate.Content className="max-w-[400px] p-4">
        <div className="space-y-4">
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold">
              Deseja limpar os clientes selecionados?
            </h3>
            <p className="text-muted-foreground text-sm">
              Todos os clientes serão desmarcados, deseja mesmo prosseguir?
            </p>
          </div>
          <div className="flex justify-end gap-2 pt-2">
            <DialogTemplate.Trigger className="border-border hover:bg-accent text-foreground h-9 cursor-pointer border bg-transparent transition-all">
              <span>Cancelar</span>
            </DialogTemplate.Trigger>
            <Button
              className="cursor-pointer"
              variant="destructive"
              onClick={unselectAllClients}
            >
              Confirmar
            </Button>
          </div>
        </div>
      </DialogTemplate.Content>
    </DialogTemplate.Root>
  );
}
