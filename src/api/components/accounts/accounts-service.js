const accountsRepository = require('./accounts-repository');
const balancesRepository = require('../balances/balances-repository');

async function getAccounts() {
  return await accountsRepository.getAccounts();
}

async function getAccount(id) {
  return await accountsRepository.getAccountById(id);
}

async function createAccount(namaPemilik, nomorRekening) {
  return await accountsRepository.createAccount(namaPemilik, nomorRekening);
}

async function updateAccount(id, data) {
  return await accountsRepository.updateAccount(id, data);
}

async function deleteAccount(id) {
  return await accountsRepository.deleteAccount(id);
}

module.exports = {
  getAccounts,
  getAccount,
  createAccount,
  updateAccount,
  deleteAccount,
};