import { prisma } from "../data/prismaClient";
import { Message } from "../domain/interfaces/entities/Message";
import { MessageRepository } from "../domain/interfaces/repositories/MessageRepository";

export class MessageRepositoryPostgres implements MessageRepository {
  async createMessage(message: Message) {
    const newMessage = await prisma.message.create({ data: message });
    return newMessage as Message;
  }
  async getAllMessages() {
    const messages = await prisma.message.findMany({
      orderBy: { createdAt: "desc" },
    });
    return messages as Message[];
  }
  async getMessageById(id: string) {
    const message = await prisma.message.findFirst({
      where: {
        id,
      },
    });

    return message as Message | undefined;
  }
}
