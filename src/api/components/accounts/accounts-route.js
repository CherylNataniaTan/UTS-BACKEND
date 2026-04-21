const accountsController = require('./accounts-controller');

module.exports = (app) => {
  console.log("Accounts route loaded");

  app.get('/accounts', accountsController.getAllAccounts);
  app.post('/accounts', accountsController.createAccount);
  app.get('/accounts/:accountNumber', accountsController.getAccountByNumber);
  app.patch('/accounts/:accountNumber', accountsController.updateAccount);
  app.delete('/accounts/:accountNumber', accountsController.deleteAccount);
};
