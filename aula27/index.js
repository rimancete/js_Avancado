/*
Operação Ternária
? :
*/

//Se usuário tiver 1000 pontos ou mais é VIP, se não normal
const pontuacaoUsuario = 1000;
if (pontuacaoUsuario >= 1000){
    console.log(`'Utilizando if: 'Usuário VIP'`);
} else{
    console.log(`Utilizando else: 'Usuário normal'`);
}

// utilizando operação ternária
const nivelUsuario = pontuacaoUsuario >= 1000 ? `Utilizando temária: 'Usuário VIP'` : `Utilizando temária: 'Usuário normal'`;
console.log(nivelUsuario);

//utilizando || ou &&
const corUsuario = 'black';
const corPadrao = corUsuario || 'red';
console.log(`A cor é ${corPadrao}`)

// teste
// validar se um numero está entre dois ranges
const num1 = -20;
const validaNumero = num1 > 0 && num1 <= 9 ? 'Numero entre 0 e 9' : num1 >=10 ? 'Numero maior ou igual a 10' : 'Numero negativo';
console.log(validaNumero);