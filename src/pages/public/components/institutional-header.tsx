import { User } from "lucide-react";
import { TeddyLogo } from "../../../components/teddyLogo";
import { NavigationMenu } from "../../../components/ui/navigation-menu/navigation-menu";
import { Sidebar } from "../../../components/header/components/sidebar";

export function InstitutionalHeader() {
  return (
    <header className="bg-zinc-900">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <TeddyLogo />
        <nav>
          <div className="hidden items-center gap-2 md:flex">
            <NavigationMenu />
            <div className="border-primary flex size-8 items-center justify-center rounded-full border bg-white">
              <User className="text-primary size-5" />
            </div>
          </div>
        </nav>
        <div className="block md:hidden">
          <Sidebar />
        </div>
      </div>
    </header>
  );
}
