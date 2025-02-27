import teddyLogo from "../../assets/teddy-logo.png";
import whiteTeddyLogo from "../../assets/white-orange-teddy-logo.png";
import { useTheme } from "../theme/theme-provider";
import { HeaderNav } from "./components/header-nav";
import { Sidebar } from "./components/sidebar";

export function Header() {
  const { theme } = useTheme();

  const links = [
    {
      name: "Clientes",
      url: "/",
    },
    {
      name: "Clientes selecionados",
      url: "/clientes-selecionados",
    },
    {
      name: "Sair",
      url: "/sair",
    },
  ];

  return (
    <header className="bg-background text-foreground flex items-center justify-between p-5 shadow">
      <div className="flex items-center gap-4">
        <Sidebar />
        <img
          className="h-12"
          src={theme === "light" ? teddyLogo : whiteTeddyLogo}
          alt="Logo da Teddy"
        />
      </div>
      <HeaderNav links={links} />
      <div className="flex items-center gap-1">
        <span>Olá, </span>
        <strong>Usuário!</strong>
      </div>
    </header>
  );
}
