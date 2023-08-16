const { species, employees } = require('../data/zoo_data');

const findSpecieName = (speciesId) => speciesId.map((specieId) => (species
  .find((specie) => specie.id === specieId)).name);

const findSpecieLocation = (speciesId) => speciesId.map((specieId) => (species
  .find((specie) => specie.id === specieId)).location);

const mapAllEmployees = () => employees.map((employe) => (
  {
    id: employe.id,
    fullName: `${employe.firstName} ${employe.lastName}`,
    species: findSpecieName(employe.responsibleFor),
    locations: findSpecieLocation(employe.responsibleFor),
  }
));

const getEmployeesCoverage = (input) => {
  const allEmployees = mapAllEmployees();
  if (!input) {
    return allEmployees;
  }
  if (employees.some((employe) => employe.id === input.id)) {
    return allEmployees.find((employe) => employe.id === input.id);
  }
  if (employees.some((employe) => employe.firstName === input.name) || employees
    .some((employe) => employe.lastName === input.name)) {
    return allEmployees.find((employe) => employe.fullName.includes(input.name));
  }
  throw new Error('Informações inválidas');
};

module.exports = getEmployeesCoverage;
