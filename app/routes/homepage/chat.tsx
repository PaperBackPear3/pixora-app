// provides type safety/inference

import type { Route } from "../../+types/root";

// provides `loaderData` to the component
export async function loader({ params }: Route.LoaderArgs) {
  const team = await getTeam();
  return { name: team.name };
}

// renders after the loader is done
export default function Chat({ loaderData }: Route.ComponentProps) {
  return <h1>{"loaderData.name"}</h1>;
}
function getTeam() {
  return { name: "mario" };
}
