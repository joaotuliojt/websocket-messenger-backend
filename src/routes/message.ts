import { Router } from "express";
import { Socket } from "socket.io";
import { MessageControllersImpl } from "../presentation/message/MessageControllers";
import { MessageRepositoryPostgres } from "../repository/MessageRepositoryPostgres";
import { CreateMessageServiceImpl } from "../services/message/CreateMessageService";
import { GetAllMessageServiceImpl } from "../services/message/GetAllMessagesService";

const router = Router();

const messageRepository = new MessageRepositoryPostgres();
const getAllMessageService = new GetAllMessageServiceImpl(messageRepository);
const createMessageService = new CreateMessageServiceImpl(messageRepository);

const messageController = new MessageControllersImpl(
  createMessageService,
  getAllMessageService
);

router.get("/", async (req, res) => {
  await messageController.getAllMessages(req, res);
});

const messageSockets = (socket: Socket) => {
  messageController.sendNewMessage(socket);
};

export { messageSockets, router };
