const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  amount: {
    type: Number,
    required: true
  },
  type: {
    type: String,
    enum: ['transfer', 'payment', 'topup'],
    required: true
  },
  description: {
    type: String,
    default: ''
  },
  sender: {
    type: String,
    required: false
  },
  receiver: {
    type: String,
    required: false
  },
  status: {
    type: String,
    enum: ['pending', 'success', 'failed'],
    default: 'pending'
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Transaction', transactionSchema);