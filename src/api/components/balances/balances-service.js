const balancesRepository = require('./balances-repository');

async function getAllBalances() {
  return await balancesRepository.findAll();
}

async function getBalanceByAccountNumber(accountNumber) {
  return await balancesRepository.findByAccountNumber(accountNumber);
}

async function createBalance(data) {
  return await balancesRepository.create(data);
}

async function updateBalance(accountNumber, data) {
  return await balancesRepository.updateByAccountNumber(accountNumber, data);
}


module.exports = {
  getAllBalances,
  getBalanceByAccountNumber,
  createBalance,
  updateBalance,
};