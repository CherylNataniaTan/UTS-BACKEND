const express = require('express');

const users = require('./components/users/users-route');
const auth = require('./components/auth/auth-route');

module.exports = () => {
  const app = express.Router();

  users(app);
  auth(app);

  return app;
};
