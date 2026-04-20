const express = require('express');

const users = require('./components/users/users-route');
const auth = require('./components/auth/auth-route');

const accounts = require('./components/accounts/accounts-route'); 
const balances = require('./components/balances/balances-route'); 

module.exports = () => {
  const app = express.Router();

  users(app);
  auth(app);

  accounts(app); 
  balances(app); 

  return app;
};

const router = express.Router();
const historiesRoute = require('./components/histories/histories-route');
const topupsRoute = require('./components/topups/topups-route');

router.use(historiesRoute);
router.use(topupsRoute);