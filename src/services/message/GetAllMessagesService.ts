import { MessageRepository } from "../../domain/interfaces/repositories/MessageRepository";
import { GetAllMessagesService } from "../../domain/interfaces/services/GetAllMessagesService";

export class GetAllMessageServiceImpl implements GetAllMessagesService {
  constructor(private messageRepository: MessageRepository) {}

  async execute() {
    const messages = await this.messageRepository.getAllMessages();
    return messages;
  }
}
