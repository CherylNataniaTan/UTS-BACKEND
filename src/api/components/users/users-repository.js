const { Users } = require('../../../models');

async function getUsers() {
  return Users.find({}).select('-password');
}

async function getUser(id) {
  return Users.findById(id).select('-password');
}

async function getUserByEmail(email) {
  return Users.findOne({ email });
}

async function createUser(email, password, fullName, phoneNumber, accountNumber) {
  return Users.create({ email, password, fullName, phoneNumber, accountNumber });
}


async function updateUser(id, email, fullName, phoneNumber) {
  return Users.updateOne(
    { _id: id },
    { $set: { email, fullName, phoneNumber } }
  );
}

async function changePassword(id, password) {
  return Users.updateOne({ _id: id }, { $set: { password } });
}

async function deleteUser(id) {
  return Users.deleteOne({ _id: id });
}

module.exports = {
  getUsers,
  getUser,
  getUserByEmail,
  createUser,
  updateUser,
  changePassword,
  deleteUser,
};