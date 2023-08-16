const { employees } = require('../data/zoo_data');

const getEmployeeByName = (employeeName) => {
  if (!employeeName) {
    return {};
  }
  return employees
    .find(({ firstName, lastName }) => employeeName === firstName || lastName === employeeName);
};

module.exports = getEmployeeByName;
