require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB error:", err));


const routes = require("./api/routes");
routes(app); // Panggil fungsinya agar accounts(app) dan balances(app) jalan

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});