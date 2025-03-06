import { api } from "../../services/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";

export interface NewClientProps {
  name: string;
  companyValue: number;
  salary: number;
  isSelected: boolean;
}

const postClient = async (newClientData: NewClientProps) => {
  try {
    const response = await api.post("/clients", newClientData);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(
        error.response?.data.message || "Erro na criação do acesso",
      );
    } else {
      throw error;
    }
  }
};

export function useClientPOST() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: postClient,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["clients"] });
    },
    onError: (error: Error) => {
      console.error("Erro ao criar o cliente:", error.message);
    },
  });

  return mutation;
}
