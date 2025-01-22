import { NavLink, Outlet } from "react-router";
import { useState } from "react";
import { Button, buttonVariants } from "~/components/ui/button";
import { SidebarProvider, SidebarTrigger } from "~/components/ui/sidebar";
import { AppSidebar } from "./sidebar/sidebar";

export default function Layout() {
  const [isTopBarOpen, setIsTopBarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsTopBarOpen(!isTopBarOpen);
  };

  return (
    <div className="flex h-screen flex-col">
      <SidebarProvider>
        <AppSidebar />
        <div className="flex-1 p-5 pb-0 pt-0">
          <SidebarTrigger />
          <Outlet />
        </div>
      </SidebarProvider>
    </div>
  );
}
