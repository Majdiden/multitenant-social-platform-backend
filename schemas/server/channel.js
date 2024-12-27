import { Schema } from "mongoose";
const channelSchema = new Schema({
  name: { type: String, required: true },
  type: { type: String, enum: ['text', 'voice'], required: true },
  serverId: { type: Schema.Types.ObjectId, ref: 'Server', required: true },
}, { timestamps: true });

export default channelSchema;
