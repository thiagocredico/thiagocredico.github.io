const { service } = require('../services');
const productsModel = require('../models/products.model');

const getAllProducts = async (_req, res) => {
  try {
    const products = await service.getAllProducts();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await service.getProductById(id);

    if (product.message) {
      res.status(404).json({ message: 'Product not found' });
    } else {
      res.status(200).json(product);
    }
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

const createProduct = async (req, res) => {
  try {
    console.log('req.body', req.body);
    const { name } = req.body;
    const product = await service.createProduct(name);

    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: 'Internal server erro.' });
  }
};

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = req.body;
    console.log('id', id);
    console.log('product', product);
    
    const productOnDB = await productsModel.findById(id);
    console.log('productOnDB', productOnDB);
    if (productOnDB) {
    const updatedProduct = await service.updateProduct(id, product.name);
    return res.status(200).json(updatedProduct);
  }
  return res.status(404).json({ message: 'Product not found' });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const productOnDB = await productsModel.findById(id);
    if (!productOnDB) {
      return res.status(404).json({ message: 'Product not found' });
    }
    const product = await service.deleteProduct(id);

    res.status(204).json(product);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

const searchProductByName = async (req, res) => {
  console.log('searchProductByName');
  try {
    const { q } = req.query;
    console.log('q', q);
    const products = await service.searchProductByName(q);
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error.' });
  }
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  searchProductByName,
};
