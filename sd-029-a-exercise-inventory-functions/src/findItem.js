function findItem(inventory, name) {
  for (const item of inventory) {
    if (item.name === name) {
      return item;
    }
  }
  throw new Error('O item não foi encontrado');
}

module.exports = findItem;