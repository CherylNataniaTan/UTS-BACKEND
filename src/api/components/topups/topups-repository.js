const TopUp = require("../../../models/topup-schema");

exports.findAll = async () => {
  return await TopUp.find();
};

exports.findById = async (id) => {
  return await TopUp.findById(id);
};

exports.create = async (data) => {
  return await TopUp.create(data);
};

exports.update = async (id, data) => {
  return await TopUp.findByIdAndUpdate(id, data, { new: true });
};

exports.remove = async (id) => {
  return await TopUp.findByIdAndDelete(id);
};