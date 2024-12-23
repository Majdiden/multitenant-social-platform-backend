import { Router } from "express";
import {
  createProductController,
  getProductController,
  getProductsController,
  updateProductController,
  deleteProductController,
} from "../controllers/product.js";

const productRoutes = Router();

productRoutes.get("/:id", getProductController);
productRoutes.get("/", getProductsController);
productRoutes.post("/", createProductController);
productRoutes.put("/:id", updateProductController);
productRoutes.delete("/:id", deleteProductController);

export default productRoutes;
