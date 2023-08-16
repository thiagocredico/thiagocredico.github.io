const data = require('../data/zoo_data');

const functionOptions = (animals, options) => {
  const obj = {};
  let { residents } = data.species.find((specie) => specie.name === animals);
  // console.log(residents);
  if (options.sex) {
    residents = residents.filter((animal) => animal.sex === options.sex); // residents filtrados peço sexo
  }
  const mappedNames = residents.map((resident) => resident.name);
  // console.log(mappedNames);
  if (options.sorted) {
    mappedNames.sort(); // array ordenado
  }
  obj[animals] = mappedNames;
  // console.log(obj);
  return obj;
};

const getAnimalMap = (options) => {
  if (!options || !options.includeNames) {
    return ['NE', 'NW', 'SE', 'SW'].reduce((acc, curr) => {
      acc[curr] = (data.species.filter(({ location }) => curr === location))
        .map((animal) => animal.name);
      return acc;
    }, {});
  }
  if (options || options.includeNames) {
    return ['NE', 'NW', 'SE', 'SW'].reduce(((acc, key) => (
      { ...acc,
        [key]: ['NE', 'NW', 'SE', 'SW'].reduce((acc2, curr) => {
          const acc3 = acc2;
          acc3[curr] = (data.species.filter(({ location }) => curr === location))
            .map((animal) => animal.name);
          return acc3;
        }, {})[key].map((animals) => functionOptions(animals, options)) }
    )), {});
  }
};

// console.log(getAnimalMap({ includeNames: true, sorted: true, sex: 'male' }));
// getAnimalMap({ includeNames: true, sex: 'female' }); //

module.exports = getAnimalMap;
