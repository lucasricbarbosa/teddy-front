import { createBrowserRouter } from "react-router-dom";
import { DefaultLayout } from "./layouts/defaultLayout";
import { Home } from "./pages/auth/home";

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
]);
