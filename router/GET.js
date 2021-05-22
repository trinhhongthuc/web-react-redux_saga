import express from "express";
import { getProducts } from "../controller/controlGet.js";

const router = express.Router();

router.get("/", getProducts);

export default router;
