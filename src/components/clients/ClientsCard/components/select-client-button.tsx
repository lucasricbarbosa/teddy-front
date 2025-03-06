import { useQueryClient } from "@tanstack/react-query";
import { Plus } from "lucide-react";
import { toast } from "sonner";
import { useClientPATCH } from "../../../../hooks/clients/useClientPATH";
import { ClientProps } from "../../../../hooks/clients/useClientsGET";
import { Button } from "../../../ui/button";
import { TooltipTemplate } from "../../../ui/tooltip/_index";

export function SelectClientButton({ client }: { client: ClientProps }) {
  const { mutate: selectClient } = useClientPATCH();
  const queryClient = useQueryClient();

  function handleSelectClient() {
    selectClient(
      {
        id: client.id,
        isSelected: true,
      },
      {
        onSuccess: () => {
          toast.success("Cliente selecionado com sucesso");
          queryClient.invalidateQueries({ queryKey: ["clients"] });
        },
        onError: () => {
          toast.error("Erro ao selecionar o cliente!");
        },
      },
    );
  }

  return (
    <TooltipTemplate.Root>
      <TooltipTemplate.Trigger>
        <Button
          onClick={handleSelectClient}
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
