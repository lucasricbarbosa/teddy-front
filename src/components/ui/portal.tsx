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

    if (show) {
      const scrollY = window.scrollY;

      document.body.style.position = "fixed";
      document.body.style.width = "100%";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.overflow = "hidden";

      return () => {
        document.body.style.position = "";
        document.body.style.width = "";
        document.body.style.top = "";
        document.body.style.overflow = "";

        window.scrollTo(0, scrollY);
      };
    }

    return () => setMounted(false);
  }, [show]);

  if (!mounted || !show) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75">
      {children}
    </div>,
    document.body,
  );
}
