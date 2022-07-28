const data = require('../data/zoo_data');

const especies = [...data.species]; // pegando array species

// console.log(especies);
// Implemente a função getAnimalsOlderThan que deve receber uma espécie e uma idade como parâmetro, e então retornar se todos os animais dessa espécie possuem essa idade ou são mais velhos.
// e filter ou find para encontrar
// se são TODOS e retorno boleano -- provavelmente every solucione

const getAnimalsOlderThan = (animal, age) => especies.find((especie) => animal === especie.name)
  .residents.every((especie) => especie.age >= age);
// console.log(getAnimalsOlderThan('penguins', 10));
module.exports = getAnimalsOlderThan;
