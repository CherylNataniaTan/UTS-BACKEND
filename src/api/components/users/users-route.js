const express = require('express');
const usersController = require('./users-controller');
const { authMiddleware } = require('../../middlewares');

const route = express.Router();

module.exports = (app) => {
  app.use('/users', route);

  route.get('/', authMiddleware, usersController.getUsers);

  route.post('/', usersController.createUser);

  route.get('/:id', authMiddleware, usersController.getUser);

  route.patch('/:id', authMiddleware, usersController.updateUser);

  route.patch('/:id/change-password', authMiddleware, usersController.changePassword);

  route.delete('/:id', authMiddleware, usersController.deleteUser);
};