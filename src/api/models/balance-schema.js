const mongoose = require('mongoose');

const balanceSchema = new mongoose.Schema({
  userId: {
    type: String, // nanti bisa diganti ObjectId kalau ada user schema
    required: true
  },
  balance: {
    type: Number,
    required: true,
    default: 0
  },
  currency: {
    type: String,
    default: 'IDR'
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Balance', balanceSchema);