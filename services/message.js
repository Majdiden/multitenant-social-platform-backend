import {
  addAMessageRepo,
  getAMessageRepo,
  getMessagesRepo,
  updateAMessageRepo,
  deleteAMessageRepo,
} from "../repositories/message.js";


export const addMessage = async (req, res) => {
  try {
    const data = await addAMessageRepo(req.dbConnection, req.body);
    return {
      success: true,
      statusCode: 201,
      message: `Message added successfully`,
      responseObject: { data },
    };
  } catch (error) {
    throw error;
  }
};

export const getMessage = async (req, res) => {
  try {
    const data = await getAMessageRepo(req.dbConnection, req.query);
    return {
      success: true,
      statusCode: 200,
      responseObject: { data },
    };
  } catch (error) {
    throw error;
  }
};

export const getMessages = async (req, res) => {
  try {
    const data = await getMessagesRepo(req.dbConnection,{channelId: req.channelId});
    return {
      success: true,
      statusCode: 200,
      responseObject: { data },
    };
  } catch (error) {
    return {
      success: false,
      statusCode: 500,
      responseObject: {error}
    }
  }
};

export const updateMessage = async (req, res) => {
  try {
    const data = updateAMessageRepo(req.dbConnection, req.path.id, req.body);
    return {
      success: true,
      statusCode: 201,
      message: `Message updated successfully`,
      responseObject: { data },
    };
  } catch (error) {
    throw error;
  }
};

export const deleteMessage = async (req, res) => {
  try {
    const data = deleteAMessageRepo(req.dbConnection, req.path.id, req.body);
    return {
      success: true,
      statusCode: 201,
      message: `Message deleted successfully`,
      responseObject: { data },
    };
  } catch (error) {
    throw error;
  }
};
