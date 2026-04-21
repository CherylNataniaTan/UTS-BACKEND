console.log("🔥 BALANCES CONTROLLER KEPAKE");
const balancesService = require('./balances-service');
const { errorResponder, errorTypes } = require('../../../core/errors');

async function getAllBalances(req, res, next) {
  try {
    const data = await balancesService.getAllBalances();
    return res.status(200).json({
      success: true,
      data,
    });
  } catch (err) {
    return next(err);
  }
}

async function getBalanceByAccountNumber(req, res, next) {
  try {
    const { accountNumber } = req.params;

    const data = await balancesService.getBalanceByAccountNumber(accountNumber);

    if (!data) {
      throw errorResponder(errorTypes.NOT_FOUND, 'Balance tidak ditemukan');
    }

    return res.status(200).json({
      success: true,
      data,
    });
  } catch (err) {
    return next(err);
  }
}

async function createBalance(req, res, next) {
  try {
    const result = await balancesService.createBalance(req.body);

    return res.status(201).json({
      success: true,
      data: result,
    });
  } catch (err) {
    return next(err);
  }
}

async function updateBalance(req, res, next) {
  try {
    const { accountNumber } = req.params;

    const updated = await balancesService.updateBalance(
      accountNumber,
      req.body
    );

    if (!updated) {
      throw errorResponder(errorTypes.NOT_FOUND, 'Balance tidak ditemukan');
    }

    return res.status(200).json({
      success: true,
      data: updated,
    });
  } catch (err) {
    return next(err);
  }
}



module.exports = {
  getAllBalances,
  getBalanceByAccountNumber,
  createBalance,
  updateBalance,
};