import { useEffect, useRef, useState } from "react";
import { useDialog } from "./dialog-root";
import { Portal } from "../portal";
import { cn } from "../../../utils/tailwind-merge";

interface DialogContentProps extends React.HTMLAttributes<HTMLDivElement> {
  align?: "start" | "end" | "center";
  sideOffset?: number;
}

export function DialogContent({
  align = "end",
  sideOffset = 4,
  className,
  children,
  ...props
}: DialogContentProps) {
  const { open, setOpen, triggerRef } = useDialog();
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
        const contentRect = contentRef.current.getBoundingClientRect();

        let left = 0;
        if (align === "end") {
          left = triggerRect.right - contentRect.width;
        } else if (align === "start") {
          left = triggerRect.left;
        } else {
          left = triggerRect.left + (triggerRect.width - contentRect.width) / 2;
        }

        setPosition({
          top: triggerRect.bottom + sideOffset + window.scrollY,
          left: left + window.scrollX,
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
  }, [open, setOpen, align, sideOffset, triggerRef]);

  if (!open) return null;

  return (
    <Portal>
      <div
        ref={contentRef}
        className={cn(
          "bg-background absolute z-50 min-w-[8rem] overflow-hidden rounded-md border p-1 shadow-md",
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
    </Portal>
  );
}
