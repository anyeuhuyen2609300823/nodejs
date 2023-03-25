import mongoose from "mongoose";
const { Schema } = mongoose;

const product = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  original_price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },

  images: {
    type: [images],
    required: true,
    validate: {
      validator: function (v) {
        return v.length > 0;
      },
      message: (props) => `${props.value} must have at least one element`,
    },
  },

  brand: {
    type: [brandObject],
    required: true,
  },
  specifications: {
    type: [specOb],
    required: true,
  },

  //
  createAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

// khai báo các biến phụ ra ngoài

// khai báo image
const images = new mongoose.Schema({
  type: [objImageSchema],
  required: true,
});

const objImageSchema = new mongoose.Schema({
  base_url: {
    type: String,
    required: true,
  },
  is_gallery: {
    type: Boolean,
    required: true,
  },
  label: {
    type: null,
    required: true,
  },
  large_url: {
    type: String,
    required: true,
  },
  medium_url: {
    type: String,
    required: true,
  },
  position: {
    type: null,
    required: true,
  },
  small_url: {
    type: String,
    required: true,
  },
  thumbnail_url: {
    type: String,
    required: true,
  },
});

// khai báo specifications
const specOb = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  attributes: {
    type: [Objs1],
    required: true,
  },
});

const Objs1 = new mongoose.Schema({
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

// khai báo brand
const brandObject = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
  },
});

export default mongoose.model("product", product);
