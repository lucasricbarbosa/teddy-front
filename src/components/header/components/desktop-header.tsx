import { TeddyLogo } from "../../teddyLogo";
import { HeaderNav } from "../components/header-nav";
import { Sidebar } from "../components/sidebar";

export function DesktopHeader() {
  const user = localStorage.getItem("user");

  return (
    <div className="hidden items-center justify-between md:flex">
      <div className="flex items-center gap-4">
        <Sidebar />
        <TeddyLogo />
      </div>
      <HeaderNav />
      <div className="flex items-center gap-1">
        <span>Olá, </span>
        <strong>{user}!</strong>
      </div>
    </div>
  );
}
