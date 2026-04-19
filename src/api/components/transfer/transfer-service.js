const repo = require('./transfers-repository');

// GET semua transfer
const getTransfers = async () => {
  return await repo.getAllTransfers();
};

// GET by ID
const getTransfer = async (id) => {
  return await repo.getTransferById(id);
};

// POST (melakukan transfer)
const createTransfer = async (data) => {
  // nanti bisa tambah logic: cek saldo, dll
  return await repo.createTransfer(data);
};

// PATCH (update status)
const updateTransfer = async (id, data) => {
  return await repo.updateTransfer(id, data);
};

// DELETE
const deleteTransfer = async (id) => {
  return await repo.deleteTransfer(id);
};

module.exports = {
  getTransfers,
  getTransfer,
  createTransfer,
  updateTransfer,
  deleteTransfer
};