import {
  ContactRound,
  Home,
  LayoutGrid,
  ListCheck,
  UsersRound,
} from "lucide-react";
import { SidebarTemplate } from "../../ui/sidebar/_index";

const data = {
  items: [
    {
      title: "Home",
      url: "/home",
      icon: Home,
    },
    {
      title: "Clientes",
      url: "/",
      icon: UsersRound,
      subItems: [
        {
          title: "Clientes",
          icon: ContactRound,
          url: "/",
        },
        {
          title: "Clientes selecionados",
          icon: ListCheck,
          url: "/clientes-selecionados",
        },
      ],
    },
    {
      title: "Produtos",
      url: "/produtos",
      icon: LayoutGrid,
    },
  ],
};

export function Sidebar() {
  return (
    <SidebarTemplate.Root>
      <SidebarTemplate.Trigger />
      <SidebarTemplate.Content>
        <SidebarTemplate.Header />
        <SidebarTemplate.Body items={data.items} />
        <SidebarTemplate.Footer />
      </SidebarTemplate.Content>
    </SidebarTemplate.Root>
  );
}
