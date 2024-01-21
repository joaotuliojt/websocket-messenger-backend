import { Router } from "express";
import { Socket } from "socket.io";
import { router as messageRoutes, messageSockets } from "./message";

export function createRoutes() {
  const routes = Router();
  routes.use("/message", messageRoutes);

  return routes;
}

export function createSockets(socket: Socket) {
  messageSockets(socket);
}
