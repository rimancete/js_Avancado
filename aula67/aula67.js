// reduce => utilizado para reduzir um array em um único elemento

// Some todos os números (reduce)
// Retorne um array com os pares (filter)
// Retorne um array com o dobro dos valores (map)
//               0  1   2   3  4  5  ....
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const soma = numeros.reduce((acumulador,numero) => acumulador += numero);
console.log(soma);

// SIMULANDO FILTER => NÃO FAÇA ISSO
const pares = numeros.reduce((acumulador, numero) => {if(numero % 2 === 0 ) acumulador.push(numero);return acumulador;}, []);
console.log(pares);

// SIMULANDO MAP => NÃO FAÇA ISSO
const dobro = numeros.reduce((acumulador, numero) => {acumulador.push(numero * 2); return acumulador}, []);
console.log(dobro);





// Retorne a pessoa mais velha
const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Leticia', idade: 19},
    {nome: 'Rosana', idade: 64},
    {nome: 'Wallace', idade: 47},
];
const older = pessoas.reduce((pessoa, pessoaAtual) => {
    if (pessoa.idade >  pessoaAtual.idade) return pessoa; return pessoaAtual;
});
console.log(older);