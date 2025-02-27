import { cn } from "../../../utils/tailwind-merge";
import { Button, ButtonProps } from "../button";
import { useDialog } from "./dialog-root";

interface DialogItemProps extends ButtonProps {
  inset?: boolean;
  onSelect?: () => void;
}

export function DialogItem({
  className,
  inset,
  onSelect,
  children,
  ...props
}: DialogItemProps) {
  const { setOpen } = useDialog();

  return (
    <Button
      className={cn("px-2 py-1.5 text-sm", inset && "pl-8", className)}
      onClick={() => {
        onSelect?.();
        setOpen(false);
      }}
      {...props}
    >
      {children}
    </Button>
  );
}
