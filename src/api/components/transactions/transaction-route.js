const express = require('express');
const router = express.Router();
const controller = require('./transactions-controller');

// endpoint
router.get('/transactions', controller.getAll);
router.get('/transactions/:id', controller.getById);
router.post('/transactions', controller.create);
router.patch('/transactions/:id', controller.update);
router.delete('/transactions/:id', controller.remove);

module.exports = router;