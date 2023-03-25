import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import productRouter from "./router/product";

// khai báo
const app = express();
const port = 8080;

// middleware
app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

// router
app.use("/api", productRouter);

// connect database
mongoose
  .connect("mongodb://127.0.0.1:27017/we17317")
  .then(() => console.log("connect database !"));

app.listen(port, function () {
  console.log("xin chào đây là web server");
});
