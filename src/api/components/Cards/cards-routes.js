const express = require("express");
const router = express.Router();
const ctrl = require("./cards-controller");

router.get('/cards', ctrl.getCards);
router.get('/cards/:id', ctrl.getCard);
router.post('/cards', ctrl.createCard);
router.put('/cards/:id', ctrl.updateCard);
router.delete('/cards/:id', ctrl.deleteCard);

module.exports = router;