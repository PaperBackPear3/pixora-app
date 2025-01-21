import { NavLink } from "react-router";

export default function Home() {
  return (
    <div>
      <h1>Unauth Home</h1>
      {/* will either be home.tsx or settings.tsx */}
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/homepage/chat">Home</NavLink>
      <NavLink to="/homepage/chat">Chat</NavLink>
      <NavLink to="/about">About</NavLink>
    </div>
  );
}
