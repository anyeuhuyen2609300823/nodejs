import express from "express";
import {
  get,
  getById,
  create,
  update,
  remove,
  searchDevice,
} from "../controllers/product";

const productRouter = express.Router();

productRouter.get("/products", get);
productRouter.get("/products/:id", getById);
productRouter.post("/products", create);
productRouter.put("/products/:id", update);
productRouter.delete("/products/:id", remove);
productRouter.get("/products", searchDevice);

export default productRouter;
