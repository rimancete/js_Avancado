// importando todos os dados do 'módulo1.js'
// import {nomeDefault as nome, sobrenome, idade, soma} from './modulo1';
import * as MeuModulo from './modulo1'
console.log(MeuModulo.nomeDefault, MeuModulo.sobrenome, MeuModulo.idade);
console.log(MeuModulo.soma(2,3));
const cliente = new MeuModulo.Cliente(MeuModulo.nomeDefault, MeuModulo.sobrenome, MeuModulo.idade)
console.log(cliente.anoNascimento());
// importando a função anonima que multiplica dois números
import multiplica from './modulo1';
console.log(multiplica(2,2));

