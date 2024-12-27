import { Router } from "express";
import {
  createMessageController,
  getMessageController,
  getMessagesController,
  updateMessageController,
  deleteMessageController,
} from "../controllers/message.js";

const messageRoutes = Router();

// messageRoutes.get("/:id", getMessageController);x
messageRoutes.get("/messages", getMessagesController);
messageRoutes.post("/", createMessageController);
messageRoutes.put("/:id", updateMessageController);
messageRoutes.delete("/:id", deleteMessageController);

export default messageRoutes;
