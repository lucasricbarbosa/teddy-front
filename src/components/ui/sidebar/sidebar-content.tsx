import { ChevronLeft, LucideIcon } from "lucide-react";
import { useSidebar } from "./sidebar-root";
import { createElement, ReactNode } from "react";
import { cn } from "../../../utils/tailwind-merge";
import { Link, useLocation } from "react-router-dom";
import whiteTeddyLogo from "../../../assets/white-teddy-logo.webp";
import { Button } from "../button";
import { ThemeToggle } from "../../theme/theme-toggle";
import { ExitModal } from "../../exit-modal";

export function SidebarContent({ children }: { children: ReactNode }) {
  const { isOpen } = useSidebar();

  return (
    <aside
      id="sidebar"
      className={`bg-sidebar-background text-sidebar-foreground fixed top-0 right-0 z-40 flex h-screen w-64 transform flex-col justify-between rounded-l-xl transition-transform duration-300 ease-in-out md:left-0 md:rounded-l-none md:rounded-r-xl ${
        isOpen ? "translate-x-0" : "translate-x-full md:-translate-x-full"
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
    <div className="relative flex items-center justify-center rounded-l-xl bg-zinc-800 py-10 md:rounded-l-none md:rounded-r-xl">
      <img className="w-24" src={whiteTeddyLogo} alt="Logo da Teddy" />
      <Button
        className={cn(
          "group hidden cursor-pointer transition-all duration-300 ease-in-out md:flex",
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
  }[];
}) {
  const location = useLocation();
  const currentPath = location.pathname;
  const { isOpen } = useSidebar();

  return (
    <nav className="h-full p-3 pt-10">
      <ul className="space-y-2">
        {items.map(({ title, url, icon }) => {
          const isActive = currentPath === url;
          return (
            <li key={title}>
              <Link
                to={url}
                className={cn(
                  "hover:bg-sidebar-accent relative flex items-center gap-2 rounded p-2 transition-colors duration-200",
                  isActive && "text-primary font-medium",
                )}
              >
                {isActive && isOpen && (
                  <div className="bg-primary absolute top-0 -left-3.5 h-full w-1.5 rounded md:-right-3.5 md:left-auto" />
                )}
                {icon &&
                  createElement(icon, {
                    className: cn(
                      "text-foreground size-4",
                      isActive && "text-primary",
                    ),
                  })}
                <span className="block truncate overflow-hidden text-sm">
                  {title}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export function SidebarFooter() {
  return (
    <div className="flex items-center justify-between p-3">
      <ExitModal variant="button" />
      <ThemeToggle />
    </div>
  );
}
