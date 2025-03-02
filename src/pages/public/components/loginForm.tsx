import { cn } from "../../../utils/tailwind-merge";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  loginValidationSchema,
  LoginValidationType,
} from "../validation/loginValidationSchema";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
export function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"form">) {
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginValidationSchema),
  });

  function onSubmit(values: LoginValidationType) {
    setIsLoading(true);

    localStorage.setItem("user", values.name);

    setTimeout(() => {
      setIsLoading(false);
      navigate("/");
    }, 1000);
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={cn("flex flex-col gap-6", className)}
      {...props}
    >
      <div className="flex flex-col items-center gap-1 text-center">
        <h1 className="text-2xl font-bold">Olá, seja bem vindo!</h1>
        <p className="text-muted-foreground text-sm text-balance">
          Digite seu nome, para sabermos quem você é
        </p>
      </div>
      <div className="grid gap-8">
        <div className="grid gap-2">
          <label htmlFor="name">Nome</label>
          <Input
            type="name"
            placeholder="Digite seu nome"
            required
            {...register("name")}
          />
          {errors.name && (
            <span className="text-sm font-medium text-red-500">
              {errors.name.message}
            </span>
          )}
        </div>
        <Button
          isloading={isLoading}
          type="submit"
          className="w-full cursor-pointer text-white"
        >
          Entrar
        </Button>
      </div>
    </form>
  );
}
