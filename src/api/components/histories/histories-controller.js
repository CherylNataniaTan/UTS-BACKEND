const service = require("./histories-service");

async function getAll(req, res, next) {
  try {
    const data = await service.getHistories();
    res.json(data);
  } catch (err) {
    next(err);
  }
}

async function getById(req, res, next) {
  try {
    const data = await service.getHistoryById(req.params.id);
    res.json(data);
  } catch (err) {
    next(err);
  }
}

async function create(req, res, next) {
  try {
    const data = await service.createHistory(req.body);
    res.status(201).json(data);
  } catch (err) {
    next(err);
  }
}

async function update(req, res, next) {
  try {
    const data = await service.updateHistory(req.params.id, req.body);
    res.json(data);
  } catch (err) {
    next(err);
  }
}

async function remove(req, res, next) {
  try {
    await service.deleteHistory(req.params.id);
    res.json({ message: "History deleted" });
  } catch (err) {
    next(err);
  }
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};