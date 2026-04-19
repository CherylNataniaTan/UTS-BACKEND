const express = require('express');



const accounts = require('./components/accounts/accounts-route'); 
const balances = require('./components/balances/balances-route'); 

module.exports = () => {
  const app = express.Router();

  accounts(app); 
  
  balances(app); // Aktifkan jika folder balances sudah siap

  return app;
};