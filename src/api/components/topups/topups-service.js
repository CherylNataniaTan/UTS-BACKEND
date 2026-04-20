const repo = require("./topups-repository");
const historyRepo = require("..//histories/histories-repository");

exports.getTopUps = async () => {
  return await repo.findAll();
};

exports.getTopUpById = async (id) => {
  const data = await repo.findById(id);
  if (!data) throw new Error("Topup tidak ditemukan");
  return data;
};

exports.createTopUp = async (data) => {
  if (!data.userId || !data.name || !data.amount || !data.method) {
    throw new Error("userId, name, amount, dan method wajib diisi");
  }

  if (data.amount <= 0) {
    throw new Error("amount harus lebih dari 0");
  }

  return await repo.create({
    userId: data.userId,
    name: data.name,
    amount: data.amount,
    method: data.method,
    status: "pending",
  });
};

exports.updateTopUp = async (id, data) => {
  const topup = await repo.findById(id);
  if (!topup) throw new Error("Topup tidak ditemukan");

  const updated = await repo.update(id, data);

  if (data.status === "success" && topup.status !== "success") {
  await historyRepo.create({
    userId: topup.userId,
    name: topup.name,
    type: "TOPUP",
    amount: topup.amount,
    description: `Top up sebesar ${topup.amount}`,
  });
}

  return updated;
};

exports.deleteTopUp = async (id) => {
  const data = await repo.remove(id);
  if (!data) throw new Error("Topup tidak ditemukan");
  return data;
};