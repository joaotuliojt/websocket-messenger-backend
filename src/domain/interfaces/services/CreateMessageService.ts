import { Message } from "../entities/Message";

export interface CreateMessageService {
  execute: (message: Message) => Promise<Message>;
}
