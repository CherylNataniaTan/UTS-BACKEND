console.log("🔥 SERVICE KELOAD 🔥");
const accountsService = require('./accounts-service');
const { errorResponder, errorTypes } = require('../../../core/errors');

async function getAllAccounts(req, res, next) {
  try {
    const accounts = await accountsService.getAllAccounts();
    return res.status(200).json({
      success: true,
      total_data: accounts.length,
      data: accounts,
    });
  } catch (error) {
    return next(error);
  }
}

async function getAccountByNumber(req, res, next) {
  try {
    const { accountNumber } = req.params;

    const account = await accountsService.getAccountByNumber(accountNumber);

    if (!account) {
      throw errorResponder(errorTypes.NOT_FOUND, 'Rekening tidak ditemukan');
    }

    return res.status(200).json({
      success: true,
      data: account,
    });
  } catch (error) {
    return next(error);
  }
}

async function createAccount(req, res, next) {
  try {
    const { accountName, ownerName, accountType } = req.body;

    if (!accountName || !ownerName) {
      throw errorResponder(
        errorTypes.VALIDATION_ERROR,
        'Nama rekening dan Nama pemilik wajib diisi'
      );
    }

    const newAccount = await accountsService.createAccount({
      accountName,
      ownerName,
      accountType,
    });

    return res.status(201).json({
      success: true,
      message: 'Rekening berhasil dibuat',
      data: newAccount,
    });
  } catch (error) {
    return next(error);
  }
}

async function updateAccount(req, res, next) {
  try {
    const { accountNumber } = req.params;
    const updateData = req.body;

    const updated = await accountsService.updateAccount(accountNumber, updateData);

    if (!updated) {
      throw errorResponder(errorTypes.NOT_FOUND, 'Rekening tidak ditemukan');
    }

    return res.status(200).json({
      success: true,
      message: 'Berhasil update rekening',
      data: updated,
    });
  } catch (error) {
    return next(error);
  }
}

async function deleteAccount(req, res, next) {
  try {
    const { accountNumber } = req.params;

    const deleted = await accountsService.deleteAccount(accountNumber);

    if (!deleted) {
      throw errorResponder(errorTypes.NOT_FOUND, 'Rekening tidak ditemukan');
    }

    return res.status(200).json({
      success: true,
      message: 'Rekening berhasil dihapus',
    });
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  getAllAccounts,
  getAccountByNumber,
  createAccount,
  updateAccount,
  deleteAccount,
};