import { ReactNode } from "react";

interface CardHeaderProps {
  children: ReactNode;
}

export function CardHeader({ children }: CardHeaderProps) {
  return <div className="pb-0.5">{children}</div>;
}
