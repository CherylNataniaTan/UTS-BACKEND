const Account = require('../../models/accounts-schema');
const Balance = require('../../models/balances-schema');

//ngambil semua data account dr database
async function getAccounts() {
  return Account.find({});
}

//mengambil detail account berdasarkan ID
async function getAccountById(id) {
  return Account.findById(id);
}

//menambah data account baru ke database
async function createAccount(namaPemilik, nomorRekening, jenisTabungan) {
  return Account.create({
    namaPemilik,
    nomorRekening,
    jenisTabungan,
  });
}

//update data account
async function updateAccount(id, data) {
  return Account.findByIdAndUpdate(id, data, { new: true });
}

//delete account
async function deleteAccount(id) {
  return Account.findByIdAndDelete(id);
}

module.exports = {
  getAccounts,
  getAccountById,
  createAccount,
  updateAccount,
  deleteAccount,
};