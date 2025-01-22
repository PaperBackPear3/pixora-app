import { Link } from "react-router";
import type { Route } from "./+types/singlechat";

// provides `loaderData` to the component
export async function loader({ params }: Route.LoaderArgs) {
  const chat = getChatMessages(Number(params.chatId));
  console.log("server");
  return { chat };
}

// provides `loaderData` to the component
export async function clientLoader({ params }: Route.ClientLoaderArgs) {
  console.log(params);
  const chat = await getChatMessages(Number(params.chatId));
  //   console.log("client");
  return { chat };
}

// HydrateFallback is rendered while the client loader is running
export function HydrateFallback() {
  return (
    <div>loading...</div>
    // <ScrollArea className="h-[calc(100vh-4rem)]">
    //   {Array.from({ length: 10 }).map((_, index) => (
    //     <SingleChatSkeleton key={index} />
    //   ))}
    // </ScrollArea>
  );
}

// renders after the loader is done
export default function SingleChat({ loaderData }: Route.ComponentProps) {
  return (
    <>
      <Link to={"/homepage/chat"} className="flex space-x-2">
        Back
      </Link>
      <h1>{"Single chat with ID: " + loaderData.chat.id}</h1>
      <p>{"Message " + loaderData.chat.chatLastMessage}</p>
    </>
  );
}

function getChatMessages(chatId: number) {
  const allChats = [
    {
      id: 1,
      chatLastMessage: "Hello there!",
    },
    {
      id: 2,
      chatLastMessage: "How are you?",
    },
    {
      id: 3,
      chatLastMessage: "Good morning!",
    },
  ];

  const chat = allChats.find((chat) => chat.id === chatId) ?? {
    id: 0,
    chatLastMessage: "error",
  };
  return chat;
}
