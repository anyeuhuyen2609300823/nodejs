import Invoice from "../models/invoice";

export const getAll = async (req, res) => {
  try {
    const data = await Invoice.find();
    res.send({
      data: data,
    });
  } catch (error) {}
};

export const createTable = async (req, res) => {
  try {
    const body = req.body;
    const data = await Invoice.create(body);
    res.send({
      message: "tạo thành công",
      data: data,
    });
  } catch (error) {}
};
