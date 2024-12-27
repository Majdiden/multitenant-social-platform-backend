import {
  addMessage,
  getMessage,
  getMessages,
  updateMessage,
  deleteMessage,
} from "../services/message.js";

export const createMessageController = async (req, res) => {
  const response = await addMessage(req);
  console.log(response);

  res.status(response.statusCode).json({ ...response });
};

export const getMessageController = async (req, res) => {
  const response = await getMessage(req);
  console.log(response);
  res.status(response.statusCode).json({ ...response });
};

export const getMessagesController = async (req, res) => {
  const response = await getMessages(req);
  console.log(response);
  res.status(response.statusCode).json({ ...response });
};

export const updateMessageController = async (req, res) => {
  const response = await updateMessage(req);
  console.log(response);
  res.status(response.statusCode).json({ ...response });
};

export const deleteMessageController = async (req, res) => {
  const response = await deleteMessage(req);
  console.log(response);
  res.status(response.statusCode).json({ ...response });
};
