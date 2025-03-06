import { useEffect, useRef, useState } from "react";
import { useDialog } from "./dialog-root";
import { Portal } from "../portal";
import { cn } from "../../../utils/tailwind-merge";
import { Button } from "../button";
import { X } from "lucide-react";

interface DialogContentProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export function DialogContent({
  className,
  children,
  ...props
}: DialogContentProps) {
  const { open, setOpen, triggerRef } = useDialog();
  const contentRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  const [animationState, setAnimationState] = useState<
    "entering" | "entered" | "exiting" | "exited"
  >("exited");

  useEffect(() => {
    if (open && animationState === "exited") {
      setAnimationState("entering");
      setTimeout(() => {
        setAnimationState("entered");
      }, 10);
    } else if (
      !open &&
      (animationState === "entered" || animationState === "entering")
    ) {
      setAnimationState("exiting");
      setTimeout(() => {
        setAnimationState("exited");
      }, 300);
      // Duração da animação, para dar uma abertura mais suave ao modal
      // Fiz isso para ser mais semelhante ao modal do Chakra UI
    }
  }, [open, animationState]);

  useEffect(() => {
    if (open) {
      setMounted(true);
    }
  }, [open]);

  useEffect(() => {
    if (animationState === "exited" && !open) {
      setMounted(false);
    }
  }, [animationState, open]);

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

    if (mounted) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mounted, setOpen, triggerRef]);

  if (!mounted) return null;

  return (
    <Portal>
      <div
        className={cn(
          "fixed inset-0 z-50 flex items-center justify-center bg-black/75 transition-opacity duration-300",
          animationState === "entering" ? "opacity-0" : "",
          animationState === "entered" ? "opacity-100" : "",
          animationState === "exiting" ? "opacity-0" : "",
        )}
      >
        <div
          ref={contentRef}
          className={cn(
            "bg-background border-border relative z-50 min-w-[425px] overflow-hidden rounded-md border p-1 shadow-md transition-all duration-300",
            animationState === "entering" ? "scale-95 opacity-0" : "",
            animationState === "entered" ? "scale-100 opacity-100" : "",
            animationState === "exiting" ? "scale-95 opacity-0" : "",
            className,
          )}
          {...props}
        >
          <Button
            variant="ghost"
            className="absolute top-4 right-4 h-fit w-fit cursor-pointer p-0 hover:bg-transparent"
            onClick={() => setOpen(false)}
          >
            <X className="text-muted-foreground hover:text-foreground size-4" />
          </Button>
          {children}
        </div>
      </div>
    </Portal>
  );
}
