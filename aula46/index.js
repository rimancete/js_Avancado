//setInterval e setTimeout - controle de timer

// euxibindo hora a cada segundo
function mostraHora (){
    let data = new Date();
    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}

// setInterval(function (){
//     console.log(mostraHora());
// }, 1000);


// inserindo setInterval em uma variável
const horario = setInterval(function (){
    console.log(`Exibindo a hora a cada 2s: ${mostraHora()}`);
}, 2000);

// usando setTimeout para execução do código uma vez até um determinado período. No caso ela pára a execução da exibição do horário
setTimeout( function (){
    // pára a execução do timer
    clearInterval(horario);
}, 10500);

// exibindo uma mensagem na tela após execução do 'horario'
setTimeout (() =>{
    console.log('Exibição do horário STOPADO');
},10600);