const mongoose = require("mongoose");

const cardSchema = new mongoose.Schema({
  userId: String,
  cardNumber: String,
  cardType: String,
  expiredDate: String,
  status: String,
  balance: Number
}, { timestamps: true });

module.exports = mongoose.model("Card", cardSchema);