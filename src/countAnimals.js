const data = require('../data/zoo_data');

const especies = [...data.species];

// O método Object.fromEntries() transforma uma lista de pares chave-valor em um objeto. https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries
const contarTodosAnimais = Object.fromEntries(especies.map((especie) =>
  [especie.name, especie.residents.length]));
const countAnimals = (animal) => {
  if (!animal) {
    return contarTodosAnimais;
  }
  return especies.find((especie) => especie.name === animal.specie).residents.length;
  // especies.map((especie) => especie.include(animal)
  //   especie.name, especie.residents.length);
};
module.exports = countAnimals;
