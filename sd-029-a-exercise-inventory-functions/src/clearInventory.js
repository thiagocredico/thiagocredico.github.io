function clearInventory(inventory) {
  let index = 0;
  while (index < inventory.length) {
    if (inventory[index] === 0) {
      inventory.splice(index, 1);
    } else {
      index += 1;
    }
  }
  return inventory;
}

module.exports = clearInventory;
