import { createBrowserRouter } from "react-router-dom";
import { DefaultLayout } from "./layouts/defaultLayout";
import { Clients } from "./pages/auth/clients";
import { LoginPage } from "./pages/public/login";
import { ClientProvider } from "./components/clients/ClientsCard/context/clientContext";
import { SelectedClients } from "./pages/auth/selected-clients";
import { HomePage } from "./pages/public/home";
import { InstitutionalLayout } from "./layouts/institutionalLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: DefaultLayout,
    children: [
      {
        path: "/",
        Component: ClientProvider,
        children: [
          {
            path: "/",
            element: <Clients />,
          },
          {
            path: "/clientes-selecionados",
            element: <SelectedClients />,
          },
        ],
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
  {
    path: "/home",
    Component: InstitutionalLayout,
    children: [
      {
        path: "/home",
        element: <HomePage />,
      },
    ],
  },
]);
