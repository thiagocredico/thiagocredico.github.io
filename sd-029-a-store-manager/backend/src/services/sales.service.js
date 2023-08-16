const { salesModel } = require('../models');

const getAllSales = async () => {
  const sales = await salesModel.findAllSales();
  
  return sales;
};

const getSaleById = async (id) => {
  const sale = await salesModel.findSaleById(id);

  if (sale.length === 0) {
    return { message: 'Sale not found' };
  }

  return sale;
};

const createSale = async (sale) => {
  const newId = await salesModel.createSaleId();

  sale.map(async (product) => {
    await salesModel.createSale(newId, product.productId, product.quantity);
  });

  return { id: newId, itemsSold: sale };
};

const deleteSale = async (id) => {
  await salesModel.deleteSale(id);
};

const updateSale = async (saleId, productId, quantity) => {
  // console.log('id', id, 'sale', sale);
  const updatedSale = await salesModel.updateSale(saleId, productId, quantity);
  return updatedSale;
};

module.exports = {
  getAllSales,
  getSaleById,
  createSale,
  deleteSale,
  updateSale,
};
