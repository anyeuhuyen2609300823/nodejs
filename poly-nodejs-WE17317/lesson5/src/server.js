import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";

import userRouter from "./router/user";
import invoiceRouter from "./router/invoice";

const app = express();
const port = 8080;

// Middleware
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// Router
app.use("/auth", userRouter);
app.use("/api", invoiceRouter);

// MongoDB
mongoose
  .connect("mongodb://127.0.0.1:27017/we17317")
  .then(() => console.log("Connected to DB"));

app.listen(port, () => {
  console.log("Server is running on " + port);
});
