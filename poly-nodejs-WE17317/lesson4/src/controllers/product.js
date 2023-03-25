import Joi from "joi";
import product from "../models/product";

const productSchema = Joi.object({
  name: Joi.string().required(),
  price: Joi.number().required(),
  original_price: Joi.number().required(),
  description: Joi.string().required(),
  images: Joi.array().required(),
  brand: Joi.array().required(),
  specifications: Joi.array().required(),
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
    const data = await Product.findByIdAndRemove(id);
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

export const searchProduct = async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  const { error } = productSchema.validate(body);
  try {
    if (error) {
      res.status(400).send({
        message: error.message,
      });
    } else {
      const products = await product.find({
        $or: [
          { name: { $regex: new RegExp(body, "i") } },
          { description: { $regex: new RegExp(query, "i") } },
        ],
      });
      res.send({
        message: "Search successful",
        data: products,
      });
    }
  } catch (err) {
    res.status(500).send({
      message: err.message || "Some error occurred while searching products.",
    });
  }
};
