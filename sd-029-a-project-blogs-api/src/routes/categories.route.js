const express = require('express');
const { categoryController } = require('../controllers');
const { validateToken, validateCategory } = require('../middlerwares');

const categoriesRoute = express();

categoriesRoute.post(
  '/categories',
  validateToken,
  validateCategory,
  categoryController.createCategory,
);
categoriesRoute.get('/categories', validateToken, categoryController.getAllCategories);

module.exports = categoriesRoute;
