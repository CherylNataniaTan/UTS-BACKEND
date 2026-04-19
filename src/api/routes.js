const express = require('express');
wilbert



const accounts = require('./components/accounts/accounts-route'); 
const balances = require('./components/balances/balances-route'); 

module.exports = () => {
  const app = express.Router();

  accounts(app); 
  
  balances(app); // Aktifkan jika folder balances sudah siap

  return app;
};

const router = express.Router();

const historiesRoute = require('./components/histories/histories-route')
const topupsRoute = require('./components/topups/topups-route');

router.use(historiesRoute);
router.use(topupsRoute);

module.exports = router;
main
