function addToInventory(inventory, item) {
  if (Array.isArray(inventory) === false) {
    throw new Error('O inventário deve ser um array');
  }
  inventory.push(item);
  // return inventory;
}

// console.log(addToInventory(['veiculos'], 'moto'));
module.exports = addToInventory;