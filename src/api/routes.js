const accountsRoute = require('./components/accounts/accounts-route');
const balancesRoute = require('./components/balances/balances-route');

module.exports = (app) => {
  accountsRoute(app);
  balancesRoute(app);
};