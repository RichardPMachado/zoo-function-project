const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');
// console.log(prices.child);
const countEntrants = (entrants) => entrants.reduce((acc, curr) => {
  if (curr.age < 18) acc.child += 1;
  else if (curr.age < 50) acc.adult += 1;
  else acc.senior += 1;
  return acc;
}, { adult: 0, child: 0, senior: 0 });

const calculateEntry = (entrants) => {
  if (!entrants || Object.entries(entrants).length === 0) {
    return 0;
  }
  const a = countEntrants(entrants);
  const total = a.adult * prices.adult
  + a.child * prices.child
  + a.senior * prices.senior;
  return total;
};

module.exports = { calculateEntry, countEntrants };
