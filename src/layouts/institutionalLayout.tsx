import { Outlet } from "react-router-dom";
import { InstitutionalHeader } from "../pages/public/components/institutional-header";
import { InstitutionalFooter } from "../pages/public/components/institutional-footer";

export function InstitutionalLayout() {
  return (
    <>
      <InstitutionalHeader />
      <Outlet />
      <InstitutionalFooter />
    </>
  );
}
