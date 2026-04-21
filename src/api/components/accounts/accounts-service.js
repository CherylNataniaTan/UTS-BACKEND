console.log("🔥 SERVICE KELOAD 🔥");
const accountsRepository = require('./accounts-repository');

function generateAccountNumber() {
  return Math.floor(1000000000 + Math.random() * 9000000000).toString();
}

async function getAllAccounts() {
  return await accountsRepository.findAll();
}

async function getAccountByNumber(accountNumber) {
  return await accountsRepository.findByAccountNumber(accountNumber);
}

async function createAccount(data) {
  const { accountName, ownerName, accountType } = data;

  const payload = {
    accountNumber: generateAccountNumber(),
    accountName,
    ownerName,
    accountType: accountType || 'Tabungan',
    createdAt: new Date(),
  };

  return await accountsRepository.create(payload);
}

async function updateAccount(accountNumber, data) {
  return await accountsRepository.updateByAccountNumber(accountNumber, data);
}

async function deleteAccount(accountNumber) {
  return await accountsRepository.deleteByAccountNumber(accountNumber);
}

module.exports = {
  getAllAccounts,
  getAccountByNumber,
  createAccount,
  updateAccount,
  deleteAccount,
};