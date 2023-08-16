const findItem = require('./findItem');

function decrementQuantity(inventory, name, decrement) {
  if (decrement === undefined) {
    decrement = 1;
  }
  const item = findItem(inventory, name);
  if (decrement > item.quantity) {
    throw new Error('O decremento deve ser menor ou igual a quantidade atual');
  }
  item.quantity -= decrement;
  return item;
}

module.exports = decrementQuantity;
