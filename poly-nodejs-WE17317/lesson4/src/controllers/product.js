import Joi from "joi";
import product from "../models/Device";

const Images = Joi.object({
  base_url: Joi.string().required(),
  is_gallery: Joi.boolean(),
  label: Joi.string().allow(null),
  large_url: Joi.string().required(),
  medium_url: Joi.string().required(),
  position: Joi.string().allow(null),
  small_url: Joi.string().required(),
  thumbnail_url: Joi.string().required(),
});

// const Brand = Joi.object({

// });

const Attributes = Joi.object({
  code: Joi.string(),
  name: Joi.string(),
  value: Joi.string(),
});

const Specifications = Joi.object({
  name: Joi.string().required(),
  attributes: Joi.array().items(Attributes).min(1).required(),
});

const productSchema = Joi.object({
  name: Joi.string().required(),
  price: Joi.number(),
  original_price: Joi.number(),
  description: Joi.string().required(),
  images: Joi.array().items(Images).min(1).required(),
  brand: Joi.object({
    id: Joi.number(),
    name: Joi.string().required(),
    slug: Joi.string().required(),
  }).required(),
  specifications: Joi.array().items(Specifications).min(1).required(),
});

// lấy ra
export const get = async (req, res) => {
  try {
    const data = await product.find();
    res.send({
      message: "get product carefully",
      data: data,
    });
  } catch (error) {
    res.status(500).send({
      message: error,
    });
  }
};

// lấy ra theo id
export const getById = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await product.findById(id);
    res.send({
      message: "get product carefully",
      data: data,
    });
  } catch (error) {
    res.status(500).send({
      message: error,
    });
  }
};

// thêm
export const create = async (req, res) => {
  try {
    const body = req.body;
    const { error } = productSchema.validate(body);
    if (error) {
      res.status(400).send({
        message: error.message,
      });
    } else {
      const data = await product.create(body);
      res.send({
        message: "Create successfully",
        data: data,
      });
    }
  } catch (err) {
    res.status(500).send({
      message: err,
    });
  }
};

// sửa
export const update = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const { error } = productSchema.validate(body);
    if (error) {
      res.status(400).send({
        message: error.message,
      });
    } else {
      const data = await product.findByIdAndUpdate(id, body);
      if (data) {
        res.send({
          message: "Update successfully",
          data: data,
        });
      } else {
        res.status(400).send({
          message: "Product is not existed",
        });
      }
    }
  } catch (error) {
    res.status(500).send({
      message: error,
    });
  }
};

// xóa
export const remove = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await product.findByIdAndRemove(id);
    if (data) {
      res.send({
        message: "Delete successfully",
        data: data,
      });
    } else {
      res.status(400).send({
        message: "Product is not existed",
      });
    }
  } catch (err) {
    res.status(500).send({
      message: err,
    });
  }
};

// tìm kiếm

export const searchDevice = async (req, res) => {
  try {
    const query = req.query.q;
    const data = await product.find({
      $or: [
        { name: { $regex: query, $options: "i" } },
        { description: { $regex: query, $options: "i" } },
      ],
    });
    if (data.length > 0) {
      res.send({
        message: "Search results",
        data: data,
      });
    } else {
      res.status(404).send({
        message: "No products found",
      });
    }
  } catch (err) {
    res.status(500).send({
      message: err,
    });
  }
};
