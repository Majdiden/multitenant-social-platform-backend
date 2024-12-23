import { getAUserRepo } from "../repositories/user.js";

export const getAUser = async (req, res) => {
  try {
    const data = await getAUserRepo(req.dbConnection);
    return {
      success: true,
      statusCode: 200,
      responseObject: { data },
    };
  } catch (error) {
    throw error;
  }
};
