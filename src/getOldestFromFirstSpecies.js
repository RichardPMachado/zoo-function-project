const data = require('../data/zoo_data');

const { species } = data;

const { employees } = data;

const procuraEspecieMaiorIdade = (id) => {
  const especie = species.filter((e) => e.id === id)[0].residents;
  const especieIdades = especie.map((e) => e.age);
  const especieMaiorIdade = especieIdades.sort((a, b) => a - b);
  const animalDados = especie
    .find((e) => e.age === especieMaiorIdade[especieMaiorIdade.length - 1]);
  return [animalDados.name, animalDados.sex, animalDados.age];
};
const getOldestFromFirstSpecies = (id) => {
  const trabalhador = employees.filter((e) => e.id === id)
    .map((animais) => animais.responsibleFor)[0][0];
  const a = procuraEspecieMaiorIdade(trabalhador);

  return a;
};
console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));
module.exports = getOldestFromFirstSpecies;
