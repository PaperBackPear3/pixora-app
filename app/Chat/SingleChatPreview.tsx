import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Check, CheckCheck } from "lucide-react";
import { Link } from "react-router";
import { Separator } from "~/components/ui/separator";

export enum StatusMessage {
  SENT = "sent",
  DELIVERED = "delivered",
  READ = "read",
  RECEIVED = "received",
}

type ChatLastMessage = {
  lastMessage: string;
  sender: string;
  status: StatusMessage;
  deliveredTime: string;
};

export type ChatProps = {
  avatarImage: string;
  avatarFallback: string;
  chatLastMessage: ChatLastMessage;
  chatId?: number;
};

export function SingleChatPreview({ ...props }: ChatProps) {
  const { avatarFallback, avatarImage, chatLastMessage, chatId } = props;

  const statusIcons = {
    [StatusMessage.SENT]: <Check />,
    [StatusMessage.DELIVERED]: <CheckCheck />,
    [StatusMessage.READ]: <CheckCheck color="#66c861" />,
  };

  const statusIcon =
    chatLastMessage.status !== StatusMessage.RECEIVED
      ? statusIcons[chatLastMessage.status]
      : null;

  return (
    <div className="space-y-2 pt-1">
      <Link to={`/homepage/chat/${chatId}`} className="flex space-x-2">
        <Avatar className="h-12 w-12">
          <AvatarImage src={avatarImage} alt="avatar" />
          <AvatarFallback>{avatarFallback}</AvatarFallback>
        </Avatar>{" "}
        <div className="flex-1 flex-col">
          <div className="flex">
            <div className="h-6 font-bold flex-1 w-max">
              {chatLastMessage.sender}
            </div>
            <div className="flex flex-row">
              {statusIcon}
              <div className="h-3 ">{chatLastMessage.deliveredTime}</div>
            </div>
          </div>
          <div className="h-4 w-[200px]">{chatLastMessage.lastMessage}</div>
        </div>
      </Link>
      <Separator className="" />
    </div>
  );
}
