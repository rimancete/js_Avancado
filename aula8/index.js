//nome + sobrenome | idade, anoNascimento, peso, altura
/*
Osvaldo Costa tem 30 anos, pesa 84kg
tem 1.8mt de altura e seu IMC é de 25.925925925925924
Osvaldo Costa nasceu em 1987
*/

const nome = 'Osvaldo';
const sobrenome = 'Costa';
const idade = 33;
const peso = 84;
const alturaEmCm = 180

const data = new Date();
const anoAtual = data.getFullYear();
let alturaEmMt = alturaEmCm / 100;
let imc = peso / (alturaEmMt*2)
let anoNascimento = anoAtual - idade


//template strings
console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso}kg`);
console.log(`tem ${alturaEmMt} de altura e seu IMC é de ${imc}`);
console.log(`${nome} ${sobrenome} nasceu em ${anoNascimento}.`);