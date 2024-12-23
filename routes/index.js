import { Router } from "express";
import authRoutes from "../routes/auth.js";
import productRoutes from "../routes/product.js";
import userRoutes from "../routes/user.js";

const router = Router();

router.use("/auth", authRoutes);
router.use("/:tenantName/products", productRoutes);
router.use("/users", userRoutes);

export default router;
