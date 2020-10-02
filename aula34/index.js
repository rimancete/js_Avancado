//for clássico - Estrutura de repetição

//verificar se um numéro é par ou ímpar
for (let i = 0; i<= 3; i++){
    // variável que retorna se o número é par ou ímpar
    const par = i % 2 === 0 ? 'par': 'ímpar';
    console.log(i, par);
}

// percorrer array
const frutas = ['maçã', 'pera', 'uva'];
for (let i = 0; i < frutas.length; i++){
    console.log(`Índice ${i}, ${frutas[i]}`);
}