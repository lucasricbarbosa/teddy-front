import { ReactNode } from "react";

interface DialogHeaderProps {
  children: ReactNode;
}

export function DialogHeader({ children }: DialogHeaderProps) {
  return <div className="flex flex-col">{children}</div>;
}
