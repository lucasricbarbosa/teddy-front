import { TeddyLogo } from "../teddyLogo";
import { HeaderNav } from "./components/header-nav";
import { Sidebar } from "./components/sidebar";

export function Header() {
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
    <header className="bg-muted text-foreground flex items-center justify-between p-5 shadow">
      <div className="flex items-center gap-4">
        <Sidebar />
        <TeddyLogo />
      </div>
      <HeaderNav links={links} />
      <div className="flex items-center gap-1">
        <span>Olá, </span>
        <strong>Usuário!</strong>
      </div>
    </header>
  );
}
