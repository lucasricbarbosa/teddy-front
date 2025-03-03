import { ReactNode } from "react";

interface CardContentProps {
  children: ReactNode;
}

export function CardContent({ children }: CardContentProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-1">
      {children}
    </div>
  );
}
