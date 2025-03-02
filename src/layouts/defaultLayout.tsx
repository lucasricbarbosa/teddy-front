import { Outlet } from "react-router-dom";
import { Header } from "../components/header/header";

export function DefaultLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
