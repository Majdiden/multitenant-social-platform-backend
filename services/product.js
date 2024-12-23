import {
  addAProductRepo,
  getAProductRepo,
  getProductsRepo,
  updateAProductRepo,
  deleteAProductRepo,
} from "../repositories/product.js";

export const addProduct = async (req, res) => {
  try {
    const data = await addAProductRepo(req.dbConnection, req.body);
    return {
      success: true,
      statusCode: 201,
      message: `Product added successfully`,
      responseObject: { data },
    };
  } catch (error) {
    throw error;
  }
};

export const getProduct = async (req, res) => {
  try {
    const data = await getAProductRepo(req.dbConnection, req.query);
    return {
      success: true,
      statusCode: 200,
      responseObject: { data },
    };
  } catch (error) {
    throw error;
  }
};

export const getProducts = async (req, res) => {
  try {
    const data = await getProductsRepo(req.dbConnection, req.query);
    return {
      success: true,
      statusCode: 200,
      responseObject: { data },
    };
  } catch (error) {
    throw error;
  }
};

export const updateProduct = async (req, res) => {
  try {
    const data = updateAProductRepo(req.dbConnection, req.path.id, req.body);
    return {
      success: true,
      statusCode: 201,
      message: `Product updated successfully`,
      responseObject: { data },
    };
  } catch (error) {
    throw error;
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const data = deleteAProductRepo(req.dbConnection, req.path.id, req.body);
    return {
      success: true,
      statusCode: 201,
      message: `Product deleted successfully`,
      responseObject: { data },
    };
  } catch (error) {
    throw error;
  }
};
