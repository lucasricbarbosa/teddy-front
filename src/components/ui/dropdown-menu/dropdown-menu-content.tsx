import { useRef, useState, useEffect } from "react";
import { cn } from "../../../utils/tailwind-merge";
import { useDropdownMenu } from "./dropdown-menu-root";

interface DropdownMenuContentProps
  extends React.HTMLAttributes<HTMLDivElement> {
  sideOffset?: number;
}

export function DropdownMenuContent({
  sideOffset = 4,
  className,
  children,
  ...props
}: DropdownMenuContentProps) {
  const { open, setOpen, triggerRef } = useDropdownMenu();
  const contentRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ top: 0, left: 0 });

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        contentRef.current &&
        !contentRef.current.contains(event.target as Node) &&
        triggerRef.current &&
        triggerRef.current.contains &&
        !triggerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    const updatePosition = () => {
      if (triggerRef.current && contentRef.current) {
        const triggerRect = triggerRef.current.getBoundingClientRect();

        setPosition({
          top: triggerRect.bottom + sideOffset + window.scrollY,
          left: 0 + window.scrollX,
        });
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
      updatePosition();
      window.addEventListener("resize", updatePosition);
      window.addEventListener("scroll", updatePosition);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("resize", updatePosition);
      window.removeEventListener("scroll", updatePosition);
    };
  }, [open, setOpen, sideOffset, triggerRef]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div
        ref={contentRef}
        className={cn(
          "absolute z-50 min-w-[8rem] overflow-hidden rounded-md border border-gray-200 bg-white p-1 shadow-md",
          "animate-in fade-in-0 zoom-in-95",
          "data-[side=bottom]:slide-in-from-top-2",
          "data-[side=top]:slide-in-from-bottom-2",
          className,
        )}
        style={{
          top: `${position.top}px`,
          left: `${position.left}px`,
        }}
        {...props}
      >
        {children}
      </div>
    </div>
  );
}
