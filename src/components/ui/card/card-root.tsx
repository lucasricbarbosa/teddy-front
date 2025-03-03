import { ReactNode } from "react";

interface CardRootProps {
  children: ReactNode;
}

export function CardRoot({ children }: CardRootProps) {
  return (
    <div className="border-border flex flex-col items-center justify-center gap-2 rounded border p-4">
      {children}
    </div>
  );
}
