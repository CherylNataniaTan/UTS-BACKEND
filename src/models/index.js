const mongoose = require('mongoose');

// Import fungsi schema
const accountsSchemaFn = require('./accounts-schema');
const balancesSchemaFn = require('./balances-schema');

// Jalankan fungsi schema dengan inject mongoose/db
const Accounts = accountsSchemaFn(mongoose);
const Balances = balancesSchemaFn(mongoose);

module.exports = {
  Accounts,
  Balances,
};