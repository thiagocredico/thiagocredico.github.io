const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => ids.map((id) => data.species
  .find((specie) => specie.id === id));

module.exports = getSpeciesByIds;
