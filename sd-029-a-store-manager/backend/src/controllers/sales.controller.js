const { salesService } = require('../services');

const getAllSales = async (_req, res) => {
  try {
    const sales = await salesService.getAllSales();
    res.status(200).json(sales);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

const getSaleById = async (req, res) => {
  try {
    const { id } = req.params;
    const sale = await salesService.getSaleById(id);

    if (sale.message) {
      res.status(404).json({ message: 'Sale not found' });
    } else {
      res.status(200).json(sale);
    }
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

const createSale = async (req, res) => {
  try {
    const newSale = req.body;
    const sold = await salesService.createSale(newSale);
    res.status(201).json(sold);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

const deleteSale = async (req, res) => {
  try {
    const { id } = req.params;
    const sale = await salesService.getSaleById(id);
    if (!sale.message) {
      await salesService.deleteSale(id);
      return res.status(204).json({ message: 'Deleted sale successfully' });
    }
    return res.status(404).json({ message: 'Sale not found' });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

const updateSale = async (req, res) => {
  try {
    const { saleId, productId } = req.params;
    // console.log(id);
    console.log('saleId', saleId, 'productId', productId);
    const { quantity } = req.body;
    const [updatedSale] = await salesService.updateSale(saleId, productId, quantity);
    res.status(200).json(updatedSale);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error.' });
  }
};

module.exports = {
  getAllSales,
  getSaleById,
  createSale,
  deleteSale,
  updateSale,
};
