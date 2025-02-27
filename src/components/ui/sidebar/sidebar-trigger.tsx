import { Menu } from "lucide-react";
import { Button } from "../button";
import { useSidebar } from "./sidebar-root";

export function SidebarTrigger() {
  const { isOpen, setIsOpen } = useSidebar();

  return (
    <Button
      onClick={() => setIsOpen(!isOpen)}
      aria-expanded={isOpen}
      variant={"ghost"}
      aria-controls="sidebar"
      size={"icon"}
      className="cursor-pointer"
    >
      <Menu size={24} />
      <span className="sr-only">
        {isOpen ? "Close sidebar" : "Open sidebar"}
      </span>
    </Button>
  );
}
