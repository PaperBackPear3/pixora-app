// provides type safety/inference

import { SingleChatPreview } from "~/Chat/SingleChatPreview";
import { SingleChatSkeleton } from "~/Chat/SingleChatSkeleton";
import type { Route } from "./+types/chat";
import { ScrollArea } from "~/components/ui/scroll-area";
import { Separator } from "~/components/ui/separator";
import { type ChatProps } from "~/Chat/types";
import { testChat } from "~/Chat/test";

//provides `loaderData` to the component
export async function loader({ params }: Route.LoaderArgs) {
  const chats = await getChats();
  console.log("server");
  return { chats };
}

// provides `loaderData` to the component
export async function clientLoader({ params }: Route.ClientLoaderArgs) {
  const chats = await getChats();
  console.log("client");
  return { chats };
}

// HydrateFallback is rendered while the client loader is running
export function HydrateFallback() {
  return (
    <ScrollArea className="h-[calc(100vh-4rem)]">
      {Array.from({ length: 10 }).map((_, index) => (
        <SingleChatSkeleton key={index} />
      ))}
    </ScrollArea>
  );
}

// renders after the loader is done
export default function Chat({ loaderData }: Route.ComponentProps) {
  return (
    <div className="flex flex-1 flex-col">
      <h1>{"Chats"}</h1>
      <ScrollArea>
        {loaderData.chats.map((chat: ChatProps, index) => (
          <div className="space-y-2 pt-1">
            <SingleChatPreview
              key={index}
              avatarFallback={chat.avatarFallback}
              avatarImage={chat.avatarImage}
              chatLastMessage={chat.chatLastMessage}
              chatId={index}
            />
            <Separator className="" />
          </div>
        ))}
      </ScrollArea>
    </div>
  );
}

function getChats(): ChatProps[] {
  return testChat;
}
