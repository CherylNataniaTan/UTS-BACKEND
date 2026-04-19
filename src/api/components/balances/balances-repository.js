const Balance = require('../../models/balances-schema');

async function getBalances() {
  return Balance.find({}).populate('accountId', 'namaPemilik nomorRekening');
}

async function getBalanceById(id) {
  return Balance.findById(id).populate('accountId');
}

async function createBalance(accountId, jumlahSaldo) {
  return Balance.create({ 
    accountId, 
    jumlahSaldo 
  });
}

async function updateBalance(id, jumlahSaldo) {
  return Balance.findByIdAndUpdate(
    id, 
    { jumlahSaldo, updatedAt: Date.now() }, 
    { new: true }
  );
}

module.exports = {
  getBalances,
  getBalanceById,
  createBalance,
  updateBalance,
};