import { ReactNode } from "react";

interface DialogFooterProps {
  children: ReactNode;
}

export function DialogFooter({ children }: DialogFooterProps) {
  return <div className="flex w-full items-center justify-end">{children}</div>;
}
