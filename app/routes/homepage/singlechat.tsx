import { Link } from "react-router";
import type { Route } from "./+types/singlechat";
import SingleChatComponent from "~/Chat/SingleChatComponent";
import { MessageStatuses } from "~/Chat/types";

// provides `loaderData` to the component
// export async function loader({ params }: Route.LoaderArgs) {
//   const chat = getChatMessages(Number(params.chatId));
//   console.log("server");
//   return { chat };
// }

// provides `loaderData` to the component
export async function clientLoader({ params }: Route.ClientLoaderArgs) {
  console.log(params);
  const chat = await getChatMessages(Number(params.chatId));
  //   console.log("client");
  return { chat };
}

// HydrateFallback is rendered while the client loader is running
// export function HydrateFallback() {
//   return (
//     <div>loading...</div>
//     // <ScrollArea className="h-[calc(100vh-4rem)]">
//     //   {Array.from({ length: 10 }).map((_, index) => (
//     //     <SingleChatSkeleton key={index} />
//     //   ))}
//     // </ScrollArea>
//   );
// }

// renders after the loader is done
export default function SingleChat({ loaderData }: Route.ComponentProps) {
  return (
    <SingleChatComponent
      name={loaderData.chat.chatLastMessage.sender}
      profileImage={loaderData.chat.avatarImage}
    ></SingleChatComponent>
  );
}

function getChatMessages(chatId: number) {
  const allChats = [
    {
      id: 1,
      avatarImage: "https://example.com/avatar1.png",
      avatarFallback: "U1",
      chatLastMessage: {
        lastMessage: "Hello!",
        sender: "Mario inviato",
        status: MessageStatuses.SENT,
        deliveredTime: "10:29",
      },
    },
    {
      id: 2,
      avatarImage: "https://example.com/avatar2.png",
      avatarFallback: "U2",
      chatLastMessage: {
        lastMessage: "How are you?",
        sender: "Luigi inviato",
        status: MessageStatuses.DELIVERED,
        deliveredTime: "11:00",
      },
    },
    {
      id: 3,
      avatarImage: "https://example.com/avatar3.png",
      avatarFallback: "U3",
      chatLastMessage: {
        lastMessage: "Good morning!",
        sender: "Peach inviato",
        status: MessageStatuses.READ,
        deliveredTime: "09:15",
      },
    },
  ];

  const chat = allChats.find((chat) => chat.id === chatId) ?? {
    id: 3,
    avatarImage: "https://example.com/avatar3.png",
    avatarFallback: "U3",
    chatLastMessage: {
      lastMessage: "Good morning!",
      sender: "Peach inviato",
      status: MessageStatuses.READ,
      deliveredTime: "09:15",
    },
  };
  return chat;
}
