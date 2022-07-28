const data = require('../data/zoo_data');

const trabalhadores = [...data.employees];

// Deve retornar true se o id passado for de uma pessoa gerente; -- some ou find
// Deve retornar false se o id passado não for de uma pessoa gerente. -- some ou find

const isManager = (id) => trabalhadores.some((ehGerente) => ehGerente.managers
  .find((gerente) => gerente === id));

const getRelatedEmployees = (managerId) => {

};

module.exports = { isManager, getRelatedEmployees };
