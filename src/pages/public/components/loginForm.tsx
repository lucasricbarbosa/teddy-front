import { cn } from "../../../utils/tailwind-merge";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
export function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"form">) {
  return (
    <form className={cn("flex flex-col gap-6", className)} {...props}>
      <div className="flex flex-col items-center gap-1 text-center">
        <h1 className="text-2xl font-bold">Olá, seja bem vindo!</h1>
        <p className="text-muted-foreground text-sm text-balance">
          Digite seu nome, para sabermos quem você é
        </p>
      </div>
      <div className="grid gap-8">
        <div className="grid gap-2">
          <label htmlFor="name">Nome</label>
          <Input id="name" type="name" placeholder="Digite seu nome" required />
        </div>
        <Button type="submit" className="w-full cursor-pointer text-white">
          Entrar
        </Button>
      </div>
    </form>
  );
}
