import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface TooltipContextType {
  isVisible: boolean;
  setIsVisible: Dispatch<SetStateAction<boolean>>;
}

const TooltipContext = createContext<TooltipContextType | undefined>(undefined);

export function useTooltip() {
  const context = useContext(TooltipContext);
  if (!context) {
    throw new Error("useTooltip must be used within a TooltipRoot");
  }
  return context;
}

interface TooltipRootProps {
  children: ReactNode;
}

export function TooltipRoot({ children }: TooltipRootProps) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <TooltipContext.Provider value={{ isVisible, setIsVisible }}>
      <div className="relative">{children}</div>
    </TooltipContext.Provider>
  );
}
