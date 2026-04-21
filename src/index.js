require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();


mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB error:", err));

app.use(express.json());
app.use("/api", require("./api/routes"));

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});