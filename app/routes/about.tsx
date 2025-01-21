import { NavLink } from "react-router";

export default function About() {
  return (
    <div>
      <h1>About</h1>
      {/* will either be home.tsx or settings.tsx */}
      <NavLink to="/auth/login">Login</NavLink>
      <NavLink to="/auth/register">Register</NavLink>
      <NavLink to="/homepage/chat">Home</NavLink>
      <NavLink to="/homepage/chat">Chat</NavLink>
      <NavLink to="/">Back</NavLink>
    </div>
  );
}
