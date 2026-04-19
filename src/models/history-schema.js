const mongoose = require('mongoose');

const historySchema = new mongoose.Schema(
  {
    userId: {
      type: Number,
      required: true,
    },
    name: {
      type: String
    },
    type: {
      type: String,
      enum: ['topup', 'transfer'],
      required: true,
    },
    amount: {
      type: Number,
      required: true,
      min: 0,
    },
    description: {
      type: String,
      default: '',
    },
  },
  {
    timestamps: true, 
  }
);

module.exports = mongoose.model('History', historySchema);