import { Outlet } from "react-router";
import { SidebarProvider } from "~/components/ui/sidebar";
import { AppSidebar } from "./sidebar/sidebar";
import BottomTabNavigator from "./sidebar/bottomTab";

export default function Layout() {
  return (
    <div className="flex flex-1 flex-col md:flex-row h-screen">
      <div className="hidden md:flex">
        <SidebarProvider>
          <AppSidebar />
        </SidebarProvider>
      </div>
      <div className="flex flex-1 md:h-dvh overflow-hidden">
        <Outlet />
      </div>
      <div className="flex md:hidden sticky bottom-0 w-full">
        <BottomTabNavigator />
      </div>
    </div>
  );
}
