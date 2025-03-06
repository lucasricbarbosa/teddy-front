import { api } from "../../services/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { ClientProps } from "./useClientsGET";

export interface BatchUpdateClientProps {
  ids: number[];
  data: Partial<ClientProps>;
}

const batchUpdateClients = async ({ ids, data }: BatchUpdateClientProps) => {
  try {
    const response = await api.post(`/clients/batch-update`, { ids, data });
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data || "Erro ao atualizar os clientes");
    }
    throw new Error("Erro inesperado");
  }
};

export function useClientsBatchPATCH() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: batchUpdateClients,
    mutationKey: ["clients-batch-update"],
    onError: (error: Error) => {
      console.error("Erro ao atualizar os clientes:", error.message);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["clients"],
      });
    },
  });
}
