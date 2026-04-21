const { Balances } = require('../../../models');

async function findAll() {
  return await Balances.find().sort({ lastUpdated: -1 });
}

// ✅ cari pakai accountNumber
async function findByAccountNumber(accountNumber) {
  return await Balances.findOne({
    accountNumber: String(accountNumber),
  });
}

async function create(data) {
  return await Balances.create(data);
}

// ✅ update pakai accountNumber
async function updateByAccountNumber(accountNumber, data) {
  return await Balances.findOneAndUpdate(
    { accountNumber: String(accountNumber) },
    data,
    { new: true }
  );
}


module.exports = {
  findAll,
  findByAccountNumber,
  create,
  updateByAccountNumber,
};