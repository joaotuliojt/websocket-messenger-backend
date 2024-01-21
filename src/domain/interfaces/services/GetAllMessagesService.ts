import { Message } from "../entities/Message";

export interface GetAllMessagesService {
  execute: () => Promise<Message[]>;
}
