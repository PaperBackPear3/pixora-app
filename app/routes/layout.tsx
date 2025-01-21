import { NavLink, Outlet } from "react-router";

export default function MainLayout() {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/homepage/chat">HomePage</NavLink>
      <NavLink to="/homepage/chat">Chat</NavLink>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
