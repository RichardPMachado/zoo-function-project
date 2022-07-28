const data = require('../data/zoo_data');

const trabalhadores = [...data.employees];

// Retorne um objeto vazio caso a função não receba parâmetros; -- um if negando o employeeName

// Retorne as informações da pessoa colaboradora caso o parâmetro seja igual ao nome ou igual ao último nome no seguinte formato: -- o find da massa

const getEmployeeByName = (employeeName) => {
  if (!employeeName) {
    return {};
  }
  return trabalhadores.find((cadastro) => cadastro.firstName === employeeName
    || cadastro.lastName === employeeName);
};
module.exports = getEmployeeByName;
