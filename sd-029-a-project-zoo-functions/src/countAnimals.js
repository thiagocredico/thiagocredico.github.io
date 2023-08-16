const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function compare(a, b) {
  if (a.name < b.name) return -1;
  if (a.name > b.name) return 1;
  return 0;
}

const countAnimals = (animal) => {
  if (!animal) {
    species.sort(compare);
    return species.reduce((acc, specie) => {
      acc[specie.name] = specie.residents.length;
      return acc;
    }, {});
  }
  if (Object.keys(animal).includes('species') && !Object.keys(animal).includes('sex')
  ) {
    return species.find((specie) => specie.name === animal.species).residents
      .length;
  }
  if (Object.keys(animal).includes('sex')) {
    return species.find((specie) => specie.name === animal.species)
      .residents.filter((specie) => specie.sex === animal.sex).length;
  }
};

module.exports = countAnimals;
