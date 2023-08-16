const productsModel = require('../models/products.model');

const validateSale = async (req, res, next) => {
    const sale = req.body;
    const productIds = sale.map((prod) => prod.productId);
    const quantities = sale.map((prod) => prod.quantity);
    const products = await productsModel.findAll();
    const existingProductIds = products.map((product) => product.id);
  
    if (productIds.some((id) => id === undefined)) {
      return res.status(400).json({ message: '"productId" is required' });
    }
  
    if (!productIds.every((id) => existingProductIds.includes(id))) {
      return res.status(404).json({ message: 'Product not found' });
    }
  
    if (quantities.some((quantity) => quantity === undefined)) {
      return res.status(400).json({ message: '"quantity" is required' });
    }
  
    if (quantities.some((quantity) => quantity <= 0)) {
      return res.status(422).json({ message: '"quantity" must be greater than or equal to 1' });
    }
  
    next();
  };

module.exports = validateSale;
