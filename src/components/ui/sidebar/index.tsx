import { SidebarCollapsible } from "./sidebar-collapsible";
import {
  SidebarBody,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "./sidebar-content";
import { SidebarItem } from "./sidebar-item";
import { SidebarRoot } from "./sidebar-root";
import { SidebarTrigger } from "./sidebar-trigger";

export const SidebarTemplate = {
  Root: SidebarRoot,
  Content: SidebarContent,
  Trigger: SidebarTrigger,
  Item: SidebarItem,
  Collapsible: SidebarCollapsible,
  Body: SidebarBody,
  Header: SidebarHeader,
  Footer: SidebarFooter,
};
