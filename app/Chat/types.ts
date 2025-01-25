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
  id: number;
  chatId: number;
  text: string;
  sender: string;
  status: MessageStatuses;
  deliveredAt: string;
  readAt: string;
  type: MessageTypes;
  imageUrl?: string;
}

// export interface ImageMessage extends Message {
//   type: MessageTypes.IMAGE;
// }
