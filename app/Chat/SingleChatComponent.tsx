import { ArrowLeft, Camera, Send } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Separator } from "~/components/ui/separator";
import { MessageStatuses, MessageTypes, type Message } from "./types";
import { testMessages } from "./test";
import { chatSocket } from "~/socketio/socketio";

interface SingleChatProps {
  profileImage: string;
  name: string;
}

const SingleChatComponent: React.FC<SingleChatProps> = ({
  profileImage,
  name,
}) => {
  chatSocket.connect();
  const [message, setMessage] = useState("");

  const [chatHistory, setChatHistory] = useState<Message[]>(testMessages);

  useEffect(() => {
    function onNewMessageEvent(data: { text: Message; socketid: string }) {
      console.log(data);
      setChatHistory([...chatHistory, data.text]);
    }
    chatSocket.on("new_message_event", onNewMessageEvent);

    return () => {
      chatSocket.off("new_message_event", onNewMessageEvent);
    };
  }, [chatSocket, chatHistory]);

  const sendMessage = (message: string) => {
    if (message.trim()) {
      const messageData: Message = {
        messageId: `${chatSocket.id}${Math.random()}`,
        chatId: "0",
        text: message,
        sender: "me",
        status: MessageStatuses.SENT,
        deliveredAt: "",
        readAt: "",
        type: MessageTypes.TEXT,
        cost: 0,
      };

      chatSocket.emit("new_message_event", {
        text: messageData,
        socketID: chatSocket.id,
      });
    }
    setMessage("");
  };

  const renderItem = (item: Message) => (
    <div
      className={`p-2 rounded-lg ${
        item.sender === "me"
          ? "bg-blue-500 text-white self-end"
          : "bg-gray-300 text-black self-start"
      }`}
      key={item.messageId}
    >
      {item.images
        ? item.images.map((image) => (
            <img
              src={image.imageUrl}
              alt={image.imageAlt}
              className="max-w-xs rounded mb-2"
            />
          ))
        : null}
      <p>{item.text}</p>
    </div>
  );

  return (
    <div className="max-w-full mx-auto sm:max-w-lg h-dvh flex flex-col">
      <div className="flex items-center space-x-4 sticky top-0 bg-white p-1">
        <div className="flex items-center">
          <Link
            to={"/homepage/chat"}
            className="text-blue-500 hover:underline flex items-center"
          >
            <ArrowLeft className="w-5 h-5 mr-1" />
          </Link>
          <Avatar className="h-12 w-12">
            <AvatarImage src={profileImage} alt="avatar" />
            <AvatarFallback>{"PP"}</AvatarFallback>
          </Avatar>
        </div>
        <span className="font-semibold text-lg flex-1">{name}</span>
      </div>
      {/* <div> */}
      <Separator />
      <div className="flex flex-col flex-1 overflow-y-auto">
        <div className="flex flex-col pr-1.5 scroll-pr-2 pl-1.5 space-y-2 mb-4">
          {chatHistory.map(renderItem)}
        </div>
      </div>
      {/* </div> */}
      <div className="flex space-x-2 sticky bottom-0 bg-white p-1">
        <Button variant="outline" size="icon">
          <Camera className="w-5 h-5" />
        </Button>
        <Input
          className="flex-1"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message"
        />
        <Button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={() => sendMessage(message)}
        >
          <Send className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
};

export default SingleChatComponent;
