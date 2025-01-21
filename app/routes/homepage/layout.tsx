import { NavLink, Outlet } from "react-router";
import { useState } from "react";

export default function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen">
      <div
        className={`fixed top-0 left-0 right-0 bg-gray-800 text-white p-4 transition-all duration-300 ${
          isSidebarOpen ? "h-full" : "h-12 sm:h-16"
        }`}
      >
        <button className="mb-4 text-white" onClick={toggleSidebar}>
          {isSidebarOpen ? "X" : "+"}
        </button>
        {isSidebarOpen && (
          <>
            <NavLink to="/" end>
              Home
            </NavLink>
            <NavLink to="/homepage" end>
              Home
            </NavLink>
            <NavLink to="/homepage/chat">Chat</NavLink>
          </>
        )}
      </div>
      <div className="flex-1 bg-gray-100 p-8">
        <Outlet />
      </div>
    </div>
  );
}
