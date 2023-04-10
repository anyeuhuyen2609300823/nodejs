import mongoose, { model } from "mongoose";

const { Schema } = mongoose;

const Invoice = new Schema({
  ngaymua: {
    type: Date,
    default: Date.now,
  },
  good: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  useId: {
    type: Schema.ObjectId,
    ref: "user",
  },
});

export default mongoose.model("invoice", Invoice);
