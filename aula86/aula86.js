// promises
// criando uma função que exibe uma msg em tempo aleatório

/* promise (simula função callback[não recomendado])
Envolver a função, que sabemos a aleatoriedade de retorno, na promise
*/
function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if (msg === 'ERROR') reject('Fail to get datas');
        setTimeout(() => {
            resolve(msg);
        }, tempo);
    });

};
function random(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
};

esperaAi('Connecting to BD...', random(1, 3))
.then(resposta => {
    console.log(resposta);
    return esperaAi('ERROR', random(1,3));
})
.then(resposta => {
    console.log(resposta);
    return esperaAi('Using datas...', random(1, 3))
}).then(resposta =>{
    console.log(resposta);
})
.catch(e => {console.log('ERRO: ', e)});


console.log('Others system features');