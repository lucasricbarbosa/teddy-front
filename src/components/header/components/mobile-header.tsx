import { TeddyLogo } from "../../teddyLogo";
import { Sidebar } from "../components/sidebar";

export function MobileHeader() {
  return (
    <div className="flex items-center justify-between md:hidden">
      <div className="flex items-center gap-4">
        <TeddyLogo />
      </div>
      <Sidebar />
    </div>
  );
}
