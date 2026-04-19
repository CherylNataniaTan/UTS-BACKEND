const Security = require('../../models/security-schema');

async function getSecurities() {
  return await Security.find({});
}

async function getSecurity(id) {
  return await Security.findById(id);
}

async function createSecurity(userId, pin, verification, status) {
  return await Security.create({
    userId,
    pin,
    verification,
    status,
  });
}

async function updateSecurity(id, userId, verification, status) {
  return await Security.findByIdAndUpdate(
    id,
    { userId, verification, status },
    { new: true }
  );
}

async function deleteSecurity(id) {
  return await Security.findByIdAndDelete(id);
}

module.exports = {
  getSecurities,
  getSecurity,
  createSecurity,
  updateSecurity,
  deleteSecurity,
};