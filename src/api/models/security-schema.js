const mongoose = require("mongoose");

const securitySchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true
  },
  pin: {
    type: String,
    required: true,
    minlength: 4
  },
  verification: {
    type: String,
    enum: ["sms", "email", "2fa"],
    default: "sms"
  },
  status: {
    type: String,
    enum: ["active", "inactive", "blocked"],
    default: "active"
  }
}, { timestamps: true });

module.exports = mongoose.model("Security", securitySchema);
