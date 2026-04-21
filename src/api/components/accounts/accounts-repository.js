console.log("🔥 REPOSITORY BARU KELOAD 🔥");
const { Accounts } = require('../../../models');

async function findAll() {
  return await Accounts.find().sort({ createdAt: -1 });
}

async function findByAccountNumber(accountNumber) {
  return await Accounts.findOne({ accountNumber: String(accountNumber) });
}

async function create(data) {
  return await Accounts.create(data);
}


async function updateByAccountNumber(accountNumber, data) {
  return await Accounts.findOneAndUpdate(
    { accountNumber: String(accountNumber) },
    data,
    { new: true }
  );
}

async function deleteByAccountNumber(accountNumber) {
  return await Accounts.findOneAndDelete({
    accountNumber: String(accountNumber),
  });
}

module.exports = {
  findAll,
  findByAccountNumber,
  create,
  updateByAccountNumber,
  deleteByAccountNumber,
};