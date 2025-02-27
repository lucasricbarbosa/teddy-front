import { LoginForm } from "../public/components/loginForm";
import { TeddyLogo } from "../../components/teddyLogo";
export function LoginPage() {
  return (
    <div className="relative grid min-h-svh lg:grid-cols-[3fr_5fr]">
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(circle at top left, rgba(205, 108, 4, 0.1) 0%, rgba(41, 92, 217, 0.01) 35%, rgba(240, 248, 255, 0.0) 100%)",
          mixBlendMode: "screen",
        }}
      />
      <div className="absolute bottom-3 left-3 z-10">
        <span className="text-muted-foreground text-sm">
          © 2025 - TEDDY HUB DIGITAL LTDA. Todos os Direitos Reservados
        </span>
      </div>
      <div className="z-10 flex flex-col gap-4 p-4 md:p-5">
        <div className="flex justify-center gap-2 md:justify-start">
          <div className="flex items-center gap-2 font-medium">
            <TeddyLogo />
          </div>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <LoginForm />
          </div>
        </div>
      </div>
      <div className="bg-muted relative hidden lg:block">
        <img
          src="/placeholder.svg"
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
}
