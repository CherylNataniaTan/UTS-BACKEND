const accountsService = require('./accounts-service');

async function getAccounts(request, response, next) {
  try {
    const accounts = await accountsService.getAccounts();
    return response.status(200).json(accounts);
  } catch (error) {
    return next(error);
  }
}

async function getAccount(request, response, next) {
  try {
    const account = await accountsService.getAccount(request.params.id);
    if (!account) return response.status(404).json({ message: 'Rekening tidak ditemukan' });
    
    return response.status(200).json(account);
  } catch (error) {
    return next(error);
  }
}

async function createAccount(request, response, next) {
  try {
    const { namaPemilik, nomorRekening } = request.body;
    if (!namaPemilik || !nomorRekening) {
      return response.status(400).json({ message: 'Nama dan nomor rekening wajib diisi!!!' });
    }

    const account = await accountsService.createAccount(namaPemilik, nomorRekening);
    return response.status(200).json(newAccount);
  } catch (error) {
    return next(error);
  }
}

async function updateAccount(request, response, next) {
  try {
    const account = await accountsService.updateAccount(request.params.id, request.body);
    if (!account) return response.status(404).json({ message: 'Gagal menambahkan ID. ID tidak terdaftar' });

    return response.status(200).json(account);
  } catch (error) {
    return next(error);
  }
}

async function deleteAccount(request, response, next) {
  try {
    const success = await accountsService.deleteAccount(request.params.id);
    if (!success) return response.status(404).json({ message: 'Gagal menghapus, ID tidak ditemukan' });

    return response.status(200).json({ message: 'Berhasil menghapus rekening' });
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  getAccounts,
  getAccount,
  createAccount,
  updateAccount,
  deleteAccount,
};