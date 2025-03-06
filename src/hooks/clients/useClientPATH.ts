import { api } from "../../services/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { ClientProps } from "./useClientsGET";

export interface UpdateClientProps extends Partial<ClientProps> {
  id: number;
}

const updateClient = async ({ id, ...data }: UpdateClientProps) => {
  try {
    const response = await api.patch(`/clients/${id}`, data);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data || "Erro ao atualizar o cliente");
    }
    throw new Error("Erro inesperado");
  }
};

export function useClientPATCH() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateClient,
    mutationKey: ["clients"],
    onError: (error: Error) => {
      console.error("Erro ao atualizar o cliente:", error.message);
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: ["client", "clients", data.id],
      });
    },
  });
}
