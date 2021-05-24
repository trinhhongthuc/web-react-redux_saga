import express from "express";

const limit = express.Router();

limit.get("/limit", async (req, res, next) => {
  console.log("1221213");
});

export default limit;
