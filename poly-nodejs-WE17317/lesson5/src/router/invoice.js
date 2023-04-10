import express from "express";
import { createTable, getAll } from "../controller/invoice";

const invoiceRouter = express.Router();

invoiceRouter.post("/invoices", createTable);
invoiceRouter.get("/invoices", getAll);

export default invoiceRouter;
