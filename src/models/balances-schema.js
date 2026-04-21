const mongoose = require('mongoose');

const balancesSchema = new mongoose.Schema({
  accountId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Account',
    required: true,
  },
  jumlahSaldo: {
    type: Number,
    default: 0, // Otomatis 0 jika tidak diisi
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Balance', balancesSchema);