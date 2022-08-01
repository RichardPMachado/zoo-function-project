const data = require('../data/zoo_data');

const { species } = data;

const { employees } = data;

const funcionario = (elemento) => employees.find((e) => e.firstName === elemento.name
    || elemento.id === e.id
    || elemento.name === e.lastName);

console.log(funcionario({ id: '4b40a139-d4dc-4f09-822d-ec25e819a5ad' }));

const buscarAnimais = (id) => species.filter((e) => e.id === id)[0].name;

const buscarLocais = (id) => species.filter((e) => e.id === id)[0].location;

const infosTrabalhador = (elemento) => {
  const dadosTrabalhador = {};
  const dadosFuncionario = funcionario(elemento);
  dadosTrabalhador.id = dadosFuncionario.id;
  dadosTrabalhador.fullName = `${dadosFuncionario.firstName} ${dadosFuncionario.lastName}`;
  dadosTrabalhador.species = dadosFuncionario.responsibleFor
    .map((e) => buscarAnimais(e));
  dadosTrabalhador.locations = dadosFuncionario.responsibleFor
    .map((e) => buscarLocais(e));
  return dadosTrabalhador;
};

function getEmployeesCoverage(elemento) {
  const a = [];
  if (!elemento) {
    employees.forEach((acc) => a.push(infosTrabalhador(acc)));
    return a;
  }
  const trabalhador = funcionario(elemento);
  if (!trabalhador) throw new Error('Informações inválidas');
  return infosTrabalhador(trabalhador);
}
console.log(getEmployeesCoverage());

module.exports = getEmployeesCoverage;
