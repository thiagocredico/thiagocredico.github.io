const { model, salesModel } = require('../models');

const validateUpdateSale = async (req, res, next) => {
  // Validate product ID
  const data = await model.findById(req.params.productId);
//   console.log(data);
  if (!data) {
    return res.status(404).json({ message: 'Product not found in sale' });
  }
  // Validate quantity
  const { quantity } = req.body;
//   console.log(quantity);
  if (quantity === undefined) {
    return res.status(400).json({ message: '"quantity" is required' });
  }
  if (quantity <= 0) {
    return res
      .status(422)
      .json({ message: '"quantity" must be greater than or equal to 1' });
  }
  // Validate sale
  const sales = await salesModel.findSaleById(req.params.saleId);
//   console.log(sales);
  if (sales.length === 0) {
    return res.status(404).json({ message: 'Sale not found' });
  }
//   console.log('next');

  next();
};

module.exports = validateUpdateSale;
