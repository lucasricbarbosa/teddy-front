import { cn } from "../../../utils/tailwind-merge";
import { useDialog } from "./dialog-root";

interface DialogTriggerProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
}

export function DialogTrigger({
  className,
  children,
  ...props
}: DialogTriggerProps) {
  const { open, setOpen, triggerRef } = useDialog();

  return (
    <button
      ref={triggerRef}
      onClick={() => setOpen(!open)}
      className={cn(
        "inline-flex items-center justify-center rounded-md text-sm font-medium",
        "bg-white text-gray-900 hover:bg-gray-50",
        "h-10 px-4 py-2",
        "border border-gray-200",
        "focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:outline-none",
        "disabled:pointer-events-none disabled:opacity-50",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
