import { createBrowserRouter } from "react-router-dom";
import { DefaultLayout } from "./layouts/defaultLayout";
import { Clients } from "./pages/auth/clients";
import { LoginPage } from "./pages/public/login";
import { ClientProvider } from "./components/clients/ClientsCard/context/clientContext";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: DefaultLayout,
    children: [
      {
        path: "/",
        element: (
          <ClientProvider>
            <Clients />
          </ClientProvider>
        ),
      },
    ],
  },
  {
    path: "/login",
    children: [
      {
        path: "/login",
        element: <LoginPage />,
      },
    ],
  },
]);
