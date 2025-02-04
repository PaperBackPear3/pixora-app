// provides type safety/inference

import type { Route } from "./+types/chat";
import { ScrollArea } from "~/components/ui/scroll-area";
import { type ChatProps } from "~/Chat/types";
import { testChat } from "~/Chat/test";
import React from "react";
import Chats from "~/Chat/Chats";
import { SingleChatSkeleton } from "~/Chat/SingleChatSkeleton";

//provides `loaderData` to the component
// export async function loader({ params }: Route.LoaderArgs) {
//   const chats = await getChats();
//   console.log("server");
//   return { chats };
// }

// provides `loaderData` to the component
export async function clientLoader({}: Route.ClientLoaderArgs) {
  let chats = new Promise<ChatProps[]>((resolve) =>
    setTimeout(() => resolve(getChats()), 0)
  );
  return { chats };
}

// HydrateFallback is rendered while the client loader is running
// export function HydrateFallback() {
//   return (
//     <ScrollArea className="h-[calc(100vh-4rem)]">
//       {Array.from({ length: 10 }).map((_, index) => (
//         <SingleChatSkeleton key={index} />
//       ))}
//     </ScrollArea>
//   );
// }

// renders after the loader is done
export default function Chat({ loaderData }: Route.ComponentProps) {
  let { chats } = loaderData;

  return (
    <div className="flex flex-1 flex-col">
      <h1>{"Chats"}</h1>
      <ScrollArea>
        <React.Suspense fallback={<SingleChatSkeleton />}>
          <Chats chatList={chats}></Chats>
        </React.Suspense>
      </ScrollArea>
    </div>
  );
}

function getChats(): ChatProps[] {
  return testChat;
}
