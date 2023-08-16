const connection = require('../db/connection');

const findAllSales = async () => {
  const [sales] = await connection.execute(`
    SELECT 
      sales.id saleId, prod.product_id productId, prod.quantity quantity, sales.date date 
    FROM 
      StoreManager.sales sales 
    JOIN 
      StoreManager.sales_products prod ON sales.id = prod.sale_id 
    ORDER BY 
      sales.id, productId;
  `);
  return sales;
};

const findSaleById = async (id) => {
  const [sale] = await connection.execute(`
    SELECT 
      sales.date date, prod.product_id productId, prod.quantity quantity
    FROM 
      StoreManager.sales sales
    JOIN 
      StoreManager.sales_products prod ON sales.id = prod.sale_id
    WHERE 
      sales.id = ?
    ORDER BY 
      sales.id, productId;
  `, [id]);
  return sale;
};

const createSale = async (newId, productId, quantity) => {
  const [{ insertId }] = await connection.execute(`
    INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity) VALUES (?, ?, ?);
  `, [newId, productId, quantity]);
  return insertId;
};

const createSaleId = async () => {
  const [{ insertId }] = await connection.execute(`
    INSERT INTO StoreManager.sales (date) VALUES (NOW());
  `);
  return insertId;
};

const deleteSale = async (id) => {
  const [deletedSale] = await connection.execute(`
    DELETE FROM StoreManager.sales WHERE id = ?;
  `, [id]);
  return deletedSale;
};

const updateSale = async (saleId, productId, quantity) => {
  await connection.execute(`
    UPDATE StoreManager.sales_products SET quantity = ? WHERE sale_id = ? AND product_id = ?;
  `, [quantity, saleId, productId]);

  const [updatedSale] = await connection.execute(`
    SELECT DISTINCT(s.date), sp.sale_id AS saleId, sp.product_id AS productId, sp.quantity 
    FROM StoreManager.sales AS s INNER JOIN StoreManager.sales_products AS sp
    WHERE sale_id = ? AND product_id = ?;
  `, [saleId, productId]);
  // console.log('updatedSale', updatedSale);
  return updatedSale;
};

module.exports = {
  findAllSales,
  findSaleById,
  createSale,
  createSaleId,
  deleteSale,
  updateSale,
};
