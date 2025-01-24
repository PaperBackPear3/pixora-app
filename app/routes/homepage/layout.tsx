import { Outlet } from "react-router";
import { SidebarProvider } from "~/components/ui/sidebar";
import { AppSidebar } from "./sidebar/sidebar";
import BottomTabNavigator from "./sidebar/bottomTab";

export default function Layout() {
  return (
    <SidebarProvider>
      <div className="flex flex-col">
        <AppSidebar />
        <div className="flex flex-1 flex-grow">
          <Outlet />
        </div>
        <div className="flex md:hidden sticky bottom-0 w-screen">
          <BottomTabNavigator />
        </div>
      </div>
    </SidebarProvider>
  );
}
