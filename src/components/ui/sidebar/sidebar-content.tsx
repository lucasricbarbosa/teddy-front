import { ChevronLeft, LogOut, LucideIcon } from "lucide-react";
import { useSidebar } from "./sidebar-root";
import { createElement, ReactNode } from "react";
import { cn } from "../../../utils/tailwind-merge";
import { Link } from "react-router-dom";
import whiteTeddyLogo from "../../../assets/white-teddy-logo.webp";
import { Button } from "../button";
import { ThemeToggle } from "../../theme/theme-toggle";

export function SidebarContent({ children }: { children: ReactNode }) {
  const { isOpen } = useSidebar();

  return (
    <aside
      id="sidebar"
      className={`bg-sidebar-background text-sidebar-foreground fixed top-0 left-0 z-40 flex h-screen w-64 transform flex-col justify-between rounded-r-xl transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
      aria-hidden={!isOpen}
    >
      {children}
    </aside>
  );
}

export function SidebarHeader() {
  const { isOpen, setIsOpen } = useSidebar();

  return (
    <div className="relative flex items-center justify-center rounded-r-xl bg-zinc-800 py-10">
      <img className="w-24" src={whiteTeddyLogo} alt="Logo da Teddy" />
      <Button
        className={cn(
          "group cursor-pointer transition-all duration-300 ease-in-out",
          isOpen
            ? "bg-foreground text-background visible absolute -right-5 -bottom-5 size-10 rounded-full p-0 opacity-100 shadow"
            : "invisible size-0 opacity-0",
        )}
        onClick={() => setIsOpen(!isOpen)}
      >
        <ChevronLeft
          className="transition-all duration-300 group-hover:-translate-x-0.5"
          size={20}
        />
      </Button>
    </div>
  );
}

export function SidebarBody({
  items,
}: {
  items: {
    title: string;
    url: string;
    icon?: LucideIcon;
    subitems?: {
      title: string;
      url: string;
      icon?: LucideIcon;
    }[];
  }[];
}) {
  return (
    <nav className="h-full p-3 pt-10">
      <ul className="space-y-2">
        {items.map(({ title, url, icon, subitems }) => (
          <li>
            <Link
              to={url}
              className="hover:bg-sidebar-accent flex items-center gap-2 rounded p-2 transition-colors duration-200"
            >
              {icon &&
                createElement(icon, {
                  className: cn("text-foreground size-4"),
                })}
              <span className="block truncate overflow-hidden text-sm">
                {title}
                {subitems && (
                  <span className="text-muted-foreground ml-2 text-xs">
                    ({subitems.length})
                  </span>
                )}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function SidebarFooter() {
  return (
    <div className="flex items-center justify-between p-3">
      <Button
        className="bg-sidebar-background cursor-pointer"
        variant={"outline"}
      >
        <LogOut className="size-4" />
        Sair
      </Button>
      <ThemeToggle />
    </div>
  );
}
