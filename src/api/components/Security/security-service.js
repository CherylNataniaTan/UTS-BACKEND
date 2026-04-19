const securityRepository = require('./security-repository');

async function getAll() {
  return securityRepository.getSecurities();
}

async function getById(id) {
  return securityRepository.getSecurity(id);
}

async function createSecurity(userId, pin, verification, status) {
  return securityRepository.createSecurity(
    userId,
    pin,
    verification,
    status
  );
}

async function updateSecurity(id, userId, verification, status) {
  return securityRepository.updateSecurity(
    id,
    userId,
    verification,
    status
  );
}

async function deleteSecurity(id) {
  return securityRepository.deleteSecurity(id);
}

module.exports = {
  getAll,
  getById,
  createSecurity,
  updateSecurity,
  deleteSecurity,
};