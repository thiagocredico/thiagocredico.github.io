function getInventoryValue(inventory) {
  let value = 0;
  for (const item of inventory) {
    value += (item.quantity * item.price);
  }
  return value;
}

module.exports = getInventoryValue;