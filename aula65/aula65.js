//filter, map => Sempre retornar um array com a mesma quantidade de elementos ou menos
// reduce

// retorne os números maiores que 10
//               0  1   2   3  4  5  ....
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numFiltrados = numeros.filter(valor => valor > 10);
console.log(numFiltrados);

// Retorne as pessoas que tem o nome com 5 letras ou mais
// Retorne as pessoas com mais de 50 anos
// Retorne as pessoas cujo nome termina com 'a'
const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Leticia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
];
const pessoasLenght5 = pessoas.filter(pessoas => pessoas.nome.length >= 5);
console.log(pessoasLenght5);

const pessoasAge50 = pessoas.filter(pessoas => pessoas.idade > 50);
console.log(pessoasAge50);

const pessoasLetterA = pessoas.filter(pessoas => pessoas.nome.toLowerCase().endsWith('a'));
console.log(pessoasLetterA);