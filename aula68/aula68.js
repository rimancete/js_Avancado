// Retorne a soma do dobro de todos os pares
// --> Filtrar pares (filter)
// --> Dobrar os valores (map)
// --> Reduzir (somar tudo) [reduce]
//               0  1   2   3  4  5  ....
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
let pares = [... numeros]
pares = numeros.filter((numero) => (numero % 2 === 0));
const dobra = pares.map(numero => numero * 2);
const soma = dobra.reduce((acumulador, numero) => {acumulador += numero; return acumulador})
console.log(pares);
console.log(dobra);
console.log(soma);
// executando tudo numa mesma variável(encadeando)
const resultado = numeros
.filter((numero) => numero % 2 === 0)
.map(numero => numero * 2)
.reduce((acumulador, numero) => acumulador += numero);
console.log(resultado);