const connection = require('../db/connection');

async function findAll() {
  const [products] = await connection.execute(
    'SELECT * FROM StoreManager.products ORDER BY id;',
  );

  return products;
}

async function findById(id) {
  const [[product]] = await connection.execute(
    'SELECT * FROM StoreManager.products WHERE id = ?;',
    [id],
  );

  return product || false;
}

async function create(name) {
  try {
    const [{ insertId }] = await connection.execute(
      'INSERT INTO StoreManager.products (name) VALUES (?);',
      [name],
    );

    return {
      id: insertId,
      name,
    };
  } catch (error) {
    console.error('Error creating product:', error);
    throw error;
  }
}

const update = async (id, name) => {
  try {
    await connection.execute(
      'UPDATE StoreManager.products SET name = ? WHERE id = ?;',
      [name, id],
    );

    return {
      id,
      name,
    };
  } catch (error) {
    console.error('Error updating product:', error);
    throw error;
  }
};

const remove = async (id) => {
  try {
    await connection.execute(
      'DELETE FROM StoreManager.products WHERE id = ?;',
      [id],
    );

    return true;
  } catch (error) {
    console.error('Error deleting product:', error);
    throw error;
  }
};

const findByName = async (name) => {
  console.log('name', name);
  const [product] = await connection.execute(`
  SELECT * FROM StoreManager.products WHERE name LIKE ?;
  `, [`%${name}%`]);

 console.log('product', product);
  return product;
};

module.exports = {
  findAll,
  findById,
  create,
  update,
  remove,
  findByName,
};
