import { cn } from "../utils/tailwind-merge";
import { useTheme } from "./theme/theme-provider";
import teddyLogo from "../assets/teddy-logo.png";
import whiteTeddyLogo from "../assets/white-orange-teddy-logo.png";

interface TeddyLogoProps {
  className?: string;
}

export function TeddyLogo({ className }: TeddyLogoProps) {
  const { theme } = useTheme();

  return (
    <img
      className={cn("h-12", className)}
      src={theme === "light" ? teddyLogo : whiteTeddyLogo}
      alt="Logo da Teddy"
    />
  );
}
