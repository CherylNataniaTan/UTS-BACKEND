const express = require('express');
const balancesController = require('./balances-controller');

module.exports = (app) => {
  const router = express.Router();

  app.use('/balances', router);

  router.get('/', balancesController.getBalances);
  router.get('/:id', balancesController.getBalance);
  router.post('/', balancesController.createBalance);
  router.patch('/:id', balancesController.updateBalance);
};