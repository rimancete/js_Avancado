/* atribuição via desestruturação (Arrays)
*/

//REVISÃO
// let a = 'A'; // B
// let b = 'B'; // C
// let c = 'C'; // A

// const letras = [b, c, a];
// [a, b, c] = letras;
// console.log(a, b, c);

const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
// ... rest(pegar o resto), ...spread(distribuir)
const [primeiroNumero, segundoNumero, terceiroNumero,...resto] = numeros; // Colocando os valores correspondentes de um array em variáveis;
console.log(primeiroNumero, segundoNumero,terceiroNumero);
console.log(resto);

//pegando dados em ińdices diferentes
const [um, , tres, cinco, , sete] = numeros;
console.log(`Exibindo dados em índices diferentes: ${um, tres, cinco}`);

//arrays dentro de arrays
//INDICES 'upper' 0          1          2
//INDICES 'lower'
//             0  1  2    0  1  2    0  1  2
const num = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];
console.log(`Exibindo o número 6 do array acima: ${num[1][2]}`);
const [,[,,seis]] = num; // retornaria o mesmo 6 acima, porém bem complexo
// sugestão: cria variáveis com os arrays 'lower' e aponta para o índice correspondente;
const [lista1, lista2, lista3] = num;
console.log(`Exibindo o 6 de maneira mais simples: ${lista2[2]}`);