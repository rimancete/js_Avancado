/*
Valores Primitivos (imutáveis) - strings, number, boolean, undefined,
null (bigint, syymbol) - valores copiados

Valores por referência (mutável) - array, object, function - Valores passados por refência
*/

/************************
 * 
 *  ARRAY
 *  
*************************/
let a =[1, 2, 3];
let b = a;
let c = b;
console.log(a, b)
a.push(4);
console.log(a, b)
b.pop();
console.log(a, b);
a.push('eae');
console.log(`'c' vai ter o mesmo valor de 'a' e de 'b': ${c}`);
// se quiser copiar o conteúdo como em valores primitivos, fazer:
let d = [...a];
c.pop();
console.log(`Valor de c atualizado: ${c}`);
console.log(`'d' somente copiou os dados de 'a antes de sua atualização: ${d}`);
/************************
 * 
 *  OBJECT
 *  
*************************/
let pessoa1 = {
    nome: 'Osvaldo',
    idade: 33
};
const pessoa2 = pessoa1;
pessoa1.nome = 'João'
console.log('------------OBJECT----------------')
console.log(`Nome de 'pessoa1': ${pessoa1.nome}`);
console.log(`Nome de 'pessoa2': ${pessoa2.nome}`);
// se quiser copiar o conteúdo como em valores primitivos, fazer:
let pessoaCopia = {...pessoa1};
pessoa1.nome = 'Osvaldo';
console.log(`Nome de 'pessoaCopia': ${pessoaCopia.nome}`);
console.log(`Nome de 'pessoa1': ${pessoa1.nome}`);