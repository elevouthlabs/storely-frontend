import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import {
  LayoutDashboard,
  ShoppingBag,
  Box,
  Briefcase,
  Archive,
  Users,
  CreditCard,
  BarChart2,
  Settings,
  LogOut,
  Store,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import StorelyLogo from "@/assets/logo.png";

const navItems = [
  { label: "Dashboard", icon: LayoutDashboard, href: "/dashboard" },
  { label: "Orders", icon: ShoppingBag, href: "/dashboard/orders" },
  { label: "Products", icon: Box, href: "/dashboard/products" },
  { label: "Services", icon: Briefcase, href: "/dashboard/services" },
  { label: "Inventory", icon: Archive, href: "/dashboard/inventory" },
  { label: "Customers", icon: Users, href: "/dashboard/customers" },
  { label: "Payments", icon: CreditCard, href: "/dashboard/payments" },
  { label: "Analytics", icon: BarChart2, href: "/dashboard/analytics" },
  { label: "Settings", icon: Settings, href: "/dashboard/settings" },
];

export function DashboardSidebar() {
  const location = useLocation();

  return (
    <Sidebar collapsible="icon" className="border-r bg-white">
      <SidebarHeader className="p-6 border-b  ">
        <div className="flex items-center gap-2">
          <Store className="w-6 h-6 shrink-0" />
          <span className="font-semibold text-lg group-data-[collapsible=icon]:hidden">
            Storely
          </span>
        </div>
      </SidebarHeader>

      <SidebarContent className="px-3 py-4">
        <SidebarMenu className="gap-1">
          {navItems.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <SidebarMenuItem key={item.href}>
                <SidebarMenuButton
                  asChild
                  isActive={isActive}
                  tooltip={item.label}
                  className={`
                    rounded-xl px-4 py-5 text-sm font-medium transition-all
                    ${
                      isActive
                        ? "purple-bg bg-purple-600 text-white hover:bg-purple-700 hover:text-white"
                        : "text-gray-700 hover:bg-gray-100"
                    }
                  `}
                >
                  <Link to={item.href}>
                    <item.icon className="w-5 h-5 shrink-0" />
                    <span>{item.label}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarContent>

      <SidebarFooter className="px-3 py-4 border-t">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              tooltip="Logout"
              className="rounded-xl px-4 py-5 text-sm font-medium text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-all"
            >
              <LogOut className="w-5 h-5 shrink-0" />
              <span>Logout</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
