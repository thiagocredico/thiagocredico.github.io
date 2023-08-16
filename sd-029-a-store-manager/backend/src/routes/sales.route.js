const express = require('express');
const { salesController } = require('../controllers');
const validateSale = require('../middlewares/validateSale');
const validateUpdateSale = require('../middlewares/validateUpdateSale');

const route = express();

route.get('/', salesController.getAllSales);
route.get('/:id', salesController.getSaleById);
route.post('/', validateSale, salesController.createSale);
route.delete('/:id', salesController.deleteSale);
route.put('/:saleId/products/:productId/quantity', validateUpdateSale, salesController.updateSale);

module.exports = route;
