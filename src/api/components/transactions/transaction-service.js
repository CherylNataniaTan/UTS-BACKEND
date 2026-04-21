const repo = require('./transactions-repository');

// GET semua
const getTransactions = async () => {
  return await repo.getAll();
};

// GET by ID
const getTransactionById = async (id) => {
  return await repo.getById(id);
};

// POST
const createTransaction = async (data) => {
  return await repo.create(data);
};

// PATCH
const updateTransaction = async (id, data) => {
  return await repo.update(id, data);
};

// DELETE
const deleteTransaction = async (id) => {
  return await repo.remove(id);
};

module.exports = {
  getTransactions,
  getTransactionById,
  createTransaction,
  updateTransaction,
  deleteTransaction
};