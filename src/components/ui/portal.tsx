import type React from "react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface PortalProps {
  children: React.ReactNode;
  show?: boolean;
}

export function Portal({ children, show = true }: PortalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Desabilitar scroll quando o portal estiver ativo
    if (show) {
      // Salva a posição de scroll atual
      const scrollY = window.scrollY;

      // Adiciona estilo para prevenir scroll
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.overflow = "hidden";

      // Quando o componente for desmontado ou show mudar para false
      return () => {
        // Remove os estilos que previnem scroll
        document.body.style.position = "";
        document.body.style.width = "";
        document.body.style.top = "";
        document.body.style.overflow = "";

        // Restaura a posição de scroll
        window.scrollTo(0, scrollY);
      };
    }

    return () => setMounted(false);
  }, [show]);

  if (!mounted || !show) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/25">
      {children}
    </div>,
    document.body,
  );
}
