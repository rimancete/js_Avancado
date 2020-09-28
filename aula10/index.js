/**
* Operadores Aritiméticos
* + Adição / Concatenação (- / *)
* ** Potenciação
* % Resto da divisão
*/
const num1 = 10;
const num2 = 2;
const num3 = 10;
console.log(`Operadores ${num1 + num2 * num3}`)

/*Precedência
()
**
* / %
+ -
*/
console.log(`Precedência ${(num1 + num2) * num3}`)

/*
Incremento = ++
Decremento = --

*/
let contador = 1;
contador++;
console.log(`Incremento / Decremento ${contador}`);

/*
Operadores de Atribuição = (+ - / * % **) mais que um
*/

contador += 2;
console.log(`Atribuição: ${contador}`);

//NaN - Not a number

//conversão de valores parsetInt, parseFloat, Number
const num4 = 10
const num5 = Number('5.5');
console.log(`num4 + num5: ${num4 + num5}`);
console.log(typeof num5);
