import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      // required: true,
      default: 0,
    },
    description: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    likeCount: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

export const Product = mongoose.model("Product", schema);
