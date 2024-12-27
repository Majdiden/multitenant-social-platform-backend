import { Router } from "express";
import {
  createChannelController,
  getChannelController,
  getChannelsController,
  updateChannelController,
  deleteChannelController,
} from "../controllers/channel.js";

const channelRoutes = Router();

channelRoutes.get("/:id", getChannelController);
channelRoutes.get("/", getChannelsController);
channelRoutes.post("/", createChannelController);
channelRoutes.put("/:id", updateChannelController);
channelRoutes.delete("/:id", deleteChannelController);

export default channelRoutes;
