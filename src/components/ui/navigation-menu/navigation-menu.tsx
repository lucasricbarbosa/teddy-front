"use client";

import { useState, useRef } from "react";
import { ChevronDown, Github, Search, Sun } from "lucide-react";

type NavItem = {
  title: string;
  description?: string;
  children?: NavItem[];
};

const navItems: NavItem[] = [
  {
    title: "Docs",
    children: [
      {
        title: "Introduction",
        description:
          "Re-usable components built using Radix UI and Tailwind CSS.",
      },
      {
        title: "Installation",
        description: "How to install dependencies and structure your app.",
      },
      {
        title: "Typography",
        description: "Styles for headings, paragraphs, lists...",
      },
    ],
  },
  {
    title: "Components",
    children: [
      {
        title: "Alert Dialog",
        description:
          "A modal dialog that interrupts the user with important content.",
      },
      {
        title: "Hover Card",
        description:
          "For sighted users to preview content available behind a div.",
      },
      {
        title: "Progress",
        description:
          "Displays an indicator showing the completion progress of a task.",
      },
    ],
  },
  {
    title: "Blocks",
  },
  {
    title: "Charts",
  },
  {
    title: "Themes",
  },
  {
    title: "Colors",
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
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white">
      <div className="container mx-auto flex h-16 items-center px-4">
        <div className="mr-4 flex items-center">
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-1">
              <div className="h-6 w-6 rotate-45 bg-black"></div>
              <span className="font-semibold">shadcn/ui</span>
            </div>
          </div>
        </div>

        <nav className="flex-1">
          <ul className="flex space-x-4">
            {navItems.map((item) => (
              <li key={item.title} className="relative">
                <div
                  onMouseEnter={() => handleMouseEnter(item.title)}
                  onMouseLeave={handleMouseLeave}
                >
                  <div
                    className={`flex items-center px-3 py-2 text-sm font-medium transition-colors hover:text-black ${
                      activeItem === item.title ? "text-black" : "text-gray-600"
                    }`}
                  >
                    {item.title}
                    {item.children && <ChevronDown className="ml-1 h-4 w-4" />}
                  </div>

                  {item.children && activeItem === item.title && (
                    <div className="absolute top-full left-0 z-50 mt-1 w-[400px] rounded-md border border-gray-200 bg-white p-4 shadow-md">
                      <ul className="grid gap-3">
                        {item.children.map((child) => (
                          <li key={child.title}>
                            <div className="block rounded-md p-3 hover:bg-gray-100">
                              <div className="font-medium">{child.title}</div>
                              {child.description && (
                                <div className="mt-1 text-sm text-gray-500">
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

        <div className="ml-auto flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute top-2.5 left-2.5 h-4 w-4 text-gray-500" />
            <input
              type="search"
              placeholder="Search documentation..."
              className="h-9 w-64 rounded-md border border-gray-200 bg-gray-50 pr-4 pl-8 text-sm focus:border-gray-300 focus:ring-0 focus:outline-none"
            />
          </div>

          <button className="rounded-md p-2 text-gray-600 hover:bg-gray-100">
            <span className="sr-only">Toggle theme</span>
            <Sun className="h-5 w-5" />
          </button>

          <a
            href="https://github.com/shadcn/ui"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md p-2 text-gray-600 hover:bg-gray-100"
          >
            <span className="sr-only">GitHub</span>
            <Github className="h-5 w-5" />
          </a>
        </div>
      </div>
    </header>
  );
}
