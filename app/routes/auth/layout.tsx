import { Outlet } from "react-router";

export default function AuthLayout() {
  return (
    <div>
      <aside>Ciao!</aside>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
