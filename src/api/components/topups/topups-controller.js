const service = require("./topups-service");

exports.getAll = async (req, res, next) => {
  try {
    const data = await service.getTopUps();
    res.json(data);
  } catch (err) {
    next(err);
  }
};

exports.getById = async (req, res, next) => {
  try {
    const data = await service.getTopUpById(req.params.id);
    res.json(data);
  } catch (err) {
    next(err);
  }
};

exports.create = async (req, res, next) => {
  try {
    const data = await service.createTopUp(req.body);
    res.status(201).json(data);
  } catch (err) {
    next(err);
  }
};

exports.update = async (req, res, next) => {
  try {
    const data = await service.updateTopUp(req.params.id, req.body);
    res.json(data);
  } catch (err) {
    next(err);
  }
};

exports.remove = async (req, res, next) => {
  try {
    await service.deleteTopUp(req.params.id);
    res.json({ message: "Topup deleted" });
  } catch (err) {
    next(err);
  }
};