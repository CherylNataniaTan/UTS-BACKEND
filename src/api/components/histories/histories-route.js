const express = require('express');
const router = express.Router();
const controller = require('./histories-controller');

// GET semua riwayat
router.get('/histories', controller.getAll);

// GET detail riwayat
router.get('/histories/:id', controller.getById);

// POST tambah riwayat
router.post('/histories', controller.create);

// PATCH update riwayat
router.patch('/histories/:id', controller.update);

// DELETE hapus riwayat
router.delete('/histories/:id', controller.remove);

module.exports = router;