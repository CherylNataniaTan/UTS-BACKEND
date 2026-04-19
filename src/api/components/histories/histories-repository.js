const History = require("../../../models/history-schema");

exports.findAll = async () => {
  return await History.find();
};

exports.findById = async (id) => {
  return await History.findById(id);
};

exports.create = async (data) => {
  return await History.create(data);
};

exports.update = async (id, data) => {
  return await History.findByIdAndUpdate(id, data, { new: true });
};

exports.remove = async (id) => {
  return await History.findByIdAndDelete(id);
};