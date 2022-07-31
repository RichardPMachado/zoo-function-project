const data = require('../data/zoo_data');

const especies = [...data.species];
const horas = { ...data.hours };
const a = especies.filter((especie) => especie.availability === 'Tuesday');
console.log(a);
const officeHour = (aberto, fechado) => {
  if (aberto === 0) {
    return 'CLOSED';
  }
  return `Open from ${aberto}am until ${fechado}pm`;
};

const animaisDia = (dia) => {
  const exhibition = [];
  especies.find((especie) => especie.availability === dia);
};

// dia = {
//   diaDaSemana {
//     officeHour: `Open from ${horaAm}am until ${horaPm}pm`,
//     exhibition: exibition,
//   }
// }

// reduce((acc, curr) => cosole.log(Object.values(acc)), {});
/*
console.log(horas)
const expected = {
  'Tuesday': {
    'officeHour': 'Open from 8am until 6pm',
    'exhibition': [ 'lions', 'tigers', 'bears', 'penguins', 'elephants', 'giraffes' ],
  },
  'Wednesday': {
    'officeHour': 'Open from 8am until 6pm',
    'exhibition': [ 'tigers', 'bears', 'penguins', 'otters', 'frogs', 'giraffes' ],
  },
  'Thursday': {
    'officeHour': 'Open from 10am until 8pm',
    'exhibition': [ 'lions', 'otters', 'frogs', 'snakes', 'giraffes' ],
  },
  'Friday': {
    'officeHour': 'Open from 10am until 8pm',
    'exhibition': [ 'tigers', 'otters', 'frogs', 'snakes', 'elephants', 'giraffes' ],
  },
  'Saturday': {
    'officeHour': 'Open from 8am until 10pm',
    'exhibition': [
      'lions',  'tigers',
      'bears',  'penguins',
      'otters', 'frogs',
      'snakes', 'elephants',
    ],
  },
  'Sunday': {
    'officeHour': 'Open from 8am until 8pm',
    'exhibition': [ 'lions', 'bears', 'penguins', 'snakes', 'elephants' ],
  },
  'Monday': { 'officeHour': 'CLOSED', 'exhibition': 'The zoo will be closed!' },
};
*/
const animais = (animal) => {
  const bicho = especies.find((especie) => especie.name === animal);
  return bicho.availability;
};

// const objVazio = () => {}

const getSchedule = (scheduleTarget) => {
  return animais(scheduleTarget);
  // officeHour: `'Open from ${horas.open}am until ${horas.close}pm'`,
  // exhibition:
};
console.log(getSchedule('lions'));

module.exports = getSchedule;
