import { Link, useLocation } from "react-router-dom";
import { cn } from "../../../utils/tailwind-merge";
import { ExitModal } from "../../exit-modal";
import { links } from "../header";

export function HeaderNav() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <nav>
      <ul className="flex items-center gap-6">
        {links.map(({ name, url }) => {
          const isActive = currentPath === url;

          return (
            <li key={name}>
              <Link
                className={cn(
                  "pb-1",
                  isActive
                    ? "text-primary border-b font-medium"
                    : "text-muted-foreground hover:text-primary/80 transition-colors",
                )}
                to={url}
              >
                {name}
              </Link>
            </li>
          );
        })}
        <ExitModal variant="menu-item" />
      </ul>
    </nav>
  );
}
