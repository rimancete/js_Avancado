// concatenando arrays e objetos
// NÃO PODE USAR '+' pois ele tentará concatenar os valores do array
const nomes = ['Osvaldo', 'Raiane', 'Davi'];
const newNomes = ['João', 'Pedro', 'Miguel'];
let allNomes = nomes.concat(newNomes);

console.log(allNomes);

// adiionando elementos no arr com concat
/*
allNomes = nomes.concat(newNomes, ['Joaquina', 'Margarida'], 10);
console.log(allNomes);
*/

// adiionando elementos no arr com spread operator

/*
allNomes = [...nomes, ...newNomes];
console.log(allNomes);
*/

// dicionando elementos entre arrays

allNomes = [...nomes, 'NOME', ...newNomes, 'NOME2', 20, ...['Maria', 'Silva', 'Matheus']];
console.log(allNomes);