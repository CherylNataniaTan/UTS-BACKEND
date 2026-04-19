const mongoose = require('mongoose');

const accountsSchema = new mongoose.Schema({
  namaPemilik: {
    type: String,
    required: true,
  },
  nomorRekening: {
    type: String,
    required: true,
    unique: true, 
  },
  jenisTabungan: {
    type: String,
    default: 'Tabungan Utama',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Account', accountsSchema);