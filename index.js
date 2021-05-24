import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import router from "./router/GET.js";
import limit from "./router/limit.js";

const app = express();

app.use(express.json());
app.use(cors());

const allowCrossDomain = function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
};

app.use(allowCrossDomain);

const url =
  "mongodb+srv://admin:admin@cluster0.10wkx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((req, res) => {
    console.log("Connect database success ");
    app.listen(5000, (req, res) => {
      console.log("sever is running");
    });
  })
  .catch((err) => {
    console.error(err);
  });

app.use("/", router);

app.use("/", router);
