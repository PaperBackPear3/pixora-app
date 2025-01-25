export enum MessageStatuses {
  SENT = "sent",
  DELIVERED = "delivered",
  READ = "read",
  RECEIVED = "received",
}

export enum MessageTypes {
  TEXT = "text",
  IMAGE = "image",
}

export type ChatProps = {
  chatId?: number;
  avatarImage: string;
  avatarFallback: string;
  chatLastMessage: Message;
};

export interface Message {
  messageId: number;
  chatId: number;
  text: string;
  sender: string;
  status: MessageStatuses;
  deliveredAt: string;
  readAt: string;
  type: MessageTypes;
  images?: Images[];
  cost: number;
}

export type Images = {
  imageId: number;
  imageUrl: string;
  imageAlt: string;
  isLocked: boolean;
};
// export interface ImageMessage extends Message {
//   type: MessageTypes.IMAGE;
// }
