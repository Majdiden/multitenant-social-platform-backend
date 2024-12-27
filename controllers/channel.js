import {
  addChannel,
  getChannel,
  getChannels,
  updateChannel,
  deleteChannel,
} from "../services/channel.js";

export const createChannelController = async (req, res) => {
  const response = await addChannel(req);
  console.log(response);

  res.status(response.statusCode).json({ ...response });
};

export const getChannelController = async (req, res) => {
  const response = await getChannel(req);
  console.log(response);
  res.status(response.statusCode).json({ ...response });
};

export const getChannelsController = async (req, res) => {
  const response = await getChannels(req);
  console.log(response);
  res.status(response.statusCode).json({ ...response });
};

export const updateChannelController = async (req, res) => {
  const response = await updateChannel(req);
  console.log(response);
  res.status(response.statusCode).json({ ...response });
};

export const deleteChannelController = async (req, res) => {
  const response = await deleteChannel(req);
  console.log(response);
  res.status(response.statusCode).json({ ...response });
};
