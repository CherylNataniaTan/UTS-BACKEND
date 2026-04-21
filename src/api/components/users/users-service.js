const usersRepository = require('./users-repository');

async function getUsers() {
  return usersRepository.getUsers();
}

async function getUser(id) {
  return usersRepository.getUser(id);
}

async function emailExists(email) {
  const user = await usersRepository.getUserByEmail(email);
  return !!user;
}

async function createUser(email, password, fullName, phoneNumber, accountNumber) {
  return usersRepository.createUser(email, password, fullName, phoneNumber, accountNumber);
}

async function updateUser(id, email, fullName, phoneNumber) {
  const result = await usersRepository.updateUser(id, email, fullName, phoneNumber);
  return result.modifiedCount > 0;
}

async function changePassword(id, password) {
  const result = await usersRepository.changePassword(id, password);
  return result.modifiedCount > 0;
}

async function deleteUser(id) {
  const result = await usersRepository.deleteUser(id);
  return result.deletedCount > 0;
}

function generateAccountNumber() {
  return Math.floor(1000000000 + Math.random() * 9000000000).toString();
}

module.exports = {
  getUsers,
  getUser,
  emailExists,
  createUser,
  updateUser,
  changePassword,
  deleteUser,
  generateAccountNumber,
};