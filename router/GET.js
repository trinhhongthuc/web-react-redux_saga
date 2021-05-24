import express from "express";
import { getProducts } from "../controller/controlGet.js";
import { Product } from "../module/Schema.js";
const router = express.Router();

const postProducts = async (req, res, next) => {
  try {
    const data = await req.body;
    const reqData = Product({
      title: data.payload.title,
      price: data.payload.price,
      description: data.payload.description,
      img: data.payload.img,
    });
    reqData.save();
  } catch (error) {
    console.log(error);
  }
};

router.get("/limit=:id", async (req, res, next) => {
  try {
    const limit = req.params.id;
    const data = await Product.find();
    const dataRes = data.slice(0, limit);
    res.status(200).json(dataRes);
  } catch (error) {
    console.log(error);
  }
});

router.get("/product/:id", async (req, res, next) => {
  try {
    const idProduct = req.params.id;
    const productDetails = await Product.findOne({ _id: idProduct });
    res.status(200).json(productDetails);
  } catch (error) {
    console.log(error);
  }
});

router.get("/", getProducts);

router.post("/", postProducts);

export default router;
