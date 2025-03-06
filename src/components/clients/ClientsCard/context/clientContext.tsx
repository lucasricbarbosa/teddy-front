import { createContext, ReactNode, useContext, useState } from "react";
import { ClientProps } from "../../../../hooks/clients/useClientsGET";

interface ClientContextType {
  selectedClient: ClientProps | null;
  setSelectedClient: (client: ClientProps | null) => void;
}

const ClientContext = createContext<ClientContextType | undefined>(undefined);

export function useClientContext() {
  const context = useContext(ClientContext);
  if (context === undefined) {
    throw new Error(
      "useClientContext deve ser usado dentro de um ClientProvider",
    );
  }
  return context;
}

export function ClientProvider({ children }: { children: ReactNode }) {
  const [selectedClient, setSelectedClient] = useState<ClientProps | null>(
    null,
  );

  const value = {
    selectedClient,
    setSelectedClient,
  };

  return (
    <ClientContext.Provider value={value}>{children}</ClientContext.Provider>
  );
}
