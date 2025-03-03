import { LogOut } from "lucide-react";
import { Button } from "./ui/button";
import { DialogTemplate } from "./ui/dialog/_index";
import { useAuth } from "../hooks/useAuth";

interface ExitModalProps {
  variant: "button" | "menu-item";
}

export function ExitModal({ variant = "button" }: ExitModalProps) {
  const { logout } = useAuth();

  const handleExit = () => {
    logout();
  };

  return (
    <div className="h-fit">
      <DialogTemplate.Root>
        {variant === "button" && (
          <DialogTemplate.Trigger className="bg-sidebar-background hover:bg-accent border-border text-muted-foreground flex h-9 cursor-pointer items-center gap-2 dark:text-white">
            <LogOut className="size-4" />
            Sair
          </DialogTemplate.Trigger>
        )}
        {variant === "menu-item" && (
          <DialogTemplate.Trigger className="h-fit cursor-pointer border-none bg-transparent p-0 hover:bg-transparent">
            <span className="text-muted-foreground hover:text-primary/80 text-base transition-colors">
              Sair
            </span>
          </DialogTemplate.Trigger>
        )}
        <DialogTemplate.Content className="p-4">
          <div className="space-y-4">
            <div className="flex flex-col">
              <h3 className="text-lg font-semibold">Confirmar saída</h3>
              <p className="text-muted-foreground text-sm">
                Tem certeza que deseja sair do sistema?
              </p>
            </div>
            <div className="flex justify-end gap-2 pt-2">
              <DialogTemplate.Trigger className="border-border hover:bg-accent h-9 cursor-pointer border bg-transparent text-white transition-all">
                Cancelar
              </DialogTemplate.Trigger>
              <Button
                className="cursor-pointer"
                variant="destructive"
                onClick={handleExit}
              >
                Confirmar
              </Button>
            </div>
          </div>
        </DialogTemplate.Content>
      </DialogTemplate.Root>
    </div>
  );
}
