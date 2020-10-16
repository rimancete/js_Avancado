// for each => iterar dentro de arrays

const numeros = [10,20,30,40,50,60,70,80,90,100];
numeros.forEach((numero, indice, array) => console.log(numero, indice, array));

// simulando reduce => somando todos os valores
let total = 0;
numeros.forEach(numero => (total += numero));
console.log(total);