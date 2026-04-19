const express = require('express');
const router = express.Router();
const controller = require('./transfers-controller');

// endpoint transfers
router.get('/transfers', controller.getAllTransfers);
router.get('/transfers/:id', controller.getTransferById);
router.post('/transfers', controller.createTransfer);
router.patch('/transfers/:id', controller.updateTransfer);
router.delete('/transfers/:id', controller.deleteTransfer);

module.exports = router;