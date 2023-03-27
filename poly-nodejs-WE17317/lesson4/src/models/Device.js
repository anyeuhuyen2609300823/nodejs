import mongoose from "mongoose";

const { Schema } = mongoose;

//khái báo images
const Image = new Schema({
  base_url: {
    type: String,
    required: true,
  },
  is_gallery: Boolean,
  label: String,
  large_url: {
    type: String,
    required: true,
  },
  medium_url: {
    type: String,
    required: true,
  },
  position: String,
  small_url: {
    type: String,
    required: true,
  },
  thumbnail_url: {
    type: String,
    required: true,
  },
});

// khai báo brand
const brandIc = new Schema({
  id: Number,
  name: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
  },
});

// khai báo specifications
const speCi = new Schema({
  name: {
    type: String,
    required: true,
  },
  attributes: {
    type: [attri],
    required: true,
  },
});

//  khai báo attributes
const attri = new Schema({
  code: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    required: true,
  },
});

const Device = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: Number,
  original_price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  images: {
    type: [Image],
    required: true,
  },
  brand: {
    type: [brandIc],
    required: true,
  },
  specifications: {
    type: [speCi],
    required: true,
  },

  createAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("device", Device);
