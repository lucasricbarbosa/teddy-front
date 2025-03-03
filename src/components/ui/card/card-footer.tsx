import { ReactNode } from "react";

interface CardFooterProps {
  children: ReactNode;
}

export function CardFooter({ children }: CardFooterProps) {
  <div className="flex w-full items-center justify-between">{children}</div>;
}
