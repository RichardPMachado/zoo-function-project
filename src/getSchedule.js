const data = require('../data/zoo_data');

const especies = [...data.species];

const horas = { ...data.hours };
console.log(horas);
// const diasSemana = (dia) => dia.map((e) => {
//   if (horas[e].open === 0) {
//     return 'CLOSED';
//   }
//   return `Open from ${horas[e].open}am until ${horas[e].close}pm`;
// });

// console.log(diasDaSemana);

// reduce((acc, curr) => cosole.log(Object.values(acc)), {});
/*
console.log(horas)
const expected = {
  'Tuesday': {
    'officeHour': 'Open from 8am until 6pm',
    'exhibition': [ 'lions', 'tigers', 'bears', 'penguins', 'elephants', 'giraffes' ],
  }
  },
  'Monday': { 'officeHour': 'CLOSED', 'exhibition': 'The zoo will be closed!' },
};
          ************TESTES E COISAS PARA USAR************
==================================================================================
{"Friday": {"exhibition": ["tigers", "otters", "frogs", "snakes", "elephants", "giraffes"], "officeHour": "Open from 10am until 8pm"}, "Monday": {"exhibition": "The zoo will be closed!", "officeHour": "CLOSED"}, "Saturday": {"exhibition": ["lions", "tigers", "bears", "penguins", "otters", "frogs", "snakes", "elephants"], "officeHour": "Open from 8am until 10pm"}, "Sunday": {"exhibition": ["lions", "bears", "penguins", "snakes", "elephants"], "officeHour": "Open from 8am until 8pm"}, "Thursday": {"exhibition": ["lions", "otters", "frogs", "snakes", "giraffes"], "officeHour": "Open from 10am until 8pm"}, "Tuesday": {"exhibition": ["lions", "tigers", "bears", "penguins", "elephants", "giraffes"], "officeHour": "Open from 8am until 6pm"}, "Wednesday": {"exhibition": ["tigers", "bears", "penguins", "otters", "frogs", "giraffes"], "officeHour": "Open from 8am until 6pm"}}
const horarioDeFuncionamento = (diaDaSemana) => {
  const objVazio = { [diaDaSemana]: {
    officeHour: horas[diaDaSemana].open === 0 ? 'CLOSED'
      : `Open from ${horas[diaDaSemana].open}am until ${horas[diaDaSemana].close}pm`,
    exhibition: horas[diaDaSemana].open === 0
      ? 'The zoo will be closed!'
      : especies
        .filter((elemento) => elemento.availability.includes(diaDaSemana))
        .map((elemento) => elemento.name),
  },
  };
  return objVazio;
};

*/
const buscarAnimais = (elemento) => {
  const animal = especies.filter((especie) => especie.name === elemento);
  return animal.map((e) => e.availability)[0];
};
const dadosFuncionamemto = (dia) => {
  const officeHour = horas[dia].open === 0 ? 'CLOSED'
    : `Open from ${horas[dia].open}am until ${horas[dia].close}pm`;
  const exhibition = horas[dia].open === 0
    ? 'The zoo will be closed!'
    : especies
      .filter((elemento) => elemento.availability.includes(dia))
      .map((elemento) => elemento.name);
  return { officeHour, exhibition };
};

const diasDaSemana = Object.keys(horas);
const horarioDeFuncionamento = () => {
  const objVazio = diasDaSemana.reduce((acc, curr) => {
    acc[curr] = dadosFuncionamemto(curr);
    return acc;
  }, {});
  return objVazio;
};
// console.log(horarioDeFuncionamento());
const animaisNome = especies.map(({ name }) => name);
const diasAnimais = animaisNome.concat(diasDaSemana);

const getSchedule = (scheduleTarget) => {
  if (diasDaSemana.includes(scheduleTarget)) {
    return { [scheduleTarget]: dadosFuncionamemto(scheduleTarget) };
  }
  if (!diasAnimais.includes(scheduleTarget) || Object.entries(scheduleTarget).length === 0) {
    const a = horarioDeFuncionamento();
    return a;
  }
  return buscarAnimais(scheduleTarget);
};
console.log(getSchedule('Tuesday'));

module.exports = getSchedule;
