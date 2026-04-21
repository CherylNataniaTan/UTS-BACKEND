const { Users, Auth } = require('../../../models');

async function getAuthSessions() {
  return Auth.find({}).populate('userId', 'email fullName');
}

async function getAuthSession(id) {
  return Auth.findById(id).populate('userId', 'email fullName');
}

async function getAuthByToken(token) {
  return Auth.findOne({ token, isActive: true });
}

async function getAuthByUserId(userId) {
  return Auth.findOne({ userId, isActive: true });
}

async function getUserByEmail(email) {
  return Users.findOne({ email });
}

async function createAuthSession(userId, email, token, expiredAt) {
  return Auth.create({ userId, email, token, isActive: true, expiredAt });
}

async function updateAuthSession(id, token, expiredAt) {
  return Auth.updateOne(
    { _id: id },
    { $set: { token, expiredAt, isActive: true, loginAt: Date.now() } }
  );
}

async function deactivateAuthSession(id) {
  return Auth.updateOne({ _id: id }, { $set: { isActive: false } });
}

async function deleteAuthSession(id) {
  return Auth.deleteOne({ _id: id });
}

module.exports = {
  getAuthSessions,
  getAuthSession,
  getAuthByToken,
  getAuthByUserId,
  getUserByEmail,
  createAuthSession,
  updateAuthSession,
  deactivateAuthSession,
  deleteAuthSession,
};