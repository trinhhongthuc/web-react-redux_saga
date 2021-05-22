import { Product } from "../module/Schema.js";

export const getProducts = async (req, res, next) => {
  try {
    const data = await Product.find();
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(404);
  }
};
