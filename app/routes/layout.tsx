import { NavLink, Outlet } from "react-router";
import { buttonVariants } from "~/components/ui/button";

export default function MainLayout() {
  return (
    <div>
      <NavLink to="/" className={buttonVariants({ variant: "outline" })}>
        Home
      </NavLink>
      <NavLink to="/about" className={buttonVariants({ variant: "outline" })}>
        About
      </NavLink>
      <NavLink to="/login" className={buttonVariants({ variant: "outline" })}>
        Login
      </NavLink>
      <NavLink
        to="/register"
        className={buttonVariants({ variant: "outline" })}
      >
        Register
      </NavLink>
      <NavLink
        to="/homepage"
        className={buttonVariants({ variant: "outline" })}
      >
        HomePage
      </NavLink>
      <NavLink
        to="/homepage/chat"
        className={buttonVariants({ variant: "outline" })}
      >
        Chat
      </NavLink>
      <main className="flex justify-center items-center min-h-screen">
        <Outlet />
      </main>
    </div>
  );
}
