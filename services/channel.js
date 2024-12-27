import {
  addAChannelRepo,
  getAChannelRepo,
  getChannelsRepo,
  updateAChannelRepo,
  deleteAChannelRepo,
} from "../repositories/channel.js";


export const addChannel = async (req, res) => {
  try {
    const data = await addAChannelRepo(req.dbConnection, req.body);
    return {
      success: true,
      statusCode: 201,
      message: `Channel added successfully`,
      responseObject: { data },
    };
  } catch (error) {
    throw error;
  }
};

export const getChannel = async (req, res) => {
  try {
    const data = await getAChannelRepo(req.dbConnection, req.query);
    return {
      success: true,
      statusCode: 200,
      responseObject: { data },
    };
  } catch (error) {
    throw error;
  }
};

export const getChannels = async (req, res) => {
  try {
    const data = await getChannelsRepo(req.dbConnection, req.query);
    return {
      success: true,
      statusCode: 200,
      responseObject: { data },
    };
  } catch (error) {
    throw error;
  }
};

export const updateChannel = async (req, res) => {
  try {
    const data = updateAChannelRepo(req.dbConnection, req.path.id, req.body);
    return {
      success: true,
      statusCode: 201,
      message: `Channel updated successfully`,
      responseObject: { data },
    };
  } catch (error) {
    throw error;
  }
};

export const deleteChannel = async (req, res) => {
  try {
    const data = deleteAChannelRepo(req.dbConnection, req.path.id, req.body);
    return {
      success: true,
      statusCode: 201,
      message: `Channel deleted successfully`,
      responseObject: { data },
    };
  } catch (error) {
    throw error;
  }
};
