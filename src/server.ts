import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { createServer } from "node:http";
import { Server } from "socket.io";
import { envServerSchema } from "./config/clientEnvSchema";
import { createRoutes, createSockets } from "./routes";
dotenv.config();

function startServer(port = 3333) {
  const app = express();
  app.use(express.json());
  app.use(
    cors({
      origin: "*",
    })
  );
  const http = createServer(app);
  const socket = new Server(http, {
    cors: {
      origin: "*",
    },
  });
  app.use(createRoutes());
  socket.on("connection", (socket) => {
    createSockets(socket);
  });

  http.listen(port, () => {
    console.log(`Server is running on port: http://localhost:${port}`);
  });
}

startServer(envServerSchema.PORT);
