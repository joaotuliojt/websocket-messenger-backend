import { Request, Response } from "express";
import { Socket } from "socket.io";
import { MessageController } from "../../domain/interfaces/controllers/MessageController";
import { CreateMessageService } from "../../domain/interfaces/services/CreateMessageService";
import { GetAllMessagesService } from "../../domain/interfaces/services/GetAllMessagesService";

export class MessageControllersImpl implements MessageController {
  constructor(
    private createMessageService: CreateMessageService,
    private getAllMessagesService: GetAllMessagesService
  ) {}

  sendNewMessage(socket: Socket) {
    socket.on("message:new", async (data) => {
      try {
        const message = await this.createMessageService.execute(data);
        socket.broadcast.emit("message:send", message);
      } catch (error) {
        console.error("Error creating and sending message:", error);
      }
    });
  }

  async getAllMessages(request: Request, response: Response) {
    try {
      const messages = await this.getAllMessagesService.execute();
      response.json({ messages }).status(200);
    } catch (error) {
      console.log(error);
      response
        .json({
          error: "Failed to get messages",
        })
        .status(500);
    }
  }
}
