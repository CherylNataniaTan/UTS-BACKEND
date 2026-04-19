const service = require('./transfers-service');

// GET /transfers
const getAllTransfers = async (req, res) => {
  try {
    const data = await service.getTransfers();
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET /transfers/:id
const getTransferById = async (req, res) => {
  try {
    const data = await service.getTransfer(req.params.id);

    if (!data) {
      return res.status(404).json({ message: "Transfer tidak ditemukan" });
    }

    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// POST /transfers
const createTransfer = async (req, res) => {
  try {
    const data = await service.createTransfer(req.body);
    res.status(201).json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// PATCH /transfers/:id
const updateTransfer = async (req, res) => {
  try {
    const data = await service.updateTransfer(req.params.id, req.body);
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// DELETE /transfers/:id
const deleteTransfer = async (req, res) => {
  try {
    await service.deleteTransfer(req.params.id);
    res.json({ message: "Transfer berhasil dihapus" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAllTransfers,
  getTransferById,
  createTransfer,
  updateTransfer,
  deleteTransfer
};