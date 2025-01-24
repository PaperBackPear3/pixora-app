import { Home, MessageCircle } from "lucide-react";
import React from "react";
import { Link, NavLink } from "react-router";

const BottomTabNavigator = () => {
  return (
    <div className="flex flex-1 flex-row bg-gray-200 p-2 justify-around">
      <NavLink
        to="/homepage/home"
        className={({ isActive, isPending }) =>
          `flex flex-col items-center ${
            isPending
              ? "text-gray-500"
              : isActive
              ? "text-blue-500"
              : "text-black"
          }`
        }
      >
        <Home />
        <span>Home</span>
      </NavLink>
      <NavLink
        to="/homepage/chat"
        className={({ isActive, isPending }) =>
          `flex flex-col items-center ${
            isPending
              ? "text-gray-500"
              : isActive
              ? "text-blue-500"
              : "text-black"
          }`
        }
      >
        <MessageCircle />
        <span>Chat</span>
      </NavLink>
    </div>
  );
};

export default BottomTabNavigator;
