//while , do while


// let i = 0;
// while (i <= 10){
//     console.log(i);
//     i++;
// }


// // com string
// const nome = 'Osvaldo';
// let index = 0;
// while (index < nome.length){
//     console.log(nome[index]);
//     index++;
// }

// exemplo mais real -> não sabemos qts vezes o loop precisará ser testado
function random (min, max){
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}
let rand = 10;

while (rand !== 10){
    rand = random(1, 50);
    if (rand === 10){
        console.log(`Bingo! Enfim, sorteado o número ${rand}!`);
        return;
    }else{
    console.log(`Número sorteado: ${rand}`);
    }
}
console.log('#######');

// exemplo de do while -> Checa a condição antes de entrar no loop
do {
    rand = random(1, 50);
    if (rand === 10){
        console.log(`Bingo! Enfim, sorteado o número ${rand}!`);
        return;
    }else{
    console.log(`Número sorteado: ${rand}`);
    }

} while (rand !== 10);