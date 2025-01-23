import React, { useState } from "react";
import { Link } from "react-router";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";

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

  const renderItem = (item: { id: string; text: string; sender: string }) => (
    <div
      className={`p-2 rounded-lg ${
        item.sender === "me"
          ? "bg-blue-500 text-white self-end"
          : "bg-gray-300 text-black self-start"
      }`}
      key={item.id}
    >
      <p>{item.text}</p>
    </div>
  );

  return (
    <div className="container mx-auto p-4">
      <div className="header flex items-center space-x-4 mb-4">
        <Link to={"/homepage/chat"} className="text-blue-500 hover:underline">
          Back
        </Link>
        <Avatar className="h-12 w-12">
          <AvatarImage src={profileImage} alt="avatar" />
          <AvatarFallback>{"PP"}</AvatarFallback>
        </Avatar>
        <span className="name font-semibold text-lg">{name}</span>
      </div>
      <div className="chatHistory flex flex-col space-y-2 mb-4">
        {chatHistory.map(renderItem)}
      </div>
      <div className="inputContainer flex space-x-2">
        <input
          className="input flex-1 border rounded p-2"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message"
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={sendMessage}
        >
          Send
        </button>
        <button
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
          onClick={() => {}}
        >
          Add Image
        </button>
      </div>
    </div>
  );
};

export default SingleChatComponent;
