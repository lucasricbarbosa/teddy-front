import { createBrowserRouter } from "react-router-dom";
import { DefaultLayout } from "./layouts/defaultLayout";
import { Clients } from "./pages/auth/clients";
import { LoginPage } from "./pages/public/login";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: DefaultLayout,
    children: [
      {
        path: "/",
        element: <Clients />,
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
