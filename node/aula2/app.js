//navegadno por diretórios
const multiplicação = require('./B/C/mod1');
const resto = require('./Z/mod2');
const somaResto = require('./B/mod3')
exports.resto = resto(multiplicação(2,3));
console.log(resto(multiplicação(2,3)));
console.log(somaResto());

//variáveis __filename => nome do arquivo atual / __dirname => diretório atual
console.log(__filename);
console.log(__dirname);

// variável path
const path = require('path');
console.log(path.resolve(__dirname, '..', '..', 'aula93'))