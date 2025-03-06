import { useQueryClient } from "@tanstack/react-query";
import { Minus } from "lucide-react";
import { toast } from "sonner";
import { useClientPATCH } from "../../../../hooks/clients/useClientPATH";
import { ClientProps } from "../../../../hooks/clients/useClientsGET";
import { Button } from "../../../ui/button";
import { TooltipTemplate } from "../../../ui/tooltip/_index";

export function DeselectClientButton({ client }: { client: ClientProps }) {
  const { mutate: selectClient } = useClientPATCH();
  const queryClient = useQueryClient();

  function handleDeselectClient() {
    selectClient(
      {
        id: client.id,
        isSelected: false,
      },
      {
        onSuccess: () => {
          toast.success("Cliente desmarcado com sucesso");
          queryClient.invalidateQueries({ queryKey: ["clients"] });
        },
        onError: () => {
          toast.error("Erro ao desmarcar o cliente!");
        },
      },
    );
  }

  return (
    <TooltipTemplate.Root>
      <TooltipTemplate.Trigger>
        <Button
          onClick={handleDeselectClient}
          className="size-7 cursor-pointer rounded-full p-1.5"
          variant={"ghost"}
        >
          <Minus className="size-5 text-red-600" />
        </Button>
      </TooltipTemplate.Trigger>
      <TooltipTemplate.Content text="Desmarcar cliente" />
    </TooltipTemplate.Root>
  );
}
