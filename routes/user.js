import { Router } from "express";
import { getUserInfoController } from "../controllers/index.js";

const userRoutes = Router();

userRoutes.get("/me", getUserInfoController);

export default userRoutes;
