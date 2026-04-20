const balancesService = require('./balances-service');

async function getBalances(request, response, next) {
  try {
    const balances = await balancesService.getBalances();
    return response.status(200).json(balances);
  } catch (error) {
    return next(error);
  }
}

async function getBalance(request, response, next) {
  try {
    const balance = await balancesService.getBalance(request.params.id);
    if (!balance) return response.status(404).json({ message: 'Data saldo tidak ditemukan' });
    return response.status(200).json(balance);
  } catch (error) {
    return next(error);
  }
}

async function createBalance(request, response, next) {
  try {
    const { accountId, jumlahSaldo } = request.body;

    // Hanya Account ID yang wajib ada untuk menghubungkan saldo
    if (!accountId) {
      return response.status(400).json({ message: 'Account ID wajib diisi' });
    }

    // Jika jumlahSaldo kosong, service/repo akan menggunakan nilai default 0
    const balance = await balancesService.createBalance(accountId, jumlahSaldo);
    return response.status(201).json(balance);
  } catch (error) {
    return next(error);
  }
}

async function updateBalance(request, response, next) {
  try {
    const { jumlahSaldo } = request.body;
    
    const balance = await balancesService.updateBalance(request.params.id, jumlahSaldo);
    if (!balance) return response.status(404).json({ message: 'Gagal update, data tidak ditemukan' });
    
    return response.status(200).json(balance);
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  getBalances,
  getBalance,
  createBalance,
  updateBalance,
};