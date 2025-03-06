import { api } from "../../services/api";
import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { ClientProps } from "./useClientsGET";

const client = async (id: number) => {
  try {
    const response = await api.get(`/clients/${id}`);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      return error.response?.data;
    } else {
      console.error("Aconteceu um erro inesperado", error);
      throw error;
    }
  }
};

export function useClientGET(id: number, enabled: boolean = false) {
  const queryDetails = useQuery<ClientProps>({
    queryFn: () => client(id),
    queryKey: ["clients", id],
    enabled,
  });

  return queryDetails;
}
