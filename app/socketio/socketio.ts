import { io } from "socket.io-client";

// "undefined" means the URL will be computed from the `window.location` object
const URL =
  process.env.NODE_ENV === "production" ? undefined : "http://localhost:3000";

export const chatSocket = io(URL, {
  autoConnect: false,
});
/*user sends message from client.
 * event name: new_message_event
 * server listend to that event
 * server saves the message on DB
 * server emits new_message_delivered to the sender client
 * server emits new_message_event to the receiver
 */

// chatSocket.on("new_message_event", (arg) => {
//   console.log(arg); // world
// });

// client-side
// chatSocket.on("connect", () => {
//   console.log(chatSocket.id); // x8WIv7-mJelg7on_ALbx
// });

// chatSocket.emit("new_message_event", "ciao");
// export function sendMessage(message: string) {
//   chatSocket.emit("new_message_event", message);
// }

// export function receiveMessage(): Socket {
//   return chatSocket.on("new_message_event", (arg: any) => {
//     console.log(arg); // world
//   });
// }
