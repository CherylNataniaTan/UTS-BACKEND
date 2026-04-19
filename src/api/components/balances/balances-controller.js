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
    if (!balance) return response.status(404).json({ message: 
        'Bank sedang eror. Data saldo tidak ditemukan, silahkan coba lagi nanti' 

    });
    return response.status(200).json(balance);
  } catch (error) {
    return next(error);
  }
}

async function createBalance(request, response, next) {
  try {
    const { accountId, jumlahSaldo } = request.body;
    if (!accountId || jumlahSaldo === undefined) {
      return response.status(400).json({ message: 'Account ID dan jumlah saldo wajib diisi' });
    }
    const balance = await balancesService.createBalance(accountId, jumlahSaldo);
    return response.status(201).json(balance);
  } catch (error) {
    return next(error);
  }
}

async function updateBalance(request, response, next) {
  try {
    const { jumlahSaldo } = request.body;
    if (jumlahSaldo === undefined) return response.status(400).json({ message: 'Jumlah saldo baru wajib diisi' });

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