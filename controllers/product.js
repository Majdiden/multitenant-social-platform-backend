import {
  addProduct,
  getProduct,
  getProducts,
  updateProduct,
  deleteProduct,
} from "../services/product.js";

export const createProductController = async (req, res) => {
  const response = await addProduct(req);
  console.log(response);

  res.status(response.statusCode).json({ ...response });
};

export const getProductController = async (req, res) => {
  const response = await getProduct(req);
  console.log(response);
  res.status(response.statusCode).json({ ...response });
};

export const getProductsController = async (req, res) => {
  const response = await getProducts(req);
  console.log(response);
  res.status(response.statusCode).json({ ...response });
};

export const updateProductController = async (req, res) => {
  const response = await updateProduct(req);
  console.log(response);
  res.status(response.statusCode).json({ ...response });
};

export const deleteProductController = async (req, res) => {
  const response = await deleteProduct(req);
  console.log(response);
  res.status(response.statusCode).json({ ...response });
};
