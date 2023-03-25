import mongoose from "mongoose";
const { Schema } = mongoose;

const product = new Schema({
  name: {
    type: String,
  },
  price: {
    type: Number,
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("product", product);
