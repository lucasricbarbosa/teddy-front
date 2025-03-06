import { api } from "../../services/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";

const deleteClient = async (id: number) => {
  try {
    const response = await api.delete(`clients/${id}`);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data.message || "Erro ao apagar cliente");
    } else {
      throw error;
    }
  }
};

export function useClientDELETE() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: deleteClient,
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: ["client", "clients", data.id],
      });
    },
    onError: (error: Error) => {
      console.error("Erro ao apagar o cliente:", error.message);
    },
  });

  return mutation;
}
