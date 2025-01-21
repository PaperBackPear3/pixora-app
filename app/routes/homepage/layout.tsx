import { NavLink, Outlet } from "react-router";
import { useState } from "react";

export default function Layout() {
  const [isTopBarOpen, setIsTopBarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsTopBarOpen(!isTopBarOpen);
  };

  return (
    <div className="flex h-screen">
      <div
        className={`fixed top-0 left-0 right-0 bg-gray-800 text-white p-4 transition-all duration-300 ${
          isTopBarOpen ? "h-full" : "h-12 sm:h-16"
        }`}
      >
        <div
          className={`flex ${
            isTopBarOpen ? "flex-col text-center" : "flex-row"
          }`}
        >
          <button
            className="mb-4 text-white border border-white"
            onClick={toggleSidebar}
          >
            {isTopBarOpen ? "X" : "+"}
          </button>
          {isTopBarOpen ? (
            <>
              <NavLink to="/" end>
                Home
              </NavLink>
              <NavLink to="/homepage" end>
                Home
              </NavLink>
              <NavLink to="/homepage/chat">Chat</NavLink>
            </>
          ) : (
            <div className="flex space-x-2 ml-4">
              <NavLink to="/" end>
                Home
              </NavLink>
              <NavLink to="/homepage" end>
                Home
              </NavLink>
              <NavLink to="/homepage/chat">Chat</NavLink>
            </div>
          )}
        </div>
      </div>
      <div className="flex-1 bg-gray-300 p-8">
        <Outlet />
      </div>
    </div>
  );
}
