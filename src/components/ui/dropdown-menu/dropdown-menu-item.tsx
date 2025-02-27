import { cn } from "../../../utils/tailwind-merge";
import { useDropdownMenu } from "./dropdown-menu-root";

interface DropdownMenuItemProps extends React.HTMLAttributes<HTMLDivElement> {
  inset?: boolean;
  onSelect?: () => void;
}

export function DropdownMenuItem({
  className,
  inset,
  onSelect,
  children,
  ...props
}: DropdownMenuItemProps) {
  const { setOpen } = useDropdownMenu();

  return (
    <div
      className={cn(
        "relative flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-none select-none",
        "hover:bg-gray-100 focus:bg-gray-100",
        "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        inset && "pl-8",
        className,
      )}
      onClick={() => {
        onSelect?.();
        setOpen(false);
      }}
      {...props}
    >
      {children}
    </div>
  );
}
