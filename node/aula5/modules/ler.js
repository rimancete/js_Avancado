// lendo os valores do JSON gerado
const fs = require('fs').promises;
module.exports = (caminhoJSON) => fs.readFile(caminhoJSON, 'utf8')