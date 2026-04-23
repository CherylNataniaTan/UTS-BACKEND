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
      enum: ['topup', 'transfer', 'cash'],
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
    topupId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Topup'
  }
  },
  {
    timestamps: true, 
  }
);

module.exports = mongoose.model('History', historySchema);