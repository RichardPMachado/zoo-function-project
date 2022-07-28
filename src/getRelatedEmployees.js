const data = require('../data/zoo_data');

const trabalhadores = [...data.employees];

// Deve retornar true se o id passado for de uma pessoa gerente; -- some ou find
// Deve retornar false se o id passado não for de uma pessoa gerente. -- some ou find

// função getRelatedEmployees, caso o ID passado for da pessoa gerente, deve retornar um array contendo nome e sobrenome das pessoas colaboradoras pelas quais ela é responsável; w

// A função getRelatedEmployees, caso o ID passado não for da pessoa gerente, deve disparar um erro com a mensagem: 'O id inserido não é de uma pessoa colaboradora gerente!'. -- Throw new Error

const isManager = (id) => trabalhadores.some((ehGerente) => ehGerente.managers
  .find((gerente) => gerente === id));

const getRelatedEmployees = (managerId) => {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
};

module.exports = { isManager, getRelatedEmployees };
