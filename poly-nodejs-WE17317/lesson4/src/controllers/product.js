import Joi from "joi";
import product from "../models/product";

const productSchema = Joi.object({
  name: Joi.string().required(),
  price: Joi.number(),
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
