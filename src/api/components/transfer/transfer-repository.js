const Transfer = require('../../../models/transfers-schema');

// ambil semua data transfer
const getAllTransfers = async () => {
  return await Transfer.find();
};

// ambil transfer by id
const getTransferById = async (id) => {
  return await Transfer.findById(id);
};

// buat transfer baru
const createTransfer = async (data) => {
  return await Transfer.create(data);
};

// update transfer
const updateTransfer = async (id, data) => {
  return await Transfer.findByIdAndUpdate(id, data, { new: true });
};

// hapus transfer
const deleteTransfer = async (id) => {
  return await Transfer.findByIdAndDelete(id);
};

module.exports = {
  getAllTransfers,
  getTransferById,
  createTransfer,
  updateTransfer,
  deleteTransfer
};