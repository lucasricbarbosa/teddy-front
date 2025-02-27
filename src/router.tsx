import { createBrowserRouter } from "react-router-dom";
import { DefaultLayout } from "./layouts/defaultLayout";
import { Home } from "./pages/auth/home";
import { LoginPage } from "./pages/public/login";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: DefaultLayout,
    children: [
      {
        path: "/",
        element: <Home />,
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
