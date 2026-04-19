const service = require('./transactions-service');

// GET /transactions
const getAll = async (req, res) => {
  try {
    const data = await service.getTransactions();
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET /transactions/:id
const getById = async (req, res) => {
  try {
    const data = await service.getTransactionById(req.params.id);

    if (!data) {
      return res.status(404).json({ message: "Transaksi tidak ditemukan" });
    }

    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// POST /transactions
const create = async (req, res) => {
  try {
    const data = await service.createTransaction(req.body);
    res.status(201).json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// PATCH /transactions/:id
const update = async (req, res) => {
  try {
    const data = await service.updateTransaction(req.params.id, req.body);
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// DELETE /transactions/:id
const remove = async (req, res) => {
  try {
    await service.deleteTransaction(req.params.id);
    res.json({ message: "Transaksi berhasil dihapus" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove
};