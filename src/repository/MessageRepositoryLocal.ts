import { randomUUID } from "crypto";
import { Message } from "../domain/interfaces/entities/Message";
import { MessageRepository } from "../domain/interfaces/repositories/MessageRepository";

export class MessageRepositoryLocal implements MessageRepository {
  private messages = new Map<string, Message>();

  async createMessage(message: Message) {
    const id = randomUUID();
    this.messages.set(id, message);
    return message;
  }

  async getMessageById(messageId: string) {
    return this.messages.get(messageId);
  }

  async getAllMessages() {
    const messages = [...this.messages.values()];
    return messages;
  }
}
