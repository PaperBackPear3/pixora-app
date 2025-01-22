import type { Route } from "./+types/singlechat";

//provides `loaderData` to the component
export async function loader({ params }: Route.LoaderArgs) {
  const chat = getChatMessages(Number(params.chatId));
  console.log("server");
  return { chat };
}

// provides `loaderData` to the component
export async function clientLoader({ params }: Route.ClientLoaderArgs) {
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
      <h1>{"Single chat with ID:" + loaderData.chat.id}</h1>

      {/* <div className="space-y-4"> */}
      {/* <ScrollArea className="h-[calc(100vh-4rem)]">
        {loaderData.chats.map((chat: ChatProps, index) => (
          <SingleChatPreview
            key={index}
            avatarFallback={chat.avatarFallback}
            avatarImage={chat.avatarImage}
            chatLastMessage={chat.chatLastMessage}
          />
        ))}
      </ScrollArea> */}
      {/* </div> */}
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
