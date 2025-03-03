import { ReactNode } from "react";
import { useTooltip } from "./tooltip-root";

interface TooltipTriggerProps {
  children: ReactNode;
}
export function TooltipTrigger({ children }: TooltipTriggerProps) {
  const { setIsVisible } = useTooltip();

  return (
    <div
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      className="inline-block"
    >
      {children}
    </div>
  );
}
