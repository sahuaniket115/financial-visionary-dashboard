
import { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger
} from "@/components/ui/sidebar";
import { 
  CalendarIcon, 
  CreditCardIcon, 
  DollarSignIcon, 
  LayoutDashboardIcon, 
  PieChartIcon,
  SettingsIcon, 
  TrendingUpIcon,
  UserIcon,
  WalletIcon
} from "lucide-react";

interface DashboardLayoutProps {
  children: ReactNode;
}

// Menu items for the sidebar
const menuItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboardIcon,
    url: "/",
  },
  {
    title: "Transactions",
    icon: CreditCardIcon,
    url: "/transactions",
  },
  {
    title: "Budgets",
    icon: PieChartIcon,
    url: "/budgets",
  },
  {
    title: "Investments",
    icon: TrendingUpIcon,
    url: "/investments",
  },
  {
    title: "Calendar",
    icon: CalendarIcon,
    url: "/calendar",
  },
];

const accountItems = [
  {
    title: "Profile",
    icon: UserIcon,
    url: "/profile",
  },
  {
    title: "Settings",
    icon: SettingsIcon,
    url: "/settings",
  },
];

const AppSidebar = () => {
  const location = useLocation();
  
  return (
    <Sidebar>
      <SidebarHeader className="py-6 px-4 flex items-center">
        <div className="flex items-center gap-2">
          <DollarSignIcon className="h-6 w-6 text-finance-primary" />
          <span className="font-semibold text-xl">FinTrack</span>
        </div>
      </SidebarHeader>
      
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Main</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => {
                const isActive = location.pathname === item.url;
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <Link 
                        to={item.url} 
                        className={`flex items-center ${isActive ? 'text-finance-primary font-medium' : ''}`}
                      >
                        <item.icon className="h-4 w-4 mr-3" />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        
        <SidebarGroup>
          <SidebarGroupLabel>Account</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {accountItems.map((item) => {
                const isActive = location.pathname === item.url;
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <Link 
                        to={item.url} 
                        className={`flex items-center ${isActive ? 'text-finance-primary font-medium' : ''}`}
                      >
                        <item.icon className="h-4 w-4 mr-3" />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      
      <SidebarFooter className="p-4">
        <div className="flex items-center gap-3 px-3 py-2 rounded-md bg-finance-primary/10">
          <WalletIcon className="h-5 w-5 text-finance-primary" />
          <div className="flex flex-col">
            <span className="text-xs text-muted-foreground">Total Balance</span>
            <span className="font-semibold">$24,562.00</span>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
};

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <main className="flex-1 overflow-x-hidden">
          <div className="container py-6 flex-1 h-full">
            <SidebarTrigger className="mb-6 lg:hidden" />
            {children}
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default DashboardLayout;
