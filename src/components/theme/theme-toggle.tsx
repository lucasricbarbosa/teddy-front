import { LaptopMinimal, Moon, Sun } from "lucide-react";
import { useTheme } from "./theme-provider";

export function ThemeToggle() {
  const { setTheme } = useTheme();

  return (
    <div className="border-border flex w-fit items-center gap-0 rounded-full border bg-transparent">
      <div>
        <input
          onChange={() => setTheme("light")}
          type="radio"
          value="light"
          id="light"
          name="theme"
          className="peer sr-only"
        />
        <label
          htmlFor="light"
          className="ring-offset-background hover:bg-background/50 peer-checked:bg-muted flex cursor-pointer items-center justify-center rounded-full p-1.5 text-sm font-medium transition-all peer-checked:shadow-lg"
        >
          <Sun className="h-4 w-4" />
          <span className="sr-only">Light</span>
        </label>
      </div>
      <div>
        <input
          onChange={() => setTheme("dark")}
          type="radio"
          value="dark"
          id="dark"
          name="theme"
          className="peer sr-only"
        />
        <label
          htmlFor="dark"
          className="ring-offset-background hover:bg-background/50 peer-checked:bg-muted peer-checked:shadow-muted flex cursor-pointer items-center justify-center rounded-full p-1.5 text-sm font-medium transition-all peer-checked:shadow-md"
        >
          <Moon className="h-4 w-4" />
          <span className="sr-only">Dark</span>
        </label>
      </div>
      <div>
        <input
          onChange={() => setTheme("system")}
          type="radio"
          value="system"
          id="system"
          name="theme"
          className="peer sr-only"
        />
        <label
          htmlFor="system"
          className="ring-offset-background hover:bg-background/50 peer-checked:bg-muted peer-checked:shadow-muted flex cursor-pointer items-center justify-center rounded-full p-1.5 text-sm font-medium transition-all peer-checked:shadow-md"
        >
          <LaptopMinimal className="h-4 w-4" />
          <span className="sr-only">System</span>
        </label>
      </div>
    </div>
  );
}
