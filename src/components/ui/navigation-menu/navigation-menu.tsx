import { useState, useRef } from "react";
import { ChevronDown } from "lucide-react";

type NavItem = {
  title: string;
  description?: string;
  children?: NavItem[];
};

const navItems: NavItem[] = [
  {
    title: "Nossa história",
  },
  {
    title: "Segmentos",
    children: [
      {
        title: "Acessor de investimentos",
        description:
          "Profissional que orienta clientes sobre como investir seu dinheiro de maneira estratégica.",
      },
      {
        title: "Bancário autônomo",
        description:
          "Profissional que oferece serviços bancários de forma independente, sem vínculo com instituições financeiras.",
      },
      {
        title: "Correspondente bancário",
        description:
          "Intermediário entre os clientes e os bancos, auxiliando em serviços como abertura de contas e empréstimos.",
      },
    ],
  },
  {
    title: "White label",
  },
  {
    title: "Blog",
  },
];

export function NavigationMenu() {
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (title: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setActiveItem(title);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveItem(null);
    }, 100);
  };

  return (
    <nav className="flex-1">
      <ul className="flex space-x-4">
        {navItems.map((item) => (
          <li key={item.title} className="relative">
            <div
              onMouseEnter={() => handleMouseEnter(item.title)}
              onMouseLeave={handleMouseLeave}
            >
              <div
                className={`flex cursor-pointer items-center px-3 py-2 text-sm font-medium text-white transition-colors hover:text-white/90`}
              >
                {item.title}
                {item.children && <ChevronDown className="ml-1 h-4 w-4" />}
              </div>

              {item.children && activeItem === item.title && (
                <div className="bg-background border-border absolute top-full left-0 z-50 mt-1 w-[400px] rounded-md border p-4 shadow-md">
                  <ul className="grid gap-3">
                    {item.children.map((child) => (
                      <li key={child.title}>
                        <div className="bg-accent group hover:bg-accent/50 block cursor-pointer rounded-md p-3">
                          <div className="group-hover:text-primary font-medium">
                            {child.title}
                          </div>
                          {child.description && (
                            <div className="text-muted-foreground mt-1 text-sm">
                              {child.description}
                            </div>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </nav>
  );
}
