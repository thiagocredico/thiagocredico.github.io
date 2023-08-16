const data = require('../data/zoo_data');

const countEntrants = (entrants) => {
  const child = entrants.filter((entry) => entry.age < 18);
  const adult = entrants.filter((entry) => entry.age >= 18 && entry.age < 50);
  const senior = entrants.filter((entry) => entry.age >= 50);
  const counter = entrants.reduce((acc, entry) => {
    acc.child = child.length;
    acc.adult = adult.length;
    acc.senior = senior.length;
    return acc;
  }, {});
  return counter;
};

const calculateEntry = (entrants) => {
  if (!entrants || Array.isArray(entrants) === false) {
    return 0;
  }
  return (countEntrants(entrants)
    .child * data.prices.child + countEntrants(entrants)
    .adult * data.prices.adult + countEntrants(entrants)
    .senior * data.prices.senior
  );
};

module.exports = { calculateEntry, countEntrants };
