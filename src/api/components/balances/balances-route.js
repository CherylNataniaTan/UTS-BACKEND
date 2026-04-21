const balancesController = require('./balances-controller');

module.exports = (app) => {
  console.log("Balances route loaded");

  app.get('/balances', balancesController.getAllBalances);
  app.post('/balances', balancesController.createBalance);
  app.get('/balances/:accountNumber', balancesController.getBalanceByAccountNumber);
  app.patch('/balances/:accountNumber', balancesController.updateBalance);
};