const { Router } = require('express');

const routes = Router();

const UsersController = require('./Controllers/UsersController');

routes.get('/user', UsersController.index);
routes.get('/user/:id', UsersController.find);
routes.put('/user/:id', UsersController.update_image);
routes.post('/user', UsersController.store);
routes.post('/login', UsersController.login);

module.exports = routes;
