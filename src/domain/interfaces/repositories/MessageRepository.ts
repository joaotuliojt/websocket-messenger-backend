import { Message } from "../entities/Message";

export interface MessageRepository {
  createMessage: (message: Message) => Promise<Message>;
  getMessageById: (id: string) => Promise<Message | undefined>;
  getAllMessages: () => Promise<Message[]>;
}
