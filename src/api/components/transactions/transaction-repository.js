const Transaction = require('../../../models/transactions-schema');

// ambil semua transaksi
const getAll = async () => {
  return await Transaction.find();
};

// ambil berdasarkan id
const getById = async (id) => {
  return await Transaction.findById(id);
};

// buat transaksi baru
const create = async (data) => {
  return await Transaction.create(data);
};

// update transaksi
const update = async (id, data) => {
  return await Transaction.findByIdAndUpdate(id, data, { new: true });
};

// hapus transaksi
const remove = async (id) => {
  return await Transaction.findByIdAndDelete(id);
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove
};