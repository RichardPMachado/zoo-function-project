const data = require('../data/zoo_data');

const { species } = data;

const locais = species.map((e) => e.location);

const todosAnimaisLocais = () => {
  const objVazio = locais.reduce((acc, curr) => {
    acc[curr] = species.filter((elemento) => elemento.location.includes(curr))
      .map((elemento) => elemento.name);
    return acc;
  }, {});
  return objVazio;
};

const nomeTodosAnimais = (especies, sex, sorted) => {
  const objVazio = {};
  const residentes = species.find((especie) => especie.name === especies).residents;
  if (sex === undefined) {
    objVazio[especies] = residentes.map((e) => e.name);
  } else {
    objVazio[especies] = residentes.filter((e) => e.sex === sex)
      .map((e) => e.name);
  }
  if (sorted === true) {
    objVazio[especies].sort();
  }
  console.log(objVazio);
  return objVazio;
};

// console.log(nomeTodosAnimais('lions'));
const verificaIncludes = (sex = undefined, sorted = false) => {
  const objVazio = locais.reduce((acc, curr) => {
    acc[curr] = species.filter((elemento) => elemento.location.includes(curr))
      .map((elemento) => nomeTodosAnimais(elemento.name, sex, sorted));
    // console.log(acc[curr]);
    return acc;
  }, {});
  return objVazio;
};
// console.log(verificaIncludes({ sorted: false }).NE);
const verificaOpcoes = (options) => {
  if (options.sex === 'female' || options.sorted === true) {
    return verificaIncludes(options.sex, options.sorted);
  } return verificaIncludes(undefined, false);
};
// console.log(animaisLocais());
function getAnimalMap(options = {}) {
  return options.includeNames ? verificaOpcoes(options) : todosAnimaisLocais();
}
console.log(getAnimalMap({ includeNames: true, sorted: true }));

module.exports = getAnimalMap;
