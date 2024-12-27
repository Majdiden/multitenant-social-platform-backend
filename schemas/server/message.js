import { Schema } from "mongoose";
const messageSchema = new Schema({
  content: { type: String, required: true },
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  channelId: { type: Schema.Types.ObjectId, ref: 'Channel', required: true },
}, { timestamps: true });

export default messageSchema;
