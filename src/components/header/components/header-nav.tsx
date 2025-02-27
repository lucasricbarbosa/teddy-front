import { Link, useLocation } from "react-router-dom";
import { cn } from "../../../utils/tailwind-merge";

interface LinksProps {
  name: string;
  url: string;
}

interface HeaderNavProps {
  links: LinksProps[];
}

export function HeaderNav({ links }: HeaderNavProps) {
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
      </ul>
    </nav>
  );
}
