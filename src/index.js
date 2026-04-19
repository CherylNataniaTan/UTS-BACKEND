require('dotenv').config() 

const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

const routes = require("./routes/routes");

app.use("/", routes);

mongoose.connect("mongodb://127.0.0.1:27017/digitalBanking")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.listen(5000, () => {
  console.log("Server jalan di port 5000");
});