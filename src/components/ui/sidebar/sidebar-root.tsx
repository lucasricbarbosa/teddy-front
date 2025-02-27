import { createContext, useContext, useState, ReactNode } from "react";

// Defina os tipos para o contexto do Sidebar
interface SidebarContextValue {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  toggleSidebar: () => void;
}

// Crie o contexto
const SidebarContext = createContext<SidebarContextValue | undefined>(
  undefined,
);

// Hook para acessar o contexto do Sidebar
export function useSidebar() {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
}

// Componente raiz do Sidebar que provê o contexto
export function SidebarRoot({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <SidebarContext.Provider value={{ isOpen, setIsOpen, toggleSidebar }}>
      <div className="relative">
        {children}
        {isOpen && (
          <div
            className="bg-opacity-50 fixed inset-0 z-30 bg-black/50"
            onClick={toggleSidebar}
            aria-hidden="true"
          />
        )}
      </div>
    </SidebarContext.Provider>
  );
}
