import { Message } from "../../domain/interfaces/entities/Message";
import { MessageRepository } from "../../domain/interfaces/repositories/MessageRepository";
import { CreateMessageService } from "../../domain/interfaces/services/CreateMessageService";

export class CreateMessageServiceImpl implements CreateMessageService {
  constructor(private messageRepository: MessageRepository) {}
  async execute(message: Message) {
    return this.messageRepository.createMessage(message);
  }
}
