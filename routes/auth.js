import { Router } from "express";
import { loginController, addATenantController } from "../controllers/index.js";

const authRoutes = Router();

authRoutes.post("/register", addATenantController);
authRoutes.post("/login", loginController);

export default authRoutes;
