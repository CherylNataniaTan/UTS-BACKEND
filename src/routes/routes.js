const express = require('express');
const router = express.Router();

const cardsController = require('../api/components/Cards/cards-controller'); // pastikan path benar
const securityController = require('../api/components/Security/security-controller');

router.get('/cards', cardsController.getCards);
router.get('/cards/:id', cardsController.getCard);
router.post('/cards', cardsController.createCard);
router.put('/cards/:id', cardsController.updateCard);
router.delete('/cards/:id', cardsController.deleteCard);

router.get('/security', securityController.getAll);
router.get('/security/:id', securityController.getById);

module.exports = router;