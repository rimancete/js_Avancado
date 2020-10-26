//Async / Await => ajustando exemplo de aula anterior utilizando Async/Await
function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (msg === 'ERROR') {
                reject('CAI NO ERRO');
                return;
            }
            resolve(msg.toUpperCase() + ' - Passei na promise');
        }, tempo);
    });

};
function random(min = 0, max = 3) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
};
// criando Async => envolver num try catch. O await resolve ou rejeita o bloco promise
async function executa() {
    try {
    const fase1 = await esperaAi('Fase 1', random());
    console.log(fase1);
    const fase2 = await esperaAi('Fase 2', random());
    console.log(fase2);
    const fase3 = await esperaAi('Fase 3', random());
    console.log(fase3);
    console.log('Terminamos na fase:', fase3);   
    } catch(e){
        console.log(e);
    }
}
executa();
/*
Promise pendente: Está sendo executada antes de ser chamada
Ex: retirar termo 'await' de alguma das consts

Promise fullfilled -> promise resolvida
Promise reject -> promise rejeitada

*/