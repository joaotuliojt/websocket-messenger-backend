import { Request, Response } from "express";
import { Socket } from "socket.io";

export interface MessageController {
  sendNewMessage: (socket: Socket) => void;
  getAllMessages: (request: Request, response: Response) => void;
}
