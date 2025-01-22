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
      {/* <div
        className={`relative top-0 left-0 right-0 bg-gray-800 p-4 transition-all duration-300 gap-3 ${
          isTopBarOpen
            ? "h-full flex flex-col text-center"
            : "h-12 sm:h-16 flex flex-row "
        }`}
      >
        <Button
          className="mb-4 text-white border border-white"
          onClick={toggleSidebar}
        >
          {isTopBarOpen ? "X" : "+"}
        </Button>
        <NavLink to="/" end className={buttonVariants({ variant: "outline" })}>
          Home
        </NavLink>
        <NavLink
          to="/homepage"
          end
          className={buttonVariants({ variant: "outline" })}
        >
          HomePage
        </NavLink>
        <NavLink
          to="/homepage/chat"
          className={buttonVariants({ variant: "outline" })}
        >
          Homepage Chat
        </NavLink>
        <NavLink to="/" className={buttonVariants({ variant: "outline" })}>
          Logout
        </NavLink>
      </div> */}
      <SidebarProvider>
        <AppSidebar />
        <main className="flex-1 p-8">
          <SidebarTrigger />
          <Outlet />
        </main>
      </SidebarProvider>
    </div>
  );
}
