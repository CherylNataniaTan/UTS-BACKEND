const express = require('express');
const authController = require('./auth-controller');
const { authMiddleware } = require('../../middlewares');

const route = express.Router();

module.exports = (app) => {
  app.use('/auth', route);

  route.get('/', authMiddleware, authController.getAuthSessions);

  route.get('/protected', authMiddleware, authController.testProtected);

  route.get('/:id', authMiddleware, authController.getAuthSession);

  route.post('/login', authController.login);

  route.patch('/:id', authMiddleware, authController.updateAuthSession);

  route.delete('/:id', authMiddleware, authController.deleteAuthSession);
};
