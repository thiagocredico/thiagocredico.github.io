const { hours } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const obj = {};

function defineMonday(obj1, week) {
  const objTest = obj1;
  objTest[week] = {
    officeHour: 'CLOSED',
    exhibition: 'The zoo will be closed!',
  };
}

function defineWeekDays(obj2, week) {
  const objTest = obj2;
  objTest[week] = {
    officeHour: `Open from ${hours[week].open}am until ${hours[week].close}pm`,
    exhibition: data.species
      .filter((avail) => avail.availability.includes(week))
      .map((specie) => specie.name),
  };
}

function defineNewObj() {
  Object.keys(hours).forEach((week) => {
    obj[week] = {};
  });
}

function defineCompleteObject() {
  Object.keys(obj).forEach((week) => {
    if (hours[week].open !== 0) {
      defineWeekDays(obj, week);
    } else {
      defineMonday(obj, week);
    }
  });
}

const getSchedule = (scheduleTarget) => {
  if (data.species.map((specie) => specie.name).includes(scheduleTarget)) {
    return data.species.find((specie) => specie.name === scheduleTarget)
      .availability;
  }
  defineNewObj();
  defineCompleteObject();
  if (Object.keys(obj).includes(scheduleTarget)) {
    const indexOfScheduleTarget = Object.keys(obj).indexOf(scheduleTarget);
    return Object.keys(obj)
      .slice(indexOfScheduleTarget, indexOfScheduleTarget + 1)
      .reduce((result, key) => {
        const result1 = result;
        result1[key] = obj[key];
        return result;
      }, {});
  }
  return obj;
};

module.exports = getSchedule;
