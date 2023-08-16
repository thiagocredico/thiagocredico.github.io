const { model } = require('../models');

const getAllProducts = async () => {
  const products = await model.findAll();
  
  return products;
};

const getProductById = async (id) => {
  const product = await model.findById(id);
  
  if (!product) {
    return { message: 'Product not found' };
  }

  return product;
};

const createProduct = async (name) => {
  const product = await model.create(name);

  return product;
};

const updateProduct = async (id, name) => {
  const product = await model.update(Number(id), name);

  return product;
};

const deleteProduct = async (id) => {
  const product = await model.remove(id);

  return product;
};

const searchProductByName = async (name) => {
    const product = await model.findByName(name);

  return product;
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  searchProductByName,
};
