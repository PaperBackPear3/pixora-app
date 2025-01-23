import { ArrowLeft, Camera, Send } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Separator } from "~/components/ui/separator";

interface SingleChatProps {
  profileImage: string;
  name: string;
}

const SingleChatComponent: React.FC<SingleChatProps> = ({
  profileImage,
  name,
}) => {
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([
    { id: "1", text: "Hello!", sender: "other" },
    { id: "2", text: "Hi there!", sender: "me" },
    { id: "3", text: "How are you?", sender: "other" },
    { id: "4", text: "I'm good, thanks!", sender: "me" },
    { id: "5", text: "What about you?", sender: "me" },
    { id: "6", text: "I'm doing well too!", sender: "other" },
    { id: "7", text: "That's great to hear!", sender: "other" },
    { id: "8", text: "What have you been up to?", sender: "other" },
    { id: "9", text: "Just working on some projects.", sender: "me" },
    { id: "10", text: "Sounds interesting!", sender: "other" },
    { id: "11", text: "Sounds interesting!", sender: "other" },
    { id: "12", text: "Sounds interesting!", sender: "other" },
    { id: "13", text: "Sounds interesting!", sender: "other" },
    { id: "14", text: "Sounds interesting!", sender: "other" },
    {
      id: "15",
      text: "Check out this picture!",
      sender: "me",
      imageUrl: "https://picsum.photos/seed/picsum/200/300",
    },
    { id: "15", text: "Sounds interesting!", sender: "other" },
  ]);

  const sendMessage = () => {
    if (message.trim()) {
      setChatHistory([
        ...chatHistory,
        { id: Date.now().toString(), text: message, sender: "me" },
      ]);
      setMessage("");
    }
  };

  const renderItem = (item: {
    id: string;
    text: string;
    sender: string;
    imageUrl?: string;
  }) => (
    <div
      className={`p-2 rounded-lg ${
        item.sender === "me"
          ? "bg-blue-500 text-white self-end"
          : "bg-gray-300 text-black self-start"
      }`}
      key={item.id}
    >
      {item.imageUrl ? (
        <img
          src={item.imageUrl}
          alt="chat image"
          className="max-w-xs rounded mb-2"
        />
      ) : null}
      <p>{item.text}</p>
    </div>
  );

  return (
    <div className="max-w-full mx-auto sm:max-w-lg h-[calc(100vh-4rem)] flex flex-col">
      <div className="flex items-center space-x-4 mb-4 sticky top-0 bg-white pl-1">
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
          onClick={sendMessage}
        >
          <Send className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
};

export default SingleChatComponent;
