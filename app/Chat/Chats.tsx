import React from "react";
import { SingleChatPreview } from "~/Chat/SingleChatPreview";
import type { ChatProps } from "~/Chat/types";
import { Separator } from "~/components/ui/separator";

export default function Chats({
  chatList,
}: {
  chatList: Promise<ChatProps[]>;
}) {
  const chats = React.use(chatList);
  return (
    <>
      {chats.map((chat: ChatProps, index) => (
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
    </>
  );
}
