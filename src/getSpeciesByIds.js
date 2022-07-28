const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');
// 1- recerber varios parâmetros -- ...ids
// 2.1 Se a função receber apenas um id, retorne a espécie do animal referente a este id; -- map e filter acho / reduce
// 2.2 Se a função receber vários ids, retorne todas as espécies referente a esses ids. -- map e filter acho / ou reduce
const getSpeciesByIds = (...ids) => ids.map((id) => species
  .filter((especie) => especie.id === id));
module.exports = getSpeciesByIds;
