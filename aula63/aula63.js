// Método Splice
//                  -5        -4       -3      -2       -1
//                  0         1        2       3        4
const nomes = ['Osvaldo', 'Raiane', 'Davi', 'Pedro', 'Miguel'];
// par1 => onde começa / par2 => qts elementos remover
//nomes.splice(indice[inicial ou atual],del-elements,add-el1, add-el2, add-el3);

//Remover elemento 'Davi'
/*
let lastNames = nomes.splice(2, 1);
console.log(nomes, lastNames);
*/

// Remover dois últimos elementos
/*
lastNames = nomes.splice(2, 2);
console.log(nomes, lastNames);
*/

// Removendo com números negativos = > Remover os dois últimos elementos
/*
lastNames = nomes.splice(-3, 2);
console.log(nomes, lastNames);
*/


// Removendo o elelmento 'Davi'
/* lastNames = nomes.splice(-3, 1);
console.log(nomes, lastNames);
*/

// removendo todos à partir do elemento 'Pedro' até o fim do array
/*
lastNames = nomes.splice(-2, Number.MAX_VALUE);
console.log(nomes, lastNames);
*/

// Removendo nenhum elemento
/*
lastNames = nomes.splice(3, 0);
console.log(nomes, lastNames);
*/

// Adicionando 'Matheus' e 'João' à partir de 'Raiane'(no índice 2)
/*
lastNames = nomes.splice(2, 0, 'Matheus', 'João');
console.log(nomes, lastNames);
*/

// Trocando 'Pedro' por 'Matheus
/*
lastNames = nomes.splice(3, 1, 'Matheus');
console.log(nomes, lastNames);
*/

// Removendo 'Davi' e 'Pedro' e adicionando 'João' no lugar de 'Davi'
/*
lastNames = nomes.splice(2, 2, 'João');
console.log(nomes, lastNames);
*/

// Trocando 'Raiane' e 'Davi'por 'João' e 'Matheus'
/*
lastNames = nomes.splice(1, 2, 'João', 'Matheus');
console.log(nomes, lastNames);
*/

//simulando função pop
/*
lastNames = nomes.splice(-1, 1);
console.log(nomes, lastNames);
*/

// simulando shift
/*
lastNames = nomes.splice(0, 1);
console.log(nomes, lastNames);
*/

// simulando unshift e push
/*
const simUnshift = nomes.splice(0, 0, 'Matheus');
console.log(nomes, simUnshift);
const simPush = nomes.splice(nomes.length, 0, 'Matheus');
console.log(nomes, simPush);
*/