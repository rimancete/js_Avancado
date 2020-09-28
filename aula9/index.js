//Pode-se redeclarar a variável com var
var nome = 'osvaldo';
var nome = 'costa';
console.log(nome);
/*
*/

// Tipos de dados primitivos: string, number, indefined, null, boolean
const nome = 'Osvaldo'; // string
const nome1 = "Osvaldo"; // string
const nome2 = `Osvaldo`; // string
const num1 = 10; // number
const num2 = 10.52 // number
let nomeAluno; // undefined = aponta pra local nenhum na memória
const sobrenomeAluno = null; // Nulo -> aponta pra local nenhum na memória
const boolean = true; // Boolean = true, false (lógico)

let a = 2;
const b = a;
console.log(a, b); // 2, 2

a = 3;
console.log(a, b); // 3, 2