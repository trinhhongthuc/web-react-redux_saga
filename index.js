import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import router from "./router/GET.js";
const app = express();

app.use(express.json());
app.use(cors());

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

app.get("/", router);
