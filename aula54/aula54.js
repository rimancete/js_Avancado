//funções de callback => executa um bloco de código após a execução da própria função

// retornando função que executa a n segundos aleatórios, porém um após o outro
//Nesse caso, o setTimeout foi usado para simular um tempo aleatório de execução de uma função
// função geradora de tempo aleatório
function rand(min = 1000, max = 3000){
    const tempo = Math.random() * (max-min)+ min;
    return Math.floor(tempo);
}
// funções
function f1(callback){
    setTimeout(function (){
        console.log('f1');
        // se receber callback, executa callback
        if (callback) callback();

    }, rand());
}
function f2(callback){
    setTimeout(function(){
        console.log('f2');
        // se receber callback, executa callback
        if (callback) callback();

    }, rand())
}
function f3(callback){
    setTimeout(function (){
        console.log('f3');
        // se receber callback, executa callback
        if (callback) callback();

    }, rand())
}
//chamando funções após cada uma finalizar(callbackhell)
f1(f1CallBack);

function f1CallBack (){
    f2(f2CallBack);
}
function f2CallBack (){
    f3(f3CallBack);
}
function f3CallBack (){
    console.log('Olá mundo');
}