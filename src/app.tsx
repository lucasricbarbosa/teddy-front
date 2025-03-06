import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { ThemeProvider } from "./components/theme/theme-provider";
import { Toaster } from "sonner";

export function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <Toaster richColors />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
