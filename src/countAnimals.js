const data = require('../data/zoo_data');

const especies = [...data.species];

const countAnimals = (animal) => {
  if (!animal) {
  // O método Object.fromEntries() transforma uma lista de pares chave-valor em um objeto. https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries
    return Object.fromEntries(especies.map((especie) =>
      [especie.name, especie.residents.length]));
  }
};
module.exports = countAnimals;
