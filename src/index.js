<<<<<<< HEAD
require("dotenv").config();
=======
require('dotenv').config() 

>>>>>>> 7a554114880febfd7d4f128f92e7f2add859d2f6
const express = require("express");
const mongoose = require("mongoose");

const app = express();
<<<<<<< HEAD


mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB error:", err));

app.use(express.json());
app.use("/api", require("./api/routes"));

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
=======
app.use(express.json());

const routes = require("./routes/routes");

app.use("/", routes);

mongoose.connect("mongodb://127.0.0.1:27017/digitalBanking")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.listen(5000, () => {
  console.log("Server jalan di port 5000");
>>>>>>> 7a554114880febfd7d4f128f92e7f2add859d2f6
});