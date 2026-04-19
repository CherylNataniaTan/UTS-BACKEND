const repo = require("./histories-repository");

async function getHistories() {
  return await repo.findAll();
}

async function getHistoryById(id) {
  const data = await repo.findById(id);
  if (!data) throw new Error("History tidak ditemukan");
  return data;
}

async function createHistory(payload) {
  if (!payload.userId || !payload.type || !payload.amount || !payload.name) {
    throw new Error("userId, name, type, dan amount wajib diisi");
  }

  return await repo.create(payload);
}

async function updateHistory(id, payload) {
  const data = await repo.update(id, payload);
  if (!data) throw new Error("History tidak ditemukan");
  return data;
}

async function deleteHistory(id) {
  const data = await repo.remove(id);
  if (!data) throw new Error("History tidak ditemukan");
  return data;
}

module.exports = {
  getHistories,
  getHistoryById,
  createHistory,
  updateHistory,
  deleteHistory,
};