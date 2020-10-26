// métodos úteis para Promises
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
function random(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
};

// Promise.all Promise.race Promise.resolve Promise.reject
// Ex: Eu fazendo tarefas e outras pessoas executando tarefas que não sei qt tempo levarão
const promises = [
    esperaAi('Estou estudando', random(1, 3)),
    esperaAi('Granola foi no centro com a sogra', random(2, 5)),
    esperaAi('Davi está fazendo tarefa', random(1, 3)),
    esperaAi('Ordem no mercado encerrada', random(2, 3)),
    // comentado para testar race -> esperaAi('ERROR', random(1,4)),
    // comentado para testar race -> 'Granola e Davi terminaram. servindo o almoço pronto'
];
// //all => resolve todos promisses, na ordem do array original
// Promise.all(promises)
//     .then(valor => {
//         console.log('TODAS AS TAREFAS CONCLUÍDAS: ' + valor)
//     })
//     .catch(erro => {
//         console.log(erro);
//     })
// console.log();
// //race => retorna a primeira promise resolvida
// Promise.race(promises)
//     .then(valor => {
//         console.log('VENCEDOR É....: ' + valor)
//     })
//     .catch(erro => {
//         console.log(erro);
//     })
// console.log();

// reject => Ex. Função que verifica se já há conexão com BD e retorna os dados
function BDConnect(){
    const connected = true;
    if (connected) {
        // alterar para Promise.resolve e verificar que não passa pelo catch
        return Promise.reject('Returning datas...')
    } else {
        return esperaAi('BD connection sucessfully downloaded and datas returned', random(1,3))
    }
}
BDConnect()
.then(BDdatas => {
    console.log(BDdatas);
})
.catch(e => {console.log('ERROR: ' + e)})