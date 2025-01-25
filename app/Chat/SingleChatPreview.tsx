import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Check, CheckCheck } from "lucide-react";
import { Link } from "react-router";
import { MessageStatuses, type ChatProps } from "./types";

export function SingleChatPreview({ ...props }: ChatProps) {
  const { avatarFallback, avatarImage, chatLastMessage, chatId } = props;

  const statusIcons = {
    [MessageStatuses.SENT]: <Check />,
    [MessageStatuses.DELIVERED]: <CheckCheck />,
    [MessageStatuses.READ]: <CheckCheck color="#66c861" />,
  };

  const statusIcon =
    chatLastMessage.status !== MessageStatuses.RECEIVED
      ? statusIcons[chatLastMessage.status]
      : null;

  return (
    <Link to={`/homepage/chat/${chatId}`} className="flex space-x-2">
      <Avatar className="h-12 w-12">
        <AvatarImage src={avatarImage} alt="avatar" />
        <AvatarFallback>{avatarFallback}</AvatarFallback>
      </Avatar>
      <div className="flex-1 flex-col">
        <div className="flex">
          <div className="h-6 font-bold flex-1 w-max">
            {chatLastMessage.sender}
          </div>
          <div className="flex flex-row">
            {statusIcon}
            <div className="h-3 ">{chatLastMessage.deliveredAt.toString()}</div>
          </div>
        </div>
        <div className="h-4 w-[200px]">{chatLastMessage.text}</div>
      </div>
    </Link>
  );
}
