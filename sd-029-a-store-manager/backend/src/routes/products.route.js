const express = require('express');
const { controller } = require('../controllers');
const validateProductName = require('../middlewares/validateProductName');

const route = express();

route.get('/search', controller.searchProductByName);
route.get('/', controller.getAllProducts);
route.get('/:id', controller.getProductById);
route.post('/', validateProductName, controller.createProduct);
route.put('/:id', validateProductName, controller.updateProduct);
route.delete('/:id', controller.deleteProduct);

module.exports = route;
