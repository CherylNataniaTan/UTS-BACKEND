const express = require('express');
const router = express.Router();

const express = require('express');
const accounts = require('./components/accounts/accounts-route');
const balances = require('./components/balances/balances-route');



router.get('/cards', cardsController.getCards);
router.get('/cards/:id', cardsController.getCard);
router.post('/cards', cardsController.createCard);
router.put('/cards/:id', cardsController.updateCard);
router.delete('/cards/:id', cardsController.deleteCard);

router.get('/security', securityController.getAll);
router.get('/security/:id', securityController.getById);

module.exports = router;

module.exports = (app) => {
  // Pastikan memanggil fungsi route
  accounts(app);
  balances(app);
};