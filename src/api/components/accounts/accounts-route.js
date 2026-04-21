const express = require('express');
const accountsController = require('./accounts-controller');


module.exports = (app) => {
  const router = express.Router();

  app.use('/accounts', router);

  router.get('/', accountsController.getAccounts);
  router.get('/:id', accountsController.getAccount);
  router.post('/', accountsController.createAccount);
  router.patch('/:id', accountsController.updateAccount);
  router.delete('/:id', accountsController.deleteAccount);
};