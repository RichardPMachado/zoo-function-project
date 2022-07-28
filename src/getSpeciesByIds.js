const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');
// 1- recerber varios parâmetros -- ...ids
// 2.1 Se a função receber apenas um id, retorne a espécie do animal referente a este id; -- map e filter acho /ou reduce -- corrigindo map e find
// 2.2 Se a função receber vários ids, retorne todas as espécies referente a esses ids. -- map e filter acho / ou reduce -- corrigindo map e find
const getSpeciesByIds = (...ids) => ids.map((id) => species
  .find((especie) => especie.id === id));
module.exports = getSpeciesByIds;
