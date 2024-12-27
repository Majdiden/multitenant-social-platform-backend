import { Router } from "express";
import authRoutes from "../routes/auth.js";
import channelRoutes from "../routes/channel.js";
import messageRoutes from "../routes/message.js";
import userRoutes from "../routes/user.js";

const router = Router();

router.use("/auth", authRoutes);
router.use("/:serverId", channelRoutes);
router.use("/:serverId/:channelId", messageRoutes);
router.use("/users", userRoutes);

export default router;
