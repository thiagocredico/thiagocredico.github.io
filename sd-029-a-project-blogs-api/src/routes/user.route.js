const express = require('express');
const { userController } = require('../controllers');
const { validateUser, validateToken } = require('../middlerwares');

const userRoute = express();

userRoute.post('/user', validateUser, userController.signUp);
userRoute.get('/user', validateToken, userController.getAllUsers);
userRoute.get('/user/:id', validateToken, userController.getUserById);
userRoute.delete('/user/me', validateToken, userController.deleteSelfUser);

module.exports = userRoute;
