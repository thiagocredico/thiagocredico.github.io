const { employees, species } = require('../data/zoo_data');

const getOldestFromFirstSpecies = (id) => Object
  .values((species
    .find((specie) => specie.id === ((employees
      .find((employ) => employ.id === id))
      .responsibleFor[0]))).residents
    .sort((a, b) => b.age - a.age)[0]);

module.exports = getOldestFromFirstSpecies;
