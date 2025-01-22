// provides type safety/inference

import {
  SingleChatPreview,
  StatusMessage,
  type ChatProps,
} from "~/Chat/SingleChatPreview";
import { SingleChatSkeleton } from "~/Chat/SingleChatSkeleton";
import type { Route } from "./+types/chat";
import { ScrollArea } from "~/components/ui/scroll-area";

// provides `loaderData` to the component
// export async function loader({ params }: Route.LoaderArgs) {
//   const chats = await getChats();
//   return { chats };
// }

// provides `loaderData` to the component
export async function clientLoader({ params }: Route.ClientLoaderArgs) {
  const chats = await getChats();
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
    <>
      <h1>{"Chats"}</h1>
      {/* <div className="space-y-4"> */}
      <ScrollArea className="h-[calc(100vh-4rem)]">
        {loaderData.chats.map((chat: ChatProps) => (
          <SingleChatPreview
            key={chat.avatarFallback}
            avatarFallback={chat.avatarFallback}
            avatarImage={chat.avatarImage}
            chatLastMessage={chat.chatLastMessage}
          />
        ))}
      </ScrollArea>
      {/* </div> */}
    </>
  );
}
function getChats(): ChatProps[] {
  return [
    {
      avatarImage: "https://example.com/avatar1.png",
      avatarFallback: "U1",
      chatLastMessage: {
        lastMessage: "Hello!",
        sender: "Mario inviato",
        status: StatusMessage.SENT,
        deliveredTime: "10:29",
      },
    },
    {
      avatarImage: "",
      avatarFallback: "U2",
      chatLastMessage: {
        lastMessage: "How are you?",
        sender: "Mario riceve",
        status: StatusMessage.DELIVERED,
        deliveredTime: "10:29",
      },
    },
    {
      avatarImage: "",
      avatarFallback: "U2",
      chatLastMessage: {
        lastMessage: "this message was read?",
        sender: "Mario legge",
        status: StatusMessage.READ,
        deliveredTime: "16:59",
      },
    },
    {
      avatarImage: "",
      avatarFallback: "U2",
      chatLastMessage: {
        lastMessage: "read my message?",
        sender: "Mario mi scrive",
        status: StatusMessage.RECEIVED,
        deliveredTime: "04:01",
      },
    },
    {
      avatarImage: "",
      avatarFallback: "U2",
      chatLastMessage: {
        lastMessage: "read my message?",
        sender: "Mario mi scrive",
        status: StatusMessage.RECEIVED,
        deliveredTime: "04:01",
      },
    },
    {
      avatarImage: "",
      avatarFallback: "U2",
      chatLastMessage: {
        lastMessage: "read my message?",
        sender: "Mario mi scrive",
        status: StatusMessage.RECEIVED,
        deliveredTime: "04:01",
      },
    },
    {
      avatarImage: "",
      avatarFallback: "U2",
      chatLastMessage: {
        lastMessage: "read my message?",
        sender: "Mario mi scrive",
        status: StatusMessage.READ,
        deliveredTime: "04:01",
      },
    },
    {
      avatarImage: "",
      avatarFallback: "U2",
      chatLastMessage: {
        lastMessage: "read my message?",
        sender: "Mario mi scrive",
        status: StatusMessage.READ,
        deliveredTime: "04:01",
      },
    },
    {
      avatarImage: "",
      avatarFallback: "U2",
      chatLastMessage: {
        lastMessage: "read my message?",
        sender: "Mario mi scrive",
        status: StatusMessage.SENT,
        deliveredTime: "04:01",
      },
    },
    {
      avatarImage: "",
      avatarFallback: "U2",
      chatLastMessage: {
        lastMessage: "read my message?",
        sender: "Mario mi scrive",
        status: StatusMessage.SENT,
        deliveredTime: "04:01",
      },
    },
    {
      avatarImage: "",
      avatarFallback: "U2",
      chatLastMessage: {
        lastMessage: "read my message?",
        sender: "Mario mi scrive",
        status: StatusMessage.RECEIVED,
        deliveredTime: "04:01",
      },
    },
    {
      avatarImage: "",
      avatarFallback: "U2",
      chatLastMessage: {
        lastMessage: "read my message?",
        sender: "Mario mi scrive",
        status: StatusMessage.RECEIVED,
        deliveredTime: "04:01",
      },
    },
    {
      avatarImage: "",
      avatarFallback: "U2",
      chatLastMessage: {
        lastMessage: "read my message?",
        sender: "Mario mi scrive",
        status: StatusMessage.READ,
        deliveredTime: "04:01",
      },
    },
    {
      avatarImage: "",
      avatarFallback: "U2",
      chatLastMessage: {
        lastMessage: "read my message?",
        sender: "Mario mi scrive",
        status: StatusMessage.DELIVERED,
        deliveredTime: "04:01",
      },
    },
  ];
}
