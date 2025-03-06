import { createContext, useContext, useState } from "react";
import { ClientProps } from "../../../../hooks/clients/useClientsGET";
import { Outlet } from "react-router-dom";

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

export function ClientProvider() {
  const [selectedClient, setSelectedClient] = useState<ClientProps | null>(
    null,
  );

  const value = {
    selectedClient,
    setSelectedClient,
  };

  return (
    <ClientContext.Provider value={value}>
      <Outlet />
    </ClientContext.Provider>
  );
}
