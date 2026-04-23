const mongoose = require('mongoose');

const topupSchema = new mongoose.Schema(
  {
    userId: {
      type: Number,
      required: true,
    },
    name: {
    type: String,
    required: true
    }, 
    amount: {
      type: Number,
      required: true,
      min: 0,
    },
    status: {
      type: String,
      enum: ['pending', 'success', 'failed'],
      default: 'pending',
    },
    method: {
      type: String,
      enum: ['topup', 'e-wallet', 'cash'],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Topup', topupSchema);