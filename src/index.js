require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./api/routes");

const app = express();

// Penting: JSON middleware harus paling atas
app.use(express.json());

// Koneksi MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB error:", err));

// Panggil semua rute
routes(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server jalan di port ${PORT}`);
});