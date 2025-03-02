import { Navigate } from "react-router-dom";

import { useAuth } from "../../hooks/useAuth";
import { DesktopHeader } from "./components/desktop-header";
import { MobileHeader } from "./components/mobile-header";

export const links = [
  {
    name: "Clientes",
    url: "/",
  },
  {
    name: "Clientes selecionados",
    url: "/clientes-selecionados",
  },
];

export function Header() {
  const { isAuthenticated, loading } = useAuth();

  if (!isAuthenticated && !loading) {
    return <Navigate to="/login" replace />;
  }

  return (
    <header className="bg-muted text-foreground p-5 shadow">
      <DesktopHeader />
      <MobileHeader />
    </header>
  );
}
