import { useQuery } from "@tanstack/react-query";
import { api } from "../../services/api";
import { AxiosError } from "axios";

export interface ClientProps {
  id: number;
  name: string;
  companyValue: number;
  salary: number;
  isSelected: boolean;
}

export interface PaginationData {
  total: number;
  totalPages: number;
  currentPage: number;
  limit: number;
  hasNext: boolean;
  hasPrevious: boolean;
}

export interface ClientsResponse {
  clients: ClientProps[];
  selectedClients: ClientProps[];
  pagination: PaginationData;
}

export interface ClientGETPropsRequest {
  page?: number;
  limit?: number;
  name?: string;
  isSelected?: boolean;
}

const clients = async (data: ClientGETPropsRequest) => {
  try {
    const response = await api.get(`/clients`, {
      params: {
        ...data,
      },
    });
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

export function useClientsGET(data: ClientGETPropsRequest) {
  const queryDetails = useQuery<ClientsResponse>({
    queryFn: () => clients(data),
    queryKey: ["clients", data],
  });

  return queryDetails;
}
